# 📐 LESSON_SCHEMA — `lesson.js` Build Rules
> Version: 1.0 | Compatible with: `app.js` v1  
> Golden Rule: **Don't think — just fill the template**

---

## ⚠️ Strict Rules Before You Start

```
❌ DO NOT invent new keys that aren't in the template
❌ DO NOT delete any key even if it seems unnecessary
❌ DO NOT change section order (1 → 10)
❌ DO NOT rename the main variable: LESSON_DATA
❌ DO NOT add import / export / module.exports
❌ DO NOT remove the numbered comment separators between sections — keep them exactly as in the template, including the `====` decorative borders:
```
// ================================================================
// *** 1. META - Lesson Metadata
// ================================================================
```
❌ DO NOT repeat any emoji in vocab — each emoji is used once only
❌ DO NOT add `\`\`\`js or \`\`\` at the beginning or end — the output must be pure JS only
✅ All answers (answer / answers / data-answer) are case-sensitive — match the exact expected response
✅ Only replace text values and data inside the template
✅ vocab.emoji = string, not array — "🏠" or "🏠 🔑"
```

---

## 🚨 Critical JavaScript String Safety Rule

Before outputting `lesson.js`, check every text value that uses quotes.

### General rule

Any string wrapped with double quotes `"..."` must not contain raw double quotes inside it.

This rule applies to **any language and any field**, including English, Chinese, Arabic, notes, questions, answers, instructions, and feedback.

If a text value needs quotation marks inside it, use one of these safe options:

1. Escape the inner double quotes as `\"...\"`
2. Rewrite the text without inner quote marks
3. Use single quotes for the outer JavaScript string only if the text does not contain unsafe single quotes

### Example only

```js
// ❌ Wrong — this breaks JavaScript:
zh: "店主常以"Can I help you?"开场。"

// ✅ Correct — escape the inner double quotes:
zh: "店主常以\"Can I help you?\"开场。"

// ✅ Also correct — rewrite without inner quotes:
zh: "店主常用 Can I help you? 开场。"
```

**Mandatory rule:**
- If a string is wrapped with double quotes `"..."`, do not put raw double quotes inside it.
- If any phrase must appear inside another quoted string, either escape the inner quotes as `\"...\"` or remove the inner quote marks.
- Pay extra attention to `zh`, `en`, `note`, `question`, `sentence`, `instruction`, and `smartFeedback` fields.
- The final file must pass:

```bash
node --check lesson.js
```

If `node --check` would fail, fix the syntax before outputting the file.

---

## 🏗️ Full File Structure

```
LESSON_DATA = {
  meta          → Section 1
  hook          → Section 2
  thinking      → Section 3
  vocab         → Section 4
  dialogue      → Section 5
  dialogueScenes → Section 6  ← read directly by app.js
  explain       → Section 7
  grammarMeta   → Section 8-a
  grammar       → Section 8-b
  exercisesMeta → Section 9-a
  exercises     → Section 9-b (A → T — see note below about display order)
  smartFeedback → Section 10
}
```

---

## 📋 Section 1 — `meta`

```js
meta: {
  pageTitle:   STRING,   // Must contain "|"
  brandTitle:  STRING,   // Main topic keyword
  brandIcon:   EMOJI     // Single emoji representing the lesson topic
}
```

