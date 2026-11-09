# Dotmac Cloud manual deployment

The React storefront is served from the cPanel account's public_html directory. WHMCS lives in public_html/whmcs and owns the client portal, domain search, checkout, and billing.

1. Pull the latest main branch from GitHub. Use Node.js 22.12 or later, then run npm ci and npm run typecheck.
2. Build a preview with npm run build -- --base=/registrar-preview/. Upload the contents of dist/ to public_html/registrar-preview/. Keep its existing noindex settings. Check the logo, mobile menu, Client Portal link, and domain search.
3. Before production, save a dated private copy of the current index.html, assets, site files, and .htaccess outside public_html. Keep the WordPress rollback backup separately.
4. Run npm run build for production. Upload only the contents of dist/. Upload the assets and media first, then replace public_html/index.html last. Leave public_html/whmcs, .htaccess, and any cPanel-managed files in place. Keep previous hashed assets until verification is complete.
5. Open the homepage in a signed-out browser. Confirm Client Portal opens the WHMCS login. Search a full domain and verify WHMCS starts the lookup automatically, then check the cart total in NGN. Stop before submitting an order or payment.
6. If the update fails, restore the prior index.html and any replaced assets from the private copy. Verify the homepage and WHMCS again.

Update portal links in src/config/whmcs.ts and hosting plan details in src/config/plans.ts. Confirm product IDs and prices in WHMCS before publishing. The current domain search passes the full domain in WHMCS's message parameter and selects currency ID 2 for NGN.

## Separate storefront pages

The storefront now has Home (/), Hosting (/hosting/), Domains (/domains/),
Business Email (/email/), Cloud & Servers (/cloud/), Solutions (/solutions/),
and Support (/support/). The approved header layout is retained; menu links
open the corresponding pages. WHMCS still owns purchases, accounts and billing.

Run the package build command (npm run build or pnpm build), not vite build
alone. The post-build script creates an index.html in each page directory,
with its own title, description, canonical URL and social metadata. Upload all
of dist, including the hosting, domains, email, cloud, solutions and support
directories. These are real static entry points, so a direct page refresh does
not require a blanket SPA rewrite and never redirects WHMCS traffic. Preserve
existing cPanel/WHMCS configuration. Unknown paths can use the included
404.html through the host's existing ErrorDocument setup.

For a subdirectory preview, use npm run build -- --base=/registrar-preview/;
internal links and assets use Vite's base path. Keep preview indexing blocked
through the existing preview-host configuration. Verify /hosting/ and /support/
by direct navigation after upload as well as by clicking the navbar.
