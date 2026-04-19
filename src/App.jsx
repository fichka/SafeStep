import { useState, useRef } from "react";
import {
  Mic, Camera, Plus, Settings as SettingsIcon, Bell, Phone, QrCode,
  User, ArrowLeft, Pill, Type, Check, Eye, EyeOff,
  ChevronRight, Heart, Users, Scan, MessageSquare, Clock,
  AlertCircle, LogOut, UserPlus, Globe, HelpCircle, Trash2, Volume2,
  RotateCcw
} from "lucide-react";

/* =========================================================
   MedRemind \u2014 interactive UI/UX prototype (demo-ready)
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

const PALETTE = [
  "#ff7d29", "#6366f1", "#0ea5e9", "#22c55e",
  "#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4", "#84cc16",
];

const T = {
  ru: {
    tagline: "\u041d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u043e \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430\u0445",
    createAccount: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442",
    first: "\u0418\u043c\u044f",
    last: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
    email: "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",
    password: "\u041f\u0430\u0440\u043e\u043b\u044c",
    uploadPhoto: "\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e",
    continue: "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",
    back: "\u041d\u0430\u0437\u0430\u0434",
    chooseRole: "\u041a\u0442\u043e \u0432\u044b?",
    elder: "\u041f\u043e\u0436\u0438\u043b\u043e\u0439",
    elderDesc: "\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",
    caregiver: "\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a",
    caregiverDesc: "\u0417\u0430\u0431\u043e\u0447\u0443\u0441\u044c \u043e \u0431\u043b\u0438\u0437\u043a\u043e\u043c",
    elderType: "\u041a\u0430\u043a \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?",
    solo: "\u0421\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e",
    soloDesc: "\u0421\u0430\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e \u043f\u0440\u0438\u0451\u043c\u043e\u043c",
    withCare: "\u0421 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u043e\u043c",
    withCareDesc: "\u041a\u0442\u043e-\u0442\u043e \u0441\u043b\u0435\u0434\u0438\u0442 \u0437\u0430 \u043c\u043d\u043e\u0439",
    sunday: "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435, 19 \u0430\u043f\u0440\u0435\u043b\u044f",
    goodMorning: "\u0414\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e",
    friend: "\u0434\u0440\u0443\u0433",
    dosesLeftToday: "\u043f\u0440\u0438\u0451\u043c\u043e\u0432 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0441\u0435\u0433\u043e\u0434\u043d\u044f",
    holdToSpeak: "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435",
    listening: "\u0421\u043b\u0443\u0448\u0430\u044e\u2026",
    myMeds: "\u041c\u043e\u0438 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",
    noMeds: "\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab+\u00bb, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c.",
    add: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",
    tapToTake: "\u041a\u043e\u0441\u043d\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u0451\u043c",
    scanRx: "\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",
    scanRxDesc: "\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430 \u0441 \u0440\u0435\u0446\u0435\u043f\u0442\u0430 \u0432\u0440\u0430\u0447\u0430",
    settings: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",
    profile: "\u041f\u0440\u043e\u0444\u0438\u043b\u044c",
    pairingQR: "QR-\u043a\u043e\u0434 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438",
    pairingQRDesc: "\u041f\u043e\u043a\u0430\u0436\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u043a\u043e\u0434 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0443",
    pairingTitle: "\u0421\u0432\u044f\u0437\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u043e\u043c",
    notPaired: "\u041f\u043e\u043a\u0430 \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d",
    pairedWith: "\u0421\u0432\u044f\u0437\u0430\u043d \u0441",
    language: "\u042f\u0437\u044b\u043a",
    fontSize: "\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
    notifications: "\u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f",
    voice: "\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u044b\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438",
    help: "\u041f\u043e\u043c\u043e\u0449\u044c",
    logout: "\u0412\u044b\u0439\u0442\u0438",
    small: "\u041c\u0430\u043b.",
    medium: "\u0421\u0440\u0435\u0434.",
    large: "\u0411\u043e\u043b.",
    newMed: "\u041d\u043e\u0432\u043e\u0435 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e",
    medName: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
    medNamePh: "\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0410\u0441\u043f\u0438\u0440\u0438\u043d",
    timesPerDay: "\u0420\u0430\u0437 \u0432 \u0434\u0435\u043d\u044c",
    pillsPerDose: "\u0422\u0430\u0431\u043b\u0435\u0442\u043e\u043a \u0437\u0430 \u043f\u0440\u0438\u0451\u043c",
    schedule: "\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u0451\u043c\u0430",
    save: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
    cancel: "\u041e\u0442\u043c\u0435\u043d\u0430",
    morning: "\u0423\u0442\u0440\u043e",
    noon: "\u0414\u0435\u043d\u044c",
    evening: "\u0412\u0435\u0447\u0435\u0440",
    night: "\u041d\u043e\u0447\u044c",
    scanning: "\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u2026",
    detected: "\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e",
    addAll: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0441\u0435",
    added: "\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e!",
    caregiverHome: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
    adherence: "\u0421\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435",
    today: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f",
    upcoming: "\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u043f\u0440\u0438\u0451\u043c",
    timeline: "\u041b\u0435\u043d\u0442\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f",
    taken: "\u041f\u0440\u0438\u043d\u044f\u0442\u043e",
    missed: "\u041f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e",
    pending: "\u041e\u0436\u0438\u0434\u0430\u0435\u0442",
    call: "\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c",
    message: "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
    remind: "\u041d\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c",
    meds: "\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",
    alerts: "\u041e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f",
    connected: "\u0412\u0430\u0448 \u043f\u043e\u0434\u043e\u043f\u0435\u0447\u043d\u044b\u0439",
    scanQR: "\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR-\u043a\u043e\u0434",
    scanQRDesc: "\u041d\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u0430\u043c\u0435\u0440\u0443 \u043d\u0430 QR-\u043a\u043e\u0434 \u043f\u043e\u0436\u0438\u043b\u043e\u0433\u043e",
    align: "\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043a\u043e\u0434 \u0432 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0435",
    connect: "\u0421\u0432\u044f\u0437\u0430\u0442\u044c",
    successPaired: "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043e!",
    elderDemo: "\u041c\u0430\u043c\u0430, \u0415\u043b\u0435\u043d\u0430",
    now: "\u0421\u0435\u0439\u0447\u0430\u0441",
    mic: "\u041c\u0438\u043a\u0440\u043e\u0444\u043e\u043d",
    designReview: "\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f",
    allScreens: "\u042d\u043a\u0440\u0430\u043d\u044b",
    at: "\u0432",
    pcs: "\u0448\u0442.",
    nameRequired: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",
    selectAtLeastOne: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u0432\u0440\u0435\u043c\u044f",
    reset: "\u0421\u0431\u0440\u043e\u0441 \u0434\u0435\u043c\u043e",
    tapIcon: "\u041a\u043e\u0441\u043d\u0438\u0442\u0435\u0441\u044c \u0438\u043a\u043e\u043d\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u043e\u0442\u043e",
    timePicker: "\u0412\u0440\u0435\u043c\u044f",
    streak: "\u0421\u0435\u0440\u0438\u044f",
    streakDays: "\u0434\u043d\u0435\u0439 \u043f\u043e\u0434\u0440\u044f\u0434",
    toCoupon: "\u0434\u043e \u043a\u0443\u043f\u043e\u043d\u0430",
    plantFlowered: "\u0426\u0432\u0435\u0442\u043e\u043a \u0440\u0430\u0441\u043f\u0443\u0441\u0442\u0438\u043b\u0441\u044f\!",
    plantWilting: "\u041d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c",
    plantGrowing: "\u0426\u0432\u0435\u0442\u043e\u043a \u0440\u0430\u0441\u0442\u0451\u0442",
    coupons: "\u041a\u0443\u043f\u043e\u043d\u044b",
    rewards: "\u041d\u0430\u0433\u0440\u0430\u0434\u044b",
    pharmacy: "\u0410\u043f\u0442\u0435\u043a\u0430",
    redeem: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u0434",
    nextReward: "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043d\u0430\u0433\u0440\u0430\u0434\u0430",
    myPlant: "\u041c\u043e\u0439 \u0446\u0432\u0435\u0442\u043e\u043a",
    elderPlant: "\u0426\u0432\u0435\u0442\u043e\u043a \u043f\u043e\u0434\u043e\u043f\u0435\u0447\u043d\u043e\u0433\u043e",
    keepStreak: "\u041d\u0435 \u043f\u0440\u0435\u0440\u044b\u0432\u0430\u0439\u0442\u0435 \u0441\u0435\u0440\u0438\u044e\!",
    couponAvailable: "\u0415\u0441\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u0443\u043f\u043e\u043d\!",
    discount10: "\u0421\u043a\u0438\u0434\u043a\u0430 10% \u0432 \u0430\u043f\u0442\u0435\u043a\u0435",
    discount25: "\u0421\u043a\u0438\u0434\u043a\u0430 25% \u0432 \u0430\u043f\u0442\u0435\u043a\u0435",
    discount10Desc: "\u041d\u0430 \u043b\u044e\u0431\u044b\u0435 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u044b",
    discount25Desc: "\u041d\u0430 \u0432\u0430\u0448\u0438 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",
    noRewards: "\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043d\u0430\u0433\u0440\u0430\u0434. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0439\u0442\u0435 \u0432 \u0442\u043e\u043c \u0436\u0435 \u0434\u0443\u0445\u0435\!",
    water: "\u041f\u043e\u043b\u0435\u0439\u0442\u0435 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430\u043c\u0438",
    flourishing: "\u041f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u0435\u0442",
    day7: "7 \u0434\u043d\u0435\u0439",
    day14: "14 \u0434\u043d\u0435\u0439",
    unlockAt: "\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430",
    locked: "\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043e",
    unlocked: "\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043e",
    myRewards: "\u041c\u043e\u0438 \u043d\u0430\u0433\u0440\u0430\u0434\u044b",
    activeCoupon: "\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u0443\u043f\u043e\u043d",
    viewAll: "\u0412\u0441\u0435",
    greatJob: "\u041e\u0442\u043b\u0438\u0447\u043d\u043e\!",
    rewardsScreen: "\u041d\u0430\u0433\u0440\u0430\u0434\u044b",
    showCode: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u0434 \u0432 \u0430\u043f\u0442\u0435\u043a\u0435",
    expires: "\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e",
    validIn: "\u0412 \u043b\u044e\u0431\u043e\u0439 \u0430\u043f\u0442\u0435\u043a\u0435-\u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0435",
    plantStage: "\u0421\u0442\u0430\u0434\u0438\u044f \u0440\u043e\u0441\u0442\u0430",
    todayDone: "\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f",
    plantCard: "\u0421\u0430\u0434\u0438\u043a \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u044f",
    seed: "\u0421\u0435\u043c\u044f",
    sprout: "\u0420\u043e\u0441\u0442\u043e\u043a",
    sapling: "\u0421\u0430\u0436\u0435\u043d\u0435\u0446",
    bush: "\u041a\u0443\u0441\u0442",
    bloom: "\u0426\u0432\u0435\u0442\u0435\u043d\u0438\u0435",
  },
  en: {
    tagline: "Never miss a dose",
    createAccount: "Create account",
    first: "First name",
    last: "Last name",
    email: "Email",
    password: "Password",
    uploadPhoto: "Tap to upload photo",
    continue: "Continue",
    back: "Back",
    chooseRole: "Who are you?",
    elder: "Elder",
    elderDesc: "I take medications",
    caregiver: "Caregiver",
    caregiverDesc: "I help a loved one",
    elderType: "How will you use it?",
    solo: "Solo",
    soloDesc: "I manage on my own",
    withCare: "With caregiver",
    withCareDesc: "Someone helps me",
    sunday: "Sunday, April 19",
    goodMorning: "Good morning",
    friend: "friend",
    dosesLeftToday: "doses left today",
    holdToSpeak: "Hold to speak",
    listening: "Listening\u2026",
    myMeds: "My medications",
    noMeds: "No medications yet. Tap \u201c+\u201d to add one.",
    add: "Add",
    tapToTake: "Tap a pill card to mark a dose",
    scanRx: "Scan prescription",
    scanRxDesc: "Recognize meds from a doctor's slip",
    settings: "Settings",
    profile: "Profile",
    pairingQR: "Pairing QR code",
    pairingQRDesc: "Show this code to your caregiver",
    pairingTitle: "Caregiver pairing",
    notPaired: "Not paired yet",
    pairedWith: "Paired with",
    language: "Language",
    fontSize: "Font size",
    notifications: "Reminders",
    voice: "Voice prompts",
    help: "Help",
    logout: "Log out",
    small: "Sm",
    medium: "Md",
    large: "Lg",
    newMed: "New medication",
    medName: "Name",
    medNamePh: "e.g. Aspirin",
    timesPerDay: "Times per day",
    pillsPerDose: "Pills per dose",
    schedule: "Schedule",
    save: "Save",
    cancel: "Cancel",
    morning: "Morning",
    noon: "Noon",
    evening: "Evening",
    night: "Night",
    scanning: "Scanning\u2026",
    detected: "Detected",
    addAll: "Add all",
    added: "Added!",
    caregiverHome: "Home",
    adherence: "Adherence",
    today: "Today",
    upcoming: "Upcoming",
    timeline: "Today's timeline",
    taken: "Taken",
    missed: "Missed",
    pending: "Pending",
    call: "Call",
    message: "Message",
    remind: "Remind",
    meds: "Meds",
    alerts: "Alerts",
    connected: "Your elder",
    scanQR: "Scan QR code",
    scanQRDesc: "Point camera at elder's QR",
    align: "Align the code inside the square",
    connect: "Pair",
    successPaired: "Successfully paired!",
    elderDemo: "Mom, Elena",
    now: "Now",
    mic: "Mic",
    designReview: "Interactive prototype",
    allScreens: "Screens",
    at: "at",
    pcs: "pcs",
    nameRequired: "Please enter a medication name",
    selectAtLeastOne: "Pick at least one time slot",
    reset: "Reset demo",
    tapIcon: "Tap the icon to choose a photo",
    timePicker: "Time",
    streak: "Streak",
    streakDays: "days in a row",
    toCoupon: "to coupon",
    plantFlowered: "In full bloom\!",
    plantWilting: "Don't forget your doses",
    plantGrowing: "Plant is growing",
    coupons: "Coupons",
    rewards: "Rewards",
    pharmacy: "Pharmacy",
    redeem: "Show code",
    nextReward: "Next reward",
    myPlant: "My plant",
    elderPlant: "Elder's plant",
    keepStreak: "Keep your streak\!",
    couponAvailable: "New coupon available\!",
    discount10: "10% off at pharmacy",
    discount25: "25% off at pharmacy",
    discount10Desc: "On any medication",
    discount25Desc: "On your prescriptions",
    noRewards: "No rewards yet. Keep it up\!",
    water: "Water with medications",
    flourishing: "Flourishing",
    day7: "7 days",
    day14: "14 days",
    unlockAt: "Unlocks at",
    locked: "Locked",
    unlocked: "Unlocked",
    myRewards: "My rewards",
    activeCoupon: "Active coupon",
    viewAll: "All",
    greatJob: "Great job\!",
    rewardsScreen: "Rewards",
    showCode: "Show code at pharmacy",
    expires: "Valid through",
    validIn: "At any partner pharmacy",
    plantStage: "Growth stage",
    todayDone: "done today",
    plantCard: "Health garden",
    seed: "Seed",
    sprout: "Sprout",
    sapling: "Sapling",
    bush: "Bush",
    bloom: "Bloom",
  },
};

const INITIAL_MEDS = [
  { id: 1, name: "\u0413\u043b\u0438\u043a\u043e\u043d\u0438\u043b",     taken: 1, total: 2, color: PALETTE[0], time: "08:00" },
  { id: 2, name: "\u0422\u0430\u0433\u043b\u0438\u043d",       taken: 2, total: 3, color: PALETTE[1], time: "09:00" },
  { id: 3, name: "\u0412\u0438\u0441\u0438\u043f\u0440\u043e\u043b\u043e\u043b",   taken: 1, total: 4, color: PALETTE[2], time: "10:00" },
  { id: 4, name: "\u041a\u0430\u043d\u0442\u0430\u0431",       taken: 3, total: 3, color: PALETTE[3], time: "12:00" },
  { id: 5, name: "\u0422\u0440\u043e\u043c\u0431\u043e\u043f\u043e\u043b",    taken: 0, total: 1, color: PALETTE[4], time: "14:00" },
  { id: 6, name: "\u0410\u0442\u043e\u0440\u0432\u0430\u0441\u0442\u0430\u0442\u0438\u043d", taken: 0, total: 1, color: PALETTE[5], time: "18:00" },
  { id: 7, name: "\u0418\u043d\u0432\u043e\u043a\u0430\u043d\u0430",     taken: 0, total: 2, color: PALETTE[6], time: "20:00" },
  { id: 8, name: "\u0410\u043d\u0442\u0430\u0440\u0438\u0441",      taken: 0, total: 1, color: PALETTE[7], time: "21:00" },
  { id: 9, name: "\u0413\u0430\u043b\u044c\u0432\u0443\u0441",      taken: 0, total: 2, color: PALETTE[8], time: "22:00" },
];

const DEFAULT_TIME = "08:00";

const normalizeTime = (value) =>
  typeof value === "string" && /^\d{2}:\d{2}$/.test(value) ? value : DEFAULT_TIME;

const sortSchedule = (schedule = []) =>
  [...schedule].sort((a, b) => normalizeTime(a.time).localeCompare(normalizeTime(b.time)));

const buildMedication = (med, fallbackColor = PALETTE[0]) => {
  const rawSchedule =
    Array.isArray(med.schedule) && med.schedule.length > 0
      ? med.schedule
      : [{ key: "primary", time: med.time ?? DEFAULT_TIME }];

  const schedule = sortSchedule(
    rawSchedule.map((slot, index) => ({
      key: slot.key || `slot-${index + 1}`,
      label: slot.label || "",
      time: normalizeTime(slot.time),
    }))
  );

  const total = Math.max(1, Number(med.total) || schedule.length || 1);
  const pillsPerDose = Math.max(
    1,
    Number(med.pillsPerDose) || Math.ceil(total / Math.max(schedule.length, 1))
  );

  return {
    ...med,
    color: med.color || fallbackColor,
    time: schedule[0]?.time || DEFAULT_TIME,
    taken: Math.min(Math.max(0, Number(med.taken) || 0), total),
    total,
    pillsPerDose,
    schedule,
  };
};

const buildInitialMeds = () =>
  INITIAL_MEDS.map((med, index) => buildMedication(med, med.color || PALETTE[index % PALETTE.length]));

const getMedicationTimes = (med) => sortSchedule(med.schedule).map((slot) => slot.time);

const getMedicationTimesText = (med) => getMedicationTimes(med).join(", ");

/* ---------- reusable bits ---------- */

