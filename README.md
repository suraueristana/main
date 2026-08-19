# Portal Surau Ar-Raudhah Eristana

GitHub Pages-ready Option B starter for `suraueristana/main`.

## Quick deployment

1. Extract this package.
2. Copy `LOGO AR RAUDHAH 2023-07.png` into `assets/`.
3. Upload all files and folders to the root of `suraueristana/main`.
4. In GitHub, open **Settings > Pages**.
5. Under **Build and deployment**, select **GitHub Actions**.
6. The included workflow deploys the site automatically.

Expected URL: `https://suraueristana.github.io/main/`

## Admin

- Open the gear icon.
- Initial password: `1234`.
- Change it under **Keselamatan**.
- Current settings are stored in the browser localStorage of that device.

## Media workflow

1. Go to `assets/media` in GitHub.
2. Select **Add file > Upload files**.
3. Upload the image/video and commit.
4. Open the uploaded file and copy its raw URL.
5. Add the raw URL in **Admin > Media & GitHub**.

For videos larger than GitHub limits, use an external video/CDN service rather than committing large binaries.

## Important security boundary

This GitHub Pages build is a public static frontend. Do not upload real IC numbers, personal phone numbers, member records, payment records, GitHub tokens, Quran Foundation client secrets, or private documents to this repository.

Before production launch, connect Ahli Kariah and Khairat Kematian to a secured database and authentication layer such as Supabase. Integrate Quran Foundation through a serverless/backend endpoint so the client secret is not exposed.

## Project contents

- `index.html`: entry page
- `styles.css`: responsive widescreen and mobile styles
- `app.js`: portal and admin functions
- `assets/`: logo, media, photos and documents
- `data/config.json`: public configuration only
- `.github/workflows/pages.yml`: automatic GitHub Pages deployment
