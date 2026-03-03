# Landright export

Next.js app (App Router). Deploy to Vercel: connect this repo.

## If you get 404 on Vercel
- In Vercel project **Settings → General**: set **Root Directory** to `.` or leave empty.
- **Framework Preset** must be **Next.js** (Vercel usually auto-detects from package.json).
- **Build Settings**: leave **Output Directory** empty (do not set e.g. `out` or `.next`).
- Redeploy after changing settings.

## How this app works
- **Variant selection**: `app/page.tsx` picks one of 4 variants per visit (sessionStorage pool so each variant is shown once before any repeat).
- **Click tracking**: The same `app/page.tsx` wraps all variants in a div with `onClick`; when the user clicks a button/link, it sends a beacon to the Landright backend (`POST /beacon`), which writes to Supabase. Clicks are keyed by repo, layer, and variant_id.
- **The 4 variant files** (`app/variants/variant-1.tsx` … `variant-4.tsx`) are the page content only; they are not responsible for selection or tracking—the wrapper `app/page.tsx` is.
