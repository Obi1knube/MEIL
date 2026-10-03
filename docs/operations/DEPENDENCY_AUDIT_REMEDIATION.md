# Public MEIL website dependency cleanup

Prepared 3 October 2026 for chore/firebase-hosting-migration.
Scope: public MEIL website only; no Firebase account, DNS, MEIL360, mail or VPS changes.

## Evidence

Owner-provided MEIL-migration-npm-audit.json reported 103 vulnerable package entries: 8 low, 15 moderate, 77 high and 3 critical. These are package entries, not a count of distinct exploits or proof of deployed exposure.

Local dependency inspection traced form-data@3.0.2 through react-scripts -> Jest -> jsdom; shell-quote@1.8.2 through react-scripts -> react-dev-utils and webpack-dev-server -> launch-editor; websocket-driver@0.7.4 through react-scripts -> webpack-dev-server -> sockjs. These critical dependencies are old testing/development tooling; static Firebase Hosting serves dist, not these Node services. Build tooling still requires remediation.

The repository uses Vite for its active build. No source tests or active imports of the scripts package were found. Removed unused react-scripts, scripts and the CRA-specific private-property Babel plugin. npm start now launches Vite on 127.0.0.1; dev is also bound to loopback. Removed obsolete CRA test/eject commands rather than claiming test coverage. There is no replacement automated application test suite in this patch.

Pinned Vite 8.3.2 and @vitejs/plugin-react 6.1.1. Rebuilt the lockfile cleanly without force or legacy-peer-deps. Remaining declared dependency ranges were resolved afresh, so browser revalidation is required. Declared @eslint/js 8.57.1 explicitly. Corrected the flat-config lint command and the React-in-JSX-scope rule for Vite automatic JSX transformation; enabled React version detection.

## Verification

Runtime: Node v24.19.0, npm 11.9.0, Linux execution environment.
- npm ci: PASS, 289 packages installed.
- npm run lint: PASS, no lint warnings/errors.
- npm run build: PASS, Vite 8.3.2, output dist/.
- npm audit --json: PASS, 0 known vulnerabilities across all severities.
- git diff --check: PASS.
- Production preview: HTML and all nine generated assets HTTP 200.
- Generated bundle retains MEIL360 domain links and EmailJS service configuration; /api/leads request absent.

Audit zero is the registry result at verification time, not proof that the software has no security defects. Several retained packages still produce deprecation notices. The browser cannot access this environment's loopback preview, so no new browser/mobile acceptance is claimed. Windows installation, browser navigation, mobile expanded-menu behaviour and actual EmailJS delivery must be checked by the owner before Firebase deployment. Vite 8's default browser target includes Safari 16.4 or newer; older Safari needs a separately tested target configuration.

## Apply and verify

This patch is incremental: apply it after the initial Firebase migration patch. The independent mobile-navigation patch remains intact; this patch does not edit CSS or page components. No .firebaserc mapping or Firebase site was added.

Run git apply --check first, then git apply. Run npm ci, npm run lint, npm run build and npm audit. Start the preview with npm run preview -- --host 127.0.0.1 and repeat desktop, iPhone 16, iPhone SE and tablet checks. Check images, menu open/close, anchors, assistant link, MEIL360 link and contact form delivery. Report any npm install-script approval prompt before changing approval settings. Do not deploy before review of these results.

## References

- https://vite.dev/guide/
- https://vite.dev/guide/migration
- https://github.com/advisories/GHSA-fx2h-pf6j-xcff
- Owner-provided npm audit report and local npm dependency paths.