function CircleProgress({ value, total, color, size = 58, stroke = 6, children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = total > 0 ? Math.min(1, value / total) : 0;
  const offset = c * (1 - pct);
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke={LINE} strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={color} strokeWidth={stroke} fill="none"
          strokeDasharray={c} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset .5s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center" style={{ color: TEXT, fontWeight: 700 }}>
        {children ?? `${value}/${total}`}
      </div>
    </div>
  );
}
function FakeQR({ size = 180 }) {
  const cells = 21;
  const grid = [];
  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < cells; x++) {
      const corner =
        (x < 7 && y < 7) || (x >= cells - 7 && y < 7) || (x < 7 && y >= cells - 7);
      const on = corner
        ? (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4))
        : ((x * 31 + y * 17 + (x ^ y) * 7) % 3 === 0);
      if (on) grid.push({ x, y });
    }
  }
  const s = size / cells;
  return (
    <svg width={size} height={size} style={{ background: "#fff", borderRadius: 12 }}>
      {grid.map((g, i) => (
        <rect key={i} x={g.x * s} y={g.y * s} width={s} height={s} fill={TEXT} />
      ))}
    </svg>
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

function PrimaryButton({ children, onClick, style, icon, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled ? "#ffc79c" : BRAND,
        color: "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      className="w-full rounded-2xl py-4 font-semibold text-lg flex items-center justify-center gap-2 shadow-md"
    >
      {icon}{children}
    </button>
  );
}

function GhostButton({ children, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      style={{ background: CARD, color: TEXT }}
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
        <button
          onClick={onRightClick}
          type="button"
          className="absolute right-3 top-9 w-8 h-8 flex items-center justify-center"
        >
          {right}
        </button>
      )}
    </div>
  );
}

