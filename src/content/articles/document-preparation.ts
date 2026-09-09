import type { Resource } from "@/lib/resource-types";

const organiseSlug = "how-to-organise-pdf-documents-for-a-mortgage-application";
const compressSlug = "mortgage-document-upload-too-large-how-to-reduce-pdf-file-size";
const expatSlug = "preparing-an-expat-mortgage-document-pack";
const selfEmployedSlug = "how-to-organise-self-employed-mortgage-paperwork";
const applicationSource = {
  label: "MoneyHelper: how to apply for a mortgage",
  href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home/how-to-apply-for-a-mortgage",
};

type DocumentArticle = Omit<Resource, "kind" | "published" | "updated" | "readTime">;

const posts: DocumentArticle[] = [
  {
    slug: organiseSlug,
    topicSlug: "first-time-buyers",
    category: "Mortgage preparation",
    title: "How to organise PDF documents for a mortgage application",
    description: "A practical workflow for naming, ordering and checking mortgage PDFs, with examples for bank statements, payslips and deposit records.",
    keywords: ["organise mortgage documents", "mortgage PDF documents", "merge mortgage documents"],
    relatedCalculatorSlug: "mortgage-affordability",
    authorityLinks: [applicationSource],
    internalLinks: [
      { label: "Read the first-time buyer guide", href: "/guides/first-time-buyer-guide" },
      { label: "Fix a PDF that exceeds an upload limit", href: `/blogs/${compressSlug}` },
      { label: "Organise an expat document pack", href: `/blogs/${expatSlug}` },
      { label: "Organise self-employed paperwork", href: `/blogs/${selfEmployedSlug}` },
    ],
    sections: [
      {
        heading: "Start with the request, then organise the files",
        paragraphs: [
          "A folder full of documents is easier to use when each file has a clear purpose. Before changing any PDFs, get the document request from your adviser or lender. Confirm the periods required, accepted formats, upload limits and whether documents should stay separate. Those instructions determine how you prepare the pack.",
          "MoneyHelper lists identity, income, bank and deposit evidence among the documents that may be requested. The exact requirements vary. This article covers organising the files you have been asked for; it is not a universal application checklist.",
        ],
      },
      {
        heading: "Keep an originals folder and a sharing folder",
        paragraphs: [
          "Save the original downloads in one folder and prepare copies in another. That gives you a reliable starting point if a combined file has the wrong order or a compressed scan becomes difficult to read. Avoid overwriting the only copy of a statement.",
          "Within each folder, separate identity, income, bank statements and deposit evidence. For a joint application, distinguish the applicants in your own filing system so that two similarly named payslips do not get mixed up. Only send the items requested through the recipient's agreed channel.",
        ],
      },
      {
        heading: "Use names that identify the document and its period",
        paragraphs: [
          "Choose one naming pattern and use it throughout. A year-month date helps files sort chronologically. For example, Applicant-A_Payslip_2026-08.pdf is easier to recognise than Scan-final-new.pdf. Avoid putting full account numbers, passport numbers or passwords in filenames.",
          "Use the period actually covered by the document, rather than the date you downloaded it. If a statement spans two months, include both dates. A short index can record the filename, document period and whether it is ready or still missing.",
        ],
        bullets: [
          "Applicant-A_Payslip_2026-08.pdf",
          "Applicant-A_Current-account_2026-07-15_to_2026-08-14.pdf",
          "Deposit_Savings-statement_2026-08.pdf",
        ],
      },
      {
        heading: "Combine files only when a combined document is wanted",
        paragraphs: [
          "If the recipient wants one file containing several statements, arrange complete statements in the requested order and merge copies. If the portal has separate spaces for each month or document type, keep them separate. A single large PDF is not automatically a better submission.",
          "PDF-Lab's merge tool offers an optional local-processing mode. Select that mode if you want to use the supported browser workflow without uploading files. Check the selected mode before processing; do not assume that every PDF tool operates locally.",
        ],
        documentTools: {
          introduction: "When the requested pack needs combining or ordering,",
          links: [
            { label: "Merge PDFs", href: "https://pdf-lab.com/merge/", description: "to combine the requested files into a single PDF." },
            { label: "Rearrange PDF pages", href: "https://pdf-lab.com/rearrange", description: "to correct page order while retaining the complete documents." },
          ],
        },
      },
      {
        heading: "Check the finished pack before sending it",
        paragraphs: [
          "Open the output file rather than relying on the success message from a tool. Check the first and last page of each document, all statement periods and the page count against the originals. Look for missing reverse sides, duplicate months or pages turned sideways.",
          "Do not edit balances, dates or transaction descriptions, or remove information simply because it seems irrelevant. If there is an error in an original record, ask its issuer how to correct it. Keep explanations in a separate note rather than altering the evidence.",
        ],
        bullets: [
          "Names, dates, figures and small print remain readable.",
          "Every requested document and page is included.",
          "The file opens and meets the stated size and format rules.",
          "The sharing folder contains only the versions you intend to send.",
        ],
      },
      {
        heading: "Record what you shared",
        paragraphs: [
          "Keep a simple submission note with the date, filenames and the recipient or portal used. If an updated statement is requested later, you can identify what changed without resending a collection of almost identical files. A successful upload confirms delivery to the system, not that the evidence has been reviewed or accepted.",
          "Nikera Hub and PDF-Lab are operated by Nikera Technologies. The tools are optional; your adviser or lender decides which documents and formats are suitable.",
        ],
      },
    ],
    faq: [
      { question: "Should I merge every mortgage document into one PDF?", answer: "Only if the recipient requests that format. Separate upload categories or monthly document requests may require separate files." },
      { question: "Can I rename a bank statement PDF?", answer: "A descriptive filename can help organisation. Keep the original file and follow any filename instructions from the recipient; renaming does not change the evidence inside." },
    ],
  },
  {
    slug: compressSlug,
    topicSlug: "mortgage-basics",
    category: "Mortgage preparation",
    title: "Mortgage document upload too large? How to reduce PDF file size",
    description: "Work through PDF upload limits, compression settings and readability checks before resubmitting mortgage documents.",
    keywords: ["mortgage document upload too large", "compress mortgage PDF", "reduce bank statement PDF size"],
    authorityLinks: [applicationSource],
    internalLinks: [
      { label: "Organise your mortgage PDFs", href: `/blogs/${organiseSlug}` },
      { label: "Prepare self-employed records", href: `/blogs/${selfEmployedSlug}` },
      { label: "Read the remortgaging guide", href: "/guides/remortgaging-explained" },
    ],
    sections: [
      {
        heading: "Find out which limit you are hitting",
        paragraphs: [
          "An upload error does not always mean the document needs compressing. Read the message and check whether the portal limits each file, the combined upload size or the number of attachments. Also check that PDF is an accepted format. Renaming another file type with a .pdf extension will not convert it.",
          "For example, a 12 MB PDF will exceed a stated 10 MB per-file limit. But three 4 MB PDFs could each fit while exceeding a 10 MB total limit. These are illustrative limits, not standard mortgage portal rules. Use the actual instructions shown by your recipient.",
        ],
      },
      {
        heading: "Start with the clearest original available",
        paragraphs: [
          "If you photographed or scanned a document that is available as an original PDF, check whether the recipient accepts that original download. It may already be smaller and clearer. Avoid turning a readable PDF into screenshots and rebuilding it: that can introduce more images and make small text harder to inspect.",
          "Save a copy before processing. Check the existing file size and page count, then identify the pages with the smallest text. Those pages are useful for comparing the compressed result with its source. An existing blurred scan needs a better source, not more compression.",
        ],
      },
      {
        heading: "Try a modest compression setting first",
        paragraphs: [
          "PDF-Lab's compression page offers Low, Medium and High settings. The page identifies High as producing smaller files with lower quality. Start with Low, download the result and compare its size with the upload limit. If necessary, try Medium from the original rather than repeatedly compressing an already compressed copy.",
          "The tool uses uploaded files for processing; this is not the optional local mode offered by some other PDF-Lab tools. Review the service's processing information before using it for personal documents, and use the recipient's preferred method if they specify one.",
        ],
        documentTools: {
          introduction: "If file size is the confirmed cause of the upload problem,",
          links: [
            { label: "Compress a PDF", href: "https://pdf-lab.com/compress", description: "and compare the downloaded result with the original before submitting it." },
          ],
        },
      },
      {
        heading: "Check evidence quality, not just megabytes",
        paragraphs: [
          "Open the compressed file at a comfortable reading size and inspect every page. Pay particular attention to decimal points, transaction dates, employer details and any fine print. Compare uncertain characters with the original. A file that uploads successfully can still be unsuitable if the information is illegible.",
          "PDF-Lab notes that image-heavy documents usually shrink more than text-heavy PDFs. There is no guaranteed reduction, so a file already made mostly of efficient text may remain close to its original size. Do not keep increasing compression merely to obtain a smaller number.",
        ],
        bullets: [
          "Confirm the page count matches the original.",
          "Check small figures and text on both light and dark areas.",
          "Make sure no edges, signatures or document references are cropped.",
          "Keep the original and clearly label the sharing copy.",
        ],
      },
      {
        heading: "If it still does not fit, ask for another submission route",
        paragraphs: [
          "If the next compression level makes the file difficult to read, stop and ask the adviser or lender whether they can accept separate complete documents or provide another upload route. Do not remove statement pages to get under the limit. Splitting a pack is only useful when the recipient accepts the resulting parts.",
          "If the file is below the stated limit, note the exact error message and check for password restrictions, an interrupted connection or an unsupported format. Ask the recipient before changing document protection. Do not send sensitive attachments to an unverified address as a workaround.",
        ],
      },
      {
        heading: "Finish with one checked submission",
        paragraphs: [
          "Upload the checked copy through the agreed channel and record the filename and confirmation. Keep track of any replacement upload so the recipient can identify the current version. Compression helps with file handling; it does not resolve missing evidence or determine a mortgage decision.",
          "Nikera Hub and PDF-Lab are operated by Nikera Technologies. You can use another suitable tool or the recipient's own process; the important result is a complete, readable document in the requested format.",
        ],
      },
    ],
    faq: [
      { question: "Will compression always make a PDF small enough?", answer: "No. Results depend on the content and the required limit. If a readable copy still exceeds the limit, ask the recipient for another submission option." },
      { question: "Can I delete bank statement pages to reduce file size?", answer: "Do not omit pages from requested evidence just to meet a file limit. Ask whether the recipient accepts separate complete documents or another upload route." },
    ],
  },
  {
    slug: expatSlug,
    topicSlug: "cross-border-income",
    category: "Expat mortgages",
    title: "Preparing an expat mortgage document pack: a practical filing guide",
    description: "Organise overseas records by applicant, currency and period, and keep translations and transfer evidence easy to trace.",
    keywords: ["expat mortgage document pack", "organise overseas mortgage documents", "expat mortgage paperwork"],
    relatedCalculatorSlug: "mortgage-affordability",
    authorityLinks: [applicationSource],
    internalLinks: [
      { label: "Read the expat mortgage documents checklist", href: "/blogs/expat-mortgage-documents-checklist-for-uk-lenders" },
      { label: "Read the expat and NRI mortgage guide", href: "/guides/uk-expat-and-nri-mortgage-guide" },
      { label: "Review deposit-source preparation", href: "/blogs/expat-deposit-source-checklist" },
      { label: "Troubleshoot oversized PDF uploads", href: `/blogs/${compressSlug}` },
    ],
    sections: [
      {
        heading: "Build a filing system around the requested evidence",
        paragraphs: [
          "An overseas document pack can contain different date formats, currencies and versions of the same person's name. The practical task is to make each record easy to locate without changing what it says. Start with your adviser's request and use the existing expat checklist to discuss gaps, rather than assuming every document mentioned online is needed.",
          "Confirm who will receive the files, which periods are required and whether the recipient needs originals, certified copies or translations. This filing guide does not establish those requirements. Keep a short list of questions awaiting an answer so that an uncertain item is not mistaken for a completed one.",
        ],
      },
      {
        heading: "Create an index before merging anything",
        paragraphs: [
          "Make an index with one row per requested document. Record the applicant, issuer, document type, period, original currency, language, filename and status. This can stay as a simple spreadsheet or note; ask whether the recipient would find a copy useful.",
          "For example, Applicant-A_Employer_Payslip_AED_2026-08.pdf distinguishes an overseas payslip from a UK account statement for the same month. Use a consistent date format in filenames, while preserving the date as printed inside the original. Avoid full account or identity numbers in filenames.",
        ],
        bullets: [
          "Requested: the document is on the agreed list.",
          "Received: the original is saved but still needs checking.",
          "Query outstanding: a period, translation or format needs clarification.",
          "Ready and sent: the checked version and submission date are recorded.",
        ],
      },
      {
        heading: "Keep related records connected without rewriting them",
        paragraphs: [
          "Store payslips and the relevant account records in their own groups, and use the index to show the periods they cover. If a payment date differs from the payslip date, record the question separately. Do not change either document to make the dates match.",
          "For deposit transfers, organise the requested source statement, transfer record and receiving statement in sequence. A short factual note can identify which records relate to the same transfer. Keep original currency amounts visible; any explanatory conversion should be clearly separate from the source evidence and should not replace the recipient's assessment.",
        ],
      },
      {
        heading: "Pair translations with the correct originals",
        paragraphs: [
          "Where the recipient requests a translation, keep it next to the matching original using a shared filename reference, such as Document-07_Original.pdf and Document-07_Translation.pdf. Record any requested certification separately. Do not assume that translating text with an online tool satisfies a recipient's requirements.",
          "If a name is written differently across records, flag that discrepancy to the adviser and ask what supporting explanation is needed. Editing a name on a scan would alter the evidence rather than explain the difference. The same approach applies to unfamiliar calendars or address formats.",
        ],
      },
      {
        heading: "Assemble only the packs the recipient requests",
        paragraphs: [
          "When a combined pack is requested, work from copies and put complete documents in the order agreed. Keep original-and-translation pairs together where requested. Review the output page by page against the index, especially when several records look similar.",
          "A useful final review asks whether another person could locate a named document without your help. Clear filenames and a small index often do more for that task than a large PDF containing every file you have collected.",
        ],
        documentTools: {
          introduction: "For a requested combined pack of overseas records,",
          links: [
            { label: "Merge PDFs", href: "https://pdf-lab.com/merge/", description: "to combine the agreed documents while retaining the separate originals." },
            { label: "Rearrange PDF pages", href: "https://pdf-lab.com/rearrange", description: "to place complete records in the recipient's requested sequence." },
          ],
        },
      },
      {
        heading: "Manage follow-up requests across time zones",
        paragraphs: [
          "Keep one dated list of outstanding items and identify who can obtain each one: you, an employer, a bank or a translator. When a replacement arrives, mark the earlier sharing copy as superseded in your index. This helps avoid different versions being sent during separate email exchanges.",
          "Nikera Hub and PDF-Lab are operated by Nikera Technologies. PDF tools help organise copies; they do not certify, translate or establish the acceptability of the underlying mortgage evidence.",
        ],
      },
    ],
    faq: [
      { question: "Should I convert foreign-currency figures into pounds on a document?", answer: "Keep original figures intact. Put any requested explanation in a separate note and ask the adviser how currency information should be presented." },
      { question: "Does combining an original and a translation certify the document?", answer: "No. Merging changes file organisation only. Confirm translation and certification requirements with the recipient." },
    ],
  },
  {
    slug: selfEmployedSlug,
    topicSlug: "self-employed",
    category: "Self-employed mortgages",
    title: "How to organise self-employed mortgage paperwork before speaking to an adviser",
    description: "Separate tax years, accounting periods and personal records, with a practical folder structure for your first adviser conversation.",
    keywords: ["organise self-employed mortgage paperwork", "self-employed mortgage records", "SA302 mortgage documents"],
    relatedCalculatorSlug: "mortgage-affordability",
    authorityLinks: [
      applicationSource,
      { label: "GOV.UK: get your SA302 tax calculation", href: "https://www.gov.uk/sa302-tax-calculation" },
    ],
    internalLinks: [
      { label: "Read what lenders check in self-employed documents", href: "/blogs/self-employed-mortgage-documents-what-lenders-usually-check" },
      { label: "Read the self-employed mortgage guide", href: "/guides/self-employed-mortgage-guide" },
      { label: "Follow the general PDF filing workflow", href: `/blogs/${organiseSlug}` },
      { label: "Reduce an oversized PDF", href: `/blogs/${compressSlug}` },
    ],
    sections: [
      {
        heading: "Prepare a clear inventory for the first conversation",
        paragraphs: [
          "Before speaking to an adviser, list the records you already have and those you would need to request. Note your business structure and the periods each record covers. The aim is to make that first conversation practical, without assuming that every self-employed applicant needs the same evidence.",
          "Use the existing self-employed documents guide for the broader discussion about what a lender may assess. This article focuses on filing and checking the records. Your adviser can confirm the required periods and formats, and your accountant can explain the figures and any unfinished records.",
        ],
      },
      {
        heading: "Separate personal records from each business",
        paragraphs: [
          "Create separate groups for personal tax documents, personal bank records, business accounts, business bank records and deposit evidence. If you have more than one business, keep a separate folder for each. A company statement and a personal statement for the same month should not be interchangeable in the filing system.",
          "Keep originals outside the folder used for sharing. For a joint application, distinguish each applicant's personal records. Use clear labels such as Applicant-A_Tax-calculation_2024-25.pdf or Business-A_Accounts_year-ended_2025-12-31.pdf rather than a filename that only says Income.pdf.",
        ],
      },
      {
        heading: "Match tax calculations and overviews by tax year",
        paragraphs: [
          "GOV.UK explains that an SA302 tax calculation and a tax year overview may be requested as income evidence for a self-employed mortgage application. Its guidance also says to check whether the mortgage provider accepts documents you have printed yourself. Use the linked HMRC guidance or ask your accountant how to obtain the appropriate records.",
          "File a calculation and overview under the tax year they describe. Do not group documents only by download date: records downloaded on the same day can refer to different years. Check the applicant name and year on each file before marking that pair as ready.",
        ],
        bullets: [
          "Record the tax year shown on each document.",
          "Check that a calculation and overview relate to the same applicant and year.",
          "Mark missing or amended records clearly in your inventory.",
          "Ask the adviser which years and document versions are required.",
        ],
      },
      {
        heading: "Label accounting periods separately",
        paragraphs: [
          "An accounting period shown on business accounts may differ from the tax-year label on a personal record. Copy the actual period into the filename and index rather than making the labels appear identical. Keep draft accounts clearly distinguished from final accounts, and ask which version the adviser wants.",
          "If the figures across accounts, tax records and bank activity need explanation, collect questions for your accountant. For example, ask which period a figure covers and whether a document has been amended. Do not edit a PDF to reconcile different figures yourself or describe a draft as final.",
        ],
      },
      {
        heading: "Prepare the sharing copies after the request is confirmed",
        paragraphs: [
          "If your adviser asks for a calculation and overview together, combine the appropriate copies and use a filename that identifies the year. Otherwise retain the separate files. Keep personal and business records in the categories requested instead of creating one large bundle that obscures their purpose.",
          "When a file exceeds an upload limit, compare any compressed copy with the original. Check small figures, minus signs, dates and the page count. A document that is smaller but harder to read is not ready to send.",
        ],
        documentTools: {
          introduction: "Once you know which records should be grouped or reduced in size,",
          links: [
            { label: "Merge PDFs", href: "https://pdf-lab.com/merge/", description: "to assemble the specific records your adviser wants in one file." },
            { label: "Compress a PDF", href: "https://pdf-lab.com/compress", description: "if it exceeds the upload limit, then check all figures remain readable." },
          ],
        },
      },
      {
        heading: "Bring the inventory and unresolved questions",
        paragraphs: [
          "Your first conversation can start with a short summary of which records are final, which are missing and which need clarification. Ask how the documents should be delivered and whether anything needs updating before an application. Keep a dated list of what was sent so a later request for another period is easy to handle.",
          "Nikera Hub and PDF-Lab are operated by Nikera Technologies. File organisation helps you find and share records; it does not determine which income a lender will use or how much you can borrow.",
        ],
      },
    ],
    faq: [
      { question: "Should accounts and tax documents all use the same year label?", answer: "Use the actual period printed on each record. Accounting periods and personal tax years can differ; an index can make those differences clear." },
      { question: "Can a PDF tool fix discrepancies in my accounts?", answer: "No. Ask your accountant or the document issuer about discrepancies. PDF tools should only help organise sharing copies, not alter the financial evidence." },
    ],
  },
];

export const documentPreparationArticles: Resource[] = posts.map((post) => {
  const text = post.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]).join(" ");
  return {
    ...post,
    kind: "article",
    published: "2026-09-09",
    updated: "2026-09-09",
    readTime: `${Math.max(1, Math.ceil(text.split(/\s+/).length / 200))} min read`,
  };
});
