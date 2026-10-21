/* @ds-bundle: {"format":4,"namespace":"MaritimeAIDesignSystem_cde923","components":[{"name":"Logotype","sourcePath":"components/brand/Logotype.jsx"},{"name":"Waterline","sourcePath":"components/brand/Waterline.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"FilterChip","sourcePath":"components/core/FilterChip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Panel","sourcePath":"components/core/Panel.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"ChartFrame","sourcePath":"components/data/ChartFrame.jsx"},{"name":"ConfidenceMeter","sourcePath":"components/data/ConfidenceMeter.jsx"},{"name":"DataFreshness","sourcePath":"components/data/DataFreshness.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"FleetMap","sourcePath":"components/data/FleetMap.jsx"},{"name":"KpiStat","sourcePath":"components/data/KpiStat.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"RecommendationPanel","sourcePath":"components/feedback/RecommendationPanel.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"SelectInput","sourcePath":"components/forms/SelectInput.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"VesselIdentity","sourcePath":"components/navigation/VesselIdentity.jsx"}],"sourceHashes":{"assets/image-slot.js":"fff26d081c8d","components/brand/Logotype.jsx":"f0f5288faf83","components/brand/Waterline.jsx":"1c88571c1e70","components/core/Button.jsx":"a636ac17141c","components/core/Card.jsx":"9b6013445429","components/core/FilterChip.jsx":"b35261e4b53a","components/core/Icon.jsx":"35c40e06c442","components/core/IconButton.jsx":"0f37c1182e0d","components/core/Panel.jsx":"47014114d622","components/core/SectionLabel.jsx":"b5e74d0536cf","components/core/StatusPill.jsx":"729096c167b6","components/data/ChartFrame.jsx":"ab827852e5a0","components/data/ConfidenceMeter.jsx":"c8564277a88e","components/data/DataFreshness.jsx":"2538f9cfd5c7","components/data/DataTable.jsx":"e7e8215bb194","components/data/FleetMap.jsx":"98777908cd30","components/data/KpiStat.jsx":"f3850df252d6","components/data/Sparkline.jsx":"33fa1fad5ec2","components/feedback/Alert.jsx":"adcdaed94ed9","components/feedback/Dialog.jsx":"7c1d16f58e5a","components/feedback/EmptyState.jsx":"8ff90247bf86","components/feedback/RecommendationPanel.jsx":"434531f1a927","components/feedback/Skeleton.jsx":"bbe8b47a8dc7","components/feedback/Tooltip.jsx":"30215414be07","components/forms/Checkbox.jsx":"910b6a505be3","components/forms/FormField.jsx":"d4ebe78dcef5","components/forms/RadioGroup.jsx":"214fe3c65093","components/forms/SelectInput.jsx":"ccea95964d57","components/forms/Switch.jsx":"ac3e3eee2402","components/forms/TextInput.jsx":"e28d840c217d","components/navigation/Breadcrumbs.jsx":"1aaf893ef57c","components/navigation/SideNav.jsx":"7e7e8e234187","components/navigation/Tabs.jsx":"2404620034cf","components/navigation/TopNav.jsx":"12c7722fdde6","components/navigation/VesselIdentity.jsx":"ad2fd731f06a","ui_kits/fleet-console/AnomalyInvestigation.jsx":"33350fcd1910","ui_kits/fleet-console/ConsoleShell.jsx":"8edb6bcb8dec","ui_kits/fleet-console/FleetOverview.jsx":"081049585fa5","ui_kits/fleet-console/VesselDetail.jsx":"bbb2d16cdcc9","ui_kits/fleet-console/data.js":"c507e1af023a","ui_kits/marketing-site/DemoSection.jsx":"fb76265e06c3","ui_kits/marketing-site/Hero.jsx":"1ee235457da1","ui_kits/marketing-site/Sections.jsx":"06b3a5c5c364","ui_kits/website-preview/SiteBody.jsx":"7f260987b0d6","ui_kits/website-preview/SiteChrome.jsx":"6582e49c9844"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaritimeAIDesignSystem_cde923 = window.MaritimeAIDesignSystem_cde923 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/image-slot.js", error: String((e && e.message) || e) }); }

// components/brand/Logotype.jsx
try { (() => {
/* No logo FILE was supplied. The wordmark is therefore set in type, but its casing is
   grounded in the supplied product screenshots (assets/product-screens/*.png), which
   show a lowercase-d "dAIRE" preceded by a small diamond glyph. Casing is preserved
   verbatim — never uppercased. Replace the internals when a real SVG mark arrives. */
function Logotype({
  onDark = false,
  size = 20,
  brand = "dAIRE",
  showRule = true,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, showRule ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: onDark ? "var(--signal-cyan)" : "var(--signal-cyan-dark)",
      flex: "0 0 auto"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: size,
      letterSpacing: "-0.01em",
      color: onDark ? "var(--text-inverse)" : "var(--ink-950)",
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, brand));
}
Object.assign(__ds_scope, { Logotype });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logotype.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  header,
  status,
  footer,
  accent,
  padding = "16px",
  onDark = false,
  interactive = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: onDark ? "var(--surface-dark-raised)" : "var(--surface-card)",
      border: "1px solid " + (onDark ? "var(--border-dark)" : hover && interactive ? "var(--border-strong)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-panel)",
      borderTop: accent ? "2px solid " + accent : undefined,
      color: onDark ? "var(--text-inverse)" : "var(--text-body)",
      display: "flex",
      flexDirection: "column",
      transition: "var(--transition-ui)",
      cursor: interactive ? "pointer" : undefined,
      ...style
    }
  }, header || status ? /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "12px " + padding,
      borderBottom: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-hairline)")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.125rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.2
    }
  }, header), status) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding,
      flex: 1
    }
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "10px " + padding,
      borderTop: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-hairline)"),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      fontSize: "var(--text-data)",
      color: onDark ? "var(--text-inverse-secondary)" : "var(--text-muted)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Lucide outline set, loaded from CDN (no vendor icon assets were supplied).
   Host page must include:
   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js"></script> */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  color = "currentColor",
  style,
  title
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const render = () => {
      const L = window.lucide;
      if (!L || !host) return false;
      host.innerHTML = "";
      const slot = document.createElement("i");
      slot.setAttribute("data-lucide", name);
      host.appendChild(slot);
      L.createIcons({
        nameAttr: "data-lucide",
        attrs: {
          width: size,
          height: size,
          "stroke-width": strokeWidth,
          stroke: "currentColor"
        }
      });
      return true;
    };
    if (!render()) {
      const t = setInterval(() => {
        if (render()) clearInterval(t);
      }, 120);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    role: "img",
    "aria-label": title || name,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      color: color,
      flex: "0 0 auto",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Waterline.jsx
try { (() => {
/* The Operational Waterline: one thin horizontal line per page. Context above,
   evidence and recommended action below. The sweep is a slow telemetry pass,
   not ambient decoration; it stops under prefers-reduced-motion. */
function Waterline({
  above = [],
  below = [],
  marker,
  onDark = true,
  sweep = true,
  style
}) {
  const line = onDark ? "rgba(23,182,206,0.55)" : "rgba(10,127,146,0.45)";
  const text = onDark ? "var(--text-inverse)" : "var(--ink-950)";
  const muted = onDark ? "rgba(255,255,255,0.62)" : "var(--text-secondary)";
  const id = React.useRef("wl" + Math.random().toString(36).slice(2, 7)).current;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes " + id + "{0%{transform:translateX(-12%)}100%{transform:translateX(112%)}}@media (prefers-reduced-motion:reduce){." + id + "{animation:none!important;opacity:0}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 24,
      paddingBottom: 14
    }
  }, above.map(function (a, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-label)",
        fontWeight: 600,
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: muted
      }
    }, a.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-data)",
        color: text
      }
    }, a.value));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      background: line
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: id,
    style: {
      position: "absolute",
      top: -1,
      left: 0,
      width: "18%",
      height: 3,
      background: "linear-gradient(90deg, rgba(23,182,206,0) 0%, var(--signal-cyan) 60%, rgba(23,182,206,0) 100%)",
      animation: sweep ? id + " var(--duration-sweep) linear infinite" : "none"
    }
  }), marker ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: (marker.at || 50) + "%",
      top: -9,
      transform: "translateX(-50%)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 18,
      padding: "0 8px",
      background: "var(--action-amber)",
      color: "var(--ink-950)",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "wrench",
    size: 12,
    strokeWidth: 2
  }), marker.label) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 24,
      paddingTop: 14
    }
  }, below.map(function (b, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-label)",
        fontWeight: 600,
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--signal-cyan)"
      }
    }, b.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-small)",
        color: text,
        maxWidth: "34ch"
      }
    }, b.value));
  })));
}
Object.assign(__ds_scope, { Waterline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Waterline.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  letterSpacing: "0.01em",
  borderRadius: "var(--radius-control)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background-color var(--duration-ui) var(--ease-out), color var(--duration-ui) var(--ease-out), border-color var(--duration-ui) var(--ease-out)"
};
const sizes = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 12px",
    fontSize: "var(--text-small)"
  },
  md: {
    height: "var(--control-h)",
    padding: "0 18px",
    fontSize: "var(--text-small)"
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 24px",
    fontSize: "var(--text-body)"
  }
};
const variants = {
  primary: {
    background: "var(--action-primary)",
    color: "var(--action-primary-text)"
  },
  primaryHover: {
    background: "var(--action-primary-hover)"
  },
  secondary: {
    background: "transparent",
    color: "var(--ink-900)",
    borderColor: "var(--border-strong)"
  },
  secondaryHover: {
    borderColor: "var(--ink-900)",
    background: "rgba(11,36,48,0.05)"
  },
  ghost: {
    background: "transparent",
    color: "var(--signal-cyan-dark)"
  },
  ghostHover: {
    background: "var(--signal-cyan-tint)"
  },
  inverse: {
    background: "var(--paper)",
    color: "var(--ink-950)"
  },
  inverseHover: {
    background: "var(--haze-100)"
  },
  inverseGhost: {
    background: "transparent",
    color: "var(--text-inverse)",
    borderColor: "rgba(255,255,255,0.32)"
  },
  inverseGhostHover: {
    borderColor: "var(--surface-card)",
    background: "rgba(255,255,255,0.08)"
  },
  attention: {
    background: "var(--action-amber)",
    color: "var(--ink-950)"
  },
  attentionHover: {
    background: "#E09A2C"
  },
  danger: {
    background: "var(--risk-coral)",
    color: "var(--surface-card)"
  },
  dangerHover: {
    background: "#C24C45"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  href,
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const h = variants[variant + "Hover"] || {};
  const composed = {
    ...base,
    ...sizes[size],
    ...v,
    ...(hover && !disabled ? h : null),
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? "none" : undefined,
    transform: pressed && !disabled ? "translateY(1px)" : "none",
    ...style
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    onClick: onClick,
    "aria-disabled": disabled || undefined,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false)
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "lg" ? 20 : 16
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === "lg" ? 20 : 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/FilterChip.jsx
try { (() => {
function FilterChip({
  children,
  count,
  selected = false,
  removable = false,
  onClick,
  onRemove,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 32,
      padding: "0 12px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      background: selected ? "var(--ink-900)" : hover ? "var(--surface-quiet)" : "var(--surface-card)",
      color: selected ? "var(--surface-card)" : "var(--text-secondary)",
      border: "1px solid " + (selected ? "var(--ink-900)" : "var(--border-hairline)"),
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)",
      fontWeight: 500,
      whiteSpace: "nowrap",
      flex: "0 0 auto",
      transition: "var(--transition-ui)",
      ...style
    }
  }, children, typeof count === "number" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      opacity: 0.72,
      fontVariantNumeric: "tabular-nums"
    }
  }, count) : null, removable ? /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      display: "inline-flex",
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14,
    strokeWidth: 2
  })) : null);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  size = "md",
  variant = "quiet",
  onClick,
  disabled,
  active = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === "sm" ? 32 : size === "lg" ? 48 : 40;
  const tones = {
    quiet: {
      background: active ? "var(--surface-quiet)" : "transparent",
      color: "var(--text-secondary)",
      borderColor: "transparent"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--ink-900)",
      borderColor: "var(--border-hairline)"
    },
    inverse: {
      background: "transparent",
      color: "var(--surface-card)",
      borderColor: "rgba(255,255,255,0.24)"
    }
  };
  const t = tones[variant] || tones.quiet;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-control)",
      border: "1px solid " + t.borderColor,
      background: hover && !disabled ? variant === "inverse" ? "rgba(255,255,255,0.08)" : "var(--surface-quiet)" : t.background,
      color: t.color,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 16 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Panel.jsx