function SettingsRow({ icon, label, value, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      style={{ background: CARD, color: danger ? RED : TEXT }}
      className="w-full rounded-2xl px-4 py-4 flex items-center justify-between border mb-2"
    >
      <div className="flex items-center gap-3">
        <div
          style={{ background: danger ? "#fee2e2" : BRAND_SOFT, color: danger ? RED : BRAND }}
          className="w-9 h-9 rounded-xl flex items-center justify-center"
        >
          {icon}
        </div>
        <span className="font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2" style={{ color: SUB }}>
        {value && <span className="text-sm">{value}</span>}
        {!danger && <ChevronRight size={18} />}
      </div>
    </button>
  );
}

function Toast({ text, show }) {
  if (!show) return null;
  return (
    <div
      style={{
        position: "absolute", left: "50%", bottom: 30,
        transform: "translateX(-50%)",
        background: TEXT, color: "#fff",
        padding: "10px 18px", borderRadius: 999, zIndex: 70,
        boxShadow: "0 10px 30px rgba(0,0,0,.25)",
        fontWeight: 600,
      }}
      className="text-sm flex items-center gap-2"
    >
      <Check size={16} color={GREEN} /> {text}
    </div>
  );
}

/* =========================================================
                        APP
   ========================================================= */

function Plant({ adherence = 1, size = 150 }) {
  // adherence: 0..1 of today's doses taken. Drives growth stage + wilt.
  const pct = Math.max(0, Math.min(1, adherence));
  // 0..4 stages: seed, sprout, sapling, bush, bloom
  const stage = pct >= 1 ? 4 : pct >= 0.75 ? 3 : pct >= 0.5 ? 2 : pct >= 0.2 ? 1 : 0;
  const wilt = pct < 0.5;
  const stemColor = wilt ? "#9ca3af" : "#15803d";
  const leafColor = wilt ? "#a8b3a5" : "#22c55e";
  const leafDark = wilt ? "#8a9589" : "#16a34a";
  const potColor = "#c2410c";
  const potDark = "#9a3412";
  const soilColor = "#78350f";
  const flowerColor = "#ff7d29";
  const flowerCenter = "#fde047";

  // Heights per stage
  const stemHeight = [0, 18, 40, 60, 75][stage];
  const stemDroop = wilt ? 8 : 0;

  return (
    <svg width={size} height={size} viewBox="0 0 150 150">
      {/* Pot */}
      <path d="M 45 120 L 50 145 L 100 145 L 105 120 Z" fill={potColor} />
      <rect x="42" y="115" width="66" height="10" rx="2" fill={potDark} />
      <ellipse cx="75" cy="118" rx="30" ry="4" fill={soilColor} />

      {/* Stage 0: just a seed */}
      {stage === 0 && (
        <ellipse cx="75" cy="115" rx="4" ry="3" fill="#78350f" />
      )}

      {/* Stem and leaves for stage >= 1 */}
      {stage >= 1 && (
        <g>
          <path
            d={`M 75 115 Q ${75 + stemDroop} ${115 - stemHeight/2} 75 ${115 - stemHeight}`}
            stroke={stemColor}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* Stage 1: tiny sprout leaves */}
      {stage >= 1 && (
        <g>
          <ellipse cx="68" cy={115 - stemHeight + 4} rx="5" ry="3" fill={leafColor} transform={`rotate(-30 68 ${115 - stemHeight + 4})`} />
          <ellipse cx="82" cy={115 - stemHeight + 4} rx="5" ry="3" fill={leafColor} transform={`rotate(30 82 ${115 - stemHeight + 4})`} />
        </g>
      )}

      {/* Stage 2: 2 larger leaves mid-stem */}
      {stage >= 2 && (
        <g>
          <ellipse cx="60" cy="95" rx="10" ry="5" fill={leafColor} transform="rotate(-25 60 95)" />
          <ellipse cx="90" cy="95" rx="10" ry="5" fill={leafDark} transform="rotate(25 90 95)" />
        </g>
      )}

      {/* Stage 3: bush - more leaves */}
      {stage >= 3 && (
        <g>
          <ellipse cx="55" cy="75" rx="12" ry="6" fill={leafColor} transform="rotate(-30 55 75)" />
          <ellipse cx="95" cy="75" rx="12" ry="6" fill={leafDark} transform="rotate(30 95 75)" />
          <ellipse cx="65" cy="60" rx="10" ry="5" fill={leafColor} transform="rotate(-15 65 60)" />
          <ellipse cx="85" cy="60" rx="10" ry="5" fill={leafDark} transform="rotate(15 85 60)" />
        </g>
      )}

      {/* Stage 4: flower in bloom */}
      {stage >= 4 && (
        <g>
          {/* petals */}
          <circle cx="75" cy="30" r="8" fill={flowerColor} />
          <circle cx="65" cy="38" r="8" fill={flowerColor} />
          <circle cx="85" cy="38" r="8" fill={flowerColor} />
          <circle cx="70" cy="47" r="8" fill={flowerColor} />
          <circle cx="80" cy="47" r="8" fill={flowerColor} />
          <circle cx="75" cy="40" r="6" fill={flowerCenter} />
        </g>
      )}

      {/* Wilting droop marks */}
      {wilt && stage >= 2 && (
        <g opacity="0.5">
          <path d="M 70 90 Q 68 95 65 96" stroke={leafDark} strokeWidth="1" fill="none" />
        </g>
      )}
    </svg>
  );
}

function StreakBadge({ streak = 0, size = 52 }) {
  const active = streak > 0;
  const flameColor = active ? "#ff7d29" : "#9ca3af";
  const flameInner = active ? "#fbbf24" : "#d1d5db";
  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={size} height={size} viewBox="0 0 52 52">
        <path
          d="M 26 6 C 30 14, 38 18, 38 30 C 38 40, 32 46, 26 46 C 20 46, 14 40, 14 30 C 14 24, 18 22, 20 18 C 22 22, 24 20, 26 6 Z"
          fill={flameColor}
        />
        <path
          d="M 26 18 C 28 22, 32 26, 32 32 C 32 38, 29 42, 26 42 C 23 42, 20 38, 20 32 C 20 28, 22 26, 24 24 C 25 26, 25.5 25, 26 18 Z"
          fill={flameInner}
        />
      </svg>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("register");
  const [lang, setLang] = useState("ru");
  const [fontSize, setFontSize] = useState("medium");
  const [recording, setRecording] = useState(false);
  const [paired, setPaired] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState("");
  const [streak, setStreak] = useState(6);
  const [redeemedCoupons, setRedeemedCoupons] = useState([]);

  // controlled user profile
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatar: null,
  });

  // medications (stateful)
  const [meds, setMeds] = useState(() => buildInitialMeds());

  // upload refs
  const avatarRef = useRef(null);

  const t = T[lang];
  const fontPx = { small: 14, medium: 16, large: 18 }[fontSize];
  const userFirstName = user.firstName.trim();
  const userLastName = user.lastName.trim();
  const userEmail = user.email.trim();
  const userPassword = user.password.trim();
  const profileName = [userFirstName, userLastName].filter(Boolean).join(" ");
  const isRegistrationValid = Boolean(userFirstName && userEmail && userPassword);

  const takenTotal = meds.reduce((s, m) => s + m.taken, 0);
  const allTotal = meds.reduce((s, m) => s + m.total, 0);
  const dosesLeft = Math.max(0, allTotal - takenTotal);
  const adherence = allTotal > 0 ? takenTotal / allTotal : 0;
  const reachedFullToday = allTotal > 0 && takenTotal === allTotal;
  const effectiveStreak = reachedFullToday ? streak + 1 : streak;
  const coupon7Unlocked = effectiveStreak >= 7;
  const coupon14Unlocked = effectiveStreak >= 14;
  const daysToNextCoupon = coupon14Unlocked ? 0 : coupon7Unlocked ? (14 - effectiveStreak) : (7 - effectiveStreak);
  const unlockedCoupons = [
    coupon7Unlocked && { id: "c7", title: t.discount10, desc: t.discount10Desc, days: 7, code: "MED7-10OFF", color: "#ff7d29", redeemed: redeemedCoupons.includes("c7") },
    coupon14Unlocked && { id: "c14", title: t.discount25, desc: t.discount25Desc, days: 14, code: "MED14-25OFF", color: "#8b5cf6", redeemed: redeemedCoupons.includes("c14") },
  ].filter(Boolean);
  const availableCouponCount = unlockedCoupons.filter((c) => !c.redeemed).length;

  const initials =
    (user.firstName?.[0] || "").toUpperCase() +
    (user.lastName?.[0] || "").toUpperCase();

  const showToast = (text) => {
    setToast(text);
    setTimeout(() => setToast(""), 1600);
  };

  const resetDemo = () => {
    setUser({ firstName: "", lastName: "", email: "", password: "", avatar: null });
    setMeds(buildInitialMeds());
    setPaired(false);
    setShowPassword(false);
    setToast("");
    setScreen("register");
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setUser((u) => ({ ...u, avatar: ev.target.result }));
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const saveProfile = () => {
    if (!isRegistrationValid) return;
    setUser((prev) => ({
      ...prev,
      firstName: prev.firstName.trim(),
      lastName: prev.lastName.trim(),
      email: prev.email.trim(),
      password: prev.password.trim(),
    }));
    setScreen("role");
  };

  const takeDose = (id) => {
    let toastText = "";
    setMeds((prev) =>
      prev.map((m) => {
        if (m.id !== id || m.taken >= m.total) return m;
        toastText = `${m.name}: +1 ${t.taken.toLowerCase()}`;
        return { ...m, taken: m.taken + 1 };
      })
    );
    if (toastText) showToast(toastText);
  };

  const removeMed = (id) => {
    setMeds((prev) => prev.filter((m) => m.id !== id));
  };

  const addMedication = (med) => {
    setMeds((prev) => {
      const id = Math.max(0, ...prev.map((m) => m.id || 0)) + 1;
      const color = PALETTE[(id - 1) % PALETTE.length];
      const nextMed = buildMedication({ id, taken: 0, ...med, color }, color);
      return [...prev, nextMed].sort((a, b) => a.time.localeCompare(b.time) || a.name.localeCompare(b.name));
    });
  };

  const screens = [
    { id: "register",      label: lang === "ru" ? "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f" : "Register" },
    { id: "role",          label: lang === "ru" ? "\u0412\u044b\u0431\u043e\u0440 \u0440\u043e\u043b\u0438" : "Choose role" },
    { id: "elderType",     label: lang === "ru" ? "\u0422\u0438\u043f \u043f\u043e\u0436\u0438\u043b\u043e\u0433\u043e" : "Elder type" },
    { id: "elder",         label: lang === "ru" ? "\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u2014 \u041f\u043e\u0436\u0438\u043b\u043e\u0439" : "Elder home" },
    { id: "addMed",        label: lang === "ru" ? "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e" : "Add medication" },
    { id: "scan",          label: lang === "ru" ? "\u0421\u043a\u0430\u043d \u0440\u0435\u0446\u0435\u043f\u0442\u0430" : "Scan prescription" },
    { id: "settingsElder", label: lang === "ru" ? "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u2014 \u041f\u043e\u0436\u0438\u043b\u043e\u0439" : "Elder settings" },
    { id: "caregiver",     label: lang === "ru" ? "\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u2014 \u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a" : "Caregiver home" },
    { id: "settingsCare",  label: lang === "ru" ? "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u2014 \u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a" : "Caregiver settings" },
    { id: "pairScan",      label: lang === "ru" ? "\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 QR" : "Scan elder's QR" },
    { id: "rewards",       label: lang === "ru" ? "\u041d\u0430\u0433\u0440\u0430\u0434\u044b" : "Rewards" },
  ];

  /* =========================================================
                        SCREENS
  ========================================================= */

  const Register = () => (
    <div className="px-6 pt-16 pb-8">
      <div className="flex flex-col items-center mb-5">
        <div style={{ background: BRAND }} className="w-16 h-16 rounded-3xl flex items-center justify-center mb-3 shadow-lg">
          <Pill color="#fff" size={32} />
        </div>
        <div style={{ color: TEXT }} className="text-2xl font-bold">MedRemind</div>
        <div style={{ color: SUB }} className="text-sm mt-1">{t.tagline}</div>
      </div>

      <div className="flex flex-col items-center mb-5">
        <input
          ref={avatarRef}
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          style={{ display: "none" }}
        />
        <button
          onClick={() => avatarRef.current?.click()}
          className="relative"
          type="button"
        >
          <div
            style={{
              background: user.avatar ? "transparent" : "#e5e7eb",
              backgroundImage: user.avatar ? `url(${user.avatar})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border"
          >
            {!user.avatar && <User size={42} color="#9ca3af" />}
          </div>
          <div
            style={{ background: BRAND }}
            className="absolute bottom-0 right-0 w-9 h-9 rounded-full flex items-center justify-center border-2 border-white shadow"
          >
            <Camera size={16} color="#fff" />
          </div>
        </button>
        <div style={{ color: SUB }} className="text-xs mt-2">
          {user.avatar ? t.tapIcon : t.uploadPhoto}
        </div>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Field
            placeholder={t.first}
            value={user.firstName}
            onChange={(v) => setUser((u) => ({ ...u, firstName: v }))}
          />
          <Field
            placeholder={t.last}
            value={user.lastName}
            onChange={(v) => setUser((u) => ({ ...u, lastName: v }))}
          />
        </div>
        <Field
          placeholder={t.email}
          type="email"
          value={user.email}
          onChange={(v) => setUser((u) => ({ ...u, email: v }))}
        />
        <Field
          placeholder={t.password}
          type={showPassword ? "text" : "password"}
          value={user.password}
          onChange={(v) => setUser((u) => ({ ...u, password: v }))}
          right={showPassword ? <EyeOff size={18} color={SUB} /> : <Eye size={18} color={SUB} />}
          onRightClick={() => setShowPassword((s) => !s)}
        />
      </div>

      <div className="mt-6">
        <PrimaryButton
          onClick={saveProfile}
          disabled={!isRegistrationValid}
        >
          {t.continue}
        </PrimaryButton>
      </div>

      <div style={{ color: SUB }} className="text-center text-xs mt-4">
        {lang === "ru" ? "\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?" : "Already have an account?"}{" "}
        <span style={{ color: BRAND, fontWeight: 600 }}>
          {lang === "ru" ? "\u0412\u043e\u0439\u0442\u0438" : "Log in"}
        </span>
      </div>
    </div>
  );

  const Role = () => (
    <>
      <TopBar title={t.chooseRole} onBack={() => setScreen("register")} />
      <div className="px-6 pt-4">
        <div style={{ color: SUB }} className="text-sm text-center mb-6">
          {lang === "ru"
            ? "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0434 \u0432\u0430\u0441"
            : "Pick your profile so we can tailor the app for you"}
        </div>
        <div className="space-y-3">
          <button
            onClick={() => setScreen("elderType")}
            style={{ background: CARD }}
            className="w-full rounded-3xl p-5 text-left border flex items-center gap-4"
          >
            <div style={{ background: BRAND_SOFT, color: BRAND }} className="w-14 h-14 rounded-2xl flex items-center justify-center">
              <Heart size={28} />
            </div>
            <div className="flex-1">
              <div style={{ color: TEXT }} className="font-semibold text-lg">{t.elder}</div>
              <div style={{ color: SUB }} className="text-sm">{t.elderDesc}</div>
            </div>
            <ChevronRight size={22} color={SUB} />
          </button>

          <button
            onClick={() => setScreen("caregiver")}
            style={{ background: CARD }}
            className="w-full rounded-3xl p-5 text-left border flex items-center gap-4"
          >
            <div style={{ background: "#e0f2fe", color: "#0284c7" }} className="w-14 h-14 rounded-2xl flex items-center justify-center">
              <Users size={28} />
            </div>
            <div className="flex-1">
              <div style={{ color: TEXT }} className="font-semibold text-lg">{t.caregiver}</div>
              <div style={{ color: SUB }} className="text-sm">{t.caregiverDesc}</div>
            </div>
            <ChevronRight size={22} color={SUB} />
          </button>
        </div>
      </div>
    </>
  );

  const ElderType = () => (
    <>
      <TopBar title={t.elderType} onBack={() => setScreen("role")} />
      <div className="px-6 pt-4">
        <div className="space-y-3">
          <button
            onClick={() => setScreen("elder")}
            style={{ background: CARD }}
            className="w-full rounded-3xl p-5 text-left border flex items-center gap-4"
          >
            <div style={{ background: BRAND_SOFT, color: BRAND }} className="w-14 h-14 rounded-2xl flex items-center justify-center">
              <User size={28} />
            </div>
            <div className="flex-1">
              <div style={{ color: TEXT }} className="font-semibold text-lg">{t.solo}</div>
              <div style={{ color: SUB }} className="text-sm">{t.soloDesc}</div>
            </div>
            <ChevronRight size={22} color={SUB} />
          </button>

          <button
            onClick={() => setScreen("elder")}
            style={{ background: CARD }}
            className="w-full rounded-3xl p-5 text-left border flex items-center gap-4"
          >
            <div style={{ background: "#dcfce7", color: GREEN }} className="w-14 h-14 rounded-2xl flex items-center justify-center">
              <UserPlus size={28} />
            </div>
            <div className="flex-1">
              <div style={{ color: TEXT }} className="font-semibold text-lg">{t.withCare}</div>
              <div style={{ color: SUB }} className="text-sm">{t.withCareDesc}</div>
            </div>
            <ChevronRight size={22} color={SUB} />
          </button>
        </div>
      </div>
    </>
  );

  const Avatar = ({ size = 44 }) => (
    <div
      style={{
        width: size, height: size,
        background: user.avatar ? "transparent" : BRAND,
        backgroundImage: user.avatar ? `url(${user.avatar})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        fontWeight: 700,
      }}
      className="rounded-full flex items-center justify-center text-lg overflow-hidden border"
    >
      {!user.avatar && (initials || "\u0410")}
    </div>
  );

  const ElderHome = () => (
    <>
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div style={{ color: SUB }} className="text-sm font-medium">{t.sunday}</div>
            <div style={{ color: TEXT }} className="text-2xl font-bold mt-1">
              {t.goodMorning}, {userFirstName || t.friend}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScreen("rewards")}
              style={{ background: effectiveStreak > 0 ? "#fff7ed" : CARD, borderColor: effectiveStreak > 0 ? "#ff7d29" : LINE }}
              className="h-11 px-2.5 rounded-full flex items-center gap-1 border relative"
            >
              <span style={{ fontSize: 20, lineHeight: 1 }}>{"\ud83d\udd25"}</span>
              <span style={{ color: effectiveStreak > 0 ? "#ff7d29" : SUB, fontWeight: 800, fontSize: 15 }}>
                {effectiveStreak}
              </span>
              {availableCouponCount > 0 && (
                <span
                  style={{ position: "absolute", top: -4, right: -4, background: "#ef4444", color: "#fff", minWidth: 18, height: 18, borderRadius: 999, fontSize: 10, fontWeight: 700 }}
                  className="flex items-center justify-center px-1"
                >
                  {availableCouponCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setScreen("settingsElder")}
              style={{ background: CARD }}
              className="w-11 h-11 rounded-full flex items-center justify-center border"
            >
              <SettingsIcon size={20} color={TEXT} />
            </button>
            <Avatar />
          </div>
        </div>

        <button
          onClick={() => setScreen("rewards")}
          style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #fef3c7 100%)" }}
          className="w-full rounded-3xl p-4 mb-3 border text-left shadow-sm relative overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <div style={{ background: "rgba(255,255,255,.7)", borderRadius: 20 }} className="p-1">
              <Plant adherence={adherence} size={96} />
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ color: "#14532d" }} className="font-bold text-base leading-tight">
                {adherence >= 1 ? t.plantFlowered : adherence >= 0.5 ? t.plantGrowing : t.plantWilting}
              </div>
              <div style={{ color: "#166534" }} className="text-xs mt-1">
                {daysToNextCoupon > 0
                  ? daysToNextCoupon + " " + t.toCoupon
                  : t.couponAvailable}
              </div>
            </div>
            <ChevronRight size={22} color="#166534" />
          </div>
          {availableCouponCount > 0 && (
            <div style={{ position: "absolute", top: 10, right: 10, background: "#ef4444", color: "#fff", minWidth: 22, height: 22, borderRadius: 999 }} className="text-xs font-bold flex items-center justify-center px-1.5">
              {availableCouponCount}
            </div>
          )}
        </button>

        <div
          style={{ background: `linear-gradient(135deg, ${BRAND} 0%, #ff9a55 100%)` }}
          className="rounded-3xl p-5 text-white shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90">{t.today}</div>
              <div className="flex items-baseline gap-2 mt-1">
                <div className="text-5xl font-bold leading-none">{dosesLeft}</div>
                <div className="text-sm opacity-90">{t.dosesLeftToday}</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button
                onMouseDown={() => setRecording(true)}
                onMouseUp={() => setRecording(false)}
                onMouseLeave={() => setRecording(false)}
                onTouchStart={() => setRecording(true)}
                onTouchEnd={() => setRecording(false)}
                style={{
                  background: "#fff",
                  color: BRAND,
                  boxShadow: recording
                    ? "0 0 0 12px rgba(255,255,255,.3), 0 0 0 24px rgba(255,255,255,.15)"
                    : "0 10px 25px rgba(0,0,0,.2)",
                }}
                className="w-24 h-24 rounded-full flex items-center justify-center transition-all"
              >
                <Mic size={44} />
              </button>
              <div className="text-xs mt-2 font-medium">
                {recording ? t.listening : t.holdToSpeak}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="flex items-center justify-between mb-1">
          <div style={{ color: TEXT }} className="font-bold text-lg">{t.myMeds}</div>
          <button
            onClick={() => setScreen("addMed")}
            style={{ background: BRAND, color: "#fff" }}
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >
            <Plus size={22} />
          </button>
        </div>
        <div style={{ color: SUB }} className="text-xs mb-3">{t.tapToTake}</div>

        <div className="space-y-2">
          {meds.length === 0 && (
            <div style={{ background: CARD, color: SUB }} className="rounded-2xl p-5 text-center border text-sm">
              {t.noMeds}
            </div>
          )}
          {meds.map((m) => {
            const done = m.taken >= m.total;
            return (
              <button
                key={m.id}
                onClick={() => takeDose(m.id)}
                style={{ background: CARD, opacity: done ? 0.7 : 1 }}
                className="w-full rounded-2xl p-3 flex items-center gap-3 border text-left"
              >
                <div
                  style={{ background: m.color + "22", color: m.color }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                >
                  <Pill size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    style={{ color: TEXT, textDecoration: done ? "line-through" : "none" }}
                    className="font-semibold text-base truncate"
                  >
                    {m.name}
                  </div>
                  <div style={{ color: SUB }} className="text-xs flex items-center gap-1 mt-0.5">
                    <Clock size={12} /> {getMedicationTimesText(m)}{" \u00b7 "}{m.pillsPerDose} {t.pcs}
                  </div>
                </div>
                <CircleProgress value={m.taken} total={m.total} color={m.color} size={52} stroke={5} />
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setScreen("scan")}
          style={{ background: TEXT, color: "#fff" }}
          className="w-full rounded-3xl p-4 mt-4 mb-6 flex items-center gap-3 shadow-md"
        >
          <div style={{ background: BRAND }} className="w-12 h-12 rounded-2xl flex items-center justify-center">
            <Scan size={24} color="#fff" />
          </div>
          <div className="flex-1 text-left">
            <div className="font-semibold">{t.scanRx}</div>
            <div className="text-xs opacity-80">{t.scanRxDesc}</div>
          </div>
          <ChevronRight size={22} />
        </button>
      </div>
    </>
  );

  const AddMed = () => {
    const [name, setName] = useState("");
    const [pills, setPills] = useState(1);
    const [slots, setSlots] = useState([
      { key: "morning", labelRu: "\u0423\u0442\u0440\u043e",  labelEn: "Morning", time: "08:00", active: true  },
      { key: "noon",    labelRu: "\u0414\u0435\u043d\u044c",  labelEn: "Noon",    time: "13:00", active: true  },
      { key: "evening", labelRu: "\u0412\u0435\u0447\u0435\u0440", labelEn: "Evening", time: "19:00", active: true  },
      { key: "night",   labelRu: "\u041d\u043e\u0447\u044c",  labelEn: "Night",   time: "22:00", active: false },
    ]);
    const [error, setError] = useState("");

    const toggleSlot = (i) =>
      setSlots((p) => p.map((s, idx) => (idx === i ? { ...s, active: !s.active } : s)));
    const setSlotTime = (i, time) =>
      setSlots((p) => p.map((s, idx) => (idx === i ? { ...s, time } : s)));

    const activeSchedule = sortSchedule(
      slots
        .filter((s) => s.active)
        .map((slot) => ({
          key: slot.key,
          label: lang === "ru" ? slot.labelRu : slot.labelEn,
          time: slot.time || DEFAULT_TIME,
        }))
    );
    const activeCount = activeSchedule.length;

    const handleSave = () => {
      if (!name.trim()) return setError(t.nameRequired);
      if (activeCount === 0) return setError(t.selectAtLeastOne);
      addMedication({
        name: name.trim(),
        total: activeCount * pills,
        pillsPerDose: pills,
        schedule: activeSchedule,
      });
      showToast(`${name.trim()} \u00b7 ${t.added}`);
      setScreen("elder");
    };

    return (
      <>
        <TopBar title={t.newMed} onBack={() => setScreen("elder")} />
        <div className="px-5 pb-8">
          <Field
            label={t.medName}
            placeholder={t.medNamePh}
            value={name}
            onChange={(v) => { setName(v); setError(""); }}
          />

          <div className="mt-4">
            <div style={{ color: SUB }} className="text-xs font-medium ml-4 mb-2">{t.pillsPerDose}</div>
            <div style={{ background: CARD }} className="rounded-2xl p-2 flex items-center justify-between border">
              <button
                onClick={() => setPills(Math.max(1, pills - 1))}
                style={{ background: BRAND_SOFT, color: BRAND }}
                className="w-10 h-10 rounded-xl font-bold text-xl"
              >{"\u2212"}</button>
              <div style={{ color: TEXT }} className="text-2xl font-bold">{pills} {t.pcs}</div>
              <button
                onClick={() => setPills(pills + 1)}
                style={{ background: BRAND_SOFT, color: BRAND }}
                className="w-10 h-10 rounded-xl font-bold text-xl"
              >+</button>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between ml-4 mb-2">
              <div style={{ color: SUB }} className="text-xs font-medium">{t.schedule}</div>
              <div style={{ color: BRAND }} className="text-xs font-semibold">
                {activeCount}{" \u00d7 "}{pills} = {activeCount * pills} {t.pcs}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {slots.map((s, i) => {
                const on = s.active;
                const label = lang === "ru" ? s.labelRu : s.labelEn;
                return (
                  <div
                    key={s.key}
                    style={{
                      background: on ? BRAND_SOFT : CARD,
                      borderColor: on ? BRAND : LINE,
                    }}
                    className="rounded-2xl p-3 border"
                  >
                    <button
                      onClick={() => toggleSlot(i)}
                      type="button"
                      className="w-full flex items-center gap-2 mb-2"
                    >
                      <div
                        style={{
                          background: on ? BRAND : "#fff",
                          borderColor: on ? BRAND : LINE,
                          color: "#fff",
                        }}
                        className="w-6 h-6 rounded-md border flex items-center justify-center shrink-0"
                      >
                        {on && <Check size={16} />}
                      </div>
                      <span style={{ color: TEXT }} className="font-semibold">{label}</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <Clock size={14} color={on ? BRAND : SUB} />
                      <input
                        type="time"
                        value={s.time}
                        disabled={!on}
                        onChange={(e) => setSlotTime(i, e.target.value)}
                        style={{
                          background: "#fff",
                          color: on ? TEXT : SUB,
                          borderColor: LINE,
                          fontSize: 16,
                          fontWeight: 600,
                        }}
                        className="flex-1 rounded-lg px-2 py-1 border outline-none"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {activeCount > 0 && (
              <div
                style={{ background: CARD, color: TEXT }}
                className="rounded-2xl border px-4 py-3 mt-3"
              >
                <div style={{ color: SUB }} className="text-[11px] font-medium uppercase tracking-wide mb-1">
                  {t.schedule}
                </div>
                <div className="text-sm font-semibold">
                  {getMedicationTimesText({ schedule: activeSchedule })}
                </div>
              </div>
            )}
          </div>

          {error && (
            <div
              style={{ background: "#fee2e2", color: RED }}
              className="rounded-2xl px-4 py-2 mt-4 text-sm flex items-center gap-2"
            >
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 mt-6">
            <GhostButton onClick={() => setScreen("elder")}>{t.cancel}</GhostButton>
            <PrimaryButton onClick={handleSave} icon={<Check size={20} />}>{t.save}</PrimaryButton>
          </div>
        </div>
      </>
    );
  };

  const ScanRx = () => {
    const detected = [
      { name: lang === "ru" ? "\u0413\u043b\u0438\u043a\u043e\u043d\u0438\u043b 500\u043c\u0433" : "Gliconil 500mg",         total: 2, time: "08:00" },
      { name: lang === "ru" ? "\u0410\u0442\u043e\u0440\u0432\u0430\u0441\u0442\u0430\u0442\u0438\u043d 10\u043c\u0433" : "Atorvastatin 10mg",   total: 1, time: "20:00" },
      { name: lang === "ru" ? "\u0422\u0440\u043e\u043c\u0431\u043e\u043f\u043e\u043b 75\u043c\u0433" : "Trombopol 75mg",         total: 1, time: "14:00" },
    ];
    const addAll = () => {
      detected.forEach((d) => addMedication(d));
      showToast(`${detected.length} \u00b7 ${t.added}`);
      setScreen("elder");
    };
    return (
      <>
        <TopBar title={t.scanRx} onBack={() => setScreen("elder")} />
        <div className="px-5">
          <div
            style={{
              background: "linear-gradient(135deg,#1f2937 0%,#0f172a 100%)",
              borderRadius: 24, height: 260, position: "relative",
            }}
            className="overflow-hidden mb-4"
          >
            <div
              style={{
                position: "absolute", inset: "18% 12%",
                background: "#fef3c7", transform: "rotate(-2deg)", borderRadius: 6,
                boxShadow: "0 10px 30px rgba(0,0,0,.4)", padding: 12,
                fontFamily: "monospace", fontSize: 9, color: "#713f12", lineHeight: 1.3,
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 10 }}>{"Rx / \u0420\u0435\u0446\u0435\u043f\u0442"}</div>
              <div style={{ borderTop: "1px solid #713f12", margin: "4px 0" }} />
              {detected.map((d, i) => (
                <div key={i}>{i + 1}. {d.name}{" \u00b7 "}{d.total}{"\u00d7/"}{lang === "ru" ? "\u0434\u0435\u043d\u044c" : "day"}</div>
              ))}
            </div>
            <div style={{ position: "absolute", inset: 20, border: `2px solid ${BRAND}`, borderRadius: 18 }} />
            <div style={{ position: "absolute", left: 20, right: 20, top: "50%", height: 2, background: BRAND, boxShadow: `0 0 12px ${BRAND}` }} />
            <div
              style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,.5)", color: "#fff" }}
              className="px-3 py-1 rounded-full text-xs flex items-center gap-1"
            >
              <span style={{ width: 8, height: 8, background: BRAND, borderRadius: 999, display: "inline-block" }} />
              {t.scanning}
            </div>
          </div>

          <div style={{ color: SUB }} className="text-xs font-semibold uppercase tracking-wider mb-2 ml-1">
            {t.detected}{" \u00b7 OCR"}
          </div>

          <div className="space-y-2 mb-4">
            {detected.map((d, i) => (
              <div key={i} style={{ background: CARD }} className="rounded-2xl p-3 flex items-center gap-3 border">
                <div style={{ background: BRAND_SOFT, color: BRAND }} className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <Check size={20} />
                </div>
                <div className="flex-1">
                  <div style={{ color: TEXT }} className="font-semibold">{d.name}</div>
                  <div style={{ color: SUB }} className="text-xs">
                    {d.total}{"\u00d7/"}{lang === "ru" ? "\u0434\u0435\u043d\u044c" : "day"}{" \u00b7 "}{t.at} {d.time}
                  </div>
                </div>
                <div style={{ background: BRAND, color: "#fff" }} className="w-7 h-7 rounded-lg flex items-center justify-center">
                  <Check size={16} />
                </div>
              </div>
            ))}
          </div>

          <PrimaryButton onClick={addAll} icon={<Plus size={20} />}>{t.addAll}</PrimaryButton>
          <div className="h-6" />
        </div>
      </>
    );
  };

  const SettingsElder = () => (
    <>
      <TopBar title={t.settings} onBack={() => setScreen("elder")} />
      <div className="px-5 pb-8">
        <div style={{ background: CARD }} className="rounded-3xl p-4 border flex items-center gap-3 mb-4">
          <Avatar size={56} />
          <div className="flex-1 min-w-0">
            <div style={{ color: TEXT }} className="font-semibold text-lg truncate">
              {profileName || "\u2014"}
            </div>
            <div style={{ color: SUB }} className="text-sm truncate">{userEmail || "\u2014"}</div>
          </div>
        </div>

        <div style={{ background: CARD }} className="rounded-3xl p-5 border mb-4 flex flex-col items-center">
          <div style={{ color: TEXT }} className="font-bold text-base">{t.pairingTitle}</div>
          <div style={{ color: SUB }} className="text-xs text-center mt-1 mb-3">{t.pairingQRDesc}</div>
          <FakeQR size={170} />
          <div
            style={{ background: BRAND_SOFT, color: BRAND }}
            className="px-3 py-1 rounded-full mt-3 text-xs font-semibold flex items-center gap-1"
          >
            <QrCode size={14} /> MED-{(user.firstName?.[0] || "X").toUpperCase()}{(user.lastName?.[0] || "X").toUpperCase()}-2026-XK7Q
          </div>
          <div style={{ color: SUB }} className="text-xs mt-2">
            {paired ? `${t.pairedWith} Elena` : t.notPaired}
          </div>
        </div>

        <SettingsRow
          icon={<Globe size={18} />} label={t.language}
          value={lang === "ru" ? "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" : "English"}
          onClick={() => setLang(lang === "ru" ? "en" : "ru")}
        />

        <div style={{ background: CARD }} className="rounded-2xl px-4 py-3 border mb-2">
          <div className="flex items-center gap-3">
            <div style={{ background: BRAND_SOFT, color: BRAND }} className="w-9 h-9 rounded-xl flex items-center justify-center">
              <Type size={18} />
            </div>
            <span style={{ color: TEXT }} className="font-medium">{t.fontSize}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            {["small", "medium", "large"].map((s) => (
              <button
                key={s}
                onClick={() => setFontSize(s)}
                style={{
                  background: fontSize === s ? BRAND : CARD,
                  color: fontSize === s ? "#fff" : TEXT,
                  borderColor: fontSize === s ? BRAND : LINE,
                }}
                className="rounded-xl py-2 border font-semibold"
              >
                A<span className="text-xs ml-1 opacity-80">
                  {s === "small" ? t.small : s === "medium" ? t.medium : t.large}
                </span>
              </button>
            ))}
          </div>
        </div>

        <SettingsRow icon={<Bell size={18} />} label={t.notifications} value="On" />
        <SettingsRow icon={<Volume2 size={18} />} label={t.voice} value="On" />
        <SettingsRow icon={<HelpCircle size={18} />} label={t.help} />
        <SettingsRow icon={<LogOut size={18} />} label={t.logout} danger onClick={resetDemo} />
      </div>
    </>
  );

  const CaregiverHome = () => {
    const takenPct = allTotal > 0 ? Math.round((takenTotal / allTotal) * 100) : 0;
    const nextMed = meds.find((m) => m.taken < m.total);
    return (
      <>
        <div className="px-5 pt-12 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div style={{ color: SUB }} className="text-sm font-medium">{t.sunday}</div>
              <div style={{ color: TEXT }} className="text-2xl font-bold mt-1">{t.caregiverHome}</div>
            </div>
            <div className="flex items-center gap-2">
              {paired && (
                <div
                  style={{ background: effectiveStreak > 0 ? "#fff7ed" : CARD, borderColor: effectiveStreak > 0 ? "#ff7d29" : LINE }}
                  className="h-11 px-2.5 rounded-full flex items-center gap-1 border relative"
                >
                  <span style={{ fontSize: 20, lineHeight: 1 }}>{"\ud83d\udd25"}</span>
                  <span style={{ color: effectiveStreak > 0 ? "#ff7d29" : SUB, fontWeight: 800, fontSize: 15 }}>
                    {effectiveStreak}
                  </span>
                  {availableCouponCount > 0 && (
                    <span
                      style={{ position: "absolute", top: -4, right: -4, background: "#ef4444", color: "#fff", minWidth: 18, height: 18, borderRadius: 999, fontSize: 10, fontWeight: 700 }}
                      className="flex items-center justify-center px-1"
                    >
                      {availableCouponCount}
                    </span>
                  )}
                </div>
              )}
              <button
                onClick={() => setScreen("settingsCare")}
                style={{ background: CARD }}
                className="w-11 h-11 rounded-full flex items-center justify-center border"
              >
                <SettingsIcon size={20} color={TEXT} />
              </button>
              <Avatar size={44} />
            </div>
          </div>

          {paired ? (
            <>
              <div style={{ background: CARD }} className="rounded-3xl p-4 border flex items-center gap-3 mb-4">
                <div className="relative">
                  <div style={{ background: BRAND }} className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl">{"\u0415"}</div>
                  <div style={{ background: GREEN, border: "2px solid #fff" }} className="absolute bottom-0 right-0 w-4 h-4 rounded-full" />
                </div>
                <div className="flex-1">
                  <div style={{ color: TEXT }} className="font-semibold text-lg">{t.elderDemo}</div>
                  <div style={{ color: GREEN }} className="text-xs font-medium flex items-center gap-1">
                    <span style={{ width: 6, height: 6, background: GREEN, borderRadius: 999, display: "inline-block" }} />
                    {t.connected}
                  </div>
                </div>
                <button style={{ background: GREEN }} className="w-11 h-11 rounded-full flex items-center justify-center shadow-md">
                  <Phone size={20} color="#fff" />
                </button>
              </div>

              <div style={{ background: CARD }} className="rounded-3xl p-5 border flex items-center gap-4 mb-4">
                <CircleProgress value={takenTotal} total={allTotal || 1} color={BRAND} size={90} stroke={10}>
                  <span style={{ color: TEXT, fontSize: 22, fontWeight: 800 }}>{takenPct}%</span>
                </CircleProgress>
                <div className="flex-1">
                  <div style={{ color: SUB }} className="text-xs font-semibold uppercase tracking-wide">{t.adherence}</div>
                  <div style={{ color: TEXT }} className="text-lg font-bold">{takenTotal}/{allTotal} {t.taken.toLowerCase()}</div>
                  <div style={{ color: SUB }} className="text-xs mt-1">
                    {t.upcoming}: {nextMed ? (
                      <span style={{ color: BRAND, fontWeight: 600 }}>{nextMed.time}{" \u00b7 "}{nextMed.name}</span>
                    ) : "\u2014"}
                  </div>
                </div>
              </div>

              <div style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #fef3c7 100%)" }} className="rounded-3xl p-4 border mb-4 flex items-center gap-3">
                <div style={{ background: "rgba(255,255,255,.7)", borderRadius: 16 }} className="p-1">
                  <Plant adherence={adherence} size={80} />
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ color: "#166534" }} className="text-xs font-semibold uppercase tracking-wide">{t.elderPlant}</div>
                  <div style={{ color: "#14532d" }} className="font-bold text-base leading-tight mt-1">
                    {adherence >= 1 ? t.plantFlowered : adherence >= 0.5 ? t.plantGrowing : t.plantWilting}
                  </div>
                </div>
                {availableCouponCount > 0 && (
                  <div style={{ background: "#ff7d29", color: "#fff" }} className="px-2 py-1 rounded-full text-xs font-bold">
                    {availableCouponCount} {t.coupons.toLowerCase()}
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              onClick={() => setScreen("pairScan")}
              style={{ background: CARD }}
              className="w-full rounded-3xl p-5 border flex items-center gap-3 mb-4 text-left"
            >
              <div style={{ background: BRAND_SOFT, color: BRAND }} className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                <QrCode size={28} />
              </div>
              <div className="flex-1 min-w-0">
                <div style={{ color: TEXT }} className="font-bold text-base">{t.notPaired}</div>
                <div style={{ color: SUB }} className="text-xs mt-0.5">{t.scanQRDesc}</div>
              </div>
              <ChevronRight size={22} color={SUB} />
            </button>
          )}
        </div>

        {paired && (
          <div className="px-5">
            <div style={{ color: TEXT }} className="font-bold text-lg mb-3">{t.timeline}</div>

            <div className="space-y-2">
              {meds.map((m) => {
                const status =
                  m.taken >= m.total ? "taken" :
                  m.taken > 0 ? "pending" : "pending";
                const color =
                  status === "taken" ? GREEN :
                  status === "missed" ? RED : BRAND;
                const label =
                  status === "taken" ? t.taken :
                  status === "missed" ? t.missed : t.pending;
                return (
                  <div key={m.id} style={{ background: CARD }} className="rounded-2xl p-3 flex items-center gap-3 border">
                    <div style={{ color: TEXT }} className="w-16 text-sm font-bold">{m.time}</div>
                    <div className="flex-1 min-w-0">
                      <div style={{ color: TEXT }} className="font-semibold truncate">{m.name}</div>
                      <div style={{ color: SUB }} className="text-xs truncate">
                        {getMedicationTimesText(m)}{" \u00b7 "}{m.taken}/{m.total}
                      </div>
                    </div>
                    <div
                      style={{ background: color + "22", color }}
                      className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                    >
                      {status === "taken" && <Check size={12} />}
                      {status === "pending" && <Clock size={12} />}
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 mb-4">
              <button
                onClick={() => setScreen("addMed")}
                style={{ background: CARD }}
                className="rounded-2xl border py-3 flex flex-col items-center gap-1"
              >
                <div style={{ background: BRAND_SOFT, color: BRAND }} className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <Plus size={20} />
                </div>
                <span style={{ color: TEXT }} className="text-xs font-semibold">{t.meds}</span>
              </button>
              <button
                onClick={() => setScreen("scan")}
                style={{ background: CARD }}
                className="rounded-2xl border py-3 flex flex-col items-center gap-1"
              >
                <div style={{ background: BRAND_SOFT, color: BRAND }} className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <Scan size={20} />
                </div>
                <span style={{ color: TEXT }} className="text-xs font-semibold">{t.scanRx.split(" ")[0]}</span>
              </button>
              <button style={{ background: CARD }} className="rounded-2xl border py-3 flex flex-col items-center gap-1">
                <div style={{ background: "#fee2e2", color: RED }} className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <AlertCircle size={20} />
                </div>
                <span style={{ color: TEXT }} className="text-xs font-semibold">{t.alerts}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              <button style={{ background: GREEN, color: "#fff" }} className="rounded-2xl py-3 font-semibold flex items-center justify-center gap-2 shadow">
                <Phone size={18} /> {t.call}
              </button>
              <button style={{ background: BRAND, color: "#fff" }} className="rounded-2xl py-3 font-semibold flex items-center justify-center gap-2 shadow">
                <MessageSquare size={18} /> {t.message}
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  const SettingsCare = () => (
    <>
      <TopBar title={t.settings} onBack={() => setScreen("caregiver")} />
      <div className="px-5 pb-8">
        <div style={{ background: CARD }} className="rounded-3xl p-4 border flex items-center gap-3 mb-4">
          <Avatar size={56} />
          <div className="flex-1 min-w-0">
            <div style={{ color: TEXT }} className="font-semibold text-lg truncate">
              {profileName || (lang === "ru" ? "\u0421\u0430\u0443\u043b\u0435 \u0410\u0445\u043c\u0435\u0442\u043e\u0432\u0430" : "Saule Akhmetova")}
            </div>
            <div style={{ color: SUB }} className="text-sm truncate">{userEmail || "saule@mail.com"}</div>
          </div>
        </div>

        <div style={{ color: SUB }} className="text-xs font-semibold uppercase tracking-wider mb-2 ml-1">{t.connected}</div>
        {paired ? (
          <div style={{ background: CARD }} className="rounded-3xl p-4 border flex items-center gap-3 mb-4">
            <div style={{ background: BRAND }} className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">{"\u0415"}</div>
            <div className="flex-1">
              <div style={{ color: TEXT }} className="font-semibold">{t.elderDemo}</div>
              <div style={{ color: GREEN }} className="text-xs">
                {"\u25cf "}{t.connected}
              </div>
            </div>
            <button
              onClick={() => setPaired(false)}
              style={{ background: "#fee2e2", color: RED }}
              className="w-9 h-9 rounded-xl flex items-center justify-center"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ) : (
          <div style={{ background: CARD }} className="rounded-3xl p-4 border flex items-center gap-3 mb-4">
            <div style={{ background: "#f3f4f6", color: SUB }} className="w-12 h-12 rounded-full flex items-center justify-center">
              <User size={20} />
            </div>
            <div className="flex-1">
              <div style={{ color: SUB }} className="font-semibold">{t.notPaired}</div>
              <div style={{ color: SUB }} className="text-xs">{"\u25cb "}{t.scanQRDesc}</div>
            </div>
          </div>
        )}

        <button
          onClick={() => setScreen("pairScan")}
          style={{ background: BRAND, color: "#fff" }}
          className="w-full rounded-3xl p-4 mb-4 flex items-center gap-3 shadow-md"
        >
          <div style={{ background: "rgba(255,255,255,.25)" }} className="w-12 h-12 rounded-2xl flex items-center justify-center">
            <QrCode size={24} />
          </div>
          <div className="flex-1 text-left">
            <div className="font-semibold">{t.scanQR}</div>
            <div className="text-xs opacity-90">{t.scanQRDesc}</div>
          </div>
          <ChevronRight size={22} />
        </button>

        <SettingsRow
          icon={<Globe size={18} />} label={t.language}
          value={lang === "ru" ? "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" : "English"}
          onClick={() => setLang(lang === "ru" ? "en" : "ru")}
        />
        <SettingsRow icon={<Bell size={18} />} label={t.notifications} value="On" />
        <SettingsRow icon={<HelpCircle size={18} />} label={t.help} />
        <SettingsRow icon={<LogOut size={18} />} label={t.logout} danger onClick={resetDemo} />
      </div>
    </>
  );

  const PairScan = () => (
    <>
      <TopBar title={t.scanQR} onBack={() => setScreen("settingsCare")} />
      <div className="px-5">
        <div
          style={{
            background: "linear-gradient(135deg,#0f172a 0%,#1f2937 100%)",
            borderRadius: 28, height: 420, position: "relative",
          }}
          className="overflow-hidden mb-4 flex items-center justify-center"
        >
          <div style={{ transform: "scale(.9)", filter: "drop-shadow(0 10px 25px rgba(0,0,0,.4))" }}>
            <FakeQR size={200} />
          </div>
          <div style={{ position: "absolute", width: 240, height: 240, border: `3px solid ${BRAND}`, borderRadius: 24 }} />
          <div
            style={{
              position: "absolute", top: "50%", left: "calc(50% - 120px)",
              right: "calc(50% - 120px)", height: 2, background: BRAND,
              boxShadow: `0 0 12px ${BRAND}`,
            }}
          />
          <div
            style={{ position: "absolute", bottom: 20, left: 20, right: 20, background: "rgba(0,0,0,.5)", color: "#fff" }}
            className="rounded-2xl px-4 py-2 text-center text-sm"
          >
            {t.align}
          </div>
        </div>

        <PrimaryButton
          onClick={() => { setPaired(true); showToast(t.successPaired); setScreen("caregiver"); }}
          icon={<Check size={20} />}
        >
          {t.connect}
        </PrimaryButton>
        <div className="h-6" />
      </div>
    </>
  );

  const Rewards = () => {
    const coupons = [
      { id: "c7", title: t.discount10, desc: t.discount10Desc, days: 7, code: "MED7-10OFF", color: "#ff7d29", unlocked: coupon7Unlocked },
      { id: "c14", title: t.discount25, desc: t.discount25Desc, days: 14, code: "MED14-25OFF", color: "#8b5cf6", unlocked: coupon14Unlocked },
    ];
    return (
      <>
        <TopBar title={t.myRewards} onBack={() => setScreen("elder")} />
        <div className="px-5 pb-8">
          <div style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #fef3c7 100%)" }} className="rounded-3xl p-5 border mb-4 flex items-center gap-4">
            <div style={{ background: "rgba(255,255,255,.7)", borderRadius: 20 }} className="p-1">
              <Plant adherence={adherence} size={110} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <div style={{ background: "#ff7d29", color: "#fff" }} className="px-2.5 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <span style={{ fontSize: 16 }}>{"\ud83d\udd25"}</span>
                  {effectiveStreak}
                </div>
                <div style={{ color: "#14532d" }} className="text-xs font-bold">
                  {t.streakDays}
                </div>
              </div>
              <div style={{ color: "#14532d" }} className="font-bold text-base">
                {t.greatJob}
              </div>
              <div style={{ color: "#166534" }} className="text-xs mt-1">
                {daysToNextCoupon > 0
                  ? daysToNextCoupon + " " + t.toCoupon
                  : t.couponAvailable}
              </div>
            </div>
          </div>

          <div style={{ color: SUB }} className="text-xs font-semibold uppercase tracking-wider mb-2 ml-1">
            {t.coupons}
          </div>

          <div className="space-y-3">
            {coupons.map((c) => (
              <div
                key={c.id}
                style={{
                  background: c.unlocked ? "#fff" : "#f3f4f6",
                  opacity: c.unlocked ? 1 : 0.7,
                  borderLeft: `4px solid ${c.unlocked ? c.color : "#d1d5db"}`,
                }}
                className="rounded-2xl p-4 border flex items-center gap-3"
              >
                <div
                  style={{
                    background: c.unlocked ? c.color + "22" : "#e5e7eb",
                    color: c.unlocked ? c.color : "#9ca3af",
                  }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl font-black"
                >
                  {c.days === 7 ? "10%" : "25%"}
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ color: c.unlocked ? TEXT : SUB }} className="font-bold text-base truncate">
                    {c.title}
                  </div>
                  <div style={{ color: SUB }} className="text-xs truncate">{c.desc}</div>
                  <div style={{ color: c.unlocked ? c.color : SUB }} className="text-xs font-semibold mt-1">
                    {c.unlocked ? (
                      <span>{"\u2713 "}{t.unlocked}</span>
                    ) : (
                      <span>{t.unlockAt} {c.days} {t.streakDays}</span>
                    )}
                  </div>
                </div>
                {c.unlocked && (
                  <button
                    onClick={() => {
                      setRedeemedCoupons((prev) => prev.includes(c.id) ? prev : [...prev, c.id]);
                      showToast(t.showCode + ": " + c.code);
                    }}
                    style={{ background: c.color, color: "#fff" }}
                    className="px-3 py-2 rounded-xl text-xs font-bold shadow"
                  >
                    {t.redeem}
                  </button>
                )}
              </div>
            ))}
          </div>

          {!coupon7Unlocked && !coupon14Unlocked && (
            <div style={{ background: CARD, color: SUB }} className="rounded-2xl p-4 text-center border text-sm mt-3">
              {t.noRewards}
            </div>
          )}

          <div style={{ color: SUB }} className="text-xs mt-4 leading-relaxed px-1">
            {t.validIn}
          </div>
        </div>
      </>
    );
  };

    const current = {
    register:      Register(),
    role:          Role(),
    elderType:     ElderType(),
    elder:         ElderHome(),
    addMed:        AddMed(),
    scan:          ScanRx(),
    settingsElder: SettingsElder(),
    caregiver:     CaregiverHome(),
    settingsCare:  SettingsCare(),
    pairScan:      PairScan(),
    rewards:       Rewards(),
  }[screen];

  return (
    <div
      style={{
        background: "#e9e9ec",
        minHeight: "100vh",
        fontSize: fontPx,
        color: TEXT,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}
      className="flex"
    >
      <aside
        style={{ background: "#fff", borderRight: `1px solid ${LINE}` }}
        className="w-72 shrink-0 p-5 h-screen overflow-y-auto"
      >
        <div className="flex items-center gap-2 mb-1">
          <div style={{ background: BRAND }} className="w-9 h-9 rounded-xl flex items-center justify-center">
            <Pill color="#fff" size={18} />
          </div>
          <div>
            <div className="font-bold text-lg">MedRemind</div>
            <div style={{ color: SUB }} className="text-xs">{t.designReview}</div>
          </div>
        </div>

        <div style={{ color: SUB }} className="text-xs uppercase tracking-wider font-semibold mt-6 mb-2">
          {t.allScreens}
        </div>
        <div className="space-y-1">
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => setScreen(s.id)}
              style={{
                background: screen === s.id ? BRAND : "transparent",
                color: screen === s.id ? "#fff" : TEXT,
              }}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium"
            >
              {s.label}
            </button>
          ))}
        </div>

        <div style={{ color: SUB }} className="text-xs uppercase tracking-wider font-semibold mt-6 mb-2">
          {t.language}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["ru", "en"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                background: lang === l ? BRAND : CARD,
                color: lang === l ? "#fff" : TEXT,
                borderColor: lang === l ? BRAND : LINE,
              }}
              className="rounded-xl py-2 border font-semibold text-sm"
            >
              {l === "ru" ? "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" : "English"}
            </button>
          ))}
        </div>

        <div style={{ color: SUB }} className="text-xs uppercase tracking-wider font-semibold mt-6 mb-2">
          {t.fontSize}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["small", "medium", "large"].map((s) => (
            <button
              key={s}
              onClick={() => setFontSize(s)}
              style={{
                background: fontSize === s ? BRAND : CARD,
                color: fontSize === s ? "#fff" : TEXT,
                borderColor: fontSize === s ? BRAND : LINE,
              }}
              className="rounded-xl py-2 border font-semibold text-sm"
            >
              {s === "small" ? t.small : s === "medium" ? t.medium : t.large}
            </button>
          ))}
        </div>

        <button
          onClick={resetDemo}
          style={{ background: CARD, color: TEXT, borderColor: LINE }}
          className="w-full mt-6 rounded-xl py-2 border font-semibold text-sm flex items-center justify-center gap-2"
        >
          <RotateCcw size={14} /> {t.reset}
        </button>

        <div style={{ color: SUB }} className="text-xs mt-6 leading-relaxed">
          {lang === "ru"
            ? "\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e: \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0430\u0432\u0430\u0442\u0430\u0440, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430, \u043e\u0442\u043c\u0435\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u0451\u043c\u044b \u0442\u0430\u043f\u043e\u043c \u043f\u043e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0435."
            : "Fully interactive: fill in registration, upload an avatar, add medications, tap a pill card to log a dose."}
        </div>
      </aside>

      <main className="flex-1 flex items-center justify-center p-8 relative">
        <PhoneFrame>{current}</PhoneFrame>
        <Toast text={toast} show={!!toast} />
      </main>
    </div>
  );
}
