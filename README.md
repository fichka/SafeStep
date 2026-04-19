# MedRemind

MedRemind is an interactive React prototype for a medication reminder app.
It demonstrates the main user flows for both an elder user and a caregiver: registration, medication tracking, prescription scanning, QR pairing, and rewards.

## Demo Features

- registration and role selection flow
- `Elder` and `Caregiver` modes
- medication list with dose tracking
- add medication form
- prescription scan screen
- QR pairing flow between elder and caregiver
- rewards screen with streak-based mechanics
- language switcher: `ru/en`
- font size switcher

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- lucide-react

## Local Development

Requires `Node.js` 18 or newer.

```bash
npm install
npm run dev
```

Vite usually starts the app at `http://localhost:5173/`.

## Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  App.jsx
  MedRemind.jsx
  main.jsx
  index.css
public/
  favicon.svg
  icons.svg
```

## Notes

- This is a UI/UX prototype, not a production-ready backend application.
- The app uses demo data stored on the client side.
- Most screens and interaction logic are implemented in `src/MedRemind.jsx`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Repository

GitHub: `https://github.com/fichka/MedRemind`