**Example:**
```js
meta: {
  pageTitle: "Renting an Apartment | English Lesson",
  brandTitle: "Renting an Apartment",
  brandIcon: "🏠"
}

---

## 📋 Section 2 — `hook`

```js
hook: {
  emojis:   STRING,   // 4-6 emojis separated by spaces
  title_en: STRING,   // Engaging hook question in English
  title_zh: STRING,   // Chinese translation of the hook question
  tagline:  STRING,   // "📚 Unit X · Lesson Y"

  compare: [           // exactly 2 items
    {
      emoji: EMOJI,
      en:    STRING,
      zh:    STRING,
      type:  STRING    // Free word: "active" | "quiet" | "reading" | etc.
    },
    { ... }            // same structure
  ]
}
```

**`compare` rules:**
- Item count: **exactly 2** (rendered by app.js as a two-column grid)
- `type` is used as a CSS class — use a simple English word with no spaces

---

## 📋 Section 3 — `thinking`

```js
thinking: [   // 3 to 5 questions
  {
    en:    STRING,   // Thinking question in English
    zh:    STRING,   // Chinese translation
    emoji: EMOJI
  },
  ...
]
```

---

## 📋 Section 4 — `vocab`

```js
vocab: [   // 15 to 35 vocabulary items
  {
    en:    STRING,   // The English word/phrase
    zh:    STRING,   // Chinese translation
    emoji: STRING,   // Single emoji, or two only when necessary
    type:  STRING    // Word type in English: "noun", "verb", etc.
  },
  ...
]
```

**Allowed `type` values (use the annotated format with Chinese):**
```
"Noun · 名词"
"Plural Noun · 名词复数"
"Verb · 动词"
"Gerund · 动名词"
"Adjective · 形容词"
"Adverb · 副词"
"Preposition · 介词"
"Pronoun · 代词"
"Number · 数词"
"Question word · 疑问词"
"Expression · 表达语"
"Greeting · 问候语"
```
### ⚠️ Emoji rules for vocabulary — read before anything:
```
RULE 1 — Default: one emoji per word
  emoji: "🏠"

RULE 2 — Exception: a second emoji only if meaning is unclear from the first alone
  emoji: "🏠 🔑"

RULE 3 — ❌ Strictly forbidden:
  - Three or more emojis
  - Repeating the same emoji across different words
  - Using an array — correct format: space-separated string "🏠 🔑"

RULE 4 — Pre-submit test:
  Read every emoji from first to last vocab item —
  If you see the same emoji twice → fix the duplicate immediately
```
---

## 📋 Section 5 — `dialogue`

```js
dialogue: [   // 6 to 12 lines
  {
    speaker: STRING,   // Speaker name (for display)
    role:    STRING,   // CSS class name or identifier (English letters only)
    en:      STRING,   // The full English sentence
    zh:      STRING    // Chinese translation
  },
  ...
]
```

---

## 📋 Section 6 — `dialogueScenes`

```js
dialogueScenes: [   // exactly 2 scenes
  {
    emoji:     EMOJI,    // Emoji representing the scene
    label_en:  STRING,   // Scene title in English
    label_zh:  STRING,   // Scene title in Chinese
    gradient:  STRING    // "linear-gradient(135deg,#color1,#color2)"
  },
  { ... }                // same structure — second scene
]
```

**Rules:**
- Item count: **exactly 2** (rendered side by side by app.js)
- `gradient` must start with `linear-gradient(...)` exactly
- This is a colored background image for the scene — one line only per scene

---

## 📋 Section 7 — `explain`

```js
explain: [   // 4 to 6 explanation points
  {
    label: STRING,   // "① Title of this point"
    en:    STRING,   // Explanation in English
    zh:    STRING,   // Chinese translation
    note:  STRING    // Highlighted note — supports \n for multi-line
  },
  ...
]
```

**`label` rule:** Must start with ①②③... (numbered circle) then a space then the title.

---

## 📋 Section 8 — `grammarMeta` and `grammar`

```js
grammarMeta: {
  title:    STRING,   // "Grammar · [topic]"
  subtitle: STRING    // Chinese subtitle, e.g. "语法 — [description in Chinese]"
},

