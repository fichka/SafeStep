import { useState } from "react";
import {
  Shield, AlertTriangle, Battery, Phone, Bell,
  Settings as SettingsIcon, User, ArrowLeft, ChevronRight,
  Clock, Activity, Home, Check, Plus, X, Brain,
  AlertCircle, Volume2, LogOut, RotateCcw, Wifi, Signal,
  Zap, Moon, PhoneCall, Camera, Map, Eye, EyeOff,
  Navigation, Heart, Lock, MapPin, Radio, Mic,
  Globe, UserPlus, Type, Layers
} from "lucide-react";

/* =========================================================
   SafeStep — GPS Safety Monitoring for Elderly with Dementia
   Colors: #ff7d29 brand, #f3f3f3 bg, #212121 text
   ========================================================= */

const BRAND = "#ff7d29";
const BRAND_SOFT = "#fff0e5";
const BG = "#f3f3f3";
const TEXT = "#212121";
const SUB = "#6b7280";
const CARD = "#ffffff";
const LINE = "#e5e7eb";
const GREEN = "#10b981";
const RED = "#ef4444";
const BLUE = "#0ea5e9";
const YELLOW = "#f59e0b";
const PURPLE = "#8b5cf6";

const T = {
  ru: {
    appName: "SafeStep",
    tagline: "Всегда знайте, что они в безопасности",
    createAccount: "Создать аккаунт",
    first: "Имя",
    last: "Фамилия",
    email: "Электронная почта",
    password: "Пароль",
    continue: "Продолжить",
    back: "Назад",
    chooseRole: "Кто вы?",
    caregiver: "Помощник",
    caregiverDesc: "Слежу за близким",
    elder: "Пожилой",
    elderDesc: "За мной присматривают",
    home: "Дома",
    outdoor: "На улице",
    unusual: "Тревога",
    riskScore: "Риск-скор",
    lastSeen: "Последнее обновление",
    gpsUpdate: "GPS",
    battery: "Батарея",
    viewMap: "Карта",
    setZones: "Зоны",
    aiInsights: "ИИ",
    alerts: "Оповещения",
    settings: "Настройки",
    safeZone: "Безопасная зона",
    homeLocation: "Домашний адрес",
    zoneRadius: "Радиус зоны",
    curfewHours: "Комендантский час",
    addZone: "Добавить зону",
    alertHistory: "История оповещений",
    newZoneTitle: "Новое место",
    newZoneDesc: "Елена была здесь 45 мин",
    addToSafeZone: "Добавить в безопасную зону?",
    yes: "Да, добавить",
    no: "Нет, игнорировать",
    unusualBehavior: "Необычное поведение",
    activeAlert: "Активная тревога",
    callElder: "Позвонить Елене",
    aiCall: "ИИ-звонок",
    dismiss: "Отклонить",
    aiCalling: "ИИ звонит...",
    aiCallDesc: "ИИ мягко уточняет, всё ли хорошо",
    endCall: "Завершить звонок",
    behaviorML: "Анализ поведения",
    usualWalkTimes: "Обычное время прогулок",
    usualPlaces: "Привычные места",
    sleepPattern: "Режим сна",
    anomaly: "Аномалия",
    modelConfidence: "Точность модели",
    fallDetected: "Обнаружено падение!",
    fallLocation: "Ул. Ленина 45 · Только что",
    fallAnalysis: "Анализ микрофона: нестандартные звуки",
    call112: "Позвонить 112",
    contactCaretaker: "Связаться с помощником",
    elderHome: "Доброе утро, Елена!",
    iAmHome: "Я дома",
    sos: "SOS",
    reset: "Сброс демо",
    language: "Язык",
    fontSize: "Размер шрифта",
    small: "Мал.",
    medium: "Ср.",
    large: "Бол.",
    logout: "Выйти",
    curfew: "Комендантский час",
    aiCallToggle: "ИИ-звонок при тревоге",
    fallDetection: "Детекция падений",
    emergencyContact: "Экстренный контакт",
    pairedDevice: "Устройство",
    profile: "Профиль",
    designReview: "Интерактивный прототип",
    allScreens: "Экраны",
    nightWalk: "Ночная прогулка",
    noUsualRoute: "Нет привычного маршрута",
    walkingCircles: "Ходьба по кругу",
    suddenStop: "Резкая остановка",
    longAbsence: "Долгое отсутствие",
    riskExplain: "Score > 70 → отправить алерт",
    lowPower: "Режим экономии",
    lowPowerDesc: "Батарея 15% — переключение на альтернативное позиционирование",
    wifiPos: "Wi-Fi позиционирование",
    cellTowers: "Вышки сотовой связи",
    bleBeacons: "BLE маяки",
    ins: "Инерциальная навигация",
    tipTitle: "Совет помощнику",
    tipDesc: "Если телефон разрядился — используйте Find My для отслеживания",
    at: "в",
    minAgo: "мин назад",
    modeHome: "Режим: Дома",
    modeOutdoor: "Режим: На улице",
    modeUnusual: "Режим: Тревога",
    everyMin: "каждые 2 мин",
    everySec: "каждые 45 сек",
    every15: "каждые 15 мин",
    connectedTo: "Подключено",
    elderName: "Мама, Елена",
    uploadPhoto: "Нажмите для фото",
    walkDuration: "Прогулка",
    min: "мин",
    zoneAdded: "Зона добавлена!",
    todayActivity: "Активность сегодня",
    usualSleep: "22:00 — 07:00",
    aiTranscript: "ИИ: Елена, добрый вечер. Скажите, вы хорошо себя чувствуете? Не заблудились?",
    elderReply: "Елена: Да, я... кажется, не знаю где я...",
    aiReply2: "ИИ: Всё хорошо, я рядом. Помощник уже оповещён. Оставайтесь на месте.",
    sensors: "Датчики активны",
    accel: "Акселерометр",
    gyro: "Гироскоп",
    mic2: "Микрофон",
    gpsLive: "GPS",
    crashSound: "Звук удара",
    heavyBreath: "Учащённое дыхание",
    noSound: "Подозрительных звуков нет",
    safeZoneLabel: "Безопасная зона",
    homePinLabel: "Дом",
    elenaLabel: "Елена · Сейчас",
    parkLabel: "Парк",
    wanderingPath: "Маршрут блуждания",
    addSafeZoneBtn: "+ Добавить зону",
    radiusLabel: "500 м",
    curfewFrom: "23:00",
    curfewTo: "06:00",
    homeAddress: "Ул. Ленина 45, кв. 12",
    sleepTime: "22:00 – 07:00",
    highRisk: "Высокий риск",
    medRisk: "Средний риск",
    lowRisk: "Низкий риск",
  },
  en: {
    appName: "SafeStep",
    tagline: "Always know they're safe",
    createAccount: "Create account",
    first: "First name",
    last: "Last name",
    email: "Email",
    password: "Password",
    continue: "Continue",
    back: "Back",
    chooseRole: "Who are you?",
    caregiver: "Caregiver",
    caregiverDesc: "I help a loved one",
    elder: "Elder",
    elderDesc: "Someone helps me",
    home: "Home",
    outdoor: "Outdoor",
    unusual: "Alert",
    riskScore: "Risk Score",
    lastSeen: "Last update",
    gpsUpdate: "GPS",
    battery: "Battery",
    viewMap: "Map",
    setZones: "Zones",
    aiInsights: "AI",
    alerts: "Alerts",
    settings: "Settings",
    safeZone: "Safe Zone",
    homeLocation: "Home address",
    zoneRadius: "Zone radius",
    curfewHours: "Curfew hours",
    addZone: "Add zone",
    alertHistory: "Alert history",
    newZoneTitle: "New location",
    newZoneDesc: "Elena was here for 45 min",
    addToSafeZone: "Add to safe zone?",
    yes: "Yes, add it",
    no: "No, ignore",
    unusualBehavior: "Unusual Behavior",
    activeAlert: "Active Alert",
    callElder: "Call Elena",
    aiCall: "AI Call",
    dismiss: "Dismiss",
    aiCalling: "AI calling...",
    aiCallDesc: "AI is gently checking on Elena",
    endCall: "End call",
    behaviorML: "Behavior Analysis",
    usualWalkTimes: "Usual walk times",
    usualPlaces: "Usual places",
    sleepPattern: "Sleep pattern",
    anomaly: "Anomaly",
    modelConfidence: "Model confidence",
    fallDetected: "Fall Detected!",
    fallLocation: "Lenin St 45 · Just now",
    fallAnalysis: "Microphone: unusual sounds detected",
    call112: "Call 911",
    contactCaretaker: "Contact caretaker",
    elderHome: "Good morning, Elena!",
    iAmHome: "I'm home safely",
    sos: "SOS",
    reset: "Reset demo",
    language: "Language",
    fontSize: "Font size",
    small: "Sm",
    medium: "Md",
    large: "Lg",
    logout: "Log out",
    curfew: "Curfew",
    aiCallToggle: "AI call on alert",
    fallDetection: "Fall detection",
    emergencyContact: "Emergency contact",
    pairedDevice: "Device",
    profile: "Profile",
    designReview: "Interactive prototype",
    allScreens: "Screens",
    nightWalk: "Night walk",
    noUsualRoute: "No usual route",
    walkingCircles: "Walking in circles",
    suddenStop: "Sudden stop",
    longAbsence: "Long absence",
    riskExplain: "Score > 70 → send alert",
    lowPower: "Low Power Mode",
    lowPowerDesc: "15% battery — switching to alternative positioning",
    wifiPos: "Wi-Fi positioning",
    cellTowers: "Cell towers",
    bleBeacons: "BLE beacons",
    ins: "Inertial navigation",
    tipTitle: "Tip for caregiver",
    tipDesc: "If phone dies — use Find My to locate Elena",
    at: "at",
    minAgo: "min ago",
    modeHome: "Mode: Home",
    modeOutdoor: "Mode: Outdoor",
    modeUnusual: "Mode: Alert",
    everyMin: "every 2 min",
    everySec: "every 45 sec",
    every15: "every 15 min",
    connectedTo: "Connected",
    elderName: "Mom, Elena",
    uploadPhoto: "Tap to upload photo",
    walkDuration: "Walk",
    min: "min",
    zoneAdded: "Zone added!",
    todayActivity: "Today's activity",
    usualSleep: "10:00 PM — 7:00 AM",
    aiTranscript: "AI: Elena, good evening. Are you feeling okay? Are you lost?",
    elderReply: "Elena: Yes, I... I'm not sure where I am...",
    aiReply2: "AI: Everything's okay, I'm here. Your caregiver has been notified. Please stay where you are.",
    sensors: "Sensors active",
    accel: "Accelerometer",
    gyro: "Gyroscope",
    mic2: "Microphone",
    gpsLive: "GPS",
    crashSound: "Crash sound",
    heavyBreath: "Heavy breathing",
    noSound: "No suspicious sounds",
    safeZoneLabel: "Safe Zone",
    homePinLabel: "Home",
    elenaLabel: "Elena · Now",
    parkLabel: "Park",
    wanderingPath: "Wandering path",
    addSafeZoneBtn: "+ Add Zone",
    radiusLabel: "500 m",
    curfewFrom: "11:00 PM",
    curfewTo: "6:00 AM",
    homeAddress: "Lenin St 45, apt 12",
    sleepTime: "10 PM – 7 AM",
    highRisk: "High risk",
    medRisk: "Medium risk",
    lowRisk: "Low risk",
  },
};

