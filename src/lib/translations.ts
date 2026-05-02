export type LangCode = "en" | "ko" | "es" | "ja";

export interface LangOption {
  code: LangCode;
  flag: string;
  label: string;
  nativeLabel: string;
}

export const LANGUAGES: LangOption[] = [
  { code: "en", flag: "🇺🇸", label: "English",    nativeLabel: "English" },
  { code: "ko", flag: "🇰🇷", label: "Korean",     nativeLabel: "한국어" },
  { code: "es", flag: "🇪🇸", label: "Spanish",    nativeLabel: "Español" },
  { code: "ja", flag: "🇯🇵", label: "Japanese",   nativeLabel: "日本語" },
];

interface Translation {
  // Landing
  logoSub: string;
  landingLine1: string;
  landingLine2: string;
  landingLine3: string;
  bodyLine1: string;
  bodyLine2: string;
  bodyLine3: string;
  startBtn: string;
  // Onboard
  back: string;
  step01: string;
  questionLine1: string;
  questionLine2: string;
  placeholder: string;
  designBtn: string;
  errorMsg: string;
  // Prompts
  prompts: string[];
  // Loading
  loadingTitle: string;
  loadingSub: string;
  // Experiment
  yourExperiment: string;
  hypothesisLabel: string;
  weeklyThemes: string;
  startDay1: string;
  continueDay: string;
  confirmRestart: string;
  restartSession: string;
  reenter: string;
  // Daily
  planBack: string;
  progress: string;
  days: string;
  reflectionLabel: string;
  reflectionPlaceholder: string;
  reflectionHint: string;
  setReminderTitle: string;
  setReminderDesc: string;
  addToCalendarBtn: string;
  completeBtn: string;
  // Done
  dayComplete: string;
  wellDone: string;
  doneLine1: string;
  doneLine2: string;
  viewDay: string;
  // Report
  experimentDone: string;
  daysCompleted: string;
  youDidIt1: string;
  youDidIt2: string;
  daysFinished: string;
  dayExperiment: string;
  newExperiment: string;
  freePlansLabel: string;
  // Monetization & AI Analysis
  premiumModalTitle: string;
  premiumModalSub: string;
  premiumModalDesc: string;
  premiumModalProceed: string;
  aiCredits: string;
  getFinalAnalysisBtn: string;
  analyzingText: string;
  finalAnalysisTitle: string;
  noReflectionsMsg: string;
  customSituationsLabel: string;
  authModalTitle: string;
  authModalSub: string;
  confirmCreditModalTitle: string;
  confirmCreditModalText: string;
  confirmCreditModalBtn: string;
  cancel: string;
  catBurnout: string;
  catAnxiety: string;
  catCareer: string;
  catRelationship: string;
  catSomethingElse: string;
  catSomethingElseDesc: string;
  resetDataTitle: string;
  resetDataDesc: string;
  resetDataWarning: string;
  yesReset: string;
  calendarSuccess: string;
  calendarDenied: string;
  calendarError: string;
  restartSessionDesc: string;
  adCountdown: string;
}

