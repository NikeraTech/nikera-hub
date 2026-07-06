# Hub Analytics Measurement Plan

This document defines the current GA4 custom event schema for Nikera Hub.

The goal is to keep reporting stable as content, calculators and lead flows expand.

## Core principles

- Use a consistent event shape across page types
- Prefer a small number of reusable events over one-off event names
- Capture enough context to analyse conversion paths by page type, page slug, section and topic
- Keep the implementation compatible with a future CRM or partner-allocation flow

## Event names

### 1. `content_cta_click`

Tracks meaningful CTA clicks across homepage, articles, guides, calculators and shared UI areas.

Expected parameters:

- `page_type`
- `page_slug`
- `page_title`
- `page_category`
- `section`
- `cta_label`
- `destination`
- `destination_type`

Typical uses:

- Which CTA blocks drive the most action
- Which articles or guides push people into calculators
- Which pages drive advice requests
- Whether Nikera Flow promo placements are working

### 2. `calculator_start`

Tracks the first meaningful interaction with a calculator after the default state.

Expected parameters:

- `page_type`
- `page_slug`
- `page_title`
- `page_category`
- `section`
- `calculator_slug`
- `calculator_title`
- `calculator_category`

Typical uses:

- Calculator engagement rate
- Which calculator pages attract starts but not advice requests
- Funnel entry point analysis

### 3. `calculator_result_view`

Tracks an updated illustrative result after a calculator interaction.

Expected parameters:

- `page_type`
- `page_slug`
- `page_title`
- `page_category`
- `section`
- `calculator_slug`
- `calculator_title`
- `calculator_category`
- `result_label`
- `result_value`

Typical uses:

- Starts vs results completion
- Which calculator types produce most downstream advice intent
- Top result journeys by tool

### 4. `advice_form_start`

Tracks first interaction with the professional advice form.

Expected parameters:

- `page_type`
- `page_slug`
- `page_title`
- `page_category`
- `section`
- `calculator_name`
- `has_calculation_results`
- `advice_topic`
- `standalone`

Typical uses:

- Advice-form engagement rate by page type
- Which content clusters create advice intent
- Calculator-assisted vs non-calculator-assisted form starts

### 5. `advice_form_submit`

Tracks a valid advice form submission attempt.

Expected parameters:

- All `advice_form_start` parameters
- `preferred_contact_method`
- `preferred_time`
- `consent`

Typical uses:

- Form completion rate
- Preferred channel mix
- Advice demand by topic

### 6. `advice_form_success`

Tracks a successful backend response after submit.

Expected parameters:

- `page_type`
- `page_slug`
- `page_title`
- `page_category`
- `section`
- `calculator_name`
- `has_calculation_results`
- `advice_topic`
- `standalone`
- `preferred_contact_method`

Typical uses:

- True lead generation count
- Success rate by page and topic
- Lead quality segmentation by source

### 7. `advice_form_error`

Tracks submit-blocking failures.

Expected parameters:

- `page_type`
- `page_slug`
- `page_title`
- `page_category`
- `section`
- `calculator_name`
- `has_calculation_results`
- `advice_topic`
- `standalone`
- `error_type`

Typical uses:

- Duplicate submit suppression
- API or validation issues
- Troubleshooting drop-off in the lead funnel

## Recommended GA4 explorations

### Funnel 1 — Content to lead

1. `content_cta_click`
2. `advice_form_start`
3. `advice_form_submit`
4. `advice_form_success`

Break down by:

- `page_type`
- `page_slug`
- `page_category`
- `section`

### Funnel 2 — Calculator to lead

1. `calculator_start`
2. `calculator_result_view`
3. `content_cta_click` where destination is `#professional-advice`
4. `advice_form_start`
5. `advice_form_success`

Break down by:

- `calculator_slug`
- `calculator_category`
- `advice_topic`

### Funnel 3 — Homepage routing

Analyse `content_cta_click` from:

- `section = hero-card`
- `section = market-context`
- `section = advice-card`
- `section = newsletter`

Use this to decide which homepage actions deserve stronger prominence.

## Naming rules for future events

If new tracking is added:

- Reuse the existing event names where possible
- Keep parameter names snake_case
- Always include `page_type`
- Include `page_slug` for page-specific events
- Use `section` to identify placement instead of creating new event names

## Future expansion

When Nikera Flow or CRM allocation is added, the next useful events are:

- `lead_allocated`
- `lead_qualified`
- `lead_contacted`
- `lead_converted`

Those should preserve the same source context fields so attribution remains consistent from first click to business outcome.
