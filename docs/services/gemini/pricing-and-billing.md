# Gemini / Pricing And Billing

Last verified: 2026-04-26

## Summary

This page separates Gemini API billing from consumer Gemini app subscriptions. The API has official billing-tier documentation; consumer app subscription facts should only be added when a stable Google source is recorded in the source registry.

## Plan And Price Table

| Plan / Tier | Price | Who it is for | Included benefits | Usage / limits | Billing notes | Official source | Last checked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini API Free Tier | $0 for eligible free-tier usage. | Developers starting with Gemini API or Google AI Studio without enabling paid billing. | Access to certain Gemini API and AI Studio models up to model-specific free-tier rate limits. | Free-tier availability differs by model and region. New accounts begin on Free Tier. | No paid billing account is required for free-tier use. A project can return to Free Tier by disabling billing. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Gemini API Tier 1 Pay-as-you-go | Pay for usage through a linked billing account; Google lists a $250 billing tier cap. | Developers who need higher rate limits, advanced models, or paid-services data handling. | Paid tier access after linking billing and setting up required payment flow. | Tier 1 qualification requires setting up and linking an active billing account. | Upgrading from Free Tier requires setting up billing in Google AI Studio. Some users may need to prepay; the minimum credit purchase documented by Google is $10. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Gemini API Tier 2 Pay-as-you-go | Pay for usage; Google lists a $2,000 billing tier cap. | Accounts with paid usage history that qualify for higher limits. | Higher billing tier based on payment history. | Qualification: paid $100 plus 3 days from first successful payment. | Usage tier is determined at the billing-account level. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Gemini API Tier 3 Pay-as-you-go | Pay for usage; Google lists a $20,000 to $100,000+ billing tier cap. | Accounts with larger paid usage history and account age. | Highest documented billing tier in the billing guide. | Qualification: paid $1,000 plus 30 days from first successful payment. Some accounts may have the option to switch to postpay. | Tier, rate limits, and caps are determined at the billing-account level. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Prepay billing plan | Costs are deducted from prepaid credits. | New or existing paid users assigned to prepaid billing. | Users buy credits before usage; costs are deducted near real time. | When prepaid balance reaches $0, API keys in projects linked to that billing account stop working. | Unused prepaid credits expire after 12 months and are non-refundable except after switching to Postpay. Minimum purchase is documented as $10; maximum prepay amount is $5,000. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Postpay billing plan | Costs accrue and are charged at the end of the month or at a spend cap. | Paid users whose account history qualifies for postpay. | Standard Cloud Billing-style payment timing for Gemini API usage. | Spend cap is automatically assigned based on account tier. | After switching a Cloud Billing account to Postpay, Google says it cannot be moved back to Prepay. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Consumer Gemini app subscription | needs-recheck | Users subscribing to the Gemini consumer app, not the API. | Do not copy API facts into the app subscription row. | App limits and API limits are separate. | Add price and plan rows only after a stable official Google app plan source is registered. | [Gemini app](https://gemini.google.com/) and [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |

## Billing Facts

| Fact | Source | Last checked |
| --- | --- | --- |
| Gemini API pricing is based on input token count, output token count, cached token count, and cached token storage duration. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Google AI Studio usage remains free unless users link a paid API key for access to paid features. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Failed requests with 400 or 500 errors are not charged for tokens used, but still count against quota. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| GetTokens API requests are not billed and do not count against inference quota. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |
| Google Cloud welcome credits cannot be used for Gemini API or AI Studio usage under the current billing guide. | [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing/) | 2026-04-26 |

## Additional Source-Backed Facts

- Gemini API pricing is documented on the official pricing page. (Gemini API pricing)