const T: Record<LangCode, Translation> = {
  ko: {
    logoSub: "30일 행동 실험",
    landingLine1: "당신은 이미",
    landingLine2: "답을 알고 있다.",
    landingLine3: "문제는 실행이다.",
    bodyLine1: "막힌 이유를 분석하지 않는다.",
    bodyLine2: "30일 동안, 하루 5분, 딱 하나만 한다.",
    bodyLine3: "그게 전부다.",
    startBtn: "실험 시작하기 →",
    back: "← 뒤로",
    step01: "Step 01",
    questionLine1: "지금 가장 막혀있는 게",
    questionLine2: "뭔가요?",
    placeholder: "나는 왜 항상...",
    designBtn: "30일 실험 설계하기 →",
    errorMsg: "실험 설계 중 오류가 발생했습니다. 다시 시도해주세요.",
    prompts: [
      "나는 왜 항상 작심삼일일까",
      "왜 그 사람에게 질질 끌릴까",
      "왜 돈을 모으지 못할까",
      "왜 하고 싶은 말을 못할까",
      "왜 자꾸 미루기만 할까",
      "왜 생각이 멈추지 않을까",
    ],
    loadingTitle: "실험을 설계하는 중...",
    loadingSub: "당신만을 위한 30일을 만들고 있습니다",
    yourExperiment: "당신의 30일 실험",
    hypothesisLabel: "가설 — ",
    weeklyThemes: "주차별 테마",
    startDay1: "Day 1 시작 →",
    continueDay: "Day {day} 이어하기 →",
    confirmRestart: "Day 1부터 다시 시작하시겠습니까? 기록이 초기화됩니다.",
    restartSession: "초기화 후 다시 시작",
    reenter: "다시 입력",
    planBack: "← PLAN",
    progress: "진행률",
    days: "일",
    reflectionLabel: "오늘 어땠나요? (선택)",
    reflectionPlaceholder: "한 줄만...",
    reflectionHint: "💡 3일 이상 메모를 남기면, 30일 후 AI가 당신의 변화를 심층 분석해 드립니다.",
    setReminderTitle: "🔔 30일 루틴 알림 설정",
    setReminderDesc: "매일 원하는 시간에 알람을 받고 미션을 수행하세요. (스마트폰 캘린더에 30일 일정이 추가됩니다)",
    addToCalendarBtn: "캘린더에 추가",
    completeBtn: "오늘 완료 ✓",
    dayComplete: "완료",
    wellDone: "잘 했습니다.",
    doneLine1: "작은 것 하나를 해냈습니다.",
    doneLine2: "내일 또 하나면 됩니다.",
    viewDay: "다음 →",
    experimentDone: "30일 실험 완료",
    daysCompleted: "Days Completed",
    youDidIt1: "당신은",
    youDidIt2: "해냈습니다.",
    daysFinished: "일 완료",
    dayExperiment: "30일 실험",
    newExperiment: "새 실험 시작하기 →",
    freePlansLabel: "무료 30일 미니 플랜 (즉시 시작)",
    premiumModalTitle: "나만의 맞춤 AI 플랜",
    premiumModalSub: "AI 플랜 3회권 ($3.99 결제)",
    premiumModalDesc: "내 상황에 딱 맞는 30일 행동 실험 3개를 만듭니다. 결제 페이지로 이동할까요?",
    premiumModalProceed: "결제하기",
    aiCredits: "플랜 생성권",
    getFinalAnalysisBtn: "AI 최종 분석 받기",
    analyzingText: "30일간의 기록을 분석 중입니다...",
    finalAnalysisTitle: "당신의 30일 분석 결과",
    noReflectionsMsg: "작성하신 회고록이 부족하여 심층 분석을 제공하기 어렵습니다. 다음번에는 기록을 남겨보세요!",
    customSituationsLabel: "또는 나만의 상황 직접 입력하기 (AI 플랜)",
    authModalTitle: "행동 데이터 보존",
    authModalSub: "로그인하여 플랜 생성 및 상태 저장",
    confirmCreditModalTitle: "생성 확인",
    confirmCreditModalText: "AI 플랜을 생성하시겠습니까? (크레딧 1개가 차감됩니다. 남은 횟수: {credits}회)",
    confirmCreditModalBtn: "생성하기",
    cancel: "취소",
    catBurnout: "번아웃",
    catAnxiety: "불안",
    catCareer: "커리어",
    catRelationship: "인간관계",
    catSomethingElse: "기타 고민",
    catSomethingElseDesc: "동기부여, 의미, 혹은 아직 잘 모르겠음",
    resetDataTitle: "데이터 초기화",
    resetDataDesc: "처음부터 다시 시작할까요?",
    resetDataWarning: "기존의 30일 진행 상황과 일기 기록이 모두 삭제되며 복구할 수 없습니다.",
    yesReset: "네, 지우겠습니다",
    calendarSuccess: "30일 미션이 기기의 캘린더에 저장되었습니다!",
    calendarDenied: "캘린더 접근 권한이 거부되었습니다.",
    calendarError: "캘린더 저장 중 오류가 발생했습니다.",
    restartSessionDesc: "첫 번째 날로 돌아갈까요?",
    adCountdown: "파트너사 메시지 재생 중... {s}초",
  },

  en: {
    logoSub: "30-Day Behavior Experiment",
    landingLine1: "You already",
    landingLine2: "know the answer.",
    landingLine3: "The problem is action.",
    bodyLine1: "Stop analyzing why you're stuck.",
    bodyLine2: "30 days. 5 minutes a day. Just one thing.",
    bodyLine3: "That's all it takes.",
    startBtn: "Start the Experiment →",
    back: "← Back",
    step01: "Step 01",
    questionLine1: "What's the one thing",
    questionLine2: "you keep getting stuck on?",
    placeholder: "I always wonder why I...",
    designBtn: "Design My 30-Day Experiment →",
    errorMsg: "Something went wrong. Please try again.",
    prompts: [
      "Why do I always quit after a few days?",
      "Why am I drawn to this person?",
      "Why can't I seem to save money?",
      "Why can't I speak up for myself?",
      "Why do I keep putting things off?",
      "Why can't I quiet my mind?",
    ],
    loadingTitle: "Designing your experiment...",
    loadingSub: "Building a 30-day plan made just for you",
    yourExperiment: "Your 30-Day Experiment",
    hypothesisLabel: "Hypothesis — ",
    weeklyThemes: "Weekly Themes",
    startDay1: "Begin Day 1 →",
    continueDay: "Continue Day {day} →",
    confirmRestart: "Restart from Day 1? All progress will be lost.",
    restartSession: "Restart Session",
    reenter: "Start Over",
    planBack: "← Plan",
    progress: "Progress",
    days: "Days",
    reflectionLabel: "How did today feel? (optional)",
    reflectionPlaceholder: "One line is enough...",
    reflectionHint: "💡 Leave notes for at least 3 days to receive a deep AI analysis on Day 30.",
    setReminderTitle: "🔔 30-Day Routine Reminder",
    setReminderDesc: "Get a daily notification at your preferred time to complete your mission. (Adds a 30-day event to your calendar)",
    addToCalendarBtn: "Add to Calendar",
    completeBtn: "Mark Today Complete ✓",
    dayComplete: "Complete",
    wellDone: "Well done.",
    doneLine1: "You did one small thing.",
    doneLine2: "One more tomorrow.",
    viewDay: "Next →",
    experimentDone: "30-Day Experiment Complete",
    daysCompleted: "Days Completed",
    youDidIt1: "You",
    youDidIt2: "did it.",
    daysFinished: "days finished",
    dayExperiment: "30-day experiment",
    newExperiment: "Start a New Experiment →",
    freePlansLabel: "Free 30-Day Mini Plans (Instant)",
    premiumModalTitle: "Custom AI Plan",
    premiumModalSub: "3 Custom AI Plans ($3.99)",
    premiumModalDesc: "Generate 3 personalized 30-day micro-behavior experiments. Proceed to checkout?",
    premiumModalProceed: "Checkout",
    aiCredits: "AI Plays",
    getFinalAnalysisBtn: "Get Final AI Analysis",
    analyzingText: "Analyzing your 30 days...",
    finalAnalysisTitle: "Your 30-Day Analysis",
    noReflectionsMsg: "You haven't left enough reflections for a deep analysis. Try leaving more notes next time!",
    customSituationsLabel: "Or describe your unique situation (AI Generated)",
    authModalTitle: "Save & Sync Data",
    authModalSub: "Sign in to generate plans and save progress",
    confirmCreditModalTitle: "Confirm Generation",
    confirmCreditModalText: "Use 1 AI Credit? (1 credit will be deducted. Remaining: {credits})",
    confirmCreditModalBtn: "Proceed",
    cancel: "Cancel",
    catBurnout: "Burnout",
    catAnxiety: "Anxiety",
    catCareer: "Career",
    catRelationship: "Relationships",
    catSomethingElse: "Something else",
    catSomethingElseDesc: "Motivation, meaning, or I'm not sure yet",
    resetDataTitle: "Reset Data",
    resetDataDesc: "Are you sure?",
    resetDataWarning: "Your 30-day progress and journal entries will be permanently deleted.",
    yesReset: "Yes, Start Over",
    calendarSuccess: "30 days of missions have been natively added to your calendar!",
    calendarDenied: "Calendar access was denied.",
    calendarError: "Failed to save to calendar natively.",
    restartSessionDesc: "Restart from Day 1?",
    adCountdown: "Playing Partner Message... {s}s",
  },

  es: {
    logoSub: "Experimento de 30 Días",
    landingLine1: "Ya sabes",
    landingLine2: "la respuesta.",
    landingLine3: "El problema es actuar.",
    bodyLine1: "Deja de analizar por qué estás estancado.",
    bodyLine2: "30 días. 5 minutos al día. Solo una cosa.",
    bodyLine3: "Eso es todo.",
    startBtn: "Comenzar el Experimento →",
    back: "← Volver",
    step01: "Paso 01",
    questionLine1: "¿Con qué es",
    questionLine2: "lo que más te estancas?",
    placeholder: "Siempre me pregunto por qué...",
    designBtn: "Diseñar mi Experimento de 30 Días →",
    errorMsg: "Algo salió mal. Por favor, inténtalo de nuevo.",
    prompts: [
      "¿Por qué siempre me rindo a los pocos días?",
      "¿Por qué no puedo dejar de pensar en esa persona?",
      "¿Por qué no logro ahorrar dinero?",
      "¿Por qué me cuesta decir lo que pienso?",
      "¿Por qué siempre lo dejo para después?",
      "¿Por qué no puedo dejar de darle vueltas a todo?",
    ],
    loadingTitle: "Diseñando tu experimento...",
    loadingSub: "Creando un plan de 30 días hecho solo para ti",
    yourExperiment: "Tu Experimento de 30 Días",
    hypothesisLabel: "Hipótesis — ",
    weeklyThemes: "Temas Semanales",
    startDay1: "Empezar el Día 1 →",
    continueDay: "Continuar Día {day} →",
    confirmRestart: "¿Reiniciar desde el Día 1? Todo el progreso se perderá.",
    restartSession: "Reiniciar Sesión",
    reenter: "Volver a empezar",
    planBack: "← Plan",
    progress: "Progreso",
    days: "Días",
    reflectionLabel: "¿Cómo te fue hoy? (opcional)",
    reflectionPlaceholder: "Con una línea basta...",
    reflectionHint: "💡 Deja notas al menos 3 días para recibir un análisis de IA sobre tu viaje el Día 30.",
    setReminderTitle: "🔔 Recordatorio de Rutina de 30 Días",
    setReminderDesc: "Recibe una notificación diaria a la hora que prefieras. (Agrega un evento de 30 días a tu calendario)",
    addToCalendarBtn: "Agregar al Calendario",
    completeBtn: "Marcar como completado ✓",
    dayComplete: "Completado",
    wellDone: "Bien hecho.",
    doneLine1: "Hiciste una pequeña cosa.",
    doneLine2: "Una más mañana.",
    viewDay: "Siguiente →",
    experimentDone: "Experimento de 30 Días Completado",
    daysCompleted: "Días Completados",
    youDidIt1: "Lo",
    youDidIt2: "lograste.",
    daysFinished: "días completados",
    dayExperiment: "experimento de 30 días",
    newExperiment: "Iniciar un Nuevo Experimento →",
    freePlansLabel: "Mini Planes de 30 Días Gratis (Instantáneo)",
    premiumModalTitle: "Custom AI Plan",
    premiumModalSub: "3 Custom AI Plans ($3.99)",
    premiumModalDesc: "Generate 3 personalized 30-day micro-behavior experiments. Proceed to checkout?",
    premiumModalProceed: "Checkout",
    aiCredits: "AI Plays",
    getFinalAnalysisBtn: "Get Final AI Analysis",
    analyzingText: "Analyzing your 30 days...",
    finalAnalysisTitle: "Your 30-Day Analysis",
    noReflectionsMsg: "You haven't left enough reflections for a deep analysis. Try leaving more notes next time!",
    customSituationsLabel: "O describe tu situación única (Planes IA)",
    authModalTitle: "Guardar y sincronizar datos",
    authModalSub: "Inicia sesión para generar planes y guardar el progreso",
    confirmCreditModalTitle: "Confirmar generación",
    confirmCreditModalText: "¿Usar 1 crédito de IA? (Se deducirá 1 crédito. Restante: {credits})",
    confirmCreditModalBtn: "Continuar",
    cancel: "Cancelar",
    catBurnout: "Agotamiento",
    catAnxiety: "Ansiedad",
    catCareer: "Carrera",
    catRelationship: "Relaciones",
    catSomethingElse: "Otra cosa",
    catSomethingElseDesc: "Motivación, significado, o aún no estoy seguro",
    resetDataTitle: "Restablecer datos",
    resetDataDesc: "¿Estás seguro?",
    resetDataWarning: "Tu progreso de 30 días y tus entradas del diario se eliminarán permanentemente.",
    yesReset: "Sí, empezar de nuevo",
    calendarSuccess: "¡Tus misiones de 30 días se han agregado a tu calendario!",
    calendarDenied: "Se denegó el acceso al calendario.",
    calendarError: "Error al guardar en el calendario.",
    restartSessionDesc: "¿Reiniciar desde el primer día?",
    adCountdown: "Reproduciendo mensaje... {s}s",
  },

  ja: {
    logoSub: "30日間の行動実験",
    landingLine1: "あなたは、もう",
    landingLine2: "答えを知っている。",
    landingLine3: "あとは、動くだけ。",
    bodyLine1: "なぜ動けないかを考えるのをやめよう。",
    bodyLine2: "30日間、1日5分、ただ一つだけ。",
    bodyLine3: "それだけでいい。",
    startBtn: "実験を始める →",
    back: "← 戻る",
    step01: "ステップ 01",
    questionLine1: "今、一番",
    questionLine2: "行き詰まっていることは？",
    placeholder: "なぜいつも...",
    designBtn: "30日間の実験を設計する →",
    errorMsg: "エラーが発生しました。もう一度お試しください。",
    prompts: [
      "なぜいつも三日坊主になってしまうのか",
      "なぜあの人のことが頭から離れないのか",
      "なぜお金が貯まらないのか",
      "なぜ言いたいことを言えないのか",
      "なぜついつい先延ばしにしてしまうのか",
      "なぜ考えすぎてしまうのか",
    ],
    loadingTitle: "実験を設計しています...",
    loadingSub: "あなただけの30日間を作っています",
    yourExperiment: "あなたの30日間実験",
    hypothesisLabel: "仮説 — ",
    weeklyThemes: "週ごとのテーマ",
    startDay1: "Day 1 を始める →",
    continueDay: "Day {day} から再開 →",
    confirmRestart: "Day 1からやり直しますか？すべての記録がリセットされます。",
    restartSession: "やり直す",
    reenter: "入力し直す",
    planBack: "← プラン",
    progress: "進捗",
    days: "日",
    reflectionLabel: "今日はどうでしたか？（任意）",
    reflectionPlaceholder: "一言だけ...",
    reflectionHint: "💡 3日以上メモを残すと、30日目にAIからあなたの旅の深い分析を受け取れます。",
    setReminderTitle: "🔔 30日間のルーティンリマインダー",
    setReminderDesc: "毎日お好みの時間に通知を受け取り、ミッションを完了してください。(カレンダーに30日間の予定が追加されます)",
    addToCalendarBtn: "カレンダーに追加",
    completeBtn: "今日を完了する ✓",
    dayComplete: "完了",
    wellDone: "よくやりました。",
    doneLine1: "小さなことを一つ乗り越えました。",
    doneLine2: "明日もまた一つ。",
    viewDay: "次へ →",
    experimentDone: "30日間実験 完了",
    daysCompleted: "達成した日数",
    youDidIt1: "あなたは",
    youDidIt2: "やり遂げた。",
    daysFinished: "日 完了",
    dayExperiment: "30日間実験",
    newExperiment: "新しい実験を始める →",
        freePlansLabel: "無料30日間ミニプラン（即時開始）",
    premiumModalTitle: "Custom AI Plan",
    premiumModalSub: "3 Custom AI Plans ($3.99)",
    premiumModalDesc: "Generate 3 personalized 30-day micro-behavior experiments. Proceed to checkout?",
    premiumModalProceed: "Checkout",
    aiCredits: "AI Plays",
    getFinalAnalysisBtn: "Get Final AI Analysis",
    analyzingText: "Analyzing your 30 days...",
    finalAnalysisTitle: "Your 30-Day Analysis",
    noReflectionsMsg: "You haven't left enough reflections for a deep analysis. Try leaving more notes next time!",
    customSituationsLabel: "または、独自の状況を説明する (AIプラン)",
    authModalTitle: "データの保存と同期",
    authModalSub: "サインインしてプランを作成し、進行状況を保存します",
    confirmCreditModalTitle: "生成の確認",
    confirmCreditModalText: "AIクレジットを1つ使用しますか？ (1クレジット差し引かれます。残り: {credits})",
    confirmCreditModalBtn: "続行",
    cancel: "キャンセル",
    catBurnout: "燃え尽き症候群",
    catAnxiety: "不安",
    catCareer: "キャリア",
    catRelationship: "人間関係",
    catSomethingElse: "その他",
    catSomethingElseDesc: "モチベーション、意味、またはまだ分からない",
    resetDataTitle: "データのリセット",
    resetDataDesc: "本当によろしいですか？",
    resetDataWarning: "30日間の進捗と日記の記録は完全に削除され、復元できません。",
    yesReset: "はい、最初からやり直す",
    calendarSuccess: "30日間のミッションがカレンダーに追加されました！",
    calendarDenied: "カレンダーへのアクセスが拒否されました。",
    calendarError: "カレンダーの保存中にエラーが発生しました。",
    restartSessionDesc: "最初の日からやり直しますか？",
    adCountdown: "パートナーメッセージを再生中... {s}秒",
  },
};


export function t(lang: LangCode): Translation {
  return T[lang] || T.en;
}