grammar: [
  // Type 1: sentence pattern
  {
    type:  "pattern",
    title: STRING,   // "📐 [pattern name]"
    en:    STRING,   // The grammar rule/pattern explanation
    zh:    STRING    // Chinese translation
  },

  // Type 2: conjugation
  {
    type:  "conjugation",
    title: STRING,
    items: [
      { pronoun: STRING, verb: STRING, zh: STRING },
      ...   // 6 forms: I, You (m), You (f), He, She, We
    ]
  }
]
```

**Allowed `type` values only:** `"pattern"` | `"conjugation"`

---

## 📋 Section 9 — `exercisesMeta` and `exercises`

### 9-a: Meta
```js
exercisesMeta: {
  title:    STRING,   // Always "Exercises"
}
```

### 9-b: Exercises (A → T)

> **Note on order:** The key names (A → T) are identifiers. `app.js` controls the actual display order — you can arrange the keys in any order in `lesson.js`. Keep all 22 types listed below for compatibility.

#### A — Multiple Choice `mcq`
```js
mcq: [   // exactly 3 questions
  {
    question: STRING,
    options:  [STRING, STRING, STRING, STRING],   // exactly 4 options
    correct:  NUMBER   // index 0-3
  },
  ...
]
```

#### B — True / False `trueFalse`
```js
trueFalse: [   // 4 to 6 statements
  {
    en:      STRING,
    zh:      STRING,
    correct: BOOLEAN   // true | false only
  },
  ...
]
```

#### C — Fill in the Blanks `fillBlanks`
```js
fillBlanks: [   // 3 sentences
  {
    sentence: STRING,   // Sentence with "___" as the blank
    answer:   STRING    // The correct answer
  },
  ...
]
```

#### D — Drag Words `dragWords`
```js
dragWords: [   // 4 to 8 words
  {
    en:  STRING,
    cat: STRING   // Category like: "active" | "quiet" | "positive" | "negative"
  },
  ...
]
```

**Warning:** There must be at least 2 different (`cat`) categories.

#### D2 — Drag Zones `dragZones`
```js
dragZones: [   // exactly 2 items — must match dragWords
  {
    accept: STRING,   // Same value as cat in dragWords
    emoji:  EMOJI,    // Emoji representing the category
    en:     STRING,   // Category name in English
    zh:     STRING    // Category name in Chinese
  },
  { ... }            // Second category
]
```

#### E — Word Order `orderWords` + `orderTarget`
```js
orderWords:  [STRING, ...],   // Array of mixed-up words (any length, 4-8 typical)
orderTarget: STRING   // The correctly ordered sentence
```

**Warning:** `orderWords` and `orderTarget` are separate keys at the root of `exercises` (not inside an object).

#### Auto-generated Exercise — Matching (no data needed)
`app.js` automatically generates a **Matching** exercise from the first 5 vocab items — no need to write data in `lesson.js`.


#### F — Correct the Error `correctError`
```js
correctError: {
  sentence: STRING,
  options: [
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN }   // 4 options, only one correct: true
  ]
}
```

#### G — Rewrite `rewrite`
```js
rewrite: {
  sentence:    STRING,   // Original sentence → incomplete sentence with ___
  answer:      STRING,   // The correct answer (case-sensitive)
  instruction: STRING    // Instruction text, e.g. "Rewrite using 'he'"
}
```

#### H — Guided Writing `guidedWriting`
```js
guidedWriting: {
  title:       STRING,
  instruction: STRING,
  sentences: [   // 3 sentences
    { prefix: STRING, placeholder: STRING },
    ...
  ]
}
```

#### I — Listening Exercise `listeningExercise`
```js
listeningExercise: {
  text:    STRING,   // The correct text that is "read aloud"
  options: [
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN }   // 3 options, only one correct: true
  ]
}
```

**⚠️ Rule: `text` MUST appear verbatim as one of the `options[i].en` (the correct one).**
The wrong options are paraphrases or variations of the same topic — the correct option is the exact sentence from `text`.
```
✅ Correct:
  text: "The apartment is on the fifth floor",
  options: [
    { en: "The apartment is on the first floor", correct: false },
    { en: "The apartment is on the fifth floor", correct: true },  // ← same as text
    { en: "The apartment is on the third floor", correct: false }
  ]

❌ Wrong — verbatim match missing:
  text: "You can get 10% discount. That means fifty rupees off.",
  options: [
    { en: "5% discount", correct: false },
    { en: "10% discount worth fifty rupees", correct: true },  // ← paraphrase, not verbatim
    { en: "20% discount", correct: false }
  ]