try { (() => {
function Panel({
  children,
  title,
  meta,
  actions,
  onDark = false,
  padding = "16px",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: onDark ? "var(--surface-dark-panel)" : "var(--surface-card)",
      border: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-panel)",
      overflow: "hidden",
      color: onDark ? "var(--text-inverse)" : "var(--text-body)",
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "10px 16px",
      background: onDark ? "transparent" : "var(--surface-quiet)",
      borderBottom: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-hairline)")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: onDark ? "var(--text-inverse-secondary)" : "var(--text-muted)"
    }
  }, title), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)",
      color: onDark ? "var(--text-inverse-secondary)" : "var(--text-muted)"
    }
  }, meta) : null), actions) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding
    }
  }, children));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Panel.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function SectionLabel({
  children,
  coordinate,
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, coordinate ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: onDark ? "rgba(255,255,255,0.44)" : "var(--text-muted)"
    }
  }, coordinate) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: onDark ? "var(--signal-cyan)" : "var(--signal-cyan-dark)"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: onDark ? "rgba(255,255,255,0.14)" : "var(--border-hairline)"
    }
  }));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
const MAP = {
  normal: {
    label: "Normal",
    color: "var(--state-normal)",
    surface: "var(--state-normal-surface)",
    icon: "check"
  },
  watch: {
    label: "Watch",
    color: "var(--state-watch)",
    surface: "var(--state-watch-surface)",
    icon: "eye"
  },
  action: {
    label: "Action",
    color: "var(--state-action-text)",
    surface: "var(--state-action-surface)",
    icon: "triangle-alert"
  },
  critical: {
    label: "Critical",
    color: "var(--state-critical-text)",
    surface: "var(--state-critical-surface)",
    icon: "octagon-alert"
  },
  unknown: {
    label: "Unknown",
    color: "var(--state-unknown)",
    surface: "var(--state-unknown-surface)",
    icon: "circle-help"
  }
};
function StatusPill({
  state = "normal",
  children,
  size = "md",
  showIcon = true,
  onDark = false,
  style
}) {
  const s = MAP[state] || MAP.unknown;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: size === "sm" ? 22 : 26,
      padding: size === "sm" ? "0 8px" : "0 10px",
      borderRadius: "var(--radius-pill)",
      background: onDark ? "rgba(255,255,255,0.10)" : s.surface,
      color: onDark ? "var(--text-inverse)" : s.color,
      border: "1px solid " + (onDark ? "rgba(255,255,255,0.18)" : "transparent"),
      fontFamily: "var(--font-sans)",
      fontSize: size === "sm" ? "var(--text-label)" : "var(--text-data)",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      ...style
    }
  }, showIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 14,
    strokeWidth: 2
  }) : null, children || s.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/ChartFrame.jsx
try { (() => {
function ChartFrame({
  question,
  unit,
  timezone = "UTC",
  interval,
  freshness,
  source,
  children,
  footer,
  onDark = false,
  style
}) {
  const line = onDark ? "var(--border-dark)" : "var(--border-hairline)";
  const muted = onDark ? "var(--text-inverse-secondary)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: onDark ? "var(--surface-dark-panel)" : "var(--surface-card)",
      border: "1px solid " + line,
      borderRadius: "var(--radius-panel)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "12px 16px",
      borderBottom: "1px solid " + line
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.25rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: onDark ? "var(--surface-card)" : "var(--text-strong)",
      lineHeight: 1.2
    }
  }, question), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      marginTop: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: muted
    }
  }, unit ? /*#__PURE__*/React.createElement("span", null, "Unit ", unit) : null, interval ? /*#__PURE__*/React.createElement("span", null, "Interval ", interval) : null, /*#__PURE__*/React.createElement("span", null, "TZ ", timezone), freshness ? /*#__PURE__*/React.createElement("span", null, "Updated ", freshness) : null, source ? /*#__PURE__*/React.createElement("span", null, "Source ", source) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderTop: "1px solid " + line,
      fontSize: "var(--text-data)",
      color: muted
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { ChartFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChartFrame.jsx", error: String((e && e.message) || e) }); }

// components/data/ConfidenceMeter.jsx
try { (() => {
function ConfidenceMeter({
  value = 0,
  label = "Confidence",
  basis,
  width = 120,
  onDark = false,
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: onDark ? "var(--text-inverse-secondary)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 2,
      width: width
    },
    "aria-hidden": "true"
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) {
    const on = pct >= (i + 1) * 10;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: 1,
        height: 8,
        background: on ? "var(--signal-cyan-dark)" : onDark ? "rgba(255,255,255,0.14)" : "var(--surface-sunken)"
      }
    });
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)",
      fontVariantNumeric: "tabular-nums",
      color: onDark ? "var(--text-inverse)" : "var(--ink-900)"
    }
  }, pct, "%")), basis ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: onDark ? "rgba(255,255,255,0.5)" : "var(--text-muted)"
    }
  }, basis) : null);
}
Object.assign(__ds_scope, { ConfidenceMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ConfidenceMeter.jsx", error: String((e && e.message) || e) }); }

// components/data/DataFreshness.jsx
try { (() => {
function DataFreshness({
  timestamp,
  stale = false,
  offline = false,
  source,
  onDark = false,
  style
}) {
  const color = offline ? "var(--state-unknown)" : stale ? "var(--state-action-text)" : onDark ? "var(--signal-cyan)" : "var(--signal-cyan-dark)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)",
      color: color,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: offline ? "wifi-off" : stale ? "clock-alert" : "radio",
    size: 14,
    strokeWidth: 1.75
  }), /*#__PURE__*/React.createElement("span", null, offline ? "Offline · last sync " : stale ? "Stale · " : "Live · ", timestamp), source ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? "rgba(255,255,255,0.5)" : "var(--text-muted)"
    }
  }, "\xB7 ", source) : null);
}
Object.assign(__ds_scope, { DataFreshness });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataFreshness.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  selectedId,
  stickyHeader = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "auto",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      background: "var(--surface-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(function (c) {
    return /*#__PURE__*/React.createElement("th", {
      key: c.key,
      scope: "col",
      style: {
        position: stickyHeader ? "sticky" : undefined,
        top: 0,
        zIndex: 1,
        textAlign: c.numeric ? "right" : "left",
        whiteSpace: "nowrap",
        padding: "10px 16px",
        background: "var(--surface-quiet)",
        borderBottom: "1px solid var(--border-hairline)",
        fontSize: "var(--text-label)",
        fontWeight: 600,
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        left: c.frozen ? 0 : undefined
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, c.label, c.sorted ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: c.sorted === "desc" ? "arrow-down" : "arrow-up",
      size: 12,
      strokeWidth: 2
    }) : null));
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(function (r) {
    const on = selectedId != null && r.id === selectedId;
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id,
      onClick: onRowClick ? function () {
        onRowClick(r);
      } : undefined,
      style: {
        height: "var(--row-h)",
        cursor: onRowClick ? "pointer" : undefined,
        background: on ? "var(--signal-cyan-tint)" : "transparent",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, columns.map(function (c) {
      return /*#__PURE__*/React.createElement("td", {
        key: c.key,
        style: {
          padding: "8px 16px",
          textAlign: c.numeric ? "right" : "left",
          fontFamily: c.mono || c.numeric ? "var(--font-mono)" : "var(--font-sans)",
          fontVariantNumeric: "tabular-nums",
          color: "var(--text-body)",
          whiteSpace: "nowrap",
          position: c.frozen ? "sticky" : undefined,
          left: c.frozen ? 0 : undefined,
          background: c.frozen ? on ? "var(--signal-cyan-tint)" : "var(--surface-card)" : undefined,
          fontWeight: c.frozen ? 600 : 400
        }
      }, c.render ? c.render(r) : r[c.key]);
    }));
  }))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/FleetMap.jsx
try { (() => {
/* Schematic quiet basemap: latitude/longitude graticule only. No map tiles or coastline
   assets were supplied with the brand, so geography is intentionally omitted rather
   than invented — swap the background for the real low-saturation basemap in production. */
const SEV = {
  normal: "var(--state-normal)",
  watch: "var(--state-watch)",
  action: "var(--action-amber)",
  critical: "var(--risk-coral)",
  unknown: "var(--state-unknown)"
};
function FleetMap({
  vessels = [],
  selectedId,
  onSelect,
  height = 320,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: height,
      background: "#DDE5EC",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(to right, rgba(58,78,95,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(58,78,95,0.16) 1px, transparent 1px)",
      backgroundSize: "72px 72px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 10,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: "var(--text-secondary)"
    }
  }, "BASEMAP OMITTED \xB7 SCHEMATIC POSITIONS"), vessels.map(function (v) {
    const on = v.id === selectedId;
    return /*#__PURE__*/React.createElement("button", {
      key: v.id,
      type: "button",
      onClick: onSelect ? function () {
        onSelect(v);
      } : undefined,
      title: v.name,
      style: {
        position: "absolute",
        left: v.x + "%",
        top: v.y + "%",
        transform: "translate(-50%,-50%)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 26,
        padding: "0 8px",
        background: on ? "var(--ink-950)" : "rgba(255,255,255,0.96)",
        color: on ? "var(--surface-card)" : "var(--ink-900)",
        border: "1px solid " + (on ? "var(--ink-950)" : "var(--border-hairline)"),
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-label)",
        whiteSpace: "nowrap",
        transition: "var(--transition-ui)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: SEV[v.severity] || SEV.unknown,
        flex: "0 0 auto"
      }
    }), v.count ? v.count + " vessels" : v.name);
  }), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "8px 12px",
      background: "rgba(244,247,250,0.94)",
      borderTop: "1px solid var(--border-hairline)",
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ship",
    size: 14
  }), footer) : null);
}
Object.assign(__ds_scope, { FleetMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FleetMap.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiStat.jsx
try { (() => {
function KpiStat({
  label,
  value,
  unit,
  delta,
  deltaDirection,
  basis,
  tone = "neutral",
  onDark = false,
  style
}) {
  const tones = {
    neutral: onDark ? "var(--text-inverse)" : "var(--ink-950)",
    normal: "var(--state-normal)",
    action: "var(--state-action-text)",
    critical: "var(--state-critical-text)",
    unknown: "var(--state-unknown)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: onDark ? "var(--text-inverse-secondary)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums",
      color: tones[tone] || tones.neutral
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)",
      color: onDark ? "var(--text-inverse-secondary)" : "var(--text-muted)"
    }
  }, unit) : null, delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)",
      color: deltaDirection === "down" ? "var(--state-normal)" : "var(--state-action-text)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: deltaDirection === "down" ? "arrow-down-right" : "arrow-up-right",
    size: 13,
    strokeWidth: 2
  }), delta) : null), basis ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: onDark ? "rgba(255,255,255,0.5)" : "var(--text-muted)"
    }
  }, basis) : null);
}
Object.assign(__ds_scope, { KpiStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiStat.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
/* Draws a trend from real data points — no smoothing that could hide an event. */
function Sparkline({
  data = [],
  width = 180,
  height = 44,
  color = "var(--signal-cyan-dark)",
  threshold,
  marker,
  gapFrom,
  style
}) {
  if (!data.length) return null;
  const min = Math.min.apply(null, data);
  const max = Math.max.apply(null, data);
  const span = max - min || 1;
  const x = function (i) {
    return i / (data.length - 1) * (width - 2) + 1;
  };
  const y = function (v) {
    return height - 2 - (v - min) / span * (height - 6);
  };
  const path = data.map(function (v, i) {
    return (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1);
  }).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 " + width + " " + height,
    style: {
      display: "block",
      overflow: "visible",
      ...style
    },
    role: "img"
  }, typeof threshold === "number" ? /*#__PURE__*/React.createElement("line", {
    x1: "0",
    x2: width,
    y1: y(threshold),
    y2: y(threshold),
    stroke: "var(--action-amber)",
    strokeWidth: "1",
    strokeDasharray: "3 3"
  }) : null, typeof gapFrom === "number" ? /*#__PURE__*/React.createElement("rect", {
    x: x(gapFrom),
    y: "0",
    width: width - x(gapFrom),
    height: height,
    fill: "var(--state-unknown-surface)"
  }) : null, /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), typeof marker === "number" ? /*#__PURE__*/React.createElement("circle", {
    cx: x(marker),
    cy: y(data[marker]),
    r: "3",
    fill: "var(--risk-coral)"
  }) : null);
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const MAP = {
  watch: {
    color: "var(--state-watch)",
    surface: "var(--state-watch-surface)",
    icon: "eye"
  },
  action: {
    color: "var(--state-action-text)",
    surface: "var(--state-action-surface)",
    icon: "triangle-alert"
  },
  critical: {
    color: "var(--state-critical-text)",
    surface: "var(--state-critical-surface)",
    icon: "octagon-alert"
  },
  unknown: {
    color: "var(--state-unknown)",
    surface: "var(--state-unknown-surface)",
    icon: "circle-help"
  },
  normal: {
    color: "var(--state-normal)",
    surface: "var(--state-normal-surface)",
    icon: "check"
  }
};
function Alert({
  severity = "action",
  what,
  where,
  why,
  next,
  actions,
  timestamp,
  style
}) {
  const s = MAP[severity] || MAP.action;
  return /*#__PURE__*/React.createElement("div", {
    role: severity === "critical" ? "alert" : "status",
    style: {
      background: s.surface,
      border: "1px solid " + s.color,
      borderRadius: "var(--radius-panel)",
      padding: "14px 16px",
      display: "flex",
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.color,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 20,
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body)",
      fontWeight: 600,
      color: "var(--ink-950)"
    }
  }, what), timestamp ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: "var(--text-secondary)"
    }
  }, timestamp) : null), where ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)",
      color: "var(--text-secondary)"
    }
  }, where) : null, why ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)",
      maxWidth: "68ch"
    }
  }, why) : null, next ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, "Next: "), next) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 4
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  subtitle,
  children,
  footer,
  onClose,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(7,25,34,0.52)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    onClick: function (e) {
      e.stopPropagation();
    },
    style: {
      width: width,
      maxWidth: "100%",
      maxHeight: "88vh",
      overflow: "auto",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      boxShadow: "var(--shadow-overlay)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      padding: "16px",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "12px 16px",
      borderTop: "1px solid var(--border-hairline)",
      display: "flex",
      justifyContent: "flex-end",
      gap: 8
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = "inbox",
  title,
  missing,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      padding: "28px 24px",
      border: "1px dashed var(--border-strong)",
      borderRadius: "var(--radius-panel)",
      background: "var(--surface-quiet)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "var(--ink-950)"
    }
  }, title), missing ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)",
      maxWidth: "58ch"
    }
  }, missing) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/RecommendationPanel.jsx
