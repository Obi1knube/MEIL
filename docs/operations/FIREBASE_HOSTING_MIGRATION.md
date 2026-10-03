# MEIL Firebase Hosting migration — preparation record

Prepared 3 October 2026. Status: BUILD PREPARED; DEPLOYMENT BLOCKED.
Production cutover and VPS retirement are not approved by acceptance evidence.

## Verified source and runtime

- Repository: https://github.com/Obi1knube/MEIL
- Source commit: ea281095eb2a962b9db052320e0c5b536e41c7cc (confirmed commit SHA, not merely a tree identifier).
- Initial branch: main; initial checkout clean. Migration branch: chore/firebase-hosting-migration.
- README.md inspected. No AGENTS.md exists in this checkout.
- Node: v24.19.0; npm: 11.9.0; Firebase CLI: 15.32.1; installed Vite: 4.5.9.
- npm ci passed with dependency deprecation notices.
- npm run build passed before and after migration changes; output is dist/.
- git diff --check passed.

## Changes prepared

- firebase.json serves dist/ through Hosting target meil-website only.
- No .firebaserc site mapping was created: the project and new site have not been verified. Target resolution must succeed before deployment.
- Firebase cache/debug files ignored; dist was already ignored.
- Missing /favicon.ico reference removed; canonical root and AdSense retained.
- prop-types 15.8.1 declared directly; lockfile updated.
- ChatCTA call-out button and form disabled by CALL_OUT_ENABLED=false. Assistant link and telephone disclaimer remain.

IMPORTANT: The handover incorrectly described ChatCTA as inactive. Footer.jsx renders it. Its /api/leads backend is absent from this repository. The disabled implementation remains in source for later investigation; the production bundle contains no /api/leads request. Inspect the live VPS endpoint and any stored lead data before retirement. Re-enabling requires a migrated backend and separate validation.

## Validation and limits

The production Vite preview was started and checked in the same local process context, then stopped:
- HTML: HTTP 200.
- /assets/index-1d205abb.js: HTTP 200, application/javascript, 204154 bytes.
- /assets/index-a56b97e5.css: HTTP 200, text/css, 248328 bytes.
- Bundle contains existing app domain link and EmailJS service configuration.
- Bundle contains no /api/leads request.
- Generated HTML retains root canonical and existing AdSense script; no missing favicon reference.

These are HTTP and artifact checks, not browser rendering, mobile, form-delivery, or production acceptance checks. Cloud Browser rejected the local preview URL with ERR_BLOCKED_BY_CLIENT. The 0.0.0.0 preview also failed because the environment cannot enumerate network interfaces; 127.0.0.1 preview worked.

npm run lint fails before analysis because --ext is incompatible with the repository flat ESLint configuration. Running ESLint without --ext reports 174 errors, including the existing React-in-scope rule incompatible with automatic JSX transformation. No lint success is claimed; lint configuration remediation is pending and outside this migration patch.

## Account and infrastructure blockers

- Firebase projects:list and hosting:sites:list --project meil360-paidtest both failed authentication.
- Firebase Console redirected to Google sign-in and returned 502 connection refused, including one reload.
- Hostinger browser guidance states that cloud-browser sign-in is restricted. VPS inventory, billing, DNS administration and renewal status remain unavailable.
- System DNS lookups returned temporary name-resolution failures; web retrieval of DNS resolver data was unavailable.
- No Hosting site created; no Firebase deployment; no DNS changes; no VPS cancellation; no commit or push performed.

## Deployment record

| Field | Verified value |
|---|---|
| Intended Firebase project | meil360-paidtest, proposed from handover; not account-verified |
| Existing MEIL360 site ID and mappings | Pending authenticated inventory |
| New public site ID | Pending inventory and global uniqueness confirmation |
| Hosting target | meil-website, configuration only; unmapped |
| Firebase preview URL | None: no deployment performed |
| Firebase public live URL / release | None |
| Authoritative DNS provider / nameservers | Unverified |
| Complete DNS zone backup | Not obtained |
| VPS address and live workloads | Unverified |
| DNS cutover | Not performed |
| Form / mailbox / application acceptance | Pending |
| VPS retirement / refund | Not performed |

## DNS change record — no executable values yet

| Record | Current value | Proposed value | Treatment |
|---|---|---|---|
| Root A/AAAA | Unverified | Exact new-site Firebase wizard values pending | Change only after preview acceptance and certificate preparation |
| www A/AAAA/CNAME | Unverified | Exact new-site Firebase wizard values pending | Redirect www to canonical root; remove only documented conflicts |
| Firebase verification TXT | Not obtained | Exact domain wizard value pending | Add as instructed; preserve existing TXT |
| app records | Unverified | Preserve existing values | Outside migration |
| MX, SPF, DKIM, DMARC | Unverified | Preserve existing values | Retain Hostinger email subscription |
| CAA | Unverified | Pending certificate assessment | Change only if verified necessary |
| Nameservers and other records | Unverified | Preserve, unless dependency inventory proves migration necessary | Export full zone before any change |

Do not substitute tutorial IP addresses or replace the entire DNS zone.

## Bounded next actions

1. Obtain authenticated Firebase project/site inventory, existing app-domain mappings, complete DNS zone export, VPS workload inventory, live-deployment comparison and backup. Do not supply passwords, tokens or private keys in chat or source.
2. Resolve lint configuration and complete clean-build browser checks at phone/tablet/desktop widths.
3. Confirm meil360-paidtest and a unique new public Hosting site ID, then create that site and map only meil-website. Inspect .firebaserc; its target must resolve to the new site, never the app/default site.
4. Build and deploy preview with explicit target/project. Record returned URL, expiry and release evidence. Verify navigation, images, console errors, app links and EmailJS recipient/reply behaviour. Keep call-out disabled.
5. Prepare root and www domain mappings on the new site; obtain exact verification and routing records. Produce old/new DNS comparison and rollback values. Report preview and exact DNS changes to the owner before production cutover.
6. After approval and preview acceptance, deploy only hosting:meil-website. Apply only reviewed website DNS changes; preserve app/mail. Confirm root HTTPS, www redirect, two-network propagation, real mail receipt/reply/authentication and normal MEIL360 workflow.
7. Keep VPS available through observation. Retire it only after backup, all acceptance checks and proof no API, automation, database, DNS or other required service depends on it. Retain email/domain subscriptions; verify billing consequences and refund eligibility separately.

## Commands after account verification

```bash
firebase projects:list
firebase hosting:sites:list --project meil360-paidtest
# Select and record a verified unused public site ID before creation.
# Substitute that exact recorded site ID; never use the existing app site.
firebase hosting:sites:create "$MEIL_WEBSITE_SITE_ID" --project meil360-paidtest
firebase target:apply hosting meil-website "$MEIL_WEBSITE_SITE_ID" --project meil360-paidtest
npm ci
npm run build
firebase hosting:channel:deploy migration-preview --only meil-website --project meil360-paidtest
# Production is a later action, after preview acceptance and owner cutover approval:
firebase deploy --only hosting:meil-website --project meil360-paidtest
```

The Firebase domain wizard supplies the DNS values. SPA fallback does not implement an API.

## Primary references

- https://firebase.google.com/docs/hosting/multisites
- https://firebase.google.com/docs/hosting/custom-domain
- https://firebase.google.com/docs/hosting/test-preview-deploy