```

#### J — Speed Challenge `speedChallenge`
```js
speedChallenge: {
  title:       STRING,   // "⚡ Speed Challenge"
  instruction: STRING    // "30 seconds"
}
```

#### K — Multi-Step Thinking `multiStep`
```js
multiStep: {
  title:       STRING,
  instruction: STRING,
  story: {
    en: STRING,
    zh: STRING
  },
  questions: [   // 2 questions
    {
      en:      STRING,
      zh:      STRING,
      options: [
        { en: STRING, correct: BOOLEAN },
        { en: STRING, correct: BOOLEAN },
        { en: STRING, correct: BOOLEAN }
      ]
    },
    ...
  ]
}
```

#### L — Paragraph `paragraph`
```js
paragraph: {
  sentence: STRING,   // Sentence with "___" (3 underscores) as blanks
  answers:  [STRING, STRING, STRING]   // Answers in order
}
```

#### M — Context Analysis `contextAnalysis`
```js
contextAnalysis: {
  dialogue:  STRING,   // Short dialogue (use \n for line breaks)
  question:  STRING,
  options: [
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN }
  ]
}
```

#### N — Scenario `scenario`
```js
scenario: {
  setup_en: STRING,   // Situation description in English (appears before the question)
  setup_zh: STRING,   // Situation description in Chinese
  question: STRING,
  options: [
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN }
  ]
}
```
---

#### O — Visual Choice `visualChoice`
```js
visualChoice: {
  emoji:   EMOJI,
  options: [
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN },
    { en: STRING, correct: BOOLEAN }
  ]
}
```

#### P — Sentence Transform `sentenceTransform`
```js
sentenceTransform: {
  title:       STRING,
  instruction: STRING,   // e.g. "Change to past tense"
  sentence:    TEMPLATE_LITERAL,   // Use backticks `...` — contains HTML with data-answer="..."
  answer:      STRING
}
```

**⚠️ Critical Warning (read before writing):**
The `sentence` value contains HTML with double quotes. **It MUST be written with backticks ( \` )** not regular quotes:
```js
// ✅ Correct — use backticks:
sentence: `The sentence ← <input class="fill-input" data-answer="answer" style="min-width:110px"> rest of sentence?`,

// ❌ Wrong — double quotes break the HTML:
sentence: "The sentence ← <input class=\"fill-input\" data-answer=\"answer\" ...>"  // ← SYNTAX ERROR
```
Reason: Double quotes inside HTML conflict with JavaScript string delimiters.
Solution: Use backticks (`) instead of " or '.

#### Q — Challenge `challenge`
```js
challenge: {
  zh:       STRING,   // Instruction / context in Chinese
  sentence: STRING,   // Sentence with "___" (3 underscores) as blanks
  answers:  [STRING, STRING, STRING]
}
```

#### R — Select Words `selectWords`
```js
selectWords: {
  title_en: STRING,   // e.g. "Select the words that express emotions"
  title_zh: STRING    // e.g. "点击选择表示情感的词语"
}
```

**⚠️ Important:** `app.js` automatically uses the first 4 vocab items as correct choices, and the next 4 (index 4-7) as wrong choices. **Order the first 8 vocab items to match this exercise's content.**

#### S — Dialogue Fill `dialogueFill`
```js
dialogueFill: {
  lines: [
    {
      speaker: STRING,   // Speaker name: "Tenant"
      text:    STRING,   // Sentence with ___ as the blank
      answer:  STRING    // The correct word (case-sensitive)
    },
    ...
  ]
}
```

**Rule:** At least 4 lines — taken from the actual lesson dialogue.

#### T — Pattern Fill `patternFill`
```js
patternFill: {
  title:       STRING,   // "Verb Conjugation"
  instruction: STRING,   // "Conjugate the verb"
  lines: [
    {
      pronoun: STRING,   // Pronoun: "I", "You", "He", "She", "We", "They"
      verb:    STRING,   // Conjugated verb
      suffix:  STRING    // Sentence continuation after the verb
    },
    ...
  ]
}
```

**Rule:** At least 5 lines — taken from the main verb conjugation in the lesson.

## 📋 Section 10 — `smartFeedback`

```js
smartFeedback: {
  "wrong-word-example": {
    context: STRING,   // Context related to the error
    correct: STRING,   // The correct form
    en:      STRING,   // Error explanation in English (starts with 💡)
    zh:      STRING    // Error explanation in Chinese
  },
  ...   // 3 to 5 expected common mistakes for this lesson
}
```