/* ===================== REUSABLE COMPONENTS ===================== */

function PhoneFrame({ children }) {
  return (
    <div style={{ width: 390, height: 820 }} className="relative shrink-0">
      <div
        style={{
          background: "#111",
          borderRadius: 54,
          padding: 10,
          boxShadow: "0 30px 60px rgba(0,0,0,.25), 0 0 0 2px #222 inset",
        }}
        className="w-full h-full"
      >
        <div
          style={{ background: BG, borderRadius: 46, position: "relative" }}
          className="w-full h-full overflow-hidden"
        >
          <div
            style={{
              position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)",
              width: 120, height: 30, background: "#000", borderRadius: 20, zIndex: 60,
            }}
          />
          <div className="absolute inset-0 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

function TopBar({ title, right, onBack }) {
  return (
    <div className="flex items-center justify-between px-5 pt-12 pb-3">
      <div className="w-10 h-10 flex items-center justify-center">
        {onBack && (
          <button onClick={onBack} className="w-10 h-10 rounded-full flex items-center justify-center border" style={{ background: CARD }}>
            <ArrowLeft size={20} color={TEXT} />
          </button>
        )}
      </div>
      <div style={{ color: TEXT }} className="text-base font-semibold">{title}</div>
      <div className="w-10 h-10 flex items-center justify-center">{right}</div>
    </div>
  );
}

function PrimaryButton({ children, onClick, style, icon, disabled, color }) {
  const bg = disabled ? "#ffc79c" : (color || BRAND);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ background: bg, color: "#fff", cursor: disabled ? "not-allowed" : "pointer", ...style }}
      className="w-full rounded-2xl py-4 font-semibold text-lg flex items-center justify-center gap-2 shadow-md"
    >
      {icon}{children}
    </button>
  );
}

function GhostButton({ children, onClick, icon, danger }) {
  return (
    <button
      onClick={onClick}
      style={{ background: CARD, color: danger ? RED : TEXT }}
      className="w-full rounded-2xl py-4 font-semibold text-lg flex items-center justify-center gap-2 border"
    >
      {icon}{children}
    </button>
  );
}

function Field({ label, placeholder, type = "text", value, onChange, right, onRightClick }) {
  return (
    <div className="relative">
      {label && <div style={{ color: SUB }} className="text-xs font-medium ml-4 mb-1">{label}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{ background: CARD, color: TEXT }}
        className="w-full rounded-2xl px-4 py-3 text-base outline-none border"
      />
      {right && (
        <button onClick={onRightClick} type="button" className="absolute right-3 top-9 w-8 h-8 flex items-center justify-center">
          {right}
        </button>
      )}
    </div>
  );
}

function SettingsRow({ icon, label, value, onClick, danger, toggle, toggled }) {
  return (
    <button
      onClick={onClick}
      style={{ background: CARD, color: danger ? RED : TEXT }}
      className="w-full rounded-2xl px-4 py-4 flex items-center justify-between border mb-2"
    >
      <div className="flex items-center gap-3">
        <div style={{ background: danger ? "#fee2e2" : BRAND_SOFT, color: danger ? RED : BRAND }} className="w-9 h-9 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <span className="font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2" style={{ color: SUB }}>
        {value && <span className="text-sm">{value}</span>}
        {toggle && (
          <div style={{ background: toggled ? GREEN : LINE, transition: "background .2s" }} className="w-11 h-6 rounded-full relative">
            <div style={{ left: toggled ? 22 : 2, transition: "left .2s", top: 2, position: "absolute", width: 20, height: 20, background: "#fff", borderRadius: "50%" }} />
          </div>
        )}
        {!danger && !toggle && <ChevronRight size={18} />}
      </div>
    </button>
  );
}

function Toast({ text, show }) {
  if (!show) return null;
  return (
    <div style={{ position: "absolute", left: "50%", bottom: 30, transform: "translateX(-50%)", background: TEXT, color: "#fff", padding: "10px 18px", borderRadius: 999, zIndex: 70, boxShadow: "0 10px 30px rgba(0,0,0,.25)", fontWeight: 600 }}
      className="text-sm flex items-center gap-2">
      <Check size={16} color={GREEN} /> {text}
    </div>
  );
}

function StatusBadge({ mode, t }) {
  const cfg = {
    home:    { bg: "#d1fae5", color: GREEN,  icon: <Home size={13} />,          label: t.home },
    outdoor: { bg: "#dbeafe", color: BLUE,   icon: <Navigation size={13} />,    label: t.outdoor },
    unusual: { bg: "#fee2e2", color: RED,    icon: <AlertTriangle size={13} />, label: t.unusual },
  }[mode] || { bg: "#d1fae5", color: GREEN, icon: <Home size={13} />, label: t.home };
  return (
    <div style={{ background: cfg.bg, color: cfg.color }} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold">
      {cfg.icon} {cfg.label}
    </div>
  );
}

function ModeBanner({ mode, t }) {
  const cfg = {
    home:    { bg: GREEN,  label: t.modeHome,    sub: t.every15 },
    outdoor: { bg: BLUE,   label: t.modeOutdoor, sub: t.everyMin },
    unusual: { bg: RED,    label: t.modeUnusual, sub: t.everySec },
  }[mode] || { bg: GREEN, label: t.modeHome, sub: t.every15 };
  return (
    <div style={{ background: cfg.bg + "18", borderLeft: `4px solid ${cfg.bg}`, color: cfg.bg }} className="mx-5 rounded-xl px-4 py-3 flex items-center justify-between mb-3">
      <div className="font-bold text-sm">{cfg.label}</div>
      <div className="text-xs opacity-80">{cfg.sub}</div>
    </div>
  );
}

/* ===================== MAP COMPONENT ===================== */