try { (() => {
function Row({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "128px 1fr",
      gap: 12,
      padding: "10px 0",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      paddingTop: 2
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-body)"
    }
  }, children));
}
function RecommendationPanel({
  title,
  evidence,
  inferredCause,
  confidence,
  confidenceBasis,
  action,
  owner,
  dueWindow,
  actions,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      padding: "16px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clipboard-check",
    size: 18,
    color: "var(--signal-cyan-dark)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.375rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, title)), evidence ? /*#__PURE__*/React.createElement(Row, {
    label: "Observed"
  }, evidence) : null, inferredCause ? /*#__PURE__*/React.createElement(Row, {
    label: "Likely cause"
  }, inferredCause) : null, typeof confidence === "number" ? /*#__PURE__*/React.createElement(Row, {
    label: "Confidence"
  }, /*#__PURE__*/React.createElement(__ds_scope.ConfidenceMeter, {
    value: confidence,
    label: "",
    basis: confidenceBasis,
    width: 140
  })) : null, action ? /*#__PURE__*/React.createElement(Row, {
    label: "Recommended"
  }, action) : null, owner || dueWindow ? /*#__PURE__*/React.createElement(Row, {
    label: "Owner / due"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)"
    }
  }, owner, owner && dueWindow ? " · " : "", dueWindow)) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      paddingTop: 14,
      borderTop: "1px solid var(--border-hairline)",
      marginTop: 4
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { RecommendationPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/RecommendationPanel.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  lines = 3,
  height = 12,
  width = "100%",
  block = false,
  style
}) {
  const bars = block ? 1 : lines;
  return /*#__PURE__*/React.createElement("div", {
    "aria-busy": "true",
    "aria-live": "polite",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, Array.from({
    length: bars
  }).map(function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        height: block ? height : height,
        width: block ? width : i === bars - 1 ? "62%" : "100%",
        background: "var(--surface-quiet)",
        borderRadius: 2,
        border: "1px solid var(--border-hairline)"
      }
    });
  }));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  side = "top",
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = side === "top" ? {
    bottom: "calc(100% + 6px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    top: "calc(100% + 6px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    tabIndex: 0
  }, children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 20,
      whiteSpace: "nowrap",
      background: "var(--ink-950)",
      color: "var(--text-inverse)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      padding: "6px 8px",
      borderRadius: "var(--radius-control)",
      boxShadow: "var(--shadow-overlay)"
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  hint,
  disabled = false,
  style
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      gap: 10,
      alignItems: "flex-start",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.45 : 1,
      minHeight: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "0 0 auto",
      marginTop: 2,
      borderRadius: 3,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--ink-900)" : "var(--surface-card)",
      border: "1px solid " + (on ? "var(--ink-900)" : "var(--border-strong)"),
      color: "var(--paper)",
      transition: "var(--transition-ui)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 12,
    strokeWidth: 2.5
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 2.5
  }) : null), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-body)"
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-data)",
      color: "var(--text-muted)"
    }
  }, hint) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function FormField({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)",
      fontWeight: 600,
      color: "var(--ink-900)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--slate-500)",
      fontWeight: 400
    }
  }, " (required)") : null), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-data)",
      color: "var(--risk-coral)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-data)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  name,
  value,
  onChange,
  options = [],
  direction = "column",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? 20 : 10,
      ...style
    }
  }, options.map(function (o) {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    const on = value === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: "inline-flex",
        gap: 10,
        alignItems: "center",
        cursor: "pointer",
        minHeight: 24
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: "50%",
        flex: "0 0 auto",
        border: "1px solid " + (on ? "var(--ink-900)" : "var(--border-strong)"),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "var(--transition-ui)"
      }
    }, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: "var(--ink-900)"
      }
    }) : null), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: on,
      onChange: onChange,
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-small)",
        color: "var(--text-body)"
      }
    }, lab));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectInput.jsx
try { (() => {
function SelectInput({
  id,
  value,
  onChange,
  options = [],
  placeholder,
  disabled = false,
  invalid = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: "var(--control-h)",
      padding: "0 34px 0 12px",
      appearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)",
      color: value ? "var(--text-body)" : "var(--text-muted)",
      background: disabled ? "var(--surface-quiet)" : "var(--surface-card)",
      border: "1px solid " + (invalid ? "var(--risk-coral)" : focus ? "var(--signal-cyan-dark)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "0 0 0 2px rgba(10,127,146,0.24)" : "none",
      outline: "none",
      transition: "var(--transition-ui)",
      ...style
    }
  }, placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(function (o) {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none",
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { SelectInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: function (e) {
      if (onChange) onChange(!checked, e);
    },
    style: {
      width: 38,
      height: 22,
      borderRadius: "var(--radius-pill)",
      padding: 2,
      border: "none",
      background: checked ? "var(--signal-cyan-dark)" : "var(--surface-sunken)",
      display: "inline-flex",
      justifyContent: checked ? "flex-end" : "flex-start",
      cursor: disabled ? "default" : "pointer",
      transition: "background-color var(--duration-ui) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--paper)",
      boxShadow: "var(--shadow-raised)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextInput({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  invalid = false,
  disabled = false,
  mono = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      height: "var(--control-h)",
      padding: icon ? "0 12px 0 36px" : "0 12px",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      fontSize: "var(--text-small)",
      color: "var(--text-body)",
      background: disabled ? "var(--surface-quiet)" : "var(--surface-card)",
      border: "1px solid " + (invalid ? "var(--risk-coral)" : focus ? "var(--signal-cyan-dark)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "0 0 0 2px rgba(10,127,146,0.24)" : "none",
      outline: "none",
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      ...style
    }
  }, items.map(function (it, i) {
    const label = typeof it === "string" ? it : it.label;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("span", {
      key: label,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-data)",
        color: onDark ? "var(--text-inverse)" : "var(--ink-900)"
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: typeof it === "object" && it.href || "#",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-data)",
        borderBottom: "none",
        color: onDark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)"
      }
    }, label), !last ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13,
      color: onDark ? "rgba(255,255,255,0.4)" : "var(--text-muted)"
    }) : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function SideNav({
  items = [],
  active,
  onNavigate,
  footer,
  width = 232,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: width,
      flex: "0 0 auto",
      background: "var(--ink-950)",
      color: "var(--surface-card)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.5)"
    }
  }, "Operations")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "0 8px",
      gap: 2,
      flex: 1
    }
  }, items.map(function (it) {
    const on = active === it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: it.label,
      type: "button",
      onClick: onNavigate ? function () {
        onNavigate(it.label);
      } : undefined,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 40,
        padding: "0 10px",
        background: on ? "var(--ink-800)" : "transparent",
        border: "none",
        borderLeft: "2px solid " + (on ? "var(--signal-cyan)" : "transparent"),
        color: on ? "var(--surface-card)" : "rgba(255,255,255,0.72)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-small)",
        fontWeight: on ? 600 : 500,
        cursor: "pointer",
        textAlign: "left",
        borderRadius: "0 var(--radius-control) var(--radius-control) 0",
        transition: "var(--transition-ui)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon || "circle",
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), typeof it.count === "number" ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-label)",
        background: it.severity === "action" ? "var(--action-amber)" : "rgba(255,255,255,0.14)",
        color: it.severity === "action" ? "var(--ink-950)" : "var(--surface-card)",
        borderRadius: "var(--radius-pill)",
        padding: "1px 7px",
        fontWeight: 600
      }
    }, it.count) : null);
  })), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderTop: "1px solid var(--border-dark)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: "rgba(255,255,255,0.5)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange,
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 24,
      borderBottom: "1px solid " + (onDark ? "var(--border-dark)" : "var(--border-hairline)"),
      ...style
    }
  }, items.map(function (it) {
    const label = typeof it === "string" ? it : it.label;
    const count = typeof it === "object" ? it.count : undefined;
    const on = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: onChange ? function () {
        onChange(label);
      } : undefined,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "none",
        border: "none",
        padding: "0 0 10px",
        cursor: "pointer",
        color: on ? onDark ? "var(--text-inverse)" : "var(--ink-950)" : onDark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-small)",
        fontWeight: on ? 600 : 500,
        boxShadow: on ? "inset 0 -2px 0 var(--signal-cyan)" : "none",
        transition: "var(--transition-ui)"
      }
    }, label, typeof count === "number" ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-label)",
        color: "var(--text-muted)"
      }
    }, count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  items = [],
  active,
  onNavigate,
  onDark = false,
  cta = "Book technical demo",
  onCta,
  secondary,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32,
      height: 72,
      padding: "0 var(--margin-desktop)",
      background: onDark ? "transparent" : "var(--surface-card)",
      borderBottom: "1px solid " + (onDark ? "rgba(255,255,255,0.14)" : "var(--border-hairline)"),
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logotype, {
    onDark: onDark,
    size: 20
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      flex: 1
    }
  }, items.map(function (it) {
    const label = typeof it === "string" ? it : it.label;
    const on = active === label;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: typeof it === "object" && it.href || "#",
      onClick: onNavigate ? function (e) {
        e.preventDefault();
        onNavigate(label);
      } : undefined,
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-small)",
        fontWeight: on ? 600 : 500,
        color: onDark ? on ? "var(--surface-card)" : "rgba(255,255,255,0.78)" : on ? "var(--ink-950)" : "var(--text-secondary)",
        textDecoration: "none",
        borderBottom: "none",
        paddingBottom: 2,
        boxShadow: on ? "inset 0 -2px 0 var(--signal-cyan)" : "none",
        transition: "var(--transition-ui)"
      }
    }, label);
  })), secondary ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)",
      fontWeight: 500,
      borderBottom: "none",
      color: onDark ? "rgba(255,255,255,0.78)" : "var(--text-secondary)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "log-in",
    size: 16
  }), secondary) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: onDark ? "inverse" : "primary",
    size: "md",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/VesselIdentity.jsx