---

## ✅ Pre-Submit Validation Checklist

```
□ Variable is named LESSON_DATA exactly
□ All 10 sections exist in order
□ meta.pageTitle contains "|"
□ hook.compare has exactly 2 items
□ exercises.mcq has 3 questions, each with 4 options
□ Each exercise has exactly one correct: true (except trueFalse)
□ dragZones exist and match dragWords (accept = cat)
□ selectWords has title_en and title_zh appropriate to the lesson content
□ First 8 vocab words are suitable for selectWords (first 4 correct, next 4 wrong)
□ scenario has setup_en and setup_zh clearly describing the situation
□ dialogueFill has lines from the actual lesson dialogue (4 lines minimum) — each line contains exactly one ___
□ patternFill has lines from the main verb conjugation (5 lines minimum)
□ rewrite has correct sentence and answer
□ orderWords and orderTarget are separate keys (not an object)
□ sentenceTransform.sentence is written with backticks ( \`...\` ) not "..." — with data-answer="..." inside it
□ smartFeedback has at least 3 keys
□ No code outside LESSON_DATA (no functions, no imports)
□ File ends with }; (closes LESSON_DATA)
□ dialogueScenes is an array, not an object
□ Every key that contains an array uses [] not {} and not a string
□ File does NOT start with \`\`\`js — it starts with const LESSON_DATA =
□ File does NOT end with \`\`\` — it ends with };
□ All original numbered comments are present between sections (// *** 1. META ... ***, // *** 2. HOOK ... *** etc.)
□ const LESSON_DATA — no export, no module.exports
□ vocab: no duplicate emojis across items — each emoji is unique
□ vocab.emoji: string, not array
□ vocab.emoji: no more than two emojis in any single item
□ No trailing comma after the last item
□ dialogueScenes must be [] not {}, and every key containing a list must be an array — do NOT add export or module.exports.
```



## 🤖 Ready-to-use Prompt for AI

```
You are a JavaScript template filler — don't think, just fill.

You have:
1. lesson.js template (attached)
2. The new lesson content

Requirements:
- Extract content from the provided material
- Place content into the template without modifying the structure
- ⛨ Keep all original numbered comment separators between sections — do not delete or change them. The format is:
  ```
  // ================================================================
  // *** N. NAME - Description
  // ================================================================
  ```
- Do not invent new keys
- Do not delete any existing key
- Do not change section order
- ⛔ Do NOT wrap the output in \`\`\`js or \`\`\` — the output file must start with const LESSON_DATA = and end with };
- Output: only the lesson.js file, no explanation, no extra comments
- Run through the Validation Checklist before submitting
- emoji in vocab: default is one emoji "🏠". Exception: space-separated string "🏠 🔑" (two emojis only) if meaning is unclear. ❌ No duplicate emojis across vocab items.
- dragZones must be auto-generated and match cat in dragWords
- selectWords: add title_en and title_zh appropriate to the lesson content — ensure first 8 vocab items fit (first 4 correct, next 4 wrong)
- scenario: add setup_en and setup_zh describing the situation before the question (appears above the dashed line)
- dialogueFill: add at least 4 lines from actual lesson dialogue with ___ replacing the target word — each line must contain exactly one ___
- patternFill: add at least 5 lines from the main verb conjugation in the lesson
- ⚠️ Critical: sentenceTransform.sentence — use backticks `...` not "..." to avoid SyntaxError
- ⚠️ Critical: Never put raw double quotes inside a string that is already wrapped with double quotes. Example: do NOT write `zh: "店主常以"Can I help you?"开场"`; write `zh: "店主常以\"Can I help you?\"开场"` or rewrite without the inner quotes.
- Final validation: the output must pass `node --check lesson.js`. If it would not pass, fix syntax before final answer.
Rules: LESSON_SCHEMA.md (attached)
Template: lesson.js (attached)
```

---

*LESSON_SCHEMA v1.0 — Do not edit this file unless app.js changes*
