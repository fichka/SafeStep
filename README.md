# SafeStep — GPS Safety Monitoring for Elderly with Dementia

Interactive React prototype for a hackathon iOS app. Monitors the location and behavior of elderly people with dementia and alerts their caretaker when something seems wrong.

---

## What it does

**Two roles:**
- **Caretaker** — full dashboard with map, alerts, risk score, behavior analysis
- **Elder** — simplified large-text screen with clock, status, and SOS button

**GPS tracking with adaptive update intervals:**
| Mode | Trigger | GPS interval |
|------|---------|--------------|
| Home | Inside safe zone | every 15 min |
| Outdoor | Left safe zone | every 2 min |
| Alert | Unusual behavior detected | every 45 sec |

**Risk scoring system** — score > 70 triggers an alert:
| Event | Points |
|-------|--------|
| Night walk (23:00–06:00) | +20 |
| No usual route | +30 |
| Walking in circles | +25 |
| Sudden stop | +15 |
| Long absence | +40 |

**Unusual behavior detection:**
- Wandering (walking in circles)
- Exiting safe zone
- Night walks during curfew hours

**After 15 min of unusual behavior:** AI automatically calls the elder, checks in, and notifies the caretaker.

**Fall detection:** Accelerometer (8G jolt) + Gyroscope (rapid rotation) + Microphone (crash sound) + GPS (no movement).

**Low power mode (battery ≤ 15%):** GPS disabled → falls back to Wi-Fi positioning → Cell towers → BLE beacons → Inertial navigation.

**New place visited:** Caretaker gets a prompt — "Add to safe zone? Yes / No".

---

## Screens (15 total)

| Screen | Description |
|--------|-------------|
| Register | Splash + sign-up form |
| Choose role | Caretaker vs Elder |
| Caretaker home | Dashboard: elder card, mode banner, risk score, quick actions |
| Map | SVG map with walk path, safe zone, elder position |
| Safe zones | Home address, zone radius slider, curfew hours |
| Alert history | Scrollable list of 6 alert types |
| New zone alert | "Elena was here 45 min — add to safe zone?" |
| Unusual behavior | Red header, wandering map, risk breakdown (85/100) |
| AI Call | Dark phone UI, transcript of AI conversation with elder |
| Behavior ML | Walk time bar chart, usual places, sleep pattern, 87% confidence |
| Fall detection | 4-sensor analysis cards, Call 911 / Contact Caretaker |
| Elder home | Big clock, greeting, "I'm home" button, SOS |
| Settings | Profile, safety toggles (AI call, fall detection), app settings |
| Risk score | Large gauge, full 5-event breakdown, 7-day history |
| Low power | Battery warning, positioning stack (Wi-Fi active, rest dimmed) |

---

## Tech stack

- **React 18** + **Vite**
- **Tailwind CSS**
- **Lucide React** icons
- Custom SVG components: fake map, semicircle risk gauge, behavior bar chart
- No external state library — single `useState` per screen
- Bilingual **RU / EN** via a `T` translations object

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — the sidebar lets you jump to any screen directly.

```bash
npm run build   # production build (~259 KB JS)
```

---

## Brand colors

| Token | Hex | Usage |
|-------|-----|-------|
| BRAND | `#ff7d29` | Orange — primary actions, active state |
| BG | `#f3f3f3` | App background |
| TEXT | `#212121` | Main text |
| GREEN | `#10b981` | Home mode, safe, connected |
| BLUE | `#0ea5e9` | Outdoor mode |
| RED | `#ef4444` | Alert mode, fall, high risk |
| YELLOW | `#f59e0b` | Medium risk, warnings |
| PURPLE | `#8b5cf6` | AI / ML features |

---

## Project structure

```
src/
  App.jsx     — all screens, components, and routing (single file)
  main.jsx    — React entry point
  index.css   — Tailwind directives + resets
```

Key components inside `App.jsx`:

```
PhoneFrame    — 390×820px phone mockup with pill notch
TopBar        — screen title + back button + optional right action
PrimaryButton — orange CTA button
GhostButton   — outlined secondary button
SettingsRow   — settings list item with toggle or chevron
FakeMap       — SVG street grid map (home / outdoor / unusual modes)
RiskGauge     — semicircle arc gauge, color changes at 40/70
BehaviorChart — hourly activity bar chart, anomaly bar in red
ModeBanner    — left-bordered banner showing current GPS mode + interval
StatusBadge   — colored pill (Home / Outdoor / Alert)
BottomTab     — 4-tab navigation bar
