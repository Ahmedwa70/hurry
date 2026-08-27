/*
╔══════════════════════════════════════════════════════╗
║  Interactive English Lesson System                  ║
║  Copyright © 2026 Ahmed Abdo — All Rights Reserved ║
║  Unauthorized copying, distribution, or removal     ║
║  of this notice is strictly prohibited.             ║
╚══════════════════════════════════════════════════════╝
*/
const LESSON_DATA = {
  __owner__: { name: "Ahmed Abdo", studio: "Ahmed Abdo", year: 2026 },
  __integrity__: "af3b8c9d1e2f4a5b6c7d8e9f0a1b2c3d",

  // ================================================================
  // *** 1. META - 标题与元数据 - Lesson Metadata
  // ================================================================
  meta: {
    pageTitle: "Speech Sounds & Diet | English Lesson",
    brandTitle: "Speech Sounds",
    brandIcon: "🗣️"
  },

  // ================================================================
  // *** 2. HOOK - 课程导入 - Introduction
  // ================================================================
  hook: {
    emojis: "🗣️ 🦷 🍚 🌍 🔬",
    title_en: "Did what our ancestors ate change how we speak?",
    title_zh: "我们祖先的饮食改变了我们的说话方式吗？",
    tagline: "📚 Unit 4 · Lesson 2 · 第四单元 · 第2课",

    compare: [
      {
        emoji: "🦴",
        en: "Ancient Human",
        zh: "远古人类",
        type: "ancient"
      },
      {
        emoji: "🧑",
        en: "Modern Human",
        zh: "现代人类",
        type: "modern"
      }
    ]
  },

  // ================================================================
  // *** 3. THINKING - 思考问题 - Thinking Questions
  // ================================================================
  thinking: [
    {
      en: "How many sounds do you think human speech contains?",
      zh: "你认为人类语言包含多少种声音？",
      emoji: "🔢"
    },
    {
      en: "Can the food we eat affect how we speak?",
      zh: "我们吃的食物会影响我们说话的方式吗？",
      emoji: "🍽️"
    },
    {
      en: "Why are some sounds found in many languages but others are very rare?",
      zh: "为什么某些声音在很多语言中都有，而另一些则非常罕见？",
      emoji: "🌐"
    },
    {
      en: "How do you think biology and culture together shape language?",
      zh: "你认为生物因素和文化因素如何共同塑造语言？",
      emoji: "🧬"
    }
  ],

  // ================================================================
  // *** 4. VOCABULARY - 词汇 - Vocabulary
  // ================================================================
  vocab: [
    {
      en: "Labiodental",
      zh: "唇齿音",
      emoji: "👄",
      type: "Noun · 名词"
    },
    {
      en: "Overbite",
      zh: "上颌突出；覆咬合",
      emoji: "🦷",
      type: "Noun · 名词"
    },
    {
      en: "Agriculture",
      zh: "农业",
      emoji: "🌾",
      type: "Noun · 名词"
    },
    {
      en: "Neolithic",
      zh: "新石器时代的",
      emoji: "🪨",
      type: "Adjective · 形容词"
    },
    {
      en: "Hunter-gatherer",
      zh: "狩猎采集者",
      emoji: "🏹",
      type: "Noun · 名词"
    },
    {
      en: "Jawbone",
      zh: "下颌骨",
      emoji: "💀",
      type: "Noun · 名词"
    },
    {
      en: "Stable",
      zh: "稳定的",
      emoji: "⚖️",
      type: "Adjective · 形容词"
    },
    {
      en: "Biological",
      zh: "生物学的",
      emoji: "🔬",
      type: "Adjective · 形容词"
    },
    {
      en: "Confirm",
      zh: "证实",
      emoji: "✔️",
      type: "Verb · 动词"
    },
    {
      en: "Overturn",
      zh: "推翻；颠覆",
      emoji: "🔄",
      type: "Verb · 动词"
    },
    {
      en: "Aligned",
      zh: "对齐的",
      emoji: "📐",
      type: "Adjective · 形容词"
    },
    {
      en: "Remarkably",
      zh: "显著地",
      emoji: "📈",
      type: "Adverb · 副词"
    },
    {
      en: "Interplay",
      zh: "相互作用",
      emoji: "🔁",
      type: "Noun · 名词"
    },
    {
      en: "Evolution",
      zh: "进化；演变",
      emoji: "🧬",
      type: "Noun · 名词"
    },
    {
      en: "Diet",
      zh: "饮食",
      emoji: "🍎",
      type: "Noun · 名词"
    },
    {
      en: "Chew",
      zh: "咀嚼",
      emoji: "😬",
      type: "Verb · 动词"
    },
    {
      en: "Scholar",
      zh: "学者",
      emoji: "🎓",
      type: "Noun · 名词"
    },
    {
      en: "Ground-breaking",
      zh: "突破性的",
      emoji: "💥",
      type: "Adjective · 形容词"
    },
    {
      en: "Variety",
      zh: "多样性",
      emoji: "🌈",
      type: "Noun · 名词"
    },
    {
      en: "Popular view",
      zh: "普遍观点",
      emoji: "💬",
      type: "Expression · 表达语"
    }
  ],

  // ================================================================
  // *** 5. DIALOGUE - 对话 - Dialogue
  // ================================================================
  dialogue: [
    {
      speaker: "Researcher A",
      role: "researcher",
      en: "Did you read the new study about speech sounds and diet?",
      zh: "你看了关于语音与饮食的新研究了吗？"
    },
    {
      speaker: "Student",
      role: "student",
      en: "Yes! It says human speech has more than 2,000 different sounds.",
      zh: "看了！上面说人类语言有超过2000种不同的声音。"
    },
    {
      speaker: "Researcher A",
      role: "researcher",
      en: "That's right. And the study found that diet-related changes in our bite led to new speech sounds.",
      zh: "对。研究发现，饮食引起的咬合变化导致了新语音的产生。"
    },
    {
      speaker: "Student",
      role: "student",
      en: "You mean sounds like 'f' and 'v' — the labiodentals?",
      zh: "你是说像\"f\"和\"v\"这样的唇齿音吗？"
    },
    {
      speaker: "Researcher A",
      role: "researcher",
      en: "Exactly. Ancient humans had aligned teeth, so labiodentals were hard to produce.",
      zh: "完全正确。远古人类的牙齿是对齐的，所以很难发唇齿音。"
    },
    {
      speaker: "Student",
      role: "student",
      en: "But when humans developed an overbite, it became easier to make those sounds?",
      zh: "但当人类发展出覆咬合后，发这些音就变得更容易了？"
    },
    {
      speaker: "Researcher A",
      role: "researcher",
      en: "Yes. And that change in bite is connected to the rise of agriculture in the Neolithic period.",
      zh: "是的。而这种咬合变化与新石器时代农业的兴起有关。"
    },
    {
      speaker: "Student",
      role: "student",
      en: "So softer food meant the jawbone didn't grow as large?",
      zh: "所以更软的食物意味着下颌骨不需要长得那么大？"
    },
    {
      speaker: "Researcher A",
      role: "researcher",
      en: "Exactly! And a language database confirmed a global increase in 'f' and 'v' after the Neolithic age.",
      zh: "完全正确！语言数据库也证实，新石器时代之后，\"f\"和\"v\"在全球范围内的使用明显增加。"
    },
    {
      speaker: "Student",
      role: "student",
      en: "This really overturns the view that all speech sounds were present since humans evolved.",
      zh: "这真的颠覆了人类进化之初所有语音就已存在的观点。"
    }
  ],

  // ================================================================
  // *** 6. DIALOGUE SCENES - 对话场景 - Dialogue Scenes
  // ================================================================
  dialogueScenes: [
    {
      emoji: "🔬",
      label_en: "In the research lab",
      label_zh: "在研究实验室",
      gradient: "linear-gradient(135deg,#e3f2fd,#90caf9)"
    },
    {
      emoji: "📚",
      label_en: "Reviewing the findings",
      label_zh: "回顾研究发现",
      gradient: "linear-gradient(135deg,#f3e5f5,#ce93d8)"
    }
  ],

  // ================================================================
  // *** 7. EXPLAIN - 课文讲解 - Explanation
  // ================================================================
  explain: [
    {
      label: "① Labiodental sounds · 唇齿音",
      en: "Labiodentals are sounds made by touching the lower lip to the upper teeth. Common examples are 'f' and 'v'. These sounds are now found in about half the world's languages.",
      zh: "唇齿音是通过下唇接触上齿发出的音，常见的有\"f\"和\"v\"。这些音如今在全球约一半的语言中出现。",
      note: "🔖 f and v = labiodental sounds · 唇齿音的代表"
    },
    {
      label: "② The overbite connection · 覆咬合的联系",
      en: "Ancient humans had aligned upper and lower front teeth, making labiodentals hard to produce. When the jaw structure changed to an overbite, these sounds became easier.",
      zh: "远古人类上下门牙对齐，导致唇齿音难以发出。当颌部结构演变为覆咬合后，这些音变得更容易发出。",
      note: "🔖 aligned teeth → hard to say 'f' · 对齐 → 难发唇齿音\noverbite → easy to say 'f' · 覆咬合 → 易发唇齿音"
    },
    {
      label: "③ Agriculture and diet · 农业与饮食",
      en: "The change in bite was connected to the Neolithic period when agriculture developed. Softer, farmed food meant less chewing, so the jawbone didn't grow as large.",
      zh: "咬合变化与农业兴起的新石器时代密切相关。更软的农产品意味着较少咀嚼，下颌骨也不再长得那么粗大。",
      note: "🔖 Neolithic = New Stone Age · 新石器时代"
    },
    {
      label: "④ Global language evidence · 全球语言证据",
      en: "A language database confirmed that after the Neolithic age, the use of 'f' and 'v' increased remarkably across the world's languages. Hunter-gatherer languages still lack these sounds today.",
      zh: "语言数据库证实，新石器时代后，全球语言中\"f\"和\"v\"的使用显著增加。狩猎采集者的语言至今仍缺乏这些音。",
      note: "🔖 hunter-gatherer languages → often no 'f' or 'v'"
    },
    {
      label: "⑤ Biology and culture · 生物与文化",
      en: "This research overturns the idea that all speech sounds existed since humans evolved 300,000 years ago. Language is shaped by a complex interplay of biological change and cultural evolution.",
      zh: "该研究推翻了30万年前人类进化之初所有语音就已存在的观点。语言由生物变化与文化演变的复杂相互作用塑造而成。",
      note: "🔖 interplay = interaction between two things · 相互作用"
    }
  ],

  // ================================================================
  // *** 8. GRAMMAR - 语法 - Grammar
  // ================================================================
  grammarMeta: {
    title: "Grammar: Passive Voice and Connectors",
    subtitle: "语法 — 被动语态与连接词"
  },
  grammar: [
    {
      type: "pattern",
      title: "📐 Passive voice · 被动语态",
      en: "Subject + was/were + past participle",
      zh: "主语 + was/were + 过去分词"
    },
    {
      type: "pattern",
      title: "📐 Causal connector · 因果连接词",
      en: "Diet-related changes + led to + new speech sounds",
      zh: "饮食相关变化 + 导致了 + 新语音的产生"
    },
    {
      type: "conjugation",
      title: "🔄 Verb: 'to confirm' · 动词变位",
      items: [
        { pronoun: "I", verb: "confirm", zh: "我证实" },
        { pronoun: "You", verb: "confirm", zh: "你证实" },
        { pronoun: "He", verb: "confirms", zh: "他证实" },
        { pronoun: "She", verb: "confirms", zh: "她证实" },
        { pronoun: "We", verb: "confirm", zh: "我们证实" },
        { pronoun: "They", verb: "confirm", zh: "他们证实" }
      ]
    }
  ],

  // ================================================================
  // *** 9. EXERCISES - 练习 - Exercises
  // ================================================================
  exercisesMeta: {
    title: "Exercises"
  },

  exercises: {

    // 9-A: MCQ
    mcq: [
      {
        question: "What caused the development of labiodental sounds like 'f' and 'v'?",
        options: ["Changes in brain size", "Diet-related changes in human bite", "Migration to colder climates", "The invention of writing"],
        correct: 1
      },
      {
        question: "Why did ancient humans find it hard to produce labiodental sounds?",
        options: ["They had no teeth", "Their upper and lower front teeth were aligned", "Their lips were too thick", "They spoke too quietly"],
        correct: 1
      },
      {
        question: "She ___ the research findings at the conference.",
        options: ["confirm", "confirms", "confirming", "confirmed"],
        correct: 3
      }
    ],

    // 9-B: True/False
    trueFalse: [
      { en: "Human speech contains more than 2,000 different sounds.", zh: "人类语言包含超过2000种不同的声音。", correct: true },
      { en: "Labiodentals are found in all hunter-gatherer languages today.", zh: "唇齿音在今天所有狩猎采集者的语言中都有。", correct: false },
      { en: "The change in bite is connected to the development of agriculture.", zh: "咬合变化与农业发展有关。", correct: true },
      { en: "The research confirms that all speech sounds existed 300,000 years ago.", zh: "研究证实30万年前所有语音就已存在。", correct: false },
      { en: "The use of 'f' and 'v' increased remarkably after the Neolithic age.", zh: "新石器时代后，\"f\"和\"v\"的使用显著增加。", correct: true }
    ],

    // 9-C: Fill Blanks
    fillBlanks: [
      {
        sentence: "Diet-related changes in human bite led to new speech ___.",
        answer: "sounds"
      },
      {
        sentence: "Ancient humans had ___ upper and lower front teeth.",
        answer: "aligned"
      },
      {
        sentence: "The jawbone didn't have to do as much work and so didn't grow to be so ___.",
        answer: "large"
      }
    ],

    // 9-D: Drag Words
    dragWords: [
      { en: "Labiodentals were hard to produce.", cat: "ancient" },
      { en: "The overbite made 'f' and 'v' easier.", cat: "modern" },
      { en: "Upper and lower teeth were aligned.", cat: "ancient" },
      { en: "Agriculture changed the jawbone structure.", cat: "modern" },
      { en: "The jawbone grew large from chewing hard food.", cat: "ancient" },
      { en: "Use of 'f' and 'v' increased remarkably.", cat: "modern" }
    ],
    dragZones: [
      { accept: "ancient", emoji: "🦴", en: "Ancient Human", zh: "远古人类" },
      { accept: "modern", emoji: "🧑", en: "Modern Human", zh: "现代人类" }
    ],

    // 9-E: Order Words
    orderWords: ["led", "changes", "diet-related", "to", "sounds", "new"],
    orderTarget: "Diet-related changes led to new sounds",

    // 9-F: Correct Error
    correctError: {
      sentence: "The jawbone didn't had to do as much work.",
      options: [
        { en: "had → have", correct: true },
        { en: "jawbone → jawbones", correct: false },
        { en: "much → many", correct: false },
        { en: "No error", correct: false }
      ]
    },

    // 9-G: Rewrite
    rewrite: {
      sentence: "I confirm the findings. → She ___ the findings.",
      answer: "confirms",
      instruction: "Rewrite using 'She'"
    },

    // 9-H: Guided Writing
    guidedWriting: {
      title: "Guided Writing",
      instruction: "引导写作",
      sentences: [
        { prefix: "Diet-related changes", placeholder: "... led to new speech sounds." },
        { prefix: "The jawbone didn't", placeholder: "... grow to be so large." },
        { prefix: "The use of 'f' and 'v'", placeholder: "... increased remarkably." }
      ]
    },

    // 9-I: Listening
    listeningExercise: {
      text: "The set of speech sounds we use has not necessarily remained stable since the appearance of human beings.",
      options: [
        { en: "Speech sounds have never changed since humans appeared.", correct: false },
        { en: "The set of speech sounds we use has not necessarily remained stable since the appearance of human beings.", correct: true },
        { en: "All speech sounds appeared in the Neolithic period.", correct: false }
      ]
    },

    // 9-J: Speed Challenge
    speedChallenge: {
      title: "⚡ Speed Challenge",
      instruction: "速度挑战 — 30 seconds"
    },

    // 9-K: Multi-step
    multiStep: {
      title: "Multi-step Thinking",
      instruction: "多步推理",
      story: {
        en: "Ancient humans had aligned teeth and ate hard food. Their jawbones were large. After the Neolithic period, people ate softer food. The jawbone became smaller and an overbite developed, making labiodental sounds like 'f' and 'v' easier to produce.",
        zh: "远古人类牙齿对齐，吃坚硬的食物，下颌骨粗大。新石器时代后，人们开始吃更软的食物。下颌骨变小，形成覆咬合，使得\"f\"和\"v\"等唇齿音更容易发出。"
      },
      questions: [
        {
          en: "Q1: What kind of teeth did ancient humans have?",
          zh: "远古人类有什么样的牙齿？",
          options: [
            { en: "An overbite structure", correct: false },
            { en: "Aligned upper and lower front teeth", correct: true },
            { en: "No front teeth", correct: false }
          ]
        },
        {
          en: "Q2: What made it easier to produce labiodental sounds?",
          zh: "是什么让唇齿音变得更容易发出？",
          options: [
            { en: "Larger jawbones", correct: false },
            { en: "Eating more meat", correct: false },
            { en: "Developing an overbite structure", correct: true }
          ]
        }
      ]
    },

    // 9-L: Paragraph
    paragraph: {
      sentence: "Diet-related changes in human ___ led to new speech sounds. The jawbone didn't have to do as much ___ and so didn't grow to be so large. A language database ___ the global change.",
      answers: ["bite", "work", "confirmed"]
    },

    // 9-M: Context Analysis
    contextAnalysis: {
      dialogue: "A: These sounds are still not found in the languages of many hunter-gatherer people today.\nB: So the change really is connected to agriculture and diet.",
      question: "What is speaker B doing? · B在做什么？",
      options: [
        { en: "Drawing a conclusion", correct: true },
        { en: "Asking a question", correct: false }
      ]
    },

    // 9-N: Scenario
    scenario: {
      setup_en: "You are reading a passage about how diet shaped human speech. You want to summarise the key finding in one sentence.",
      setup_zh: "你正在阅读一篇关于饮食如何塑造人类语音的文章，想用一句话概括核心发现。",
      question: "Which sentence best summarises the research?",
      options: [
        { en: "Humans have always spoken with the same sounds.", correct: false },
        { en: "Diet-related changes in bite led to new speech sounds now found in many languages.", correct: true },
        { en: "Agriculture made humans speak more slowly.", correct: false }
      ]
    },

    // 9-O: Visual Choice
    visualChoice: {
      emoji: "🌾",
      options: [
        { en: "Agriculture", correct: true },
        { en: "Shopping", correct: false },
        { en: "Swimming", correct: false }
      ]
    },

    // 9-P: Sentence Transform
    sentenceTransform: {
      title: "Sentence Transformation",
      instruction: "主动语态 → 被动语态",
      sentence: `Researchers confirmed the change. ← The change <input class="fill-input" data-answer="was confirmed" style="min-width:130px"> by researchers.`,
      answer: "was confirmed"
    },

    // 9-Q: Challenge
    challenge: {
      zh: "饮食相关的咬合变化导致了新语音的产生，这些语音现在在半数语言中都有。",
      sentence: "Diet-related changes in human ___ led to new speech ___ that are now found in half the world's ___.",
      answers: ["bite", "sounds", "languages"]
    },

    // 9-R: Select words
    selectWords: {
      title_en: "Select the words related to linguistics and speech",
      title_zh: "点击所有与语言学和语音相关的词"
    },

    // 9-S: Dialogue Fill
    dialogueFill: {
      lines: [
        { speaker: "Student", text: "It says human speech has more than 2,000 different ___.", answer: "sounds" },
        { speaker: "Researcher A", text: "Diet-related changes in our bite led to new speech ___.", answer: "sounds" },
        { speaker: "Researcher A", text: "Ancient humans had ___ teeth, so labiodentals were hard to produce.", answer: "aligned" },
        { speaker: "Researcher A", text: "That change in bite is connected to the rise of ___ in the Neolithic period.", answer: "agriculture" },
        { speaker: "Student", text: "This really ___ the view that all speech sounds were present since humans evolved.", answer: "overturns" }
      ]
    },

    // 9-T: Pattern Fill
    patternFill: {
      title: "Verb Conjugation",
      instruction: "动词变位",
      lines: [
        { pronoun: "I", verb: "confirm", suffix: "the research findings." },
        { pronoun: "You", verb: "confirm", suffix: "the global change." },
        { pronoun: "He", verb: "confirms", suffix: "the theory with evidence." },
        { pronoun: "She", verb: "confirms", suffix: "that labiodentals increased." },
        { pronoun: "We", verb: "confirm", suffix: "the results of the study." },
        { pronoun: "They", verb: "confirm", suffix: "the database analysis." }
      ]
    }

  },

  // ================================================================
  // *** 10. SMART FEEDBACK - 智能反馈 - Smart Feedback
  // ================================================================
  smartFeedback: {
    "confirms": {
      context: "I",
      correct: "confirm",
      en: "💡 With \"I\" we say \"confirm\" — no -s ending",
      zh: "💡 与\"我\"搭配用\"confirm\"，不加-s"
    },
    "confirm": {
      context: "She",
      correct: "confirms",
      en: "💡 Use \"confirms\" with He / She / It",
      zh: "💡 他/她/它 后面用 \"confirms\""
    },
    "labidental": {
      context: "spelling",
      correct: "labiodental",
      en: "💡 Correct spelling: l-a-b-i-o-d-e-n-t-a-l",
      zh: "💡 正确拼写：l-a-b-i-o-d-e-n-t-a-l"
    },
    "lead": {
      context: "past",
      correct: "led",
      en: "💡 Past tense of 'lead' is 'led', not 'leaded' or 'lead'",
      zh: "💡 lead 的过去式是 led，不是 leaded 或 lead"
    },
    "neolitic": {
      context: "spelling",
      correct: "Neolithic",
      en: "💡 Correct spelling: N-e-o-l-i-t-h-i-c — don't forget the 'h'",
      zh: "💡 正确拼写：N-e-o-l-i-t-h-i-c，注意不要漏掉\"h\""
    }
  }

};
