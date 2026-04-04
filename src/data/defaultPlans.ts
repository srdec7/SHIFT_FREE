export interface Mission {
  week: number;
  theme: string;
  actions: string[];
}

export interface Experiment {
  id: string;
  experimentTitle: string;
  insight: string;
  hypothesis: string;
  missions: Mission[];
}

export const defaultPlans: Record<string, Record<string, Experiment>> = {
  en: {
    "digital-detox": {
      id: "digital-detox",
      experimentTitle: "Muting the Noise: Reclaim Your Attention",
      insight: "You're not losing focus; your attention is being stolen by a thousand tiny digital interruptions. Your brain is craving silence, not more content.",
      hypothesis: "By introducing intentional micro-frictions between you and your screens, you will regain 30% of your daily mental bandwidth and feel surprisingly present.",
      missions: [
        { week: 1, theme: "Boundaries", actions: [
          "Drink a full glass of water before looking at any screen today.",
          "Disable all non-human push notifications (news, social media, shopping).",
          "Leave your phone in another room while eating one meal.",
          "Charge your phone outside of your bedroom tonight.",
          "Set your phone screen to grayscale for the next 2 hours.",
          "Do not look at your phone while using the bathroom today.",
          "During a conversation, keep your phone entirely out of sight."
        ]},
        { week: 2, theme: "Deliberate", actions: [
          "Wait 3 minutes before checking a notification after it pings.",
          "Delete exactly one app that you mindlessly scroll.",
          "Read one page of a physical book or magazine.",
          "Look out the window for 2 solid minutes doing nothing.",
          "When walking outside, take out your headphones for 10 minutes.",
          "Type out text messages instead of using voice or predictive emojis.",
          "Put your phone on 'Do Not Disturb' for one continuous hour during work."
        ]},
        { week: 3, theme: "Recalibrate", actions: [
          "Leave your phone at home (or buried in a bag) for a 15-minute walk.",
          "Write down three things you accomplished today on a physical piece of paper.",
          "When waiting in line today, just wait. No screens.",
          "Organize one physical surface (desk, table) for 5 minutes without music.",
          "Have a 5-minute conversation with someone without breaking eye contact for a screen.",
          "Eat a snack paying attention only to its texture and taste.",
          "Stretch for 2 minutes in complete silence."
        ]},
        { week: 4, theme: "Presence", actions: [
          "Identify your biggest digital trigger today and physically step away from it.",
          "Turn off the TV or background video while doing chores.",
          "Spend 10 minutes observing your breathing without a guided app.",
          "Handwrite a short note to someone (or yourself).",
          "Take a photo today using your mind, not your phone's camera.",
          "Reflect on how your sleep has felt this week.",
          "Designate one corner of your home as a permanent 'screen-free zone'."
        ]}
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery",
      experimentTitle: "Plugging the Drains: Micro-Boundaries",
      insight: "Burnout doesn't always come from doing too much; it often comes from doing too little of what truly replenishes you. Your energy bucket has tiny leaks.",
      hypothesis: "By sealing emotional and physical energy leaks through 1-minute daily boundaries, your baseline vitality will naturally restore itself.",
      missions: [
        { week: 1, theme: "Pause", actions: [
          "Set a timer for 1 minute and simply close your eyes.",
          "Say 'Let me check my schedule' instead of an instant 'Yes'.",
          "Drink a cup of tea or coffee without doing anything else simultaneously.",
          "Take 3 deep, slow breaths before opening your email inbox.",
          "Identify one non-urgent task today and deliberately push it to tomorrow.",
          "Adjust your physical posture right now to be 10% more comfortable.",
          "Unclench your jaw and drop your shoulders for 30 seconds."
        ]},
        { week: 2, theme: "Disconnect", actions: [
          "Turn off work notifications 30 minutes earlier than usual.",
          "Mute a group chat that drains your energy.",
          "Take a 5-minute walk without a destination or purpose.",
          "Cancel or decline one minor commitment this week.",
          "Listen to a song that makes you feel nostalgic and safe.",
          "Take a shower with the water temperature exactly how you love it.",
          "Spend 5 minutes doing absolutely nothing (no reading, no watching)."
        ]},
        { week: 3, theme: "Recharge", actions: [
          "Go to bed 15 minutes earlier than your usual time tonight.",
          "Eat your favorite food today slowly, without feeling guilty.",
          "Wear the most comfortable piece of clothing you own.",
          "Write down one thing you successfully avoided doing today.",
          "Compliment yourself out loud for completing a basic daily task.",
          "Look back at an old photo where you felt genuinely happy.",
          "Do one task at 50% effort instead of your usual 100%."
        ]},
        { week: 4, theme: "Boundaries", actions: [
          "Say 'No' to something small today.",
          "Delegate or ask for help with one minor task.",
          "Identify an 'energy vampire' habit and pause it for 24 hours.",
          "Create a physical boundary today (e.g., closing a door, wearing headphones).",
          "Refuse to explain or justify a personal choice you made today.",
          "Acknowledge your own tiredness without trying to 'fix' it immediately.",
          "Write down your core boundary rule for the next month."
        ]}
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset",
      experimentTitle: "The Boring Detox: Find Magic in the Mundane",
      insight: "You haven't lost your capacity for joy — your dopamine threshold has been hijacked by hyper-stimulating content. Real pleasure is still there, waiting beneath the noise.",
      hypothesis: "By deliberately reducing high-dopamine triggers for 30 days, your brain will downregulate its overstimulated baseline, making ordinary moments feel vibrant and satisfying again.",
      missions: [
        { week: 1, theme: "Awareness", actions: [
          "Notice the first time you reach for your phone out of boredom and write it down.",
          "After watching short-form videos, check: do you feel energized or empty?",
          "Eat one meal completely without any screen or entertainment.",
          "Identify your top 3 instant-pleasure sources and write them down.",
          "Take a 5-minute walk outside without headphones.",
          "Sit in silence for 2 minutes and observe any urge to fill the space.",
          "Replace one scroll session with looking out a window for the same time."
        ]},
        { week: 2, theme: "Friction", actions: [
          "Delete one short-form video app from your phone for 7 days.",
          "Before watching entertainment, wait 5 minutes and see if the urge passes.",
          "Do a 'boring' activity for 10 minutes: fold laundry, wash dishes slowly.",
          "Talk with someone for 10 minutes without checking your phone once.",
          "Read a physical book or magazine for one sitting, however short.",
          "Cook or prepare food more slowly and attentively than usual.",
          "When you feel bored, sit with it for 3 minutes before doing anything else."
        ]},
        { week: 3, theme: "Savoring", actions: [
          "Drink your morning beverage slowly, focusing only on its flavor and warmth.",
          "Step outside and notice 3 specific sensory details in the world around you.",
          "Listen to one song all the way through without multitasking.",
          "Close your eyes and take one bite of your food, noticing its full complexity.",
          "Watch natural light change in your environment for 5 minutes.",
          "Write down one tiny thing that made today easier or more pleasant.",
          "Hold a warm drink in both hands and just breathe for 1 minute."
        ]},
        { week: 4, theme: "Rewiring", actions: [
          "Find an analogue activity that gives quiet satisfaction (puzzles, sketching, journaling).",
          "Do something creative with your hands for 10 minutes.",
          "Identify a 'slow media' option you enjoy (podcast, long article, audiobook).",
          "Spend 10 minutes in a natural environment with no agenda.",
          "List things that gave you joy as a child, before smartphones existed.",
          "Reflect on 2 ordinary moments that felt magical this week.",
          "Design your personal low-stimulation 'quick fix' for when you crave excitement."
        ]}
      ]
    },
    "space-clearing": {
      id: "space-clearing",
      experimentTitle: "Clearing the Clutter: 30 Days to a Lighter Mind",
      insight: "Every item in your space is making a tiny demand on your attention. Your environment is either a source of calm or a source of background stress — there is no neutral.",
      hypothesis: "By systematically removing physical and digital noise from your environment, you will experience measurable reductions in mental friction and a clarity you didn't know was missing.",
      missions: [
        { week: 1, theme: "Surface", actions: [
          "Remove everything from one visible surface (desk, table, shelf) that doesn't belong.",
          "Throw away or donate 3 items you haven't touched in the last 3 months.",
          "Organize your phone's home screen: delete every app unused this week.",
          "Clear out your bag completely and only put back what you actually need.",
          "Put away every item left 'temporarily' out of place for over a week.",
          "Wipe down the surface that bothers you most — keep it clear for 72 hours.",
          "Use the '2-minute rule': if it takes under 2 minutes to put away, do it now."
        ]},
        { week: 2, theme: "Digital", actions: [
          "Delete or archive every email older than 1 week in your inbox.",
          "Unsubscribe from 3 email newsletters or promotions you never read.",
          "Delete 20 duplicate or blurry photos from your camera roll.",
          "Remove apps you haven't opened in the last 30 days.",
          "Clear your desktop or bookmarks of anything saved 'just in case'.",
          "Clean out your downloads folder — delete anything older than 2 weeks.",
          "Set your phone or computer wallpaper to something clean and minimal."
        ]},
        { week: 3, theme: "Letting Go", actions: [
          "Donate or discard one item you've been holding onto 'just in case'.",
          "Unfollow 5 social media accounts that drain rather than inspire you.",
          "Clear out one drawer or container you've been avoiding.",
          "Cancel a subscription you don't use but keep renewing out of habit.",
          "Return or discard a borrowed item you've been meaning to deal with.",
          "Write down 3 commitments or obligations you'd like to end or renegotiate.",
          "Say no to one request you don't genuinely want to fulfill."
        ]},
        { week: 4, theme: "Systems", actions: [
          "Create a designated 'home' for 5 items that always end up misplaced.",
          "Build a weekly 5-minute surface reset habit.",
          "Set a household rule: 'one in, one out' for any new item.",
          "Identify the area of your home that generates the most clutter and fix it.",
          "Set up a simple triage system for digital messages.",
          "Schedule 15 minutes on Sunday to reset your space for the week.",
          "Write your personal 'clutter rules' — what you will no longer allow in your space."
        ]}
      ]
    },
    "overthinking": {
      id: "overthinking",
      experimentTitle: "Stop Overthinking: 30 Days of Imperfect Action",
      insight: "You're using thinking as a highly sophisticated procrastination tool. Perfectionism is a shield that's preventing you from actually entering the arena.",
      hypothesis: "By forcing imperfect, immediate actions on micro-decisions, the neural pathway of 'analysis paralysis' will begin to weaken.",
      missions: [
        { week: 1, theme: "Velocity", actions: [
          "Make your next minor decision (what to eat, what to wear) in under 60 seconds.",
          "Send an email or message with a deliberate, harmless typo.",
          "Start a task you've been avoiding for just 2 minutes. Then you can stop.",
          "Choose a movie/show to watch within 3 minutes, or don't watch anything.",
          "Write down a 'bad' idea intentionally.",
          "Reply to a message immediately instead of leaving it unread to 'think about'.",
          "Leave a small task visibly unfinished on purpose."
        ]},
        { week: 2, theme: "Trust", actions: [
          "Go for a walk without planning the route.",
          "Buy an item (like coffee or a snack) without checking the reviews.",
          "Do a chore in a completely different, faster way than usual.",
          "If a thought starts with 'What if...', say 'So what?' out loud.",
          "Discard a draft of something and start fresh without over-analyzing.",
          "Trust your first instinct on a choice today, no second-guessing.",
          "Accept a minor mistake you made today without apologizing excessively."
        ]},
        { week: 3, theme: "Release", actions: [
          "Identify something you can't control today and literally shrug your shoulders.",
          "Unsubscribe from 3 newsletters that give you 'information overload'.",
          "Do something creative (draw, write) for 5 minutes knowing it will be ugly.",
          "When asked for an opinion, give the simplest, most direct answer.",
          "Throw away a piece of physical clutter you've been 'saving just in case'.",
          "Stop mid-task and switch to something else for 10 minutes.",
          "Forgive yourself quickly for a momentary lapse in focus."
        ]},
        { week: 4, theme: "Momentum", actions: [
          "Make a 'done list' of what you finished today, even if it's imperfect.",
          "Commit to a plan for the weekend right now, without over-researching.",
          "Publish or share something you consider 'only 80% ready'.",
          "Catch yourself ruminating and immediately do 10 jumping jacks or stretches.",
          "Ask someone else to make a choice for you today (dinner, movie).",
          "Reflect on a time when a quick decision worked out perfectly fine.",
          "Write down your new rule for making low-stakes decisions."
        ]}
      ]
    },
    "morning-anchor": {
      id: "morning-anchor",
      experimentTitle: "The Anchor Routine: Own Your Morning",
      insight: "You don't need a 5am miracle morning. You need to win the first 10 minutes before your brain hands control to anxiety, obligation, or a glowing screen.",
      hypothesis: "By consistently protecting the first moments of your morning with intentional, screen-free behaviors, you will develop a felt sense of control and calm that carries through your entire day.",
      missions: [
        { week: 1, theme: "Foundation", actions: [
          "Drink a full glass of water before looking at any screen this morning.",
          "Make your bed immediately after getting up, no exceptions.",
          "Open a window or step outside for 60 seconds of fresh air.",
          "Do not check your phone until you have been awake for at least 10 minutes.",
          "Before leaving your room, say out loud one thing you're looking forward to today.",
          "Prepare your coffee, tea, or breakfast slowly and without multitasking.",
          "Commit to your morning anchor without negotiating for 7 days straight."
        ]},
        { week: 2, theme: "Intention", actions: [
          "Write one sentence in a journal the moment you wake up — just one.",
          "Set a single 'most important task' for today before you open any messages.",
          "Read one paragraph of a non-news, non-social book before your day starts.",
          "Sit quietly with your coffee for 2 minutes before any conversation.",
          "Think of one person you appreciate and imagine telling them so.",
          "Review yesterday: one thing that went well and one to do differently.",
          "Pick your 'anchor word' for the week — a value or quality you want to embody."
        ]},
        { week: 3, theme: "Body", actions: [
          "Do 10 reps of any body movement within 2 minutes of waking up.",
          "Take a shower slightly cooler than usual — end with 15 seconds cold.",
          "Stretch one tight muscle group for 60 seconds before talking to anyone.",
          "Stand in natural light for 2 minutes after waking (outdoors or by a window).",
          "Take 5 deep, slow breaths with eyes closed before picking up your phone.",
          "Do one physical task with complete attention and zero mental splitting.",
          "Walk or move gently before consuming any media today."
        ]},
        { week: 4, theme: "Flow", actions: [
          "Perform your full anchor sequence today without any phone present.",
          "Identify which element of your morning routine gives you the most energy.",
          "Shorten or simplify any routine step that feels like a chore.",
          "Design the night-before habit that makes tomorrow's anchor effortless.",
          "Perform your routine even if you're late — less time, not no routine.",
          "Reflect: how has the quality of your mornings changed over 30 days?",
          "Write your final 'Morning Anchor' — 3 non-negotiable first morning acts."
        ]}
      ]
    }
  },

  ko: {
    "digital-detox": {
      id: "digital-detox",
      experimentTitle: "노이즈 음소거: 내 집중력을 되찾는 30일",
      insight: "당신의 집중력이 떨어진 것이 아닙니다. 수천 개의 작은 디지털 자극들이 당신의 주의력을 훔쳐가고 있을 뿐입니다. 당신의 뇌는 더 많은 정보가 아니라 고요함을 원합니다.",
      hypothesis: "스크린과 나 사이에 의도적인 아주 작은 마찰을 만들면, 30일 후 잃어버렸던 뇌의 여유 공간 30%를 되찾고 현재에 머무는 감각이 살아날 것입니다.",
      missions: [
        { week: 1, theme: "경계", actions: [
          "오늘 아침, 폰 화면을 보기 전에 물 한 컵부터 끝까지 마시기.",
          "사람이 보내는 메시지를 제외한 모든 푸시 알림(뉴스, 쇼핑, SNS) 끄기.",
          "오늘 한 끼 식사할 때는 폰을 아예 다른 방에 두고 밥만 먹기.",
          "오늘 밤엔 스마트폰을 침실 밖에서 충전하기.",
          "다음 2시간 동안 스마트폰 화면을 '흑백(Grayscale)' 모드로 설정하기.",
          "오늘 화장실에 갈 때는 스마트폰을 절대 들고 가지 않기.",
          "누군가와 대화할 때, 폰을 주머니나 가방에 넣어 시야에서 완전히 치우기."
        ]},
        { week: 2, theme: "의도", actions: [
          "알림이 울리면 곧바로 확인하지 말고 3분 기다렸다가 확인하기.",
          "아무 생각 없이 자꾸 누르게 되는 앱 딱 하나만 오늘 삭제하기.",
          "종이로 된 책이나 잡지를 딱 1페이지 읽기.",
          "2분 동안 아무것도 하지 않고 창밖의 풍경만 가만히 바라보기.",
          "오늘 밖을 걸을 때, 10분 동안 이어폰을 빼고 세상의 소리 듣기.",
          "오늘 메시지를 보낼 때, 자동완성이나 이모티콘 대신 끝까지 텍스트로 쳐보기.",
          "오늘 일하는 동안 딱 1시간만 폰을 '방해금지 모드'로 켜두기."
        ]},
        { week: 3, theme: "영점조절", actions: [
          "폰을 집에 두고(또는 가방 깊숙이 넣고) 15분 동안 동네 산책하기.",
          "오늘 끝낸 가장 사소한 일 3가지를 종이에 펜으로 적어보기.",
          "오늘 무언가를 기다릴 때(엘리베이터, 식당 등), 폰을 보지 않고 그냥 기다리기.",
          "음악 없이 정적 속에서 5분 동안 내 책상 위 정리하기.",
          "누군가와 5분 동안 폰 한 번 안 쳐다보고 눈을 맞추며 대화하기.",
          "간식을 먹을 때 딴짓하지 않고 오직 씹는 식감과 맛에만 집중하기.",
          "완벽한 침묵 속에서 2분 동안 스트레칭하기."
        ]},
        { week: 4, theme: "현존", actions: [
          "오늘 나를 가장 산만하게 만드는 요소를 하나 찾고, 물리적으로 거기서 멀어지기.",
          "집안일을 할 때 틀어놓던 유튜브나 TV를 끄고 내 움직임에 집중하기.",
          "명상 앱 없이, 스스로 10분 동안 내 숨소리에만 집중하며 앉아있기.",
          "누군가에게(혹은 나에게) 아주 짧은 손글씨 메모 남기기.",
          "오늘 기억하고 싶은 순간을 폰 카메라가 아닌 내 눈과 머릿속으로만 담기.",
          "이번 주 내 수면의 질이 폰과 멀어진 후 어떻게 달라졌는지 기록하기.",
          "집 안의 특정 구역(예: 침대 위, 식탁)을 영구적인 '스크린 청정 구역'으로 선언하기."
        ]}
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery",
      experimentTitle: "배수구 막기: 아주 작은 경계선 세우기 30일",
      insight: "번아웃은 너무 많은 일을 해서가 아니라, 나를 채워주는 일을 너무 적게 해서 생깁니다. 지금 당신의 에너지 양동이에는 미세한 구멍들이 나 있습니다.",
      hypothesis: "매일 1분씩 신체적, 감정적 에너지가 새는 곳을 막아주는 경계선을 세우면, 바닥났던 당신의 기본 생명력이 자연스럽게 차오를 것입니다.",
      missions: [
        { week: 1, theme: "멈춤", actions: [
          "타이머를 1분 맞추고 기대 앉아 눈을 감고 쉬기.",
          "요청이 들어왔을 때 즉각 '네'라고 하지 말고, '일정 확인해 볼게요'라고 쿠션어 쓰기.",
          "무언가 읽거나 보지 말고, 오로지 차(커피) 한 잔을 마시는 행위에만 집중하기.",
          "메일이나 카톡을 열기 전에, 아주 깊고 천천히 심호흡 3번 하기.",
          "오늘 해야 할 안 급한 일 딱 하나를 골라 의도적으로 내일로 미뤄보기.",
          "지금 이 순간, 당신의 자세를 10%만 더 편안하게 고쳐 앉기.",
          "30초 동안 꽉 깨문 턱에 힘을 풀고 양어깨를 바닥으로 툭 떨어뜨리기."
        ]},
        { week: 2, theme: "단절", actions: [
          "오늘 하루만 업무/단톡방 알림을 평소보다 30분 일찍 꺼버리기.",
          "내 에너지를 갉아먹는 단톡방을 조용히 '알림 음소거' 하기.",
          "목적지 없이, 아무 이유 없이 그냥 밖으로 나가 5분 걸어보기.",
          "이번 주 약속이나 일정 중 별로 중요하지 않은 것 하나를 취소하거나 거절하기.",
          "나를 가장 안전하고 편안하게 느끼게 해줬던 옛날 노래 한 곡 듣기.",
          "샤워 물 온도를 남이 아닌 오로지 내가 가장 좋아하는 온도로 조절하고 즐기기.",
          "5분 동안 '아무것도 안 하는 멍때리기'를 알차게 수행하기."
        ]},
        { week: 3, theme: "충전", actions: [
          "오늘 밤, 평소 자는 시간보다 딱 15분 일찍 불 끄고 눕기.",
          "칼로리나 건강 생각은 잠시 끄고, 오늘 내가 제일 좋아하는 음식 천천히 음미하기.",
          "내 옷장 안에서 '내 피부에 가장 편안한 옷' 꺼내 입기.",
          "오늘 나를 가장 피곤하게 만들 뻔한 상황을 '잘 피한 것'에 대해 한 줄 적기.",
          "오늘 양치질이나 세수 같은 아주 기본적인 일을 해낸 나를 소리내어 칭찬하기.",
          "내 표정이 진심으로 행복해 보였던 예전 사진 한 장 찾아서 가만히 쳐다보기.",
          "오늘 할 일 중 하나는 평소처럼 100% 노력하지 않고 대충 50%만 해보기."
        ]},
        { week: 4, theme: "경계", actions: [
          "오늘 하루 중 아주 사소한 일에 가볍게 '아니오'라고 말해보기.",
          "혼자 다 하려고 하지 말고, 아주 작은 일 하나를 누군가에게 부탁(위임)하기.",
          "내 에너지를 빨아먹는 나쁜 습관 딱 하루만 중단하기.",
          "물리적 경계 만들기 (방해받고 싶지 않을 때 이어폰 꽂기, 문 닫기 등).",
          "오늘 내가 내린 결정이나 취향에 대해 굳이 남에게 변명이나 설명하지 않기.",
          "피곤한 내 상태를 억지로 끌어올리려 하지 말고, '아, 나 지금 피곤하네' 하고 인정하기.",
          "다음 한 달 동안 내 에너지를 지키기 위한 '가장 중요한 원칙 1가지' 적어보기."
        ]}
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset",
      experimentTitle: "지루함 디톡스: 평범함 속 마법 찾기 30일",
      insight: "기쁨을 느끼는 능력이 사라진 게 아닙니다. 숏폼 영상과 자극적인 콘텐츠에 절여진 당신의 뇌가 도파민 기준치를 너무 높게 세팅해버린 것뿐입니다. 진짜 즐거움은 그 소음 아래에 조용히 남아있습니다.",
      hypothesis: "30일 동안 고자극 콘텐츠를 의도적으로 줄이면, 뇌의 과흥분된 도파민 기준선이 리셋되어 평범한 일상의 순간들이 다시 생생하고 의미 있게 느껴질 것입니다.",
      missions: [
        { week: 1, theme: "자극 지도", actions: [
          "오늘 지루함을 느낀 순간 처음으로 폰을 집어 드는 시점을 알아차리고 메모해두기.",
          "숏폼 영상을 본 직후, 내 기분이 충전되었는지 아니면 텅 빈 느낌인지 체크하기.",
          "영상 없이, 화면 없이 오로지 식사에만 집중하며 한 끼 먹기.",
          "나에게 '즉각적인 쾌감'을 주는 소스 TOP 3를 적어보기.",
          "이어폰 없이, 음악 없이 5분간 밖을 걷기.",
          "2분 동안 아무것도 안 하고 침묵 속에 앉아, 무언가를 채우고 싶은 충동을 그냥 느끼기.",
          "숏폼 스크롤 대신, 같은 시간 동안 창밖 풍경을 아무 생각 없이 바라보기."
        ]},
        { week: 2, theme: "마찰", actions: [
          "숏폼 영상 앱 중 하나를 다음 7일 동안 폰에서 삭제하기.",
          "콘텐츠를 보기 전에 5분 기다려보고, 그냥 그 충동이 사라지는지 확인하기.",
          "세탁물 개기, 설거지 천천히 하기 등 '지루한 활동' 10분 하기.",
          "폰 한 번 안 꺼내고 누군가와 10분 대화하기.",
          "어느 정도 읽혀도 좋으니 종이 책이나 잡지 한 번 앉아서 읽기.",
          "평소보다 더 천천히, 더 주의 깊게 요리나 음식 준비하기.",
          "지루함을 느낄 때, 다른 행동을 하기 전에 3분 동안 그 지루함과 함께 그냥 있어보기."
        ]},
        { week: 3, theme: "음미", actions: [
          "아침 음료를 맛과 온기에만 집중하며 천천히 마시기.",
          "밖에 나가서 주변 세상의 구체적인 감각 디테일 3가지를 발견하기.",
          "멀티태스킹 없이 노래 한 곡을 처음부터 끝까지 듣기.",
          "눈을 감고 음식 한 입을 먹으며 맛의 복잡함을 온전히 느끼기.",
          "5분 동안 내 공간에서 자연광이 변하는 것 바라보기.",
          "오늘 하루를 조금 더 쉽게, 또는 더 즐겁게 만들어준 아주 작은 것 하나 적기.",
          "따뜻한 음료를 두 손으로 감싸 쥐고 1분 동안 그냥 호흡하기."
        ]},
        { week: 4, theme: "재배선", actions: [
          "조용한 만족감을 주는 아날로그 활동 찾기 (퍼즐, 그림 그리기, 일기 쓰기 등).",
          "10분 동안 손으로 무언가를 만들거나 창작하는 활동하기.",
          "내가 즐길 수 있는 '슬로우 미디어' 찾기 (팟캐스트, 장문 글, 오디오북 등).",
          "어떤 목적도 없이 10분 동안 자연 환경에서 시간 보내기.",
          "스마트폰 이전, 어릴 때 즐겼던 것들의 목록 써보기.",
          "이번 주에 '마법 같이 느껴진' 평범한 순간 2가지 떠올리기.",
          "자극이 간절할 때를 위한 나만의 '저도파민 즉각 처방' 설계하기."
        ]}
      ]
    },
    "space-clearing": {
      id: "space-clearing",
      experimentTitle: "잡동사니 지우기: 가벼운 마음을 위한 30일",
      insight: "내 공간에 있는 모든 물건은 내 주의력에 아주 작은 요구를 하고 있습니다. 내 환경은 고요함의 원천이거나 배경 소음의 원천이거나 둘 중 하나입니다. '중립'이란 없습니다.",
      hypothesis: "30일 동안 내 공간에서 물리적, 디지털 소음을 체계적으로 제거하면, 배경 정신적 마찰이 눈에 띄게 줄어들고 명료함이 증가하는 것을 직접 체감할 것입니다.",
      missions: [
        { week: 1, theme: "표면", actions: [
          "책상, 탁자, 선반 중 눈에 보이는 표면 하나에서 필요 없는 물건 모두 치우기.",
          "최근 3개월 동안 손도 안 댄 물건 3개 버리거나 기증하기.",
          "폰 홈 화면 정리: 이번 주에 한 번도 안 쓴 앱 삭제하기.",
          "가방이나 백팩을 완전히 비우고 실제로 필요한 것만 다시 넣기.",
          "1주일 넘게 '잠깐 여기 두자'며 방치된 물건들을 제자리에 돌려놓기.",
          "가장 신경 쓰이는 표면 닦고, 72시간 동안 깨끗하게 유지하기.",
          "'2분 규칙' 적용: 치우는 데 2분 이내면 지금 당장 하기."
        ]},
        { week: 2, theme: "디지털", actions: [
          "받은편지함에서 1주일 이상 된 이메일 모두 삭제하거나 보관하기.",
          "읽지 않는 이메일 뉴스레터나 광고 3개 구독 취소하기.",
          "사진첩에서 중복되거나 흐린 사진 20장 삭제하기.",
          "최근 30일 동안 한 번도 안 연 앱 삭제하기.",
          "바탕화면이나 북마크에서 '언젠가 볼지도 몰라'라고 남긴 것들 정리하기.",
          "다운로드 폴더 정리: 2주 이상 된 파일 삭제하기.",
          "폰이나 컴퓨터 배경화면을 깔끔하고 차분한 미니멀한 이미지로 바꾸기."
        ]},
        { week: 3, theme: "내려놓기", actions: [
          "'혹시 몰라서' 갖고 있던 물건 하나 기증하거나 버리기.",
          "영감보다 소모감을 주는 SNS 계정 5개 언팔로우하기.",
          "계속 피해왔던 서랍이나 수납공간 하나 정리하기.",
          "사용하지 않으면서 계속 결제되는 구독 서비스 하나 해지하기.",
          "돌려줘야 하는데 미뤄온 물건 혹은 처분해야 할 물건 처리하기.",
          "끝내거나 다시 협상하고 싶은 의무나 약속 3가지 적어보기.",
          "진심으로 하기 싫은 부탁 하나에 '아니오'라고 말하기."
        ]},
        { week: 4, theme: "시스템", actions: [
          "항상 어디 뒀는지 모르는 물건 5가지에 '지정석' 만들어주기.",
          "매주 5분씩 표면 초기화하는 습관 만들기.",
          "새 물건이 들어올 때의 원칙 세우기: '하나 들어오면 하나 나간다'.",
          "집에서 잡동사니가 가장 많이 생기는 구역을 찾아 해결책 설계하기.",
          "디지털 메시지를 위한 간단한 처리 체계 만들기.",
          "일요일 15분 공간 초기화하는 주간 루틴 만들기.",
          "나만의 '무질서 방지 원칙' 적기 — 앞으로 내 공간에 허용하지 않을 것들."
        ]}
      ]
    },
    "overthinking": {
      id: "overthinking",
      experimentTitle: "생각 멈춰: 불완전한 행동 30일",
      insight: "당신은 '생각'을 가장 정교한 미루기 수단으로 사용하고 있습니다. 완벽주의는 당신이 실제로 진짜 경기장에 들어가는 것을 막는 거대한 방패입니다.",
      hypothesis: "아주 사소한 결정들에서 '불완전하고 즉각적인 행동'을 강제하면, 뇌에 깊게 파인 '결정 장애(분석 마비)' 회로가 서서히 끊어질 것입니다.",
      missions: [
        { week: 1, theme: "가속", actions: [
          "오늘 점심 메뉴나 입을 옷 같은 사소한 결정을 무조건 60초 안에 끝내기.",
          "오늘 메시지나 메일 보낼 때, 타격 없는 아주 작은 오타 하나를 일부러 수정 안 하고 보내기.",
          "자꾸 미루고 있던 일을 딱 2분만 시도하기. 2분 뒤엔 바로 멈춰도 됨.",
          "넷플릭스 등 볼거리 고를 때 3분 넘어가면 오늘 영상 시청 포기하기.",
          "어떤 문제에 대해 의도적으로 가장 '형편없는 아이디어' 하나를 적어보기.",
          "나중에 생각하고 답해야지 하고 뒀던 연락에 지금 즉시 떠오르는 대로 답장하기.",
          "어떤 일을 하다가 완벽하게 끝맺지 않은 채, 일부러 엉성하게 며칠 내버려두기."
        ]},
        { week: 2, theme: "신뢰", actions: [
          "지도 앱 켜지 않고 발길 닿는 대로 그냥 15분 동네 걸어보기.",
          "별점 후기나 리뷰 절대 검색하지 않고 커피, 밥, 혹은 스낵 사보기.",
          "청소나 설거지 같은 반복적인 일을 평소와 완전히 다르고 빠른 방식으로 해보기.",
          "머릿속에서 '만약 실패하면 어떡하지?'라는 생각이 들면 소리 내어 '어쩌라고!' 외치기.",
          "열심히 쓰다가 마음에 안 드는 초안은 과감히 버리고 백지에서 다시 시작하기.",
          "오늘 하나의 선택에 대해 무조건 '첫 번째 직감'만 믿고 변경하지 않기.",
          "오늘 저지른 사소한 실수에 대해 과도하게 사과하지 않고 쿨하게 넘어가기."
        ]},
        { week: 3, theme: "해방", actions: [
          "내가 어찌할 수 없는 통제 밖의 상황을 하나 떠올리고 진짜로 양어깨를 '으쓱' 해보기.",
          "정보 과부하를 일으키는 이메일 뉴스레터나 알림 3개만 당장 구독 취소하기.",
          "그림을 그리거나 글을 쓰는 등 창작 활동을 딱 5분만 하기 (망쳐야 정상임).",
          "누군가 의견을 물어볼 때 눈치 보지 말고 가장 심플하고 단순한 첫 생각 말하기.",
          "'나중에 쓸지도 몰라' 하고 남겨뒀던 사소한 물건 하나 쓰레기통에 과감히 던지기.",
          "어떤 일에 너무 푹 빠져 집착하고 있을 때, 알람을 맞추고 과감히 10분간 딴짓하기.",
          "오늘 잠시 집중력을 잃거나 딴생각을 한 자신을 혼내지 않고 1초 만에 용서하기."
        ]},
        { week: 4, theme: "탄력", actions: [
          "아직 완벽하지 않더라도 오늘 일단 '끝냈다'고 선언할 수 있는 완료 리스트 적어보기.",
          "과도한 정보 검색 없이, 이번 주말에 할 일을 지금 당장 직감으로 확정하기.",
          "'이 정도면 80점은 돼' 싶은 일을 더 이상 붙잡지 않고 그냥 세상에 공개해버리기.",
          "또 과거를 후회하거나 미래를 걱정하고 있다면, 벌떡 일어나 팔벌려뛰기 10번 하기.",
          "오늘 저녁 메뉴나 간식 선택권을 내가 아닌 다른 사람에게 전적으로 맡기기.",
          "과거에 내가 너무 쉽게 아무 생각 없이 선택했는데 결과가 꽤 좋았던 경험 1개 떠올리기.",
          "앞으로 가벼운 결정을 내릴 때 지킬 '나만의 짧고 굵은 결정 원칙' 1문장으로 적기."
        ]}
      ]
    },
    "morning-anchor": {
      id: "morning-anchor",
      experimentTitle: "닻 내리기: 내 아침의 주인이 되는 30일",
      insight: "새벽 5시 기적의 모닝이 필요한 게 아닙니다. 당신의 뇌가 불안이나 의무감, 또는 빛나는 화면에게 통제권을 넘겨주기 전, 하루의 첫 10분을 먼저 차지하면 됩니다.",
      hypothesis: "아침의 첫 순간들을 의도적이고 화면 없는 행동들로 꾸준히 보호하면, 하루 전체에 스며드는 통제감과 고요함의 감각이 자연스럽게 몸에 배을 것입니다.",
      missions: [
        { week: 1, theme: "기반", actions: [
          "오늘 아침, 어떤 화면도 보기 전에 물 한 컵 가득 마시기.",
          "일어나자마자 예외 없이 이불 정리하기.",
          "창문 열거나 밖으로 나가서 60초 동안 신선한 공기 마시기.",
          "깨어나고 최소 10분이 지나기 전까지 폰 절대 보지 않기.",
          "방을 나서기 전, 오늘 기대되는 한 가지를 소리 내어 말하기.",
          "커피, 차, 또는 아침 식사를 멀티태스킹 없이 천천히 준비하기.",
          "협상 없이 7일 연속으로 아침 닻 루틴을 완수하기."
        ]},
        { week: 2, theme: "의도", actions: [
          "일어나는 순간 일기장에 딱 한 문장만 쓰기.",
          "어떤 메시지도 열기 전에 오늘의 '가장 중요한 할 일' 하나 정하기.",
          "하루 시작 전 뉴스도, SNS도 아닌 책 한 단락 읽기.",
          "어떤 대화도 하기 전에 커피 들고 2분 조용히 앉아있기.",
          "감사하게 생각하는 사람 한 명을 떠올리고 그 사람에게 말을 건네는 상상하기.",
          "어제를 돌아보기: 잘 된 것 하나, 다르게 할 것 하나.",
          "이번 주의 '닻 단어' 정하기 — 내가 구현하고 싶은 하나의 가치나 태도."
        ]},
        { week: 3, theme: "신체", actions: [
          "기상 후 2분 안에 어떤 형태로든 몸을 10번 움직이기.",
          "평소보다 약간 차가운 물로 샤워하고, 마지막 15초는 냉수로 마무리하기.",
          "누구에게도 말을 걸기 전에 뻣뻣한 근육 한 부위 60초 스트레칭하기.",
          "기상 후 자연광 속에서 (또는 창가에서) 2분 서 있기.",
          "폰을 집기 전에 눈 감고 깊고 천천히 5번 호흡하기.",
          "하나의 일에 완전한 신체적 주의를 기울이고 정신적 분산 없이 해내기.",
          "오늘 어떤 미디어도 소비하기 전에 걷거나 가벼운 움직임 먼저 하기."
        ]},
        { week: 4, theme: "흐름", actions: [
          "폰 없이 나만의 닻 루틴 전체 수행하기.",
          "내 아침 루틴 중 가장 에너지를 주는 요소 찾아내기.",
          "부담스럽게 느껴지는 루틴 요소를 더 짧거나 단순하게 만들기.",
          "내일의 아침 닻을 수월하게 만들어줄 '전날 밤 의식' 설계하기.",
          "늦더라도 루틴을 포기하지 말기 — 시간이 적으면 줄이되, 없애지는 말기.",
          "30일 동안 아침의 질이 어떻게 달라졌는지 되돌아보기.",
          "나만의 최종 '아침 닻' 적기 — 협상 불가능한 첫 번째 행동 3가지."
        ]}
      ]
    }
  },

  // ── Placeholder structure for 14 other languages (filled in next step) ──
  es: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "Silencia el Ruido: Recupera Tu Atención",
      insight: "No estás perdiendo el enfoque; tu atención está siendo robada por miles de pequeñas interrupciones digitales. Tu cerebro anhela silencio, no más contenido.",
      hypothesis: "Al introducir micro-fricciones intencionales entre tú y tus pantallas, recuperarás el 30% de tu ancho de banda mental diario y te sentirás sorprendentemente presente.",
      missions: [
        { week: 1, theme: "Límites", actions: ["Bebe un vaso de agua antes de mirar cualquier pantalla hoy.", "Desactiva todas las notificaciones automáticas (noticias, redes sociales, compras).", "Deja el teléfono en otra habitación durante una comida.", "Esta noche, carga el teléfono fuera de tu dormitorio.", "Pon la pantalla en escala de grises durante las próximas 2 horas.", "No mires el teléfono mientras usas el baño hoy.", "Durante una conversación, mantén el teléfono completamente fuera de tu vista."] },
        { week: 2, theme: "Deliberado", actions: ["Espera 3 minutos antes de revisar una notificación.", "Elimina una app en la que haces scroll sin pensar.", "Lee una página de un libro o revista física.", "Mira por la ventana durante 2 minutos sin hacer nada más.", "Al caminar afuera, quítate los auriculares 10 minutos.", "Escribe mensajes en lugar de usar voz o emojis predictivos.", "Pon el teléfono en 'No molestar' durante una hora de trabajo."] },
        { week: 3, theme: "Recalibrar", actions: ["Deja el teléfono en casa para un paseo de 15 minutos.", "Escribe en papel tres cosas que lograste hoy.", "Cuando hagas fila, solo espera. Sin pantallas.", "Organiza una superficie 5 minutos sin música.", "Ten una conversación de 5 minutos sin mirar ninguna pantalla.", "Come un snack prestando atención solo a su textura y sabor.", "Estírate 2 minutos en completo silencio."] },
        { week: 4, theme: "Presencia", actions: ["Identifica tu mayor desencadenante digital y aléjate de él físicamente.", "Apaga el televisor o el video de fondo mientras haces tareas.", "Observa tu respiración 10 minutos sin una app de meditación.", "Escribe a mano una nota corta a alguien (o a ti mismo).", "Toma una 'foto mental' hoy en lugar de usar la cámara.", "Reflexiona sobre cómo ha sido tu sueño esta semana.", "Designa un rincón de tu hogar como 'zona libre de pantallas' permanente."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "Sella las Fugas: Micro-Límites",
      insight: "El agotamiento no siempre viene de hacer demasiado; a menudo viene de hacer muy poco de lo que realmente te repone. Tu cubo de energía tiene pequeñas fugas.",
      hypothesis: "Al sellar fugas de energía emocional y física con límites de 1 minuto diarios, tu vitalidad base se restaurará naturalmente.",
      missions: [
        { week: 1, theme: "Pausa", actions: ["Pon un temporizador de 1 minuto y simplemente cierra los ojos.", "Di 'Déjame revisar mi agenda' en lugar de un 'Sí' instantáneo.", "Toma café o té sin hacer nada más a la vez.", "Respira profundo 3 veces antes de abrir tu bandeja de entrada.", "Pospón intencionalmente una tarea no urgente a mañana.", "Ajusta tu postura para estar un 10% más cómodo.", "Afloja la mandíbula y baja los hombros durante 30 segundos."] },
        { week: 2, theme: "Desconectar", actions: ["Desactiva notificaciones de trabajo 30 minutos antes de lo habitual.", "Silencia un grupo de chat que drena tu energía.", "Da un paseo de 5 minutos sin destino ni propósito.", "Cancela o rechaza un compromiso menor esta semana.", "Escucha una canción que te haga sentir nostálgico y seguro.", "Date una ducha con la temperatura exacta que más te gusta.", "Pasa 5 minutos sin hacer absolutamente nada."] },
        { week: 3, theme: "Recargar", actions: ["Acuéstate 15 minutos antes de lo habitual esta noche.", "Come tu comida favorita despacio, sin sentirte culpable.", "Viste la prenda más cómoda que tengas.", "Anota una cosa que lograste evitar hacer hoy.", "Felicítate en voz alta por completar una tarea básica cotidiana.", "Mira una foto antigua en la que te sentiste genuinamente feliz.", "Haz una tarea con el 50% del esfuerzo habitual."] },
        { week: 4, theme: "Límites", actions: ["Di 'No' a algo pequeño hoy.", "Delega o pide ayuda con una tarea menor.", "Identifica un hábito 'vampiro de energía' y paúsalo 24 horas.", "Crea un límite físico hoy (cierra una puerta, usa auriculares).", "Niégate a explicar una decisión personal que tomaste hoy.", "Reconoce tu cansancio sin intentar 'arreglarlo' de inmediato.", "Escribe tu regla de límites principal para el próximo mes."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "Desintoxicación del Aburrimiento: Halla la Magia en lo Cotidiano",
      insight: "No has perdido tu capacidad de sentir alegría — tu umbral de dopamina ha sido secuestrado por contenido hiperestimulante. El placer real sigue ahí, esperando bajo el ruido.",
      hypothesis: "Al reducir deliberadamente los desencadenantes de alta dopamina durante 30 días, tu cerebro regulará su línea base sobreestimulada y los momentos ordinarios serán satisfactorios de nuevo.",
      missions: [
        { week: 1, theme: "Conciencia", actions: ["Nota la primera vez que buscas el teléfono por aburrimiento y anótalo.", "Tras ver videos cortos, comprueba: ¿te sientes energizado o vacío?", "Come una comida sin ninguna pantalla ni entretenimiento.", "Identifica tus 3 principales fuentes de placer instantáneo y escríbelas.", "Da un paseo de 5 minutos afuera sin auriculares.", "Siéntate en silencio 2 minutos y observa el impulso de llenar el espacio.", "Sustituye una sesión de scroll por mirar por la ventana el mismo tiempo."] },
        { week: 2, theme: "Fricción", actions: ["Elimina una app de videos cortos del teléfono durante 7 días.", "Antes de ver entretenimiento, espera 5 minutos a ver si el impulso pasa.", "Haz una actividad 'aburrida' 10 minutos: dobla ropa, lava platos despacio.", "Habla con alguien 10 minutos sin mirar el teléfono.", "Lee un libro o revista física durante un rato.", "Cocina o prepara comida más lenta y atentamente de lo habitual.", "Cuando te aburras, quédate con el aburrimiento 3 minutos antes de actuar."] },
        { week: 3, theme: "Saborear", actions: ["Bebe tu bebida matutina despacio, enfocándote solo en su sabor y calor.", "Sal afuera y observa 3 detalles sensoriales específicos a tu alrededor.", "Escucha una canción completa sin hacer varias cosas a la vez.", "Cierra los ojos y da un mordisco de comida notando toda su complejidad.", "Observa cómo cambia la luz natural en tu entorno durante 5 minutos.", "Anota una cosa pequeña que hizo el día más fácil o agradable.", "Sostén una bebida caliente con ambas manos y respira 1 minuto."] },
        { week: 4, theme: "Reconexión", actions: ["Encuentra una actividad analógica satisfactoria (puzzles, dibujar, escribir).", "Haz algo creativo con las manos durante 10 minutos.", "Identifica un 'medio lento' que disfrutes (podcast, artículo largo, audiolibro).", "Pasa 10 minutos en un entorno natural sin ningún objetivo.", "Haz una lista de cosas que te daban alegría de niño, antes de los smartphones.", "Reflexiona sobre 2 momentos ordinarios que se sintieron mágicos esta semana.", "Diseña tu 'remedio rápido de baja estimulación' para cuando ansíes emoción."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "Despeja el Desorden: 30 Días para una Mente más Ligera",
      insight: "Cada objeto en tu espacio hace una pequeña demanda a tu atención. Tu entorno es fuente de calma o de estrés de fondo — no existe el término medio.",
      hypothesis: "Al eliminar sistemáticamente el ruido físico y digital de tu entorno, experimentarás una reducción medible en la fricción mental y una claridad que no sabías que te faltaba.",
      missions: [
        { week: 1, theme: "Superficie", actions: ["Retira todo lo que no pertenece a una superficie visible (escritorio, mesa, estante).", "Tira o dona 3 cosas que no hayas tocado en los últimos 3 meses.", "Organiza la pantalla de inicio: elimina apps no usadas esta semana.", "Vacía tu bolsa completamente y vuelve a meter solo lo que necesitas.", "Guarda cada objeto dejado 'temporalmente' fuera de lugar hace más de una semana.", "Limpia la superficie que más te molesta y mantenla despejada 72 horas.", "Usa la 'regla de 2 minutos': si tarda menos de 2 minutos en guardarlo, hazlo ahora."] },
        { week: 2, theme: "Digital", actions: ["Elimina o archiva todos los correos de más de 1 semana en tu bandeja.", "Cancela la suscripción a 3 boletines o promociones que nunca lees.", "Borra 20 fotos duplicadas o borrosas de tu galería.", "Elimina apps que no has abierto en los últimos 30 días.", "Limpia el escritorio o marcadores de cosas guardadas 'por si acaso'.", "Limpia la carpeta de descargas: elimina todo lo de más de 2 semanas.", "Pon un fondo de pantalla limpio y minimalista en el teléfono o computadora."] },
        { week: 3, theme: "Soltar", actions: ["Dona o tira algo que has guardado 'por si acaso'.", "Deja de seguir 5 cuentas que drenan en lugar de inspirar.", "Vacía un cajón o contenedor que has estado evitando.", "Cancela una suscripción que no usas pero sigues renovando.", "Devuelve o desecha algo prestado que has estado posponiendo.", "Anota 3 compromisos u obligaciones que quieras terminar o renegociar.", "Di no a una petición que realmente no quieres cumplir."] },
        { week: 4, theme: "Sistemas", actions: ["Crea un lugar fijo para 5 objetos que siempre terminan perdidos.", "Crea un hábito semanal de 5 minutos para resetear superficies.", "Establece una regla: 'uno entra, uno sale' para cualquier objeto nuevo.", "Identifica el área que genera más desorden en tu hogar y corrígela.", "Crea un sistema simple de clasificación para mensajes digitales.", "Agenda 15 minutos el domingo para resetear tu espacio.", "Escribe tus 'reglas de desorden' — lo que ya no permitirás en tu espacio."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "Para de Pensar: 30 Días de Acción Imperfecta",
      insight: "Estás usando el pensamiento como una sofisticada herramienta de procrastinación. El perfeccionismo es un escudo que te impide entrar al campo de juego.",
      hypothesis: "Al forzar acciones imperfectas e inmediatas en micro-decisiones, la vía neural de la 'parálisis por análisis' comenzará a debilitarse.",
      missions: [
        { week: 1, theme: "Velocidad", actions: ["Toma tu próxima decisión menor (qué comer, qué ponerte) en menos de 60 segundos.", "Envía un correo con un error tipográfico deliberado e inofensivo.", "Empieza una tarea que has evitado durante solo 2 minutos. Luego puedes parar.", "Elige una película en 3 minutos, o no veas nada.", "Escribe intencionalmente una 'mala' idea.", "Responde un mensaje de inmediato en lugar de dejarlo sin leer para 'pensarlo'.", "Deja una pequeña tarea visiblemente sin terminar a propósito."] },
        { week: 2, theme: "Confianza", actions: ["Da un paseo sin planear la ruta.", "Compra algo (café o snack) sin revisar las reseñas.", "Haz una tarea doméstica de una manera completamente diferente y más rápida.", "Si un pensamiento empieza con '¿Y si...?', di '¿Y qué?' en voz alta.", "Descarta un borrador y empieza de cero sin analizar demasiado.", "Confía en tu primer instinto en una decisión hoy, sin dudar.", "Acepta un error menor de hoy sin disculparte en exceso."] },
        { week: 3, theme: "Soltar", actions: ["Identifica algo que no puedes controlar hoy y literalmente encógete de hombros.", "Cancela suscripción a 3 boletines que te dan 'sobrecarga de información'.", "Haz algo creativo 5 minutos sabiendo que quedará imperfecto.", "Cuando alguien pida tu opinión, da la respuesta más simple y directa.", "Tira un objeto físico que has estado 'guardando por si acaso'.", "Para a mitad de una tarea y cámbiala por otra durante 10 minutos.", "Perdónate rápidamente por una pérdida momentánea de concentración."] },
        { week: 4, theme: "Impulso", actions: ["Haz una 'lista de cosas hechas' de lo que terminaste hoy, aunque sea imperfecto.", "Comprométete con un plan para el fin de semana ahora mismo, sin investigar demasiado.", "Publica o comparte algo que consideras 'solo 80% listo'.", "Cuando te atrapes rumiando, haz 10 saltos de tijera de inmediato.", "Pide a otra persona que decida por ti hoy (cena, película).", "Reflexiona sobre un momento en que una decisión rápida resultó bien.", "Escribe tu nueva regla para tomar decisiones de bajo riesgo."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "La Rutina Ancla: Dueño de tu Mañana",
      insight: "No necesitas un 'miracle morning' a las 5am. Necesitas ganar los primeros 10 minutos antes de que tu cerebro entregue el control a la ansiedad, las obligaciones o una pantalla brillante.",
      hypothesis: "Al proteger consistentemente los primeros momentos de la mañana con comportamientos intencionales sin pantalla, desarrollarás una sensación de control y calma que perdura todo el día.",
      missions: [
        { week: 1, theme: "Fundamento", actions: ["Bebe un vaso de agua antes de mirar cualquier pantalla esta mañana.", "Haz la cama inmediatamente después de levantarte, sin excepciones.", "Abre una ventana o sal afuera 60 segundos a respirar aire fresco.", "No revises el teléfono hasta llevar despierto al menos 10 minutos.", "Antes de salir de tu habitación, di en voz alta una cosa que esperas hoy.", "Prepara tu café, té o desayuno despacio y sin multitarea.", "Comprométete con tu ancla matutina sin negociar durante 7 días seguidos."] },
        { week: 2, theme: "Intención", actions: ["Escribe una frase en un diario al despertar — solo una.", "Establece una única 'tarea más importante' para hoy antes de abrir mensajes.", "Lee un párrafo de un libro (no noticias) antes de que empiece tu día.", "Siéntate tranquilamente con tu café 2 minutos antes de cualquier conversación.", "Piensa en una persona que aprecias e imagina decírselo.", "Revisa ayer: una cosa que salió bien y una a hacer diferente.", "Elige tu 'palabra ancla' para la semana — un valor que quieres encarnar."] },
        { week: 3, theme: "Cuerpo", actions: ["Haz 10 repeticiones de cualquier movimiento corporal dentro de 2 minutos de despertar.", "Ducha un poco más fría — termina con 15 segundos de agua fría.", "Estira un grupo muscular tenso 60 segundos antes de hablar con nadie.", "Párate en luz natural 2 minutos al despertar (al aire libre o junto a una ventana).", "Toma 5 respiraciones lentas con ojos cerrados antes de coger el teléfono.", "Haz una tarea física con atención completa y cero división mental.", "Camina o muévete suavemente antes de consumir cualquier medio hoy."] },
        { week: 4, theme: "Flujo", actions: ["Realiza toda tu secuencia ancla hoy sin ningún teléfono presente.", "Identifica qué elemento de tu rutina te da más energía.", "Acorta o simplifica cualquier paso de la rutina que se sienta como una carga.", "Diseña el hábito nocturno que hace que el ancla de mañana sea fácil.", "Realiza tu rutina aunque vayas tarde — menos tiempo, no sin rutina.", "Reflexiona: ¿cómo ha cambiado la calidad de tus mañanas en 30 días?", "Escribe tu 'Ancla Matutina' final — 3 primeros actos innegociables de la mañana."] }
      ]
    }
  },
  zh: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "屏蔽噪音：夺回你的注意力",
      insight: "你不是失去了专注力，而是你的注意力正被成千上万个微小的数字干扰偷走。你的大脑渴望的是安静，而不是更多内容。",
      hypothesis: "在你和屏幕之间引入有意识的微小摩擦，你将重新获得30%的日常大脑空间，并感受到真实的当下感。",
      missions: [
        { week: 1, theme: "边界", actions: ["今天看任何屏幕之前，先喝一整杯水。", "关闭所有非人工推送通知（新闻、社交媒体、购物）。", "吃饭时把手机放在另一个房间。", "今晚将手机放在卧室外充电。", "将手机屏幕调成灰度模式保持2小时。", "今天上厕所时不要看手机。", "与人交谈时，将手机完全放在视线之外。"] },
        { week: 2, theme: "刻意", actions: ["收到通知后等3分钟再查看。", "删除一个你会无脑刷的应用。", "读一页纸质书或杂志。", "望向窗外2分钟，什么都不做。", "出门散步时，摘下耳机10分钟。", "发短信时手动输入，不用语音或预测表情包。", "工作时把手机调成勿扰模式持续一小时。"] },
        { week: 3, theme: "重校准", actions: ["手机留在家中（或深埋包里），出去散步15分钟。", "在纸上写下今天完成的三件事。", "今天排队等候时，就只是等。不看屏幕。", "不放音乐，安静整理一个桌面5分钟。", "和某人对话5分钟，不低头看屏幕。", "吃零食时，只专注于口感和味道。", "在完全的安静中伸展身体2分钟。"] },
        { week: 4, theme: "当下", actions: ["找出今天最大的数字干扰源，物理地远离它。", "做家务时关掉电视或背景视频。", "不借助冥想app，自己观察呼吸10分钟。", "手写一张短便条给某人（或给自己）。", "今天用心'拍一张照'，而不是掏出手机。", "回顾一下这周睡眠质量的变化。", "将家里某个角落永久设为'无屏幕区'。"] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "堵住漏洞：微小边界",
      insight: "倦怠并不总是因为做太多，往往是因为做了太少真正滋养自己的事。你的能量桶里有微小的漏洞。",
      hypothesis: "通过每天1分钟的情感和体力边界来封堵能量漏洞，你的基础活力将自然恢复。",
      missions: [
        { week: 1, theme: "暂停", actions: ["设置1分钟的计时器，闭上眼睛休息。", "别急着说'好'，改说'让我看一下我的日程'。", "只喝一杯茶或咖啡，什么都不同时做。", "打开邮箱前，深呼吸3次。", "今天找一件不紧急的事，刻意推迟到明天。", "现在调整姿势，让自己舒适10%。", "放松下颌，让肩膀自然下沉30秒。"] },
        { week: 2, theme: "断开", actions: ["比平时提前30分钟关闭工作通知。", "将一个消耗你精力的群聊静音。", "毫无目的地出去走走5分钟。", "本周取消或拒绝一个小承诺。", "听一首让你感到怀念和安心的歌。", "用你最喜欢的温度好好洗个澡。", "花5分钟什么都不做（不读书，不看视频）。"] },
        { week: 3, theme: "充电", actions: ["今晚比平时早15分钟上床睡觉。", "慢慢吃你最喜欢的食物，不要有罪恶感。", "穿上你最舒适的那件衣服。", "写下今天你成功避免做的一件事。", "大声称赞自己完成了一项基本的日常任务。", "翻出一张你真正快乐时的老照片，看一看。", "以50%的努力完成一项任务，而不是平时的100%。"] },
        { week: 4, theme: "边界", actions: ["今天对某件小事说'不'。", "委托或寻求帮助完成一件小事。", "找出一个'能量吸血鬼'习惯，暂停24小时。", "今天建立一个物理边界（比如关上门、戴上耳机）。", "拒绝解释或辩护你今天做出的一个个人选择。", "承认自己的疲惫，不要立刻试图'修复'它。", "写下你下个月的核心边界原则。"] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "无聊解毒：在平凡中发现魔法",
      insight: "你没有失去感受快乐的能力——只是你的多巴胺阈值被超高刺激的内容劫持了。真正的乐趣还在那里，在噪音之下静静等待。",
      hypothesis: "通过30天刻意减少高多巴胺触发因素，你的大脑将下调其过度刺激的基线，让普通的时刻再次变得生动而有意义。",
      missions: [
        { week: 1, theme: "觉察", actions: ["注意今天第一次因无聊而拿起手机的时刻，记录下来。", "刷完短视频后，检查一下：你感到充实还是空洞？", "完整地吃一顿饭，不看任何屏幕或娱乐内容。", "找出你的3大即时快感来源，写下来。", "不戴耳机在外面走5分钟。", "安静坐2分钟，观察是否有填补空间的冲动。", "把一次刷屏时间替换为同等时长地望向窗外。"] },
        { week: 2, theme: "摩擦", actions: ["删除一个短视频应用，坚持7天。", "看娱乐内容前等5分钟，看冲动会不会消退。", "做10分钟'无聊'的事：叠衣服、慢慢洗碗。", "和某人聊10分钟，全程不看手机。", "读一本纸质书或杂志，哪怕只读一小会儿。", "比平时更缓慢、更专注地做饭或备餐。", "感到无聊时，先与无聊共处3分钟再行动。"] },
        { week: 3, theme: "品味", actions: ["喝早晨饮料时放慢速度，只专注于它的味道和温度。", "走到室外，注意周围世界的3个具体感官细节。", "完整地听完一首歌，不做其他任何事。", "闭上眼睛，吃一口食物，感受它全部的复杂性。", "花5分钟观察你所在空间里自然光的变化。", "写下今天让生活更轻松或更愉快的一件小事。", "双手捧着一杯热饮，静静地呼吸1分钟。"] },
        { week: 4, theme: "重塑", actions: ["找一项带来安静满足感的模拟活动（拼图、素描、写日记）。", "用双手做10分钟创意活动。", "找一种你喜欢的'慢媒体'（播客、长文章、有声书）。", "在自然环境中待10分钟，没有任何目的。", "列出智能手机出现之前，童年时让你快乐的事情。", "回顾这周有哪2个普通时刻让你感到奇妙。", "设计一个个人的低刺激'快速解法'，用于想要兴奋时。"] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "清除杂乱：30天换来轻盈的心",
      insight: "你空间里的每件物品都在向你的注意力提出微小要求。你的环境要么是平静的来源，要么是背景压力的来源——没有中立。",
      hypothesis: "通过系统地清除环境中的物理和数字噪音，你将体验到可感知的心理摩擦减少和意想不到的清晰感。",
      missions: [
        { week: 1, theme: "表面", actions: ["清除一个可见表面（桌子、架子）上所有不该在那里的东西。", "扔掉或捐出3件3个月没碰过的物品。", "整理手机主屏幕：删除本周没用过的所有应用。", "把包或背包完全清空，只放回真正需要的东西。", "把所有'临时'放错地方超过一周的物品归位。", "擦拭最让你烦恼的那个表面，保持整洁72小时。", "用'2分钟原则'：如果收纳不超过2分钟，现在就做。"] },
        { week: 2, theme: "数字", actions: ["清理或归档收件箱中1周以上的所有邮件。", "取消订阅3个你从不阅读的邮件通讯或促销。", "从相册中删除20张重复或模糊的照片。", "删除30天内未打开过的应用。", "清理桌面或书签中那些'万一要用'的东西。", "清理下载文件夹：删除2周以上的文件。", "把手机或电脑壁纸换成干净、简约的图案。"] },
        { week: 3, theme: "放手", actions: ["捐出或扔掉一件你'以防万一'存着的物品。", "取关5个消耗而非激励你的社交账号。", "清理一个你一直在回避的抽屉或收纳空间。", "取消一个不用但一直续费的订阅。", "归还或处理一件一直拖着没处理的借来物品。", "写下3个你想结束或重新协商的承诺或义务。", "对一个你不真正想做的请求说'不'。"] },
        { week: 4, theme: "系统", actions: ["为5件总是找不到的物品创建固定'家'。", "建立每周5分钟的表面重置习惯。", "设立家规：任何新物品'进一件，出一件'。", "找出家里产生杂乱最多的区域并想出解决方案。", "建立简单的数字消息分类系统。", "计划每周日15分钟重置你的空间。", "写下你的个人'整洁规则'——不再允许进入你空间的东西。"] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "停止过度思考：30天不完美行动",
      insight: "你正在把'思考'当作高度精密的拖延工具。完美主义是一块盾牌，它阻止你真正踏入竞技场。",
      hypothesis: "通过在微小决策上强迫自己采取不完美的即时行动，'分析瘫痪'的神经回路将开始弱化。",
      missions: [
        { week: 1, theme: "速度", actions: ["下一个小决定（吃什么、穿什么）在60秒内做出。", "发一封故意有一个无害错别字的邮件或消息。", "开始一件你一直回避的事，只做2分钟。然后可以停。", "3分钟内选好要看的电影/剧，否则就不看。", "故意写一个'坏'主意。", "立刻回复一条消息，而不是留着'想想再回'。", "故意留一件小事明显地没做完。"] },
        { week: 2, theme: "信任", actions: ["不规划路线，出门就走，随便逛逛。", "买东西（如咖啡或零食）不查评论。", "用一种完全不同、更快的方式做一件家务。", "如果脑子里出现'万一……'，就大声说'那又怎样？'", "扔掉一份草稿，重新开始，不要过度分析。", "今天的一个选择，相信第一直觉，不再犹豫。", "对今天犯的一个小错误，接受它，不要过度道歉。"] },
        { week: 3, theme: "释放", actions: ["找一件今天无法控制的事，然后真的耸耸肩。", "取消订阅3个造成'信息过载'的通讯。", "做5分钟创意活动（画画、写作），知道结果会很糟糕。", "有人征求意见时，给出最简单、最直接的回答。", "扔掉一件你一直'留着以防万一'的实物。", "任务做到一半时，切换去做别的10分钟。", "迅速原谅自己一时的走神或分心。"] },
        { week: 4, theme: "动力", actions: ["列一份'已完成清单'，记下今天完成的事，哪怕不完美。", "现在就确定周末计划，不过度调研。", "发布或分享你认为'只有80%准备好'的东西。", "发现自己在反刍时，立刻做10个开合跳或伸展。", "今天让别人替你做一个决定（吃什么、看什么）。", "回想一次你快速决策却结果很好的经历。", "写下你做低风险决策的新原则。"] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "晨间锚点：做自己早晨的主人",
      insight: "你不需要凌晨5点的'奇迹晨间'。你只需要在大脑把控制权交给焦虑、义务或屏幕之前，先赢得早晨最初的10分钟。",
      hypothesis: "坚持用有意识的、无屏幕行为保护早晨的第一刻，你将养成一种贯穿全天的掌控感与平静感。",
      missions: [
        { week: 1, theme: "基础", actions: ["今天早晨，看任何屏幕之前先喝一整杯水。", "起床后立刻叠好被子，没有例外。", "打开窗户或走到室外，呼吸60秒新鲜空气。", "至少清醒10分钟后再看手机。", "离开房间前，大声说出今天一件你期待的事。", "慢慢准备咖啡、茶或早餐，不同时做其他事。", "连续7天毫不妥协地执行你的晨间锚点。"] },
        { week: 2, theme: "意图", actions: ["醒来那一刻，在日记本上写一句话——就一句。", "打开任何消息前，设定今天'最重要的一件事'。", "正式开始一天前，读一段非新闻、非社交的书。", "对话之前，静静坐着喝咖啡2分钟。", "想一个你感激的人，想象告诉他们。", "回顾昨天：一件进展顺利的事，一件要改进的事。", "选定本周'锚点词'——你想体现的一种价值或特质。"] },
        { week: 3, theme: "身体", actions: ["起床2分钟内做10次任意肢体动作。", "洗澡时水温比平时稍凉，最后15秒用冷水。", "开口说话前先伸展一处紧绷肌肉60秒。", "醒来后在自然光下站2分钟（室外或窗边）。", "拿手机前，闭眼做5次深缓呼吸。", "做一件事时全身心专注，不分心胡思乱想。", "今天消费任何媒体之前，先走路或轻微运动。"] },
        { week: 4, theme: "流动", actions: ["今天完成全套锚点程序，手机不在场。", "找出晨间例程中最给你能量的环节。", "简化或缩短任何感觉像负担的例程步骤。", "设计让明天锚点变得轻松的'前一晚仪式'。", "即使晚了也执行例程——时间少，但不缺席。", "反思：这30天你的早晨质量发生了怎样的变化？", "写下你最终的'晨间锚点'——3个不可妥协的第一步。"] }
      ]
    }
  },
  ja: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "ノイズをミュート：注意力を取り戻す30日",
      insight: "集中力を失ったのではありません。無数の小さなデジタルの割り込みが、あなたの注意を盗んでいるだけです。あなたの脳が求めているのはさらなるコンテンツではなく、静寂です。",
      hypothesis: "あなたとスクリーンの間に意図的な小さな摩擦を作ることで、日々の脳のキャパシティの30%を取り戻し、驚くほど今この瞬間に存在できるようになります。",
      missions: [
        { week: 1, theme: "境界線", actions: ["今日はどんな画面を見る前にも、水を一杯飲む。", "人以外からのプッシュ通知（ニュース、SNS、ショッピング）を全てオフにする。", "食事中はスマホを別の部屋に置く。", "今夜はスマホを寝室の外で充電する。", "次の2時間、スマホ画面をグレースケールモードにする。", "今日はトイレ中にスマホを見ない。", "誰かと会話中は、スマホを完全に視界の外に置く。"] },
        { week: 2, theme: "意図的に", actions: ["通知が来ても、3分待ってから確認する。", "無意識にスクロールしがちなアプリを1つ削除する。", "紙の本や雑誌を1ページ読む。", "2分間、何もしないで窓の外を眺める。", "外を歩くとき、10分間イヤホンを外す。", "テキストメッセージは音声入力や絵文字予測を使わず、自分でタイプする。", "作業中1時間、スマホを「おやすみモード」にする。"] },
        { week: 3, theme: "再調整", actions: ["スマホを家に置いて（またはカバンの奥深くに入れて）15分散歩する。", "今日達成した3つのことを紙に書き出す。", "待ち列に並ぶとき、ただ待つ。画面は見ない。", "音楽なしで5分、机などの表面を片付ける。", "誰かと5分間会話する。その間スマホを見るために目を離さない。", "間食をするとき、食感と味だけに注意を向ける。", "完全な沈黙の中で2分間ストレッチする。"] },
        { week: 4, theme: "今ここに", actions: ["今日最大のデジタルの誘発要因を特定し、物理的に距離を置く。", "家事をするときはテレビやバックグラウンド動画を消す。", "ガイドアプリなしで10分間、自分の呼吸を観察する。", "誰か（または自分自身）に短いメモを手書きする。", "今日は「心のカメラ」で写真を撮る。スマホのカメラは使わない。", "今週、自分の睡眠の質がどう変わったか振り返る。", "家の一角を永久的な「画面禁止ゾーン」として指定する。"] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "漏れを塞ぐ：小さな境界線の30日",
      insight: "燃え尽き症候群は常に「やりすぎ」から来るのではありません。本当に自分を満たしてくれることを「少なすぎるほどしかしていない」ことから来ることが多いのです。エネルギーのバケツに小さな穴が開いています。",
      hypothesis: "1日1分の感情的・身体的エネルギーの漏れを塞ぐ境界線を設けることで、底をついていた活力が自然と回復します。",
      missions: [
        { week: 1, theme: "一息つく", actions: ["タイマーを1分にセットして、ただ目を閉じる。", "即座に「はい」と言う代わりに、「スケジュールを確認させてください」と言う。", "お茶やコーヒーを、他のことを一切せずにだけ飲む。", "メール受信箱を開く前に、深くゆっくり3回深呼吸する。", "今日の緊急でないタスクを1つ選び、意図的に明日に回す。", "今すぐ姿勢を10%だけ楽にする。", "30秒間、顎の力を抜いて、肩を落とす。"] },
        { week: 2, theme: "切り離す", actions: ["いつもより30分早く仕事の通知をオフにする。", "エネルギーを消耗させるグループチャットをミュートする。", "目的地も目的もなく、5分間散歩に出る。", "今週、小さなコミットメントを1つキャンセルまたは断る。", "懐かしく安らぎを感じる曲を1曲聴く。", "自分が好きな温度でシャワーを浴びる。", "5分間、何もしない（読書も視聴もしない）時間を持つ。"] },
        { week: 3, theme: "充電する", actions: ["今夜はいつもより15分早く就寝する。", "今日は罪悪感なく、自分の好きな食べ物をゆっくり食べる。", "自分が持っている中で最も楽な服を着る。", "今日、やらずに済んだことを1つ書き出す。", "基本的な日課を完了させた自分を声に出して褒める。", "心から幸せだと感じた頃の古い写真を1枚振り返る。", "あるタスクをいつもの100%ではなく、50%の力でやってみる。"] },
        { week: 4, theme: "境界線", actions: ["今日、小さなことに「いいえ」と言う。", "小さなタスクを誰かに任せるか、助けを求める。", "「エネルギーを吸い取る」習慣を1つ特定し、24時間休止する。", "今日は物理的な境界線を作る（ドアを閉める、イヤホンをつけるなど）。", "今日した個人的な選択について、説明や正当化を拒否する。", "自分の疲れを、すぐに「直そう」とせずに認める。", "来月のための自分の核心的な境界線ルールを書き出す。"] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "退屈デトックス：日常に魔法を見つける30日",
      insight: "喜びを感じる能力を失ったのではありません。超高刺激のコンテンツにドーパミンの閾値が乗っ取られているだけです。本当の喜びはまだそこにあります。ノイズの下で、静かに待っています。",
      hypothesis: "30日間、高ドーパミンのトリガーを意図的に減らすことで、脳の過剰刺激されたベースラインがリセットされ、平凡な瞬間が再び鮮やかで意味深いものに感じられるようになります。",
      missions: [
        { week: 1, theme: "気づき", actions: ["今日、退屈でスマホに手を伸ばした最初の瞬間に気づき、書き留める。", "短い動画を見た後、充実感があるか、それとも空虚な気持ちかを確認する。", "スクリーンも娯楽も一切なしで、食事を1回きちんと食べる。", "即座の快楽をもたらすトップ3のソースを特定し、書き出す。", "イヤホンなしで5分外を歩く。", "2分間静かに座り、空間を埋めたいという衝動を観察する。", "スクロールセッション1回分を、同じ時間だけ窓の外を眺めることに置き換える。"] },
        { week: 2, theme: "摩擦を作る", actions: ["ショート動画アプリを1つ、7日間スマホから削除する。", "エンタメを見る前に5分待って、衝動が収まるか見てみる。", "洗濯物をたたむ、食器をゆっくり洗うなど「退屈な」活動を10分する。", "スマホを一切見ずに誰かと10分会話する。", "紙の本や雑誌を、どんなに短くても「一度座って」読む。", "いつもよりゆっくり、丁寧に料理や食事の準備をする。", "退屈を感じたら、何かする前に3分間その退屈と共に座る。"] },
        { week: 3, theme: "味わう", actions: ["朝の飲み物をゆっくり飲み、その風味と温かさだけに集中する。", "外に出て、周囲の世界の具体的な3つの感覚的な細部を見つける。", "1曲を何もしながらではなく、最初から最後まで全部聴く。", "目を閉じて食べ物を一口食べ、その全ての複雑さに気づく。", "5分間、環境の中で自然光が変化するのを観察する。", "今日を少し楽に、または楽しくしてくれた小さなことを1つ書き留める。", "温かい飲み物を両手で包み込み、ただ1分間呼吸する。"] },
        { week: 4, theme: "リワイヤリング", actions: ["静かな満足感をもたらすアナログの活動を見つける（パズル、スケッチ、日記など）。", "10分間、手で何かクリエイティブなことをする。", "楽しめる「スローメディア」を特定する（ポッドキャスト、長文記事、オーディオブック）。", "目的なしに自然の環境で10分過ごす。", "スマートフォンが存在する前、子供の頃に喜びをもたらしたものをリストアップする。", "今週、魔法のように感じた平凡な瞬間を2つ振り返る。", "興奮を渇望するときのための、個人的な低刺激の「クイックフィックス」を設計する。"] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "散らかりを一掃：心を軽くする30日",
      insight: "あなたの空間にある全てのものが、あなたの注意に小さな要求をしています。あなたの環境は落ち着きの源か、潜在的なストレスの源のどちらかです。中立はありません。",
      hypothesis: "環境から物理的・デジタルなノイズを体系的に取り除くことで、精神的な摩擦の目に見える減少と、気づいていなかった明晰さを体験します。",
      missions: [
        { week: 1, theme: "表面", actions: ["見える表面（机、テーブル、棚）から、そこにあるべきでないものを全て取り除く。", "過去3ヶ月で触れなかったものを3つ捨てるか寄付する。", "スマホのホーム画面を整理：今週使っていないアプリを全て削除する。", "バッグをすべて空にして、実際に必要なものだけを戻す。", "1週間以上「一時的に」置きっぱなしになっているものを全て片付ける。", "最も気になる表面を拭いて、72時間きれいに保つ。", "「2分ルール」を使う：片付けるのに2分未満かかるなら、今すぐやる。"] },
        { week: 2, theme: "デジタル", actions: ["受信トレイで1週間以上前のメールを全て削除またはアーカイブする。", "全く読まないメールマガジンやプロモーション3つの購読を解除する。", "カメラロールから重複または不鮮明な写真を20枚削除する。", "過去30日で開いていないアプリを削除する。", "「とりあえず」保存したデスクトップやブックマークを整理する。", "ダウンロードフォルダを整理：2週間以上前のものを削除する。", "スマホまたはPCの壁紙をシンプルでミニマルなものに変える。"] },
        { week: 3, theme: "手放す", actions: ["「念のため」ととっておいているものを1つ寄付または捨てる。", "励ましではなく消耗させるSNSアカウントを5つアンフォローする。", "ずっと避けていた引き出しや収納スペースを1つ整理する。", "使っていないのに更新し続けているサブスクリプションをキャンセルする。", "借りたものや、ずっと処理を先延ばしにしていたものを返却または処分する。", "終わらせるか再交渉したいコミットメントや義務を3つ書き出す。", "本当はやりたくないリクエストに1つ「いいえ」と言う。"] },
        { week: 4, theme: "システム", actions: ["いつも置き場所がわからなくなる5つのアイテムに専用の「家」を作る。", "毎週5分の表面リセット習慣を作る。", "家のルールを設ける：新しいものは「1つ入れたら1つ出す」。", "自宅で最も散らかりを生む場所を特定し、解決策を設計する。", "デジタルメッセージのためのシンプルな振り分けシステムを作る。", "毎週日曜に15分、空間をリセットする習慣をスケジュールに入れる。", "自分の「散らかり禁止ルール」を書く：もう自分のスペースに入れないものを決める。"] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "考えすぎをやめる：不完全な行動の30日",
      insight: "あなたは「考えること」を高度な先延ばしの道具として使っています。完璧主義は、あなたが実際に舞台に立つことを妨げている盾です。",
      hypothesis: "些細な意思決定で不完全で即座の行動を強制することで、「分析麻痺」の神経回路が弱まり始めます。",
      missions: [
        { week: 1, theme: "スピード", actions: ["次の些細な決断（何を食べるか、何を着るか）を60秒以内に行う。", "意図的なミス（無害なタイポ）入りのメールまたはメッセージを送る。", "ずっと避けてきたタスクをたったの2分だけ始める。そのあとは止めていい。", "映画やドラマを3分以内に選ぶ、そうでなければ何も見ない。", "意図的に「悪い」アイデアを書き留める。", "「後で考えよう」と未읽で置いていたメッセージにすぐ返信する。", "小さなタスクをわざと目に見える形で未完了のまま放置する。"] },
        { week: 2, theme: "信頼", actions: ["ルートを計画せずに散歩に出かける。", "レビューをチェックせずに何か（コーヒー、スナックなど）を買う。", "いつもとは全く別の、より速いやり方で家事を1つやってみる。", "「もし…だったら」という考えが浮かんだら、声に出して「で、どうした？」と言う。", "草稿を捨てて、過分析せずに白紙から始める。", "今日の1つの選択について、第一感を信じて二度と迷わない。", "今日した些細なミスを、過剰に謝らずに受け入れる。"] },
        { week: 3, theme: "手放す", actions: ["今日コントロールできないことを1つ特定し、文字通り両肩をすくめる。", "「情報過多」をもたらすニュースレターの購読を3つ解除する。", "絵を描く、文章を書くなど、5分間クリエイティブな何かをする（結果が醜くていい）。", "意見を求められたら、最もシンプルで直接的な答えを出す。", "「とっておいた」物理的なガラクタを捨てる。", "タスクの途中で止まり、10分間別のことに切り替える。", "一瞬の集中力の乱れを素早く自分に許す。"] },
        { week: 4, theme: "モメンタム", actions: ["今日終わらせたもの（不完全でもいい）の「やり遂げたリスト」を作る。", "週末の計画を、過度に調べることなく今すぐ決める。", "「80%の完成度」と思っているものを公開または共有する。", "ぐるぐる考えていることに気づいたら、すぐにジャンプスクワットかストレッチを10回する。", "今日の選択（夕食、映画）を誰かに任せる。", "素早い決断がうまくいった体験を1つ振り返る。", "低リスクの意思決定のための新しいルールを書き出す。"] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "アンカー・ルーティン：自分の朝を取り戻す",
      insight: "午前5時の「奇跡の朝」は必要ありません。脳が不安や義務感、または光る画面にコントロールを渡す前に、最初の10分間を勝ち取るだけでいい。",
      hypothesis: "朝の最初の瞬間を、意図的で画面のない行動で一貫して守ることで、一日を通して持続する落ち着きとコントロールの感覚が身につきます。",
      missions: [
        { week: 1, theme: "土台", actions: ["今朝はどんな画面も見る前に、水を一杯飲む。", "起き上がってすぐに、例外なくベッドを整える。", "窓を開けるか外に出て、60秒間新鮮な空気を吸う。", "目覚めてから少なくとも10分が経つまでスマホを見ない。", "部屋を出る前に、今日楽しみにしていることを1つ声に出して言う。", "コーヒー、お茶、または朝食をゆっくり、何もせずに準備する。", "7日間連続で妥協せずに朝のアンカーを行うと決める。"] },
        { week: 2, theme: "意図", actions: ["目覚めた瞬間に、日記に1つだけセンテンスを書く。", "どんなメッセージも開く前に、今日「最も重要なタスク」を1つ設定する。", "一日を始める前に、ニュースでもSNSでもない本を1段落読む。", "誰とも会話する前に、コーヒーを持って2分間静かに座る。", "感謝している人を1人思い浮かべ、その人に伝えることを想像する。", "昨日を振り返る：うまくいったこと1つ、次は違うやり方をすること1つ。", "今週の「アンカーワード」を選ぶ：体現したい価値観や資質。"] },
        { week: 3, theme: "身体", actions: ["目を覚ましてから2分以内に、どんな動作でもいいので10回行う。", "いつもより少し冷たいシャワーを浴びて、最後の15秒を冷水で締める。", "誰かに話しかける前に、凝っている筋肉群を60秒ストレッチする。", "起き上がってから自然光の中に（屋外か窓際で）2分間立つ。", "スマホを手に取る前に、目を閉じてゆっくりと5回深呼吸する。", "1つのことに、完全な身体的注意を払い、心が分散しないようにして行う。", "今日は何らかのメディアを消費する前に、歩くか軽く体を動かす。"] },
        { week: 4, theme: "フロー", actions: ["今日はスマホを一切持たずに、アンカーシーケンス全体を行う。", "朝のルーティンのどの要素が最も活力を与えてくれるかを特定する。", "負担に感じるルーティンのステップを短縮または簡略化する。", "明日のアンカーを楽にする「前夜の習慣」を設計する。", "遅れていても日課を行う：時間が少なくても、ゼロにはしない。", "振り返る：30日間で朝の質はどのように変わったか？", "最終的な「モーニングアンカー」を書く：交渉の余地のない最初の3つの行動。"] }
      ]
    }
  },
  hi: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "शोर को म्यूट करें: अपना ध्यान वापस पाएं",
      insight: "आप ध्यान नहीं खो रहे — आपका ध्यान हज़ारों छोटे-छोटे डिजिटल व्यवधानों द्वारा चुराया जा रहा है। आपका मस्तिष्क और अधिक सामग्री नहीं, बल्कि शांति चाहता है।",
      hypothesis: "आपके और आपकी स्क्रीन के बीच जानबूझकर छोटे-छोटे झंझट बनाने से आप अपनी दैनिक मानसिक क्षमता का 30% वापस पाएंगे।",
      missions: [
        { week: 1, theme: "सीमाएं", actions: ["आज किसी भी स्क्रीन देखने से पहले एक पूरा गिलास पानी पिएं।", "मानव नहीं, ऐसी सभी पुश सूचनाएं (समाचार, सोशल मीडिया, शॉपिंग) बंद करें।", "एक भोजन के दौरान अपना फोन दूसरे कमरे में रखें।", "आज रात अपने फोन को बेडरूम के बाहर चार्ज करें।", "अगले 2 घंटे अपनी स्क्रीन को ग्रेस्केल मोड पर सेट करें।", "आज बाथरूम में फोन नहीं देखना है।", "किसी से बात करते समय फोन को दृष्टि से पूरी तरह दूर रखें।"] },
        { week: 2, theme: "जानबूझकर", actions: ["नोटिफिकेशन आने के 3 मिनट बाद उसे चेक करें।", "बिना सोचे स्क्रॉल करने वाला एक ऐप डिलीट करें।", "किसी फिजिकल किताब या पत्रिका का एक पेज पढ़ें।", "बिना कुछ किए 2 मिनट खिड़की के बाहर देखें।", "बाहर चलते समय 10 मिनट के लिए ईयरफोन निकालें।", "टेक्स्ट मैसेज खुद टाइप करें, वॉइस या इमोटिकॉन का उपयोग न करें।", "काम के दौरान 1 घंटे के लिए फोन को 'डू नॉट डिस्टर्ब' पर रखें।"] },
        { week: 3, theme: "पुनः अंशांकन", actions: ["फोन घर पर छोड़कर 15 मिनट की सैर करें।", "आज आपने जो 3 काम किए उन्हें कागज पर लिखें।", "लाइन में इंतजार करते समय बस इंतजार करें। कोई स्क्रीन नहीं।", "बिना संगीत के 5 मिनट कोई सतह साफ करें।", "किसी से 5 मिनट बात करें — बीच में स्क्रीन न देखें।", "नाश्ता खाते समय केवल उसके स्वाद और बनावट पर ध्यान दें।", "पूर्ण मौन में 2 मिनट के लिए स्ट्रेच करें।"] },
        { week: 4, theme: "वर्तमान में", actions: ["आज अपना सबसे बड़ा डिजिटल ट्रिगर पहचानें और उससे दूर जाएं।", "घर के काम करते समय TV या बैकग्राउंड वीडियो बंद करें।", "किसी ऐप के बिना 10 मिनट अपनी सांस देखें।", "किसी को (या खुद को) हाथ से एक छोटी चिट्ठी लिखें।", "आज दिमाग से एक 'तस्वीर' लें — फोन कैमरे का नहीं।", "इस हफ्ते अपनी नींद कैसी रही, इस पर विचार करें।", "घर के किसी कोने को स्थायी 'स्क्रीन-फ्री जोन' घोषित करें।"] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "रिसाव बंद करें: माइक्रो-सीमाएं",
      insight: "बर्नआउट हमेशा बहुत अधिक काम करने से नहीं आता — अक्सर यह उन चीजों को कम करने से आता है जो वास्तव में आपको भरती हैं।",
      hypothesis: "प्रतिदिन 1 मिनट की भावनात्मक और शारीरिक ऊर्जा की सीमाएं बनाकर, आपकी आधारभूत जीवन शक्ति स्वाभाविक रूप से बहाल होगी।",
      missions: [
        { week: 1, theme: "रुकें", actions: ["1 मिनट का टाइमर सेट करें और बस आंखें बंद करें।", "तुरंत 'हाँ' कहने के बजाय, 'मुझे अपना शेड्यूल देखने दो' कहें।", "बिना कुछ और किए बस चाय या कॉफी पिएं।", "ईमेल इनबॉक्स खोलने से पहले 3 गहरी, धीमी सांसें लें।", "आज एक गैर-जरूरी काम को जानबूझकर कल के लिए टालें।", "अभी अपनी मुद्रा को 10% अधिक आरामदायक बनाएं।", "30 सेकंड के लिए जबड़े की मांसपेशियों को ढीला छोड़ें और कंधे गिराएं।"] },
        { week: 2, theme: "डिस्कनेक्ट", actions: ["सामान्य से 30 मिनट पहले काम की सूचनाएं बंद करें।", "ऊर्जा खत्म करने वाले ग्रुप चैट को म्यूट करें।", "बिना किसी गंतव्य के 5 मिनट टहलें।", "इस हफ्ते एक छोटी प्रतिबद्धता रद्द या अस्वीकार करें।", "कोई गाना सुनें जो आपको नॉस्टेल्जिक और सुरक्षित महसूस कराए।", "अपनी पसंदीदा तापमान पर शॉवर लें।", "5 मिनट बिल्कुल कुछ न करें।"] },
        { week: 3, theme: "रिचार्ज", actions: ["आज रात सामान्य से 15 मिनट पहले सोने जाएं।", "आज अपना पसंदीदा खाना धीरे-धीरे बिना अपराधबोध के खाएं।", "अपने सबसे आरामदायक कपड़े पहनें।", "आज जो नहीं करना पड़ा, वह लिखें।", "एक बुनियादी दैनिक कार्य पूरा करने के लिए खुद को जोर से सराहें।", "एक पुरानी तस्वीर देखें जब आप वास्तव में खुश थे।", "सामान्य 100% के बजाय 50% प्रयास से एक काम करें।"] },
        { week: 4, theme: "सीमाएं", actions: ["आज किसी छोटी चीज को 'नहीं' कहें।", "किसी छोटे काम को सौंपें या मदद मांगें।", "एक 'ऊर्जा पिशाच' आदत की पहचान करें और उसे 24 घंटे के लिए रोकें।", "आज एक भौतिक सीमा बनाएं (दरवाजा बंद करना, ईयरफोन लगाना)।", "आज किए गए व्यक्तिगत निर्णय को स्पष्ट करने से इनकार करें।", "थके होने को स्वीकार करें — तुरंत 'ठीक' करने की कोशिश न करें।", "अगले महीने के लिए अपना मूल सीमा नियम लिखें।"] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "बोरियत डिटॉक्स: सामान्य में जादू खोजें",
      insight: "आपने खुशी महसूस करने की क्षमता नहीं खोई है — आपकी डोपामाइन सीमा हाइपर-स्टिमुलेटिंग कंटेंट द्वारा हाईजैक कर ली गई है।",
      hypothesis: "30 दिनों तक उच्च-डोपामाइन ट्रिगर्स को जानबूझकर कम करने से, आपका मस्तिष्क अपना अतिउत्तेजित आधार स्तर कम करेगा और सामान्य क्षण फिर से जीवंत लगेंगे।",
      missions: [
        { week: 1, theme: "जागरूकता", actions: ["आज पहली बार जब बोरियत से फोन उठाएं, उस क्षण को नोट करें।", "शॉर्ट वीडियो देखने के बाद जांचें: ऊर्जावान या खाली महसूस हो रहे हैं?", "बिना किसी स्क्रीन या मनोरंजन के एक भोजन करें।", "अपने शीर्ष 3 तत्काल-आनंद स्रोत लिखें।", "बिना ईयरफोन के 5 मिनट बाहर चलें।", "2 मिनट चुपचाप बैठें और अंतरिक्ष भरने की इच्छा देखें।", "एक स्क्रॉल सत्र को उतने ही समय खिड़की से बाहर देखने से बदलें।"] },
        { week: 2, theme: "घर्षण", actions: ["7 दिनों के लिए फोन से एक शॉर्ट वीडियो ऐप हटाएं।", "मनोरंजन देखने से पहले 5 मिनट प्रतीक्षा करें।", "10 मिनट के लिए कोई 'उबाऊ' काम करें: कपड़े तह करना, बर्तन धोना।", "फोन देखे बिना किसी से 10 मिनट बात करें।", "एक भौतिक किताब या पत्रिका थोड़ी देर पढ़ें।", "सामान्य से अधिक धीरे और ध्यान से खाना बनाएं।", "बोर होने पर, कुछ करने से पहले 3 मिनट उसी में बैठें।"] },
        { week: 3, theme: "स्वाद लेना", actions: ["सुबह की पेय धीरे-धीरे केवल उसके स्वाद पर ध्यान केंद्रित करके पिएं।", "बाहर जाएं और आसपास की दुनिया के 3 विशिष्ट संवेदी विवरण नोट करें।", "बिना मल्टीटास्किंग के एक पूरा गाना सुनें।", "आंखें बंद करके खाने का एक निवाला लें और उसकी जटिलता महसूस करें।", "5 मिनट के लिए अपने वातावरण में प्राकृतिक प्रकाश को बदलते देखें।", "आज एक छोटी चीज लिखें जिसने दिन आसान बनाया।", "एक गर्म पेय दोनों हाथों से पकड़ें और 1 मिनट सांस लें।"] },
        { week: 4, theme: "री-वायरिंग", actions: ["एक एनालॉग गतिविधि खोजें जो शांत संतुष्टि देती हो (पहेली, स्केचिंग)।", "10 मिनट के लिए हाथों से कुछ रचनात्मक करें।", "एक 'स्लो मीडिया' विकल्प पहचानें (पॉडकास्ट, लंबा लेख, ऑडियोबुक)।", "बिना किसी एजेंडे के 10 मिनट प्रकृति में बिताएं।", "स्मार्टफोन से पहले बचपन में खुशी देने वाली चीजों की सूची बनाएं।", "इस हफ्ते जादुई लगे 2 सामान्य क्षणों पर विचार करें।", "उत्तेजना चाहने पर अपना व्यक्तिगत कम-उत्तेजना 'त्वरित समाधान' बनाएं।"] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "अव्यवस्था साफ करें: हल्के मन के लिए 30 दिन",
      insight: "आपके स्थान में हर वस्तु आपके ध्यान पर एक छोटी मांग कर रही है। आपका वातावरण शांति का स्रोत है या पृष्ठभूमि तनाव का — कोई तटस्थ नहीं है।",
      hypothesis: "अपने वातावरण से भौतिक और डिजिटल शोर को व्यवस्थित रूप से हटाने से, आप मानसिक घर्षण में उल्लेखनीय कमी अनुभव करेंगे।",
      missions: [
        { week: 1, theme: "सतह", actions: ["एक दृश्य सतह (डेस्क, टेबल) से सब कुछ हटाएं जो वहां नहीं होना चाहिए।", "3 महीने में न छुई गई 3 चीजें फेंकें या दान करें।", "फोन की होम स्क्रीन व्यवस्थित करें: इस सप्ताह न उपयोग किए ऐप्स हटाएं।", "बैग पूरी तरह खाली करें और केवल जरूरी चीजें वापस रखें।", "1 सप्ताह से अधिक 'अस्थायी रूप से' रखी वस्तुओं को उनकी जगह पर रखें।", "सबसे परेशान करने वाली सतह साफ करें और 72 घंटे साफ रखें।", "'2 मिनट नियम': यदि 2 मिनट से कम लगता है, अभी करें।"] },
        { week: 2, theme: "डिजिटल", actions: ["इनबॉक्स में 1 सप्ताह से पुराने ईमेल हटाएं या संग्रहीत करें।", "कभी न पढ़े जाने वाले 3 ईमेल न्यूज़लेटर से सदस्यता रद्द करें।", "गैलरी से 20 डुप्लीकेट या धुंधली तस्वीरें हटाएं।", "30 दिनों में न खोले गए ऐप्स हटाएं।", "डेस्कटॉप या बुकमार्क से 'शायद जरूरत पड़े' वाली चीजें साफ करें।", "डाउनलोड फोल्डर साफ करें: 2 सप्ताह से पुरानी फाइलें हटाएं।", "फोन या कंप्यूटर वॉलपेपर को कुछ साफ और न्यूनतम में बदलें।"] },
        { week: 3, theme: "छोड़ना", actions: ["'बस कभी काम आएगी' सोचकर रखी एक चीज दान करें या फेंकें।", "प्रेरित करने के बजाय थकाने वाले 5 सोशल मीडिया अकाउंट अनफॉलो करें।", "एक दराज या कंटेनर साफ करें जिसे आप टाल रहे थे।", "बिना उपयोग किए नवीनीकृत होती एक सदस्यता रद्द करें।", "किसी उधार ली गई वस्तु को वापस करें या निपटाएं।", "3 प्रतिबद्धताएं लिखें जिन्हें आप समाप्त या पुनर्वार्ता करना चाहते हैं।", "एक ऐसे अनुरोध को 'नहीं' कहें जो आप नहीं करना चाहते।"] },
        { week: 4, theme: "सिस्टम", actions: ["5 वस्तुओं के लिए नामित 'घर' बनाएं जो हमेशा गुम होती हैं।", "साप्ताहिक 5 मिनट की सतह रीसेट आदत बनाएं।", "नियम बनाएं: हर नई वस्तु के लिए 'एक अंदर, एक बाहर'।", "घर में सबसे अधिक अव्यवस्था उत्पन्न करने वाला क्षेत्र पहचानें और ठीक करें।", "डिजिटल संदेशों के लिए सरल वर्गीकरण प्रणाली बनाएं।", "रविवार को 15 मिनट का स्थान रीसेट शेड्यूल करें।", "अपने 'अव्यवस्था नियम' लिखें — जो अब जगह में नहीं होगा।"] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "अत्यधिक सोचना बंद करें: अपूर्ण कार्य के 30 दिन",
      insight: "आप 'सोचने' को एक परिष्कृत टालमटोल उपकरण के रूप में उपयोग कर रहे हैं। पूर्णतावाद एक ढाल है जो आपको मैदान में उतरने से रोक रही है।",
      hypothesis: "माइक्रो-निर्णयों पर अपूर्ण और तत्काल कार्रवाई को मजबूर करने से, 'विश्लेषण पक्षाघात' का तंत्रिका मार्ग कमजोर होने लगेगा।",
      missions: [
        { week: 1, theme: "गति", actions: ["अगला छोटा निर्णय (क्या खाना है, क्या पहनना है) 60 सेकंड में लें।", "एक जानबूझकर हानिरहित टाइपो के साथ ईमेल या संदेश भेजें।", "जो काम टाल रहे हैं उसे बस 2 मिनट करें। फिर रुक सकते हैं।", "3 मिनट में फिल्म/सीरीज चुनें, नहीं तो कुछ न देखें।", "जानबूझकर एक 'बुरा' विचार लिखें।", "जो संदेश 'सोचकर जवाब देंगे' सोचकर छोड़ा है, उसे अभी जवाब दें।", "एक छोटा काम जानबूझकर अधूरा छोड़ दें।"] },
        { week: 2, theme: "भरोसा", actions: ["रास्ता तय किए बिना सैर पर जाएं।", "समीक्षाएं देखे बिना कुछ (जैसे कॉफी) खरीदें।", "एक काम को पूरी तरह अलग और तेज तरीके से करें।", "अगर 'क्या होगा अगर...' विचार शुरू हो, जोर से बोलें 'तो क्या?'", "ड्राफ्ट फेंकें और बिना विश्लेषण के नए सिरे से शुरू करें।", "आज के एक निर्णय में पहली वृत्ति पर भरोसा करें।", "आज की एक छोटी गलती को अत्यधिक माफी के बिना स्वीकार करें।"] },
        { week: 3, theme: "मुक्ति", actions: ["आज जो नियंत्रित नहीं कर सकते उसे पहचानें और कंधे उचकाएं।", "3 न्यूज़लेटर से सदस्यता रद्द करें जो 'जानकारी ओवरलोड' देते हैं।", "5 मिनट कुछ रचनात्मक करें यह जानते हुए कि यह बुरा होगा।", "राय मांगी जाए तो सबसे सरल, सीधा जवाब दें।", "एक भौतिक वस्तु फेंकें जो 'बस काम आएगी' सोचकर रखी थी।", "काम के बीच रुकें और 10 मिनट के लिए कुछ और करें।", "ध्यान के एक क्षणिक लड़खड़ाहट के लिए खुद को जल्दी माफ करें।"] },
        { week: 4, theme: "गति", actions: ["आज जो पूरा किया उसकी 'हो गया' सूची बनाएं, चाहे अपूर्ण हो।", "बिना अधिक शोध के अभी सप्ताहांत की योजना बनाएं।", "'केवल 80% तैयार' मानी चीज प्रकाशित या साझा करें।", "जब खुद को दोबारा सोचते पाएं, तुरंत 10 जंपिंग जैक करें।", "आज किसी और को निर्णय लेने दें (भोजन, फिल्म)।", "एक समय याद करें जब त्वरित निर्णय पूरी तरह ठीक रहा।", "कम जोखिम वाले निर्णयों के लिए अपना नया नियम लिखें।"] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "एंकर रूटीन: अपनी सुबह के मालिक बनें",
      insight: "आपको सुबह 5 बजे के चमत्कारी मॉर्निंग की जरूरत नहीं। बस दिमाग को चिंता, दायित्व या चमकती स्क्रीन को नियंत्रण देने से पहले पहले 10 मिनट जीतने हैं।",
      hypothesis: "सुबह के पहले क्षणों को जानबूझकर, स्क्रीन-मुक्त व्यवहारों से सुरक्षित करने से आप नियंत्रण और शांति की भावना विकसित करेंगे जो पूरे दिन बनी रहती है।",
      missions: [
        { week: 1, theme: "आधार", actions: ["आज सुबह किसी भी स्क्रीन से पहले एक पूरा गिलास पानी पिएं।", "उठते ही बिस्तर तुरंत ठीक करें, कोई अपवाद नहीं।", "खिड़की खोलें या 60 सेकंड बाहर जाकर ताजी हवा लें।", "जागने के कम से कम 10 मिनट बाद तक फोन न देखें।", "कमरा छोड़ने से पहले जोर से आज की एक उत्सुकता बोलें।", "कॉफी, चाय या नाश्ता धीरे-धीरे और बिना मल्टीटास्किंग के बनाएं।", "7 दिन लगातार बिना समझौते के मॉर्निंग एंकर करें।"] },
        { week: 2, theme: "इरादा", actions: ["जागते ही डायरी में केवल एक वाक्य लिखें।", "कोई संदेश खोलने से पहले आज का 'सबसे महत्वपूर्ण कार्य' तय करें।", "दिन शुरू होने से पहले गैर-समाचार किताब का एक पैराग्राफ पढ़ें।", "किसी से बात से पहले 2 मिनट कॉफी के साथ चुपचाप बैठें।", "किसी ऐसे व्यक्ति के बारे में सोचें जिनके आप आभारी हैं।", "कल की समीक्षा करें: एक काम जो अच्छा गया, एक जो बदलना है।", "सप्ताह का 'एंकर शब्द' चुनें — एक मूल्य जो आप अपनाना चाहते हैं।"] },
        { week: 3, theme: "शरीर", actions: ["जागने के 2 मिनट के भीतर किसी भी तरह से 10 बार शरीर हिलाएं।", "सामान्य से थोड़ा ठंडे पानी से नहाएं — अंतिम 15 सेकंड ठंडे पानी से।", "किसी से बात करने से पहले एक तंग मांसपेशी समूह को 60 सेकंड स्ट्रेच करें।", "जागने के बाद 2 मिनट प्राकृतिक प्रकाश में खड़े रहें।", "फोन उठाने से पहले आंखें बंद करके 5 गहरी सांसें लें।", "एक काम पूरे शारीरिक ध्यान से करें, मानसिक विभाजन नहीं।", "आज कोई मीडिया लेने से पहले चलें या हल्के से चलें।"] },
        { week: 4, theme: "प्रवाह", actions: ["आज बिना फोन के पूरा एंकर अनुक्रम करें।", "पहचानें कि आपकी सुबह की दिनचर्या का कौन सा तत्व सबसे अधिक ऊर्जा देता है।", "किसी भी दिनचर्या चरण को छोटा या सरल बनाएं जो बोझ लगता हो।", "रात की ऐसी आदत डिजाइन करें जो कल की एंकर को आसान बनाए।", "देर हो जाए तो भी दिनचर्या करें — कम समय, शून्य नहीं।", "30 दिनों में आपकी सुबह की गुणवत्ता कैसे बदली, इस पर विचार करें।", "अपना अंतिम 'मॉर्निंग एंकर' लिखें — 3 गैर-समझौता करने वाले पहले कार्य।"] }
      ]
    }
  },
  tl: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "I-Mute ang Ingay: Bawiin ang Iyong Atensyon",
      insight: "Hindi ka nawawalan ng pokus — ninakaw ng libu-libong maliit na digital na abala ang iyong atensyon. Ang iyong utak ay nangangailangan ng katahimikan, hindi ng mas maraming nilalaman.",
      hypothesis: "Sa pamamagitan ng paglikha ng maliliit na harang sa pagitan mo at ng iyong mga screen, mababawi mo ang 30% ng iyong araw-araw na mental na bandwidth.",
      missions: [
        { week: 1, theme: "Hangganan", actions: ["Uminom ng isang buong baso ng tubig bago tumingin sa anumang screen ngayon.", "I-off ang lahat ng push notification na hindi tao (balita, social media, pamimili).", "Iwan ang iyong telepono sa ibang silid habang kumakain.", "Mag-charge ng telepono sa labas ng kwarto ngayong gabi.", "Itakda ang screen ng telepono sa grayscale mode sa susunod na 2 oras.", "Huwag tingnan ang telepono habang nasa banyo ngayon.", "Sa pakikipag-usap, panatilihing nasa labas ng paningin ang telepono."] },
        { week: 2, theme: "May Layunin", actions: ["Maghintay ng 3 minuto bago suriin ang isang notification.", "Tanggalin ang isang app na walang malay na in-scroll mo.", "Basahin ang isang pahina ng isang pisikal na libro o magasin.", "Tumingin sa labas ng bintana nang 2 buong minuto nang walang ginagawa.", "Sa paglalakad sa labas, tanggalin ang iyong headphones nang 10 minuto.", "I-type ang mga text message sa halip na gumamit ng voice o predictive emojis.", "Itakda ang telepono sa 'Do Not Disturb' nang isang oras sa trabaho."] },
        { week: 3, theme: "Muling Pag-aayos", actions: ["Iwanan ang telepono sa bahay para sa 15-minutong lakad.", "Isulat sa papel ang tatlong bagay na nagawa mo ngayon.", "Sa pagpila, maghintay lang nang walang screen.", "Ayusin ang isang pisikal na ibabaw nang 5 minuto nang walang musika.", "Makipag-usap sa iba nang 5 minuto nang hindi tinitingnan ang screen.", "Kumain ng meryenda at bigyang pansin lamang ang texture at lasa nito.", "Mag-stretch nang 2 minuto sa ganap na katahimikan."] },
        { week: 4, theme: "Kasalukuyan", actions: ["Tukuyin ang iyong pinakamalaking digital na trigger at lumayo dito nang pisikal.", "I-off ang TV o background video habang gumagawa ng gawaing-bahay.", "Obserbahan ang iyong paghinga nang 10 minuto nang walang guided app.", "Magsulat ng maikling tala sa kamay para sa iba (o sa sarili).", "Kumuha ng 'mental na larawan' ngayon sa halip na gamitin ang camera ng telepono.", "Pag-isipan kung paano ang iyong tulog ngayong linggo.", "Italaga ang isang sulok ng iyong tahanan bilang permanenteng 'screen-free zone'."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "Isara ang Mga Butas: Micro-Hangganan",
      insight: "Ang burnout ay hindi palaging nanggagaling sa paggawa ng masyadong marami — kadalasan ito ay nanggagaling sa paggawa ng masyadong kaunti ng mga bagay na tunay na nagpapabawi sa iyo.",
      hypothesis: "Sa pamamagitan ng pagtapal ng mga emosyonal at pisikal na pagtagas ng enerhiya sa pamamagitan ng 1-minutong araw-araw na hangganan, ang iyong baseline na vitalidad ay natural na maibabalik.",
      missions: [
        { week: 1, theme: "Huminto", actions: ["Magtakda ng timer ng 1 minuto at isara lang ang iyong mga mata.", "Sabihing 'Tingnan ko ang aking iskedyul' sa halip na mabilis na 'Oo'.", "Uminom ng tasa ng tsaa o kape nang walang ibang ginagawa nang sabay.", "Huminga nang malalim at dahan-dahan nang 3 beses bago buksan ang iyong email.", "Kilalanin ang isang hindi-agarang gawain ngayon at sadyang itulak ito bukas.", "Ayusin ang iyong postura ngayon para maging mas komportable ng 10%.", "Paluwagin ang panga at ibaba ang mga balikat nang 30 segundo."] },
        { week: 2, theme: "Idiskonekta", actions: ["I-off ang mga work notification 30 minuto nang mas maaga kaysa karaniwan.", "I-mute ang isang group chat na umuubos ng iyong enerhiya.", "Maglakad nang 5 minuto nang walang destinasyon o layunin.", "Kanselahin o tanggihan ang isang maliit na pangako ngayong linggo.", "Makinig sa isang kantang nagpapaalala ng magandang nakaraan at nagbibigay ng kaligtasan.", "Maligo sa eksaktong temperatura ng tubig na gusto mo.", "Gumastos ng 5 minuto nang walang ginagawa (walang pagbabasa, walang panonood)."] },
        { week: 3, theme: "Mag-recharge", actions: ["Matulog nang 15 minuto nang mas maaga kaysa karaniwan ngayong gabi.", "Kumain ng iyong paboritong pagkain ngayon nang dahan-dahan, nang walang pagkakasala.", "Magsuot ng pinakakomportableng damit na mayroon ka.", "Isulat ang isang bagay na matagumpay mong naiwasan ngayon.", "Purihin ang iyong sarili nang malakas para makumpleto ang isang pangunahing araw-araw na gawain.", "Tumingin sa isang lumang larawan kung saan talagang masaya ka.", "Gumawa ng isang gawain sa 50% na pagsisikap sa halip ng iyong karaniwang 100%."] },
        { week: 4, theme: "Hangganan", actions: ["Sabihing 'Hindi' sa isang maliit na bagay ngayon.", "Ipagkatiwala o humingi ng tulong sa isang maliliit na gawain.", "Tukuyin ang isang 'energy vampire' na gawi at i-pause ito nang 24 na oras.", "Lumikha ng pisikal na hangganan ngayon (hal. isara ang pinto, magsuot ng headphones).", "Tumanggi na ipaliwanag o bigyang-katwiran ang isang personal na pagpili ngayon.", "Kilalanin ang iyong sariling pagod nang hindi agad sinusubukang 'ayusin' ito.", "Isulat ang iyong pangunahing hangganan na patakaran para sa susunod na buwan."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "Boring Detox: Hanapin ang Mahika sa Karaniwan",
      insight: "Hindi mo nawala ang iyong kakayahang maramdaman ang kagalakan — ang iyong dopamine threshold ay na-hijack ng hyper-stimulating na nilalaman. Ang tunay na kasiyahan ay nandoon pa rin.",
      hypothesis: "Sa pamamagitan ng sadyang pagbabawas ng mataas na dopamine triggers sa loob ng 30 araw, ang iyong utak ay magbababa ng overstimulated na baseline nito, na gagawing masaya muli ang mga ordinaryong sandali.",
      missions: [
        { week: 1, theme: "Kamalayan", actions: ["Pansinin ang unang pagkakataon na abutin mo ang telepono dahil sa pagkainip ngayon at isulat ito.", "Pagkatapos manood ng short-form videos, suriin: naramdaman mo bang puno o walang laman?", "Kumain ng isang pagkain nang walang anumang screen o entertainment.", "Tukuyin ang iyong nangungunang 3 pinagkukunan ng agarang kasiyahan at isulatin.", "Maglakad sa labas nang 5 minuto nang walang headphones.", "Umupo nang tahimik nang 2 minuto at obserbahan ang anumang pagnanais na punan ang espasyo.", "Palitan ang isang scroll session ng pagtingin sa labas ng bintana nang parehong oras."] },
        { week: 2, theme: "Hadlang", actions: ["Tanggalin ang isang short-form video app mula sa iyong telepono nang 7 araw.", "Bago manood ng entertainment, maghintay ng 5 minuto at tingnan kung nawawala ang pagnanais.", "Gumawa ng 'boring' na aktibidad nang 10 minuto: mag-fold ng damit, mag-hugas ng pinggan nang dahan-dahan.", "Kausapin ang isang tao nang 10 minuto nang hindi sinusuri ang iyong telepono.", "Basahin ang isang pisikal na libro o magasin nang kahit sandali.", "Magluto o maghanda ng pagkain nang mas mabagal at maingat kaysa karaniwan.", "Sa pagkainip, manatili sa pagkainip nang 3 minuto bago gumawa ng anumang bagay."] },
        { week: 3, theme: "Pag-amo", actions: ["Inumin ang Iyong umaga na inumin nang dahan-dahan, nakatuon lamang sa lasa at init nito.", "Lumabas at pansinin ang 3 partikular na pandama ng detalye sa mundo sa paligid mo.", "Makinig sa isang kanta mula simula hanggang katapusan nang walang multitasking.", "Isara ang iyong mga mata at kunin ang isang subo ng pagkain, mapansin ang buong kumplikasyon nito.", "Panoorin ang pagbabago ng natural na liwanag sa iyong kapaligiran nang 5 minuto.", "Isulat ang isang maliit na bagay na nagpagaan o nagpaganda ng araw ngayon.", "Hawakan ang isang mainit na inumin gamit ang magkabilang kamay at huminga lang nang 1 minuto."] },
        { week: 4, theme: "Muling Paggawa", actions: ["Hanapin ang isang analogue na aktibidad na nagbibigay ng tahimik na kasiyahan (puzzle, sketching, joernal).", "Gumawa ng isang malikhaing bagay gamit ang iyong mga kamay nang 10 minuto.", "Tukuyin ang isang 'mabagal na media' na gusto mo (podcast, mahabang artikulo, audiobook).", "Gumastos ng 10 minuto sa kalikasan nang walang agenda.", "Ilista ang mga bagay na nagbigay sa iyo ng kagalakan bilang bata, bago ang mga smartphone.", "Pag-isipan ang 2 ordinaryong sandaling parang nagkaroon ng mahika ngayong linggo.", "Disenyuhin ang iyong personal na mababang stimulasyon na 'mabilis na solusyon' para sa panahon ng pagnanais."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "Linisin ang Kalat: 30 Araw para sa Mas Magaan na Isipan",
      insight: "Bawat bagay sa iyong espasyo ay gumagawa ng maliit na kahilingan sa iyong atensyon. Ang iyong kapaligiran ay pinagmumulan ng kapayapaan o ng stress sa background — walang neutral.",
      hypothesis: "Sa pamamagitan ng sistematikong pag-alis ng pisikal at digital na ingay mula sa iyong kapaligiran, makakaranas ka ng kapansin-pansing pagbaba ng mental friction.",
      missions: [
        { week: 1, theme: "Ibabaw", actions: ["Alisin ang lahat mula sa isang makikitang ibabaw (desk, mesa, istante) na hindi dapat naroon.", "Itapon o mag-donate ng 3 bagay na hindi mo nahawakan sa nakalipas na 3 buwan.", "Ayusin ang home screen ng iyong telepono: tanggalin ang bawat app na hindi nagamit ngayong linggo.", "Alisan ng laman ang iyong bag at ibalik lamang ang mga talagang kailangan.", "Ilagay ang bawat bagay na naiwan nang 'pansamantala' nang mahigit isang linggo.", "Punasan ang ibabaw na pinaka-nakakaabala sa iyo — panatilihing malinis sa loob ng 72 oras.", "Gamitin ang '2-minutong panuntunan': kung mas mababa sa 2 minuto ang pag-aayos, gawin na ngayon."] },
        { week: 2, theme: "Digital", actions: ["Tanggalin o i-archive ang bawat email na mas matanda sa 1 linggo sa iyong inbox.", "Mag-unsubscribe sa 3 email newsletter o promosyon na hindi mo kailanman binabasa.", "Tanggalin ang 20 duplicate o malabong larawan mula sa iyong camera roll.", "Alisin ang mga app na hindi nabuksan sa nakalipas na 30 araw.", "Linisin ang iyong desktop o mga bookmark ng anumang nai-save na 'sakaling kailanganin'.", "Linisin ang iyong downloads folder — tanggalin ang anumang mas matanda sa 2 linggo.", "Itakda ang wallpaper ng iyong telepono o computer sa isang malinis at minimal na bagay."] },
        { week: 3, theme: "Paglaya", actions: ["Mag-donate o itapon ang isang bagay na pinananatili mo dahil sa 'baka kailanganin'.", "Mag-unfollow ng 5 social media account na nauubos sa halip na nagbibigay ng inspirasyon.", "Linisin ang isang drawer o lalagyan na pinagsasalitan mo.", "Kanselahin ang isang subscription na hindi mo ginagamit ngunit patuloy mong nire-renew.", "Ibalik o itapon ang isang bagay na hiniram na matagal na kang nagpaplamig.", "Isulat ang 3 commit o obligasyon na gusto mong tapusin o muling pag-aralan.", "Sabihing hindi sa isang kahilingan na talagang hindi mo nais gawin."] },
        { week: 4, theme: "Mga Sistema", actions: ["Lumikha ng nakatalagang 'tahanan' para sa 5 bagay na laging nawawala.", "Bumuo ng lingguhang 5-minutong gawi sa pag-reset ng ibabaw.", "Magtakda ng panuntunan: 'isa papasok, isa lalabas' para sa anumang bagong bagay.", "Tukuyin ang lugar sa iyong tahanan na nagdudulot ng pinaka-karaming kalat at ayusin ito.", "Mag-set up ng simpleng triage system para sa mga digital na mensahe.", "Mag-iskedyul ng 15 minuto tuwing Linggo para i-reset ang iyong espasyo.", "Isulat ang iyong personal na 'kalat na mga panuntunan' — ang hindi mo na papayagang nasa iyong espasyo."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "Ihinto ang Labis na Pag-iisip: 30 Araw ng Hindi Perpektong Aksyon",
      insight: "Ginagamit mo ang pag-iisip bilang isang sopistikadong kasangkapan ng pagpapaliban. Ang perfeksyonismo ay isang kalasag na pumipigil sa iyong tunay na pumasok sa arena.",
      hypothesis: "Sa pamamagitan ng pagpilit ng hindi perpekto, agarang aksyon sa mga micro-desisyon, ang neural pathway ng 'analysis paralysis' ay magsisimulang humina.",
      missions: [
        { week: 1, theme: "Bilis", actions: ["Gawin ang iyong susunod na maliit na desisyon (kung ano ang kakainin, kung ano ang isusuot) sa loob ng 60 segundo.", "Magpadala ng email o mensahe na may sadyang walang masamang typo.", "Simulan ang isang gawain na iyong iniiwasan nang 2 minuto lamang. Maaari kang huminto pagkatapos.", "Pumili ng pelikula/palabas sa loob ng 3 minuto, o huwag manood ng anumang bagay.", "Magsulat ng isang 'masamang' ideya nang sinadya.", "Tumugon sa isang mensahe kaagad sa halip na iwanan itong hindi nabasa para 'pag-isipan'.", "Mag-iwan ng isang maliit na gawain na halatang hindi natapos nang sinadya."] },
        { week: 2, theme: "Tiwala", actions: ["Lumakad nang walang naplanong ruta.", "Bumili ng isang bagay (tulad ng kape o meryenda) nang hindi sinusuri ang mga review.", "Gumawa ng isang gawain sa bahay sa isang ganap na naiibang, mas mabilis na paraan.", "Kung ang isang pag-iisip ay nagsisimula sa 'Paano kung...', sabihing 'E ano ngayon?' nang malakas.", "Itapon ang isang draft at magsimula muli nang maaga nang hindi masyadong nag-aanalisa.", "Magtiwala sa iyong unang instinct sa isang pagpili ngayon, walang pangalawang hula.", "Tanggapin ang isang maliit na pagkakamali na nagawa mo ngayon nang hindi masyadong humihingi ng tawad."] },
        { week: 3, theme: "Paglaya", actions: ["Tukuyin ang isang bagay na hindi mo makontrol ngayon at literal na kilusin ang iyong mga balikat.", "Mag-unsubscribe sa 3 newsletter na nagbibigay ng 'information overload'.", "Gumawa ng isang malikhaing bagay (gumuhit, magsulat) nang 5 minuto na alam mong magiging pangit.", "Kapag humingi ng opinyon, ibigay ang pinakasimple at pinaka-direktang sagot.", "Itapon ang isang pisikal na kalat na 'nandoon sakaling kailanganin'.", "Huminto sa gitna ng isang gawain at lumipat sa iba pa nang 10 minuto.", "Patawarin ang iyong sarili nang mabilis para sa isang sandaling pagkawala ng pokus."] },
        { week: 4, theme: "Momentum", actions: ["Gumawa ng 'listahan ng nagawa' ng iyong natapos ngayon, kahit hindi perpekto.", "Magtapat sa isang plano para sa katapusan ng linggo ngayon, nang walang sobrang pananaliksik.", "I-publish o ibahagi ang isang bagay na itinuturing mong '80% lang handa'.", "Kapag nahuli mo ang iyong sarili na nag-aaral-aral, agad gumawa ng 10 jumping jacks o stretches.", "Hayaan ang ibang tao na gumawa ng isang pagpili para sa iyo ngayon (hapunan, pelikula).", "Pag-isipan ang isang pagkakataon na ang mabilis na desisyon ay naging perpektong mabuti.", "Isulat ang iyong bagong patakaran para sa paggawa ng mababang-panganib na mga desisyon."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "Ang Rutina ng Angkla: Pagiging May-ari ng Iyong Umaga",
      insight: "Hindi mo kailangan ng 5am na miracle morning. Kailangan mo lang manalo sa unang 10 minuto bago ibigay ng iyong utak ang kontrol sa pagkabalisa, obligasyon, o isang nagliliwanag na screen.",
      hypothesis: "Sa pamamagitan ng patuloy na pagprotekta ng mga unang sandali ng iyong umaga sa may layuning, walang screen na pag-uugali, magkakaroon ka ng pakiramdam ng kontrol at kapayapaan na tatagal sa buong araw.",
      missions: [
        { week: 1, theme: "Pundasyon", actions: ["Uminom ng isang buong baso ng tubig bago tumingin sa anumang screen ngayong umaga.", "Ayusin ang iyong kama kaagad pagkagising, walang pagbubukod.", "Magbukas ng bintana o lumabas nang 60 segundo ng sariwang hangin.", "Huwag suriin ang iyong telepono hanggang hindi ka pa nagising nang hindi bababa sa 10 minuto.", "Bago umalis sa iyong kwarto, sabihing malakas ang isang bagay na inaabangan mo ngayon.", "Ihanda ang iyong kape, tsaa, o agahan nang dahan-dahan at nang walang multitasking.", "Pangako na sundin ang iyong morning anchor nang walang pakikipagtawaran sa loob ng 7 magkakasunod na araw."] },
        { week: 2, theme: "Layunin", actions: ["Sumulat ng isang pangungusap sa isang journal sa sandaling magising — isa lang.", "Magtakda ng iisang 'pinaka-importanteng gawain' para ngayon bago buksan ang anumang mensahe.", "Basahin ang isang talata ng isang hindi-balita, hindi-social na libro bago magsimula ang iyong araw.", "Umupo nang tahimik kasama ang iyong kape nang 2 minuto bago ang anumang pag-uusap.", "Mag-isip ng isang taong pinasasalamatan mo at isipin ang pagsasabi nito sa kanya.", "Suriin ang kahapon: isang bagay na naging maayos at isang bagay na gagawin nang naiiba.", "Piliin ang iyong 'anchor word' para sa linggo — isang halaga o kalidad na nais mong isabuhay."] },
        { week: 3, theme: "Katawan", actions: ["Gumawa ng 10 paulit-ulit na kilusan ng katawan sa loob ng 2 minuto ng pagkagising.", "Maligo nang medyo mas malamig kaysa karaniwan — tapusin ng 15 segundo ng malamig na tubig.", "Mag-stretch ng isang maigting na grupo ng kalamnan nang 60 segundo bago makipag-usap sa sinuman.", "Tumayo sa natural na liwanag nang 2 minuto pagkatapos maging gising (sa labas o sa tabi ng bintana).", "Kumuha ng 5 malalim, mabagal na hininga na nakasarang mga mata bago kumuha ng iyong telepono.", "Gumawa ng isang pisikal na gawain na may kumpletong atensyon at walang mental na paghahati.", "Lumakad o gumalaw nang dahan-dahan bago kumonsumo ng anumang media ngayon."] },
        { week: 4, theme: "Daloy", actions: ["Isagawa ang iyong buong anchor sequence ngayon nang walang telepono.", "Tukuyin kung aling elemento ng iyong morning routine ang nagbibigay sa iyo ng pinakamaraming enerhiya.", "Paikliin o pasimplehin ang anumang hakbang sa rutina na pakiramdam ay pabigat.", "Disenyuhin ang gabi-bago-matulog na gawi na gagawing walang kahirap-hirap ang bukas na anchor.", "Isagawa ang iyong rutina kahit mahuli ka — mas kaunting oras, hindi walang rutina.", "Pag-isipan: paano nagbago ang kalidad ng iyong mga umaga sa loob ng 30 araw?", "Isulat ang iyong panghuling 'Morning Anchor' — 3 hindi mapag-uusapang unang gawain sa umaga."] }
      ]
    }
  },
  fr: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "Couper le bruit : 30 jours pour retrouver ton attention",
      insight: "Tu n'as pas perdu ta concentration — elle est volée par des milliers de petites interruptions numériques. Ton cerveau a besoin de silence, pas de plus de contenu.",
      hypothesis: "En créant de petites frictions intentionnelles entre toi et tes écrans, tu récupéreras 30 % de ta bande passante mentale quotidienne.",
      missions: [
        { week: 1, theme: "Limites", actions: ["Boire un verre d'eau entier avant de regarder un écran ce matin.", "Désactiver toutes les notifications push non humaines (actualités, réseaux sociaux, shopping).", "Laisser le téléphone dans une autre pièce pendant un repas.", "Charger le téléphone hors de la chambre cette nuit.", "Passer l'écran du téléphone en mode niveaux de gris pendant 2 heures.", "Ne pas regarder le téléphone aux toilettes aujourd'hui.", "Garder le téléphone hors de vue lors d'une conversation."] },
        { week: 2, theme: "Intentions", actions: ["Attendre 3 minutes avant de consulter une notification.", "Supprimer une application que tu utilises sans y penser.", "Lire une page d'un livre ou magazine papier.", "Regarder par la fenêtre pendant 2 minutes sans rien faire.", "Enlever tes écouteurs 10 minutes lors d'une promenade.", "Taper tes SMS manuellement sans voix ni emojis prédictifs.", "Mettre le téléphone en mode 'Ne pas déranger' pendant une heure de travail."] },
        { week: 3, theme: "Recalibrage", actions: ["Laisser le téléphone à la maison et marcher 15 minutes.", "Écrire sur papier 3 choses accomplies aujourd'hui.", "Dans une file d'attente, juste attendre — sans écran.", "Ranger une surface 5 minutes sans musique.", "Parler à quelqu'un 5 minutes sans regarder l'écran.", "Manger une collation en se concentrant uniquement sur la texture et le goût.", "S'étirer 2 minutes dans un silence complet."] },
        { week: 4, theme: "Présence", actions: ["Identifier le plus grand déclencheur numérique du jour et s'en éloigner physiquement.", "Éteindre la TV ou les vidéos en arrière-plan pendant les tâches ménagères.", "Observer sa respiration 10 minutes sans application de guidage.", "Écrire un mot à la main pour quelqu'un (ou pour soi).", "Faire une 'photo mentale' aujourd'hui au lieu de sortir le téléphone.", "Réfléchir à l'évolution de la qualité de sommeil cette semaine.", "Désigner un coin de la maison comme zone permanente sans écran."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "Colmater les fuites : 30 jours de micro-limites",
      insight: "L'épuisement ne vient pas toujours du trop-plein — souvent il vient du manque de ce qui t'enrichit vraiment. Ton seau d'énergie a de petits trous.",
      hypothesis: "En colmatant les fuites d'énergie émotionnelle et physique avec 1 minute de limites par jour, ta vitalité de base se rétablira naturellement.",
      missions: [
        { week: 1, theme: "Pause", actions: ["Régler une minuterie d'1 minute et simplement fermer les yeux.", "Dire 'Laisse-moi vérifier mon agenda' au lieu d'un 'Oui' immédiat.", "Boire un thé ou café en ne faisant rien d'autre.", "Respirer profondément 3 fois avant d'ouvrir la boîte mail.", "Choisir une tâche non urgente et la reporter intentionnellement à demain.", "Ajuster immédiatement sa posture pour être 10 % plus à l'aise.", "Relâcher la mâchoire et laisser tomber les épaules pendant 30 secondes."] },
        { week: 2, theme: "Déconnexion", actions: ["Désactiver les notifications de travail 30 minutes plus tôt qu'habituellement.", "Mettre en sourdine un groupe de discussion qui épuise.", "Marcher 5 minutes sans destination ni objectif.", "Annuler ou refuser un petit engagement cette semaine.", "Écouter une chanson qui évoque de bons souvenirs.", "Prendre une douche à la température exacte que tu préfères.", "Passer 5 minutes à ne rien faire (ni lire, ni regarder)."] },
        { week: 3, theme: "Recharge", actions: ["Se coucher 15 minutes plus tôt ce soir.", "Manger ton plat préféré lentement, sans culpabilité.", "Porter les vêtements les plus confortables que tu possèdes.", "Écrire quelque chose que tu as réussi à éviter de faire aujourd'hui.", "Te féliciter à voix haute d'avoir accompli une routine de base.", "Regarder une vieille photo d'un moment de vrai bonheur.", "Faire une tâche avec 50 % d'effort au lieu des 100 % habituels."] },
        { week: 4, theme: "Limites", actions: ["Dire 'non' à quelque chose de petit aujourd'hui.", "Déléguer ou demander de l'aide pour une petite tâche.", "Identifier une habitude 'vampire d'énergie' et la suspendre 24 heures.", "Créer une limite physique aujourd'hui (fermer la porte, mettre les écouteurs).", "Refuser d'expliquer ou justifier un choix personnel fait aujourd'hui.", "Reconnaître sa fatigue sans essayer de la 'réparer' immédiatement.", "Écrire sa règle de limite fondamentale pour le mois prochain."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "Détox de l'ennui : 30 jours pour retrouver la magie du quotidien",
      insight: "Tu n'as pas perdu la capacité de ressentir la joie — ton seuil de dopamine a été détourné par des contenus ultra-stimulants. La vraie joie est encore là, en dessous du bruit.",
      hypothesis: "En réduisant intentionnellement les déclencheurs à haute dopamine pendant 30 jours, ton cerveau abaissera sa ligne de base hyperstimulée et les moments ordinaires redeviendront vivants.",
      missions: [
        { week: 1, theme: "Conscience", actions: ["Remarquer la première fois que tu attrapes ton téléphone par ennui aujourd'hui et le noter.", "Après avoir regardé de courtes vidéos, vérifier : te sens-tu plein ou vide ?", "Manger un repas complet sans écran ni divertissement.", "Identifier tes 3 principales sources de satisfaction immédiate et les noter.", "Marcher dehors 5 minutes sans écouteurs.", "S'asseoir calmement 2 minutes et observer l'envie de remplir l'espace.", "Remplacer une session de défilement par le même temps à regarder par la fenêtre."] },
        { week: 2, theme: "Friction", actions: ["Supprimer une application de vidéos courtes du téléphone pendant 7 jours.", "Attendre 5 minutes avant de regarder du divertissement pour voir si l'envie diminue.", "Faire 10 minutes d'activité 'ennuyeuse' : plier le linge, faire la vaisselle lentement.", "Parler à quelqu'un 10 minutes sans consulter le téléphone.", "Lire un livre ou magazine papier, même brièvement.", "Cuisiner ou préparer un repas plus lentement et attentivement qu'à l'habitude.", "Quand tu t'ennuies, rester avec l'ennui 3 minutes avant d'agir."] },
        { week: 3, theme: "Saveur", actions: ["Boire sa boisson matinale lentement, en se concentrant sur le goût et la chaleur.", "Sortir et noter 3 détails sensoriels précis du monde environnant.", "Écouter une chanson du début à la fin sans rien faire d'autre.", "Fermer les yeux, manger une bouchée et remarquer toute sa complexité.", "Observer les changements de lumière naturelle dans son espace pendant 5 minutes.", "Écrire une petite chose qui a rendu la journée plus légère ou agréable.", "Tenir une boisson chaude à deux mains et simplement respirer 1 minute."] },
        { week: 4, theme: "Recâblage", actions: ["Trouver une activité analogique qui apporte une satisfaction tranquille (puzzle, dessin, journal).", "Faire quelque chose de créatif avec les mains pendant 10 minutes.", "Identifier un 'media lent' qu'on aime (podcast, long article, livre audio).", "Passer 10 minutes dans la nature sans aucun agenda.", "Lister ce qui apportait de la joie enfant, avant les smartphones.", "Repenser à 2 moments ordinaires de cette semaine qui ont semblé magiques.", "Concevoir son propre 'remède rapide' à faible stimulation pour les moments d'envie."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "Désencombrer : 30 jours pour un esprit plus léger",
      insight: "Chaque objet dans ton espace fait une petite demande à ton attention. Ton environnement est soit une source de calme, soit une source de stress de fond — il n'y a pas de neutre.",
      hypothesis: "En éliminant systématiquement le bruit physique et numérique de ton environnement, tu ressentiras une réduction tangible de la friction mentale.",
      missions: [
        { week: 1, theme: "Surfaces", actions: ["Retirer tout ce qui ne devrait pas être là d'une surface visible (bureau, table, étagère).", "Jeter ou donner 3 objets non touchés depuis 3 mois.", "Nettoyer l'écran d'accueil du téléphone : supprimer les apps non utilisées cette semaine.", "Vider entièrement son sac et ne remettre que le nécessaire.", "Ranger tous les objets 'temporairement' posés depuis plus d'une semaine.", "Nettoyer la surface la plus gênante et la maintenir propre 72 heures.", "Appliquer la 'règle des 2 minutes' : si ça prend moins de 2 minutes, le faire maintenant."] },
        { week: 2, theme: "Numérique", actions: ["Supprimer ou archiver tous les emails de plus d'une semaine dans la boîte de réception.", "Se désabonner de 3 newsletters ou promotions jamais lues.", "Supprimer 20 photos en double ou floues de la pellicule.", "Supprimer les apps non ouvertes depuis 30 jours.", "Nettoyer le bureau ou les favoris des éléments sauvegardés 'au cas où'.", "Vider le dossier téléchargements : supprimer tout ce qui date de plus de 2 semaines.", "Changer le fond d'écran du téléphone ou ordinateur pour quelque chose de sobre et minimaliste."] },
        { week: 3, theme: "Lâcher prise", actions: ["Donner ou jeter un objet gardé 'au cas où'.", "Se désabonner de 5 comptes de réseaux sociaux qui épuisent plutôt qu'inspirent.", "Trier un tiroir ou espace de rangement qu'on évite.", "Annuler un abonnement non utilisé mais encore en cours.", "Rendre ou traiter un objet emprunté ou en suspens depuis longtemps.", "Écrire 3 engagements qu'on veut terminer ou renégocier.", "Dire non à une demande qu'on ne veut pas vraiment honorer."] },
        { week: 4, theme: "Systèmes", actions: ["Créer un 'foyer' désigné pour 5 objets qui se perdent toujours.", "Mettre en place une habitude hebdomadaire de 5 minutes de remise à zéro des surfaces.", "Établir la règle maison : 'un entrant, un sortant' pour tout nouvel objet.", "Identifier le point de désordre principal chez soi et concevoir une solution.", "Mettre en place un système simple de tri des messages numériques.", "Planifier 15 minutes chaque dimanche pour réinitialiser son espace.", "Écrire ses propres 'règles de désordre' : ce qui n'entrera plus dans son espace."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "Arrêter de trop réfléchir : 30 jours d'action imparfaite",
      insight: "Tu utilises la 'pensée' comme un outil de procrastination sophistiqué. Le perfectionnisme est un bouclier qui t'empêche d'entrer vraiment dans l'arène.",
      hypothesis: "En forçant des actions immédiates et imparfaites sur des micro-décisions, le circuit neuronal de la 'paralysie d'analyse' commencera à s'affaiblir.",
      missions: [
        { week: 1, theme: "Vitesse", actions: ["Prendre la prochaine petite décision (quoi manger, quoi porter) en moins de 60 secondes.", "Envoyer un email ou message avec une faute de frappe intentionnelle et sans danger.", "Commencer une tâche qu'on évite pendant seulement 2 minutes. On peut s'arrêter après.", "Choisir un film/série en 3 minutes sinon ne rien regarder.", "Écrire intentionnellement une 'mauvaise' idée.", "Répondre tout de suite à un message au lieu de le garder 'pour y réfléchir'.", "Laisser volontairement une petite tâche manifestement inachevée."] },
        { week: 2, theme: "Confiance", actions: ["Partir se promener sans itinéraire planifié.", "Acheter quelque chose (café, snack) sans consulter les avis.", "Faire une corvée d'une façon complètement différente et plus rapide.", "Si une pensée commence par 'Et si...', dire à voix haute 'Et alors ?'", "Jeter un brouillon et recommencer à zéro sans trop analyser.", "Faire confiance à son premier instinct pour un choix aujourd'hui, sans se raviser.", "Accepter une petite erreur faite aujourd'hui sans s'excuser excessivement."] },
        { week: 3, theme: "Libération", actions: ["Identifier une chose hors de son contrôle aujourd'hui et littéralement hausser les épaules.", "Se désabonner de 3 newsletters qui causent une 'surcharge d'information'.", "Faire 5 minutes d'activité créative (dessin, écriture) en sachant que le résultat sera mauvais.", "Quand on demande son avis, donner la réponse la plus simple et directe.", "Jeter un objet physique gardé 'au cas où'.", "S'arrêter à mi-tâche et passer à autre chose pendant 10 minutes.", "Se pardonner rapidement d'un moment de distraction."] },
        { week: 4, theme: "Élan", actions: ["Faire une 'liste des réalisations' de ce qu'on a terminé aujourd'hui, même imparfaitement.", "Décider maintenant des plans du week-end sans trop chercher.", "Publier ou partager quelque chose qu'on considère 'à 80 % prêt'.", "Quand on se surprend à ressasser, faire immédiatement 10 jumping jacks ou étirements.", "Laisser quelqu'un d'autre prendre une décision à sa place aujourd'hui (repas, film).", "Se rappeler d'une fois où une décision rapide s'est très bien passée.", "Écrire sa nouvelle règle pour les décisions à faible risque."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "La routine ancre : reprendre possession de son matin",
      insight: "Tu n'as pas besoin d'un 'miracle morning' à 5h. Il suffit de gagner les 10 premières minutes avant que le cerveau cède le contrôle à l'anxiété, aux obligations ou à un écran lumineux.",
      hypothesis: "En protégeant les premiers instants du matin avec des comportements intentionnels et sans écran, tu développeras un sentiment de contrôle et de calme qui durera toute la journée.",
      missions: [
        { week: 1, theme: "Fondation", actions: ["Boire un verre d'eau entier avant tout écran ce matin.", "Faire son lit immédiatement après s'être levé, sans exception.", "Ouvrir la fenêtre ou sortir 60 secondes respirer l'air frais.", "Ne pas consulter son téléphone avant d'être éveillé depuis au moins 10 minutes.", "Avant de quitter la chambre, dire à voix haute une chose attendue de la journée.", "Préparer café, thé ou petit-déjeuner lentement, sans multitâche.", "S'engager à tenir son ancre matinale sans compromis pendant 7 jours consécutifs."] },
        { week: 2, theme: "Intention", actions: ["Au réveil, écrire une seule phrase dans un journal - juste une.", "Définir la 'tâche la plus importante' du jour avant d'ouvrir tout message.", "Lire un paragraphe d'un livre non-actualités et non-social avant de commencer la journée.", "S'asseoir calmement avec son café 2 minutes avant toute conversation.", "Penser à une personne pour qui on est reconnaissant et imaginer le lui dire.", "Revoir la veille : une chose qui a bien marché, une chose à changer.", "Choisir son 'mot ancre' de la semaine — une valeur ou qualité à incarner."] },
        { week: 3, theme: "Corps", actions: ["Faire 10 mouvements corporels dans les 2 minutes après le réveil.", "Prendre une douche légèrement plus froide qu'à l'habitude — terminer par 15 secondes d'eau froide.", "Étirer un groupe musculaire tendu 60 secondes avant de parler à quelqu'un.", "Se tenir à la lumière naturelle 2 minutes après le réveil (dehors ou près de la fenêtre).", "Faire 5 grandes respirations profondes et lentes, yeux fermés, avant de prendre le téléphone.", "Faire une chose avec une attention physique complète, sans divagation mentale.", "Bouger ou marcher légèrement avant de consommer tout média aujourd'hui."] },
        { week: 4, theme: "Flux", actions: ["Réaliser toute la séquence ancre aujourd'hui sans téléphone présent.", "Identifier quel élément de la routine matinale apporte le plus d'énergie.", "Raccourcir ou simplifier toute étape de routine qui semble être un fardeau.", "Concevoir un 'rituel de la veille' qui facilitera l'ancre de demain.", "Réaliser la routine même en retard — moins de temps, mais pas zéro.", "Réfléchir : comment la qualité de ses matins a-t-elle changé en 30 jours ?", "Écrire son 'ancre matinale' finale — 3 premières actions non négociables."] }
      ]
    }
  },
  de: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "Lärm stummschalten: 30 Tage Rückeroberung deiner Aufmerksamkeit",
      insight: "Du hast deine Konzentration nicht verloren — sie wird von Tausenden kleiner digitaler Unterbrechungen gestohlen. Dein Gehirn braucht Stille, nicht mehr Inhalte.",
      hypothesis: "Durch bewusste kleine Widerstände zwischen dir und deinen Bildschirmen gewinnst du täglich 30 % deiner mentalen Kapazität zurück.",
      missions: [
        { week: 1, theme: "Grenzen", actions: ["Heute ein volles Glas Wasser trinken, bevor du irgendeinen Bildschirm ansiehst.", "Alle nicht-menschlichen Push-Benachrichtigungen (Nachrichten, Social Media, Shopping) deaktivieren.", "Das Handy beim Essen in einem anderen Zimmer lassen.", "Das Handy heute Nacht außerhalb des Schlafzimmers aufladen.", "Den Bildschirm für 2 Stunden auf Graustufen stellen.", "Heute kein Handy auf der Toilette.", "Bei Gesprächen das Handy komplett aus dem Sichtfeld legen."] },
        { week: 2, theme: "Bewusst", actions: ["Nach einer Benachrichtigung 3 Minuten warten, bevor du sie prüfst.", "Eine App löschen, die du gedankenlos scrollst.", "Eine Seite eines Buches oder einer Zeitschrift aus Papier lesen.", "2 Minuten lang gedankenlos aus dem Fenster schauen.", "Beim Spazierengehen 10 Minuten lang die Kopfhörer abnehmen.", "SMS manuell tippen, keine Sprache oder vorausschauende Emojis.", "Das Handy während der Arbeit 1 Stunde auf 'Nicht stören' stellen."] },
        { week: 3, theme: "Neukalibrierung", actions: ["Das Handy zu Hause lassen und 15 Minuten spazieren gehen.", "Drei erledigte Dinge auf Papier aufschreiben.", "In einer Warteschlange einfach warten — kein Bildschirm.", "5 Minuten ohne Musik eine Oberfläche aufräumen.", "5 Minuten mit jemandem reden, ohne auf den Bildschirm zu schauen.", "Beim Snacken ausschließlich auf Textur und Geschmack achten.", "2 Minuten in vollständiger Stille strecken."] },
        { week: 4, theme: "Gegenwart", actions: ["Den größten heutigen digitalen Auslöser identifizieren und physisch Abstand nehmen.", "Beim Haushalten den Fernseher oder Hintergrundvideos ausschalten.", "10 Minuten lang ohne App den Atem beobachten.", "Jemandem (oder sich selbst) eine kurze Notiz mit der Hand schreiben.", "Heute ein 'mentales Foto' machen statt das Handy zu zücken.", "Reflektieren, wie sich die Schlafqualität diese Woche verändert hat.", "Eine Ecke zu Hause dauerhaft zur bildschirmfreien Zone erklären."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "Lecks stopfen: 30 Tage Mikro-Grenzen",
      insight: "Burnout kommt nicht immer vom Zu-viel-Tun — oft kommt er vom Zu-wenig-Tun der Dinge, die dich wirklich auffüllen. Dein Energieeimer hat kleine Löcher.",
      hypothesis: "Durch 1 Minute täglich emotionale und körperliche Energielecks zu stopfen, erholt sich deine grundlegende Vitalität auf natürliche Weise.",
      missions: [
        { week: 1, theme: "Pause", actions: ["Einen 1-Minuten-Timer stellen und einfach die Augen schließen.", "Statt sofortigem 'Ja' sagen: 'Lass mich meinen Kalender prüfen'.", "Einen Tee oder Kaffee trinken, ohne gleichzeitig etwas anderes zu tun.", "Vor dem Öffnen des E-Mail-Posteingangs 3 tiefe, langsame Atemzüge nehmen.", "Eine nicht dringende Aufgabe bewusst auf morgen verschieben.", "Die Haltung sofort um 10 % bequemer machen.", "30 Sekunden lang den Kiefer lockern und die Schultern fallen lassen."] },
        { week: 2, theme: "Trennen", actions: ["Arbeitsbenachrichtigungen 30 Minuten früher als gewohnt deaktivieren.", "Einen Gruppenchat stummschalten, der Energie raubt.", "5 Minuten ohne Ziel und Absicht spazieren gehen.", "Diese Woche eine kleine Verpflichtung absagen oder ablehnen.", "Ein Lied hören, das Nostalgie und Geborgenheit weckt.", "Unter der Dusche mit der selbst gewählten Lieblingstemperatur duschen.", "5 Minuten komplett nichts tun (nicht lesen, nicht schauen)."] },
        { week: 3, theme: "Aufladen", actions: ["Heute Nacht 15 Minuten früher ins Bett gehen.", "Dein Lieblingsessen langsam und ohne schlechtes Gewissen genießen.", "Das bequemste Kleidungsstück anziehen, das du besitzt.", "Aufschreiben, was du heute erfolgreich nicht getan hast.", "Dir selbst laut für das Erledigen einer einfachen Alltagsroutine gratulieren.", "Ein altes Foto anschauen, auf dem du wirklich glücklich warst.", "Eine Aufgabe mit 50 % Aufwand erledigen statt den üblichen 100 %."] },
        { week: 4, theme: "Grenzen", actions: ["Heute zu einer Kleinigkeit 'Nein' sagen.", "Eine kleine Aufgabe delegieren oder um Hilfe bitten.", "Eine 'Energievampir'-Gewohnheit identifizieren und 24 Stunden pausieren.", "Heute eine physische Grenze schaffen (Tür schließen, Kopfhörer aufsetzen).", "Es ablehnen, eine heute getroffene persönliche Entscheidung zu erklären.", "Die eigene Müdigkeit anerkennen, ohne sie sofort 'beheben' zu wollen.", "Die eigene Kern-Grenzregel für nächsten Monat aufschreiben."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "Langeweile-Detox: 30 Tage Magie im Alltag entdecken",
      insight: "Du hast die Fähigkeit, Freude zu empfinden, nicht verloren — dein Dopamin-Schwellenwert wurde von hyperstimulierenden Inhalten gekapert. Die echte Freude ist noch da, unter dem Lärm.",
      hypothesis: "Durch bewusstes Reduzieren von Hochdopamin-Auslösern über 30 Tage senkt dein Gehirn seinen überstimulierten Basiswert, und gewöhnliche Momente fühlen sich wieder lebendig an.",
      missions: [
        { week: 1, theme: "Bewusstsein", actions: ["Den ersten Moment bemerken, in dem du heute aus Langeweile zum Handy greifst.", "Nach kurzen Videos prüfen: Fühlt sich das an wie Fülle oder Leere?", "Eine Mahlzeit komplett ohne Bildschirm oder Unterhaltung essen.", "Die Top-3-Quellen für sofortige Befriedigung identifizieren und notieren.", "5 Minuten ohne Kopfhörer draußen gehen.", "2 Minuten still sitzen und den Drang beobachten, die Stille zu füllen.", "Eine Scroll-Session durch gleichlanges Aus-dem-Fenster-Schauen ersetzen."] },
        { week: 2, theme: "Reibung", actions: ["Eine Kurzvideoapp für 7 Tage vom Handy löschen.", "Vor dem Konsumieren 5 Minuten warten und sehen, ob der Drang nachlässt.", "10 Minuten eine 'langweilige' Aktivität machen: Wäsche falten, Geschirr langsam spülen.", "10 Minuten mit jemandem reden, ohne das Handy zu prüfen.", "Ein Buch oder Magazin aus Papier lesen, auch nur kurz.", "Langsamer und achtsamer als gewöhnlich kochen oder Mahlzeiten vorbereiten.", "Bei Langeweile 3 Minuten mit der Langeweile sitzen, bevor man handelt."] },
        { week: 3, theme: "Kosten", actions: ["Das Morgengetränk langsam trinken und sich nur auf Geschmack und Wärme konzentrieren.", "Nach draußen gehen und 3 konkrete sensorische Details der Umgebung bemerken.", "Ein Lied von Anfang bis Ende hören, ohne etwas anderes zu tun.", "Mit geschlossenen Augen einen Bissen essen und alle Komplexität wahrnehmen.", "5 Minuten lang das Lichtspiel in der Umgebung beobachten.", "Eine Kleinigkeit notieren, die den Tag heute angenehmer gemacht hat.", "Ein heißes Getränk mit beiden Händen halten und 1 Minute lang atmen."] },
        { week: 4, theme: "Umverdrahten", actions: ["Eine analoge Aktivität finden, die stille Zufriedenheit bringt (Puzzle, Zeichnen, Tagebuch).", "10 Minuten lang mit den Händen etwas Kreatives machen.", "Ein 'Slow Media' identifizieren, das man mag (Podcast, Langform-Artikel, Hörbuch).", "10 Minuten ohne Agenda in der Natur verbringen.", "Auflisten, was als Kind Freude bereitet hat, vor der Smartphone-Ära.", "Auf 2 gewöhnliche Momente dieser Woche zurückblicken, die sich magisch angefühlt haben.", "Einen persönlichen Niedrig-Stimulations-'Schnellfix' für Momente des Verlangens entwerfen."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "Chaos beseitigen: 30 Tage für einen leichteren Geist",
      insight: "Jeder Gegenstand in deinem Raum stellt eine kleine Anforderung an deine Aufmerksamkeit. Deine Umgebung ist entweder eine Quelle der Ruhe oder eine Quelle von Hintergrundstress — es gibt kein Neutral.",
      hypothesis: "Durch systematisches Entfernen von physischem und digitalem Lärm aus deiner Umgebung erlebst du eine spürbare Verringerung mentaler Reibung.",
      missions: [
        { week: 1, theme: "Oberflächen", actions: ["Von einer sichtbaren Oberfläche alles entfernen, was nicht dort sein sollte.", "3 Gegenstände wegwerfen oder spenden, die seit 3 Monaten nicht angefasst wurden.", "Den Handy-Startbildschirm aufräumen: alle diese Woche nicht genutzten Apps löschen.", "Die Tasche komplett leeren und nur wirklich Benötigtes zurücklegen.", "Alle 'vorübergehend' platzierten Gegenstände, die länger als eine Woche dort liegen, wegräumen.", "Die störendste Oberfläche säubern und 72 Stunden sauber halten.", "Die '2-Minuten-Regel' anwenden: Wenn es weniger als 2 Minuten dauert, jetzt tun."] },
        { week: 2, theme: "Digital", actions: ["Alle E-Mails, die älter als 1 Woche sind, im Posteingang löschen oder archivieren.", "Von 3 E-Mail-Newslettern oder Werbungen abmelden, die nie gelesen werden.", "20 doppelte oder unscharfe Fotos aus der Kamerarolle löschen.", "Nicht geöffnete Apps der letzten 30 Tage löschen.", "Desktop oder Lesezeichen von 'nur für den Fall'-Elementen bereinigen.", "Den Download-Ordner leeren: alles löschen, was älter als 2 Wochen ist.", "Das Handy- oder Computerhintergrundbild auf etwas Klares und Minimalistisches ändern."] },
        { week: 3, theme: "Loslassen", actions: ["Einen 'nur für den Fall'-Gegenstand spenden oder wegwerfen.", "5 Social-Media-Konten entfolgen, die erschöpfen statt inspirieren.", "Eine Schublade oder Aufbewahrungsraum aufräumen, den man gemieden hat.", "Ein nicht genutztes, aber verlängertes Abonnement kündigen.", "Einen geliehenen Gegenstand zurückgeben oder eine offene Sache erledigen.", "3 Verpflichtungen aufschreiben, die man beenden oder neu verhandeln möchte.", "Zu einer Bitte 'Nein' sagen, die man nicht wirklich erfüllen will."] },
        { week: 4, theme: "Systeme", actions: ["Für 5 immer verlorene Gegenstände ein festes 'Zuhause' schaffen.", "Eine wöchentliche 5-minütige Oberflächen-Reset-Gewohnheit einführen.", "Hausregel aufstellen: 'Eines rein, eines raus' für jeden neuen Gegenstand.", "Den Hauptunordnungserzeuger im Zuhause identifizieren und eine Lösung entwerfen.", "Ein einfaches Triage-System für digitale Nachrichten einrichten.", "Jeden Sonntag 15 Minuten zum Zurücksetzen des Raums einplanen.", "Eigene 'Unordnungsregeln' aufschreiben: Was kommt nicht mehr in den Raum."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "Aufhören, zu viel nachzudenken: 30 Tage unvollkommenes Handeln",
      insight: "Du benutzt 'Nachdenken' als hochentwickeltes Aufschubwerkzeug. Perfektionismus ist ein Schild, das dich daran hindert, wirklich in die Arena zu treten.",
      hypothesis: "Indem du bei Kleinentscheidungen sofortiges, unvollkommenes Handeln erzwingst, wird die neuronale Bahn der 'Analyse-Lähmung' zu schwächen beginnen.",
      missions: [
        { week: 1, theme: "Tempo", actions: ["Die nächste kleine Entscheidung (was essen, was anziehen) in 60 Sekunden treffen.", "Eine E-Mail oder Nachricht mit einem bewussten, harmlosen Tippfehler schicken.", "Eine Aufgabe, die du meidest, für nur 2 Minuten beginnen. Du kannst danach aufhören.", "Einen Film/Serie in 3 Minuten wählen, sonst nichts schauen.", "Bewusst eine 'schlechte' Idee aufschreiben.", "Sofort auf eine Nachricht antworten, statt sie 'zum Drüber-Nachdenken' liegen zu lassen.", "Bewusst eine kleine Aufgabe offensichtlich unfertig lassen."] },
        { week: 2, theme: "Vertrauen", actions: ["Ohne geplante Route spazieren gehen.", "Etwas (Kaffee, Snack) kaufen, ohne Bewertungen zu prüfen.", "Eine Haushaltsaufgabe auf eine völlig andere und schnellere Art erledigen.", "Wenn ein Gedanke mit 'Was, wenn...' beginnt, laut sagen 'Na und?'", "Einen Entwurf wegwerfen und von vorne beginnen, ohne zu viel zu analysieren.", "Heute bei einer Wahl dem ersten Instinkt vertrauen, ohne wieder zu zweifeln.", "Einen kleinen Fehler von heute akzeptieren, ohne übermäßig Entschuldigungen zu machen."] },
        { week: 3, theme: "Loslassen", actions: ["Etwas Unkontrollierbares heute identifizieren und buchstäblich die Schultern zucken.", "3 Newsletter abbestellen, die 'Informationsüberflutung' verursachen.", "5 Minuten kreativ tätig sein (zeichnen, schreiben), wissend, dass das Ergebnis schlecht sein wird.", "Wenn nach einer Meinung gefragt, die einfachste, direkteste Antwort geben.", "Einen physischen Trödelgegenstand wegwerfen, der 'für alle Fälle' aufbewahrt wurde.", "Mitten in einer Aufgabe aufhören und 10 Minuten etwas anderes tun.", "Sich schnell für einen kurzen Moment der Ablenkung verzeihen."] },
        { week: 4, theme: "Schwung", actions: ["Eine 'Erledigt-Liste' mit heute Abgeschlossenem erstellen, auch wenn unvollkommen.", "Jetzt Wochenendpläne festlegen, ohne übermäßig zu recherchieren.", "Etwas veröffentlichen oder teilen, das man als '80 % bereit' einschätzt.", "Wenn man sich beim Grübeln ertappt, sofort 10 Hampelmänner oder Dehnübungen machen.", "Jemand anderen heute eine Entscheidung treffen lassen (Essen, Film).", "An eine Zeit zurückdenken, als eine schnelle Entscheidung sehr gut ausgegangen ist.", "Die eigene neue Regel für Risikoarme Entscheidungen aufschreiben."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "Die Anker-Routine: Der Morgen gehört dir",
      insight: "Du brauchst kein 'Miraclemorning' um 5 Uhr. Du musst nur die ersten 10 Minuten gewinnen, bevor dein Gehirn die Kontrolle an Angst, Pflichten oder leuchtende Bildschirme abgibt.",
      hypothesis: "Indem du die ersten Momente des Morgens mit bewussten, bildschirmfreien Verhaltensweisen schützt, entwickelst du ein Gefühl von Kontrolle und Ruhe, das den ganzen Tag anhält.",
      missions: [
        { week: 1, theme: "Fundament", actions: ["Heute Morgen ein volles Glas Wasser trinken, bevor du einen Bildschirm siehst.", "Sofort nach dem Aufstehen das Bett machen, keine Ausnahmen.", "Das Fenster öffnen oder 60 Sekunden frische Luft schnappen.", "Mindestens 10 Minuten nach dem Aufwachen nicht auf das Handy schauen.", "Vor dem Verlassen des Zimmers laut eine Sache sagen, auf die man sich heute freut.", "Kaffee, Tee oder Frühstück langsam und ohne Multitasking vorbereiten.", "Sich verpflichten, den Morgenanker 7 aufeinanderfolgende Tage ohne Abstriche einzuhalten."] },
        { week: 2, theme: "Absicht", actions: ["Im Moment des Aufwachens einen einzigen Satz in ein Tagebuch schreiben — nur einen.", "Bevor irgendeine Nachricht geöffnet wird, die 'wichtigste Aufgabe' des Tages festlegen.", "Vor dem offiziellen Start des Tages einen Absatz aus einem nicht-Nachrichten-Buch lesen.", "Vor Gesprächen 2 Minuten still mit dem Kaffee sitzen.", "An eine Person denken, für die man dankbar ist, und sich vorstellen, es ihr zu sagen.", "Den gestrigen Tag reflektieren: eine gut gelaufene Sache, eine zu verbessernde Sache.", "Das 'Ankerwort' der Woche wählen — einen Wert oder eine Qualität, die man verkörpern möchte."] },
        { week: 3, theme: "Körper", actions: ["Innerhalb von 2 Minuten nach dem Aufwachen 10 Körperbewegungen jeder Art machen.", "Etwas kühler als gewöhnlich duschen — die letzten 15 Sekunden mit kaltem Wasser.", "Eine verspannte Muskelgruppe 60 Sekunden dehnen, bevor man mit jemandem spricht.", "2 Minuten nach dem Aufwachen im natürlichen Licht stehen (draußen oder am Fenster).", "Vor dem Greifen nach dem Handy 5 tiefe, langsame Atemzüge mit geschlossenen Augen machen.", "Etwas mit vollständiger körperlicher Aufmerksamkeit tun, ohne mentales Abschweifen.", "Heute vor dem Konsumieren von Medien leicht bewegen oder spazieren gehen."] },
        { week: 4, theme: "Fluss", actions: ["Heute die gesamte Ankersequenz ohne Handy in der Nähe durchführen.", "Identifizieren, welches Element der Morgenroutine am meisten Energie gibt.", "Jeden belastenden Routineschritt kürzen oder vereinfachen.", "Ein 'Vorabend-Ritual' entwerfen, das den morgigen Anker erleichtert.", "Die Routine auch bei Verspätung durchführen — weniger Zeit, aber nicht Null.", "Reflektieren: Wie hat sich die Qualität der Morgen in 30 Tagen verändert?", "Den finalen 'Morgenanker' aufschreiben — 3 nicht verhandelbare erste Handlungen."] }
      ]
    }
  },
  pt: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "Silenciar o Ruído: 30 Dias para Reconquistar sua Atenção",
      insight: "Você não perdeu o foco — ele está sendo roubado por milhares de pequenas interrupções digitais. Seu cérebro precisa de silêncio, não de mais conteúdo.",
      hypothesis: "Ao criar pequenas fricções intencionais entre você e suas telas, você vai recuperar 30% da sua capacidade mental diária.",
      missions: [
        { week: 1, theme: "Limites", actions: ["Hoje, beber um copo cheio de água antes de olhar qualquer tela.", "Desativar todas as notificações push não humanas (notícias, redes sociais, compras).", "Deixar o celular em outro cômodo durante uma refeição.", "Carregar o celular fora do quarto esta noite.", "Colocar a tela do celular em modo escala de cinza por 2 horas.", "Não olhar o celular no banheiro hoje.", "Em conversas, manter o celular completamente fora do campo de visão."] },
        { week: 2, theme: "Intencional", actions: ["Aguardar 3 minutos antes de verificar uma notificação.", "Excluir um aplicativo que você rola sem pensar.", "Ler uma página de um livro ou revista física.", "Olhar pela janela por 2 minutos sem fazer nada.", "Remover os fones de ouvido por 10 minutos durante uma caminhada.", "Digitar as mensagens de texto manualmente, sem voz ou emojis preditivos.", "Colocar o celular no modo 'Não Perturbe' por uma hora durante o trabalho."] },
        { week: 3, theme: "Recalibragem", actions: ["Deixar o celular em casa e caminhar 15 minutos.", "Escrever em papel 3 coisas que realizou hoje.", "Em uma fila, simplesmente esperar — sem tela.", "Arrumar uma superfície 5 minutos sem música.", "Conversar com alguém por 5 minutos sem olhar a tela.", "Comer um lanche focando apenas na textura e no sabor.", "Alongar por 2 minutos em silêncio completo."] },
        { week: 4, theme: "Presença", actions: ["Identificar o maior gatilho digital do dia e se afastar fisicamente.", "Desligar a TV ou vídeos de fundo ao fazer tarefas domésticas.", "Observar a própria respiração por 10 minutos sem aplicativo de guia.", "Escrever à mão um bilhete curto para alguém (ou para si mesmo).", "Tirar uma 'foto mental' hoje em vez de usar a câmera do celular.", "Refletir sobre como a qualidade do sono mudou esta semana.", "Designar um canto de casa como zona permanente sem telas."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "Tampar os Vazamentos: 30 Dias de Microlimites",
      insight: "O esgotamento nem sempre vem do excesso — frequentemente vem do déficit daquilo que realmente nos abastece. O seu balde de energia tem pequenos furos.",
      hypothesis: "Ao tampar os vazamentos de energia emocional e física com 1 minuto diário de limites, sua vitalidade de base se restaurará naturalmente.",
      missions: [
        { week: 1, theme: "Pausa", actions: ["Definir um temporizador de 1 minuto e simplesmente fechar os olhos.", "Dizer 'Deixa eu verificar minha agenda' em vez de um 'Sim' imediato.", "Tomar um chá ou café sem fazer mais nada ao mesmo tempo.", "Respirar fundo 3 vezes devagar antes de abrir o e-mail.", "Escolher uma tarefa não urgente hoje e adiá-la intencionalmente para amanhã.", "Ajustar a postura agora para ficar 10% mais confortável.", "Relaxar o maxilar e deixar os ombros caírem por 30 segundos."] },
        { week: 2, theme: "Desconectar", actions: ["Desativar as notificações de trabalho 30 minutos mais cedo que o habitual.", "Silenciar um grupo de chat que drena energia.", "Caminhar 5 minutos sem destino nem objetivo.", "Cancelar ou recusar um pequeno compromisso esta semana.", "Ouvir uma música que evoque nostalgia e conforto.", "Tomar banho na temperatura exata que você prefere.", "Passar 5 minutos sem fazer absolutamente nada (sem leitura, sem assistir)."] },
        { week: 3, theme: "Recarregar", actions: ["Dormir 15 minutos antes do habitual esta noite.", "Comer sua comida favorita devagar, sem culpa.", "Vestir a roupa mais confortável que você tem.", "Escrever uma coisa que você conseguiu evitar fazer hoje.", "Elogiar-se em voz alta por completar uma rotina básica.", "Olhar uma foto antiga de um momento de felicidade genuína.", "Realizar uma tarefa com 50% de esforço em vez dos habituais 100%."] },
        { week: 4, theme: "Limites", actions: ["Dizer 'não' a algo pequeno hoje.", "Delegar ou pedir ajuda em uma tarefa pequena.", "Identificar um hábito 'vampiro de energia' e pausá-lo por 24 horas.", "Criar um limite físico hoje (fechar a porta, colocar fones de ouvido).", "Recusar-se a explicar ou justificar uma escolha pessoal feita hoje.", "Reconhecer o próprio cansaço sem tentar 'consertá-lo' imediatamente.", "Escrever sua regra de limite fundamental para o próximo mês."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "Detox do Tédio: 30 Dias para Descobrir Magia no Cotidiano",
      insight: "Você não perdeu a capacidade de sentir alegria — seu limiar de dopamina foi sequestrado por conteúdos hiperestimulantes. A alegria real ainda está lá, abaixo do ruído.",
      hypothesis: "Ao reduzir intencionalmente os gatilhos de alta dopamina por 30 dias, seu cérebro diminuirá sua linha de base superestimulada e os momentos ordinários voltarão a ser vívidos.",
      missions: [
        { week: 1, theme: "Consciência", actions: ["Notar o primeiro momento em que você pega o celular por tédio hoje e registrá-lo.", "Após assistir vídeos curtos, verificar: sente-se pleno ou vazio?", "Fazer uma refeição completa sem nenhuma tela ou entretenimento.", "Identificar suas 3 principais fontes de prazer imediato e anotá-las.", "Caminhar do lado de fora 5 minutos sem fones de ouvido.", "Sentar quieto por 2 minutos e observar o impulso de preencher o espaço.", "Substituir uma sessão de rolagem por olhar pela janela pelo mesmo tempo."] },
        { week: 2, theme: "Fricção", actions: ["Excluir um aplicativo de vídeos curtos do celular por 7 dias.", "Antes de consumir entretenimento, esperar 5 minutos para ver se o impulso diminui.", "Fazer 10 minutos de atividade 'chata': dobrar roupa, lavar louça devagar.", "Conversar com alguém por 10 minutos sem consultar o celular.", "Ler um livro ou revista física, mesmo que por pouco tempo.", "Cozinhar ou preparar uma refeição mais devagar e atento que o habitual.", "Ao se entediar, ficar com o tédio 3 minutos antes de agir."] },
        { week: 3, theme: "Saborear", actions: ["Beber a bebida da manhã devagar, focando apenas no sabor e na temperatura.", "Sair e notar 3 detalhes sensoriais específicos do mundo ao redor.", "Ouvir uma música do início ao fim sem fazer mais nada.", "Fechar os olhos, comer uma mordida e perceber toda a complexidade.", "Observar as mudanças de luz natural no ambiente por 5 minutos.", "Anotar uma pequena coisa que tornou o dia mais fácil ou agradável.", "Segurar uma bebida quente com as duas mãos e apenas respirar 1 minuto."] },
        { week: 4, theme: "Recabeamento", actions: ["Encontrar uma atividade analógica que traga satisfação tranquila (quebra-cabeça, esboço, diário).", "Fazer algo criativo com as mãos por 10 minutos.", "Identificar uma 'mídia lenta' que você goste (podcast, artigo longo, audiobook).", "Passar 10 minutos na natureza sem nenhuma agenda.", "Listar o que trazia alegria na infância, antes dos smartphones.", "Refletir sobre 2 momentos ordinários desta semana que pareceram mágicos.", "Projetar seu próprio 'conserto rápido' de baixa estimulação para momentos de desejo."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "Limpar a Bagunça: 30 Dias para uma Mente Mais Leve",
      insight: "Cada objeto no seu espaço faz uma pequena exigência à sua atenção. Seu ambiente é uma fonte de calma ou de estresse de fundo — não há neutro.",
      hypothesis: "Ao remover sistematicamente o ruído físico e digital do seu ambiente, você vai experimentar uma redução perceptível da fricção mental.",
      missions: [
        { week: 1, theme: "Superfícies", actions: ["Remover tudo que não deveria estar lá de uma superfície visível (mesa, prateleira).", "Jogar fora ou doar 3 objetos não tocados nos últimos 3 meses.", "Organizar a tela inicial do celular: excluir todos os apps não usados esta semana.", "Esvaziar completamente a bolsa e colocar de volta apenas o necessário.", "Guardar todos os objetos deixados 'temporariamente' há mais de uma semana.", "Limpar a superfície mais incômoda e mantê-la organizada por 72 horas.", "Aplicar a 'regra dos 2 minutos': se leva menos de 2 minutos, fazer agora."] },
        { week: 2, theme: "Digital", actions: ["Excluir ou arquivar todos os emails com mais de 1 semana na caixa de entrada.", "Cancelar a assinatura de 3 newsletters ou promoções que nunca são lidas.", "Excluir 20 fotos duplicadas ou desfocadas da galeria.", "Remover apps não abertos nos últimos 30 dias.", "Limpar a área de trabalho ou favoritos de itens salvos 'só por via das dúvidas'.", "Limpar a pasta de downloads: excluir tudo com mais de 2 semanas.", "Mudar o papel de parede do celular ou computador para algo limpo e minimalista."] },
        { week: 3, theme: "Soltar", actions: ["Doar ou jogar fora um objeto guardado 'caso precise'.", "Deixar de seguir 5 contas de redes sociais que esgotam em vez de inspirar.", "Organizar uma gaveta ou espaço de armazenamento que está sendo evitado.", "Cancelar uma assinatura não usada mas ainda renovada.", "Devolver ou resolver um objeto emprestado pendente há muito tempo.", "Escrever 3 compromissos que deseja encerrar ou renegociar.", "Dizer não a um pedido que não quer realmente cumprir."] },
        { week: 4, theme: "Sistemas", actions: ["Criar um 'lar' designado para 5 objetos que sempre se perdem.", "Estabelecer um hábito semanal de 5 minutos de redefinição de superfícies.", "Definir regra da casa: 'um entra, um sai' para qualquer novo objeto.", "Identificar o principal ponto de bagunça em casa e criar uma solução.", "Configurar um sistema simples de triagem para mensagens digitais.", "Agendar 15 minutos todo domingo para redefinir o espaço.", "Escrever suas próprias 'regras de bagunça': o que não entrará mais no seu espaço."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "Pare de Pensar Demais: 30 Dias de Ação Imperfeita",
      insight: "Você está usando o 'pensar' como uma ferramenta sofisticada de procrastinação. O perfeccionismo é um escudo que impede você de entrar verdadeiramente na arena.",
      hypothesis: "Ao forçar ações imediatas e imperfeitas em microdecisões, o caminho neural da 'paralisia de análise' começará a enfraquecer.",
      missions: [
        { week: 1, theme: "Velocidade", actions: ["Tomar a próxima pequena decisão (o que comer, o que vestir) em 60 segundos.", "Enviar um email ou mensagem com um erro de digitação intencional e inofensivo.", "Começar uma tarefa evitada por apenas 2 minutos. Pode parar depois.", "Escolher um filme/série em 3 minutos, ou não assistir nada.", "Escrever intencionalmente uma ideia 'ruim'.", "Responder imediatamente a uma mensagem em vez de deixá-la 'para pensar'.", "Deixar intencionalmente uma pequena tarefa visivelmente incompleta."] },
        { week: 2, theme: "Confiança", actions: ["Sair para caminhar sem rota planejada.", "Comprar algo (café, lanche) sem consultar avaliações.", "Fazer uma tarefa doméstica de uma forma completamente diferente e mais rápida.", "Se um pensamento começar com 'E se...', dizer em voz alta 'E daí?'", "Jogar fora um rascunho e recomeçar do zero sem analisar demais.", "Confiar no primeiro instinto para uma escolha hoje, sem reconsiderar.", "Aceitar um pequeno erro cometido hoje sem pedir desculpas excessivas."] },
        { week: 3, theme: "Soltar", actions: ["Identificar uma coisa fora do controle hoje e literalmente dar de ombros.", "Cancelar a assinatura de 3 newsletters que causam 'sobrecarga de informação'.", "Fazer 5 minutos de algo criativo (desenho, escrita), sabendo que o resultado será ruim.", "Quando pedido uma opinião, dar a resposta mais simples e direta.", "Jogar fora um objeto físico guardado 'por via das dúvidas'.", "Parar no meio de uma tarefa e mudar para outra coisa por 10 minutos.", "Perdoar-se rapidamente por um momento de distração."] },
        { week: 4, theme: "Impulso", actions: ["Fazer uma 'lista de realizações' do que foi concluído hoje, mesmo que imperfeito.", "Decidir agora os planos do fim de semana sem pesquisar demais.", "Publicar ou compartilhar algo considerado '80% pronto'.", "Ao se pegar ruminando, fazer imediatamente 10 polichinelos ou alongamentos.", "Deixar outra pessoa tomar uma decisão por você hoje (comida, filme).", "Lembrar de uma vez em que uma decisão rápida deu muito certo.", "Escrever sua nova regra para decisões de baixo risco."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "A Rotina Âncora: Seja Dono da Sua Manhã",
      insight: "Você não precisa de um 'morning miracle' às 5h. Basta vencer os primeiros 10 minutos antes que seu cérebro entregue o controle à ansiedade, obrigações ou uma tela brilhante.",
      hypothesis: "Ao proteger consistentemente os primeiros momentos do dia com comportamentos intencionais e sem telas, você vai desenvolver um senso de controle e calma que dura o dia todo.",
      missions: [
        { week: 1, theme: "Fundação", actions: ["Esta manhã, beber um copo cheio de água antes de olhar qualquer tela.", "Arrumar a cama imediatamente ao levantar, sem exceções.", "Abrir a janela ou sair por 60 segundos para respirar ar fresco.", "Não consultar o celular até estar acordado há pelo menos 10 minutos.", "Antes de sair do quarto, dizer em voz alta uma coisa que aguarda com expectativa hoje.", "Preparar café, chá ou café da manhã devagar e sem multitarefa.", "Comprometer-se a manter a âncora matinal por 7 dias consecutivos sem concessões."] },
        { week: 2, theme: "Intenção", actions: ["No momento do despertar, escrever uma única frase em um diário — só uma.", "Definir a 'tarefa mais importante' do dia antes de abrir qualquer mensagem.", "Ler um parágrafo de um livro não noticioso e não social antes de começar o dia.", "Sentar quieto com o café por 2 minutos antes de qualquer conversa.", "Pensar em uma pessoa pela qual é grata e imaginar dizer isso a ela.", "Revisar o dia anterior: uma coisa que correu bem, uma a melhorar.", "Escolher a 'palavra âncora' da semana — um valor ou qualidade a incorporar."] },
        { week: 3, theme: "Corpo", actions: ["Fazer 10 movimentos corporais dentro de 2 minutos após acordar.", "Tomar banho um pouco mais frio que o habitual — terminar com 15 segundos de água fria.", "Alongar um grupo muscular tenso por 60 segundos antes de falar com alguém.", "Ficar sob luz natural por 2 minutos após acordar (do lado de fora ou perto da janela).", "Fazer 5 respirações profundas e lentas com os olhos fechados antes de pegar o celular.", "Fazer uma coisa com atenção física completa, sem divagação mental.", "Caminhar ou movimentar-se levemente antes de consumir qualquer mídia hoje."] },
        { week: 4, theme: "Fluxo", actions: ["Completar toda a sequência âncora de hoje sem o celular por perto.", "Identificar qual elemento da rotina matinal traz mais energia.", "Encurtar ou simplificar qualquer passo da rotina que pareça um fardo.", "Projetar um 'ritual da véspera' que facilite a âncora de amanhã.", "Realizar a rotina mesmo atrasado — menos tempo, mas não zero.", "Refletir: como a qualidade das manhãs mudou em 30 dias?", "Escrever a 'âncora matinal' final — as 3 primeiras ações inegociáveis."] }
      ]
    }
  },
  ar: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "كتم الضوضاء: 30 يومًا لاستعادة انتباهك",
      insight: "لم تفقد تركيزك — إنه يُسرق من قِبل آلاف الانقطاعات الرقمية الصغيرة. دماغك يشتاق إلى الهدوء، لا إلى المزيد من المحتوى.",
      hypothesis: "بإنشاء احتكاكات صغيرة ومتعمدة بينك وبين شاشاتك، ستستعيد 30٪ من طاقتك الذهنية اليومية.",
      missions: [
        { week: 1, theme: "الحدود", actions: ["اشرب كوبًا كاملًا من الماء قبل النظر إلى أي شاشة اليوم.", "أوقف جميع الإشعارات الفورية غير البشرية (الأخبار، وسائل التواصل، التسوق).", "اترك هاتفك في غرفة أخرى أثناء وجبة كاملة.", "اشحن هاتفك خارج غرفة النوم الليلة.", "اضبط شاشة هاتفك على وضع الرمادي لمدة ساعتين.", "لا تنظر إلى هاتفك في الحمام اليوم.", "ضع هاتفك بعيدًا عن مجال رؤيتك تمامًا أثناء المحادثات."] },
        { week: 2, theme: "تعمّد", actions: ["انتظر 3 دقائق قبل التحقق من أي إشعار.", "احذف تطبيقًا واحدًا تتصفحه دون تفكير.", "اقرأ صفحة واحدة من كتاب أو مجلة ورقية.", "انظر من النافذة دقيقتين دون أن تفعل شيئًا.", "انزع سماعاتك لمدة 10 دقائق أثناء المشي.", "اكتب رسائلك النصية يدويًا دون استخدام الصوت أو الرموز التعبيرية التنبؤية.", "ضع هاتفك على وضع 'عدم الإزعاج' لساعة كاملة خلال العمل."] },
        { week: 3, theme: "إعادة المعايرة", actions: ["اترك هاتفك في المنزل وامشِ 15 دقيقة.", "اكتب على ورقة 3 أشياء أنجزتها اليوم.", "في طابور الانتظار، فقط انتظر — بلا شاشة.", "رتّب سطحًا لمدة 5 دقائق بدون موسيقى.", "تحدّث مع شخص ما 5 دقائق دون النظر إلى الشاشة.", "تناول وجبة خفيفة مركّزًا فقط على القوام والمذاق.", "مدّ جسمك دقيقتين في صمت تام."] },
        { week: 4, theme: "الحاضر", actions: ["حدّد أكبر محفّز رقمي اليوم وابتعد عنه جسديًا.", "أغلق التلفاز أو مقاطع الفيديو الخلفية أثناء الأعمال المنزلية.", "راقب تنفسك 10 دقائق بدون تطبيق إرشادي.", "اكتب بخط اليد ملاحظة قصيرة لشخص ما (أو لنفسك).", "التقط 'صورة ذهنية' اليوم بدلًا من إخراج هاتفك.", "تأمّل كيف تغيّرت جودة نومك هذا الأسبوع.", "خصّص ركنًا دائمًا في منزلك كمنطقة خالية من الشاشات."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "سدّ التسربات: 30 يومًا من الحدود الصغيرة",
      insight: "الإرهاق لا يأتي دائمًا من الإفراط في العمل — كثيرًا ما يأتي من نقص ما يملأك فعلًا. دلو طاقتك يحوي ثغرات صغيرة.",
      hypothesis: "بسدّ تسرب الطاقة العاطفية والجسدية بدقيقة واحدة يوميًا من الحدود، ستتعافى حيويتك الأساسية بشكل طبيعي.",
      missions: [
        { week: 1, theme: "توقف", actions: ["اضبط مؤقتًا لمدة دقيقة وأغمض عينيك فحسب.", "قل 'دعني أتحقق من جدولي' بدلًا من 'نعم' الفورية.", "اشرب كوب شاي أو قهوة دون أن تفعل أي شيء آخر.", "خذ 3 أنفاس عميقة وبطيئة قبل فتح البريد الإلكتروني.", "اختر مهمة غير عاجلة اليوم وأجّلها عمدًا إلى الغد.", "عدّل وضعية جلوسك الآن لتصبح أكثر راحة بنسبة 10٪.", "أرخِ فكّك واترك كتفيك يسقطان لمدة 30 ثانية."] },
        { week: 2, theme: "فصل", actions: ["أوقف إشعارات العمل قبل 30 دقيقة من المعتاد.", "اكتم مجموعة محادثة تستنزف طاقتك.", "امشِ 5 دقائق بدون وجهة أو هدف.", "ألغِ أو ارفض التزامًا صغيرًا هذا الأسبوع.", "استمع إلى أغنية تبعث فيك الحنين والطمأنينة.", "استحمّ بالمياه بالدرجة التي تفضّلها تمامًا.", "اقضِ 5 دقائق دون أن تفعل شيئًا (لا قراءة، لا مشاهدة)."] },
        { week: 3, theme: "إعادة شحن", actions: ["نم الليلة 15 دقيقة قبل موعدك المعتاد.", "تناول طعامك المفضل ببطء دون شعور بالذنب.", "ارتدِ أكثر ملابسك راحةً.", "اكتب شيئًا واحدًا نجحت في تجنّبه اليوم.", "امدح نفسك بصوت عالٍ على إنجاز مهمة يومية أساسية.", "انظر إلى صورة قديمة كنت فيها سعيدًا حقًا.", "أنجز مهمة بجهد 50٪ بدلًا من 100٪ المعتادة."] },
        { week: 4, theme: "حدود", actions: ["قل 'لا' لشيء صغير اليوم.", "فوّض أو اطلب المساعدة في مهمة صغيرة.", "حدّد عادة 'مصّاصة طاقة' وأوقفها لمدة 24 ساعة.", "أنشئ حدًا جسديًا اليوم (أغلق الباب، ضع سماعاتك).", "ارفض شرح أو تبرير قرار شخصي اتخذته اليوم.", "اعترف بتعبك دون محاولة 'إصلاحه' فورًا.", "اكتب قاعدة حدودك الأساسية للشهر القادم."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "تخلّص من الملل: اكتشف السحر في العادي",
      insight: "لم تفقد قدرتك على الشعور بالبهجة — عتبة الدوبامين لديك اختُطفت من قِبل المحتوى شديد التحفيز. البهجة الحقيقية لا تزال هناك، تحت الضوضاء.",
      hypothesis: "بتقليل محفزات الدوبامين العالية عمدًا لمدة 30 يومًا، سيخفّض دماغك قاعدته المفرطة في التحفيز وستبدو اللحظات العادية حية ومعنوية مجددًا.",
      missions: [
        { week: 1, theme: "الوعي", actions: ["لاحظ المرة الأولى التي تمدّ فيها يدك للهاتف بسبب الملل اليوم وسجّلها.", "بعد مشاهدة مقاطع قصيرة، تحقق: هل تشعر بالامتلاء أم الفراغ؟", "تناول وجبة كاملة بدون أي شاشة أو ترفيه.", "حدّد أهم 3 مصادر للمتعة الفورية لديك واكتبها.", "امشِ في الخارج 5 دقائق بدون سماعات.", "اجلس بهدوء دقيقتين وراقب الدافع لملء الفراغ.", "استبدل جلسة تصفح بالنظر من النافذة لنفس المدة."] },
        { week: 2, theme: "احتكاك", actions: ["احذف تطبيق مقاطع قصيرة من هاتفك لمدة 7 أيام.", "انتظر 5 دقائق قبل استهلاك الترفيه وانظر إن خفّ الدافع.", "مارس نشاطًا 'مملًا' 10 دقائق: طيّ الملابس، غسل الأطباق ببطء.", "تحدّث مع شخص 10 دقائق دون التحقق من هاتفك.", "اقرأ كتابًا أو مجلة ورقية ولو قليلًا.", "اطبخ أو اجهّز وجبة بشكل أبطأ وأكثر انتباهًا من المعتاد.", "حين تشعر بالملل، ابقَ مع الملل 3 دقائق قبل التصرف."] },
        { week: 3, theme: "تذوّق", actions: ["اشرب مشروبك الصباحي ببطء مركّزًا فقط على مذاقه وحرارته.", "اخرج ولاحظ 3 تفاصيل حسية محددة في العالم المحيط.", "استمع إلى أغنية كاملة من البداية للنهاية دون عمل أي شيء آخر.", "أغمض عينيك، خذ قضمة من الطعام، ولاحظ كل تعقيداتها.", "راقب تغيّرات الضوء الطبيعي في مكانك لمدة 5 دقائق.", "اكتب شيئًا صغيرًا جعل يومك أخف أو أجمل.", "أمسك مشروبًا ساخنًا بكلتا يديك وتنفّس فقط لمدة دقيقة."] },
        { week: 4, theme: "إعادة برمجة", actions: ["ابحث عن نشاط تناظري يمنحك رضا هادئًا (أحجية، رسم، يوميات).", "افعل شيئًا إبداعيًا بيديك لمدة 10 دقائق.", "حدّد نوع 'وسائل إعلام بطيئة' تستمتع بها (بودكاست، مقال طويل، كتاب صوتي).", "اقضِ 10 دقائق في الطبيعة بدون أي هدف.", "أدرج ما كان يسعدك في طفولتك قبل عصر الهواتف الذكية.", "تأمّل لحظتين عاديتين هذا الأسبوع شعرتا وكأنهما سحريتان.", "صمّم 'حلًا سريعًا' شخصيًا منخفض التحفيز لأوقات الرغبة."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "تخليص المكان: 30 يومًا لعقل أخف",
      insight: "كل شيء في مساحتك يطالب بجزء صغير من انتباهك. بيئتك إما مصدر للهدوء أو مصدر للضغط الخفي — لا يوجد محايد.",
      hypothesis: "بإزالة الضوضاء المادية والرقمية من بيئتك بشكل منهجي، ستختبر انخفاضًا ملموسًا في الاحتكاك الذهني.",
      missions: [
        { week: 1, theme: "الأسطح", actions: ["أزِل كل ما لا ينبغي أن يكون هناك من سطح مرئي (مكتب، طاولة، رف).", "تخلّص من أو تبرّع بـ 3 أشياء لم تلمسها منذ 3 أشهر.", "رتّب الشاشة الرئيسية للهاتف: احذف كل التطبيقات غير المستخدمة هذا الأسبوع.", "أفرغ حقيبتك تمامًا وضع فيها فقط ما تحتاجه فعلًا.", "أعِد جميع الأشياء الموضوعة 'مؤقتًا' منذ أكثر من أسبوع.", "امسح السطح الأكثر إزعاجًا وحافظ على نظافته 72 ساعة.", "طبّق 'قاعدة الدقيقتين': إن استغرق الأمر أقل من دقيقتين، افعله الآن."] },
        { week: 2, theme: "رقمي", actions: ["احذف أو أرشف كل البريد الإلكتروني الأقدم من أسبوع في صندوق الوارد.", "ألغِ الاشتراك في 3 رسائل إخبارية أو عروض ترويجية لا تقرأها أبدًا.", "احذف 20 صورة مكررة أو ضبابية من الألبوم.", "احذف التطبيقات التي لم تفتح خلال 30 يومًا.", "نظّف سطح المكتب أو المفضلة من العناصر المحفوظة 'للاحتياط'.", "نظّف مجلد التنزيلات: احذف كل ما هو أقدم من أسبوعين.", "غيّر خلفية هاتفك أو الكمبيوتر إلى شيء بسيط وبسيط."] },
        { week: 3, theme: "التخلّي", actions: ["تبرّع بشيء أو تخلّص منه كنت تحتفظ به 'للاحتياط'.", "ألغِ المتابعة عن 5 حسابات على وسائل التواصل تستنزف بدلًا من أن تلهم.", "نظّم درجًا أو مساحة تخزين كنت تتجنبها.", "ألغِ اشتراكًا غير مستخدم لكنك لا تزال تجدّده.", "أعِد شيئًا مستعارًا أو عالِج أمرًا معلّقًا منذ وقت طويل.", "اكتب 3 التزامات تريد إنهاءها أو إعادة التفاوض بشأنها.", "قل 'لا' لطلب لا تريد حقًا الوفاء به."] },
        { week: 4, theme: "أنظمة", actions: ["أنشئ 'منزلًا' محددًا لـ 5 أشياء دائمة الضياع.", "أسّس عادة أسبوعية لإعادة ضبط الأسطح لمدة 5 دقائق.", "ضع قاعدة للمنزل: 'شيء يدخل، شيء يخرج' لكل شيء جديد.", "حدّد أكثر مصادر الفوضى في منزلك وصمّم حلًا.", "أنشئ نظامًا بسيطًا لفرز الرسائل الرقمية.", "خطّط لـ 15 دقيقة كل أحد لإعادة ضبط مساحتك.", "اكتب 'قواعدك للنظام' الخاصة: ما لن تسمح بدخوله إلى مساحتك بعد الآن."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "توقّف عن التفكير المفرط: 30 يومًا من التصرف غير المثالي",
      insight: "أنت تستخدم 'التفكير' كأداة متطورة للتسويف. الكمالية درعٌ يمنعك من الدخول إلى الحلبة فعلًا.",
      hypothesis: "بإجبار نفسك على الفعل الفوري غير المثالي في القرارات الصغيرة، سيبدأ المسار العصبي لـ 'شلل التحليل' في الضعف.",
      missions: [
        { week: 1, theme: "السرعة", actions: ["اتخذ القرار الصغير التالي (ماذا تأكل، ماذا ترتدي) في أقل من 60 ثانية.", "أرسل بريدًا إلكترونيًا أو رسالة تحوي خطأ إملائيًا متعمدًا وغير ضار.", "ابدأ مهمة كنت تتجنبها لمدة دقيقتين فقط. يمكنك التوقف بعدها.", "اختر فيلمًا أو مسلسلًا في 3 دقائق وإلا لا تشاهد شيئًا.", "اكتب عمدًا فكرة 'سيئة'.", "ردّ فورًا على رسالة بدلًا من تركها 'للتفكير فيها لاحقًا'.", "اترك مهمة صغيرة ناقصة بشكل واضح عمدًا."] },
        { week: 2, theme: "الثقة", actions: ["اخرج للمشي بدون مسار محدد مسبقًا.", "اشترِ شيئًا (قهوة أو وجبة خفيفة) بدون الاطلاع على تقييمات.", "أنجز مهمة منزلية بطريقة مختلفة تمامًا وأسرع.", "إذا بدأ تفكيرك بـ 'ماذا لو...'، قل بصوت عالٍ 'وماذا في ذلك؟'", "ارمِ مسودة وابدأ من الصفر دون فرط في التحليل.", "ثق بغريزتك الأولى في اختيار ما اليوم، دون تراجع.", "اقبل خطأً صغيرًا ارتكبته اليوم دون اعتذار مفرط."] },
        { week: 3, theme: "الإفراج", actions: ["حدّد شيئًا خارجًا عن إرادتك اليوم وهزّ كتفيك حرفيًا.", "ألغِ الاشتراك في 3 رسائل إخبارية تسبب 'فيضان المعلومات'.", "مارس نشاطًا إبداعيًا (رسم، كتابة) لمدة 5 دقائق مع علمك أن النتيجة ستكون سيئة.", "حين يُطلب منك رأيك، أعطِ الإجابة الأبسط والأكثر مباشرة.", "تخلّص من شيء مادي كنت تحتفظ به 'للاحتياط'.", "توقف في منتصف مهمة وتحوّل لشيء آخر لمدة 10 دقائق.", "اسامح نفسك بسرعة على لحظة تشتت عابرة."] },
        { week: 4, theme: "الزخم", actions: ["اصنع 'قائمة إنجازات' لما أنهيته اليوم، حتى لو كان غير مثالي.", "قرّر الآن خطط نهاية الأسبوع دون بحث مفرط.", "انشر أو شارك شيئًا تعتبره 'جاهزًا بنسبة 80٪ فقط'.", "حين تضبط نفسك تجترّ الأفكار، افعل فورًا 10 قفزات أو تمدّدات.", "دع شخصًا آخر يتخذ قرارًا نيابةً عنك اليوم (ماذا تأكل، ماذا تشاهد).", "تذكّر مرة أخذت فيها قرارًا سريعًا وجاءت النتائج ممتازة.", "اكتب قاعدتك الجديدة لاتخاذ القرارات منخفضة المخاطر."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "روتين المرساة: امتلك صباحك",
      insight: "لست بحاجة لـ 'الصباح المعجزة' في الخامسة صباحًا. كل ما تحتاجه هو كسب أول 10 دقائق قبل أن يُسلم دماغك السيطرة للقلق، أو الالتزامات، أو الشاشة المضيئة.",
      hypothesis: "بحماية اللحظات الأولى من صباحك بسلوكيات متعمدة وخالية من الشاشات، ستنمّي شعورًا بالسيطرة والهدوء يمتد طوال اليوم.",
      missions: [
        { week: 1, theme: "الأساس", actions: ["هذا الصباح، اشرب كوبًا كاملًا من الماء قبل أي شاشة.", "رتّب فراشك فور الاستيقاظ مباشرةً، بلا استثناءات.", "افتح النافذة أو اخرج 60 ثانية لاستنشاق الهواء النقي.", "لا تتحقق من هاتفك حتى تكون مستيقظًا منذ 10 دقائق على الأقل.", "قبل مغادرة غرفتك، قل بصوت عالٍ شيئًا واحدًا تتطلع إليه اليوم.", "جهّز قهوتك أو شايك أو فطورك ببطء ودون تعدد مهام.", "التزم بتنفيذ مرساة الصباح 7 أيام متتالية دون تنازلات."] },
        { week: 2, theme: "النية", actions: ["في لحظة الاستيقاظ، اكتب جملة واحدة فقط في مفكرة — جملة واحدة.", "حدّد 'المهمة الأهم' ليومك قبل فتح أي رسالة.", "اقرأ فقرة من كتاب غير إخباري وغير اجتماعي قبل بدء يومك.", "اجلس بهدوء مع قهوتك دقيقتين قبل أي محادثة.", "فكّر في شخص تشعر بالامتنان تجاهه وتخيّل إخباره بذلك.", "راجع أمسك: شيء واحد سار بشكل جيد، وشيء واحد ستفعله بشكل مختلف.", "اختر 'كلمة المرساة' لهذا الأسبوع — قيمة أو صفة تريد تجسيدها."] },
        { week: 3, theme: "الجسد", actions: ["أنجز 10 حركات جسدية خلال دقيقتين من الاستيقاظ.", "استحمّ بماء أبرد قليلًا من المعتاد — أنهِ بـ 15 ثانية من الماء البارد.", "مدّ مجموعة عضلات متوترة 60 ثانية قبل التحدث مع أي شخص.", "قف في الضوء الطبيعي دقيقتين بعد الاستيقاظ (في الخارج أو بجانب النافذة).", "خذ 5 أنفاس عميقة وبطيئة بعيون مغمضة قبل تناول هاتفك.", "أدِّ مهمة واحدة بانتباه جسدي كامل دون تشتت ذهني.", "تمشَّ أو تحرّك خفيفًا قبل استهلاك أي وسائل إعلام اليوم."] },
        { week: 4, theme: "التدفق", actions: ["أكمل اليوم التسلسل الكامل لمرساتك بدون هاتف.", "حدّد أي عنصر في روتين الصباح يمنحك أكثر طاقة.", "قصّر أو بسّط أي خطوة تبدو عبئًا.", "صمّم 'طقس ما قبل النوم' يجعل مرساة الغد أيسر.", "نفّذ الروتين حتى لو تأخرت — وقت أقل، لا انعدام للوقت.", "تأمّل: كيف تغيّرت جودة صباحاتك خلال 30 يومًا؟", "اكتب 'مرساتك الصباحية' النهائية — أول 3 أفعال لا تفاوض عليها."] }
      ]
    }
  },
  ru: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "Заглушить шум: 30 дней, чтобы вернуть внимание",
      insight: "Ты не потерял концентрацию — её крадут тысячи мелких цифровых прерываний. Твой мозг жаждет тишины, а не ещё больше контента.",
      hypothesis: "Создавая небольшие намеренные трения между собой и экранами, ты вернёшь 30% ежедневной умственной ёмкости.",
      missions: [
        { week: 1, theme: "Границы", actions: ["Сегодня выпить полный стакан воды перед тем, как смотреть на любой экран.", "Отключить все push-уведомления не от людей (новости, соцсети, покупки).", "Оставить телефон в другой комнате во время одного приёма пищи.", "Заряжать телефон вне спальни этой ночью.", "Поставить экран телефона в режим оттенков серого на 2 часа.", "Не смотреть телефон в туалете сегодня.", "В разговоре держать телефон полностью вне поля зрения."] },
        { week: 2, theme: "Осознанно", actions: ["После уведомления ждать 3 минуты перед тем, как проверить его.", "Удалить одно приложение, которое листаешь бездумно.", "Прочитать одну страницу бумажной книги или журнала.", "2 минуты смотреть в окно, ничего не делая.", "На прогулке снять наушники на 10 минут.", "Набирать SMS вручную без голосового ввода или автоподбора.", "Поставить телефон в режим 'Не беспокоить' на час во время работы."] },
        { week: 3, theme: "Рекалибровка", actions: ["Оставить телефон дома и пройтись 15 минут.", "Написать на бумаге 3 вещи, которые сделал сегодня.", "В очереди просто ждать — без экрана.", "5 минут убираться без музыки.", "5 минут говорить с кем-то, не глядя на экран.", "Есть перекус, сосредоточившись только на текстуре и вкусе.", "2 минуты потянуться в полной тишине."] },
        { week: 4, theme: "Настоящее", actions: ["Определить главный цифровой триггер дня и физически отдалиться от него.", "При выполнении домашних дел выключить ТВ или фоновые видео.", "10 минут наблюдать за дыханием без приложения-гида.", "Написать от руки короткую записку кому-то (или себе).", "Сделать сегодня 'мысленный снимок' вместо того, чтобы доставать телефон.", "Подумать, как изменилось качество сна на этой неделе.", "Выделить уголок дома как постоянную зону без экранов."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "Заделать утечки: 30 дней микроограничений",
      insight: "Выгорание не всегда от перегрузки — часто оно от недостатка того, что действительно восстанавливает. В твоём ведре энергии маленькие дыры.",
      hypothesis: "Закрывая утечки эмоциональной и физической энергии 1 минутой ограничений в день, базовая жизненная сила естественно восстановится.",
      missions: [
        { week: 1, theme: "Пауза", actions: ["Поставить таймер на 1 минуту и просто закрыть глаза.", "Сказать 'Дай мне проверить расписание' вместо немедленного 'Да'.", "Выпить чай или кофе, не делая больше ничего одновременно.", "Сделать 3 глубоких медленных вдоха перед открытием почты.", "Выбрать одну несрочную задачу и намеренно перенести на завтра.", "Прямо сейчас сделать осанку на 10% удобнее.", "30 секунд расслабить челюсть и опустить плечи."] },
        { week: 2, theme: "Отключение", actions: ["Отключить рабочие уведомления на 30 минут раньше обычного.", "Заглушить групповой чат, от которого устаёшь.", "Гулять 5 минут без цели и направления.", "Отменить или отказать в одном небольшом обязательстве на этой неделе.", "Послушать песню, вызывающую ностальгию и ощущение безопасности.", "Принять душ с любимой температурой.", "Провести 5 минут абсолютно ничего не делая."] },
        { week: 3, theme: "Подзарядка", actions: ["Лечь спать сегодня на 15 минут раньше обычного.", "Медленно есть любимую еду без чувства вины.", "Надеть самую удобную одежду.", "Записать одну вещь, которую успешно не сделал сегодня.", "Вслух похвалить себя за выполнение базовой повседневной рутины.", "Посмотреть на старую фотографию, когда был по-настоящему счастлив.", "Выполнить задачу с 50% усилий вместо обычных 100%."] },
        { week: 4, theme: "Границы", actions: ["Сказать 'нет' чему-то маленькому сегодня.", "Делегировать или попросить помощи в небольшом деле.", "Определить привычку-'вампира энергии' и поставить на паузу на 24 часа.", "Создать сегодня физическую границу (закрыть дверь, надеть наушники).", "Отказаться объяснять или оправдывать личный выбор, сделанный сегодня.", "Признать свою усталость, не пытаясь сразу её 'исправить'.", "Записать своё основное правило границы на следующий месяц."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "Детокс скуки: 30 дней, чтобы найти магию в обычном",
      insight: "Ты не потерял способность чувствовать радость — твой дофаминовый порог захвачен гиперстимулирующим контентом. Настоящая радость ещё там, под шумом.",
      hypothesis: "Намеренно снижая высокодофаминовые триггеры 30 дней, мозг снизит перевозбуждённую базу, и обычные моменты снова станут живыми.",
      missions: [
        { week: 1, theme: "Осознанность", actions: ["Заметить первый момент, когда сегодня потянулся к телефону от скуки, и записать его.", "После просмотра коротких видео проверить: чувствуешь наполненность или пустоту?", "Полноценно поесть без какого-либо экрана или развлечения.", "Определить топ-3 источника мгновенного удовольствия и записать.", "Выйти погулять 5 минут без наушников.", "2 минуты сидеть тихо и наблюдать за желанием заполнить пространство.", "Заменить один сеанс скроллинга таким же временем взгляда в окно."] },
        { week: 2, theme: "Трение", actions: ["Удалить одно приложение коротких видео с телефона на 7 дней.", "Перед потреблением развлечений ждать 5 минут — исчезнет ли желание?", "10 минут делать 'скучную' активность: складывать одежду, медленно мыть посуду.", "10 минут разговаривать с кем-то, не проверяя телефон.", "Читать бумажную книгу или журнал, пусть и недолго.", "Готовить или готовить еду медленнее и внимательнее обычного.", "При скуке — 3 минуты просто быть со скукой перед тем, как что-то делать."] },
        { week: 3, theme: "Смакование", actions: ["Пить утренний напиток медленно, сосредоточившись только на вкусе и тепле.", "Выйти и заметить 3 конкретных сенсорных детали окружающего мира.", "Прослушать одну песню от начала до конца, не делая ничего другого.", "Закрыть глаза, съесть один кусочек еды и ощутить всю его сложность.", "5 минут наблюдать за изменением естественного освещения в своём пространстве.", "Записать одну маленькую вещь, сделавшую день сегодня легче или приятнее.", "Держать горячий напиток двумя руками и просто дышать 1 минуту."] },
        { week: 4, theme: "Перепрошивка", actions: ["Найти аналоговую активность, дающую тихое удовлетворение (пазл, скетчинг, дневник).", "10 минут делать что-то творческое руками.", "Определить 'медленное медиа', которое нравится (подкаст, длинная статья, аудиокнига).", "Провести 10 минут на природе без какой-либо цели.", "Перечислить, что приносило радость в детстве, до смартфонов.", "Вспомнить 2 обычных момента этой недели, казавшихся волшебными.", "Придумать личный 'быстрый выход' с низкой стимуляцией на моменты желания."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "Расчистить пространство: 30 дней для лёгкого ума",
      insight: "Каждая вещь в твоём пространстве предъявляет маленькое требование к твоему вниманию. Окружение — либо источник спокойствия, либо фонового стресса. Нейтрального нет.",
      hypothesis: "Систематически убирая физический и цифровой шум из среды, ты почувствуешь ощутимое снижение умственного трения.",
      missions: [
        { week: 1, theme: "Поверхности", actions: ["Убрать всё лишнее с одной видимой поверхности (стол, полка).", "Выбросить или отдать 3 вещи, не тронутые за 3 месяца.", "Навести порядок на главном экране телефона: удалить все неиспользуемые приложения.", "Полностью опустошить сумку и положить обратно только нужное.", "Убрать всё, что лежит 'временно' больше недели.", "Вытереть самую раздражающую поверхность и держать чистой 72 часа.", "Применить 'правило 2 минут': если займёт меньше 2 минут — сделать сейчас."] },
        { week: 2, theme: "Цифровое", actions: ["Удалить или архивировать все письма старше 1 недели во входящих.", "Отписаться от 3 рассылок или акций, которые никогда не читаешь.", "Удалить 20 повторяющихся или размытых фото из галереи.", "Удалить приложения, не открытые за 30 дней.", "Очистить рабочий стол или закладки от 'может пригодится'.", "Почистить папку загрузок: удалить всё старше 2 недель.", "Сменить обои телефона или компьютера на что-то чистое и минималистичное."] },
        { week: 3, theme: "Отпустить", actions: ["Отдать или выбросить вещь, хранимую 'на всякий случай'.", "Отписаться от 5 аккаунтов соцсетей, которые истощают, а не вдохновляют.", "Разобрать ящик или пространство для хранения, которое избегаешь.", "Отменить подписку, которой не пользуешься, но продолжаешь оплачивать.", "Вернуть или решить вопрос с давно висящей чужой вещью.", "Записать 3 обязательства, которые хочешь завершить или переговорить.", "Сказать 'нет' просьбе, которую на самом деле не хочешь выполнять."] },
        { week: 4, theme: "Системы", actions: ["Создать постоянное 'место' для 5 вещей, которые всегда теряются.", "Ввести еженедельную привычку сбрасывать поверхности за 5 минут.", "Установить домашнее правило: 'одно входит — одно выходит'.", "Определить главный источник беспорядка дома и придумать решение.", "Настроить простую систему сортировки цифровых сообщений.", "Запланировать 15 минут каждое воскресенье для сброса пространства.", "Записать личные 'правила чистоты': что больше не войдёт в пространство."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "Перестать пережёвывать: 30 дней несовершенного действия",
      insight: "Ты используешь 'думание' как изощрённый инструмент откладывания. Перфекционизм — щит, мешающий по-настоящему выйти на арену.",
      hypothesis: "Вынуждая себя к немедленному несовершенному действию в маленьких решениях, нейронная цепь 'паралича анализа' начнёт ослабевать.",
      missions: [
        { week: 1, theme: "Скорость", actions: ["Принять следующее маленькое решение (что есть, что надеть) за 60 секунд.", "Отправить письмо или сообщение с намеренной безвредной опечаткой.", "Начать задачу, которую избегаешь, на 2 минуты. Потом можно остановиться.", "Выбрать фильм/сериал за 3 минуты, иначе не смотреть ничего.", "Намеренно записать 'плохую' идею.", "Немедленно ответить на сообщение вместо того, чтобы оставить 'подумать'.", "Намеренно оставить одну мелкую задачу очевидно незаконченной."] },
        { week: 2, theme: "Доверие", actions: ["Выйти на прогулку без запланированного маршрута.", "Купить что-то (кофе, снек) без проверки отзывов.", "Выполнить домашнее дело совершенно иным, более быстрым способом.", "Если мысль начинается с 'А вдруг...' — сказать вслух 'Ну и что?'", "Выбросить черновик и начать заново без лишнего анализа.", "Довериться первому инстинкту в сегодняшнем выборе, без сомнений.", "Принять маленькую сегодняшнюю ошибку без чрезмерных извинений."] },
        { week: 3, theme: "Освобождение", actions: ["Определить одну неподконтрольную вещь сегодня и буквально пожать плечами.", "Отписаться от 3 рассылок, вызывающих 'информационное перегрузку'.", "5 минут делать что-то творческое (рисовать, писать), зная, что результат будет плохим.", "Когда просят мнения — дать простейший прямой ответ.", "Выбросить физическую вещь, хранимую 'на всякий случай'.", "Остановиться в середине задачи и переключиться на другое на 10 минут.", "Быстро простить себя за мимолётный момент рассеянности."] },
        { week: 4, theme: "Импульс", actions: ["Составить 'список сделанного' — всё завершённое сегодня, пусть и несовершенно.", "Прямо сейчас определить планы на выходные без лишних исследований.", "Опубликовать или поделиться чем-то, что считаешь '80% готовым'.", "Поймав себя на прокручивании мыслей, сразу сделать 10 прыжков или растяжек.", "Позволить кому-то другому принять сегодня решение (что есть, что смотреть).", "Вспомнить случай, когда быстрое решение вышло очень хорошо.", "Записать своё новое правило для принятия решений с малым риском."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "Якорная рутина: стать хозяином своего утра",
      insight: "Тебе не нужно 'чудесное утро' в 5 утра. Нужно лишь выиграть первые 10 минут до того, как мозг отдаст контроль тревоге, обязанностям или светящемуся экрану.",
      hypothesis: "Последовательно защищая первые моменты утра намеренными действиями без экрана, ты разовьёшь ощущение контроля и спокойствия, остающееся весь день.",
      missions: [
        { week: 1, theme: "Основа", actions: ["Этим утром выпить полный стакан воды до любого экрана.", "Сразу после подъёма застелить постель — без исключений.", "Открыть окно или выйти на 60 секунд подышать свежим воздухом.", "Не смотреть на телефон минимум 10 минут после пробуждения.", "До выхода из комнаты вслух произнести одну вещь, ожидаемую с нетерпением сегодня.", "Медленно приготовить кофе, чай или завтрак, без многозадачности.", "Взять на себя обязательство выполнять утренний якорь 7 дней подряд без компромиссов."] },
        { week: 2, theme: "Намерение", actions: ["В момент пробуждения записать в дневник одно предложение — только одно.", "Определить 'самую важную задачу' дня до открытия любых сообщений.", "Прочитать абзац из неновостной книги перед официальным началом дня.", "Тихо посидеть с кофе 2 минуты до любого разговора.", "Подумать о человеке, которому благодарен, и представить, как говоришь ему об этом.", "Отрефлексировать вчерашний день: одно хорошее, одно к изменению.", "Выбрать 'якорное слово' недели — ценность или качество для воплощения."] },
        { week: 3, theme: "Тело", actions: ["В течение 2 минут после пробуждения сделать 10 любых телодвижений.", "Принять душ чуть прохладнее обычного — завершить 15 секундами холодной воды.", "До разговора с кем-либо потянуть напряжённую группу мышц 60 секунд.", "После пробуждения 2 минуты стоять в естественном свете (на улице или у окна).", "До телефона сделать 5 глубоких медленных вдохов с закрытыми глазами.", "Выполнить одно дело с полным телесным вниманием, без умственного блуждания.", "Сегодня до медиапотребления пройтись или чуть-чуть подвигаться."] },
        { week: 4, theme: "Поток", actions: ["Сегодня выполнить всю якорную последовательность без телефона.", "Определить, какой элемент утренней рутины даёт больше всего энергии.", "Сократить или упростить любой шаг рутины, кажущийся бременем.", "Разработать 'вечерний ритуал', облегчающий завтрашний якорь.", "Выполнить рутину даже при опоздании — меньше времени, но не ноль.", "Отрефлексировать: как изменилось качество утра за 30 дней?", "Записать финальный 'утренний якорь' — 3 первых ненарушаемых действия."] }
      ]
    }
  },
  vi: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "Tắt Tiếng Ồn: 30 Ngày Lấy Lại Sự Chú Ý",
      insight: "Bạn không mất đi sự tập trung — nó đang bị hàng nghìn gián đoạn kỹ thuật số nhỏ lấy đi. Não bạn khao khát sự yên tĩnh, không phải thêm nội dung.",
      hypothesis: "Bằng cách tạo ra những ma sát nhỏ có chủ ý giữa bạn và màn hình, bạn sẽ lấy lại 30% dung lượng tinh thần hàng ngày.",
      missions: [
        { week: 1, theme: "Ranh giới", actions: ["Hôm nay uống một cốc nước đầy trước khi nhìn vào bất kỳ màn hình nào.", "Tắt tất cả thông báo đẩy không phải từ người (tin tức, mạng xã hội, mua sắm).", "Để điện thoại ở phòng khác trong bữa ăn.", "Sạc điện thoại ngoài phòng ngủ tối nay.", "Đặt màn hình điện thoại sang chế độ xám trong 2 giờ.", "Không nhìn điện thoại trong nhà vệ sinh hôm nay.", "Trong khi trò chuyện, để điện thoại hoàn toàn ngoài tầm nhìn."] },
        { week: 2, theme: "Có chủ đích", actions: ["Đợi 3 phút trước khi kiểm tra thông báo.", "Xóa một ứng dụng bạn cuộn vô thức.", "Đọc một trang sách hoặc tạp chí giấy.", "Nhìn ra cửa sổ 2 phút không làm gì.", "Khi đi bộ ngoài trời, bỏ tai nghe ra 10 phút.", "Gõ tin nhắn thủ công, không dùng giọng nói hay emoji gợi ý.", "Đặt điện thoại chế độ Không làm phiền 1 giờ khi làm việc."] },
        { week: 3, theme: "Tái hiệu chỉnh", actions: ["Để điện thoại ở nhà và đi bộ 15 phút.", "Viết ra giấy 3 việc đã hoàn thành hôm nay.", "Khi xếp hàng, chỉ đứng đợi — không màn hình.", "Dọn một bề mặt 5 phút không có nhạc.", "Nói chuyện với ai đó 5 phút không nhìn màn hình.", "Ăn nhẹ chỉ tập trung vào kết cấu và hương vị.", "Giãn cơ 2 phút trong im lặng hoàn toàn."] },
        { week: 4, theme: "Hiện tại", actions: ["Xác định tác nhân kỹ thuật số lớn nhất hôm nay và tạo khoảng cách vật lý.", "Tắt TV hoặc video nền khi làm việc nhà.", "Quan sát hơi thở 10 phút không có ứng dụng hướng dẫn.", "Viết tay một ghi chú ngắn cho ai đó (hoặc cho chính mình).", "Chụp một 'bức ảnh tâm trí' hôm nay thay vì lấy điện thoại.", "Suy ngẫm chất lượng giấc ngủ tuần này thay đổi như thế nào.", "Chỉ định một góc nhà là vùng không màn hình vĩnh viễn."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "Vá Các Rò Rỉ: 30 Ngày Giới Hạn Nhỏ",
      insight: "Kiệt sức không phải lúc nào cũng từ việc làm quá nhiều — thường nó đến từ việc làm quá ít những điều thực sự phục hồi bạn.",
      hypothesis: "Bằng cách bịt rò rỉ năng lượng cảm xúc và thể chất với 1 phút ranh giới mỗi ngày, sức sống cơ bản của bạn sẽ tự nhiên phục hồi.",
      missions: [
        { week: 1, theme: "Dừng lại", actions: ["Đặt đồng hồ 1 phút và chỉ nhắm mắt.", "Nói 'Để tôi kiểm tra lịch' thay vì 'Có' ngay lập tức.", "Uống trà hoặc cà phê mà không làm gì khác đồng thời.", "Hít 3 hơi thở sâu chậm trước khi mở email.", "Chọn một việc không khẩn và cố ý dời sang ngày mai.", "Điều chỉnh tư thế ngay bây giờ để thoải mái hơn 10%.", "Thả lỏng hàm và hạ vai xuống 30 giây."] },
        { week: 2, theme: "Ngắt kết nối", actions: ["Tắt thông báo công việc sớm hơn 30 phút thường lệ.", "Tắt tiếng một nhóm chat tiêu hao năng lượng.", "Đi bộ 5 phút không có điểm đến hay mục tiêu.", "Hủy hoặc từ chối một cam kết nhỏ tuần này.", "Nghe một bài hát gợi lên hoài niệm và sự an toàn.", "Tắm với nhiệt độ nước mình thích nhất.", "Dành 5 phút không làm gì cả (không đọc, không xem)."] },
        { week: 3, theme: "Sạc lại", actions: ["Đi ngủ sớm hơn 15 phút tối nay.", "Ăn chậm món yêu thích không có cảm giác tội lỗi.", "Mặc bộ quần áo thoải mái nhất mình có.", "Viết một điều đã thành công tránh được hôm nay.", "Tự khen bản thân to khi hoàn thành một thói quen hàng ngày cơ bản.", "Xem ảnh cũ khi mình thực sự hạnh phúc.", "Hoàn thành nhiệm vụ với 50% nỗ lực thay vì 100% thường lệ."] },
        { week: 4, theme: "Ranh giới", actions: ["Nói 'không' với điều gì đó nhỏ hôm nay.", "Ủy thác hoặc nhờ giúp đỡ trong một việc nhỏ.", "Xác định thói quen 'hút năng lượng' và tạm dừng 24 giờ.", "Tạo ranh giới vật lý hôm nay (đóng cửa, đeo tai nghe).", "Từ chối giải thích hoặc biện minh cho lựa chọn cá nhân hôm nay.", "Thừa nhận sự mệt mỏi mà không cố 'sửa' ngay.", "Viết quy tắc ranh giới cốt lõi cho tháng tới."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "Thải Độc Buồn Chán: 30 Ngày Tìm Thấy Phép Màu Trong Bình Thường",
      insight: "Bạn không mất khả năng cảm nhận niềm vui — ngưỡng dopamine của bạn bị chiếm bởi nội dung kích thích cực cao. Niềm vui thực sự vẫn còn đó, bên dưới tiếng ồn.",
      hypothesis: "Bằng cách cố ý giảm các tác nhân dopamine cao trong 30 ngày, não sẽ hạ thấp đường cơ sở bị kích thích quá mức, khiến những khoảnh khắc bình thường trở nên sống động trở lại.",
      missions: [
        { week: 1, theme: "Nhận thức", actions: ["Chú ý lần đầu tiên hôm nay bạn với tay lấy điện thoại vì buồn và ghi lại.", "Sau khi xem video ngắn, kiểm tra: cảm thấy đầy hay trống?", "Ăn một bữa hoàn chỉnh không có màn hình hay giải trí.", "Xác định 3 nguồn thỏa mãn tức thì hàng đầu và viết ra.", "Đi bộ ngoài trời 5 phút không tai nghe.", "Ngồi yên 2 phút và quan sát sự thôi thúc lấp đầy khoảng không.", "Thay một phiên cuộn bằng nhìn ra cửa sổ cùng thời gian đó."] },
        { week: 2, theme: "Ma sát", actions: ["Xóa một ứng dụng video ngắn khỏi điện thoại 7 ngày.", "Đợi 5 phút trước khi xem giải trí để xem thôi thúc có giảm không.", "Làm 10 phút hoạt động 'nhàm chán': gấp quần áo, rửa bát chậm.", "Nói chuyện với ai đó 10 phút không kiểm tra điện thoại.", "Đọc sách hoặc tạp chí giấy dù chỉ một lúc.", "Nấu ăn chậm hơn và chú ý hơn thường lệ.", "Khi buồn, ở lại với sự buồn chán 3 phút trước khi hành động."] },
        { week: 3, theme: "Thưởng thức", actions: ["Uống đồ uống buổi sáng chậm, chỉ tập trung vào hương vị và nhiệt độ.", "Ra ngoài và chú ý 3 chi tiết cảm giác cụ thể của thế giới xung quanh.", "Nghe một bài hát từ đầu đến cuối không làm gì khác.", "Nhắm mắt, ăn một miếng và cảm nhận toàn bộ sự phức tạp của nó.", "Quan sát sự thay đổi ánh sáng tự nhiên trong không gian 5 phút.", "Ghi lại một điều nhỏ làm ngày hôm nay dễ dàng hay dễ chịu hơn.", "Giữ đồ uống nóng bằng hai tay và chỉ thở 1 phút."] },
        { week: 4, theme: "Tái lập trình", actions: ["Tìm một hoạt động analog mang lại sự thỏa mãn yên tĩnh (ghép hình, phác thảo, nhật ký).", "Làm gì đó sáng tạo bằng tay 10 phút.", "Xác định 'phương tiện chậm' yêu thích (podcast, bài dài, sách nói).", "Dành 10 phút trong thiên nhiên không có mục đích.", "Liệt kê những gì mang lại niềm vui thời thơ ấu trước smartphone.", "Nhớ lại 2 khoảnh khắc bình thường tuần này cảm thấy kỳ diệu.", "Thiết kế 'giải pháp nhanh' ít kích thích cá nhân cho lúc thèm muốn."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "Dọn Dẹp Lộn Xộn: 30 Ngày Cho Tâm Trí Nhẹ Nhàng Hơn",
      insight: "Mỗi vật trong không gian của bạn đang đưa ra một yêu cầu nhỏ đối với sự chú ý của bạn. Môi trường của bạn là nguồn bình yên hay nguồn stress nền — không có trung lập.",
      hypothesis: "Loại bỏ có hệ thống tiếng ồn vật lý và kỹ thuật số khỏi môi trường sẽ giúp bạn cảm nhận sự giảm ma sát tinh thần rõ rệt.",
      missions: [
        { week: 1, theme: "Bề mặt", actions: ["Xóa tất cả những gì không nên có trên một bề mặt nhìn thấy được.", "Bỏ đi hoặc quyên góp 3 đồ vật không chạm tới 3 tháng qua.", "Dọn màn hình chính điện thoại: xóa tất cả app không dùng tuần này.", "Đổ hết túi xách và chỉ cho lại những gì thực sự cần.", "Cất tất cả đồ 'tạm thời' đặt hơn một tuần.", "Lau bề mặt làm phiền nhất và giữ sạch 72 giờ.", "Áp dụng 'quy tắc 2 phút': nếu mất ít hơn 2 phút, làm ngay."] },
        { week: 2, theme: "Kỹ thuật số", actions: ["Xóa hoặc lưu trữ tất cả email cũ hơn 1 tuần trong hộp thư đến.", "Hủy đăng ký 3 bản tin hoặc khuyến mãi không bao giờ đọc.", "Xóa 20 ảnh trùng hoặc mờ trong thư viện.", "Xóa app không mở trong 30 ngày.", "Dọn màn hình nền hoặc bookmark của những mục lưu 'phòng khi cần'.", "Dọn thư mục tải xuống: xóa mọi thứ cũ hơn 2 tuần.", "Đổi hình nền điện thoại hoặc máy tính thành điều gì đó gọn gàng tối giản."] },
        { week: 3, theme: "Buông bỏ", actions: ["Cho đi hoặc bỏ một vật giữ 'phòng khi cần'.", "Bỏ theo dõi 5 tài khoản mạng xã hội tiêu hao thay vì truyền cảm hứng.", "Dọn một ngăn kéo hay không gian lưu trữ đang tránh né.", "Hủy gói đăng ký không dùng nhưng vẫn gia hạn.", "Trả lại hoặc giải quyết đồ mượn còn treo lơ lửng lâu rồi.", "Viết 3 cam kết muốn kết thúc hoặc đàm phán lại.", "Nói không với yêu cầu thực sự không muốn thực hiện."] },
        { week: 4, theme: "Hệ thống", actions: ["Tạo 'nhà' cố định cho 5 vật thường xuyên thất lạc.", "Lập thói quen đặt lại bề mặt 5 phút mỗi tuần.", "Đặt quy tắc nhà: 'vào một cái, ra một cái' với mọi đồ vật mới.", "Xác định điểm lộn xộn chính trong nhà và nghĩ giải pháp.", "Thiết lập hệ thống sắp xếp tin nhắn kỹ thuật số đơn giản.", "Lên lịch 15 phút mỗi Chủ nhật để đặt lại không gian.", "Viết 'quy tắc gọn gàng' cá nhân: điều gì không được vào không gian nữa."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "Ngừng Suy Nghĩ Quá Nhiều: 30 Ngày Hành Động Không Hoàn Hảo",
      insight: "Bạn đang dùng 'suy nghĩ' như một công cụ trì hoãn tinh vi. Chủ nghĩa hoàn hảo là một tấm khiên ngăn bạn thực sự bước vào đấu trường.",
      hypothesis: "Bằng cách ép buộc hành động ngay lập tức và không hoàn hảo trên các quyết định nhỏ, con đường thần kinh của 'liệt phân tích' sẽ bắt đầu suy yếu.",
      missions: [
        { week: 1, theme: "Tốc độ", actions: ["Đưa ra quyết định nhỏ tiếp theo (ăn gì, mặc gì) trong 60 giây.", "Gửi email hoặc tin nhắn có lỗi gõ nhỏ cố ý và vô hại.", "Bắt đầu nhiệm vụ đang tránh né chỉ 2 phút. Có thể dừng sau đó.", "Chọn phim/series trong 3 phút, không thì không xem gì.", "Cố tình viết ra một ý tưởng 'tệ'.", "Trả lời tin nhắn ngay thay vì để lại 'suy nghĩ thêm'.", "Cố ý để một việc nhỏ rõ ràng chưa hoàn thành."] },
        { week: 2, theme: "Tin tưởng", actions: ["Đi dạo không có lộ trình hoạch định.", "Mua thứ gì đó (cà phê, đồ ăn nhẹ) không xem đánh giá.", "Làm việc nhà bằng cách hoàn toàn khác và nhanh hơn.", "Nếu suy nghĩ bắt đầu bằng 'Nếu...', hãy nói to 'Thì sao?'", "Vứt bản nháp và bắt đầu lại không phân tích quá.", "Tin vào bản năng đầu tiên cho một lựa chọn hôm nay, không đổi ý.", "Chấp nhận một lỗi nhỏ hôm nay không xin lỗi quá mức."] },
        { week: 3, theme: "Buông bỏ", actions: ["Xác định một điều ngoài tầm kiểm soát hôm nay và thực sự nhún vai.", "Hủy đăng ký 3 bản tin gây 'quá tải thông tin'.", "Làm 5 phút sáng tạo (vẽ, viết) biết kết quả sẽ tệ.", "Khi được hỏi ý kiến, đưa ra câu trả lời đơn giản và thẳng thắn nhất.", "Bỏ một vật vật lý giữ 'phòng khi cần'.", "Dừng giữa chừng và chuyển sang việc khác 10 phút.", "Nhanh chóng tha thứ cho bản thân về một khoảnh khắc mất tập trung thoáng qua."] },
        { week: 4, theme: "Động lực", actions: ["Lập 'danh sách đã làm' — những gì hoàn thành hôm nay dù không hoàn hảo.", "Quyết định kế hoạch cuối tuần ngay bây giờ không nghiên cứu quá.", "Đăng hoặc chia sẻ thứ gì đó cho là '80% sẵn sàng'.", "Khi thấy mình đang nghiền ngẫm, ngay lập tức làm 10 cái nhảy hoặc giãn cơ.", "Để người khác đưa ra quyết định thay bạn hôm nay (ăn gì, xem gì).", "Nhớ lại một lần quyết định nhanh kết quả rất tốt.", "Viết quy tắc mới cho các quyết định rủi ro thấp."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "Thói Quen Mỏ Neo: Làm Chủ Buổi Sáng Của Bạn",
      insight: "Bạn không cần 'buổi sáng thần kỳ' lúc 5 giờ sáng. Chỉ cần giành chiến thắng 10 phút đầu tiên trước khi não giao kiểm soát cho lo lắng, nghĩa vụ hay màn hình sáng.",
      hypothesis: "Bằng cách liên tục bảo vệ những khoảnh khắc đầu tiên của buổi sáng bằng hành vi có chủ ý và không màn hình, bạn sẽ phát triển cảm giác kiểm soát và bình yên kéo dài cả ngày.",
      missions: [
        { week: 1, theme: "Nền tảng", actions: ["Sáng nay uống một cốc nước đầy trước bất kỳ màn hình nào.", "Dọn giường ngay sau khi thức dậy, không có ngoại lệ.", "Mở cửa sổ hoặc ra ngoài 60 giây hít thở không khí trong lành.", "Không kiểm tra điện thoại cho đến khi thức ít nhất 10 phút.", "Trước khi rời phòng, nói to một điều bạn mong đợi hôm nay.", "Chuẩn bị cà phê, trà hoặc bữa sáng chậm rãi không đa nhiệm.", "Cam kết thực hiện mỏ neo buổi sáng 7 ngày liên tiếp không nhượng bộ."] },
        { week: 2, theme: "Ý định", actions: ["Ngay lúc thức dậy, viết một câu duy nhất vào nhật ký — chỉ một câu.", "Xác định 'nhiệm vụ quan trọng nhất' hôm nay trước khi mở bất kỳ tin nhắn nào.", "Đọc một đoạn sách không tin tức, không mạng xã hội trước khi bắt đầu ngày.", "Ngồi yên với cà phê 2 phút trước bất kỳ cuộc trò chuyện nào.", "Nghĩ đến người mình biết ơn và hình dung nói với họ.", "Nhìn lại hôm qua: một điều diễn ra tốt, một điều cần thay đổi.", "Chọn 'từ mỏ neo' tuần này — một giá trị hoặc phẩm chất muốn thể hiện."] },
        { week: 3, theme: "Cơ thể", actions: ["Làm 10 chuyển động cơ thể trong 2 phút sau khi thức dậy.", "Tắm hơi lạnh hơn thường lệ — kết thúc bằng 15 giây nước lạnh.", "Kéo giãn nhóm cơ căng thẳng 60 giây trước khi nói chuyện với ai.", "Đứng dưới ánh sáng tự nhiên 2 phút sau khi thức dậy (ngoài trời hoặc cạnh cửa sổ).", "Hít 5 hơi thở sâu chậm nhắm mắt trước khi lấy điện thoại.", "Làm một việc với sự chú ý vật lý đầy đủ, không lang thang tinh thần.", "Đi bộ hoặc vận động nhẹ trước khi tiêu thụ bất kỳ phương tiện nào hôm nay."] },
        { week: 4, theme: "Dòng chảy", actions: ["Thực hiện toàn bộ trình tự mỏ neo hôm nay không có điện thoại.", "Xác định yếu tố nào trong thói quen buổi sáng mang lại nhiều năng lượng nhất.", "Rút ngắn hoặc đơn giản hóa bất kỳ bước nào cảm thấy như gánh nặng.", "Thiết kế 'nghi lễ tối hôm trước' giúp mỏ neo ngày mai dễ dàng hơn.", "Thực hiện thói quen dù trễ — ít thời gian hơn, không phải bằng không.", "Suy ngẫm: chất lượng buổi sáng thay đổi như thế nào trong 30 ngày?", "Viết 'mỏ neo buổi sáng' cuối cùng — 3 hành động đầu không thể thương lượng."] }
      ]
    }
  },
  th: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "ปิดเสียงรบกวน: 30 วันเพื่อดึงความสนใจคืน",
      insight: "คุณไม่ได้สูญเสียสมาธิ มันถูกขโมยไปโดยสิ่งรบกวนดิจิทัลเล็กๆ นับพัน สมองของคุณต้องการความเงียบ ไม่ใช่เนื้อหามากขึ้น",
      hypothesis: "การสร้างแรงเสียดทานเล็กๆ น้อยๆ ระหว่างคุณกับหน้าจอ จะทำให้คุณได้ความจุทางจิตใจรายวัน 30% กลับคืนมา",
      missions: [
        { week: 1, theme: "ขอบเขต", actions: ["วันนี้ดื่มน้ำหนึ่งแก้วเต็มก่อนดูหน้าจอใดๆ", "ปิดการแจ้งเตือนแบบ push ที่ไม่ใช่จากคน (ข่าว โซเชียลมีเดีย การช้อปปิ้ง)", "วางโทรศัพท์ไว้ในห้องอื่นระหว่างมื้ออาหารหนึ่งมื้อ", "ชาร์จโทรศัพท์ไว้นอกห้องนอนคืนนี้", "ตั้งหน้าจอโทรศัพท์เป็นโหมดสีเทา 2 ชั่วโมง", "อย่าดูโทรศัพท์ในห้องน้ำวันนี้", "ระหว่างสนทนา วางโทรศัพท์ไว้นอกสายตาเลย"] },
        { week: 2, theme: "มีเจตนา", actions: ["รอ 3 นาทีก่อนตรวจสอบการแจ้งเตือน", "ลบแอปที่เลื่อนดูโดยไม่รู้ตัว", "อ่านหนังสือหรือนิตยสารกระดาษหนึ่งหน้า", "มองออกไปนอกหน้าต่าง 2 นาที ไม่ทำอะไร", "ระหว่างเดินออกไปข้างนอก ถอดหูฟัง 10 นาที", "พิมพ์ข้อความด้วยมือ ไม่ใช้เสียงหรืออิโมจิแบบทำนาย", "ตั้งโทรศัพท์เป็นโหมด ห้ามรบกวน 1 ชั่วโมงขณะทำงาน"] },
        { week: 3, theme: "ปรับเทียบใหม่", actions: ["ทิ้งโทรศัพท์ไว้ที่บ้านแล้วเดิน 15 นาที", "เขียนบนกระดาษ 3 สิ่งที่ทำสำเร็จวันนี้", "เมื่อต้องต่อคิว แค่รอ ไม่มีหน้าจอ", "จัดพื้นผิว 5 นาที ไม่มีดนตรี", "คุยกับใครสักคน 5 นาที ไม่ดูหน้าจอ", "กินของว่างโดยโฟกัสเฉพาะเนื้อสัมผัสและรสชาติ", "ยืดเส้นยืดสาย 2 นาทีในความเงียบสนิท"] },
        { week: 4, theme: "ปัจจุบัน", actions: ["ระบุตัวกระตุ้นดิจิทัลที่ใหญ่ที่สุดวันนี้แล้วออกห่างทางกาย", "ปิดทีวีหรือวิดีโอพื้นหลังขณะทำงานบ้าน", "สังเกตลมหายใจ 10 นาทีโดยไม่มีแอปแนะนำ", "เขียนโน้ตสั้นๆ ด้วยลายมือให้ใครสักคน หรือให้ตัวเอง", "ถ่าย ภาพในใจ วันนี้แทนที่จะหยิบโทรศัพท์", "คิดทบทวนว่าคุณภาพการนอนหลับสัปดาห์นี้เปลี่ยนไปอย่างไร", "กำหนดมุมหนึ่งของบ้านเป็นเขตปลอดหน้าจอถาวร"] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "อุดรอยรั่ว: 30 วันแห่งขอบเขตเล็กๆ",
      insight: "ความเหนื่อยหน่ายไม่ได้มาจากการทำมากเกินไปเสมอไป มันมักมาจากการทำน้อยเกินไปในสิ่งที่เติมเต็มคุณจริงๆ",
      hypothesis: "การอุดรอยรั่วของพลังงานทางอารมณ์และร่างกาย ด้วย 1 นาทีของขอบเขตต่อวัน ความมีชีวิตชีวาพื้นฐานจะฟื้นตัวได้เองตามธรรมชาติ",
      missions: [
        { week: 1, theme: "หยุดพัก", actions: ["ตั้งเวลา 1 นาทีแล้วแค่หลับตา", "พูดว่า ขอดูตารางงานก่อนนะ แทนการ ใช่ ทันที", "ดื่มชาหรือกาแฟโดยไม่ทำอะไรอื่นพร้อมกัน", "หายใจเข้าออกลึกๆ ช้าๆ 3 ครั้งก่อนเปิดอีเมล", "เลือกงานที่ไม่เร่งด่วนวันนี้แล้วเลื่อนไปพรุ่งนี้อย่างตั้งใจ", "ปรับท่านั่งทันทีให้สบายขึ้น 10%", "คลายกรามและปล่อยไหล่ลง 30 วินาที"] },
        { week: 2, theme: "ตัดการเชื่อมต่อ", actions: ["ปิดการแจ้งเตือนของงาน 30 นาทีก่อนเวลาปกติ", "ปิดเสียงกลุ่มแชทที่ดูดพลังงาน", "เดิน 5 นาทีโดยไม่มีจุดหมายหรือวัตถุประสงค์", "ยกเลิกหรือปฏิเสธความมุ่งมั่นเล็กๆ น้อยๆ สัปดาห์นี้", "ฟังเพลงที่ทำให้นึกถึงความทรงจำดีๆ และความปลอดภัย", "อาบน้ำที่อุณหภูมิที่ชอบที่สุด", "ใช้เวลา 5 นาทีทำอะไรเลย ไม่อ่าน ไม่ดู"] },
        { week: 3, theme: "เติมพลัง", actions: ["คืนนี้นอนเร็วขึ้น 15 นาตีกว่าปกติ", "กินอาหารโปรดช้าๆ โดยไม่รู้สึกผิด", "ใส่เสื้อผ้าที่สบายที่สุดที่มี", "เขียนสิ่งหนึ่งที่สำเร็จหลีกเลี่ยงได้วันนี้", "ชมตัวเองดังๆ สำหรับการทำงานประจำวันพื้นฐานเสร็จ", "ดูรูปเก่าตอนที่มีความสุขจริงๆ", "ทำงานหนึ่งชิ้นด้วยความพยายาม 50% แทนที่จะเป็น 100% ตามปกติ"] },
        { week: 4, theme: "ขอบเขต", actions: ["พูดว่า ไม่ กับสิ่งเล็กๆ น้อยๆ วันนี้", "มอบหมายหรือขอความช่วยเหลือในงานเล็กๆ", "ระบุนิสัย ดูดพลังงาน แล้วหยุดชั่วคราว 24 ชั่วโมง", "สร้างขอบเขตทางกายภาพวันนี้ (ปิดประตู ใส่หูฟัง)", "ปฏิเสธการอธิบายหรือแก้ตัวการตัดสินใจส่วนตัววันนี้", "ยอมรับความเหนื่อยล้าโดยไม่พยายาม แก้ไข ทันที", "เขียนกฎขอบเขตหลักสำหรับเดือนหน้า"] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "ดีท็อกซ์ความเบื่อ: 30 วันค้นพบความมหัศจรรย์ในสิ่งธรรมดา",
      insight: "คุณไม่ได้สูญเสียความสามารถในการรู้สึกมีความสุข ค่าเกณฑ์โดพามีนของคุณถูกจี้โดยเนื้อหาที่กระตุ้นมากเกินไป ความสุขที่แท้จริงยังอยู่ที่นั่น",
      hypothesis: "การลดปัจจัยกระตุ้นโดพามีนสูงอย่างจงใจ 30 วัน สมองจะลดระดับพื้นฐานที่ถูกกระตุ้นมากเกินไป และช่วงเวลาธรรมดาจะรู้สึกสดใสอีกครั้ง",
      missions: [
        { week: 1, theme: "ตระหนัก", actions: ["สังเกตครั้งแรกที่คว้าโทรศัพท์เพราะเบือวันนี้แล้วจดบันทึก", "หลังดูวิดีโอสั้น ตรวจดู รู้สึกอิ่มหรือว่างเปล่า?", "กินอาหารครบมื้อโดยไม่มีหน้าจอหรือความบันเทิง", "ระบุแหล่งความพึงพอใจทันที 3 อันดับแรกแล้วเขียนลง", "เดินนอกบ้าน 5 นาทีโดยไม่มีหูฟัง", "นั่งเงียบ 2 นาทีแล้วสังเกตแรงกระตุ้นที่จะเติมเต็มพื้นที่", "แทนที่เซสชันเลื่อนดูหนึ่งครั้งด้วยการมองออกไปนอกหน้าต่างในช่วงเวลาเท่ากัน"] },
        { week: 2, theme: "แรงเสียดทาน", actions: ["ลบแอปวิดีโอสั้นออกจากโทรศัพท์ 7 วัน", "รอ 5 นาทีก่อนดูความบันเทิงเพื่อดูว่าแรงกระตุ้นลดลงหรือไม่", "ทำกิจกรรม เบื่อ 10 นาที พับผ้า ล้างจานช้าๆ", "คุยกับใครสักคน 10 นาทีโดยไม่ตรวจสอบโทรศัพท์", "อ่านหนังสือหรือนิตยสารกระดาษแม้เพียงเล็กน้อย", "ทำอาหารหรือเตรียมมื้ออาหารช้าและใส่ใจกว่าปกติ", "เมื่อเบื่อ อยู่กับความเบื่อ 3 นาทีก่อนลงมือทำอะไร"] },
        { week: 3, theme: "ลิ้มรส", actions: ["ดื่มเครื่องดื่มตอนเช้าช้าๆ โดยโฟกัสที่รสชาติและความอบอุ่น", "ออกไปข้างนอกแล้วสังเกตรายละเอียดทางประสาทสัมผัส 3 อย่าง", "ฟังเพลงหนึ่งเพลงจากต้นจนจบโดยไม่ทำอะไรอื่น", "หลับตาแล้วกินหนึ่งคำ สังเกตความซับซ้อนทั้งหมดของมัน", "สังเกตการเปลี่ยนแปลงของแสงธรรมชาติในพื้นที่ 5 นาที", "จดบันทึกสิ่งเล็กๆ ที่ทำให้วันนี้ง่ายขึ้นหรือน่าพอใจขึ้น", "ถือเครื่องดื่มร้อนด้วยสองมือแล้วแค่หายใจ 1 นาที"] },
        { week: 4, theme: "สร้างวงจรใหม่", actions: ["ค้นหากิจกรรมอนาล็อกที่ให้ความพึงพอใจเงียบๆ (จิกซอว์, ร่างภาพ, ไดอารี่)", "ทำอะไรสักอย่างอย่างสร้างสรรค์ด้วยมือ 10 นาที", "ระบุ สื่อช้า ที่ชอบ (พอดแคสต์, บทความยาว, หนังสือเสียง)", "ใช้เวลา 10 นาทีในธรรมชาติโดยไม่มีวาระ", "แสดงรายการสิ่งที่มอบความสุขในวัยเด็กก่อนสมาร์ทโฟน", "ทบทวน 2 ช่วงเวลาธรรมดาสัปดาห์นี้ที่รู้สึกวิเศษ", "ออกแบบ การแก้ไขอย่างรวดเร็ว การกระตุ้นต่ำส่วนตัวสำหรับเวลาที่อยากได้สิ่งเร้า"] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "ล้างความยุ่งเหยิง: 30 วันเพื่อจิตใจที่เบาขึ้น",
      insight: "ทุกสิ่งในพื้นที่ของคุณกำลังเรียกร้องความสนใจเล็กๆ น้อยๆ จากคุณ สภาพแวดล้อมของคุณเป็นแหล่งของความสงบหรือความเครียดเบื้องหลัง ไม่มีความเป็นกลาง",
      hypothesis: "การลบเสียงรบกวนทางกายภาพและดิจิทัลออกจากสภาพแวดล้อมอย่างเป็นระบบ คุณจะสัมผัสได้ถึงการลดลงของแรงเสียดทานทางจิตใจ",
      missions: [
        { week: 1, theme: "พื้นผิว", actions: ["นำสิ่งที่ไม่ควรอยู่ออกจากพื้นผิวที่มองเห็นได้ (โต๊ะ ชั้นวาง)", "ทิ้งหรือบริจาค 3 สิ่งที่ไม่ได้แตะต้องใน 3 เดือน", "จัดหน้าจอหลักของโทรศัพท์ ลบแอปที่ไม่ได้ใช้สัปดาห์นี้", "เทกระเป๋าออกทั้งหมดแล้วใส่กลับเฉพาะสิ่งที่จำเป็น", "เก็บสิ่งของที่วางชั่วคราว มากกว่าหนึ่งสัปดาห์", "เช็ดพื้นผิวที่รบกวนมากที่สุดและรักษาความสะอาด 72 ชั่วโมง", "ใช้ กฎ 2 นาที ถ้าใช้เวลาน้อยกว่า 2 นาที ทำเลย"] },
        { week: 2, theme: "ดิจิทัล", actions: ["ลบหรือเก็บถาวรอีเมลทั้งหมดที่เก่ากว่า 1 สัปดาห์ในกล่องจดหมาย", "ยกเลิกการสมัครรับจดหมายข่าวหรือโปรโมชั่น 3 รายการที่ไม่เคยอ่าน", "ลบภาพถ่ายซ้ำหรือเบลอ 20 ภาพจากม้วนฟิล์ม", "ลบแอปที่ไม่ได้เปิดใน 30 วัน", "ทำความสะอาดเดสก์ท็อปหรือที่คั่นหน้าจากรายการที่บันทึก ไว้เผื่อว่า", "ทำความสะอาดโฟลเดอร์ดาวน์โหลด ลบทุกอย่างที่เก่ากว่า 2 สัปดาห์", "เปลี่ยนวอลเปเปอร์โทรศัพท์หรือคอมพิวเตอร์เป็นสิ่งที่เรียบง่าย"] },
        { week: 3, theme: "ปล่อยวาง", actions: ["บริจาคหรือทิ้งของที่เก็บไว้ เผื่อว่าจะต้องใช้", "เลิกติดตาม 5 บัญชีโซเชียลมีเดียที่ทำให้หมดแรงแทนที่จะสร้างแรงบันดาลใจ", "จัดลิ้นชักหรือพื้นที่จัดเก็บที่หลีกเลี่ยงอยู่", "ยกเลิกการสมัครสมาชิกที่ไม่ได้ใช้แต่ยังต่ออายุอยู่", "คืนหรือจัดการสิ่งของที่ยืมมาที่ค้างอยู่นาน", "เขียน 3 ความมุ่งมั่นที่ต้องการสิ้นสุดหรือเจรจาใหม่", "พูดว่า ไม่ กับคำขอที่ตัวเองไม่ต้องการทำ"] },
        { week: 4, theme: "ระบบ", actions: ["สร้าง บ้าน ที่กำหนดไว้สำหรับ 5 สิ่งที่มักหาย", "สร้างนิสัยรีเซ็ตพื้นผิวรายสัปดาห์ 5 นาที", "กำหนดกฎบ้าน เข้าหนึ่ง ออกหนึ่ง สำหรับสิ่งใหม่ทุกชิ้น", "ระบุจุดสร้างความยุ่งเหยิงหลักในบ้านแล้วออกแบบแนวทาแก้ผล็解决", "ตั้งค่าระบบคัดแยกข้อความดิจิทัลแบบง่าย", "จัดกำหนดการ 15 นาทีทุกวันอาทิตย์เพื่อรีเซ็ตพื้นที่", "เขียน กฎความเป็นระเบียบ ส่วนตัว สิ่งที่จะไม่ยอมให้เข้ามาในพื้นที่อีก"] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "หยุดคิดมากเกินไป: 30 วันแห่งการกระทำที่ไม่สมบูรณ์แบบ",
      insight: "คุณใช้ การคิด เป็นเครื่องมือผัดวันประกันพรุ่งที่ซับซ้อน ความสมบูรณ์แบบนิยมเป็นโล่ที่กันคุณไม่ให้ก้าวเข้าสู่เวทีจริงๆ",
      hypothesis: "การบังคับตัวเองให้ดำเนินการทันทีและไม่สมบูรณ์แบบในการตัดสินใจเล็กๆ เส้นทางประสาทของ อัมพาตการวิเคราะห์ จะเริ่มอ่อนแอลง",
      missions: [
        { week: 1, theme: "ความเร็ว", actions: ["ตัดสินใจเล็กๆ ถัดไป กินอะไร แต่งตัวอะไร ภายใน 60 วินาที", "ส่งอีเมลหรือข้อความที่มีการพิมพ์ผิดตั้งใจที่ไม่เป็นอันตราย", "เริ่มงานที่หลีกเลี่ยงอยู่แค่ 2 นาที สามารถหยุดได้หลังจากนั้น", "เลือกหนัง/ซีรีส์ภายใน 3 นาที ไม่เช่นนั้นก็ไม่ดูอะไร", "เขียนแนวคิด แย่ อย่างตั้งใจ", "ตอบกลับข้อความทันทีแทนที่จะปล่อยไว้ คิดทีหลัง", "ทิ้งงานเล็กๆ ให้ไม่เสร็จอย่างชัดเจนอย่างตั้งใจ"] },
        { week: 2, theme: "ความไว้วางใจ", actions: ["ออกไปเดินโดยไม่มีเส้นทางที่วางไว้", "ซื้อสิ่งของ กาแฟ ขนม โดยไม่ดูรีวิว", "ทำงานบ้านด้วยวิธีที่แตกต่างออกไปโดยสิ้นเชิงและเร็วขึ้น", "ถ้าความคิดเริ่มต้นด้วย แล้วถ้า ให้พูดออกเสียงดังๆ ว่า แล้วไง", "ทิ้งร่างและเริ่มต้นใหม่โดยไม่วิเคราะห์มากเกินไป", "เชื่อสัญชาตญาณแรกสำหรับการเลือกหนึ่งอย่างวันนี้ ไม่เปลี่ยนใจ", "ยอมรับความผิดพลาดเล็กๆ วันนี้โดยไม่ขอโทษมากเกินไป"] },
        { week: 3, theme: "ปลดปล่อย", actions: ["ระบุสิ่งที่ควบคุมไม่ได้วันนี้แล้วยักไหล่ตามตัวอักษร", "ยกเลิกการสมัครรับจดหมายข่าว 3 ฉบับที่ทำให้ข้อมูลล้นเกิน", "ทำอะไรสักอย่างอย่างสร้างสรรค์ วาดภาพ เขียน 5 นาที รู้ว่าผลลัพธ์จะแย่", "เมื่อถูกถามความคิดเห็น ให้คำตอบที่ง่ายที่สุดและตรงที่สุด", "ทิ้งของสะสมทางกายภาพที่เก็บไว้ เผื่อว่าจะต้องใช้", "หยุดกลางทางในงานหนึ่งแล้วเปลี่ยนไปทำอย่างอื่น 10 นาที", "อภัยตัวเองอย่างรวดเร็วสำหรับช่วงเวลาที่วอกแวกชั่วครู่"] },
        { week: 4, theme: "โมเมนตัม", actions: ["ทำ รายการสิ่งที่ทำเสร็จแล้ว สิ่งที่เสร็จวันนี้ แม้ไม่สมบูรณ์แบบ", "ตัดสินใจแผนสุดสัปดาห์ตอนนี้โดยไม่ค้นคว้ามากเกินไป", "เผยแพร่หรือแบ่งปันสิ่งที่คิดว่า พร้อม 80% เท่านั้น", "เมื่อพบว่าตัวเองกำลังครุ่นคิด ทำ jumping jacks หรือยืด 10 ครั้งทันที", "ให้คนอื่นตัดสินใจแทนวันนี้ กินอะไร ดูอะไร", "จำครั้งที่ตัดสินใจเร็วแล้วผลออกมาดี", "เขียนกฎใหม่สำหรับการตัดสินใจที่มีความเสี่ยงต่ำ"] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "กิจวัตรสมอ: เป็นเจ้าของเช้าของคุณ",
      insight: "คุณไม่ต้องการ เช้าอัศจรรย์ ตีห้า คุณแค่ต้องชนะ 10 นาทีแรกก่อนที่สมองจะมอบการควบคุมให้ความวิตกกังวล ภาระผูกพัน หรือหน้าจอที่เปล่งแสง",
      hypothesis: "การปกป้องช่วงเวลาแรกของเช้าอย่างสม่ำเสมอด้วยพฤติกรรมที่มีเจตนาและไม่มีหน้าจอ คุณจะพัฒนาความรู้สึกควบคุมและสงบที่ดำเนินต่อไปตลอดทั้งวัน",
      missions: [
        { week: 1, theme: "รากฐาน", actions: ["เช้านี้ดื่มน้ำหนึ่งแก้วเต็มก่อนหน้าจอใดๆ", "จัดเตียงทันทีหลังตื่น ไม่มีข้อยกเว้น", "เปิดหน้าต่างหรือออกไปข้างนอก 60 วินาทีสูดอากาศบริสุทธิ์", "ไม่ดูโทรศัพท์จนกว่าจะตื่นนอนอย่างน้อย 10 นาที", "ก่อนออกจากห้องพูดออกเสียงดังๆ หนึ่งสิ่งที่ตั้งตารอวันนี้", "เตรียมกาแฟ ชา หรืออาหารเช้าช้าๆ โดยไม่มีการทำหลายอย่างพร้อมกัน", "มุ่งมั่นที่จะทำสมอเช้า 7 วันติดต่อกันโดยไม่มีการประนีประนอม"] },
        { week: 2, theme: "เจตนา", actions: ["ในช่วงเวลาตื่นนอน เขียนประโยคเดียวในสมุดบันทึก แค่ประโยคเดียว", "กำหนด งานสำคัญที่สุด ของวันนี้ก่อนเปิดข้อความใดๆ", "อ่านหนึ่งย่อหน้าจากหนังสือที่ไม่ใช่ข่าวก่อนเริ่มต้นวัน", "นั่งเงียบๆ กับกาแฟ 2 นาทีก่อนการสนทนาใดๆ", "คิดถึงคนที่รู้สึกขอบคุณและจินตนาการว่าบอกพวกเขา", "ทบทวนเมื่อวาน หนึ่งสิ่งที่ไปได้ดี หนึ่งสิ่งที่ต้องเปลี่ยน", "เลือก คำสมอ สัปดาห์นี้ คุณค่าหรือคุณภาพที่ต้องการแสดง"] },
        { week: 3, theme: "ร่างกาย", actions: ["ทำการเคลื่อนไหวร่างกาย 10 ครั้งภายใน 2 นาทีหลังตื่น", "อาบน้ำเย็นกว่าปกติเล็กน้อย จบด้วยน้ำเย็น 15 วินาที", "ยืดกลุ่มกล้ามเนื้อที่ตึง 60 วินาทีก่อนคุยกับใคร", "ยืนในแสงธรรมชาติ 2 นาทีหลังตื่น ข้างนอกหรือใกล้หน้าต่าง", "หายใจลึกๆ ช้าๆ 5 ครั้งหลับตาก่อนหยิบโทรศัพท์", "ทำสิ่งหนึ่งด้วยความสนใจทางกายเต็มที่ ไม่มีการพเนจรทางจิตใจ", "เดินหรือขยับตัวเบาๆ ก่อนบริโภคสื่อใดๆ วันนี้"] },
        { week: 4, theme: "การไหล", actions: ["ทำลำดับสมอทั้งหมดวันนี้โดยไม่มีโทรศัพท์", "ระบุว่าองค์ประกอบใดในกิจวัตรเช้าให้พลังมากที่สุด", "ย่อหรือทำให้ขั้นตอนที่รู้สึกเป็นภาระง่ายขึ้น", "ออกแบบ พิธีกรรมคืนก่อน ที่ทำให้สมอพรุ่งนี้ง่ายขึ้น", "ทำกิจวัตรแม้จะสาย เวลาน้อยลง แต่ไม่ใช่ศูนย์", "ทบทวน คุณภาพเช้าเปลี่ยนไปอย่างไรใน 30 วัน?", "เขียน สมอเช้า สุดท้าย 3 การกระทำแรกที่ต่อรองไม่ได้"] }
      ]
    }
  },
  id: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "Bisukan Kebisingan: 30 Hari Merebut Kembali Perhatianmu",
      insight: "Kamu tidak kehilangan fokus — perhatianmu dicuri oleh ribuan gangguan digital kecil. Otakmu mendambakan ketenangan, bukan lebih banyak konten.",
      hypothesis: "Dengan menciptakan gesekan kecil yang disengaja antara kamu dan layarmu, kamu akan mendapatkan kembali 30% kapasitas mental harianmu.",
      missions: [
        { week: 1, theme: "Batasan", actions: ["Hari ini minum segelas penuh air sebelum melihat layar apapun.", "Matikan semua notifikasi push non-manusia (berita, media sosial, belanja).", "Tinggalkan ponsel di ruangan lain saat makan.", "Charger ponsel di luar kamar tidur malam ini.", "Atur layar ponsel ke mode grayscale selama 2 jam.", "Jangan lihat ponsel di toilet hari ini.", "Saat berbicara, jauhkan ponsel dari jangkauan pandangan sepenuhnya."] },
        { week: 2, theme: "Sengaja", actions: ["Tunggu 3 menit sebelum memeriksa notifikasi.", "Hapus satu aplikasi yang kamu scroll tanpa sadar.", "Baca satu halaman buku atau majalah fisik.", "Pandang ke luar jendela 2 menit tanpa melakukan apapun.", "Lepas earphone 10 menit saat berjalan di luar.", "Ketik pesan teks secara manual tanpa suara atau emoji prediktif.", "Atur ponsel ke mode 'Jangan Ganggu' selama 1 jam saat bekerja."] },
        { week: 3, theme: "Rekalibrasi", actions: ["Tinggalkan ponsel di rumah dan berjalan 15 menit.", "Tulis di kertas 3 hal yang sudah kamu selesaikan hari ini.", "Saat mengantre, cukup tunggu — tanpa layar.", "Rapikan permukaan selama 5 menit tanpa musik.", "Bicara dengan seseorang 5 menit tanpa melihat layar.", "Makan camilan dengan fokus hanya pada tekstur dan rasa.", "Peregangan 2 menit dalam keheningan total."] },
        { week: 4, theme: "Saat Ini", actions: ["Identifikasi pemicu digital terbesar hari ini dan jauhi secara fisik.", "Matikan TV atau video latar saat mengerjakan pekerjaan rumah.", "Amati napas 10 menit tanpa aplikasi panduan.", "Tulis catatan tangan pendek untuk seseorang (atau untuk dirimu sendiri).", "Ambil 'foto mental' hari ini daripada mengeluarkan ponsel.", "Renungkan bagaimana kualitas tidur berubah minggu ini.", "Tetapkan sudut rumah sebagai zona bebas layar permanen."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "Tambal Kebocoran: 30 Hari Mikro-Batasan",
      insight: "Kelelahan tidak selalu dari terlalu banyak melakukan — sering kali dari terlalu sedikit melakukan hal yang benar-benar mengisimu.",
      hypothesis: "Dengan menambal kebocoran energi emosional dan fisik melalui 1 menit batasan per hari, vitalitas dasarmu akan pulih secara alami.",
      missions: [
        { week: 1, theme: "Jeda", actions: ["Setel timer 1 menit dan cukup pejamkan mata.", "Katakan 'Biar saya cek jadwal saya' daripada langsung 'Iya'.", "Minum secangkir teh atau kopi tanpa melakukan hal lain bersamaan.", "Tarik napas dalam-dalam 3 kali perlahan sebelum membuka email.", "Pilih satu tugas tidak mendesak hari ini dan tunda dengan sengaja ke besok.", "Sesuaikan postur sekarang agar 10% lebih nyaman.", "Kendurkan rahang dan biarkan bahu turun selama 30 detik."] },
        { week: 2, theme: "Putus Sambungan", actions: ["Matikan notifikasi kerja 30 menit lebih awal dari biasanya.", "Senyapkan grup chat yang menguras energi.", "Berjalan 5 menit tanpa tujuan atau agenda.", "Batalkan atau tolak satu komitmen kecil minggu ini.", "Dengarkan lagu yang membangkitkan nostalgia dan rasa aman.", "Mandi dengan suhu air yang paling kamu sukai.", "Habiskan 5 menit sama sekali tidak melakukan apapun."] },
        { week: 3, theme: "Isi Ulang", actions: ["Tidur 15 menit lebih awal dari biasanya malam ini.", "Makan makanan favoritmu perlahan tanpa rasa bersalah.", "Pakai pakaian paling nyaman yang kamu punya.", "Tulis satu hal yang berhasil kamu hindari hari ini.", "Puji dirimu sendiri dengan lantang karena menyelesaikan rutinitas harian dasar.", "Lihat foto lama saat kamu benar-benar bahagia.", "Kerjakan satu tugas dengan 50% usaha daripada 100% biasanya."] },
        { week: 4, theme: "Batasan", actions: ["Katakan 'tidak' untuk sesuatu yang kecil hari ini.", "Delegasikan atau minta bantuan untuk tugas kecil.", "Identifikasi kebiasaan 'vampir energi' dan jeda selama 24 jam.", "Buat batasan fisik hari ini (tutup pintu, pakai earphone).", "Tolak menjelaskan atau membenarkan pilihan pribadi yang dibuat hari ini.", "Akui kelelahan tanpa langsung mencoba 'memperbaikinya'.", "Tulis aturan batasan inti untuk bulan depan."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "Detoks Kebosanan: 30 Hari Menemukan Keajaiban dalam Keseharian",
      insight: "Kamu tidak kehilangan kemampuan merasakan kegembiraan — ambang dopaminmu dibajak oleh konten yang terlalu merangsang. Kegembiraan nyata masih ada di sana, di bawah kebisingan.",
      hypothesis: "Dengan sengaja mengurangi pemicu dopamin tinggi selama 30 hari, otak akan menurunkan baseline yang terlalu terstimulasi, dan momen biasa akan terasa hidup kembali.",
      missions: [
        { week: 1, theme: "Kesadaran", actions: ["Perhatikan pertama kali kamu meraih ponsel karena bosan hari ini dan catat.", "Setelah menonton video pendek, periksa: merasa penuh atau kosong?", "Makan satu kali makan lengkap tanpa layar atau hiburan.", "Identifikasi 3 sumber kepuasan instan teratasmu dan tulis.", "Berjalan di luar 5 menit tanpa earphone.", "Duduk diam 2 menit dan amati dorongan mengisi ruang.", "Ganti satu sesi scroll dengan menatap ke luar jendela dalam waktu yang sama."] },
        { week: 2, theme: "Gesekan", actions: ["Hapus satu aplikasi video pendek dari ponsel selama 7 hari.", "Sebelum mengonsumsi hiburan, tunggu 5 menit untuk melihat apakah keinginan berkurang.", "Lakukan 10 menit aktivitas 'membosankan': melipat pakaian, cuci piring perlahan.", "Bicara dengan seseorang 10 menit tanpa memeriksa ponsel.", "Baca buku atau majalah fisik, meski sebentar.", "Masak atau siapkan makanan lebih lambat dan penuh perhatian dari biasanya.", "Saat bosan, tetap bersama kebosanan 3 menit sebelum bertindak."] },
        { week: 3, theme: "Menikmati", actions: ["Minum minuman pagi perlahan, fokus hanya pada rasa dan kehangatan.", "Pergi ke luar dan perhatikan 3 detail indrawi spesifik dunia sekitar.", "Dengarkan satu lagu dari awal hingga akhir tanpa melakukan hal lain.", "Pejamkan mata, makan satu gigitan, rasakan seluruh kompleksitasnya.", "Amati perubahan cahaya alami di ruang selama 5 menit.", "Catat satu hal kecil yang membuat hari ini lebih mudah atau menyenangkan.", "Pegang minuman panas dengan kedua tangan dan cukup bernapas 1 menit."] },
        { week: 4, theme: "Pemrograman Ulang", actions: ["Temukan aktivitas analog yang menghadirkan kepuasan tenang (puzzle, sketsa, jurnal).", "Lakukan sesuatu yang kreatif dengan tangan selama 10 menit.", "Identifikasi 'media lambat' yang kamu sukai (podcast, artikel panjang, audiobook).", "Habiskan 10 menit di alam tanpa agenda.", "Daftarkan hal-hal yang mendatangkan kegembiraan saat kecil, sebelum smartphone.", "Renungkan 2 momen biasa minggu ini yang terasa magical.", "Rancang 'solusi cepat' stimulasi rendah pribadimu untuk saat-saat ingin."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "Bersihkan Kekacauan: 30 Hari untuk Pikiran yang Lebih Ringan",
      insight: "Setiap benda di ruanganmu membuat tuntutan kecil pada perhatianmu. Lingkunganmu adalah sumber ketenangan atau sumber stres latar — tidak ada yang netral.",
      hypothesis: "Dengan menghilangkan kebisingan fisik dan digital dari lingkungan secara sistematis, kamu akan merasakan penurunan gesekan mental yang nyata.",
      missions: [
        { week: 1, theme: "Permukaan", actions: ["Singkirkan semua yang tidak seharusnya ada di sana dari permukaan yang terlihat.", "Buang atau donasikan 3 benda yang tidak disentuh dalam 3 bulan.", "Rapikan layar beranda ponsel: hapus semua app yang tidak digunakan minggu ini.", "Kosongkan tas sepenuhnya dan kembalikan hanya yang benar-benar perlu.", "Kembalikan semua benda yang diletakkan 'sementara' lebih dari seminggu.", "Bersihkan permukaan yang paling mengganggu dan jaga kebersihan 72 jam.", "Terapkan 'aturan 2 menit': jika kurang dari 2 menit, lakukan sekarang."] },
        { week: 2, theme: "Digital", actions: ["Hapus atau arsipkan semua email lebih dari 1 minggu di kotak masuk.", "Berhenti berlangganan 3 newsletter atau promosi yang tidak pernah dibaca.", "Hapus 20 foto duplikat atau buram dari roll kamera.", "Hapus app yang tidak dibuka dalam 30 hari.", "Bersihkan desktop atau bookmark dari item tersimpan 'jaga-jaga'.", "Bersihkan folder unduhan: hapus semua yang lebih dari 2 minggu.", "Ganti wallpaper ponsel atau komputer jadi sesuatu yang bersih dan minimalis."] },
        { week: 3, theme: "Melepaskan", actions: ["Donasikan atau buang benda yang disimpan 'jaga-jaga'.", "Berhenti mengikuti 5 akun media sosial yang menguras daripada menginspirasi.", "Rapikan laci atau ruang penyimpanan yang dihindari.", "Batalkan langganan yang tidak digunakan tapi masih diperbarui.", "Kembalikan atau selesaikan benda pinjaman yang tertunda lama.", "Tulis 3 komitmen yang ingin diakhiri atau dirundingkan ulang.", "Katakan tidak pada permintaan yang tidak benar-benar ingin dipenuhi."] },
        { week: 4, theme: "Sistem", actions: ["Buat 'rumah' yang ditetapkan untuk 5 benda yang selalu hilang.", "Bangun kebiasaan reset permukaan 5 menit seminggu.", "Tetapkan aturan rumah: 'satu masuk, satu keluar' untuk benda baru.", "Identifikasi titik kekacauan utama di rumah dan rancang solusi.", "Siapkan sistem triase sederhana untuk pesan digital.", "Jadwalkan 15 menit setiap Minggu untuk reset ruang.", "Tulis 'aturan kerapian' pribadimu: apa yang tidak akan lagi masuk ke ruanganmu."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "Berhenti Berpikir Berlebihan: 30 Hari Tindakan Tidak Sempurna",
      insight: "Kamu menggunakan 'berpikir' sebagai alat penundaan yang canggih. Perfeksionisme adalah perisai yang mencegahmu benar-benar memasuki arena.",
      hypothesis: "Dengan memaksa tindakan segera dan tidak sempurna pada keputusan kecil, jalur saraf 'kelumpuhan analisis' akan mulai melemah.",
      missions: [
        { week: 1, theme: "Kecepatan", actions: ["Buat keputusan kecil berikutnya (apa yang dimakan, apa yang dipakai) dalam 60 detik.", "Kirim email atau pesan dengan kesalahan ketik kecil yang disengaja dan tidak berbahaya.", "Mulai tugas yang kamu hindari hanya 2 menit. Boleh berhenti setelahnya.", "Pilih film/serial dalam 3 menit, kalau tidak ya jangan nonton apapun.", "Sengaja tulis satu ide 'buruk'.", "Balas pesan segera daripada menyimpannya 'untuk dipikirkan nanti'.", "Sengaja biarkan satu tugas kecil jelas tidak selesai."] },
        { week: 2, theme: "Kepercayaan", actions: ["Pergi jalan-jalan tanpa rute yang direncanakan.", "Beli sesuatu (kopi, camilan) tanpa memeriksa ulasan.", "Lakukan satu pekerjaan rumah dengan cara yang sepenuhnya berbeda dan lebih cepat.", "Jika pikiran dimulai dengan 'Bagaimana jika...', ucapkan dengan lantang 'Terus kenapa?'", "Buang draf dan mulai dari awal tanpa terlalu menganalisis.", "Percayai insting pertama untuk satu pilihan hari ini, tanpa ragu lagi.", "Terima satu kesalahan kecil yang dibuat hari ini tanpa meminta maaf berlebihan."] },
        { week: 3, theme: "Melepaskan", actions: ["Identifikasi satu hal di luar kendali hari ini dan benar-benar angkat bahu.", "Berhenti berlangganan 3 newsletter yang menyebabkan 'kelebihan informasi'.", "Lakukan 5 menit sesuatu yang kreatif (menggambar, menulis), tahu hasilnya akan buruk.", "Ketika diminta pendapat, berikan jawaban paling sederhana dan langsung.", "Buang benda fisik yang disimpan 'jaga-jaga'.", "Berhenti di tengah tugas dan beralih ke hal lain selama 10 menit.", "Maafkan dirimu dengan cepat atas sejenak kehilangan fokus."] },
        { week: 4, theme: "Momentum", actions: ["Buat 'daftar yang sudah diselesaikan' dari apa yang dituntaskan hari ini, meski tidak sempurna.", "Tentukan rencana akhir pekan sekarang tanpa banyak penelitian.", "Publikasikan atau bagikan sesuatu yang kamu anggap '80% siap'.", "Ketika mendapati diri merenungi, segera lakukan 10 jumping jacks atau peregangan.", "Biarkan orang lain membuat keputusan untukmu hari ini (makan apa, nonton apa).", "Ingat satu kali ketika keputusan cepat berhasil dengan sangat baik.", "Tulis aturan barumu untuk keputusan berisiko rendah."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "Rutinitas Jangkar: Jadilah Pemilik Pagimu",
      insight: "Kamu tidak butuh 'morning miracle' jam 5 pagi. Kamu hanya perlu memenangkan 10 menit pertama sebelum otakmu menyerahkan kendali pada kekhawatiran, kewajiban, atau layar bercahaya.",
      hypothesis: "Dengan konsisten melindungi momen pertama pagimu dengan perilaku yang disengaja dan bebas layar, kamu akan mengembangkan rasa kendali dan ketenangan yang bertahan sepanjang hari.",
      missions: [
        { week: 1, theme: "Fondasi", actions: ["Pagi ini minum segelas penuh air sebelum layar apapun.", "Rapikan tempat tidur segera setelah bangun, tanpa pengecualian.", "Buka jendela atau keluar 60 detik menghirup udara segar.", "Jangan periksa ponsel sampai setidaknya 10 menit setelah bangun.", "Sebelum keluar kamar, ucapkan satu hal yang ditunggu hari ini.", "Siapkan kopi, teh, atau sarapan perlahan tanpa multitasking.", "Berkomitmen menjalankan jangkar pagi 7 hari berturut-turut tanpa kompromi."] },
        { week: 2, theme: "Niat", actions: ["Saat momen bangun, tulis satu kalimat di jurnal — hanya satu.", "Tetapkan 'tugas terpenting' hari ini sebelum membuka pesan apapun.", "Baca satu paragraf buku non-berita sebelum hari dimulai secara resmi.", "Duduk diam dengan kopi 2 menit sebelum percakapan apapun.", "Pikirkan seseorang yang kamu syukuri dan bayangkan mengatakannya.", "Tinjau kemarin: satu hal berjalan baik, satu hal yang akan diubah.", "Pilih 'kata jangkar' minggumu — nilai atau kualitas yang ingin diwujudkan."] },
        { week: 3, theme: "Tubuh", actions: ["Lakukan 10 gerakan tubuh dalam 2 menit setelah bangun.", "Mandi sedikit lebih dingin dari biasanya — akhiri dengan 15 detik air dingin.", "Regangkan kelompok otot tegang 60 detik sebelum berbicara dengan siapapun.", "Berdiri di bawah cahaya alami 2 menit setelah bangun (di luar atau dekat jendela).", "Ambil 5 napas dalam lambat dengan mata tertutup sebelum mengambil ponsel.", "Lakukan satu hal dengan perhatian fisik penuh, tanpa pikiran mengembara.", "Berjalan atau bergerak ringan sebelum mengonsumsi media apapun hari ini."] },
        { week: 4, theme: "Aliran", actions: ["Selesaikan seluruh urutan jangkar hari ini tanpa ponsel.", "Identifikasi elemen mana dari rutinitas pagi yang paling banyak memberi energi.", "Persingkat atau sederhanakan langkah rutinitas apapun yang terasa seperti beban.", "Rancang 'ritual malam sebelumnya' yang memudahkan jangkar besok.", "Jalankan rutinitas meski terlambat — lebih sedikit waktu, tapi bukan nol.", "Renungkan: bagaimana kualitas pagimu berubah dalam 30 hari?", "Tulis 'Jangkar Pagi' terakhirmu — 3 tindakan pertama yang tidak bisa dikompromikan."] }
      ]
    }
  },
  tr: {
    "digital-detox": {
      id: "digital-detox", experimentTitle: "Gürültüyü Sustur: Dikkatini Geri Almak İçin 30 Gün",
      insight: "Odaklanma yeteneğini kaybetmedin — binlerce küçük dijital kesinti tarafından çalınıyor. Beynin daha fazla içerik değil, sessizlik istiyor.",
      hypothesis: "Kendinle ekranların arasında küçük bilinçli sürtünmeler yaratarak, günlük zihinsel kapasiteni 30% geri kazanacaksın.",
      missions: [
        { week: 1, theme: "Sınırlar", actions: ["Bu sabah herhangi bir ekrana bakmadan önce bir bardak dolu su iç.", "İnsan olmayan tüm anlık bildirimleri kapat (haber, sosyal medya, alışveriş).", "Bir öğün boyunca telefonu başka bir odada bırak.", "Bu gece telefonu yatak odası dışında şarj et.", "Telefon ekranını 2 saat gri tonlama moduna al.", "Bugün tuvalette telefona bakma.", "Konuşurken telefonu tamamen görüş alanının dışında tut."] },
        { week: 2, theme: "Bilinçli", actions: ["Bir bildirimden sonra kontrol etmeden önce 3 dakika bekle.", "Düşüncesizce kaydırdığın bir uygulamayı sil.", "Kağıt bir kitap veya dergiden bir sayfa oku.", "2 dakika pencereden bak, hiçbir şey yapma.", "Dışarıda yürürken 10 dakika kulaklığı çıkar.", "SMS'leri ses veya tahminli emoji kullanmadan elle yaz.", "İş yaparken telefonu 1 saat 'Rahatsız Etme' moduna al."] },
        { week: 3, theme: "Yeniden Kalibrasyon", actions: ["Telefonu evde bırak ve 15 dakika yürü.", "Kağıda bugün tamamladığın 3 şeyi yaz.", "Kuyrukta beklerken sadece bekle — ekran yok.", "5 dakika müziksiz bir yüzeyi topla.", "Biriyle 5 dakika konuş, ekrana bakma.", "Atıştırmalık yerken sadece dokuya ve tada odaklan.", "Tam sessizlik içinde 2 dakika ger."] },
        { week: 4, theme: "Şimdiki An", actions: ["Bugünün en büyük dijital tetikleyicisini belirle ve fiziksel olarak uzaklaş.", "Ev işleri yaparken TV'yi veya arka plan videolarını kapat.", "Rehber uygulaması olmadan 10 dakika nefesini izle.", "Birine (ya da kendine) el yazısıyla kısa bir not yaz.", "Bugün telefonu çıkarmak yerine 'zihinsel bir fotoğraf' çek.", "Bu hafta uyku kalitesinin nasıl değiştiğini düşün.", "Evde bir köşeyi kalıcı ekransız bölge ilan et."] }
      ]
    },
    "burnout-recovery": {
      id: "burnout-recovery", experimentTitle: "Sızıntıları Tıkamak: 30 Günlük Mikro-Sınırlar",
      insight: "Tükenmişlik her zaman çok fazla yapmaktan gelmiyor — çoğunlukla seni gerçekten dolduran şeyleri yeterince yapmamaktan geliyor.",
      hypothesis: "Günde 1 dakikalık sınırlarla duygusal ve fiziksel enerji sızıntılarını tıkayarak, temel yaşam gücün doğal olarak yenilenir.",
      missions: [
        { week: 1, theme: "Dur", actions: ["1 dakika zamanlayıcı kurarak sadece gözlerini kapat.", "Anlık 'Evet' yerine 'Takvimine bakayım' de.", "Başka bir şey yapmadan bir bardak çay veya kahve iç.", "E-postayı açmadan önce 3 derin yavaş nefes al.", "Bugün acil olmayan bir görevi bilinçli olarak yarına ertele.", "Şu anda duruşunu %10 daha rahat yap.", "30 saniye boyunca çeneni gevşet ve omuzlarını düşür."] },
        { week: 2, theme: "Bağlantıyı Kes", actions: ["İş bildirimlerini zamanından 30 dakika önce kapat.", "Enerji emen bir grup sohbeti sessize al.", "Hedefsiz ve amaçsız 5 dakika yürü.", "Bu hafta küçük bir taahhüdü iptal et veya reddet.", "Nostalji ve güven hissi uyandıran bir şarkı dinle.", "En sevdiğin sıcaklıkta duş al.", "5 dakika tamamen hiçbir şey yapma."] },
        { week: 3, theme: "Şarj Et", actions: ["Bu gece 15 dakika daha erken yat.", "En sevdiğin yemeği yavaşça ve suçluluk duymadan ye.", "Sahip olduğun en rahat kıyafeti giy.", "Bugün başarıyla yapmaktan kaçındığın bir şeyi yaz.", "Temel bir günlük rutini tamamladığın için kendini yüksek sesle takdir et.", "Gerçekten mutlu olduğun eski bir fotoğrafa bak.", "Bir görevi her zamanki %100 yerine %50 çabayla yap."] },
        { week: 4, theme: "Sınırlar", actions: ["Bugün küçük bir şeye 'hayır' de.", "Küçük bir görevi devret veya yardım iste.", "Bir 'enerji vampiri' alışkanlığı belirle ve 24 saat duraklat.", "Bugün fiziksel bir sınır oluştur (kapıyı kapat, kulaklık tak).", "Bugün verilen kişisel bir kararı açıklamayı veya savunmayı reddet.", "Yorgunluğunu hemen 'düzeltmeye' çalışmadan kabul et.", "Önümüzdeki ay için temel sınır kuralını yaz."] }
      ]
    },
    "dopamine-reset": {
      id: "dopamine-reset", experimentTitle: "Sıkılganlık Detoksu: Sıradanda Büyüyü Keşfetmek İçin 30 Gün",
      insight: "Neşe hissetme yeteneğini kaybetmedin — dopamin eşiğin aşırı uyarıcı içerikler tarafından ele geçirildi. Gerçek neşe hâlâ orada, gürültünün altında.",
      hypothesis: "30 gün boyunca yüksek dopamin tetikleyicilerini bilinçli olarak azaltarak, beyin aşırı uyarılmış temel çizgisini düşürür ve sıradan anlar yeniden canlı hissettirmeye başlar.",
      missions: [
        { week: 1, theme: "Farkındalık", actions: ["Bugün sıkıldığın için ilk telefona uzandığın anı fark et ve not et.", "Kısa videolar izledikten sonra kontrol et: dolu mu yoksa boş mu hissediyorsun?", "Ekran veya eğlence olmadan tam bir öğün ye.", "En iyi 3 anlık tatmin kaynağını belirle ve not et.", "Dışarıda 5 dakika kulaklıksız yürü.", "2 dakika sessizce otur ve boşluğu doldurma dürtüsünü gözlemle.", "Bir kaydırma oturumunu aynı süreyle pencereden bakarak değiştir."] },
        { week: 2, theme: "Sürtünme", actions: ["7 gün boyunca bir kısa video uygulamasını telefondan sil.", "Eğlence tüketmeden önce 5 dakika bekle, dürtünün azalıp azalmadığını gör.", "10 dakika 'sıkıcı' bir aktivite yap: çamaşır katlama, yavaşça bulaşık yıkama.", "Birisiyle telefona bakmadan 10 dakika konuş.", "Kağıt kitap veya dergi oku, kısa da olsa.", "Her zamankinden daha yavaş ve dikkatli pişir veya yemek hazırla.", "Sıkıldığında harekete geçmeden önce 3 dakika sıkıntıyla kal."] },
        { week: 3, theme: "Tatmak", actions: ["Sabah içeceğini yavaşça iç, sadece tat ve sıcaklığa odaklanarak.", "Dışarı çık ve çevrendeki dünyadan 3 spesifik duyusal detay fark et.", "Bir şarkıyı başından sonuna kadar başka bir şey yapmadan dinle.", "Gözlerini kapat, bir ısırık ye ve tüm karmaşıklığını hisset.", "5 dakika boyunca alanındaki doğal ışık değişimlerini gözlemle.", "Bugünü daha hafif veya keyifli kılan küçük bir şeyi yaz.", "Sıcak bir içeceği iki elinle tut ve sadece 1 dakika nefes al."] },
        { week: 4, theme: "Yeniden Bağlantı", actions: ["Sakin bir tatmin sunan analog bir aktivite bul (bulmaca, eskiz, günlük).", "10 dakika ellerde bir şey yarat.", "Beğendiğin bir 'yavaş medya' tanımla (podcast, uzun makale, sesli kitap).", "10 dakikayı doğada hedefsiz geçir.", "Akıllı telefonlardan önce, çocukken neyin mutluluk getirdiğini listele.", "Bu haftanın sihirli hissettirdiği 2 sıradan anını düşün.", "İstek anları için kişisel düşük uyarımlı 'hızlı çözüm' tasarla."] }
      ]
    },
    "space-clearing": {
      id: "space-clearing", experimentTitle: "Dağınıklığı Temizle: Daha Hafif Bir Zihin İçin 30 Gün",
      insight: "Alanındaki her şey dikkatine küçük bir talep yapıyor. Ortamın ya sakinliğin ya da arka plan stresinin kaynağı — nötr diye bir şey yok.",
      hypothesis: "Ortamındaki fiziksel ve dijital gürültüyü sistematik olarak kaldırarak, zihinsel sürtünmenin fark edilir şekilde azaldığını hissedeceksin.",
      missions: [
        { week: 1, theme: "Yüzeyler", actions: ["Görünür bir yüzeyden (masa, raf) orada olmaması gereken her şeyi kaldır.", "3 aydır dokunulmayan 3 eşyayı at veya bağışla.", "Telefon ana ekranını düzenle: bu hafta kullanılmayan tüm uygulamaları sil.", "Çantayı tamamen boşalt ve sadece gerçekten gerekli olanı geri koy.", "Bir haftadan fazladır 'geçici' bırakılan tüm eşyaları yerine koy.", "En can sıkıcı yüzeyi temizle ve 72 saat temiz tut.", "'2 dakika kuralı'nı uygula: 2 dakikadan az sürüyorsa, şimdi yap."] },
        { week: 2, theme: "Dijital", actions: ["Gelen kutusundaki 1 haftadan eski tüm e-postaları sil veya arşivle.", "Hiç okumadığın 3 haber bülteni veya tanıtımdan aboneliği iptal et.", "Kamera rulondan 20 yinelenen veya bulanık fotoğrafı sil.", "30 gün içinde açılmayan uygulamaları sil.", "Masaüstünü veya yer imlerini 'her ihtimale karşı' kaydedilen öğelerden temizle.", "İndirilenler klasörünü temizle: 2 haftadan eski her şeyi sil.", "Telefon veya bilgisayar duvar kâğıdını sade ve minimalist bir şeyle değiştir."] },
        { week: 3, theme: "Bırakma", actions: ["'Her ihtimale karşı' saklanan bir eşyayı bağışla veya at.", "İlham vermek yerine tüketmekte olan 5 sosyal medya hesabının takibini bırak.", "Kaçınılan bir çekmece veya depolama alanını düzenle.", "Kullanılmasa da yenilenen bir aboneliği iptal et.", "Uzun süredir askıda olan ödünç alınan bir şeyi iade et veya çöz.", "Sona erdirmek veya yeniden müzakere etmek istediğin 3 taahhüdü yaz.", "Gerçekten yerine getirmek istemediğin bir isteğe 'hayır' de."] },
        { week: 4, theme: "Sistemler", actions: ["Her zaman kaybolan 5 eşya için belirlenmiş bir 'ev' oluştur.", "Haftalık 5 dakikalık yüzey sıfırlama alışkanlığı oluştur.", "Ev kuralı koy: her yeni eşya için 'bir girer, bir çıkar'.", "Evdeki ana dağınıklık noktasını belirle ve bir çözüm tasarla.", "Dijital mesajlar için basit bir tasnif sistemi kur.", "Alanı sıfırlamak için her Pazar 15 dakika planla.", "Kişisel 'düzen kurallarını' yaz: artık alanına girmeyecek şeyler."] }
      ]
    },
    "overthinking": {
      id: "overthinking", experimentTitle: "Aşırı Düşünmeyi Durdurmak: 30 Günlük Mükemmel Olmayan Eylem",
      insight: "Düşünmeyi gelişmiş bir erteleme aracı olarak kullanıyorsun. Mükemmeliyetçilik, gerçekten sahneye çıkmanı engelleyen bir kalkan.",
      hypothesis: "Küçük kararlar üzerinde anlık ve mükemmel olmayan eylemleri zorlayarak, 'analiz felci'nin sinirsel yolu zayıflamaya başlayacak.",
      missions: [
        { week: 1, theme: "Hız", actions: ["Sonraki küçük kararı (ne yemek, ne giymek) 60 saniyede ver.", "Kasıtlı ve zararsız bir yazım hatası içeren bir e-posta veya mesaj gönder.", "Kaçındığın bir göreve sadece 2 dakika başla. Sonra durabilirsin.", "Bir film/dizi 3 dakika içinde seç, yoksa hiçbir şey izleme.", "Kasıtlı olarak 'kötü' bir fikir yaz.", "Mesajlara hemen yanıt ver, 'düşünmek için bekletmek' yerine.", "Kasıtlı olarak küçük bir görevi açıkça yarı bırak."] },
        { week: 2, theme: "Güven", actions: ["Planlanmış bir rota olmadan yürüyüşe çık.", "Değerlendirmeye bakmadan bir şey (kahve, atıştırmalık) satın al.", "Bir ev işini tamamen farklı ve daha hızlı bir şekilde yap.", "Bir düşünce 'Ya eğer...' ile başlıyorsa, yüksek sesle 'Ee, ne olur?' de.", "Bir taslağı at ve fazla analiz yapmadan sıfırdan başla.", "Bugün bir seçim için ilk sezgine güven, geri dönme.", "Bugün yapılan küçük bir hatayı aşırı özür dilemeden kabul et."] },
        { week: 3, theme: "Serbest Bırakma", actions: ["Bugün kontrolün dışında olan bir şeyi belirle ve gerçekten omuz silkit.", "Bilgi aşırı yüküne neden olan 3 haber bülteninden aboneliği iptal et.", "Sonucun kötü olacağını bilerek 5 dakika yaratıcı bir şey yap (çiz, yaz).", "Fikir istendiğinde en basit ve doğrudan cevabı ver.", "'Her ihtimale karşı' saklanan fiziksel bir eşyayı at.", "Bir görevin ortasında dur ve 10 dakika başka bir şeye geç.", "Geçici bir dikkat dağınıklığı için kendini hızla affet."] },
        { week: 4, theme: "İvme", actions: ["Bugün tamamlananların 'yapıldı listesi'ni yap, mükemmel olmasa da.", "Şimdi hafta sonu planlarına kaç, araştırmayı aşırıya kaçırma.", "'%80 hazır' saydığın bir şeyi yayınla veya paylaş.", "Kendini zihinsel geviş getirirken yakalarsan, hemen 10 jumping jack veya esneme yap.", "Bugün biri kararı senin adına versin (ne yemek, ne izlemek).", "Hızlı bir kararın çok iyi sonuçlandığı bir zamanı hatırla.", "Düşük riskli kararlar için yeni kuralını yaz."] }
      ]
    },
    "morning-anchor": {
      id: "morning-anchor", experimentTitle: "Çapa Rutini: Sabahının Sahibi Ol",
      insight: "Sabah 5'te 'mucize sabah'a ihtiyacın yok. Beynin kontrolü kaygıya, yükümlülüklere veya parlak bir ekrana devretmeden önce ilk 10 dakikayı kazanman yeterli.",
      hypothesis: "Sabahın ilk anlarını bilinçli ve ekransız davranışlarla tutarlı biçimde koruyarak, gün boyu süren bir kontrol ve sakinlik hissi geliştireceksin.",
      missions: [
        { week: 1, theme: "Temel", actions: ["Bu sabah herhangi bir ekrana bakmadan önce bir bardak dolu su iç.", "Kalkar kalkmaz yatağı topla, istisnasız.", "Pencereyi aç veya 60 saniye taze hava almak için dışarı çık.", "En az 10 dakika uyanık olmadan telefona bakma.", "Odadan ayrılmadan önce bugün beklediğin bir şeyi yüksek sesle söyle.", "Çay, kahve veya kahvaltıyı çoklu görev yapmadan yavaşça hazırla.", "Çapa rutinini ödünsüz 7 gün üst üste tutmaya söz ver."] },
        { week: 2, theme: "Niyet", actions: ["Uyanma anında bir deftere tek cümle yaz — sadece bir tane.", "Herhangi bir mesaj açmadan önce günün 'en önemli görevi'ni belirle.", "Günü resmi olarak başlatmadan önce haber veya sosyal olmayan bir kitaptan paragraf oku.", "Herhangi bir konuşmadan önce 2 dakika kahveyle sessizce otur.", "Minnettar olduğun birini düşün ve ona söylediğini hayal et.", "Dünü gözden geçir: iyi giden bir şey, değiştirilecek bir şey.", "Haftalık 'çapa kelimesi'ni seç — somutlaştırmak istediğin bir değer veya kalite."] },
        { week: 3, theme: "Beden", actions: ["Uyanmadan sonra 2 dakika içinde 10 fiziksel hareket yap.", "Mümkün olduğunca hafif soğuk duş al — son 15 saniyeyi soğuk suyla bitir.", "Biriyle konuşmadan önce gergin bir kas grubunu 60 saniye ger.", "Uyanmadan sonra 2 dakika doğal ışıkta dur (dışarıda veya pencere kenarında).", "Telefonu almadan önce gözler kapalı 5 derin yavaş nefes al.", "Akıl dalaşı olmadan tam fiziksel dikkatle bir şey yap.", "Bugün herhangi bir medya tüketmeden önce yürü veya hafifçe hareket et."] },
        { week: 4, theme: "Akış", actions: ["Bugün telefon olmadan tüm çapa dizisini tamamla.", "Sabah rutininin hangi öğesinin en fazla enerji verdiğini belirle.", "Yük gibi hissettiren herhangi bir rutin adımı kısalt veya basitleştir.", "Yarının çapasını kolaylaştıracak bir 'önceki gece ritüeli' tasarla.", "Geç kalsan bile rutini uygula — daha az zaman, ama sıfır değil.", "Yansıt: 30 günde sabah kalitenin nasıl değiştiği.", "Son 'Sabah Çapan'ı yaz — müzakere edilemez 3 ilk eylem."] }
      ]
    }
  }
};
