# Fitness With Diamond — GitHub Pages

This folder contains the first custom static-site version of the Fitness With Diamond homepage.

## Files

- `index.html` — page structure/content
- `style.css` — colors, layout, typography, responsive design
- `script.js` — weekly event cards and mobile navigation

## Publish on GitHub Pages

1. Create a public GitHub repository.
2. Upload all three files to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`.
6. Save.

## Weekly event updates

Open `script.js` and edit the `events` array near the top. Each event has:

- `date`
- `title`
- `location`
- `price`
- `description`
- `type`

Replace the sample events with your real Dallas events.

## Important before launch

- Replace the placeholder social links with your Instagram/TikTok URLs.
- Replace each `VIEW DETAILS` link with the real event URL.
- Connect the newsletter form to an email provider if you want to collect subscribers.
- Replace the CSS-created hero/event visuals with your preferred photos if desired.
- Connect your custom domain after the GitHub Pages site is live.