function FakeMap({ mode = "home", showPath = true, showZone = true, compact = false }) {
  const W = 370, H = compact ? 180 : 240;
  const homeX = 175, homeY = compact ? 100 : 130;
  const zoneR = compact ? 55 : 72;

  const outdoorPath = [
    [homeX, homeY],
    [homeX + 25, homeY - 22],
    [homeX + 55, homeY - 30],
    [homeX + 80, homeY - 18],
    [homeX + 95, homeY + 5],
    [homeX + 80, homeY + 28],
    [homeX + 55, homeY + 38],
    [homeX + 35, homeY + 50],
  ];
  const unusualPath = [
    [homeX, homeY],
    [homeX + 25, homeY - 20],
    [homeX + 50, homeY - 30],
    [homeX + 75, homeY - 15],
    [homeX + 90, homeY + 10],
    [homeX + 70, homeY + 35],
    [homeX + 45, homeY + 45],
    [homeX + 25, homeY + 30],
    [homeX + 15, homeY + 10],
    [homeX + 30, homeY - 5],
    [homeX + 55, homeY - 20],
    [homeX + 78, homeY + 0],
  ];

  const path = mode === "home" ? [[homeX, homeY]] : mode === "unusual" ? unusualPath : outdoorPath;
  const elderX = path[path.length - 1][0];
  const elderY = path[path.length - 1][1];
  const pathD = path.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");

  const pathColor = mode === "unusual" ? RED : BLUE;

  return (
    <svg width={W} height={H} style={{ borderRadius: 16, display: "block" }}>
      {/* Base */}
      <rect width={W} height={H} fill="#e8ecf0" />

      {/* Buildings */}
      <rect x={8} y={8} width={55} height={38} rx={4} fill="#cdd2d9" />
      <rect x={72} y={8} width={65} height={28} rx={4} fill="#cdd2d9" />
      <rect x={200} y={8} width={55} height={42} rx={4} fill="#cdd2d9" />
      <rect x={268} y={8} width={70} height={32} rx={4} fill="#cdd2d9" />
      <rect x={330} y={48} width={40} height={55} rx={4} fill="#cdd2d9" />
      <rect x={8} y={H - 60} width={65} height={52} rx={4} fill="#cdd2d9" />
      <rect x={105} y={H - 50} width={58} height={42} rx={4} fill="#cdd2d9" />
      <rect x={240} y={H - 55} width={80} height={47} rx={4} fill="#cdd2d9" />
      <rect x={330} y={H - 62} width={40} height={54} rx={4} fill="#cdd2d9" />

      {/* Streets horizontal */}
      <rect x={0} y={50} width={W} height={13} fill="#fff" opacity={0.9} />
      <rect x={0} y={H - 62} width={W} height={13} fill="#fff" opacity={0.9} />

      {/* Streets vertical */}
      <rect x={68} y={0} width={13} height={H} fill="#fff" opacity={0.9} />
      <rect x={185} y={0} width={13} height={H} fill="#fff" opacity={0.9} />
      <rect x={285} y={0} width={13} height={H} fill="#fff" opacity={0.9} />

      {/* Park */}
      <rect x={90} y={70} width={85} height={compact ? 55 : 70} rx={10} fill="#bbf7d0" />
      <text x={132} y={compact ? 100 : 110} fontSize={9} fill="#15803d" textAnchor="middle" fontWeight="600">🌳 Park</text>

      {/* Safe zone */}
      {showZone && (
        <circle cx={homeX} cy={homeY} r={zoneR} fill="#22c55e" fillOpacity={0.1} stroke="#22c55e" strokeWidth={2} strokeDasharray="7 5" />
      )}

      {/* Walk path */}
      {showPath && path.length > 1 && (
        <path d={pathD} fill="none" stroke={pathColor} strokeWidth={3} strokeDasharray={mode === "unusual" ? "5 4" : "8 5"} strokeLinecap="round" opacity={0.85} />
      )}

      {/* Home pin */}
      <circle cx={homeX} cy={homeY} r={11} fill={BRAND} />
      <text x={homeX} y={homeY + 4} fontSize={11} textAnchor="middle">🏠</text>

      {/* Safe zone label */}
      {showZone && !compact && (
        <text x={homeX - zoneR + 10} y={homeY - zoneR + 14} fontSize={8} fill="#15803d" fontWeight="600">Safe Zone</text>
      )}

      {/* Elder marker (not at home) */}
      {mode !== "home" && (
        <>
          <circle cx={elderX} cy={elderY} r={16} fill={pathColor} fillOpacity={0.18} />
          <circle cx={elderX} cy={elderY} r={8} fill={pathColor} />
          <circle cx={elderX} cy={elderY} r={3.5} fill="#fff" />
          {/* Label bubble */}
          <rect x={elderX - 28} y={elderY - 28} width={56} height={16} rx={5} fill={pathColor} />
          <text x={elderX} y={elderY - 17} fontSize={8} fill="#fff" textAnchor="middle" fontWeight="600">Elena · Now</text>
        </>
      )}

      {/* Wandering indicator */}
      {mode === "unusual" && (
        <>
          <circle cx={elderX + 18} cy={elderY - 18} r={9} fill={RED} />
          <text x={elderX + 18} y={elderY - 14} fontSize={10} textAnchor="middle">⚠️</text>
        </>
      )}
    </svg>
  );
}

/* ===================== RISK GAUGE ===================== */

