# dAIRE — Design System

Enterprise maritime intelligence platform. This design system is the source of truth for building interfaces, marketing pages and assets in the brand.

> **Brand.** Company is **DAire Pte. Ltd.**; the product is **dAIRE** — lowercase d, uppercase AIRE, as it appears in the supplied console screenshots. Never uppercase it to "DAIRE". No logo file has been supplied: the screenshots show a small diamond glyph before the wordmark, which is deliberately **not** reproduced. Send the real SVG.

## 1. Product & company context

dAIRE unifies vessel, machinery, voyage, maintenance, weather and operational data so shore teams can detect developing risk, reduce unplanned downtime, and act on the next corrective step. It must read as a **trusted digital bridge**: precise, calm under pressure, technically credible, built for people responsible for real vessels. It is explicitly *not* a consumer app, a crypto product, a generic analytics dashboard, or a science-fiction control room.

**Audience.** Primary: fleet technical directors, superintendents, reliability engineers, vessel managers, operations leaders. Secondary: shipowners, C-suite buyers, OEM/service partners, class and compliance stakeholders. All are time-poor experts comparing many vessels under uncertainty, where decisions are expensive.

**Brand attributes.** Operational, assured, observant, rigorous, global, quietly advanced.
**Never feel.** Flashy, playful, nautical-themed, militaristic, alarmist, vague, or "AI magical."

**Surfaces represented here**

| Surface | Job | Kit |
| --- | --- | --- |
| Marketing site | In five seconds: what is monitored, which decision improves, why it can be trusted → book a technical demo | `ui_kits/marketing-site/` |
| Fleet console (product) | Fleet overview → vessel detail → anomaly investigation → verified closure | `ui_kits/fleet-console/` |

### Sources given to me

