"use client";

type Primitive = string | number | boolean | null | undefined;
type AnalyticsParams = Record<string, Primitive>;

type GtagFunction = (command: "event", eventName: string, params?: AnalyticsParams) => void;

export type AnalyticsPageType =
  | "home"
  | "header"
  | "calculator"
  | "guide"
  | "article"
  | "request-advice"
  | "page";

export type AnalyticsBaseContext = {
  pageType: AnalyticsPageType;
  pageSlug?: string;
  pageTitle?: string;
  pageCategory?: string;
  section?: string;
};

type ContentCtaClickPayload = AnalyticsBaseContext & {
  ctaLabel: string;
  destination: string;
  destinationType?: "internal" | "external" | "anchor";
};

type CalculatorPayload = AnalyticsBaseContext & {
  calculatorSlug: string;
  calculatorTitle: string;
  calculatorCategory?: string;
};

type CalculatorResultPayload = CalculatorPayload & {
  resultLabel: string;
  resultValue: string;
};

export type AdviceFormPayload = AnalyticsBaseContext & {
  calculatorName?: string;
  hasCalculationResults?: boolean;
  adviceTopic?: string;
  standalone?: boolean;
};

export type AdviceFormSubmitPayload = AdviceFormPayload & {
  preferredContactMethod?: string;
  preferredTime?: string;
  consent?: boolean;
};

export type AdviceFormErrorPayload = AdviceFormPayload & {
  errorType: string;
};

function getGtag(): GtagFunction | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  return (window as Window & { gtag?: GtagFunction }).gtag;
}

function normalizeBaseContext(context: AnalyticsBaseContext): AnalyticsParams {
  return {
    page_type: context.pageType,
    page_slug: context.pageSlug ?? "",
    page_title: context.pageTitle ?? "",
    page_category: context.pageCategory ?? "",
    section: context.section ?? "",
  };
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  const gtag = getGtag();

  if (!gtag) {
    return;
  }

  gtag("event", eventName, params);
}

export function trackContentCtaClick(payload: ContentCtaClickPayload) {
  trackEvent("content_cta_click", {
    ...normalizeBaseContext(payload),
    cta_label: payload.ctaLabel,
    destination: payload.destination,
    destination_type:
      payload.destinationType ??
      (payload.destination.startsWith("#")
        ? "anchor"
        : payload.destination.startsWith("http")
          ? "external"
          : "internal"),
  });
}

export function trackCalculatorStart(payload: CalculatorPayload) {
  trackEvent("calculator_start", {
    ...normalizeBaseContext(payload),
    calculator_slug: payload.calculatorSlug,
    calculator_title: payload.calculatorTitle,
    calculator_category: payload.calculatorCategory ?? "",
  });
}

export function trackCalculatorResult(payload: CalculatorResultPayload) {
  trackEvent("calculator_result_view", {
    ...normalizeBaseContext(payload),
    calculator_slug: payload.calculatorSlug,
    calculator_title: payload.calculatorTitle,
    calculator_category: payload.calculatorCategory ?? "",
    result_label: payload.resultLabel,
    result_value: payload.resultValue,
  });
}

export function trackAdviceFormStart(payload: AdviceFormPayload) {
  trackEvent("advice_form_start", {
    ...normalizeBaseContext(payload),
    calculator_name: payload.calculatorName ?? "",
    has_calculation_results: Boolean(payload.hasCalculationResults),
    advice_topic: payload.adviceTopic ?? "",
    standalone: Boolean(payload.standalone),
  });
}

export function trackAdviceFormSubmit(payload: AdviceFormSubmitPayload) {
  trackEvent("advice_form_submit", {
    ...normalizeBaseContext(payload),
    calculator_name: payload.calculatorName ?? "",
    has_calculation_results: Boolean(payload.hasCalculationResults),
    advice_topic: payload.adviceTopic ?? "",
    standalone: Boolean(payload.standalone),
    preferred_contact_method: payload.preferredContactMethod ?? "",
    preferred_time: payload.preferredTime ?? "",
    consent: Boolean(payload.consent),
  });
}

export function trackAdviceFormSuccess(payload: AdviceFormPayload & { preferredContactMethod?: string }) {
  trackEvent("advice_form_success", {
    ...normalizeBaseContext(payload),
    calculator_name: payload.calculatorName ?? "",
    has_calculation_results: Boolean(payload.hasCalculationResults),
    advice_topic: payload.adviceTopic ?? "",
    standalone: Boolean(payload.standalone),
    preferred_contact_method: payload.preferredContactMethod ?? "",
  });
}

export function trackAdviceFormError(payload: AdviceFormErrorPayload) {
  trackEvent("advice_form_error", {
    ...normalizeBaseContext(payload),
    calculator_name: payload.calculatorName ?? "",
    has_calculation_results: Boolean(payload.hasCalculationResults),
    advice_topic: payload.adviceTopic ?? "",
    standalone: Boolean(payload.standalone),
    error_type: payload.errorType,
  });
}
