// Source of truth: ChatSeller Product Plans, Pricing & Commercialisation
// Framework (Apt Intel). Two customer-facing plans — Pro and Max. `monthly`
// is the reference anchor; longer commitments discount off it by the fixed
// ladder in BILLING_CYCLES (quarterly −5%, bi-annual −10%, annual −20%).

export const BILLING_CYCLES = [
  { key: 'monthly', label: 'Monthly', months: 1, discount: 0 },
  { key: 'quarterly', label: 'Quarterly', months: 3, discount: 0.05, note: 'Save 5%' },
  { key: 'biannual', label: 'Bi-annual', months: 6, discount: 0.10, note: 'Save 10%' },
  { key: 'annual', label: 'Annual', months: 12, discount: 0.20, note: 'Best value — save 20%' },
];

export function cyclePrice(monthly, months, discount) {
  return Math.round(monthly * months * (1 - discount));
}

// Formats a naira amount with thousands separators, no decimals.
export function naira(n) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export const PLANS = [
  {
    plan: 'Pro',
    monthly: 40000,
    tagline: 'Your AI Sales Assistant',
    desc: 'For growing SMEs and lean teams. A genuinely complete AI sales and support assistant — not a stripped-back starter.',
    features: [
      '1,500 AI conversations / month',
      '2 staff accounts',
      '500 MB knowledge storage',
      'Catalogue up to 100 items',
      'AI Sales & Support assistant',
      'CRM, orders & booking requests',
      'Paystack + offline payment verification',
      'Human takeover & escalation',
      'Conversation, commerce & CRM analytics',
      'Referral-source attribution',
      'AI industry & business recommendations',
    ],
    cta: 'Start Free Trial',
    variant: 'ghost',
  },
  {
    plan: 'Max',
    monthly: 70000,
    tagline: 'Your AI Sales & Business Intelligence Platform',
    desc: 'For established SMEs and active sales teams whose customer volume and headcount have outgrown a basic assistant.',
    features: [
      '5,000 AI conversations / month',
      '5 staff accounts',
      '2 GB knowledge storage',
      'Catalogue up to 250 items',
      'Everything in Pro, plus:',
      'Enhanced AI business & industry intelligence',
      'More room for the team around escalations',
      'Headroom for high-growth & seasonal spikes',
    ],
    cta: 'Start Free Trial',
    variant: 'primary',
    featured: true,
    ribbon: 'Most Popular',
  },
];