function RiskGauge({ score = 45, size = 160 }) {
  const r = 58;
  const cx = size / 2;
  const cy = Math.round(size * 0.68);
  const pct = Math.min(1, score / 100);
  const totalArc = Math.PI;
  const sweepAngle = totalArc * pct;
  const ixEnd = cx + r * Math.cos(Math.PI - sweepAngle);
  const iyEnd = cy - r * Math.sin(Math.PI - sweepAngle);
  const largeArc = sweepAngle > Math.PI / 2 ? 1 : 0;
  const color = score < 40 ? GREEN : score < 70 ? YELLOW : RED;

  return (
    <svg width={size} height={Math.round(size * 0.75)}>
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke={LINE} strokeWidth={14} strokeLinecap="round" />
      {pct > 0.01 && (
        <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 ${largeArc} 1 ${ixEnd} ${iyEnd}`} fill="none" stroke={color} strokeWidth={14} strokeLinecap="round" />
      )}
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize={30} fontWeight="bold" fill={color}>{score}</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize={11} fill={SUB}>/ 100</text>
    </svg>
  );
}

/* ===================== BEHAVIOR BAR CHART ===================== */

function BehaviorChart({ compact = false }) {
  const H = compact ? 60 : 80;
  const W = 310;
  const bars = [
    { label: "6", h: 0.15 },
    { label: "8", h: 0.2 },
    { label: "9", h: 0.85 },
    { label: "10", h: 0.7 },
    { label: "12", h: 0.3 },
    { label: "14", h: 0.25 },
    { label: "15", h: 0.9 },
    { label: "16", h: 0.75 },
    { label: "18", h: 0.4 },
    { label: "20", h: 0.2 },
    { label: "22", h: 0.1 },
    { label: "2", h: 0.6, anomaly: true },
  ];
  const bw = W / bars.length - 4;
  return (
    <svg width={W} height={H + 18}>
      {bars.map((b, i) => {
        const bh = Math.max(4, b.h * H);
        const x = i * (bw + 4);
        const y = H - bh;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw} height={bh} rx={3}
              fill={b.anomaly ? RED : BRAND} opacity={b.anomaly ? 1 : 0.7} />
            {!compact && (
              <text x={x + bw / 2} y={H + 14} fontSize={8} textAnchor="middle" fill={SUB}>{b.label}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ===================== BOTTOM TAB ===================== */

function BottomTab({ active, onTab, t }) {
  const tabs = [
    { id: "home-cg", icon: <Home size={22} />, label: t.home },
    { id: "map",     icon: <MapPin size={22} />, label: t.viewMap },
    { id: "alerts",  icon: <Bell size={22} />,  label: t.alerts },
    { id: "settings",icon: <SettingsIcon size={22} />, label: t.settings },
  ];
  return (
    <div style={{ background: CARD, borderTop: `1px solid ${LINE}` }} className="flex items-center justify-around py-2">
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => onTab(tab.id)}
          className="flex flex-col items-center gap-0.5 py-1 px-4"
          style={{ color: active === tab.id ? BRAND : SUB }}>
          {tab.icon}
          <span className="text-xs font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ===================== MAIN APP ===================== */

export default function App() {
  const [screen, setScreen] = useState("register");
  const [lang, setLang] = useState("ru");
  const [fontSize, setFontSize] = useState("medium");
  const [toast, setToast] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [aiToggle, setAiToggle] = useState(true);
  const [fallToggle, setFallToggle] = useState(true);
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", avatar: null });

  const t = T[lang];
  const fontPx = { small: 14, medium: 16, large: 18 }[fontSize];

  const showToast = (text) => {
    setToast(text);
    setTimeout(() => setToast(""), 1800);
  };

  const resetDemo = () => {
    setUser({ firstName: "", lastName: "", email: "", password: "", avatar: null });
    setScreen("register");
    setToast("");
  };

  const go = (s) => setScreen(s);

  const screenList = [
    { id: "register",    label: lang === "ru" ? "Регистрация" : "Register" },
    { id: "role",        label: lang === "ru" ? "Выбор роли" : "Choose role" },
    { id: "home-cg",     label: lang === "ru" ? "Главная (Помощник)" : "Caretaker home" },
    { id: "map",         label: lang === "ru" ? "Карта" : "Map" },
    { id: "zone-setup",  label: lang === "ru" ? "Зоны безопасности" : "Safe zones" },
    { id: "alerts",      label: lang === "ru" ? "Оповещения" : "Alerts" },
    { id: "new-zone",    label: lang === "ru" ? "Новая зона" : "New zone alert" },
    { id: "unusual",     label: lang === "ru" ? "Режим тревоги" : "Unusual behavior" },
    { id: "ai-call",     label: lang === "ru" ? "ИИ-звонок" : "AI Call" },
    { id: "behavior-ml", label: lang === "ru" ? "Анализ поведения" : "Behavior ML" },
    { id: "fall-detect", label: lang === "ru" ? "Падение" : "Fall detection" },
    { id: "home-elder",  label: lang === "ru" ? "Главная (Пожилой)" : "Elder home" },
    { id: "settings",    label: lang === "ru" ? "Настройки" : "Settings" },
    { id: "risk-score",  label: lang === "ru" ? "Риск-скор" : "Risk score" },
    { id: "low-power",   label: lang === "ru" ? "Режим экономии" : "Low power" },
  ];

  /* ============================= SCREENS ============================= */

  const Register = () => (
    <div className="px-6 pt-16 pb-8">
      <div className="flex flex-col items-center mb-7">
        <div style={{ background: BRAND }} className="w-16 h-16 rounded-3xl flex items-center justify-center mb-3 shadow-lg">
          <Shield color="#fff" size={32} />
        </div>
        <div style={{ color: TEXT }} className="text-2xl font-bold">{t.appName}</div>
        <div style={{ color: SUB }} className="text-sm mt-1 text-center px-4">{t.tagline}</div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Field label={t.first} placeholder="Алекс" value={user.firstName} onChange={(v) => setUser((u) => ({ ...u, firstName: v }))} />
          <Field label={t.last}  placeholder="Иванов" value={user.lastName}  onChange={(v) => setUser((u) => ({ ...u, lastName: v }))} />
        </div>
        <Field label={t.email}    placeholder="alex@example.com" type="email"    value={user.email}    onChange={(v) => setUser((u) => ({ ...u, email: v }))} />
        <Field label={t.password} placeholder="••••••••"          type={showPassword ? "text" : "password"} value={user.password} onChange={(v) => setUser((u) => ({ ...u, password: v }))}
          right={showPassword ? <EyeOff size={18} color={SUB} /> : <Eye size={18} color={SUB} />}
          onRightClick={() => setShowPassword((p) => !p)} />
      </div>

      <PrimaryButton onClick={() => go("role")} disabled={!user.firstName || !user.email || !user.password}>
        {t.continue}
      </PrimaryButton>

      <div className="mt-8 flex items-center gap-3">
        {[
          { icon: <MapPin size={16} color={BRAND} />, text: lang === "ru" ? "GPS мониторинг" : "GPS monitoring" },
          { icon: <Brain size={16} color={PURPLE} />, text: lang === "ru" ? "ИИ анализ" : "AI analysis" },
          { icon: <Shield size={16} color={GREEN} />, text: lang === "ru" ? "24/7 защита" : "24/7 safety" },
        ].map((f, i) => (
          <div key={i} style={{ background: CARD }} className="flex-1 rounded-2xl p-3 border flex flex-col items-center gap-1.5">
            {f.icon}
            <span style={{ color: TEXT }} className="text-xs font-semibold text-center leading-tight">{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const Role = () => (
    <div className="px-6 pt-14 pb-8">
      <TopBar title={t.chooseRole} onBack={() => go("register")} />
      <div className="space-y-4 mt-4">
        {[
          {
            id: "home-cg", icon: <UserPlus size={32} color={BRAND} />,
            title: t.caregiver, desc: t.caregiverDesc,
            features: lang === "ru"
              ? ["GPS-трекинг", "Зоны безопасности", "ИИ-звонки", "Риск-скор"]
              : ["GPS tracking", "Safe zones", "AI calls", "Risk score"],
          },
          {
            id: "home-elder", icon: <User size={32} color={PURPLE} />,
            title: t.elder, desc: t.elderDesc,
            features: lang === "ru"
              ? ["Простой экран", "Кнопка SOS", "ИИ-звонки", "Статус"]
              : ["Simple screen", "SOS button", "AI calls", "Status"],
          },
        ].map((role) => (
          <button
            key={role.id}
            onClick={() => go(role.id)}
            style={{ background: CARD }}
            className="w-full rounded-3xl p-5 border text-left"
          >
            <div className="flex items-center gap-4 mb-3">
              <div style={{ background: BRAND_SOFT }} className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                {role.icon}
              </div>
              <div>
                <div style={{ color: TEXT }} className="text-lg font-bold">{role.title}</div>
                <div style={{ color: SUB }} className="text-sm">{role.desc}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {role.features.map((f, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div style={{ background: GREEN }} className="w-4 h-4 rounded-full flex items-center justify-center shrink-0">
                    <Check size={10} color="#fff" />
                  </div>
                  <span style={{ color: SUB }} className="text-xs">{f}</span>
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const CaregiverHome = () => (
    <div className="flex flex-col h-full" style={{ background: BG }}>
      <div className="px-5 pt-14 pb-3">
        <div className="flex items-center justify-between mb-1">
          <div>
            <div style={{ color: SUB }} className="text-xs">{lang === "ru" ? "Воскресенье, 19 апреля" : "Sunday, April 19"}</div>
            <div style={{ color: TEXT }} className="text-xl font-bold">{lang === "ru" ? "Привет, Алекс 👋" : "Hey, Alex 👋"}</div>
          </div>
          <button onClick={() => go("settings")} style={{ background: CARD }} className="w-10 h-10 rounded-full border flex items-center justify-center">
            <SettingsIcon size={18} color={SUB} />
          </button>
        </div>
      </div>

      {/* Elder status card */}
      <div className="px-5 mb-3">
        <button onClick={() => go("map")} style={{ background: CARD }} className="w-full rounded-3xl p-4 border shadow-sm text-left">
          <div className="flex items-center gap-3 mb-3">
            <div style={{ background: BRAND_SOFT, width: 52, height: 52 }} className="rounded-2xl flex items-center justify-center shrink-0">
              <User size={26} color={BRAND} />
            </div>
            <div className="flex-1">
              <div style={{ color: TEXT }} className="font-bold text-base">{t.elderName}</div>
              <div style={{ color: SUB }} className="text-xs">+7 921 555-1234</div>
            </div>
            <StatusBadge mode="outdoor" t={t} />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: <Clock size={14} />, label: t.lastSeen, val: `2 ${t.minAgo}` },
              { icon: <Signal size={14} />, label: t.gpsUpdate, val: t.everyMin },
              { icon: <Battery size={14} />, label: t.battery, val: "62%" },
            ].map((s, i) => (
              <div key={i} style={{ background: BG }} className="rounded-xl p-2 text-center">
                <div style={{ color: BRAND }} className="flex justify-center mb-0.5">{s.icon}</div>
                <div style={{ color: SUB }} className="text-xs">{s.label}</div>
                <div style={{ color: TEXT }} className="text-sm font-bold">{s.val}</div>
              </div>
            ))}
          </div>
        </button>
      </div>

      <ModeBanner mode="outdoor" t={t} />

      {/* Risk Score */}
      <div className="px-5 mb-3">
        <button onClick={() => go("risk-score")} style={{ background: CARD }} className="w-full rounded-3xl p-4 border shadow-sm flex items-center gap-4 text-left">
          <RiskGauge score={45} size={120} />
          <div className="flex-1">
            <div style={{ color: TEXT }} className="font-bold text-base mb-1">{t.riskScore}</div>
            <div style={{ background: "#fef9c3", color: YELLOW }} className="text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1 mb-2">
              <AlertTriangle size={11} /> {t.medRisk}
            </div>
            <div style={{ color: SUB }} className="text-xs leading-relaxed">
              {lang === "ru" ? "Нет привычного маршрута +30, идёт долго +15" : "No usual route +30, walking long +15"}
            </div>
            <div style={{ color: BRAND }} className="text-xs font-semibold mt-1">{lang === "ru" ? "Подробнее →" : "Details →"}</div>
          </div>
        </button>
      </div>

      {/* Quick actions */}
      <div className="px-5 grid grid-cols-3 gap-2 mb-3">
        {[
          { id: "map",         icon: <MapPin size={20} color={BRAND} />,   label: t.viewMap },
          { id: "zone-setup",  icon: <Layers size={20} color={BLUE} />,    label: t.setZones },
          { id: "behavior-ml", icon: <Brain size={20} color={PURPLE} />,   label: t.aiInsights },
        ].map((a) => (
          <button key={a.id} onClick={() => go(a.id)} style={{ background: CARD }} className="rounded-2xl border py-3 flex flex-col items-center gap-1">
            <div style={{ background: BRAND_SOFT }} className="w-10 h-10 rounded-xl flex items-center justify-center">{a.icon}</div>
            <span style={{ color: TEXT }} className="text-xs font-semibold">{a.label}</span>
          </button>
        ))}
      </div>

      {/* Recent alerts */}
      <div className="px-5 mb-2">
        <div style={{ color: TEXT }} className="font-bold text-sm mb-2">{t.alertHistory}</div>
        {[
          { color: YELLOW, icon: <Navigation size={13} />, text: lang === "ru" ? "Елена вышла из дома" : "Elena left home", time: "14:30" },
          { color: BRAND,  icon: <Brain size={13} />,      text: lang === "ru" ? "Посетила новое место" : "Visited new place", time: "15:10" },
        ].map((al, i) => (
          <button key={i} onClick={() => go(i === 1 ? "new-zone" : "alerts")} style={{ background: CARD }} className="w-full rounded-2xl px-4 py-3 border mb-2 flex items-center gap-3 text-left">
            <div style={{ background: al.color + "22", color: al.color }} className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0">{al.icon}</div>
            <div className="flex-1 min-w-0">
              <div style={{ color: TEXT }} className="text-sm font-semibold truncate">{al.text}</div>
            </div>
            <div style={{ color: SUB }} className="text-xs shrink-0">{al.time}</div>
          </button>
        ))}
      </div>

      <div className="flex-1" />
      <BottomTab active="home-cg" onTab={go} t={t} />
    </div>
  );

  const MapView = () => (
    <div className="flex flex-col h-full" style={{ background: BG }}>
      <TopBar title={t.viewMap} onBack={() => go("home-cg")}
        right={<button onClick={() => go("zone-setup")} style={{ background: CARD }} className="w-10 h-10 rounded-full border flex items-center justify-center"><Layers size={18} color={BRAND} /></button>} />

      {/* Full map */}
      <div className="mx-4 rounded-3xl overflow-hidden border shadow-sm mb-3">
        <FakeMap mode="outdoor" showPath showZone />
      </div>

      <ModeBanner mode="outdoor" t={t} />

      {/* Info card */}
      <div className="px-5">
        <div style={{ background: CARD }} className="rounded-3xl p-4 border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div style={{ background: BLUE + "22", color: BLUE }} className="w-8 h-8 rounded-xl flex items-center justify-center">
                <Navigation size={16} />
              </div>
              <div>
                <div style={{ color: TEXT }} className="font-bold text-sm">{t.elderName}</div>
                <div style={{ color: SUB }} className="text-xs">{lang === "ru" ? "Ул. Ленина, 300 м от дома" : "Lenin St, 300 m from home"}</div>
              </div>
            </div>
            <StatusBadge mode="outdoor" t={t} />
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div style={{ background: BG }} className="rounded-xl p-3">
              <div style={{ color: SUB }} className="text-xs mb-0.5">{t.walkDuration}</div>
              <div style={{ color: TEXT }} className="font-bold">42 {t.min}</div>
            </div>
            <div style={{ background: BG }} className="rounded-xl p-3">
              <div style={{ color: SUB }} className="text-xs mb-0.5">{t.gpsUpdate}</div>
              <div style={{ color: TEXT }} className="font-bold">{t.everyMin}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => go("unusual")} style={{ background: RED + "18", color: RED }} className="rounded-xl py-2.5 text-sm font-bold flex items-center justify-center gap-1.5">
              <AlertTriangle size={14} /> {lang === "ru" ? "Тревога" : "Alert"}
            </button>
            <button onClick={() => go("zone-setup")} style={{ background: BRAND_SOFT, color: BRAND }} className="rounded-xl py-2.5 text-sm font-bold flex items-center justify-center gap-1.5">
              <Plus size={14} /> {t.addSafeZoneBtn}
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1" />
      <BottomTab active="map" onTab={go} t={t} />
    </div>
  );

  const ZoneSetup = () => (
    <div style={{ background: BG }}>
      <TopBar title={t.safeZone} onBack={() => go("map")} />

      <div className="mx-4 rounded-3xl overflow-hidden border shadow-sm mb-4">
        <FakeMap mode="home" showPath={false} showZone />
      </div>

      <div className="px-5 space-y-3 pb-8">
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: SUB }} className="text-xs font-medium mb-1">{t.homeLocation}</div>
          <div className="flex items-center gap-3">
            <div style={{ background: BRAND_SOFT, color: BRAND }} className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0">
              <Home size={18} />
            </div>
            <div style={{ color: TEXT }} className="font-semibold flex-1">{t.homeAddress}</div>
            <ChevronRight size={18} color={SUB} />
          </div>
        </div>

        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: SUB }} className="text-xs font-medium mb-3">{t.zoneRadius}</div>
          <div className="flex items-center justify-between mb-2">
            <div style={{ color: TEXT }} className="font-bold text-lg">{t.radiusLabel}</div>
            <div style={{ color: BRAND }} className="text-sm font-semibold">{lang === "ru" ? "Изменить" : "Edit"}</div>
          </div>
          <div style={{ background: LINE }} className="w-full h-2 rounded-full relative">
            <div style={{ background: BRAND, width: "55%" }} className="h-2 rounded-full" />
            <div style={{ background: BRAND, left: "55%", top: "50%", transform: "translate(-50%, -50%)" }} className="absolute w-5 h-5 rounded-full border-2 border-white shadow" />
          </div>
          <div className="flex justify-between mt-1">
            <span style={{ color: SUB }} className="text-xs">100 м</span>
            <span style={{ color: SUB }} className="text-xs">1000 м</span>
          </div>
        </div>

        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div className="flex items-center gap-2 mb-3">
            <Moon size={16} color={PURPLE} />
            <div style={{ color: TEXT }} className="font-semibold">{t.curfewHours}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[{ label: lang === "ru" ? "С" : "From", val: t.curfewFrom }, { label: lang === "ru" ? "До" : "To", val: t.curfewTo }].map((c, i) => (
              <div key={i} style={{ background: BG }} className="rounded-2xl p-3 text-center">
                <div style={{ color: SUB }} className="text-xs mb-1">{c.label}</div>
                <div style={{ color: TEXT }} className="font-bold text-lg">{c.val}</div>
              </div>
            ))}
          </div>
        </div>

        <PrimaryButton onClick={() => { showToast(t.zoneAdded); go("home-cg"); }}>
          {lang === "ru" ? "Сохранить" : "Save"}
        </PrimaryButton>
      </div>
    </div>
  );

  const AlertsList = () => {
    const alertItems = [
      { color: RED,    icon: <AlertTriangle size={14} />, title: lang === "ru" ? "Необычное поведение" : "Unusual behavior",    sub: lang === "ru" ? "Елена ходит кругами · Парк Горького" : "Elena walking in circles · Gorky Park", time: "02:10", id: "unusual" },
      { color: YELLOW, icon: <Moon size={14} />,          title: lang === "ru" ? "Ночная прогулка" : "Night walk",             sub: lang === "ru" ? "Елена вышла в 01:15" : "Elena left at 1:15 AM",                            time: "01:15", id: "unusual" },
      { color: BLUE,   icon: <Navigation size={14} />,    title: lang === "ru" ? "Покинула дом" : "Left home",                 sub: lang === "ru" ? "Обычная прогулка · GPS каждые 2 мин" : "Normal walk · GPS every 2 min",        time: "14:30", id: "map" },
      { color: BRAND,  icon: <Brain size={14} />,         title: lang === "ru" ? "Новое место" : "New place",                  sub: lang === "ru" ? "Парк Горького · Добавить в зону?" : "Gorky Park · Add to safe zone?",          time: "15:10", id: "new-zone" },
      { color: GREEN,  icon: <Home size={14} />,          title: lang === "ru" ? "Вернулась домой" : "Returned home",          sub: lang === "ru" ? "Прогулка 42 мин" : "Walk 42 min",                                            time: "16:45", id: "home-cg" },
      { color: SUB,    icon: <Battery size={14} />,       title: lang === "ru" ? "Низкий заряд" : "Low battery",              sub: lang === "ru" ? "20% · Включён режим экономии" : "20% · Low power mode on",                   time: "18:02", id: "low-power" },
    ];
    return (
      <div className="flex flex-col h-full" style={{ background: BG }}>
        <TopBar title={t.alertHistory} onBack={() => go("home-cg")} />
        <div className="px-5 pb-6 space-y-2 flex-1">
          {alertItems.map((al, i) => (
            <button key={i} onClick={() => go(al.id)} style={{ background: CARD }} className="w-full rounded-2xl px-4 py-3.5 border flex items-center gap-3 text-left">
              <div style={{ background: al.color + "20", color: al.color }} className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0">{al.icon}</div>
              <div className="flex-1 min-w-0">
                <div style={{ color: TEXT }} className="text-sm font-semibold truncate">{al.title}</div>
                <div style={{ color: SUB }} className="text-xs truncate mt-0.5">{al.sub}</div>
              </div>
              <div className="flex flex-col items-end shrink-0">
                <div style={{ color: SUB }} className="text-xs">{al.time}</div>
                <ChevronRight size={14} color={SUB} />
              </div>
            </button>
          ))}
        </div>
        <BottomTab active="alerts" onTab={go} t={t} />
      </div>
    );
  };

  const NewZoneAlert = () => (
    <div style={{ background: BG }}>
      <TopBar title={t.newZoneTitle} onBack={() => go("alerts")} />

      {/* Map snippet */}
      <div className="mx-4 rounded-3xl overflow-hidden border shadow-sm mb-4">
        <FakeMap mode="outdoor" showPath showZone={false} compact />
      </div>

      <div className="px-5 space-y-3 pb-8">
        {/* Info card */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div style={{ background: BRAND_SOFT, color: BRAND }} className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ color: TEXT }} className="font-bold">{lang === "ru" ? "Парк Горького" : "Gorky Park"}</div>
              <div style={{ color: SUB }} className="text-xs">{t.newZoneDesc}</div>
            </div>
          </div>
          <div style={{ background: BRAND_SOFT }} className="rounded-2xl px-3 py-2.5">
            <div style={{ color: BRAND }} className="text-xs font-semibold">
              {lang === "ru" ? "Елена посещает это место регулярно — 3 раза за последние 2 недели." : "Elena visits this place regularly — 3 times in the last 2 weeks."}
            </div>
          </div>
        </div>

        {/* Add to safe zone? */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: TEXT }} className="font-bold text-base mb-1">{t.addToSafeZone}</div>
          <div style={{ color: SUB }} className="text-sm mb-4">
            {lang === "ru"
              ? "Если добавить — GPS в этой зоне будет обновляться реже, а тревоги не будет."
              : "If added — GPS in this zone will update less often and no alert will trigger."}
          </div>
          <div className="space-y-2">
            <PrimaryButton icon={<Check size={18} />} onClick={() => { showToast(t.zoneAdded); go("home-cg"); }}>{t.yes}</PrimaryButton>
            <GhostButton onClick={() => go("alerts")}>{t.no}</GhostButton>
          </div>
        </div>
      </div>
    </div>
  );

  const UnusualBehavior = () => (
    <div style={{ background: BG }}>
      {/* Red alert header */}
      <div style={{ background: RED }} className="px-5 pt-14 pb-5">
        <div className="flex items-center gap-3 mb-1">
          <div style={{ background: "rgba(255,255,255,.2)" }} className="w-10 h-10 rounded-full flex items-center justify-center">
            <AlertTriangle size={22} color="#fff" />
          </div>
          <div>
            <div className="text-white font-bold text-lg">{t.unusualBehavior}</div>
            <div className="text-white opacity-80 text-sm">{t.activeAlert}</div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mx-4 -mt-2 rounded-3xl overflow-hidden border shadow-lg mb-4">
        <FakeMap mode="unusual" showPath showZone />
      </div>

      <div className="px-5 space-y-3 pb-6">
        {/* Risk score */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border shadow-sm flex items-center gap-4">
          <RiskGauge score={85} size={120} />
          <div className="flex-1">
            <div style={{ color: TEXT }} className="font-bold mb-1">{t.riskScore}</div>
            <div style={{ background: "#fee2e2", color: RED }} className="text-xs font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1 mb-2">
              <AlertTriangle size={10} /> {t.highRisk}
            </div>
            <div style={{ color: SUB }} className="text-xs">
              {lang === "ru" ? "Ночная прогулка, ходьба по кругу, выход за зону" : "Night walk, circling, out of safe zone"}
            </div>
          </div>
        </div>

        {/* Risk breakdown */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: TEXT }} className="font-bold text-sm mb-3">{lang === "ru" ? "Состав риска" : "Risk breakdown"}</div>
          {[
            { label: t.nightWalk,     points: 20, color: PURPLE },
            { label: t.walkingCircles,points: 25, color: RED },
            { label: t.noUsualRoute,  points: 30, color: BRAND },
            { label: t.longAbsence,   points: 10, color: YELLOW },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between mb-2">
              <div style={{ color: TEXT }} className="text-sm">{r.label}</div>
              <div style={{ background: r.color + "20", color: r.color }} className="text-xs font-bold px-2.5 py-1 rounded-full">+{r.points}</div>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${LINE}` }} className="flex items-center justify-between pt-2 mt-1">
            <div style={{ color: TEXT }} className="font-bold text-sm">{lang === "ru" ? "Итого" : "Total"}</div>
            <div style={{ color: RED }} className="font-bold text-lg">85 / 100</div>
          </div>
          <div style={{ color: SUB }} className="text-xs mt-1">{t.riskExplain}</div>
        </div>

        {/* Location + time */}
        <div style={{ background: RED + "10", color: RED }} className="rounded-2xl px-4 py-3 flex items-center gap-2 text-sm font-semibold">
          <MapPin size={15} /> {lang === "ru" ? "Парк Горького · тревога 18 мин" : "Gorky Park · alert 18 min"}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <PrimaryButton onClick={() => go("ai-call")} icon={<Brain size={18} />} style={{ fontSize: 14 }}>{t.aiCall}</PrimaryButton>
          <button onClick={() => go("home-cg")} style={{ background: CARD, color: RED }} className="rounded-2xl py-4 font-semibold text-sm flex items-center justify-center gap-2 border border-red-200">
            <Phone size={16} /> {t.callElder}
          </button>
        </div>
        <GhostButton onClick={() => go("home-cg")}>{t.dismiss}</GhostButton>
      </div>
    </div>
  );

  const AiCall = () => (
    <div style={{ background: "#111", minHeight: "100%" }} className="flex flex-col">
      <div className="pt-14 px-5 flex items-center justify-between mb-8">
        <div style={{ color: "#fff", opacity: 0.7 }} className="text-sm">{t.aiCalling}</div>
        <div style={{ background: "rgba(255,255,255,.1)", color: GREEN }} className="text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <div style={{ background: GREEN }} className="w-2 h-2 rounded-full" /> {lang === "ru" ? "В эфире" : "Live"}
        </div>
      </div>

      {/* Caller avatar */}
      <div className="flex flex-col items-center mb-6">
        <div style={{ background: BRAND }} className="w-24 h-24 rounded-full flex items-center justify-center mb-4 shadow-xl" >
          <Brain size={44} color="#fff" />
          {/* Pulse rings */}
        </div>
        <div style={{ color: "#fff" }} className="text-xl font-bold mb-1">SafeWalk AI</div>
        <div style={{ color: "rgba(255,255,255,.6)" }} className="text-sm">{t.elderName}</div>
        <div style={{ color: "rgba(255,255,255,.5)" }} className="text-xs mt-1">{t.aiCallDesc}</div>
      </div>

      {/* Transcript */}
      <div className="mx-5 flex-1 mb-6 space-y-3">
        <div style={{ background: "rgba(255,255,255,.08)" }} className="rounded-2xl p-4">
          <div style={{ color: "rgba(255,255,255,.5)" }} className="text-xs mb-2">AI →</div>
          <div style={{ color: "#fff" }} className="text-sm leading-relaxed">{t.aiTranscript}</div>
        </div>
        <div style={{ background: BRAND + "33" }} className="rounded-2xl p-4">
          <div style={{ color: BRAND }} className="text-xs mb-2">{lang === "ru" ? "Елена →" : "Elena →"}</div>
          <div style={{ color: "#fff" }} className="text-sm leading-relaxed">{t.elderReply}</div>
        </div>
        <div style={{ background: "rgba(255,255,255,.08)" }} className="rounded-2xl p-4">
          <div style={{ color: "rgba(255,255,255,.5)" }} className="text-xs mb-2">AI →</div>
          <div style={{ color: "#fff" }} className="text-sm leading-relaxed">{t.aiReply2}</div>
        </div>
      </div>

      {/* Sensors strip */}
      <div className="mx-5 mb-5">
        <div style={{ background: "rgba(255,255,255,.06)" }} className="rounded-2xl px-4 py-3 flex items-center justify-between">
          <div style={{ color: "rgba(255,255,255,.5)" }} className="text-xs">{t.sensors}</div>
          <div className="flex items-center gap-3">
            {[
              { icon: <Activity size={12} />, label: t.accel },
              { icon: <Radio size={12} />,    label: t.gyro },
              { icon: <Mic size={12} />,      label: t.mic2 },
            ].map((s, i) => (
              <div key={i} style={{ color: GREEN }} className="flex items-center gap-1">
                {s.icon}
                <span className="text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* End call */}
      <div className="px-5 pb-8">
        <button onClick={() => go("unusual")} style={{ background: RED }} className="w-full rounded-2xl py-4 font-bold text-white text-lg flex items-center justify-center gap-2">
          <PhoneCall size={20} /> {t.endCall}
        </button>
      </div>
    </div>
  );

  const BehaviorML = () => (
    <div style={{ background: BG }}>
      <TopBar title={t.behaviorML} onBack={() => go("home-cg")}
        right={<div style={{ background: PURPLE + "20", color: PURPLE }} className="text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1"><Brain size={11} /> AI</div>} />

      <div className="px-5 space-y-3 pb-8">
        {/* Walk times */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: TEXT }} className="font-bold text-sm mb-3 flex items-center gap-2">
            <Activity size={15} color={BRAND} /> {t.usualWalkTimes}
          </div>
          <BehaviorChart />
          <div className="flex items-center gap-3 mt-2">
            <div style={{ background: BRAND + "22", color: BRAND }} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold">
              <div style={{ background: BRAND }} className="w-2 h-2 rounded-full" /> {lang === "ru" ? "Обычно" : "Normal"}
            </div>
            <div style={{ background: RED + "22", color: RED }} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold">
              <div style={{ background: RED }} className="w-2 h-2 rounded-full" /> {t.anomaly}
            </div>
          </div>
        </div>

        {/* Usual places */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: TEXT }} className="font-bold text-sm mb-3 flex items-center gap-2">
            <MapPin size={15} color={BLUE} /> {t.usualPlaces}
          </div>
          {[
            { name: lang === "ru" ? "Дом" : "Home",   freq: lang === "ru" ? "Каждый день" : "Every day",     color: GREEN, pct: 100 },
            { name: lang === "ru" ? "Парк" : "Park",   freq: lang === "ru" ? "3-4 раза в нед." : "3-4x / week", color: BLUE,  pct: 75 },
            { name: lang === "ru" ? "Магазин" : "Shop", freq: lang === "ru" ? "1-2 раза в нед." : "1-2x / week", color: BRAND, pct: 40 },
          ].map((p, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between mb-1">
                <span style={{ color: TEXT }} className="text-sm font-semibold">{p.name}</span>
                <span style={{ color: SUB }} className="text-xs">{p.freq}</span>
              </div>
              <div style={{ background: LINE }} className="h-2 rounded-full">
                <div style={{ background: p.color, width: `${p.pct}%`, transition: "width .5s" }} className="h-2 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Sleep pattern */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: TEXT }} className="font-bold text-sm mb-2 flex items-center gap-2">
            <Moon size={15} color={PURPLE} /> {t.sleepPattern}
          </div>
          <div style={{ background: "#f5f3ff", color: PURPLE }} className="rounded-xl px-3 py-2 text-sm font-semibold">{t.usualSleep}</div>
          <div style={{ color: SUB }} className="text-xs mt-2">
            {lang === "ru" ? "Активность в 02:15 → аномалия ночной прогулки" : "Activity at 2:15 AM → night walk anomaly"}
          </div>
        </div>

        {/* Model confidence */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border flex items-center justify-between">
          <div>
            <div style={{ color: TEXT }} className="font-bold text-sm">{t.modelConfidence}</div>
            <div style={{ color: SUB }} className="text-xs">{lang === "ru" ? "На основе 14 дней данных" : "Based on 14 days of data"}</div>
          </div>
          <div style={{ color: GREEN }} className="font-bold text-2xl">87%</div>
        </div>
      </div>
    </div>
  );

  const FallDetect = () => (
    <div style={{ background: BG }}>
      {/* Red header */}
      <div style={{ background: RED }} className="px-5 pt-14 pb-5">
        <div className="flex items-center gap-3 mb-3">
          <div style={{ background: "rgba(255,255,255,.2)" }} className="w-12 h-12 rounded-2xl flex items-center justify-center">
            <AlertTriangle size={26} color="#fff" />
          </div>
          <div>
            <div className="text-white font-bold text-xl">{t.fallDetected}</div>
            <div className="text-white opacity-80 text-sm">{t.fallLocation}</div>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,.15)" }} className="rounded-2xl px-4 py-2.5">
          <div className="text-white text-sm font-semibold">{t.fallAnalysis}</div>
        </div>
      </div>

      <div className="px-5 pt-4 pb-8 space-y-3">
        {/* Sensor analysis */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: TEXT }} className="font-bold text-sm mb-3">{lang === "ru" ? "Анализ датчиков" : "Sensor analysis"}</div>
          {[
            { icon: <Activity size={16} />, label: lang === "ru" ? "Акселерометр" : "Accelerometer", val: lang === "ru" ? "Резкое ускорение 8G" : "Sudden 8G jolt",        color: RED,   ok: false },
            { icon: <Radio size={16} />,    label: lang === "ru" ? "Гироскоп" : "Gyroscope",         val: lang === "ru" ? "Быстрое вращение" : "Rapid rotation",           color: RED,   ok: false },
            { icon: <Mic size={16} />,      label: lang === "ru" ? "Микрофон" : "Microphone",        val: lang === "ru" ? "Звук удара detected" : "Impact sound detected",  color: RED,   ok: false },
            { icon: <MapPin size={16} />,   label: "GPS",                                            val: lang === "ru" ? "Нет движения 4 мин" : "No movement 4 min",      color: YELLOW,ok: false },
          ].map((s, i) => (
            <div key={i} style={{ background: BG }} className="rounded-2xl px-3 py-2.5 flex items-center gap-3 mb-2">
              <div style={{ color: s.color }} className="shrink-0">{s.icon}</div>
              <div className="flex-1">
                <div style={{ color: TEXT }} className="text-sm font-semibold">{s.label}</div>
                <div style={{ color: SUB }} className="text-xs">{s.val}</div>
              </div>
              <div style={{ background: s.color + "20", color: s.color }} className="text-xs font-bold px-2 py-0.5 rounded-full">
                {lang === "ru" ? "Аномалия" : "Anomaly"}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <PrimaryButton color={RED} icon={<Phone size={18} />} onClick={() => go("home-cg")}>{t.call112}</PrimaryButton>
        <GhostButton icon={<PhoneCall size={18} />} onClick={() => go("home-cg")}>{t.contactCaretaker}</GhostButton>
        <GhostButton onClick={() => go("home-cg")}>{t.dismiss}</GhostButton>
      </div>
    </div>
  );

  const ElderHome = () => (
    <div style={{ background: "#fff", minHeight: "100%" }} className="flex flex-col">
      <div className="pt-14 px-6 pb-4 flex-1 flex flex-col">
        {/* Time */}
        <div className="text-center mt-4 mb-6">
          <div style={{ color: TEXT, fontSize: 56, fontWeight: 800, lineHeight: 1 }}>14:32</div>
          <div style={{ color: SUB, fontSize: 18 }} className="mt-2">{lang === "ru" ? "Воскресенье, 19 апреля" : "Sunday, April 19"}</div>
        </div>

        {/* Greeting */}
        <div style={{ color: TEXT, fontSize: 22, fontWeight: 700, lineHeight: 1.3 }} className="text-center mb-6">
          {t.elderHome}
        </div>

        {/* Status */}
        <div style={{ background: "#d1fae5", color: GREEN, fontSize: 18, fontWeight: 700 }}
          className="rounded-3xl py-4 flex items-center justify-center gap-3 mb-6">
          <Home size={24} /> {lang === "ru" ? "Вы дома" : "You are at home"}
        </div>

        {/* I'm home button */}
        <button onClick={() => showToast(t.iAmHome)} style={{ background: BRAND, color: "#fff", fontSize: 18, fontWeight: 700 }}
          className="w-full rounded-3xl py-5 flex items-center justify-center gap-3 shadow-lg mb-4">
          <Check size={24} /> {t.iAmHome}
        </button>

        {/* SOS */}
        <button onClick={() => go("fall-detect")} style={{ background: RED, color: "#fff", fontSize: 24, fontWeight: 900, letterSpacing: 3 }}
          className="w-full rounded-3xl py-6 flex items-center justify-center gap-3 shadow-xl">
          <AlertTriangle size={28} /> {t.sos}
        </button>

        <div className="flex-1" />

        {/* Connected indicator */}
        <div style={{ color: SUB }} className="text-center text-sm flex items-center justify-center gap-2 pb-4">
          <div style={{ background: GREEN }} className="w-2 h-2 rounded-full" />
          {t.connectedTo}: {lang === "ru" ? "Алекс" : "Alex"}
        </div>
      </div>
    </div>
  );

  const SettingsCare = () => (
    <div className="flex flex-col h-full" style={{ background: BG }}>
      <TopBar title={t.settings} onBack={() => go("home-cg")} />
      <div className="px-5 pb-8 space-y-2 flex-1">

        <div style={{ color: SUB }} className="text-xs uppercase tracking-wider font-semibold mb-2 mt-1">{lang === "ru" ? "Профиль" : "Profile"}</div>
        <SettingsRow icon={<User size={18} />} label={t.profile} value={user.firstName || "Алекс"} onClick={() => {}} />
        <SettingsRow icon={<UserPlus size={18} />} label={t.pairedDevice} value={t.elderName} onClick={() => {}} />

        <div style={{ color: SUB }} className="text-xs uppercase tracking-wider font-semibold mb-2 mt-4">{lang === "ru" ? "Безопасность" : "Safety"}</div>
        <SettingsRow icon={<Moon size={18} />}       label={t.curfew}        value={`${t.curfewFrom} – ${t.curfewTo}`} onClick={() => go("zone-setup")} />
        <SettingsRow icon={<Brain size={18} />}       label={t.aiCallToggle}  toggle toggled={aiToggle}  onClick={() => setAiToggle((v) => !v)} />
        <SettingsRow icon={<Activity size={18} />}   label={t.fallDetection} toggle toggled={fallToggle} onClick={() => setFallToggle((v) => !v)} />
        <SettingsRow icon={<Phone size={18} />}      label={t.emergencyContact} value="+7 921 000-0000" onClick={() => {}} />

        <div style={{ color: SUB }} className="text-xs uppercase tracking-wider font-semibold mb-2 mt-4">{lang === "ru" ? "Приложение" : "App"}</div>
        <SettingsRow icon={<Globe size={18} />} label={t.language} value={lang === "ru" ? "Русский" : "English"} onClick={() => {}} />
        <SettingsRow icon={<Type size={18} />}  label={t.fontSize}  value={fontSize === "small" ? t.small : fontSize === "medium" ? t.medium : t.large} onClick={() => {}} />
        <SettingsRow icon={<LogOut size={18} />} label={t.logout} danger onClick={() => go("register")} />
      </div>
      <BottomTab active="settings" onTab={go} t={t} />
    </div>
  );

  const RiskScore = () => (
    <div style={{ background: BG }}>
      <TopBar title={t.riskScore} onBack={() => go("home-cg")} />

      <div className="px-5 space-y-3 pb-8">
        {/* Gauge */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border flex flex-col items-center">
          <RiskGauge score={45} size={200} />
          <div style={{ background: "#fef9c3", color: YELLOW }} className="text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 mt-1">
            <AlertTriangle size={13} /> {t.medRisk}
          </div>
          <div style={{ color: SUB }} className="text-xs mt-2 text-center">{t.riskExplain}</div>
        </div>

        {/* Breakdown */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: TEXT }} className="font-bold text-sm mb-3">{lang === "ru" ? "Состав (текущий)" : "Breakdown (current)"}</div>
          {[
            { label: t.noUsualRoute,  pts: 30, max: 30, color: BRAND },
            { label: t.walkingCircles,pts: 0,  max: 25, color: RED },
            { label: t.longAbsence,   pts: 15, max: 40, color: YELLOW },
            { label: t.nightWalk,     pts: 0,  max: 20, color: PURPLE },
            { label: t.suddenStop,    pts: 0,  max: 15, color: BLUE },
          ].map((r, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between mb-1">
                <span style={{ color: TEXT }} className="text-sm">{r.label}</span>
                <span style={{ color: r.pts > 0 ? r.color : SUB }} className="text-xs font-bold">{r.pts > 0 ? `+${r.pts}` : "0"}</span>
              </div>
              <div style={{ background: LINE }} className="h-1.5 rounded-full">
                <div style={{ background: r.pts > 0 ? r.color : LINE, width: `${(r.pts / r.max) * 100}%` }} className="h-1.5 rounded-full" />
              </div>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${LINE}` }} className="flex items-center justify-between pt-2 mt-1">
            <div style={{ color: TEXT }} className="font-bold">{lang === "ru" ? "Итого" : "Total"}</div>
            <div style={{ color: YELLOW }} className="font-bold text-xl">45 / 100</div>
          </div>
        </div>

        {/* History bars */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: TEXT }} className="font-bold text-sm mb-3">{lang === "ru" ? "История (7 дней)" : "History (7 days)"}</div>
          <div className="flex items-end gap-2 h-16">
            {[30, 15, 45, 82, 60, 45, 45].map((v, i) => {
              const color = v >= 70 ? RED : v >= 40 ? YELLOW : GREEN;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div style={{ background: color, height: `${(v / 100) * 56}px`, minHeight: 4 }} className="w-full rounded-t-md" />
                  <span style={{ color: SUB }} className="text-xs">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const LowPower = () => (
    <div style={{ background: BG }}>
      <TopBar title={t.lowPower} onBack={() => go("home-cg")} />

      <div className="px-5 space-y-3 pb-8">
        {/* Battery alert */}
        <div style={{ background: "#fef3c7", borderLeft: `4px solid ${YELLOW}` }} className="rounded-2xl px-4 py-3 flex items-center gap-3">
          <Battery size={28} color={YELLOW} />
          <div>
            <div style={{ color: TEXT }} className="font-bold">15%</div>
            <div style={{ color: SUB }} className="text-xs">{t.lowPowerDesc}</div>
          </div>
        </div>

        {/* Positioning stack */}
        <div style={{ background: CARD }} className="rounded-3xl p-4 border">
          <div style={{ color: TEXT }} className="font-bold text-sm mb-3">{lang === "ru" ? "Режим позиционирования" : "Positioning mode"}</div>
          {[
            { icon: <Wifi size={18} />,     label: t.wifiPos,   active: true,  color: GREEN,  sub: lang === "ru" ? "Обнаружены 3 сети" : "3 networks found" },
            { icon: <Signal size={18} />,   label: t.cellTowers,active: false, color: SUB,    sub: lang === "ru" ? "Резерв" : "Fallback" },
            { icon: <Radio size={18} />,    label: t.bleBeacons,active: false, color: SUB,    sub: lang === "ru" ? "Внутри здания" : "Indoors" },
            { icon: <Navigation size={18} />,label: t.ins,      active: false, color: SUB,    sub: lang === "ru" ? "Без сигнала" : "No signal" },
          ].map((p, i) => (
            <div key={i} style={{ background: p.active ? "#d1fae5" : BG, opacity: p.active ? 1 : 0.6 }} className="rounded-2xl px-4 py-3 flex items-center gap-3 mb-2">
              <div style={{ color: p.active ? GREEN : SUB }}>{p.icon}</div>
              <div className="flex-1">
                <div style={{ color: TEXT }} className="text-sm font-semibold">{p.label}</div>
                <div style={{ color: SUB }} className="text-xs">{p.sub}</div>
              </div>
              {p.active && <div style={{ background: GREEN }} className="w-2 h-2 rounded-full" />}
            </div>
          ))}
        </div>

        {/* GPS disabled notice */}
        <div style={{ background: RED + "10", color: RED, borderLeft: `4px solid ${RED}` }} className="rounded-2xl px-4 py-3">
          <div className="font-semibold text-sm">{lang === "ru" ? "GPS отключён" : "GPS disabled"}</div>
          <div className="text-xs opacity-80">{lang === "ru" ? "Включится при зарядке &gt;20%" : "Will re-enable when charged >20%"}</div>
        </div>

        {/* Tip */}
        <div style={{ background: BRAND_SOFT }} className="rounded-3xl p-4 border border-orange-100">
          <div className="flex items-start gap-3">
            <Zap size={20} color={BRAND} className="shrink-0 mt-0.5" />
            <div>
              <div style={{ color: BRAND }} className="font-bold text-sm mb-1">{t.tipTitle}</div>
              <div style={{ color: TEXT }} className="text-sm leading-relaxed">{t.tipDesc}</div>
            </div>
          </div>
        </div>

        <PrimaryButton onClick={() => go("home-cg")}>{lang === "ru" ? "Понятно" : "Got it"}</PrimaryButton>
      </div>
    </div>
  );

  /* ============================= ROUTING ============================= */

  const current = {
    register:    <Register />,
    role:        <Role />,
    "home-cg":   <CaregiverHome />,
    map:         <MapView />,
    "zone-setup":<ZoneSetup />,
    alerts:      <AlertsList />,
    "new-zone":  <NewZoneAlert />,
    unusual:     <UnusualBehavior />,
    "ai-call":   <AiCall />,
    "behavior-ml":<BehaviorML />,
    "fall-detect":<FallDetect />,
    "home-elder":<ElderHome />,
    settings:    <SettingsCare />,
    "risk-score":<RiskScore />,
    "low-power": <LowPower />,
  }[screen];

  return (
    <div
      style={{
        background: "#e9e9ec",
        minHeight: "100vh",
        fontSize: fontPx,
        color: TEXT,
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}
      className="flex"
    >
      {/* Sidebar */}
      <aside style={{ background: "#fff", borderRight: `1px solid ${LINE}` }} className="w-72 shrink-0 p-5 h-screen overflow-y-auto">
        <div className="flex items-center gap-2 mb-1">
          <div style={{ background: BRAND }} className="w-9 h-9 rounded-xl flex items-center justify-center">
            <Shield color="#fff" size={18} />
          </div>
          <div>
            <div className="font-bold text-lg">SafeStep</div>
            <div style={{ color: SUB }} className="text-xs">{t.designReview}</div>
          </div>
        </div>

        <div style={{ color: SUB }} className="text-xs uppercase tracking-wider font-semibold mt-6 mb-2">{t.allScreens}</div>
        <div className="space-y-1">
          {screenList.map((s) => (
            <button key={s.id} onClick={() => setScreen(s.id)}
              style={{ background: screen === s.id ? BRAND : "transparent", color: screen === s.id ? "#fff" : TEXT }}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium">
              {s.label}
            </button>
          ))}
        </div>

        <div style={{ color: SUB }} className="text-xs uppercase tracking-wider font-semibold mt-6 mb-2">{t.language}</div>
        <div className="grid grid-cols-2 gap-2">
          {["ru", "en"].map((l) => (
            <button key={l} onClick={() => setLang(l)}
              style={{ background: lang === l ? BRAND : CARD, color: lang === l ? "#fff" : TEXT, borderColor: lang === l ? BRAND : LINE }}
              className="rounded-xl py-2 border font-semibold text-sm">
              {l === "ru" ? "Русский" : "English"}
            </button>
          ))}
        </div>

        <div style={{ color: SUB }} className="text-xs uppercase tracking-wider font-semibold mt-6 mb-2">{t.fontSize}</div>
        <div className="grid grid-cols-3 gap-2">
          {["small", "medium", "large"].map((s) => (
            <button key={s} onClick={() => setFontSize(s)}
              style={{ background: fontSize === s ? BRAND : CARD, color: fontSize === s ? "#fff" : TEXT, borderColor: fontSize === s ? BRAND : LINE }}
              className="rounded-xl py-2 border font-semibold text-sm">
              {s === "small" ? t.small : s === "medium" ? t.medium : t.large}
            </button>
          ))}
        </div>

        <button onClick={resetDemo} style={{ background: CARD, color: TEXT, borderColor: LINE }}
          className="w-full mt-6 rounded-xl py-2 border font-semibold text-sm flex items-center justify-center gap-2">
          <RotateCcw size={14} /> {t.reset}
        </button>

        <div style={{ color: SUB }} className="text-xs mt-6 leading-relaxed">
          {lang === "ru"
            ? "Полностью интерактивно: зарегистрируйтесь, выберите роль и исследуйте все функции."
            : "Fully interactive: register, choose a role, and explore all features."}
        </div>
      </aside>

      {/* Phone preview */}
      <main className="flex-1 flex items-center justify-center p-8 relative">
        <PhoneFrame>{current}</PhoneFrame>
        <Toast text={toast} show={!!toast} />
      </main>
    </div>
  );
}
