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
    pageTitle: "Shopping – Conversation | English Lesson",
    brandTitle: "Shopping",
    brandIcon: "🛍️"
  },

  // ================================================================
  // *** 2. HOOK - 课程导入 - Introduction
  // ================================================================
  hook: {
    emojis: "🛍️ 👕 💰 🏪 💬",
    title_en: "How do you shop for clothes?",
    title_zh: "你如何购买衣服？",
    tagline: "📚 Unit 3 · Lesson 1 · 第三单元 · 第1课",

    compare: [
      {
        emoji: "🧑",
        en: "Customer",
        zh: "顾客",
        type: "customer"
      },
      {
        emoji: "🏪",
        en: "Shopkeeper",
        zh: "店主",
        type: "shopkeeper"
      }
    ]
  },

  // ================================================================
  // *** 3. THINKING - 思考问题 - Thinking Questions
  // ================================================================
  thinking: [
    {
      en: "Do you enjoy shopping for clothes?",
      zh: "你喜欢购物买衣服吗？",
      emoji: "👕"
    },
    {
      en: "How do you ask for a discount in a shop?",
      zh: "你如何在商店里要求打折？",
      emoji: "💸"
    },
    {
      en: "What is your favourite colour for clothes?",
      zh: "你最喜欢什么颜色的衣服？",
      emoji: "🎨"
    },
    {
      en: "Have you ever bargained for a lower price?",
      zh: "你曾经讲价拿到更低的价格吗？",
      emoji: "🤝"
    }
  ],

  // ================================================================
  // *** 4. VOCABULARY - 词汇 - Vocabulary
  // ================================================================
  vocab: [
    {
      en: "T-shirt",
      zh: "T恤",
      emoji: "👕",
      type: "Noun · 名词"
    },
    {
      en: "Blue",
      zh: "蓝色的",
      emoji: "🔵",
      type: "Adjective · 形容词"
    },
    {
      en: "Red",
      zh: "红色的",
      emoji: "🔴",
      type: "Adjective · 形容词"
    },
    {
      en: "Discount",
      zh: "折扣",
      emoji: "🏷️",
      type: "Noun · 名词"
    },
    {
      en: "Hundred",
      zh: "百",
      emoji: "💯",
      type: "Number · 数词"
    },
    {
      en: "Rupees",
      zh: "卢比（货币）",
      emoji: "💵",
      type: "Noun · 名词"
    },
    {
      en: "Shopkeeper",
      zh: "店主",
      emoji: "🏪",
      type: "Noun · 名词"
    },
    {
      en: "Customer",
      zh: "顾客",
      emoji: "🧑",
      type: "Noun · 名词"
    },
    {
      en: "Show",
      zh: "展示",
      emoji: "👀",
      type: "Verb · 动词"
    },
    {
      en: "Help",
      zh: "帮助",
      emoji: "🆘",
      type: "Verb · 动词"
    },
    {
      en: "Hang",
      zh: "悬挂",
      emoji: "🪝",
      type: "Verb · 动词"
    },
    {
      en: "Buy",
      zh: "购买",
      emoji: "🛒",
      type: "Verb · 动词"
    },
    {
      en: "Just",
      zh: "就是",
      emoji: "✅",
      type: "Adverb · 副词"
    },
    {
      en: "Side",
      zh: "旁边",
      emoji: "↔️",
      type: "Noun · 名词"
    },
    {
      en: "How much",
      zh: "多少钱",
      emoji: "❓",
      type: "Question word · 疑问词"
    },
    {
      en: "Five hundred",
      zh: "五百",
      emoji: "5️⃣",
      type: "Number · 数词"
    },
    {
      en: "Fifty",
      zh: "五十",
      emoji: "🔢",
      type: "Number · 数词"
    },
    {
      en: "Ten percent",
      zh: "百分之十",
      emoji: "📊",
      type: "Expression · 表达语"
    },
    {
      en: "All right",
      zh: "好的",
      emoji: "👍",
      type: "Expression · 表达语"
    },
    {
      en: "Welcome",
      zh: "不客气",
      emoji: "😊",
      type: "Expression · 表达语"
    },
    {
      en: "Excuse me",
      zh: "打扰一下",
      emoji: "🙋",
      type: "Expression · 表达语"
    },
    {
      en: "Thank you",
      zh: "谢谢",
      emoji: "🙏",
      type: "Greeting · 问候语"
    }
  ],

  // ================================================================
  // *** 5. DIALOGUE - 对话 - Dialogue
  // ================================================================
  dialogue: [
    {
      speaker: "Shopkeeper",
      role: "shopkeeper",
      en: "Excuse me! Can I help you?",
      zh: "打扰一下！我可以帮您吗？"
    },
    {
      speaker: "Customer",
      role: "customer",
      en: "Yes. I want a T-shirt. Can you show me one?",
      zh: "是的，我想要一件T恤。你能给我看看吗？"
    },
    {
      speaker: "Shopkeeper",
      role: "shopkeeper",
      en: "Which one do you want?",
      zh: "您想要哪一件？"
    },
    {
      speaker: "Customer",
      role: "customer",
      en: "The blue one, just hanging at the side of the red one. How much does it cost?",
      zh: "就是那件蓝色的，挂在红色那件旁边的。多少钱？"
    },
    {
      speaker: "Shopkeeper",
      role: "shopkeeper",
      en: "Just five hundred rupees.",
      zh: "只要五百卢比。"
    },
    {
      speaker: "Customer",
      role: "customer",
      en: "Can't I have some discount?",
      zh: "能给我打个折吗？"
    },
    {
      speaker: "Shopkeeper",
      role: "shopkeeper",
      en: "Well, you can get 10% discount. That means fifty rupees off.",
      zh: "好吧，您可以享受九折优惠，也就是少五十卢比。"
    },
    {
      speaker: "Customer",
      role: "customer",
      en: "All right! I will buy that.",
      zh: "好的！我就买这件了。"
    },
    {
      speaker: "Shopkeeper",
      role: "shopkeeper",
      en: "Just four hundred and fifty rupees please.",
      zh: "请付四百五十卢比。"
    },
    {
      speaker: "Customer",
      role: "customer",
      en: "Here you are. Thank you.",
      zh: "给您。谢谢。"
    },
    {
      speaker: "Shopkeeper",
      role: "shopkeeper",
      en: "You are welcome.",
      zh: "不客气。"
    }
  ],

  // ================================================================
  // *** 6. DIALOGUE SCENES - 对话场景 - Dialogue Scenes
  // ================================================================
  dialogueScenes: [
    {
      emoji: "🏪",
      label_en: "In the shop",
      label_zh: "在商店里",
      gradient: "linear-gradient(135deg,#e8f5e9,#a5d6a7)"
    },
    {
      emoji: "💳",
      label_en: "Paying at the counter",
      label_zh: "在柜台付款",
      gradient: "linear-gradient(135deg,#fff8e1,#ffe082)"
    }
  ],

  // ================================================================
  // *** 7. EXPLAIN - 课文讲解 - Explanation
  // ================================================================
  explain: [
    {
      label: "① Offering help · 提供帮助",
      en: "Shopkeepers often open with: Can I help you? This is a polite offer of assistance.",
      zh: "店主常用 \"Can I help you?\" 开场，这是一句礼貌的服务用语。",
      note: "🔖 Can I help you? = standard shop greeting"
    },
    {
      label: "② Asking to see something · 请求展示",
      en: "To ask someone to show you something, say: Can you show me + noun? Example: Can you show me a T-shirt?",
      zh: "请求展示某物时说：Can you show me + 名词？例如：你能给我看件T恤吗？",
      note: "🔖 Can you show me one? = Can you show me a T-shirt?"
    },
    {
      label: "③ Asking about price · 询问价格",
      en: "To ask the price, say: How much does it cost? or simply: How much is it?",
      zh: "询问价格时说：How much does it cost？或简单说：How much is it？",
      note: "🔖 How much = used to ask about price"
    },
    {
      label: "④ Asking for a discount · 要求打折",
      en: "To ask for a discount, say: Can't I have some discount? This is a polite negotiation phrase.",
      zh: "要求打折时说：Can't I have some discount？这是一句礼貌的议价表达。",
      note: "🔖 10% discount = 10% off the original price"
    },
    {
      label: "⑤ Agreeing to buy · 同意购买",
      en: "To agree and confirm a purchase, say: All right! I will buy that.",
      zh: "同意购买时说：All right! I will buy that.（好的！我就买这件。）",
      note: "🔖 All right = okay / agreed"
    }
  ],

  // ================================================================
  // *** 8. GRAMMAR - 语法 - Grammar
  // ================================================================
  grammarMeta: {
    title: "Grammar: Questions with 'Can' and 'How much'",
    subtitle: "语法 — 用Can和How much提问"
  },
  grammar: [
    {
      type: "pattern",
      title: "📐 Asking for help · 请求帮助句型",
      en: "Can I / Can you + base verb + object?",
      zh: "Can I / Can you + 动词原形 + 宾语？"
    },
    {
      type: "pattern",
      title: "📐 Asking about price · 价格疑问句型",
      en: "How much + does + noun + cost?",
      zh: "多少钱 + does + 名词 + cost？"
    },
    {
      type: "conjugation",
      title: "🔄 Verb: 'to want' · 动词变位",
      items: [
        { pronoun: "I", verb: "want", zh: "我想要" },
        { pronoun: "You", verb: "want", zh: "你想要" },
        { pronoun: "He", verb: "wants", zh: "他想要" },
        { pronoun: "She", verb: "wants", zh: "她想要" },
        { pronoun: "We", verb: "want", zh: "我们想要" },
        { pronoun: "They", verb: "want", zh: "他们想要" }
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
        question: "How much does the T-shirt cost originally?",
        options: ["Four hundred rupees", "Four hundred and fifty rupees", "Five hundred rupees", "Six hundred rupees"],
        correct: 2
      },
      {
        question: "What discount does the customer get?",
        options: ["5% discount", "10% discount", "15% discount", "20% discount"],
        correct: 1
      },
      {
        question: "She ___ a blue T-shirt.",
        options: ["want", "wants", "wanting", "wanted"],
        correct: 1
      }
    ],

    // 9-B: True/False
    trueFalse: [
      { en: "The T-shirt costs five hundred rupees originally.", zh: "T恤原价五百卢比。", correct: true },
      { en: "The customer gets a 20% discount.", zh: "顾客获得了八折优惠。", correct: false },
      { en: "The customer buys the blue T-shirt.", zh: "顾客买了那件蓝色的T恤。", correct: true },
      { en: "The final price is four hundred rupees.", zh: "最终价格是四百卢比。", correct: false },
      { en: "The shopkeeper offers help at the beginning.", zh: "店主一开始就主动提供帮助。", correct: true }
    ],

    // 9-C: Fill Blanks
    fillBlanks: [
      {
        sentence: "Can I ___ you?",
        answer: "help"
      },
      {
        sentence: "How much does it ___?",
        answer: "cost"
      },
      {
        sentence: "You can get 10% ___.",
        answer: "discount"
      }
    ],

    // 9-D: Drag Words
    dragWords: [
      { en: "Can I help you?", cat: "shopkeeper" },
      { en: "I want a T-shirt.", cat: "customer" },
      { en: "Just five hundred rupees.", cat: "shopkeeper" },
      { en: "Can't I have some discount?", cat: "customer" },
      { en: "You are welcome.", cat: "shopkeeper" },
      { en: "I will buy that.", cat: "customer" }
    ],
    dragZones: [
      { accept: "shopkeeper", emoji: "🏪", en: "Shopkeeper", zh: "店主" },
      { accept: "customer", emoji: "🧑", en: "Customer", zh: "顾客" }
    ],

    // 9-E: Order Words
    orderWords: ["much", "does", "it", "how", "cost"],
    orderTarget: "How much does it cost",

    // 9-F: Correct Error
    correctError: {
      sentence: "She want a T-shirt.",
      options: [
        { en: "want → wants", correct: true },
        { en: "T-shirt → shirt", correct: false },
        { en: "She → Her", correct: false },
        { en: "No error", correct: false }
      ]
    },

    // 9-G: Rewrite
    rewrite: {
      sentence: "I want a T-shirt. → He ___ a T-shirt.",
      answer: "wants",
      instruction: "Rewrite using 'He'"
    },

    // 9-H: Guided Writing
    guidedWriting: {
      title: "Guided Writing",
      instruction: "引导写作",
      sentences: [
        { prefix: "I want a", placeholder: "... (colour) T-shirt." },
        { prefix: "How much does", placeholder: "... cost?" },
        { prefix: "Can't I have some", placeholder: "...?" }
      ]
    },

    // 9-I: Listening
    listeningExercise: {
      text: "You can get 10% discount. That means fifty rupees off.",
      options: [
        { en: "The customer gets 5% discount.", correct: false },
        { en: "You can get 10% discount. That means fifty rupees off.", correct: true },
        { en: "The customer gets 20% discount.", correct: false }
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
        en: "A customer wants to buy a blue T-shirt. It costs five hundred rupees. The shopkeeper gives a 10% discount, which means fifty rupees off.",
        zh: "一位顾客想买一件蓝色T恤，原价五百卢比。店主给了九折优惠，也就是少五十卢比。"
      },
      questions: [
        {
          en: "Q1: What colour T-shirt does the customer want?",
          zh: "顾客想要什么颜色的T恤？",
          options: [
            { en: "Red", correct: false },
            { en: "Blue", correct: true },
            { en: "Green", correct: false }
          ]
        },
        {
          en: "Q2: How much does the customer pay in the end?",
          zh: "顾客最终付了多少钱？",
          options: [
            { en: "Five hundred rupees", correct: false },
            { en: "Four hundred and fifty rupees", correct: true },
            { en: "Four hundred rupees", correct: false }
          ]
        }
      ]
    },

    // 9-L: Paragraph
    paragraph: {
      sentence: "Excuse me! Can I ___ you? Yes, I want a T-shirt. How much does it ___? Just five hundred ___.",
      answers: ["help", "cost", "rupees"]
    },

    // 9-M: Context Analysis
    contextAnalysis: {
      dialogue: "A: Can't I have some discount?\nB: Well, you can get 10% discount. That means fifty rupees off.",
      question: "Who is speaker A? · 说话人A是谁？",
      options: [
        { en: "Customer", correct: true },
        { en: "Shopkeeper", correct: false }
      ]
    },

    // 9-N: Scenario
    scenario: {
      setup_en: "You are in a clothes shop. You like a T-shirt but think it is too expensive. You want to pay less.",
      setup_zh: "你在一家服装店，你喜欢一件T恤，但觉得太贵了，想少付点钱。",
      question: "What do you say to the shopkeeper?",
      options: [
        { en: "You are welcome.", correct: false },
        { en: "Can't I have some discount?", correct: true },
        { en: "How many T-shirts do you have?", correct: false }
      ]
    },

    // 9-O: Visual Choice
    visualChoice: {
      emoji: "🏷️",
      options: [
        { en: "Discount", correct: true },
        { en: "Room", correct: false },
        { en: "Floor", correct: false }
      ]
    },

    // 9-P: Sentence Transform
    sentenceTransform: {
      title: "Sentence Transformation",
      instruction: "陈述句 → 疑问句",
      sentence: `It costs five hundred rupees. ← <input class="fill-input" data-answer="How much" style="min-width:110px"> does it cost?`,
      answer: "How much"
    },

    // 9-Q: Challenge
    challenge: {
      zh: "打扰一下！我想要一件T恤。它多少钱？五百卢比。",
      sentence: "___ me! I want a T-shirt. How ___ does it cost? Five hundred ___.",
      answers: ["Excuse", "much", "rupees"]
    },

    // 9-R: Select words
    selectWords: {
      title_en: "Select the words related to shopping",
      title_zh: "点击所有与购物相关的词"
    },

    // 9-S: Dialogue Fill
    dialogueFill: {
      lines: [
        { speaker: "Shopkeeper", text: "Excuse me! Can I ___ you?", answer: "help" },
        { speaker: "Customer", text: "I want a T-shirt. Can you ___ me one?", answer: "show" },
        { speaker: "Customer", text: "How much does it ___?", answer: "cost" },
        { speaker: "Shopkeeper", text: "You can get 10% ___.", answer: "discount" },
        { speaker: "Customer", text: "All right! I will ___ that.", answer: "buy" }
      ]
    },

    // 9-T: Pattern Fill
    patternFill: {
      title: "Verb Conjugation",
      instruction: "动词变位",
      lines: [
        { pronoun: "I", verb: "want", suffix: "a T-shirt, please." },
        { pronoun: "You", verb: "want", suffix: "a blue T-shirt." },
        { pronoun: "He", verb: "wants", suffix: "a red T-shirt." },
        { pronoun: "She", verb: "wants", suffix: "a T-shirt from the shop." },
        { pronoun: "We", verb: "want", suffix: "some discount, please." }
      ]
    }

  },

  // ================================================================
  // *** 10. SMART FEEDBACK - 智能反馈 - Smart Feedback
  // ================================================================
  smartFeedback: {
    'wants': {
      context: 'I', correct: 'want',
      en: '💡 With "I" we say "want" (without -s)',
      zh: '💡 跟\"我\"用\"want\"（不加-s）'
    },
    'want': {
      context: 'She', correct: 'wants',
      en: '💡 "wants" is used with "He/She/It"',
      zh: '💡 \"wants\" 用于\"他/她/它\"'
    },
    'how-much': {
      context: 'price', correct: 'How much',
      en: '💡 Use "How much" to ask about price, not "How many"',
      zh: '💡 询问价格用 How much，不用 How many'
    },
    'discont': {
      context: 'spelling', correct: 'discount',
      en: '💡 Correct spelling: d-i-s-c-o-u-n-t',
      zh: '💡 正确拼写：d-i-s-c-o-u-n-t'
    },
    'can-i': {
      context: 'help', correct: 'Can I help you?',
      en: '💡 Shopkeepers say \"Can I help you?\" — not \"I can help you?\"',
      zh: '💡 店员说 Can I help you？而不是 I can help you？'
    }
  }

};