try { (() => {
function Field({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-label)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.5)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)",
      color: "var(--surface-card)"
    }
  }, value));
}
function VesselIdentity({
  name,
  imo,
  vesselClass,
  voyageState,
  severity = "normal",
  freshness,
  offline = false,
  actions,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--ink-950)",
      color: "var(--surface-card)",
      padding: "14px var(--margin-desktop)",
      borderBottom: "1px solid var(--border-dark)",
      display: "flex",
      alignItems: "center",
      gap: 32,
      flexWrap: "wrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.75rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      color: "var(--surface-card)",
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    state: severity,
    onDark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      flex: 1
    }
  }, imo ? /*#__PURE__*/React.createElement(Field, {
    label: "IMO",
    value: imo
  }) : null, vesselClass ? /*#__PURE__*/React.createElement(Field, {
    label: "Class / type",
    value: vesselClass
  }) : null, voyageState ? /*#__PURE__*/React.createElement(Field, {
    label: "Voyage",
    value: voyageState
  }) : null), freshness ? /*#__PURE__*/React.createElement(__ds_scope.DataFreshness, {
    timestamp: freshness,
    offline: offline,
    onDark: true
  }) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { VesselIdentity });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/VesselIdentity.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fleet-console/AnomalyInvestigation.jsx
try { (() => {
const {
  Panel,
  ChartFrame,
  Sparkline,
  RecommendationPanel,
  Button,
  StatusPill,
  ConfidenceMeter,
  Breadcrumbs,
  Switch,
  Tabs,
  DataTable
} = window.MaritimeAIDesignSystem_cde923;
function AnomalyInvestigation({
  findingId,
  onBack
}) {
  const data = window.CONSOLE_DATA;
  const finding = data.findings.filter(function (f) {
    return f.id === findingId;
  })[0] || data.findings[0];
  const vessel = data.vessels.filter(function (v) {
    return v.id === finding.vesselId;
  })[0];
  const [raw, setRaw] = React.useState(true);
  const expected = vessel.trend.map(function (_, i) {
    return 62 + i * 0.12;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-data",
    style: {
      color: "var(--slate-700)"
    }
  }, finding.id), /*#__PURE__*/React.createElement(StatusPill, {
    state: finding.severity,
    size: "sm"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "2rem",
      margin: "6px 0 0"
    }
  }, finding.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 4,
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, finding.vessel, " \xB7 ", finding.asset, " \xB7 detected ", finding.detected)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    onClick: onBack
  }, "Back to vessel"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md"
  }, "Acknowledge"), /*#__PURE__*/React.createElement(Button, {
    variant: "attention",
    size: "md",
    icon: "wrench"
  }, "Request vessel check"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ChartFrame, {
    question: "Expected against observed: is the deviation explained by operating state?",
    unit: "\xB0C",
    interval: "14 days",
    freshness: vessel.updated,
    source: finding.asset + " sensor bus",
    footer: "Grey: expected behaviour from own baseline. Cyan: observed. Coral marker: detection event.",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: expected,
    width: 620,
    height: 200,
    color: "var(--mist-300)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: vessel.trend,
    width: 620,
    height: 200,
    threshold: 70,
    marker: 9,
    color: "var(--signal-cyan-dark)"
  })))), /*#__PURE__*/React.createElement(Panel, {
    title: "Aligned evidence",
    meta: "Telemetry \xB7 events \xB7 maintenance \xB7 operating state \xB7 weather",
    actions: /*#__PURE__*/React.createElement(Switch, {
      checked: raw,
      onChange: setRaw,
      label: "Raw values"
    })
  }, data.timeline.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      key: e.t,
      style: {
        display: "grid",
        gridTemplateColumns: "170px 110px 1fr",
        gap: 12,
        padding: "10px 0",
        borderBottom: "1px solid var(--border-hairline)",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-data",
      style: {
        color: "var(--slate-700)"
      }
    }, e.t), /*#__PURE__*/React.createElement("span", {
      className: "ds-label"
    }, e.kind), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-small)"
      }
    }, e.text));
  }), raw ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    style: {
      border: "none"
    },
    rows: vessel.trend.slice(-4).map(function (v, i) {
      return {
        id: "r" + i,
        ts: "12 Mar " + (11 + i) + ":02 UTC",
        val: v.toFixed(1),
        load: 66 + i + "%",
        src: finding.asset
      };
    }),
    columns: [{
      key: "ts",
      label: "Timestamp",
      frozen: true,
      mono: true
    }, {
      key: "val",
      label: "Value °C",
      numeric: true
    }, {
      key: "load",
      label: "Engine load",
      numeric: true
    }, {
      key: "src",
      label: "Source",
      mono: true
    }]
  })) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RecommendationPanel, {
    title: "Inspect ME-1 cylinder 4 injectors",
    evidence: "Exhaust temp +8 \xB0C vs baseline over 11 days; load and fuel index unchanged; sister vessels stable.",
    inferredCause: "Likely injector nozzle fouling",
    confidence: finding.confidence || 0,
    confidenceBasis: "3 corroborating signals \xB7 21 days",
    action: "Vessel check at next port call, Singapore",
    owner: finding.owner,
    dueWindow: finding.due,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Assign"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Close with outcome"))
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Candidate causes",
    meta: "Ranked by supporting evidence"
  }, [["Injector nozzle fouling", 82], ["Exhaust valve seat wear", 41], ["Sensor drift", 12]].map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c[0],
      style: {
        padding: "10px 0",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-small)",
        marginBottom: 6
      }
    }, c[0]), /*#__PURE__*/React.createElement(ConfidenceMeter, {
      value: c[1],
      label: "",
      width: 180
    }));
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: "var(--text-data)",
      color: "var(--text-muted)"
    }
  }, "Ranked inference, not confirmation. Confirm on inspection before closing.")))));
}
Object.assign(window, {
  AnomalyInvestigation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fleet-console/AnomalyInvestigation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fleet-console/ConsoleShell.jsx
try { (() => {
const {
  SideNav,
  Logotype,
  TextInput,
  IconButton,
  DataFreshness,
  Breadcrumbs
} = window.MaritimeAIDesignSystem_cde923;
function ConsoleShell({
  view,
  onNavigate,
  crumbs,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 16px",
      borderBottom: "1px solid var(--border-dark)"
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    onDark: true,
    size: 18
  })), /*#__PURE__*/React.createElement(SideNav, {
    active: view,
    onNavigate: onNavigate,
    footer: "EU-WEST \xB7 synced 14:02 UTC",
    style: {
      flex: 1
    },
    items: [{
      label: "Fleet overview",
      icon: "ship"
    }, {
      label: "Findings",
      icon: "triangle-alert",
      count: 7,
      severity: "action"
    }, {
      label: "Machinery",
      icon: "gauge"
    }, {
      label: "Maintenance",
      icon: "wrench"
    }, {
      label: "Voyages",
      icon: "route"
    }, {
      label: "Reports",
      icon: "file-text"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "12px 24px",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    icon: "search",
    placeholder: "Search vessel, IMO or equipment tag"
  })), /*#__PURE__*/React.createElement(DataFreshness, {
    timestamp: "14:02 UTC \xB7 12 Mar 2026",
    source: "6 of 6 vessels reporting"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "refresh-cw",
    label: "Refresh telemetry",
    variant: "outline"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    variant: "outline"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "var(--radius-pill)",
      background: "var(--ink-900)",
      color: "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)"
    }
  }, "JO")), crumbs ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 24px",
      borderBottom: "1px solid var(--border-hairline)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: crumbs
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      flex: 1
    }
  }, children)));
}
Object.assign(window, {
  ConsoleShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fleet-console/ConsoleShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fleet-console/FleetOverview.jsx
try { (() => {
const {
  Panel,
  DataTable,
  StatusPill,
  Sparkline,
  KpiStat,
  FilterChip,
  FleetMap,
  Button,
  Alert
} = window.MaritimeAIDesignSystem_cde923;
function FleetOverview({
  onOpenVessel
}) {
  const data = window.CONSOLE_DATA;
  const [filter, setFilter] = React.useState("Requires action");
  const [sel, setSel] = React.useState("v1");
  const order = {
    critical: 0,
    action: 1,
    watch: 2,
    unknown: 3,
    normal: 4
  };
  const rows = data.vessels.slice().sort(function (a, b) {
    return order[a.severity] - order[b.severity];
  }).filter(function (v) {
    if (filter === "Requires action") return v.severity === "action" || v.severity === "critical";
    if (filter === "Telemetry gaps") return v.severity === "unknown";
    return true;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "2rem",
      margin: 0
    }
  }, "Fleet overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 4,
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, "Sorted by operational priority \xB7 synthetic demo data")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download",
    size: "md"
  }, "Export fleet state"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    icon: "triangle-alert"
  }, "Review 7 findings"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(KpiStat, {
    label: "Vessels requiring action",
    value: "2",
    unit: "of 6",
    basis: "Updated 14:02 UTC",
    tone: "action"
  }), /*#__PURE__*/React.createElement(KpiStat, {
    label: "Open findings",
    value: "7",
    basis: "4 assigned \xB7 3 unassigned"
  }), /*#__PURE__*/React.createElement(KpiStat, {
    label: "Telemetry gaps",
    value: "1",
    unit: "vessel",
    basis: "Last sync 09:41 UTC 11 Mar",
    tone: "unknown"
  }), /*#__PURE__*/React.createElement(KpiStat, {
    label: "Outcomes verified, 30 d",
    value: "9",
    delta: "3",
    deltaDirection: "down",
    basis: "vs prior 30 days"
  })), /*#__PURE__*/React.createElement(Alert, {
    severity: "critical",
    what: "Turbocharger overspeed with rising scavenge pressure",
    where: "MV Coral Meridian \xB7 IMO 9518992 \xB7 TC-A",
    timestamp: "10 Mar 22:36 UTC",
    why: "Overspeed events recurring under normal load; scavenge air pressure has risen 0.4 bar over 48 h.",
    next: "Reduce load and inspect TC-A air filter and nozzle ring before next watch.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "danger"
    }, "Acknowledge"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: function () {
        onOpenVessel("v2");
      }
    }, "Open vessel"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Vessels",
    meta: rows.length + " shown · " + data.vessels.length + " total",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        justifyContent: "flex-end"
      }
    }, ["Requires action", "Telemetry gaps", "All vessels"].map(function (f) {
      return /*#__PURE__*/React.createElement(FilterChip, {
        key: f,
        selected: filter === f,
        onClick: function () {
          setFilter(f);
        },
        count: f === "Requires action" ? 2 : f === "Telemetry gaps" ? 1 : data.vessels.length
      }, f);
    })),
    padding: "0"
  }, /*#__PURE__*/React.createElement(DataTable, {
    selectedId: sel,
    onRowClick: function (r) {
      setSel(r.id);
      onOpenVessel(r.id);
    },
    rows: rows,
    style: {
      border: "none",
      borderRadius: 0
    },
    columns: [{
      key: "name",
      label: "Vessel",
      frozen: true
    }, {
      key: "severity",
      label: "Severity",
      render: function (r) {
        return /*#__PURE__*/React.createElement(StatusPill, {
          state: r.severity,
          size: "sm"
        });
      }
    }, {
      key: "trend",
      label: "ME-1 exhaust temp · 14 d",
      render: function (r) {
        return /*#__PURE__*/React.createElement(Sparkline, {
          width: 120,
          height: 26,
          data: r.trend,
          threshold: 70,
          gapFrom: r.severity === "unknown" ? 4 : undefined
        });
      }
    }, {
      key: "temp",
      label: "Latest °C",
      numeric: true,
      render: function (r) {
        return r.temp == null ? "—" : r.temp.toFixed(1);
      }
    }, {
      key: "open",
      label: "Open findings",
      numeric: true
    }, {
      key: "updated",
      label: "Last received",
      mono: true,
      sorted: "desc"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Fleet positions",
    meta: "Schematic \u2014 basemap asset not supplied",
    padding: "0"
  }, /*#__PURE__*/React.createElement(FleetMap, {
    height: 300,
    selectedId: sel,
    onSelect: function (v) {
      setSel(v.id);
    },
    vessels: data.vessels,
    footer: data.vessels.length + " vessels · 2 require action · 1 offline",
    style: {
      border: "none",
      borderRadius: 0
    }
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Data coverage",
    meta: "By source"
  }, [["Machinery buses", "6 of 6"], ["Planned maintenance", "6 of 6"], ["Noon reports", "5 of 6"], ["Weather feed", "6 of 6"]].map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r[0],
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        borderBottom: "1px solid var(--border-hairline)",
        fontSize: "var(--text-small)"
      }
    }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("span", {
      className: "ds-data"
    }, r[1]));
  })))));
}
Object.assign(window, {
  FleetOverview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fleet-console/FleetOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fleet-console/VesselDetail.jsx
try { (() => {
const {
  VesselIdentity,
  Tabs,
  Panel,
  Card,
  StatusPill,
  KpiStat,
  Sparkline,
  ChartFrame,
  RecommendationPanel,
  Alert,
  Button,
  DataTable,
  EmptyState,
  DataFreshness,
  Dialog,
  FormField,
  TextInput,
  SelectInput
} = window.MaritimeAIDesignSystem_cde923;
function MachineryGrid({
  vessel
}) {
  const assets = [{
    tag: "ME-1",
    name: "Main engine",
    severity: vessel.severity === "unknown" ? "unknown" : "action",
    value: vessel.temp,
    unit: "°C exhaust"
  }, {
    tag: "TC-A",
    name: "Turbocharger",
    severity: vessel.id === "v2" ? "critical" : "normal",
    value: 18400,
    unit: "rpm"
  }, {
    tag: "AE-2",
    name: "Auxiliary engine",
    severity: "watch",
    value: 78.2,
    unit: "°C lube oil"
  }, {
    tag: "BLR-1",
    name: "Aux boiler",
    severity: "normal",
    value: 6.8,
    unit: "bar"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12
    }
  }, assets.map(function (a) {
    return /*#__PURE__*/React.createElement(Card, {
      key: a.tag,
      header: a.tag,
      status: /*#__PURE__*/React.createElement(StatusPill, {
        state: a.severity,
        size: "sm"
      }),
      footer: /*#__PURE__*/React.createElement("span", {
        className: "ds-data"
      }, a.name)
    }, /*#__PURE__*/React.createElement(KpiStat, {
      label: a.unit,
      value: a.value == null ? "—" : a.value,
      tone: a.severity === "normal" ? "neutral" : a.severity,
      basis: a.severity === "unknown" ? "No data since 09:41 UTC" : "14:02 UTC"
    }));
  }));
}
function VesselDetail({
  vesselId,
  onBack,
  onInvestigate
}) {
  const data = window.CONSOLE_DATA;
  const vessel = data.vessels.filter(function (v) {
    return v.id === vesselId;
  })[0] || data.vessels[0];
  const findings = data.findings.filter(function (f) {
    return f.vesselId === vessel.id;
  });
  const [tab, setTab] = React.useState("Health summary");
  const [dialog, setDialog] = React.useState(false);
  const offline = vessel.severity === "unknown";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "-20px -24px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(VesselIdentity, {
    name: vessel.name,
    imo: vessel.imo,
    vesselClass: vessel.type,
    voyageState: vessel.voyage,
    severity: vessel.severity,
    freshness: vessel.updated,
    offline: offline,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "inverseGhost",
      size: "sm",
      onClick: onBack
    }, "Back to fleet"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "sm",
      onClick: function () {
        setDialog(true);
      }
    }, "Request vessel check"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    onChange: setTab,
    items: ["Health summary", {
      label: "Active findings",
      count: findings.length
    }, "Machinery", "Trends", "Maintenance", "Voyage context", "Timeline"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, offline ? /*#__PURE__*/React.createElement(Alert, {
    severity: "unknown",
    what: "Telemetry has not been received for 28 hours",
    where: vessel.name + " · vessel link",
    why: "Machinery condition is Unknown, not healthy. The last values shown below are from 09:41 UTC on 11 Mar.",
    next: "Confirm connectivity with the master and re-check after the next sync window.",
    timestamp: "11 Mar 09:41 UTC",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Contact vessel")
  }) : null, tab === "Health summary" || tab === "Machinery" ? /*#__PURE__*/React.createElement(MachineryGrid, {
    vessel: vessel
  }) : null, tab === "Active findings" || tab === "Health summary" ? findings.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Active findings",
    meta: findings.length + " open",
    padding: "0"
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: findings,
    onRowClick: function (f) {
      onInvestigate(f.id);
    },
    style: {
      border: "none",
      borderRadius: 0
    },
    columns: [{
      key: "id",
      label: "Finding",
      frozen: true,
      mono: true
    }, {
      key: "title",
      label: "What changed"
    }, {
      key: "asset",
      label: "Asset",
      mono: true
    }, {
      key: "severity",
      label: "Severity",
      render: function (f) {
        return /*#__PURE__*/React.createElement(StatusPill, {
          state: f.severity,
          size: "sm"
        });
      }
    }, {
      key: "confidence",
      label: "Confidence",
      numeric: true,
      render: function (f) {
        return f.confidence == null ? "—" : f.confidence + "%";
      }
    }, {
      key: "due",
      label: "Due",
      mono: true
    }]
  })), /*#__PURE__*/React.createElement(RecommendationPanel, {
    title: "Inspect ME-1 cylinder 4 injectors",
    evidence: "Exhaust temp +8 \xB0C vs 30-day baseline over 11 days; load and fuel index unchanged.",
    inferredCause: "Likely injector nozzle fouling",
    confidence: 82,
    confidenceBasis: "3 corroborating signals \xB7 21 days",
    action: "Vessel check at next port call, Singapore",
    owner: "Supt. J. Okafor",
    dueWindow: "within 72 h",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: function () {
        onInvestigate("F-2291");
      }
    }, "Open investigation"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Acknowledge"))
  })) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "circle-check",
    title: "No active findings for this vessel",
    missing: "All machinery is behaving within its own baseline. The last verified closure was 21 Feb 2026.",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "View closed findings")
  }) : null, tab === "Trends" || tab === "Health summary" ? /*#__PURE__*/React.createElement(ChartFrame, {
    question: "Is ME-1 exhaust temperature drifting from its baseline on " + vessel.name + "?",
    unit: "\xB0C",
    interval: "14 days",
    freshness: vessel.updated,
    source: "ME-1 sensor bus",
    footer: "Threshold 70 \xB0C \xB7 detection marked 01 Mar 04:10 UTC \xB7 accessible table available"
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: vessel.trend,
    width: 980,
    height: 200,
    threshold: 70,
    marker: vessel.trend.length - 2,
    gapFrom: offline ? 4 : undefined
  })) : null, tab === "Timeline" ? /*#__PURE__*/React.createElement(Panel, {
    title: "Aligned timeline",
    meta: "Telemetry \xB7 events \xB7 maintenance \xB7 weather"
  }, data.timeline.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      key: e.t,
      style: {
        display: "grid",
        gridTemplateColumns: "180px 120px 1fr",
        gap: 12,
        padding: "10px 0",
        borderBottom: "1px solid var(--border-hairline)",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-data",
      style: {
        color: "var(--slate-700)"
      }
    }, e.t), /*#__PURE__*/React.createElement("span", {
      className: "ds-label"
    }, e.kind), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-small)"
      }
    }, e.text));
  })) : null, tab === "Maintenance" ? /*#__PURE__*/React.createElement(Panel, {
    title: "Planned maintenance",
    meta: "From PMS \xB7 synced 06:00 UTC"
  }, /*#__PURE__*/React.createElement(DataTable, {
    style: {
      border: "none"
    },
    rows: [{
      id: "j1",
      job: "ME-1 injector overhaul",
      due: "Singapore · 18 Mar",
      state: "Deferred once",
      hours: "1 240 h"
    }, {
      id: "j2",
      job: "TC-A filter replacement",
      due: "At sea · 14 Mar",
      state: "Planned",
      hours: "820 h"
    }, {
      id: "j3",
      job: "AE-2 lube oil sample",
      due: "Singapore · 18 Mar",
      state: "Planned",
      hours: "310 h"
    }],
    columns: [{
      key: "job",
      label: "Job",
      frozen: true
    }, {
      key: "due",
      label: "Due",
      mono: true
    }, {
      key: "state",
      label: "State"
    }, {
      key: "hours",
      label: "Running hours",
      numeric: true
    }]
  })) : null, tab === "Voyage context" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(KpiStat, {
    label: "Speed over ground",
    value: "12.4",
    unit: "kn",
    basis: "14:02 UTC"
  }), /*#__PURE__*/React.createElement(KpiStat, {
    label: "Sea state",
    value: "SW 5",
    basis: "Weather feed \xB7 13:00 UTC"
  }), /*#__PURE__*/React.createElement(KpiStat, {
    label: "Day of voyage",
    value: "11",
    unit: "of 27",
    basis: "ETA 25 Mar 2026"
  }), /*#__PURE__*/React.createElement(KpiStat, {
    label: "Fuel consumption",
    value: "24.8",
    unit: "mt/day",
    delta: "1.6%",
    deltaDirection: "up",
    basis: "vs voyage plan"
  })) : null, /*#__PURE__*/React.createElement(DataFreshness, {
    timestamp: vessel.updated,
    offline: offline,
    source: "ME-1 sensor bus \xB7 noon report \xB7 PMS"
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    onClose: function () {
      setDialog(false);
    },
    title: "Request vessel check",
    subtitle: vessel.name + " · finding F-2291",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: function () {
        setDialog(false);
      }
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: function () {
        setDialog(false);
      }
    }, "Send request"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Instruction for vessel",
    htmlFor: "instr",
    hint: "Be specific about the component and the evidence you want back."
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "instr",
    defaultValue: "Inspect ME-1 cyl 4 injectors; photograph nozzle tips"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Required by",
    htmlFor: "by"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    id: "by",
    options: ["Next watch", "Within 72 hours", "At Singapore port call"]
  })))));
}
Object.assign(window, {
  VesselDetail,
  MachineryGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fleet-console/VesselDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fleet-console/data.js
try { (() => {
window.CONSOLE_DATA = {
  vessels: [{
    id: "v1",
    name: "MV Northern Ridge",
    imo: "9421887",
    type: "Bulk carrier · Kamsarmax",
    severity: "action",
    updated: "14:02 UTC",
    open: 4,
    temp: 71.4,
    voyage: "At sea · Rotterdam → Singapore",
    x: 36,
    y: 44,
    trend: [62, 63, 61, 64, 63, 66, 68, 67, 70, 71, 70, 73, 74, 71.4]
  }, {
    id: "v2",
    name: "MV Coral Meridian",
    imo: "9518992",
    type: "Bulk carrier · Supramax",
    severity: "critical",
    updated: "13:58 UTC",
    open: 2,
    temp: 88.1,
    voyage: "At sea · Santos → Qingdao",
    x: 66,
    y: 62,
    trend: [70, 72, 74, 77, 79, 81, 83, 84, 86, 87, 88, 88, 88, 88.1]
  }, {
    id: "v3",
    name: "MV Aster Bay",
    imo: "9603114",
    type: "Bulk carrier · Handysize",
    severity: "unknown",
    updated: "09:41 UTC · 11 Mar",
    open: 0,
    temp: null,
    voyage: "In port · Durban",
    x: 52,
    y: 74,
    trend: [61, 62, 61, 63, 62, 62, 62]
  }, {
    id: "v4",
    name: "MV Skagen Trader",
    imo: "9377421",
    type: "Bulk carrier · Panamax",
    severity: "watch",
    updated: "14:01 UTC",
    open: 1,
    temp: 66.8,
    voyage: "At sea · Vancouver → Yokohama",
    x: 82,
    y: 34,
    trend: [62, 63, 62, 63, 64, 64, 65, 65, 66, 66, 67, 66, 67, 66.8]
  }, {
    id: "v5",
    name: "MV Lofoten Pearl",
    imo: "9455102",
    type: "Bulk carrier · Kamsarmax",
    severity: "normal",
    updated: "14:02 UTC",
    open: 0,
    temp: 63.2,
    voyage: "At sea · Tubarão → Rotterdam",
    x: 24,
    y: 30,
    trend: [62, 63, 62, 63, 62, 63, 63, 62, 63, 63, 62, 63, 63, 63.2]
  }, {
    id: "v6",
    name: "MV Helgoland",
    imo: "9299317",
    type: "Bulk carrier · Supramax",
    severity: "normal",
    updated: "14:00 UTC",
    open: 0,
    temp: 62.7,
    voyage: "In port · Hamburg",
    x: 30,
    y: 22,
    trend: [62, 62, 63, 62, 63, 62, 62, 63, 62, 63, 62, 63, 62, 62.7]
  }],
  findings: [{
    id: "F-2291",
    vessel: "MV Northern Ridge",
    vesselId: "v1",
    asset: "ME-1 · cyl 4",
    title: "Exhaust temperature deviation",
    severity: "action",
    confidence: 82,
    detected: "01 Mar 2026 04:10 UTC",
    owner: "Supt. J. Okafor",
    due: "within 72 h"
  }, {
    id: "F-2288",
    vessel: "MV Coral Meridian",
    vesselId: "v2",
    asset: "TC-A",
    title: "Turbocharger overspeed with rising scavenge pressure",
    severity: "critical",
    confidence: 91,
    detected: "10 Mar 2026 22:36 UTC",
    owner: "Supt. R. Vella",
    due: "immediate"
  }, {
    id: "F-2280",
    vessel: "MV Skagen Trader",
    vesselId: "v4",
    asset: "AE-2",
    title: "Lubricating oil temperature trending above baseline",
    severity: "watch",
    confidence: 64,
    detected: "27 Feb 2026 11:02 UTC",
    owner: "Unassigned",
    due: "within 14 d"
  }, {
    id: "F-2274",
    vessel: "MV Aster Bay",
    vesselId: "v3",
    asset: "Vessel link",
    title: "No machinery data received for 28 h",
    severity: "unknown",
    confidence: null,
    detected: "11 Mar 2026 09:41 UTC",
    owner: "Fleet ops",
    due: "today"
  }],
  timeline: [{
    t: "12 Mar 14:02 UTC",
    kind: "telemetry",
    text: "ME-1 cyl 4 exhaust temp 71.4 °C · load 68%"
  }, {
    t: "11 Mar 06:20 UTC",
    kind: "event",
    text: "Confidence raised to 82% — fuel index ruled out as cause"
  }, {
    t: "08 Mar 09:15 UTC",
    kind: "maintenance",
    text: "Planned maintenance: ME-1 injector overhaul deferred to Singapore"
  }, {
    t: "04 Mar 17:48 UTC",
    kind: "weather",
    text: "SW 6, heavy swell — load variability noted, deviation persisted"
  }, {
    t: "01 Mar 04:10 UTC",
    kind: "detection",
    text: "Deviation detected: +3 °C vs 30-day baseline, sustained 36 h"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fleet-console/data.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/DemoSection.jsx
try { (() => {
const {
  SectionLabel,
  Button,
  FormField,
  TextInput,
  SelectInput,
  Checkbox,
  Alert,
  Logotype,
  Icon
} = window.MaritimeAIDesignSystem_cde923;
function DemoSection({
  innerRef
}) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    company: "",
    role: "",
    fleet: "",
    challenge: ""
  });
  const [summary, setSummary] = React.useState(true);
  const invalid = sent && !form.email;
  return /*#__PURE__*/React.createElement("section", {
    ref: innerRef,
    style: {
      background: "var(--ink-950)",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--section-y-desktop) var(--margin-desktop)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    coordinate: "09 / 09",
    onDark: true
  }, "Technical demo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 7fr",
      gap: "var(--gutter-desktop)",
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      color: "var(--white)",
      margin: 0,
      maxWidth: "20ch"
    }
  }, "Book a technical demo"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: "var(--text-body-lg)",
      color: "var(--text-inverse-secondary)",
      maxWidth: "46ch"
    }
  }, "45 minutes with an engineer. We connect a sample of your machinery data, walk one real finding end to end, and show where the platform states uncertainty."), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: 20,
      paddingLeft: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: "var(--text-small)",
      color: "var(--text-inverse-secondary)"
    }
  }, ["Who should attend: superintendent or reliability engineer", "What you will see: fleet overview, one anomaly investigation, closure loop", "What we need: vessel and machinery types, not credentials"].map(function (t) {
    return /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--signal-cyan)"
    }), t);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-panel)",
      padding: 24,
      color: "var(--text-body)"
    }
  }, sent && form.email ? /*#__PURE__*/React.createElement(Alert, {
    severity: "normal",
    what: "Request received",
    where: form.email,
    why: "An engineer will reply within one working day with two proposed times.",
    next: "Add any vessel documentation you want reviewed in your reply.",
    timestamp: "Just now"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Work email",
    htmlFor: "email",
    required: true,
    error: invalid ? "Enter your work email so we can reply." : undefined,
    hint: invalid ? undefined : "We reply from a named engineer."
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "email",
    type: "email",
    placeholder: "name@company.com",
    invalid: invalid,
    value: form.email,
    onChange: function (e) {
      setForm({
        ...form,
        email: e.target.value
      });
    }
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Company",
    htmlFor: "company"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "company",
    placeholder: "Ship manager or owner",
    value: form.company,
    onChange: function (e) {
      setForm({
        ...form,
        company: e.target.value
      });
    }
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Role",
    htmlFor: "role"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    id: "role",
    placeholder: "Select role",
    value: form.role,
    onChange: function (e) {
      setForm({
        ...form,
        role: e.target.value
      });
    },
    options: ["Technical director", "Superintendent", "Reliability engineer", "Fleet operations", "Executive"]
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Fleet size and type",
    htmlFor: "fleet",
    hint: "Helps us prepare comparable vessels."
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "fleet",
    placeholder: "e.g. 24 bulk carriers",
    value: form.fleet,
    onChange: function (e) {
      setForm({
        ...form,
        fleet: e.target.value
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Operating challenge",
    htmlFor: "challenge",
    hint: "One sentence is enough \u2014 it decides which finding we walk through."
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "challenge",
    placeholder: "e.g. Repeat ME findings diagnosed too late for spares",
    value: form.challenge,
    onChange: function (e) {
      setForm({
        ...form,
        challenge: e.target.value
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: summary,
    onChange: function () {
      setSummary(!summary);
    },
    label: "Send the demo summary and evidence pack afterwards"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: function () {
      setSent(true);
    }
  }, "Book technical demo")))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "32px var(--margin-desktop)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    onDark: true,
    size: 18
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24,
      fontSize: "var(--text-small)"
    }
  }, ["Product", "Platform", "Security", "Resources", "Careers", "Contact"].map(function (l) {
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      style: {
        color: "rgba(255,255,255,0.72)",
        borderBottom: "none"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    className: "ds-data",
    style: {
      color: "rgba(255,255,255,0.44)"
    }
  }, "ALL SCREENS SHOW SYNTHETIC DEMO DATA"))));
}
Object.assign(window, {
  DemoSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/DemoSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
const {
  TopNav,
  Waterline,
  Button,
  SectionLabel,
  StatusPill,
  KpiStat,
  Sparkline,
  DataFreshness
} = window.MaritimeAIDesignSystem_cde923;
function HeroProductView() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-800)",
      border: "1px solid var(--border-dark)",
      borderRadius: "var(--radius-panel)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 14px",
      borderBottom: "1px solid var(--border-dark)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-data",
    style: {
      color: "rgba(255,255,255,0.62)"
    }
  }, "FLEET \xB7 31 VESSELS"), /*#__PURE__*/React.createElement(DataFreshness, {
    timestamp: "14:02 UTC",
    onDark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(KpiStat, {
    label: "Requires action",
    value: "7",
    unit: "vessels",
    tone: "action",
    onDark: true
  }), /*#__PURE__*/React.createElement(KpiStat, {
    label: "Open findings",
    value: "19",
    onDark: true
  }), /*#__PURE__*/React.createElement(KpiStat, {
    label: "Telemetry gaps",
    value: "1",
    tone: "unknown",
    onDark: true
  })), [["MV Northern Ridge", "action", [62, 63, 61, 64, 68, 71, 74]], ["MV Coral Meridian", "critical", [70, 74, 79, 83, 86, 88, 88]], ["MV Skagen Trader", "normal", [62, 63, 62, 63, 62, 63, 63]]].map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r[0],
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        height: 44,
        borderTop: "1px solid var(--border-dark)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-data)",
        color: "var(--white)"
      }
    }, r[0]), /*#__PURE__*/React.createElement(Sparkline, {
      data: r[2],
      width: 92,
      height: 22,
      color: r[1] === "normal" ? "rgba(255,255,255,0.55)" : "var(--signal-cyan)"
    }), /*#__PURE__*/React.createElement(StatusPill, {
      state: r[1],
      size: "sm",
      onDark: true
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-dark)",
      paddingTop: 12,
      fontSize: "var(--text-data)",
      color: "rgba(255,255,255,0.62)"
    }
  }, "Synthetic demo data \xB7 vessel names illustrative")));
}
function Hero({
  onDemo
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-950)",
      color: "var(--white)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    onDark: true,
    items: ["Product", "Solutions", "Platform", "Resources", "Company"],
    active: "Product",
    secondary: "Sign in",
    onCta: onDemo
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "72px var(--margin-desktop) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--gutter-desktop)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    coordinate: "01 / 09",
    onDark: true
  }, "Fleet intelligence for technical operations"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-h1)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-hero)",
      color: "var(--white)",
      margin: "20px 0 0",
      maxWidth: "22ch"
    }
  }, "Know what your vessels need\u2014before downtime decides for you."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: "var(--text-body-lg)",
      color: "var(--text-inverse-secondary)",
      maxWidth: "56ch",
      lineHeight: 1.6
    }
  }, "dAIRE unifies machinery, voyage, maintenance and operational data to detect developing faults, explain likely causes, and recommend the next corrective action."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: onDemo
  }, "Book a technical demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverseGhost",
    size: "lg",
    iconRight: "arrow-down"
  }, "See how it works"))), /*#__PURE__*/React.createElement(HeroProductView, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "64px 0 56px"
    }
  }, /*#__PURE__*/React.createElement(Waterline, {
    marker: {
      label: "Intervention",
      at: 62
    },
    above: [{
      label: "Vessel",
      value: "MV Northern Ridge · IMO 9421887"
    }, {
      label: "Voyage",
      value: "Rotterdam → Singapore · day 11"
    }, {
      label: "Operating state",
      value: "At sea · 12.4 kn · SW 5"
    }],
    below: [{
      label: "Evidence",
      value: "ME-1 cyl 4 exhaust temperature +8 °C vs 30-day baseline"
    }, {
      label: "Likely cause",
      value: "Injector nozzle fouling · 82% confidence"
    }, {
      label: "Recommended action",
      value: "Vessel check at Singapore, within 72 h"
    }]
  }))));
}
Object.assign(window, {
  Hero,
  HeroProductView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Sections.jsx
try { (() => {
const {
  SectionLabel,
  Card,
  Panel,
  Button,
  StatusPill,
  KpiStat,
  ChartFrame,
  Sparkline,
  ConfidenceMeter,
  RecommendationPanel,
  DataFreshness,
  Tabs
} = window.MaritimeAIDesignSystem_cde923;
function Shell({
  children,
  label,
  coordinate,
  title,
  lede,
  tone = "light",
  style
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: dark ? "var(--ink-950)" : tone === "quiet" ? "var(--surface-quiet)" : "var(--surface-page)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--section-y-desktop) var(--margin-desktop)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    coordinate: coordinate,
    onDark: dark
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--gutter-desktop)",
      marginTop: 20,
      marginBottom: 40,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      color: dark ? "var(--white)" : "var(--text-strong)",
      margin: 0,
      maxWidth: "24ch"
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-lg)",
      color: dark ? "var(--text-inverse-secondary)" : "var(--text-secondary)",
      maxWidth: "52ch"
    }
  }, lede) : null), children));
}
function CostOfUncertainty() {
  return /*#__PURE__*/React.createElement(Shell, {
    coordinate: "03 / 09",
    label: "Cost of uncertainty",
    tone: "quiet",
    title: "Every unexplained signal costs hours before it costs money.",
    lede: "Figures below are illustrative of the operating exposure our customers measure. Replace with verified customer data before publication."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--gutter-desktop)",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 28
    }
  }, [["Unplanned downtime", "18", "hours per vessel / yr", "Illustrative · not verified"], ["Troubleshooting delay", "6", "days to root cause", "Illustrative · not verified"], ["Fuel exposure", "3.4", "% avoidable overconsumption", "Illustrative · not verified"], ["Deferred maintenance", "27", "% of findings reopened", "Illustrative · not verified"]].map(function (k) {
    return /*#__PURE__*/React.createElement(KpiStat, {
      key: k[0],
      label: k[0],
      value: k[1],
      unit: k[2],
      basis: k[3]
    });
  })));
}
function Workflow() {
  const steps = [["Connect data", "plug", "Machinery buses, noon reports, planned maintenance, voyage and weather sources are normalised per vessel."], ["Detect change", "activity", "Behaviour is compared against each asset's own baseline and sister-vessel behaviour, not a generic threshold."], ["Diagnose cause", "search-check", "Candidate causes are ranked with the evidence and confidence that supports them."], ["Recommend action", "clipboard-check", "A specific corrective action with owner, due window and expected verification."], ["Verify outcome", "circle-check", "The finding closes only when observed behaviour returns to expected."]];
  return /*#__PURE__*/React.createElement(Shell, {
    coordinate: "04 / 09",
    label: "Platform workflow",
    title: "From raw telemetry to a verified outcome.",
    lede: "Five stages, each answerable by a shore team without opening a spreadsheet."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "var(--gutter-desktop)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, steps.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: s[0],
      style: {
        paddingTop: 20,
        borderTop: "2px solid " + (i === 0 ? "var(--signal-cyan)" : "transparent"),
        marginTop: -1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-data",
      style: {
        color: "var(--slate-500)"
      }
    }, "0" + (i + 1)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "var(--text-h3)",
        margin: "6px 0 8px"
      }
    }, s[0]), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-small)",
        color: "var(--text-secondary)"
      }
    }, s[2]));
  })));
}
function ProductEvidence() {
  return /*#__PURE__*/React.createElement(Shell, {
    coordinate: "05 / 09",
    label: "Product evidence",
    tone: "dark",
    title: "The interface shows its work\u2014including what it does not know.",
    lede: "Observed evidence, inferred cause and confidence stay visibly separate. Partial data reads as Unknown, never healthy."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--gutter-desktop)"
    }
  }, /*#__PURE__*/React.createElement(ChartFrame, {
    onDark: true,
    question: "Is ME-1 exhaust temperature drifting from its baseline?",
    unit: "\xB0C",
    interval: "14 days",
    freshness: "14:02 UTC",
    source: "ME-1 sensor bus",
    footer: "Threshold 70 \xB0C \xB7 event marked 09 Mar 04:10 UTC \xB7 accessible table available"
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: [62, 63, 61, 64, 63, 66, 68, 67, 70, 71, 70, 73, 74, 71.4],
    width: 620,
    height: 190,
    threshold: 70,
    marker: 12,
    color: "var(--signal-cyan)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RecommendationPanel, {
    title: "Inspect ME-1 cylinder 4 injectors",
    evidence: "Exhaust temp +8 \xB0C vs baseline over 11 days; load and fuel index unchanged.",
    inferredCause: "Likely injector nozzle fouling",
    confidence: 82,
    confidenceBasis: "3 corroborating signals \xB7 21 days",
    action: "Vessel check at next port call, Singapore",
    owner: "Supt. J. Okafor",
    dueWindow: "within 72 h",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Assign"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Open evidence"))
  }), /*#__PURE__*/React.createElement(Panel, {
    onDark: true,
    title: "Unknown state",
    meta: "MV Aster Bay"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    state: "unknown",
    onDark: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-inverse-secondary)"
    }
  }, "No machinery data for 28 h.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(DataFreshness, {
    timestamp: "09:41 UTC \xB7 11 Mar 2026",
    offline: true,
    onDark: true
  }))))));
}
function SolutionsByRole() {
  const [role, setRole] = React.useState("Technical management");
  const copy = {
    "Technical management": ["Defend the maintenance plan with evidence.", "See which vessels are drifting from their own baseline, what it is costing, and which interventions were verified as effective."],
    "Fleet operations": ["Keep the voyage moving.", "Understand how operating state, weather and machinery condition interact before a decision has to be made at sea."],
    "Reliability engineering": ["Work from raw values, not summaries.", "Preserve provenance, compare expected against observed behaviour, and align telemetry with maintenance history on one timeline."],
    "Executive oversight": ["A defensible view of fleet risk.", "Unresolved risk, data coverage and verified outcomes per vessel, with the basis for every figure."]
  };
  return /*#__PURE__*/React.createElement(Shell, {
    coordinate: "06 / 09",
    label: "Solutions by role",
    title: "Four teams, one shared record of evidence.",
    lede: "Each role starts from the operational question it is accountable for."
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(copy),
    active: role,
    onChange: setRole
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--gutter-desktop)",
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h3)",
      margin: 0
    }
  }, copy[role][0]), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)",
      maxWidth: "60ch"
    }
  }, copy[role][1]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "arrow-right"
  }, "View the ", role.toLowerCase(), " workflow"))), /*#__PURE__*/React.createElement(Card, {
    header: "What this role sees first",
    status: /*#__PURE__*/React.createElement(StatusPill, {
      state: "action",
      size: "sm"
    }),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "ds-data"
    }, "Illustrative view"), /*#__PURE__*/React.createElement("span", {
      className: "ds-data"
    }, "14:02 UTC"))
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("li", null, "Vessels requiring action, sorted by operational priority"), /*#__PURE__*/React.createElement("li", null, "Data freshness and coverage per vessel"), /*#__PURE__*/React.createElement("li", null, "Unresolved risk with the basis for each severity"), /*#__PURE__*/React.createElement("li", null, "Outcomes verified in the last 30 days")))));
}
function Trust() {
  const items = [["Deployment", "Cloud, hybrid or on-premise. Vessel-side collection runs without a permanent link."], ["Security", "SSO, role-based access, audit trail on every acknowledgement and closure."], ["Integrations", "Machinery buses, planned maintenance systems, noon reports, weather providers."], ["Data ownership", "Your operational data remains yours; export is available at any time."]];
  return /*#__PURE__*/React.createElement(Shell, {
    coordinate: "07 / 09",
    label: "Trust and deployment",
    tone: "quiet",
    title: "Built to sit inside your existing technical operation.",
    lede: "No customer logos, certifications or class approvals are shown here \u2014 add only what can be verified."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--gutter-desktop)"
    }
  }, items.map(function (it) {
    return /*#__PURE__*/React.createElement("div", {
      key: it[0],
      style: {
        borderTop: "1px solid var(--border-hairline)",
        paddingTop: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-label"
    }, it[0]), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 8,
        fontSize: "var(--text-small)",
        color: "var(--text-secondary)"
      }
    }, it[1]));
  })));
}
function CaseStudy() {
  return /*#__PURE__*/React.createElement(Shell, {
    coordinate: "08 / 09",
    label: "Case study",
    title: "Bulk carrier fleet, 31 vessels, 9 months.",
    lede: "Structure only: problem, deployment scope, measured outcome, timeframe and a customer quote. Figures are placeholders pending verification."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--gutter-desktop)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gutter-desktop)"
    }
  }, [["Problem", "Repeat main-engine findings were being diagnosed only after arrival, delaying spares by two port calls."], ["Deployment scope", "31 vessels, ME and AE machinery buses, planned maintenance system, noon reports."], ["Measured outcome", "Placeholder — requires verified customer figure before use."], ["Timeframe", "9 months from first vessel connected to verified closure loop."]].map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p[0],
      style: {
        borderTop: "1px solid var(--border-hairline)",
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-label"
    }, p[0]), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 8,
        fontSize: "var(--text-small)",
        color: "var(--text-secondary)"
      }
    }, p[1]));
  })), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)"
    }
  }, "\u201CCustomer quote pending approval. Keep the structure; do not fabricate attribution.\u201D"), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-data)",
      color: "var(--text-muted)"
    }
  }, "Role \xB7 Company \u2014 to be confirmed"))));
}
Object.assign(window, {
  Shell,
  CostOfUncertainty,
  Workflow,
  ProductEvidence,
  SolutionsByRole,
  Trust,
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-preview/SiteBody.jsx
try { (() => {
/* Website preview — body sections. All light beige; no dark section. */
const {
  Button,
  Card,
  Panel,
  StatusPill,
  KpiStat,
  Sparkline,
  ChartFrame,
  ConfidenceMeter,
  DataFreshness,
  RecommendationPanel,
  SectionLabel,
  Tabs,
  FormField,
  TextInput,
  SelectInput,
  Checkbox,
  Alert,
  Logotype,
  Icon
} = window.MaritimeAIDesignSystem_cde923;
function Band({
  children,
  label,
  coordinate,
  title,
  lede,
  quiet = false,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: quiet ? "var(--surface-quiet)" : "var(--surface-page)",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--section-y-desktop) var(--margin-desktop)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    coordinate: coordinate
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--gutter-desktop)",
      margin: "20px 0 40px",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      margin: 0,
      maxWidth: "24ch"
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)",
      maxWidth: "52ch"
    }
  }, lede) : null), children));
}
function Exposure() {
  return /*#__PURE__*/React.createElement(Band, {
    quiet: true,
    coordinate: "02 / 07",
    label: "Cost of uncertainty",
    title: "Every unexplained signal costs hours before it costs money.",
    lede: "Illustrative of the exposure our customers measure. Replace with verified figures before publication."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--gutter-desktop)",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 28
    }
  }, [["Unplanned downtime", "18", "hours per vessel / yr"], ["Troubleshooting delay", "6", "days to root cause"], ["Fuel exposure", "3.4", "% avoidable overconsumption"], ["Deferred maintenance", "27", "% of findings reopened"]].map(function (k) {
    return /*#__PURE__*/React.createElement(KpiStat, {
      key: k[0],
      label: k[0],
      value: k[1],
      unit: k[2],
      basis: "Illustrative \xB7 not verified"
    });
  })));
}
function Workflow() {
  const steps = [["Connect data", "Machinery buses, noon reports, planned maintenance, voyage and weather sources are normalised per vessel."], ["Detect change", "Behaviour is compared against each asset's own baseline and sister-vessel behaviour, not a generic threshold."], ["Diagnose cause", "Candidate causes are ranked with the evidence and confidence that supports them."], ["Recommend action", "A specific corrective action with owner, due window and expected verification."], ["Verify outcome", "The finding closes only when observed behaviour returns to expected."]];
  return /*#__PURE__*/React.createElement(Band, {
    coordinate: "03 / 07",
    label: "Platform workflow",
    title: "From raw telemetry to a verified outcome.",
    lede: "Five stages, each answerable by a shore team without opening a spreadsheet."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: "var(--gutter-desktop)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, steps.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: s[0],
      style: {
        paddingTop: 20,
        marginTop: -1,
        borderTop: "2px solid " + (i === 0 ? "var(--signal-cyan-dark)" : "transparent")
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-data",
      style: {
        color: "var(--text-muted)"
      }
    }, "0" + (i + 1)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "var(--text-h3)",
        margin: "6px 0 8px"
      }
    }, s[0]), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-small)",
        color: "var(--text-secondary)"
      }
    }, s[1]));
  })));
}
function Evidence() {
  return /*#__PURE__*/React.createElement(Band, {
    coordinate: "04 / 07",
    label: "Product evidence",
    quiet: true,
    title: "The interface shows its work\u2014including what it does not know.",
    lede: "Observed evidence, inferred cause and confidence stay visibly separate. Partial data reads as Unknown, never healthy."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--gutter-desktop)"
    }
  }, /*#__PURE__*/React.createElement(ChartFrame, {
    question: "Is ME-1 exhaust temperature drifting from its baseline?",
    unit: "\xB0C",
    interval: "14 days",
    freshness: "14:02 UTC",
    source: "ME-1 sensor bus",
    footer: "Threshold 70 \xB0C \xB7 event marked 09 Mar 04:10 UTC \xB7 accessible table available"
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: [62, 63, 61, 64, 63, 66, 68, 67, 70, 71, 70, 73, 74, 71.4],
    width: 620,
    height: 190,
    threshold: 70,
    marker: 12
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RecommendationPanel, {
    title: "Inspect ME-1 cylinder 4 injectors",
    evidence: "Exhaust temp +8 \xB0C vs baseline over 11 days; load and fuel index unchanged.",
    inferredCause: "Likely injector nozzle fouling",
    confidence: 82,
    confidenceBasis: "3 corroborating signals \xB7 21 days",
    action: "Vessel check at next port call, Singapore",
    owner: "Supt. J. Okafor",
    dueWindow: "within 72 h",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Assign"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Open evidence"))
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Unknown state",
    meta: "MV Aster Bay"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    state: "unknown"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)"
    }
  }, "No machinery data for 28 h.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(DataFreshness, {
    timestamp: "09:41 UTC \xB7 11 Mar 2026",
    offline: true
  }))))));
}
function Screens() {
  const shots = [["Fleet health", "../../assets/product-screens/health-dashboard.png", "Priority-sorted fleet state with coverage and open findings."], ["Live monitoring", "../../assets/product-screens/monitoring.png", "Raw machinery values with thresholds and telemetry gaps drawn explicitly."], ["Predictive findings", "../../assets/product-screens/predictive.png", "Ranked candidate causes with the confidence that supports each."]];
  const [active, setActive] = React.useState(shots[0][0]);
  const shot = shots.filter(function (s) {
    return s[0] === active;
  })[0];
  return /*#__PURE__*/React.createElement(Band, {
    coordinate: "05 / 07",
    label: "Inside the console",
    title: "Three views your team will live in.",
    lede: "Screenshots from the current dAIRE console. Layout and data are real; the surface is being re-skinned to this palette."
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: shots.map(function (s) {
      return s[0];
    }),
    active: active,
    onChange: setActive
  }), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: "24px 0 0",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: shot[1],
    alt: shot[0],
    style: {
      display: "block",
      width: "100%",
      height: 520,
      objectFit: "cover",
      objectPosition: "top center"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      padding: "12px 16px",
      borderTop: "1px solid var(--border-hairline)",
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, shot[2]), /*#__PURE__*/React.createElement("span", {
    className: "ds-data",
    style: {
      color: "var(--text-muted)"
    }
  }, "SYNTHETIC DEMO DATA"))));
}
function Roles() {
  const copy = {
    "Technical management": ["Defend the maintenance plan with evidence.", "See which vessels are drifting from their own baseline, what it is costing, and which interventions were verified as effective."],
    "Fleet operations": ["Keep the voyage moving.", "Understand how operating state, weather and machinery condition interact before a decision has to be made at sea."],
    "Reliability engineering": ["Work from raw values, not summaries.", "Preserve provenance, compare expected against observed behaviour, and align telemetry with maintenance history on one timeline."],
    "Executive oversight": ["A defensible view of fleet risk.", "Unresolved risk, data coverage and verified outcomes per vessel, with the basis for every figure."]
  };
  const [role, setRole] = React.useState("Technical management");
  return /*#__PURE__*/React.createElement(Band, {
    quiet: true,
    coordinate: "06 / 07",
    label: "Solutions by role",
    title: "Four teams, one shared record of evidence.",
    lede: "Each role starts from the operational question it is accountable for."
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(copy),
    active: role,
    onChange: setRole
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--gutter-desktop)",
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h3)",
      margin: 0
    }
  }, copy[role][0]), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)",
      maxWidth: "60ch"
    }
  }, copy[role][1]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "arrow-right"
  }, "View the ", role.toLowerCase(), " workflow"))), /*#__PURE__*/React.createElement(Card, {
    header: "What this role sees first",
    status: /*#__PURE__*/React.createElement(StatusPill, {
      state: "action",
      size: "sm"
    }),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "ds-data"
    }, "Illustrative view"), /*#__PURE__*/React.createElement("span", {
      className: "ds-data"
    }, "14:02 UTC"))
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("li", null, "Vessels requiring action, sorted by operational priority"), /*#__PURE__*/React.createElement("li", null, "Data freshness and coverage per vessel"), /*#__PURE__*/React.createElement("li", null, "Unresolved risk with the basis for each severity"), /*#__PURE__*/React.createElement("li", null, "Outcomes verified in the last 30 days")))));
}
function DemoBand({
  innerRef
}) {
  const [sent, setSent] = React.useState(false);
  const [summary, setSummary] = React.useState(true);
  const [form, setForm] = React.useState({
    email: "",
    company: "",
    role: "",
    fleet: ""
  });
  const invalid = sent && !form.email;
  const set = function (k) {
    return function (e) {
      const n = {};
      n[k] = e.target.value;
      setForm(Object.assign({}, form, n));
    };
  };
  return /*#__PURE__*/React.createElement("section", {
    ref: innerRef,
    id: "demo",
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--section-y-desktop) var(--margin-desktop)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    coordinate: "07 / 07"
  }, "Technical demo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 7fr",
      gap: "var(--gutter-desktop)",
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      margin: 0,
      maxWidth: "18ch"
    }
  }, "Book a technical demo"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)",
      maxWidth: "46ch"
    }
  }, "45 minutes with an engineer. We connect a sample of your machinery data, walk one real finding end to end, and show where the platform states uncertainty."), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: 20,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)"
    }
  }, ["Who should attend: superintendent or reliability engineer", "What you will see: fleet overview, one anomaly investigation, closure loop", "What we need: vessel and machinery types, not credentials"].map(function (t) {
    return /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--signal-cyan-dark)"
    }), t);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      padding: 24
    }
  }, sent && form.email ? /*#__PURE__*/React.createElement(Alert, {
    severity: "normal",
    what: "Request received",
    where: form.email,
    why: "An engineer will reply within one working day with two proposed times.",
    next: "Add any vessel documentation you want reviewed in your reply.",
    timestamp: "Just now"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Work email",
    htmlFor: "w-email",
    required: true,
    error: invalid ? "Enter your work email so we can reply." : undefined,
    hint: invalid ? undefined : "We reply from a named engineer."
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "w-email",
    type: "email",
    placeholder: "name@company.com",
    invalid: invalid,
    value: form.email,
    onChange: set("email")
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Company",
    htmlFor: "w-co"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "w-co",
    placeholder: "Ship manager or owner",
    value: form.company,
    onChange: set("company")
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Role",
    htmlFor: "w-role"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    id: "w-role",
    placeholder: "Select role",
    value: form.role,
    onChange: set("role"),
    options: ["Technical director", "Superintendent", "Reliability engineer", "Fleet operations", "Executive"]
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Fleet size and type",
    htmlFor: "w-fleet",
    hint: "Helps us prepare comparable vessels."
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "w-fleet",
    placeholder: "e.g. 24 bulk carriers",
    value: form.fleet,
    onChange: set("fleet")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: summary,
    onChange: function () {
      setSummary(!summary);
    },
    label: "Send the demo summary and evidence pack afterwards"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: function () {
      setSent(true);
    }
  }, "Book technical demo")))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--surface-quiet)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "32px var(--margin-desktop)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    size: 18,
    brand: "dAIRE"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 24,
      fontSize: "var(--text-small)"
    }
  }, ["Product", "Platform", "Security", "Resources", "Careers", "Contact"].map(function (l) {
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#demo",
      style: {
        borderBottom: "none",
        color: "var(--text-secondary)"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    className: "ds-data",
    style: {
      color: "var(--text-muted)"
    }
  }, "DAIRE PTE. LTD. \xB7 SYNTHETIC DEMO DATA"))));
}
Object.assign(window, {
  Band,
  Exposure,
  Workflow,
  Evidence,
  Screens,
  Roles,
  DemoBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-preview/SiteBody.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-preview/SiteChrome.jsx
try { (() => {
/* Website preview — shared page chrome. Light beige, hairline-first. */
const {
  Button,
  IconButton,
  Icon,
  Logotype,
  SectionLabel,
  StatusPill,
  Waterline
} = window.MaritimeAIDesignSystem_cde923;
function SiteHeader({
  onDemo
}) {
  const [open, setOpen] = React.useState(null);
  const items = ["Product", "Solutions", "Platform", "Resources", "Company"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(253,251,246,0.92)",
      backdropFilter: "saturate(1.2)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--margin-desktop)",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    size: 20,
    brand: "dAIRE"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      flex: 1
    }
  }, items.map(function (l) {
    const on = open === l;
    return /*#__PURE__*/React.createElement("button", {
      key: l,
      type: "button",
      onClick: function () {
        setOpen(on ? null : l);
      },
      style: {
        background: "none",
        border: "none",
        padding: "6px 0",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-small)",
        fontWeight: on ? 600 : 500,
        color: on ? "var(--ink-950)" : "var(--text-secondary)",
        boxShadow: on ? "inset 0 -2px 0 var(--signal-cyan-dark)" : "none",
        transition: "var(--transition-ui)"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("a", {
    href: "#demo",
    style: {
      fontSize: "var(--text-small)",
      fontWeight: 500,
      color: "var(--text-secondary)",
      borderBottom: "none"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: onDemo
  }, "Book technical demo")), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "20px var(--margin-desktop)",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, [["Fleet overview", "Priority-sorted view of every vessel"], ["Anomaly investigation", "Expected against observed, with evidence"], ["Maintenance loop", "Recommend, assign, verify closure"], ["Data coverage", "Know what is reporting and what is not"]].map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c[0]
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-small)",
        fontWeight: 600,
        color: "var(--ink-950)"
      }
    }, c[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-data)",
        color: "var(--text-muted)",
        marginTop: 4
      }
    }, c[1]));
  }))) : null);
}
function SiteHero({
  onDemo
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "88px var(--margin-desktop) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "7fr 5fr",
      gap: "var(--gutter-desktop)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    coordinate: "01 / 07"
  }, "Fleet intelligence for technical operations"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-h1)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-hero)",
      margin: "20px 0 0",
      maxWidth: "21ch"
    }
  }, "Know what your vessels need\u2014before downtime decides for you."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)",
      maxWidth: "54ch"
    }
  }, "dAIRE unifies machinery, voyage, maintenance and operational data to detect developing faults, explain likely causes, and recommend the next corrective action."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "calendar-check",
    onClick: onDemo
  }, "Book a technical demo"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconRight: "arrow-down"
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      marginTop: 32,
      paddingTop: 20,
      borderTop: "1px solid var(--border-hairline)"
    }
  }, [["Deployment", "Cloud · hybrid · on-premise"], ["Vessel link", "Works without a permanent connection"], ["Data ownership", "Yours, exportable at any time"]].map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f[0]
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-label"
    }, f[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-data)",
        color: "var(--text-secondary)",
        marginTop: 3
      }
    }, f[1]));
  }))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 14px",
      borderBottom: "1px solid var(--border-hairline)",
      background: "var(--surface-quiet)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-label"
  }, "dAIRE console \xB7 fleet health"), /*#__PURE__*/React.createElement(StatusPill, {
    state: "action",
    size: "sm"
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product-screens/health-dashboard.png",
    alt: "dAIRE fleet health dashboard",
    style: {
      display: "block",
      width: "100%",
      height: 360,
      objectFit: "cover",
      objectPosition: "top left"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "10px 14px",
      borderTop: "1px solid var(--border-hairline)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-label)",
      color: "var(--text-muted)"
    }
  }, "PRODUCT SCREENSHOT \xB7 SYNTHETIC DEMO DATA"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 0 64px"
    }
  }, /*#__PURE__*/React.createElement(Waterline, {
    marker: {
      label: "Intervention",
      at: 62
    },
    above: [{
      label: "Vessel",
      value: "MV Northern Ridge · IMO 9421887"
    }, {
      label: "Voyage",
      value: "Rotterdam → Singapore · day 11"
    }, {
      label: "Operating state",
      value: "At sea · 12.4 kn · SW 5"
    }],
    below: [{
      label: "Evidence",
      value: "ME-1 cyl 4 exhaust temp +8 °C vs 30-day baseline"
    }, {
      label: "Likely cause",
      value: "Injector nozzle fouling · 82% confidence"
    }, {
      label: "Recommended action",
      value: "Vessel check at Singapore, within 72 h"
    }]
  }))));
}
Object.assign(window, {
  SiteHeader,
  SiteHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-preview/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logotype = __ds_scope.Logotype;

__ds_ns.Waterline = __ds_scope.Waterline;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.ChartFrame = __ds_scope.ChartFrame;

__ds_ns.ConfidenceMeter = __ds_scope.ConfidenceMeter;

__ds_ns.DataFreshness = __ds_scope.DataFreshness;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.FleetMap = __ds_scope.FleetMap;

__ds_ns.KpiStat = __ds_scope.KpiStat;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.RecommendationPanel = __ds_scope.RecommendationPanel;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SelectInput = __ds_scope.SelectInput;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.VesselIdentity = __ds_scope.VesselIdentity;

})();