- `uploads/design.md` — "Maritime AI — Design System" (the brief's own working title), a written brand and interaction specification (15 sections: colour tokens, typography, layout, imagery, components, page architecture, product patterns, motion, accessibility, voice, responsive rules, hard constraints). **This was the only source.**
- `uploads/dAIRE-Health-Dashboard.png`, `uploads/dAIRE-Monitoring.png`, `uploads/dAIRE-Predictive.png` — three screenshots of the live dAIRE console (copied to `assets/product-screens/`). These are the only visual ground truth for the product and the wordmark casing.
- No codebase, no repository, no Figma file, no slide deck, no logo files, no font binaries, no photography, no icon assets were supplied.

Consequences of that, all deliberate:

- **No logo.** The wordmark is set in type (`Logotype`); nothing was drawn or reconstructed.
- **Fonts load from the Google Fonts CDN.** The brief specifies Barlow Condensed and IBM Plex Sans/Mono, which are open-source Google families, so no substitution was needed — but there are no `@font-face` rules with local `src:` files, so the compiler reports 0 shipped fonts. Drop `.woff2` files into `assets/fonts/` and rewrite `tokens/fonts.css` to self-host.
- **No photography.** Where the brief asks for documentary maritime imagery, kits show product evidence instead (which the brief prefers anyway) rather than stock stand-ins.
- **Fleet map has no basemap.** `FleetMap` draws a lat/lon graticule and says "basemap omitted" on it; geography was not invented.
- **Icons come from the Lucide CDN** at 1.5px stroke, exactly the set the brief names.
- **No customer logos, certifications, class approvals or savings figures.** Case-study numbers and the pull quote are labelled placeholders.

## 2. Content fundamentals

Write for an experienced operator who will act on what you wrote.

- **Voice:** concise, factual, helpful. Active voice. Name the next step. Sentence case everywhere except short uppercase operational labels.
- **Person:** address the reader as *you* ("Know what your vessels need"); the product refers to itself by name, not "we" ("dAIRE unifies machinery, voyage and maintenance data…"). Never first-person plural marketing swagger.
- **Precision over promise.** Distinguish detection, prediction, diagnosis and recommendation. State uncertainty as a number: *"Likely lubrication degradation · 82% confidence"* — not *"Bearing failure detected"* unless it is confirmed.
- **Preferred vocabulary:** developing fault, evidence, likely cause, confidence, recommended action, last received, operating state, vessel check, closure with outcome.
- **Banned vocabulary:** AI-powered magic, game-changing, seamless, revolutionary, unlock, zero downtime, fully autonomous, 100% accurate, unexplained model jargon.
- **Buttons are verbs with objects:** "Book technical demo", "View fleet case", "Inspect anomaly", "Request vessel check", "Close with outcome". Never "Learn more" when a precise action exists.
- **Alerts answer four questions in order:** what changed · where · why it matters · what to do next.
- **Empty states** name the missing input and the next action: *"ME-1 and AE-2 sensor buses have not reported since deployment. Connect the vessel data link to begin monitoring."*
- **Chart titles state the operational question**, not the metric: *"Is ME-1 exhaust temperature drifting from its baseline?"* not *"Exhaust temperature."*
- **Demo data is labelled as demo data.** Real maritime nouns only — MV Northern Ridge, IMO 9421887, ME-1 cyl 4, TC-A — never "Metric 01."
- **No emoji, ever.** Timestamps always carry a timezone; dates are unambiguous (`12 Mar 2026 14:02 UTC`).

Example hero copy pattern:

> **Eyebrow** Fleet intelligence for technical operations
> **Headline** Know what your vessels need—before downtime decides for you.
> **Support** dAIRE unifies machinery, voyage, maintenance and operational data to detect developing faults, explain likely causes, and recommend the next corrective action.
> **CTA** Book a technical demo · **Secondary** See how it works

## 3. Visual foundations

**The signature idea — the Operational Waterline.** One thin horizontal line per page that behaves like a live signal. Above it: context (vessel, route, weather, operating state). Below it: intelligence (evidence, cause, confidence, recommended action). An amber marker pins the human intervention. It is information structure, never decoration, and it appears **once**.

**Colour.** Product UI is **light beige** for long sessions (`--sand-050` page, `--paper` warm-white cards, `--sand-100` quiet surfaces); marketing may open on a dark "night bridge" hero (`--ink-950`) then return to light. Never an all-black neon experience. Cyan means live data, selection and links — `--signal-cyan` for fills and dark surfaces, `--signal-cyan-dark` for borders, `--signal-cyan-deep` (`--text-link`) for text small enough to need 6:1 on sand. Amber (`--action-amber`) means a human must decide — never decoration. Teal = confirmed healthy, coral = fault/destructive, violet = unclassified/insufficient data. One dominant accent per screen. State surfaces are cool-tinted so severity reads crisply on haze rather than muddying, and each state has a darker `*-text` token for type. Every state colour is paired with an icon and a word; colour is never the only signal. No electric blue/purple gradients, no rainbow series palettes, no translucent glass cards.

**Text colour on beige.** `--text-strong` #071922 headings (15.9:1) · `--text-body` #1E2A2B (13.1:1) · `--text-secondary` #45534F (8.0:1) · `--text-muted` #6E756D (4.9:1) · `--text-link` #06616C (6.1:1) · `--state-action-text` #8A5A0C (5.3:1). Greys are warm-shifted and low-chroma; cool greys look dirty on sand.

**Type.** Barlow Condensed 600 for short decisive headings and KPI figures (tracking −0.02em, sentence case, hero may go uppercase at −0.03em). IBM Plex Sans 400/600 for body and UI, line-height 1.55–1.7, measure capped at 68 characters. IBM Plex Mono for identifiers, timestamps, coordinates, equipment tags, measurements and compact status labels — nothing else. Labels: 11px, 600, 0.06em tracking, uppercase, short metadata only. Table and KPI numbers use tabular figures.

**Layout & spacing.** 12 columns, 1440px max, 32px gutters, 64px outer margins (8/24/24 tablet, 4/16/20 mobile). 4px base unit; rhythm 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Marketing sections breathe 96–144px vertically on desktop, 64–88px on mobile. Product screens are dense but controls never below 40px (44px touch targets). Prefer asymmetric 7/5 or 5/7 splits over centred stacks. Evidence aligns to the grid like an engineering drawing; full-width hairline dividers and grid coordinates (`04 / 09`) carry hierarchy. One intentional edge-to-edge moment per page.

**Backgrounds.** Flat tone, not imagery: Sand page, warm paper cards, Sand-100 quiet surfaces, Night Bridge for authority. Never pure black type on beige and never pure `#FFFFFF` on ink — both surfaces share one paper temperature (`#FFFEFB`). No repeating patterns, no textures, no gradient blobs. The only gradients in the system are legibility protection overlays over photography (`--overlay-image`) and the waterline's sweep highlight.

**Borders, radii, shadows, cards.** Hairline first: 1px `--border-hairline` separates almost everything. Radii: 4px controls, 6px panels, 999px status pills only — never 20–32px "AI SaaS" cards. Shadows are rare and shallow (`--shadow-raised` for a lifted row, `--shadow-overlay` for modals and tooltips only); regions are separated with tone, borders and hierarchy instead. A card = white surface, 1px hairline, 6px radius, optional 2px severity rule on **top** (never a coloured left border), header with object name + status, body of evidence, footer with action or timestamp. Cards must stand for a real object; no bento grids of peer-less content.

**Transparency & blur.** Almost never. Permitted: the dark hero's `rgba(255,255,255,0.08–0.18)` inverse controls, the fleet-map marker plate, modal scrim `rgba(7,25,34,0.52)`. No backdrop blur, no frosted glass.

**Motion.** Purposeful only: reveal cause and effect, freshness, selection, state change. Page entry is one controlled 300–600ms sequence with the waterline resolving into the product view. UI transitions 120–220ms, `--ease-out`, no springy overshoot. Live values update without flashing the whole card. `prefers-reduced-motion` kills every duration in `tokens/motion.css` and the waterline sweep hides itself; meaning survives. No looping waves, orbiting particles, parallax ships or animated gradients.

**Interaction states.** Hover: primary buttons darken to `--ink-950`; secondary gain a darker border plus 4% ink wash; ghost fills with cyan tint; dark-surface controls take an 8% white wash; table rows tint cyan when selected. Press: a 1px downward nudge, no scale bounce. Focus: 2px cyan ring at 2px offset (inputs additionally show a 2px cyan glow). Disabled: 40% opacity, no pointer events. Never hide operational content behind hover.

**Imagery direction (when assets exist).** Documentary maritime detail — bridge teams, engine rooms, machinery inspections, dry docks, shore control rooms, vessels in context. Cool, neutral grade, restrained contrast, no warm sunset filters, no grain effects. Crop for operational detail, scale and human responsibility. Overlays only for legibility. Never container-ship sunsets, handshakes, glowing brains, robots, circuit boards or holograms. Product screenshots and evidence diagrams outrank decorative art.

## 4. Iconography

- **Set:** Lucide, outline only, **1.5px stroke**, square terminals, modest rounding. Sizes 16 / 20 / 24px exclusively.
- **Delivery:** no icon assets were supplied, so Lucide is loaded from CDN — `https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js` — and wrapped by `components/core/Icon.jsx` (`<Icon name="ship" size={20} />`). This is a flagged substitution-by-CDN: if the brand ships its own sprite or icon font, drop it in `assets/icons/` and rewrite `Icon.jsx` internals only.
- **Vocabulary:** literal operational symbols. `ship`, `gauge`, `route`, `wrench`, `shield`, `cloud-sun`, `activity`, `plug`, `clock`, `radio`, `wifi-off`, `triangle-alert`, `octagon-alert`, `circle-help`, `clipboard-check`, `circle-check`, `search`, `filter`, `refresh-cw`.
- **Severity mapping is fixed:** Normal `check` · Watch `eye` · Action `triangle-alert` · Critical `octagon-alert` · Unknown `circle-help`.
- **Never:** mixed filled/outline sets, 3D or gradient icons, emoji, decorative unicode used as iconography (`→` inside body copy is fine as punctuation; `⚠️` is not an icon). Icon-only controls always carry an accessible label.
- No brand illustration system exists; none was invented.

## 5. Index

**Root**

| File | Purpose |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only |
| `tokens/fonts.css` | Font families + Google Fonts import |
| `tokens/colors.css` | Base scale + semantic + severity aliases |
| `tokens/typography.css` | Scale, weights, tracking, measure |
| `tokens/spacing.css` | 4px scale, grid, control heights |
| `tokens/radii.css` | Radii, border and focus-ring widths |
| `tokens/elevation.css` | Shadows, focus ring, protection overlays |
| `tokens/motion.css` | Durations, easings, reduced-motion overrides |
| `tokens/base.css` | Element resets, link colours, `.ds-label` / `.ds-data` helpers |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills wrapper |
| `guidelines/*.card.html` | 20 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `templates/brand-deck/` | 16:9 brand deck template (`BrandDeck.dc.html`) showing the palette in use |
| `ui_kits/website-preview/` | Light blue-grey marketing homepage preview |
| `assets/product-screens/` | Three supplied dAIRE console screenshots (reference) |
| `assets/image-slot.js` | Drop-in image placeholder for kits awaiting real photography |

**Components** (`components/<group>/<Name>.{jsx,d.ts,prompt.md}` + one `@dsCard` HTML per group)

- `core/` — **Button**, **IconButton**, **Icon**, **StatusPill**, **FilterChip**, **Card**, **Panel**, **SectionLabel**
- `forms/` — **FormField**, **TextInput**, **SelectInput**, **Checkbox**, **RadioGroup**, **Switch**
- `data/` — **DataTable**, **KpiStat**, **Sparkline**, **ChartFrame**, **ConfidenceMeter**, **DataFreshness**, **FleetMap**
- `feedback/` — **Alert**, **RecommendationPanel**, **EmptyState**, **Skeleton**, **Tooltip**, **Dialog**
- `navigation/` — **TopNav**, **SideNav**, **Tabs**, **Breadcrumbs**, **VesselIdentity**
- `brand/` — **Logotype**, **Waterline**

The brief had no component library to enumerate, so this set is derived one-for-one from its §7 "Core components" (navigation, buttons, cards and panels, status and alerts, tables, charts, fleet map, forms) plus the §2 signature device and §9 product patterns.

**Intentional additions** (not named in the source, each with a reason)

- **Icon** — a wrapper is needed to enforce the 1.5px Lucide stroke and the 16/20/24 sizes.
- **SectionLabel** — the source's eyebrow + grid-coordinate + hairline treatment recurs on every section; factoring it keeps it consistent.
- **DataFreshness**, **ConfidenceMeter** — the source demands freshness and confidence beside every value and inference; these make that non-optional rather than remembered.
- **Logotype** — a stand-in so no one draws a logo.
- **Skeleton**, **Tooltip**, **Dialog**, **EmptyState** — required by the source's §9 empty/loading/offline rules and its "Acknowledge / Assign / Request vessel check / Close with outcome" actions.

**UI kits**

- `ui_kits/marketing-site/` — homepage following the §8 sequence; see its README.
- `ui_kits/fleet-console/` — fleet overview, vessel detail, anomaly investigation; see its README.

**Not built** (nothing in the source to copy): mobile app screens, email templates, docs site.

## 6. Revision log

**Rev 4 — Sep 2026.** `--slate-500` (`--text-muted`) darkened #62788A → **#4F6475** so 11–12px labels clear AA on both haze surfaces (5.7:1 / 5.3:1); printed contrast figures on the deck and in this readme recomputed against the new backgrounds. Wordmark casing grounded in the supplied screenshots: `Logotype` no longer applies `text-transform: uppercase`, defaults to `dAIRE`, and the placeholder brand name "Maritime AI" was replaced with **dAIRE** across kits, thumbnail and skill.

**Rev 3 — Sep 2026.** Neutral ramp moved from warm sand/beige to a **light greyish blue** (`--haze-050` … `--haze-400`), cards to crisp `#FFFFFF`, text greys cool-shifted to navy/slate (`--slate-900/700/500`), ink deepened toward navy, cyan sharpened (`#17B6CE` / `#0A7F92` / `#05606F`) and state tints re-tinted cool. Token names changed: `--sand-*` → `--haze-*`, `--stone-*` → `--slate-*`. Added `ui_kits/website-preview/`.

**Rev 2 — Sep 2026.** Palette moved from cool fog/mist neutrals to **light beige** (`--sand-*`, `--paper`) with warm-shifted text greys (`--stone-*`), a deepened link cyan, warm-tinted state surfaces and per-state text tokens. Only surface/text/line tokens changed; all 34 components inherit. Product name in the deck is **dAIRE** (DAire Pte. Ltd.), taken from the supplied console screenshots — the wordmark is still type-set, no mark has been drawn.
