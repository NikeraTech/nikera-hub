type BankSeriesCode = "IUDBEDR" | "IUMBV34" | "IUMBV42";

export type MarketFigure = {
  label: string;
  value: number;
  asOf: string;
  series: BankSeriesCode;
  href: string;
  description: string;
  contextHref: string;
  contextLabel: string;
};

export type MarketSnapshot = {
  figures: MarketFigure[];
};

const BOE_CSV_ENDPOINT =
  "https://www.bankofengland.co.uk/boeapps/database/_iadb-fromshowcolumns.asp";
const DISPLAY_DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const SERIES_META: Record<
  BankSeriesCode,
  Omit<MarketFigure, "value" | "asOf">
> = {
  IUDBEDR: {
    label: "Official Bank Rate",
    series: "IUDBEDR",
    href: "https://www.bankofengland.co.uk/boeapps/database/fromshowcolumns.asp?SeriesCodes=IUDBEDR&UsingCodes=Y&VPD=Y&VFD=N",
    description: "Latest official Bank Rate published by the Bank of England.",
    contextHref: "/blogs/understanding-mortgage-rates",
    contextLabel: "See what this means",
  },
  IUMBV34: {
    label: "2-year fixed · 75% LTV",
    series: "IUMBV34",
    href: "https://www.bankofengland.co.uk/boeapps/database/fromshowcolumns.asp?SeriesCodes=IUMBV34&UsingCodes=Y&VPD=Y&VFD=N",
    description:
      "Quoted 2-year fixed mortgage rate for owner-occupied lending at 75% LTV.",
    contextHref: "/blogs/five-remortgaging-costs",
    contextLabel: "Compare remortgage costs",
  },
  IUMBV42: {
    label: "5-year fixed · 75% LTV",
    series: "IUMBV42",
    href: "https://www.bankofengland.co.uk/boeapps/database/fromshowcolumns.asp?SeriesCodes=IUMBV42&UsingCodes=Y&VPD=Y&VFD=N",
    description:
      "Quoted 5-year fixed mortgage rate for owner-occupied lending at 75% LTV.",
    contextHref: "/guides/remortgaging-explained",
    contextLabel: "Understand fixed-rate choices",
  },
};

function formatBoEDate(date: Date) {
  return `${String(date.getUTCDate()).padStart(2, "0")}/${date.toLocaleString("en-GB", {
    month: "short",
    timeZone: "UTC",
  })}/${date.getUTCFullYear()}`;
}

function parseBoEDate(value: string) {
  const match = value.trim().match(/^(\d{2}) ([A-Za-z]{3}) (\d{4})$/);

  if (!match) {
    return null;
  }

  const [, day, month, year] = match;
  const monthIndex = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].indexOf(month);

  if (monthIndex === -1) {
    return null;
  }

  return new Date(Date.UTC(Number(year), monthIndex, Number(day)));
}

function buildBoEUrl() {
  const now = new Date();
  const from = new Date(Date.UTC(now.getUTCFullYear() - 2, now.getUTCMonth(), now.getUTCDate()));
  const params = new URLSearchParams({
    "csv.x": "yes",
    Datefrom: formatBoEDate(from),
    Dateto: formatBoEDate(now),
    SeriesCodes: "IUDBEDR,IUMBV34,IUMBV42",
    CSVF: "TN",
    UsingCodes: "Y",
    VPD: "Y",
    VFD: "N",
  });

  return `${BOE_CSV_ENDPOINT}?${params.toString()}`;
}

export async function getMarketSnapshot(): Promise<MarketSnapshot | null> {
  try {
    const response = await fetch(buildBoEUrl(), {
      next: { revalidate: 21600 },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return null;
    }

    const csv = await response.text();
    const lines = csv
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length < 2) {
      return null;
    }

    const latestBySeries = new Map<BankSeriesCode, { value: number; asOf: string }>();

    for (const line of lines.slice(1)) {
      const [rawDate, rawBankRate, rawTwoYear, rawFiveYear] = line.split(",");
      const parsedDate = parseBoEDate(rawDate ?? "");

      if (!parsedDate) {
        continue;
      }

      const asOf = parsedDate.toISOString().slice(0, 10);
      const rowEntries: Array<[BankSeriesCode, string | undefined]> = [
        ["IUDBEDR", rawBankRate],
        ["IUMBV34", rawTwoYear],
        ["IUMBV42", rawFiveYear],
      ];

      for (const [series, rawValue] of rowEntries) {
        if (!rawValue) {
          continue;
        }

        const value = Number(rawValue.replace(/"/g, "").trim());

        if (!Number.isFinite(value) || value < 0 || value > 25) {
          continue;
        }

        latestBySeries.set(series, { value, asOf });
      }
    }

    const figures = (Object.keys(SERIES_META) as BankSeriesCode[])
      .map((series) => {
        const latest = latestBySeries.get(series);

        if (!latest) {
          return null;
        }

        return {
          ...SERIES_META[series],
          ...latest,
        };
      })
      .filter((figure): figure is MarketFigure => figure !== null);

    return figures.length === 3 ? { figures } : null;
  } catch {
    return null;
  }
}

export function formatMarketDate(isoDate: string) {
  return DISPLAY_DATE.format(new Date(`${isoDate}T00:00:00Z`));
}
