// ================================================================
// *** 1. INIT - بدء التشغيل - 初始化
// ================================================================
console.log(`
╔══════════════════════════════════════════════════════╗
║  Interactive Lesson System                          ║
║  Copyright © 2026 Ahmed Abdo — All Rights Reserved ║
║  Unauthorized copying, distribution, or removal     ║
║  of credits is strictly prohibited.                ║
╚══════════════════════════════════════════════════════╝
`);
window.__PROJECT_OWNER__ = {
    creator: "Ahmed Abdo",
    studio: "Ahmed Abdo",
    year: "2026"
};
document.documentElement.setAttribute('data-theme', 'light');
let currentIndex = 0;

// تحقق من سلامة البيانات: التأكد من وجود التوقيع قبل تحميل الدرس
(function verifyDataIntegrity() {
    if (!LESSON_DATA || !LESSON_DATA.__owner__ || LESSON_DATA.__owner__.name !== "Ahmed Abdo") {
        document.body.insertAdjacentHTML('afterbegin', `
            <div style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;
                background:#fff;display:flex;flex-direction:column;align-items:center;
                justify-content:center;font-family:sans-serif;padding:20px;text-align:center">
                <div style="font-size:60px">⛔</div>
                <h2 style="color:#dc3545;margin:16px 0 8px">Protected Content</h2>
                <p style="color:#666;max-width:400px">
                    This lesson is protected by copyright © 2026 Ahmed Abdo.
                    Unauthorized use or modification is prohibited.
                </p>
            </div>
        `);
        throw new Error("Data integrity check failed — copyright signature missing");
    }
})();

try {
    loadLesson(LESSON_DATA);
} catch (err) {
    console.error('❌ Error in lesson.js:', err);
    hideSplashScreen();
    setTimeout(() => {
        document.body.insertAdjacentHTML('afterbegin', `
            <div style="position:fixed;top:80px;left:50%;transform:translateX(-50%);
                background:#fff3cd;border:1px solid #ffc107;border-radius:12px;
                padding:20px 28px;z-index:9999;max-width:500px;text-align:center;font-family:sans-serif">
                <div style="font-size:28px">⚠️</div>
                <div style="font-weight:700;margin:8px 0">Data file error</div>
                <div style="font-size:13px;direction:ltr;background:#f8f9fa;padding:10px;
                    border-radius:6px;font-family:monospace">${err.message}</div>
            </div>
        `);
    }, 900);
}

// ================================================================
// *** 2. BRANDING - العلامة التجارية - 品牌更新
// ================================================================
function updateBrandingDynamics(data) {
    const icon = data.meta.brandIcon || '📚';
    const fullTitle = data.meta.pageTitle || 'English Lesson';

    // 1. تحديث الـ Favicon (تبويب المتصفح)
    const svgFavicon = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${encodeURIComponent(icon)}</text></svg>`;
    const fav = document.getElementById('dynamicFavicon');
    const apple = document.getElementById('dynamicAppleIcon');
    if (fav) fav.setAttribute('href', svgFavicon);
    if (apple) apple.setAttribute('href', svgFavicon);

    // 2. تحديث Open Graph / Twitter للمشاركة
    const ogTitle = document.getElementById('ogTitle');
    const twTitle = document.getElementById('twitterTitle');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);
    if (twTitle) twTitle.setAttribute('content', fullTitle);

    // 3. تحديث Splash Screen
    const splashIcon = document.getElementById('splashIcon');
    const splashTitle = document.getElementById('splashTitle');
    const splashSubtitle = document.getElementById('splashSubtitle');
    if (splashIcon) splashIcon.textContent = icon;
    if (splashTitle) splashTitle.textContent = data.meta.brandTitle || '';
    if (splashSubtitle) {
        // استخراج الجزء الصيني من pageTitle (بعد علامة |)
        const parts = (fullTitle || '').split('|');
        splashSubtitle.textContent = parts.length > 1 ? parts[1].trim() : '加载中...';
    }
}

// ================================================================
// *** 3. SPLASH SCREEN - شاشة البداية - 启动画面
// ================================================================
function hideSplashScreen() {
    const splash = document.getElementById('splashScreen');
    if (!splash) return;
    // تأخير بسيط لإعطاء إحساس احترافي (ليس وميضاً سريعاً)
    setTimeout(() => {
        splash.classList.add('fade-out');
        // إزالته نهائياً من DOM بعد انتهاء الأنيميشن
        setTimeout(() => splash.remove(), 700);
    }, 800);
}

// تشغيلها بعد تحميل الصفحة كاملة
if (document.readyState === 'complete') {
    hideSplashScreen();
} else {
    window.addEventListener('load', hideSplashScreen);
}

// ================================================================
// *** 4. LESSON LOADER - تحميل الدرس - 加载课程
// ================================================================
function loadLesson(data) {

    document.getElementById('pageTitle').innerText = data.meta.pageTitle;
    document.getElementById('brandIcon').innerText = data.meta.brandIcon;
    document.getElementById('brandTitle').innerText = data.meta.brandTitle;

    // ✨ تحديث الـ favicon والـ splash والـ meta tags
    updateBrandingDynamics(data);

    renderHook(data.hook);

    renderThinking(data.thinking);
    renderVocab(data.vocab);
    renderDialogue(data.dialogue);
    renderDialogueScenes(data.dialogueScenes);
    renderExplain(data.explain);
    renderGrammar(data.grammar);

    document.getElementById('grammarTitle').innerText = data.grammarMeta.title;
    document.getElementById('grammarSubtitle').innerText = data.grammarMeta.subtitle;
    renderExercises();

    setTimeout(() => {
        const count = countExercises();
        document.getElementById('exercisesTitle').innerText =
            `Exercises · ${count} exercises`;
        document.getElementById('exercisesSubtitle').innerText =
            `${count} exercises`;
    }, 100);

    renderSpeaking();
}

// ================================================================
// *** 5. RENDER FUNCTIONS - بناء المحتوى - 渲染函数
// ================================================================
function renderHook(data) {
    document.getElementById('hookEmojis').innerText = data.emojis;
    document.getElementById('hookTitle').innerText = data.title_en;
    document.getElementById('hookSubtitle').innerText = data.title_zh;
    document.getElementById('hookTagline').innerText = data.tagline;

    const grid = document.getElementById('compareGrid');
    grid.innerHTML = "";

    data.compare.forEach(item => {
        const div = document.createElement('div');
        div.className = `compare-card ${item.type}`;

        div.innerHTML = `
            <span class="compare-emoji">${item.emoji}</span>
            <div class="compare-title en-text">${item.en}</div>
            <div class="compare-zh">${item.zh}</div>
        `;

        grid.appendChild(div);
    });
}
function renderDialogueScenes(scenes) {

    const container = document.getElementById('dialogueScenesContainer');
    if (!container) return;

    container.innerHTML = "";

    scenes.forEach((scene, index) => {

        const div = document.createElement('div');
        div.className = 'scene-img';

        // gradient
        div.style.background = scene.gradient;

        div.innerHTML = `
            ${scene.emoji}
            <div class="scene-label">
                ${scene.label_en} · ${scene.label_zh}
            </div>
        `;

        container.appendChild(div);
    });
}
function renderDialogue(dialogue) {

    const container = document.getElementById('dialogueBox');
    if (!container) return;

    container.innerHTML = "";

    dialogue.forEach((line, index) => {

        const div = document.createElement('div');

        div.className = `dial-line ${line.role}`;

        if (index === 0) div.classList.add("revealed");

        div.innerHTML = `
      <span class="speaker ${line.role}">${line.speaker}</span>
      <div class="en-text">${line.en}</div>
      <div class="zh-text">${line.zh}</div>
    `;

        container.appendChild(div);
    });
}

// ================================================================
// *** 6. UI CONTROLS - تحكمات الواجهة - 界面控制
// ================================================================

// ===== Font control - التحكم بالخط - 字体控制 =====

function increaseEnglishFont() { changeFont('en', 2) }
function decreaseEnglishFont() { changeFont('en', -2) }
function increaseChineseFont() { changeFont('zh', 2) }
function decreaseChineseFont() { changeFont('zh', -2) }

// ===== Translation toggle =====
let transShown = false;
function toggleTranslation() {
    transShown = !transShown;
    document.querySelectorAll('.zh-text').forEach(el => {
        if (transShown) el.classList.add('show');
        else el.classList.remove('show');
    });
    const btn = document.getElementById('transBtn');
    if (btn) btn.classList.toggle('active', transShown);
}

// ===== Theme =====
function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = next === 'dark' ? '☀️' : '🌙';
}

// ===== Focus mode =====
let focusMode = false;
function toggleFocus() {
    focusMode = !focusMode;
    document.body.classList.toggle('focus-mode', focusMode);
    const btn = document.getElementById('focusBtn');
    if (btn) btn.classList.toggle('active', focusMode);
    // عند الإطفاء اليدوي، أوقف نظام التركيز التلقائي مؤقتاً
    if (!focusMode && AutoFocus.enabled) {
        AutoFocus.deactivate(true);
    }
}

// ================================================================
// *** 7. AUTO FOCUS - التركيز التلقائي - 自动专注
// ================================================================
const AutoFocus = {
    enabled: true,           // مفعّل افتراضياً (يمكن إيقافه من الإعدادات أو الزر)
    idleDelay: 30000,        // 30 ثانية
    idleTimer: null,
    isActive: false,         // هل الوضع مفعّل حالياً؟
    suppressedUntil: 0,      // إيقاف مؤقت بعد إلغاء يدوي
    // نسبة "نافذة القراءة" من ارتفاع الشاشة (35% = شريط مريح للعين في الوسط)
    readingWindowHeight: 0.35,

    init() {
        // إنشاء overlay التركيز (مخفي افتراضياً)
        this.createOverlay();

        // الأحداث التي تعتبر "تفاعلاً" مع الصفحة
        const interactionEvents = ['mousedown', 'keydown', 'touchstart', 'click'];
        interactionEvents.forEach(evt => {
            window.addEventListener(evt, () => this.onActivity(), { passive: true });
        });

        // mousemove يلغي الوضع (تفاعل صريح)
        window.addEventListener('mousemove', () => this.onActivity(), { passive: true });

        // التمرير لا يلغي الوضع (الطالب يقرأ ويمرر طبيعياً)
        // فقط نُحدّث موضع نافذة التركيز إذا تغير حجم الشاشة
        window.addEventListener('resize', () => {
            if (this.isActive) this.updateOverlayPosition();
        }, { passive: true });

        // ابدأ العد من اللحظة الأولى
        this.resetTimer();
    },

    // ✨ إنشاء overlay مكوّن من شريطين (أعلى وأسفل) يغطيان الجزء غير المركّز
    createOverlay() {
        if (document.getElementById('autoFocusOverlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'autoFocusOverlay';
        overlay.className = 'auto-focus-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = `
            <div class="afo-mask afo-mask-top"></div>
            <div class="afo-mask afo-mask-bottom"></div>
        `;
        document.body.appendChild(overlay);
        this.overlay = overlay;
    },

    // تحديث ارتفاع الشريط العلوي والسفلي حسب حجم الشاشة
    updateOverlayPosition() {
        if (!this.overlay) return;
        const viewportH = window.innerHeight;
        const windowH = viewportH * this.readingWindowHeight;
        const gapTop = (viewportH - windowH) / 2;
        const gapBottom = (viewportH - windowH) / 2;

        const topMask = this.overlay.querySelector('.afo-mask-top');
        const bottomMask = this.overlay.querySelector('.afo-mask-bottom');
        if (topMask) topMask.style.height = gapTop + 'px';
        if (bottomMask) {
            bottomMask.style.height = gapBottom + 'px';
            bottomMask.style.top = (gapTop + windowH) + 'px';
        }
    },

    onActivity() {
        // إذا كان الوضع مفعلاً، أطفئه فوراً
        if (this.isActive) {
            this.deactivate();
        }
        // أعد ضبط الميقاتي
        this.resetTimer();
    },

    resetTimer() {
        clearTimeout(this.idleTimer);
        if (!this.enabled) return;
        // إذا كان المستخدم قد أوقف الميزة يدوياً مؤخراً، احترم ذلك
        if (Date.now() < this.suppressedUntil) return;
        // إذا كان الوضع اليدوي مفعلاً، لا حاجة للأتوماتيكي
        if (focusMode) return;

        this.idleTimer = setTimeout(() => this.activate(), this.idleDelay);
    },

    activate() {
        // لا تفعّل إذا كان الوضع اليدوي مفعلاً، أو الإعدادات مفتوحة
        if (focusMode) return;
        const settingsOpen = document.getElementById('settingsModal');
        if (settingsOpen && settingsOpen.style.display !== 'none' && settingsOpen.style.display !== '') return;

        this.isActive = true;
        document.body.classList.add('auto-focus-active');
        this.updateOverlayPosition();

        // أظهر إشعاراً خفيفاً
        this.showIndicator();
    },

    deactivate(silent = false) {
        if (!this.isActive && !silent) return;
        this.isActive = false;
        document.body.classList.remove('auto-focus-active');
        this.hideIndicator();
    },

    showIndicator() {
        let indicator = document.getElementById('autoFocusIndicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'autoFocusIndicator';
            indicator.className = 'auto-focus-indicator';
            indicator.innerHTML = `
                <span class="afi-icon">🎯</span>
                <div class="afi-text">
                    <div class="afi-en">Focus mode</div>
                    <div class="afi-zh">专注模式已启动</div>
                </div>
            `;
            document.body.appendChild(indicator);
        }
        // إعادة تشغيل الأنيميشن
        indicator.classList.remove('show');
        void indicator.offsetWidth; // إجبار reflow
        indicator.classList.add('show');
    },

    hideIndicator() {
        const indicator = document.getElementById('autoFocusIndicator');
        if (indicator) indicator.classList.remove('show');
    },

    // إيقاف مؤقت لمدة دقيقتين بعد الإطفاء اليدوي (احترام لرغبة المستخدم)
    suppress(durationMs = 120000) {
        this.suppressedUntil = Date.now() + durationMs;
        this.deactivate(true);
        clearTimeout(this.idleTimer);
    },

    // ✨ زر التبديل من الـ topbar (تفعيل/إلغاء كامل)
    toggleEnabled() {
        const newState = !this.enabled;
        this.setEnabled(newState);

        // ملاحظات بصرية على الزر
        const btn = document.getElementById('autoFocusToggleBtn');
        if (btn) {
            btn.classList.toggle('active', newState);
            btn.setAttribute('aria-pressed', newState ? 'true' : 'false');
        }

        // مزامنة toggle الإعدادات
        const settingsToggle = document.getElementById('settingsAutoFocusToggle');
        if (settingsToggle) settingsToggle.checked = newState;

        // عرض إشعار قصير بالحالة الجديدة (toast)
        this.showToast(newState);
    },

    // toast صغير يخبر المستخدم بحالة الزر
    showToast(enabled) {
        let toast = document.getElementById('autoFocusToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'autoFocusToast';
            toast.className = 'auto-focus-toast';
            document.body.appendChild(toast);
        }
        toast.innerHTML = enabled
            ? `<span class="aft-icon">✅</span><div class="aft-text"><div class="aft-en">Auto Focus enabled</div><div class="aft-zh">自动专注已启用</div></div>`
            : `<span class="aft-icon">⏸️</span><div class="aft-text"><div class="aft-en">Auto Focus disabled</div><div class="aft-zh">自动专注已停用</div></div>`;
        toast.classList.remove('show');
        void toast.offsetWidth;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2200);
    },

    // تفعيل/إطفاء كامل (من الإعدادات أو الزر)
    setEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled) {
            this.deactivate(true);
            clearTimeout(this.idleTimer);
        } else {
            this.resetTimer();
        }
        try { localStorage.setItem('autoFocusEnabled', enabled ? '1' : '0'); } catch (e) { }

        // مزامنة الزر في الـ topbar
        const btn = document.getElementById('autoFocusToggleBtn');
        if (btn) {
            btn.classList.toggle('active', enabled);
            btn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
        }
    }
};

// تحميل الإعداد المحفوظ + بدء النظام
try {
    const saved = localStorage.getItem('autoFocusEnabled');
    if (saved !== null) AutoFocus.enabled = (saved === '1');
} catch (e) { }

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AutoFocus.init());
} else {
    AutoFocus.init();
}

// ================================================================
// *** 8. NAVIGATION - التنقل بين الأقسام - 章节导航
// ================================================================
const sections = document.querySelectorAll('.section');
const stages = ['hook', 'thinking', 'vocab', 'reading', 'explain', 'grammar', 'exercises', 'speaking', 'review'];
let currentStageIndex = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    const progressWrap = document.getElementById('progressBar');
    if (progressWrap) progressWrap.style.width = (scrollTop / total * 100) + '%';
});

function updateStepper(index) {
    if (index < 0 || index >= stages.length) return;
    const currentSection = document.getElementById(stages[index]);
    if (!currentSection) return;

    currentStageIndex = index;
    const name = currentSection.dataset.stageName || 'Introduction';
    const icon = currentSection.dataset.stageIcon || '🎬';

    // Update Desktop Stepper
    const stepItems = document.querySelectorAll('.stepper-desktop .step-item');
    const stepLines = document.querySelectorAll('.stepper-desktop .step-line');

    stepItems.forEach((item, i) => {
        item.classList.remove('completed', 'current', 'upcoming');
        if (i < index) item.classList.add('completed');
        else if (i === index) item.classList.add('current');
        else item.classList.add('upcoming');
    });

    stepLines.forEach((line, i) => {
        if (i < index) line.classList.add('completed');
        else line.classList.remove('completed');
    });

    // Update Mobile Stepper
    const mobileIcon = document.getElementById('mobileStageIcon');
    const mobileName = document.getElementById('mobileStageName');

    if (mobileIcon) mobileIcon.textContent = icon;
    if (mobileName) mobileName.textContent = name;

    const mobileDots = document.querySelectorAll('.mobile-stage-dots .mobile-dot');
    mobileDots.forEach((dot, i) => {
        dot.classList.toggle('current', i === index);
    });

    const prevBtn = document.getElementById('mobilePrevBtn');
    const nextBtn = document.getElementById('mobileNextBtn');
    if (prevBtn) prevBtn.disabled = (index === 0);
    if (nextBtn) nextBtn.disabled = (index === stages.length - 1);

    const tbIcon = document.getElementById('tbIcon');
    if (tbIcon) tbIcon.textContent = icon;
    const tbName = document.getElementById('tbName');
    if (tbName) tbName.textContent = name;
}

let stepperUpdateTimer = null;
function debouncedUpdateStepper(index) {
    clearTimeout(stepperUpdateTimer);
    stepperUpdateTimer = setTimeout(() => {
        updateStepper(index);
    }, 150);
}

function goToStage(index) {
    if (index < 0 || index >= stages.length) return;
    updateStepper(index); // Immediate update for responsive feel
    const target = document.getElementById(stages[index]);
    if (target) {
        const isMobile = window.innerWidth <= 900;
        const topOffset = isMobile ? 114 : 124;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - topOffset - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('[role="button"]')) {
        e.target.closest('[role="button"]').click();
    }
});

const currentSectionTitle = document.getElementById('currentSectionTitle');
if (currentSectionTitle) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const name = entry.target.dataset.stageName;
                const icon = entry.target.dataset.stageIcon;
                const index = stages.indexOf(entry.target.id);

                if (index !== -1) debouncedUpdateStepper(index);

                if (name && icon) {
                    const newText = icon + ' ' + name;
                    if (currentSectionTitle.textContent !== newText) {
                        currentSectionTitle.classList.add('fade');
                        setTimeout(() => {
                            currentSectionTitle.textContent = newText;
                            currentSectionTitle.classList.remove('fade');
                        }, 200);
                    }
                }
            }
        });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(s => observer.observe(s));
}

// ================================================================
// *** 9. DIALOGUE - الحوار - 对话交互
// ================================================================
document.querySelectorAll('.dial-line').forEach(l => {
    l.addEventListener('click', () => {
        document.querySelectorAll('.dial-line').forEach(x => x.classList.remove('highlighted'));
        l.classList.add('highlighted');
        const ar = l.querySelector('.en-text').textContent;
        speakEn(ar);
    });
});

// ================================================================
// *** 10. EXERCISE INTERACTIONS - تفاعل التمارين - 练习交互
// ================================================================

// ===== Vocab =====
function flipVocab(card) { card.classList.toggle('flipped') }
function revealAllVocab() { document.querySelectorAll('.vocab-card').forEach(c => c.classList.add('revealed')) }

// ===== Score tracker =====
let correctCount = 0, wrongCount = 0;

// ===== MCQ =====
function mcq(el, isCorrect) {
    if (el.dataset.answered) return;
    el.dataset.answered = '1';
    el.classList.add(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) { correctCount++; setTimeout(() => el.dataset.answered = '', 2000) }
    else { wrongCount++; setTimeout(() => { el.classList.remove('wrong'); delete el.dataset.answered }, 1500) }
}

// ===== TF =====
function tf(btn, isCorrect) {
    const parent = btn.parentElement;
    if (parent.dataset.answered) return;
    parent.dataset.answered = '1';
    btn.classList.add(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) correctCount++; else wrongCount++;
}

// ===== Fill =====
function checkFill(btn) {
    const ex = btn.closest('.exercise');
    const inputs = ex.querySelectorAll('.fill-input[data-answer]');
    const fb = ex.querySelector('.feedback');
    let all = true;
    inputs.forEach(i => {
        const expected = i.dataset.answer.trim();
        const got = i.value.trim();
        const strip = s => s.replace(/[\u064B-\u0652\u0670]/g, '').trim();
        if (strip(got) === strip(expected)) { i.classList.add('correct'); i.classList.remove('wrong') }
        else { i.classList.add('wrong'); i.classList.remove('correct'); all = false }
    });
    fb.className = 'feedback show ' + (all ? 'success' : 'error');
    fb.innerHTML = all ? '✅ Great!' : '❌ Try Again!';
    if (all) correctCount++; else wrongCount++;
}

// ===== Drag and drop classification =====
let draggedEl = null;
document.querySelectorAll('.drag-item').forEach(i => {
    i.addEventListener('dragstart', e => { draggedEl = i; i.classList.add('dragging') });
    i.addEventListener('dragend', () => { i.classList.remove('dragging'); draggedEl = null });
});
document.querySelectorAll('.drag-zone').forEach(z => {
    z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('hover-over') });
    z.addEventListener('dragleave', () => z.classList.remove('hover-over'));
    z.addEventListener('drop', e => {
        e.preventDefault(); z.classList.remove('hover-over');
        if (!draggedEl) return;
        if (draggedEl.dataset.cat === z.dataset.accept) {
            z.appendChild(draggedEl);
            draggedEl.classList.add('drag-dropped');
            correctCount++;
        } else {
            draggedEl.style.animation = 'shake .4s';
            setTimeout(() => draggedEl.style.animation = '', 400);
            wrongCount++;
        }
    });
});

// ===== Matching =====
let matchSel = null;
function matchPick(el, key) {
    if (el.classList.contains('matched')) return;
    if (!matchSel) { matchSel = { el, key }; el.classList.add('selected'); return }
    if (matchSel.el === el) { el.classList.remove('selected'); matchSel = null; return }
    if (matchSel.key === key) {
        matchSel.el.classList.remove('selected'); matchSel.el.classList.add('matched');
        el.classList.add('matched');
        correctCount++;
    } else {
        var firstEl = matchSel.el;
        var secondEl = el;
        firstEl.classList.remove('selected');
        firstEl.classList.add('wrong'); secondEl.classList.add('wrong');
        setTimeout(() => {
            firstEl.classList.remove('wrong'); secondEl.classList.remove('wrong');
        }, 200);
        setTimeout(() => {
            firstEl.classList.add('wrong'); secondEl.classList.add('wrong');
        }, 400);
        setTimeout(() => {
            firstEl.classList.remove('wrong'); secondEl.classList.remove('wrong');
        }, 600);
        wrongCount++;
    }
    matchSel = null;
}

// ===== Tap select =====
function tapSelect(el, isPlace) {
    if (el.dataset.picked) return;
    el.dataset.picked = '1';
    if (isPlace) { el.classList.add('tap-correct'); correctCount++ }
    else { el.classList.add('tap-wrong'); wrongCount++ }
}

// ===== Sentence order =====
const pool = document.getElementById('orderPool');
let dragEl = null;
pool.addEventListener('dragstart', e => { dragEl = e.target; e.target.classList.add('is-dragging') });
pool.addEventListener('dragend', e => { e.target.classList.remove('is-dragging') });
pool.addEventListener('dragover', e => {
    e.preventDefault();
    const after = getDragAfter(pool, e.clientX);
    if (!after) pool.appendChild(dragEl);
    else pool.insertBefore(dragEl, after);
});
function getDragAfter(c, x) {
    const items = [...c.querySelectorAll('.order-word:not(.is-dragging)')];
    return items.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) return { offset, element: child };
        return closest;
    }, { offset: -Infinity }).element;
}

// ===== Chip builder =====
function chipPick(el) {
    const out = document.getElementById('builderOut');
    if (out.textContent === '...') out.textContent = '';
    out.textContent = (out.textContent + ' ' + el.textContent).trim();
    el.classList.add('selected');
    setTimeout(() => el.classList.remove('selected'), 500);
}
function clearBuilder() { document.getElementById('builderOut').textContent = '...' }

// ===== Speech =====
function speakEn(text) {
    if (!('speechSynthesis' in window)) {
        alert('Your browser does not support speech synthesis');
        return;
    }
    const trySpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        const u = new SpeechSynthesisUtterance(text);
        const enVoice = voices.find(v => v.lang.startsWith('en'));
        if (enVoice) u.voice = enVoice;
        u.lang = 'en-US';
        u.rate = 0.9;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
    };
    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = trySpeak;
    } else {
        trySpeak();
    }
}

function playAudio(element, text) {
    const icon = element.querySelector('.speaker-icon');
    if (icon) icon.textContent = '🔈';
    setTimeout(() => { if (icon) icon.textContent = '🔊'; }, 1500);
    speakEn(text);
}

// ===== Speed challenge =====
const speedQs = (function () {
    const vocab = LESSON_DATA.vocab.slice(0, 8);
    return vocab.map((item, i) => {
        const wrong = LESSON_DATA.vocab
            .filter((_, j) => j !== i)
            .slice(0, 3)
            .map(v => v.en);
        const opts = [item.en, ...wrong].sort(() => Math.random() - 0.5);
        return {
            q: `"${item.zh}" = ?`,
            opts: opts,
            ans: opts.indexOf(item.en)
        };
    });
})();

let speedIdx = 0, speedScore = 0, speedTimer = null;
function startSpeed() {
    speedIdx = 0; speedScore = 0; let t = 30;
    document.getElementById('speedTimer').textContent = t + ' s';
    document.getElementById('speedScore').textContent = 'Score : 0';
    showSpeedQ();
    speedTimer = setInterval(() => {
        t--;
        document.getElementById('speedTimer').textContent = t + 's';
        if (t <= 0) { clearInterval(speedTimer); endSpeed() }
    }, 1000);
}
function showSpeedQ() {
    const q = speedQs[speedIdx % speedQs.length];
    document.getElementById('speedQuestion').textContent = q.q;
    const opts = document.getElementById('speedOpts');
    opts.innerHTML = '';
    q.opts.forEach((o, i) => {
        const b = document.createElement('button');
        b.className = 'mcq-opt';
        b.innerHTML = '<span class="en-text">' + o + '</span>';
        b.onclick = () => {
            if (i === q.ans) { speedScore++; correctCount++ } else { wrongCount++ }
            document.getElementById('speedScore').textContent = 'Score: ' + speedScore;
            speedIdx++; showSpeedQ();
        };
        opts.appendChild(b);
    });
}
function endSpeed() {
    document.getElementById('speedQuestion').innerHTML = '⏱️ Time is up! Final score: <strong>' + speedScore + '</strong>';
    document.getElementById('speedOpts').innerHTML = '';
}

// ================================================================
// *** 11. SCORE - النتيجة - 得分
// ================================================================
function calcScore() {
    const total = correctCount + wrongCount;
    const pct = total === 0 ? 0 : Math.round(correctCount / total * 100);
    document.getElementById('scoreCircle').textContent = pct + '%';
    let stars = '☆☆☆☆☆', title = 'Try Again!', msg = 'Keep practicing!';
    if (pct >= 90) { stars = '★★★★★'; title = 'Excellent!'; msg = 'Perfect!' }
    else if (pct >= 75) { stars = '★★★★☆'; title = 'Great!'; msg = 'Good job!' }
    else if (pct >= 60) { stars = '★★★☆☆'; title = 'Good!'; msg = 'Well done!' }
    else if (pct >= 40) { stars = '★★☆☆☆'; title = 'Not bad!'; msg = 'Try more!' }
    else if (total > 0) { stars = '★☆☆☆☆'; title = 'Try harder'; msg = 'Practice more' }
    document.getElementById('starsDisplay').textContent = stars;
    document.getElementById('scoreTitle').textContent = title;
    document.getElementById('scoreMsg').textContent = msg + ' (' + correctCount + ' correct · ' + wrongCount + ' wrong)';
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateStepper(0);
});


// ================================================================
// *** 12. SETTINGS - الإعدادات - 设置
// ================================================================
window.openSettingsModal = function () {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // مزامنة Toggle Switches
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const themeToggle = document.getElementById('settingsThemeToggle');
    if (themeToggle) themeToggle.checked = isDark;

    const focusToggle = document.getElementById('settingsFocusToggle');
    if (focusToggle) {
        // الـ toggle يعكس الوضع اليدوي فقط (focusMode)، ليس التلقائي
        focusToggle.checked = focusMode;
    }

    const transToggle = document.getElementById('settingsTransToggle');
    if (transToggle) {
        transToggle.checked = !document.body.classList.contains('hide-translation')
            && !document.body.classList.contains('hide-cn')
            && !document.body.classList.contains('no-translation');
    }
};



window.closeSettingsModal = function () {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

// ربط الأحداث بعد تحميل DOM
window.addEventListener('load', function () {
    // ربط زر الترس
    const openBtn = document.getElementById('openSettingsBtn');
    if (openBtn) {
        openBtn.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.openSettingsModal();
        };
    }

    // ربط Toggle Theme
    const themeToggle = document.getElementById('settingsThemeToggle');
    if (themeToggle) {
        themeToggle.onchange = function () {
            if (typeof toggleTheme === 'function') toggleTheme();
        };
    }

    // ربط Toggle Focus
    const focusToggle = document.getElementById('settingsFocusToggle');
    if (focusToggle) {
        focusToggle.onchange = function () {
            // عند الإطفاء اليدوي، أوقف التركيز التلقائي مؤقتاً (دقيقتين) كي لا يعود فوراً
            if (focusMode && !focusToggle.checked) {
                AutoFocus.suppress(120000);
            }
            if (typeof toggleFocus === 'function') toggleFocus();
        };
    }

    // ربط Toggle Auto Focus (التركيز التلقائي)
    const autoFocusToggle = document.getElementById('settingsAutoFocusToggle');
    if (autoFocusToggle) {
        // مزامنة الحالة المحفوظة مع الـ checkbox
        autoFocusToggle.checked = AutoFocus.enabled;
        autoFocusToggle.onchange = function () {
            AutoFocus.setEnabled(autoFocusToggle.checked);
        };
    }

    // ربط Toggle Translation
    const transToggle = document.getElementById('settingsTransToggle');
    if (transToggle) {
        transToggle.onchange = function () {
            if (typeof toggleTranslation === 'function') toggleTranslation();
        };
    }

    // ربط أزرار حجم الخط الإنجليزي مع معاينة حية
    let enPreviewSize = 22;
    const enPreview = document.querySelector('.en-preview');

    const enDecrease = document.getElementById('enFontDecrease');
    if (enDecrease) {
        enDecrease.onclick = function () {
            if (typeof decreaseEnglishFont === 'function') decreaseEnglishFont();
            enPreviewSize = Math.max(14, enPreviewSize - 2);
            if (enPreview) enPreview.style.fontSize = enPreviewSize + 'px';
        };
    }

    const enIncrease = document.getElementById('enFontIncrease');
    if (enIncrease) {
        enIncrease.onclick = function () {
            if (typeof increaseEnglishFont === 'function') increaseEnglishFont();
            enPreviewSize = Math.min(40, enPreviewSize + 2);
            if (enPreview) enPreview.style.fontSize = enPreviewSize + 'px';
        };
    }

    // ربط أزرار حجم الخط الصيني مع معاينة حية
    let cnPreviewSize = 18;
    const cnPreview = document.querySelector('.cn-preview');

    const cnDecrease = document.getElementById('cnFontDecrease');
    if (cnDecrease) {
        cnDecrease.onclick = function () {
            if (typeof decreaseChineseFont === 'function') decreaseChineseFont();
            cnPreviewSize = Math.max(12, cnPreviewSize - 2);
            if (cnPreview) cnPreview.style.fontSize = cnPreviewSize + 'px';
        };
    }

    const cnIncrease = document.getElementById('cnFontIncrease');
    if (cnIncrease) {
        cnIncrease.onclick = function () {
            if (typeof increaseChineseFont === 'function') increaseChineseFont();
            cnPreviewSize = Math.min(36, cnPreviewSize + 2);
            if (cnPreview) cnPreview.style.fontSize = cnPreviewSize + 'px';
        };
    }

    // إغلاق بـ ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('settingsModal');
            if (modal && modal.style.display === 'flex') {
                window.closeSettingsModal();
            }
        }
    });

    console.log('✅ Settings Modal ready');
});

// ================================================================
// *** 13. PRONUNCIATION - النطق - 发音系统
// ================================================================
window.preferredEnglishVoice = null;

function loadEnglishVoices() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    const englishVoices = voices.filter(v =>
        v.lang.startsWith('en')
    );

    if (englishVoices.length === 0) return;

    const malePreferences = ['male', 'David', 'Mark', 'James'];
    let bestVoice = null;

    for (const pref of malePreferences) {
        bestVoice = englishVoices.find(v =>
            v.name.toLowerCase().includes(pref.toLowerCase())
        );
        if (bestVoice) break;
    }

    if (!bestVoice) {
        bestVoice = englishVoices.find(v =>
            !v.name.toLowerCase().includes('female')
        );
    }

    if (!bestVoice) bestVoice = englishVoices[0];

    window.preferredEnglishVoice = bestVoice;
    console.log('✅ English voice selected:', bestVoice.name);
}

loadEnglishVoices();
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadEnglishVoices;
}
setTimeout(loadEnglishVoices, 1000);

window.speakVocabWord = function (buttonElement, text) {
    if (!text) return;

    // إيقاف أي نطق سابق
    window.speechSynthesis.cancel();

    // إضافة تأثير بصري
    if (buttonElement) {
        buttonElement.classList.add('speaking');
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    if (window.preferredEnglishVoice) {
        utterance.voice = window.preferredEnglishVoice;
    }

    utterance.onend = function () {
        if (buttonElement) buttonElement.classList.remove('speaking');
    };

    utterance.onerror = function () {
        if (buttonElement) buttonElement.classList.remove('speaking');
    };

    window.speechSynthesis.speak(utterance);
};

(function () {
    'use strict';

    // ---- Avoid double-init ----
    if (window.__vapInitialized) return;
    window.__vapInitialized = true;

    // ---- Config: per-word seconds used for the seek slider/timer.
    //      (Web Speech API does not expose precise duration, so we use a
    //      stable per-word slot that matches typical pronunciation pacing.) ----
    var SECONDS_PER_WORD = 2.2;

    // ---- State ----
    var playlist = [];          // [{ card, ar }]
    var currentIndex = 0;
    var isPlaying = false;
    var isPaused = false;
    var currentUtterance = null;
    var tickTimer = null;
    var elapsedInWord = 0;      // seconds accumulated in the current word
    var seeking = false;
    var lastTickAt = 0;

    // ---- DOM refs (resolved on init) ----
    var elPlayer, elPlayBtn, elStopBtn, elSlider, elCurTime, elTotalTime, elCurIdx, elTotalIdx;

    function $(sel) { return document.querySelector(sel); }

    function fmtTime(sec) {
        sec = Math.max(0, Math.floor(sec));
        var m = Math.floor(sec / 60);
        var s = sec % 60;
        return m + ':' + (s < 10 ? '0' + s : s);
    }

    function buildPlaylist() {
        playlist = [];
        var cards = document.querySelectorAll('#vocabGrid .vocab-card');
        cards.forEach(function (card) {
            var enEl = card.querySelector('.vocab-en');
            var en = enEl ? enEl.textContent.trim() : '';
            if (en) playlist.push({ card: card, en: en });
        });
    }

    function totalSeconds() {
        return playlist.length * SECONDS_PER_WORD;
    }

    function globalElapsed() {
        return currentIndex * SECONDS_PER_WORD + elapsedInWord;
    }

    function updateProgressUI() {
        if (!elSlider) return;
        var total = totalSeconds();
        var elapsed = Math.min(globalElapsed(), total);
        if (!seeking) {
            elSlider.value = String(Math.floor(elapsed));
        }
        var pct = total > 0 ? (elapsed / total) * 100 : 0;
        elSlider.style.setProperty('--vap-progress', pct + '%');
        elCurTime.textContent = fmtTime(elapsed);
        elTotalTime.textContent = fmtTime(total);
        elCurIdx.textContent = String(Math.min(currentIndex + (isPlaying || isPaused ? 1 : 0), playlist.length));
        elTotalIdx.textContent = String(playlist.length);
    }

    function clearHighlights() {
        document.querySelectorAll('.vocab-card.active-speaking').forEach(function (c) {
            c.classList.remove('active-speaking');
        });
    }

    function highlightWord(index) {
        clearHighlights();
        var item = playlist[index];
        if (!item) return;
        item.card.classList.add('active-speaking');
        // Smooth auto-scroll if out of view
        var rect = item.card.getBoundingClientRect();
        var inView = rect.top >= 80 && rect.bottom <= (window.innerHeight - 40);
        if (!inView) {
            try {
                item.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } catch (e) {
                item.card.scrollIntoView();
            }
        }
    }

    function startTick() {
        stopTick();
        lastTickAt = performance.now();
        tickTimer = setInterval(function () {
            if (!isPlaying || isPaused) return;
            var now = performance.now();
            var dt = (now - lastTickAt) / 1000;
            lastTickAt = now;
            elapsedInWord = Math.min(elapsedInWord + dt, SECONDS_PER_WORD);
            updateProgressUI();
        }, 100);
    }

    function stopTick() {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = null; }
    }

    function speakAt(index) {
        if (index < 0 || index >= playlist.length) { finishAll(); return; }
        currentIndex = index;
        elapsedInWord = 0;

        if (!('speechSynthesis' in window)) return;

        try { window.speechSynthesis.cancel(); } catch (e) { }

        var item = playlist[index];
        var u = new SpeechSynthesisUtterance(item.en);
        u.lang = 'en-US';
        u.rate = 0.9;
        u.pitch = 1.0;
        u.volume = 1.0;
        if (window.preferredEnglishVoice) {
            u.voice = window.preferredEnglishVoice;
        }
        u.onend = function () {
            if (currentUtterance !== u) return; // stale
            // advance
            elapsedInWord = SECONDS_PER_WORD;
            updateProgressUI();
            if (!isPlaying) return;
            if (currentIndex + 1 >= playlist.length) {
                finishAll();
            } else {
                speakAt(currentIndex + 1);
                highlightWord(currentIndex);
            }
        };
        u.onerror = function () {
            if (currentUtterance !== u) return;
            // try to continue
            if (isPlaying && currentIndex + 1 < playlist.length) {
                speakAt(currentIndex + 1);
                highlightWord(currentIndex);
            } else {
                finishAll();
            }
        };

        currentUtterance = u;
        highlightWord(index);
        window.speechSynthesis.speak(u);
        updateProgressUI();
    }

    function play() {
        buildPlaylist();
        if (playlist.length === 0) return;

        if (isPaused && currentUtterance) {
            // resume from pause
            isPaused = false;
            isPlaying = true;
            try { window.speechSynthesis.resume(); } catch (e) { }
            elPlayer.classList.add('is-playing');
            lastTickAt = performance.now();
            startTick();
            return;
        }

        isPlaying = true;
        isPaused = false;
        elPlayer.classList.add('is-playing');
        if (currentIndex >= playlist.length) currentIndex = 0;
        startTick();
        speakAt(currentIndex);
    }

    function pause() {
        if (!isPlaying) return;
        isPaused = true;
        isPlaying = false;
        try { window.speechSynthesis.pause(); } catch (e) { }
        elPlayer.classList.remove('is-playing');
    }

    function stop() {
        isPlaying = false;
        isPaused = false;
        currentUtterance = null;
        try { window.speechSynthesis.cancel(); } catch (e) { }
        stopTick();
        currentIndex = 0;
        elapsedInWord = 0;
        clearHighlights();
        elPlayer.classList.remove('is-playing');
        updateProgressUI();
    }

    function finishAll() {
        isPlaying = false;
        isPaused = false;
        currentUtterance = null;
        stopTick();
        elPlayer.classList.remove('is-playing');
        // leave last card briefly highlighted, then clear
        setTimeout(clearHighlights, 600);
        currentIndex = playlist.length; // counter shows total
        elapsedInWord = 0;
        updateProgressUI();
        // reset index for next play
        setTimeout(function () { currentIndex = 0; updateProgressUI(); }, 800);
    }

    function seekTo(globalSec) {
        buildPlaylist();
        if (playlist.length === 0) return;
        var idx = Math.floor(globalSec / SECONDS_PER_WORD);
        if (idx < 0) idx = 0;
        if (idx >= playlist.length) idx = playlist.length - 1;
        var wasPlaying = isPlaying || isPaused;
        try { window.speechSynthesis.cancel(); } catch (e) { }
        currentUtterance = null;
        currentIndex = idx;
        elapsedInWord = 0;
        if (wasPlaying) {
            isPlaying = true;
            isPaused = false;
            elPlayer.classList.add('is-playing');
            startTick();
            speakAt(currentIndex);
        } else {
            highlightWord(currentIndex);
            updateProgressUI();
        }
    }

    function init() {
        elPlayer = document.getElementById('vocabAudioPlayer');
        if (!elPlayer) return;
        elPlayBtn = document.getElementById('vapPlayBtn');
        elStopBtn = document.getElementById('vapStopBtn');
        elSlider = document.getElementById('vapSlider');
        elCurTime = document.getElementById('vapCurTime');
        elTotalTime = document.getElementById('vapTotalTime');
        elCurIdx = document.getElementById('vapCurIdx');
        elTotalIdx = document.getElementById('vapTotal');

        // ---- Play-button icon: render exactly ONE SVG based on state ----
        var ICON_PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
        var ICON_PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
        function renderPlayIcon() {
            var playing = elPlayer.classList.contains('is-playing');
            var nextLabel = playing ? 'Pause' : 'Play';
            // innerHTML REPLACE (never append) → guarantees a single icon
            elPlayBtn.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
            elPlayBtn.setAttribute('aria-label', nextLabel);
        }
        renderPlayIcon();
        // Keep the icon in sync with every is-playing toggle without
        // touching play/pause/stop/seek logic.
        try {
            new MutationObserver(renderPlayIcon).observe(elPlayer, {
                attributes: true,
                attributeFilter: ['class']
            });
        } catch (e) { /* no-op */ }

        buildPlaylist();
        elSlider.max = String(Math.max(1, Math.floor(totalSeconds())));
        updateProgressUI();

        elPlayBtn.addEventListener('click', function () {
            if (isPlaying) { pause(); } else { play(); }
        });
        elStopBtn.addEventListener('click', stop);

        elSlider.addEventListener('input', function () {
            seeking = true;
            var v = parseFloat(elSlider.value) || 0;
            var pct = totalSeconds() > 0 ? (v / totalSeconds()) * 100 : 0;
            elSlider.style.setProperty('--vap-progress', pct + '%');
            elCurTime.textContent = fmtTime(v);
        });
        elSlider.addEventListener('change', function () {
            var v = parseFloat(elSlider.value) || 0;
            seeking = false;
            seekTo(v);
        });

        // Cleanup on page hide
        window.addEventListener('beforeunload', function () {
            try { window.speechSynthesis.cancel(); } catch (e) { }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

// ================================================================
// *** 14. THEME & TRANSLATION - السمة والترجمة - 主题与翻译
// ================================================================
const ThemeSystem = {
    init() {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        }
        this.updateIcon();
    },

    toggle() {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";

        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
        this.updateIcon();
    },

    updateIcon() {
        const btn = document.getElementById("themeToggleBtn");
        if (!btn) return;

        const isDark = document.documentElement.getAttribute("data-theme") === "dark";

        // If dark → show sun
        btn.textContent = isDark ? "☀️" : "🌙";
    }
};

function changeFont(type, delta) {
    const root = document.documentElement;

    if (type === "en") {
        let size = parseInt(getComputedStyle(root).getPropertyValue('--en-font'));
        root.style.setProperty('--en-font', (size + delta) + 'px');
    }

    if (type === "zh") {
        let size = parseInt(getComputedStyle(root).getPropertyValue('--zh-font'));
        root.style.setProperty('--zh-font', (size + delta) + 'px');
    }
}

function toggleZH() {
    document.querySelectorAll(".zh-text").forEach(el => {
        el.classList.toggle("show");
    });
}

const TranslationSystem = {
    isActive: false,
    toggle() {
        this.isActive = !this.isActive;
        document.querySelectorAll('.zh-text').forEach(el => {
            el.classList.toggle('show', this.isActive);
        });
        this.updateUI();
    },
    updateUI() {
        const btn = document.getElementById("translateToggleBtn");
        if (!btn) return;
        btn.classList.toggle("active", this.isActive);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    ThemeSystem.init();
    TranslationSystem.updateUI();
});

// ================================================================
// *** 15. DIALOGUE CONTROLS - تحكم الحوار - 对话控制
// ================================================================
function revealNextLine() {
    const lines = document.querySelectorAll('.dial-line');
    if (currentIndex < lines.length) {
        lines[currentIndex].classList.add('revealed');
        currentIndex++;
    }
}

function playRevealedDialogue() {
    const btn = document.getElementById('playDialogueBtn');
    if (!btn) return;

    // pause
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused && dialoguePlaying) {
        window.speechSynthesis.pause();
        btn.innerHTML = '▶️ Listen';
        return;
    }
    // resume
    if (window.speechSynthesis.paused && dialoguePlaying) {
        window.speechSynthesis.resume();
        btn.innerHTML = '🔊 Listen';
        return;
    }

    // start fresh
    dialoguePlaying = false;
    window.speechSynthesis.cancel();
    clearDialogueHighlights();
    dialoguePlaying = true;
    speakDialogueLine(0);
    btn.innerHTML = '🔊 Listen';
}

var dialoguePlayIndex = 0;
var dialogueUtterance = null;
var dialoguePlaying = false;

function clearDialogueHighlights() {
    document.querySelectorAll('.dial-line.active-speaking').forEach(function (el) {
        el.classList.remove('active-speaking');
    });
}

function highlightDialogueLine(index) {
    clearDialogueHighlights();
    var lines = document.querySelectorAll('.dial-line');
    if (lines[index]) {
        lines[index].classList.add('active-speaking');
        var rect = lines[index].getBoundingClientRect();
        if (rect.top < 80 || rect.bottom > window.innerHeight - 40) {
            lines[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

function speakDialogueLine(index) {
    if (!dialoguePlaying) return;

    var lines = document.querySelectorAll('.dial-line');
    if (index < 0 || index >= lines.length) {
        dialoguePlaying = false;
        var b = document.getElementById('playDialogueBtn');
        if (b) b.innerHTML = '🔊 Listen';
        clearDialogueHighlights();
        return;
    }

    dialoguePlayIndex = index;
    var arEl = lines[index].querySelector('.en-text');
    var text = arEl ? arEl.textContent.trim() : '';
    if (!text) {
        speakDialogueLine(index + 1);
        return;
    }

    if (!('speechSynthesis' in window)) return;
    try { window.speechSynthesis.cancel(); } catch (e) { }

    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.9;
    if (window.preferredEnglishVoice) {
        u.voice = window.preferredEnglishVoice;
    } else {
        var voices = window.speechSynthesis.getVoices();
        var enVoice = voices.find(function (v) { return v.lang.startsWith('en'); });
        if (enVoice) u.voice = enVoice;
    }

    u.onend = function () {
        if (dialogueUtterance !== u || !dialoguePlaying) return;
        speakDialogueLine(index + 1);
    };
    u.onerror = function () {
        if (dialogueUtterance !== u || !dialoguePlaying) return;
        speakDialogueLine(index + 1);
    };

    dialogueUtterance = u;
    highlightDialogueLine(index);
    window.speechSynthesis.speak(u);
}

function resetDialogue() {
    const lines = document.querySelectorAll('.dial-line');
    lines.forEach(line => line.classList.remove('revealed'));
    currentIndex = 0;
    if (lines.length > 0) {
        lines[0].classList.add('revealed');
        currentIndex = 1;
    }
}

function revealAllDialogue() {
    const lines = document.querySelectorAll('.dial-line');
    lines.forEach(line => line.classList.add('revealed'));
    currentIndex = lines.length;
}
// ================================================================
// *** 16. RENDER FUNCTIONS (cont.) - بقية دوال البناء - 渲染函数续
// ================================================================
function renderVocab(vocab) {

    const container = document.getElementById('vocabGrid');
    if (!container) return;

    container.innerHTML = "";

    vocab.forEach(item => {

        const card = document.createElement('div');
        card.className = 'vocab-card';

        card.innerHTML = `
    <div class="vocab-emoji">${item.emoji}</div>
    <div class="vocab-en">${item.en}</div>
    <div class="vocab-zh-hidden">${item.zh}</div>
    <div class="vocab-tag">${item.type}</div>
    <button class="vocab-speak-btn" 
            onclick="event.stopPropagation(); speakVocabWord(this, '${item.en}')" 
            aria-label="Pronounce word">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
    </button>
`;

        card.onclick = function () {
            card.classList.toggle('flipped');
        };

        container.appendChild(card);
    });
}
function renderThinking(thinking) {

    const container = document.getElementById('thinkingGrid');
    if (!container) return;

    container.innerHTML = "";

    thinking.forEach((q, index) => {

        const div = document.createElement('div');
        div.className = 'q-card';

        div.innerHTML = `
            <span class="q-number">${index + 1}</span>
            <span class="q-emoji">${q.emoji}</span>
            <div class="en-text">${q.en}</div>
            <div class="zh-text">${q.zh}</div>
        `;

        container.appendChild(div);
    });
}
function renderExplain(explain) {

    const container = document.getElementById('explainContainer');
    if (!container) return;

    container.innerHTML = "";

    explain.forEach(item => {

        const div = document.createElement('div');
        div.className = 'explain-block';

        div.innerHTML = `
            <span class="explain-label">${item.label}</span>
            <div class="en-text">${item.en}</div>
            <div class="zh-text">${item.zh}</div>

            ${item.note ? `<div class="explain-note">${item.note}</div>` : ''}
        `;

        container.appendChild(div);
    });
}
function renderGrammar(grammar) {

    const container = document.getElementById('grammarContainer');
    if (!container) return;

    container.innerHTML = "";

    grammar.forEach(item => {

        // 🟡 1. إذا فيه جدول (مثل الأرقام)
        if (item.items && Array.isArray(item.items)) {

            const title = document.createElement('h3');
            title.className = 'grammar-title';
            title.innerText = item.title || "";

            container.appendChild(title);

            const grid = document.createElement('div');
            grid.className = 'conjugation-grid';

            item.items.forEach(row => {

                const card = document.createElement('div');
                card.className = 'conj-card';

                card.innerHTML = `
                    <div class="conj-pronoun">${row.pronoun || ""}</div>
                    <div class="conj-verb">${row.verb || ""}</div>
                    <div class="conj-zh">${row.zh || ""}</div>
                `;

                grid.appendChild(card);
            });

            container.appendChild(grid);
        }

        // 🟢 2. إذا فيه ar → يعتبر شرح
        else if (item.en) {

            const div = document.createElement('div');
            div.className = 'formula-box';

            div.innerHTML = `
                <div class="grammar-formula-title">
                    ${item.title || ""}
                </div>
                <div class="formula">
                    ${item.en}
                </div>
                <div class="zh-text show grammar-formula-zh">
                    ${item.zh || ""}
                </div>
            `;

            container.appendChild(div);
        }

        // 🔴 3. fallback (لو البيانات غريبة)
        else {

            console.warn("⚠️ Unknown grammar item:", item);

            const div = document.createElement('div');
            div.innerHTML = `<pre>${JSON.stringify(item, null, 2)}</pre>`;
            container.appendChild(div);
        }

    });
}
// ================================================================
// *** 17. EXERCISE BUILDERS - بناء التمارين - 练习生成
// ================================================================
function renderExercises() {

    const container = document.getElementById('exercisesContainer');
    if (!container) return;

    if (LESSON_DATA.exercisesHTML) {
        container.innerHTML = LESSON_DATA.exercisesHTML;
        return;
    }

    container.innerHTML = getExercisesHTML();
}

function getExercisesHTML() {
    let n = 0;
    let h = '';

    // MCQ (يتكرر تلقائياً)
    h += LESSON_DATA.exercises.mcq.map(item => buildMCQExercise(++n, item)).join('\n');

    // True/False
    h += buildTrueFalseExercise(++n);

    // Fill Blanks
    h += buildFillBlanksExercise(++n);

    // Drag Words
    h += buildDragExercise(++n);

    // Order Words
    h += buildOrderExercise(++n);

    // Match
    h += buildMatchExercise(++n);

    // Select Words
    h += buildSelectWordsExercise(++n);

    // Correct Error
    h += buildCorrectErrorExercise(++n);

    // Rewrite
    h += buildRewriteExercise(++n);

    // Guided Writing
    h += buildGuidedWritingExercise(++n);

    // Listening
    h += buildListeningExercise(++n);

    // Speed Challenge
    h += buildSpeedChallengeExercise(++n);

    // Multi-step
    h += buildMultiStepExercise(++n);

    // Paragraph
    h += buildParagraphExercise(++n);

    // Context Analysis
    h += buildContextAnalysisExercise(++n);

    // Scenario
    h += buildScenarioExercise(++n);

    // Dialogue
    h += buildDialogueExercise(++n);

    // Visual Choice
    h += buildVisualChoiceExercise(++n);

    // Conjugation
    h += buildConjugationExercise(++n);

    // Sentence Transformation
    h += buildSentenceTransformExercise(++n);

    // Challenge
    h += buildChallengeExercise(++n);

    return h;
}

function buildMatchExercise(num) {
    const vocab = LESSON_DATA.vocab;
    const items = vocab.slice(0, 5);
    const letters = ['a', 'b', 'c', 'd', 'e'];

    const leftCol = items.map((v, i) =>
        `<div class="match-item" onclick="matchPick(this,'${letters[i]}')"><span class="en-text">${v.en}</span></div>`
    ).join('\n');

    // الجانب الأيمن بترتيب مختلف
    const shuffled = [items[2], items[0], items[4], items[3], items[1]];
    const shuffledLetters = ['c', 'a', 'e', 'd', 'b'];
    const rightCol = shuffled.map((v, i) =>
        `<div class="match-item" onclick="matchPick(this,'${shuffledLetters[i]}')"><span class="zh-text show">${v.zh}</span></div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Match English to Chinese</div>
    <div class="ex-instruction">配对英语和中文</div>
  </div></div>
  <div class="match-grid">
    <div class="match-col" id="matchLeft">${leftCol}</div>
    <div class="match-col" id="matchRight">${rightCol}</div>
  </div>
</div>`;
}

function buildSelectWordsExercise(num) {
    const vocab = LESSON_DATA.vocab;
    const correct = vocab.slice(0, 4);
    const wrong = vocab.slice(4, 8).map(v => ({ en: v.en, isCorrect: false }));

    const all = [
        ...correct.map(v => ({ en: v.en, isCorrect: true })),
        ...wrong.map(v => ({ en: v.en, isCorrect: false }))
    ];

    const chips = all.map(item =>
        `        <span class="chip" onclick="tapSelect(this,${item.isCorrect})">${item.en}</span>`
    ).join('\n    ');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Select the Correct Words — ${LESSON_DATA.exercises.selectWords?.title_en || ""}</div>
    <div class="ex-instruction">${LESSON_DATA.exercises.selectWords?.title_zh || "点击选择正确的词语"}</div>
  </div></div>
  <div class="chip-grid">
    ${chips}
  </div>
</div>`;
}

function buildTrueFalseExercise(num) {
    const items = LESSON_DATA.exercises.trueFalse || [];

    const rows = items.map(item => `
    <div class="tf-item">
      <div class="tf-statement">
        <span class="en-text">${item.en}</span>
        <div class="zh-text">${item.zh}</div>
      </div>
      <div class="tf-btns">
        <button class="tf-btn" onclick="tf(this,${item.correct})">✓ True</button>
        <button class="tf-btn" onclick="tf(this,${!item.correct})">✗ False</button>
      </div>
    </div>`).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">True or False</div>
    <div class="ex-instruction">判断正误</div>
  </div></div>
  <div class="tf-grid">${rows}</div>
</div>`;
}

function buildListeningExercise(num) {
    const listening = LESSON_DATA.exercises.listeningExercise;
    const line = { en: listening.text };
    const opts = listening.options;

    const letters = ['A', 'B', 'C'];
    const options = opts.map((o, i) =>
        `<div class="mcq-opt" onclick="mcq(this,${o.correct})"><span class="mcq-letter">${letters[i]}</span><span class="en-text">${o.en}</span></div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Listen & Choose</div>
    <div class="ex-instruction">听力练习 🔊</div>
  </div></div>
  <div class="exercise-speaker" onclick="playAudio(this,'${line.en}')">
    <div class="speaker-icon exercise-speaker-icon">🔊</div>
    <div class="exercise-speaker-hint">Press to listen</div>
  </div>
  <div class="mcq-options">${options}</div>
</div>`;
}

function buildConjugationExercise(num) {
    const data = LESSON_DATA.exercises.patternFill;

    const rows = data.lines.map(line =>
        `<div class="fill-sentence">${line.pronoun} <input class="fill-input" data-answer="${line.verb}"> ${line.suffix}</div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Pattern Practice</div>
    <div class="ex-instruction">${data.instruction || '句型操练 — 动词变位'}</div>
  </div></div>
  ${rows}
  <button class="check-btn" onclick="checkFill(this)">✓ Check</button>
  <div class="feedback"></div>
</div>`;
}

function buildDialogueExercise(num) {
    const lines = LESSON_DATA.exercises.dialogueFill.lines;

    const rows = lines.map(line => {
        const cls = line.text.includes('___') ? 'fill-input fill-input-wide' : '';
        const html = line.text.replace('___',
            `<input class="${cls}" data-answer="${line.answer}">`);
        return `<div class="fill-sentence"><span class="en-text" style="font-weight:600">${line.speaker}:</span> ${html}</div>`;
    }).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Complete the Dialogue</div>
    <div class="ex-instruction">完成对话</div>
  </div></div>
  ${rows}
  <button class="check-btn" onclick="checkFill(this)">✓ Check</button>
  <div class="feedback"></div>
</div>`;
}

function buildMCQExercise(num, data) {
    const letters = ['A', 'B', 'C', 'D'];
    const options = data.options.map((opt, i) =>
        `<div class="mcq-opt" onclick="mcq(this,${i === data.correct})"><span class="mcq-letter">${letters[i]}</span><span class="en-text">${opt}</span></div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Choose the Correct Answer</div>
    <div class="ex-instruction">选择正确答案</div>
  </div></div>
  ${data.question ? `<div class="fill-sentence">${data.question}</div>` : ''}
  <div class="mcq-options">${options}</div>
</div>`;
}

function buildFillBlanksExercise(num) {
    const items = LESSON_DATA.exercises.fillBlanks;

    const rows = items.map(item => {
        const parts = item.sentence.split('___');
        return `<div class="fill-sentence">${parts[0]}<input class="fill-input" data-answer="${item.answer}">${parts[1] || ''}</div>`;
    }).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Fill in the Blank</div>
    <div class="ex-instruction">填空</div>
  </div></div>
  ${rows}
  <button class="check-btn" onclick="checkFill(this)">✓ Check</button>
  <div class="feedback"></div>
</div>`;
}

function buildDragExercise(num) {
    const items = LESSON_DATA.exercises.dragWords;

    const dragItems = items.map(item =>
        `<div class="drag-item" draggable="true" data-cat="${item.cat}">${item.en}</div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Classify the Words</div>
    <div class="ex-instruction">分类 — 拖动单词到正确的类别</div>
  </div></div>
  <div class="drag-source" id="dragSource">
    ${dragItems}
  </div>
    <div class="drag-container">
    ${(LESSON_DATA.exercises.dragZones || []).map(zone =>
        `<div class="drag-zone" data-accept="${zone.accept}"><div class="drag-zone-title">${zone.emoji} ${zone.en} · ${zone.zh}</div></div>`
    ).join('\n')}
  </div>
</div>`;
}

function buildOrderExercise(num) {
    const words = LESSON_DATA.exercises.orderWords;
    const target = LESSON_DATA.exercises.orderTarget;

    const wordItems = words.map(w =>
        `<div class="order-word" draggable="true">${w}</div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Arrange the Sentence</div>
    <div class="ex-instruction">排序句子</div>
  </div></div>
  <div class="order-target">Target: <em class="en-text order-target-em">${target}</em></div>
  <div class="order-container" id="orderPool">
    ${wordItems}
  </div>
  <div class="order-hint">💡 Drag to reorder</div>
</div>`;
}

function buildCorrectErrorExercise(num) {
    const data = LESSON_DATA.exercises.correctError;
    const letters = ['A', 'B', 'C', 'D'];

    const options = data.options.map((opt, i) =>
        `<div class="mcq-opt" onclick="mcq(this,${opt.correct})"><span class="mcq-letter">${letters[i]}</span><span class="en-text">${opt.en}</span></div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Correct the Error</div>
    <div class="ex-instruction">改错 — 找出错误的词</div>
  </div></div>
  <div class="fill-sentence">${data.sentence}</div>
  <div class="mcq-options">${options}</div>
</div>`;
}

function buildRewriteExercise(num) {
    const data = LESSON_DATA.exercises.rewrite;
    const parts = data.sentence.split('___');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Rewrite the sentence</div>
    <div class="ex-instruction">${data.instruction || "Rewrite the sentence"}</div>
  </div></div>
  <div class="fill-sentence">${parts[0]}<input class="fill-input" data-answer="${data.answer}">${parts[1] || ''}</div>
  <button class="check-btn" onclick="checkFill(this)">✓ Check</button>
  <div class="feedback"></div>
</div>`;
}

function buildParagraphExercise(num) {
    const data = LESSON_DATA.exercises.paragraph;
    const parts = data.sentence.split('___');

    let sentence = '';
    parts.forEach((part, i) => {
        sentence += part;
        if (i < data.answers.length) {
            sentence += `<input class="fill-input" data-answer="${data.answers[i]}">`;
        }
    });

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Complete the paragraph</div>
    <div class="ex-instruction">段落填空</div>
  </div></div>
  <div class="fill-sentence">${sentence}</div>
  <button class="check-btn" onclick="checkFill(this)">✓ Check</button>
  <div class="feedback"></div>
</div>`;
}

function buildContextAnalysisExercise(num) {
    const data = LESSON_DATA.exercises.contextAnalysis;
    const letters = ['A', 'B', 'C'];

    const options = data.options.map((opt, i) =>
        `<div class="mcq-opt" onclick="mcq(this,${opt.correct})"><span class="mcq-letter">${letters[i]}</span><span class="en-text">${opt.en}</span></div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Context Analysis</div>
    <div class="ex-instruction">情境分析</div>
  </div></div>
  <div class="exercise-context-box">
    <div class="en-text">${data.dialogue.replace('\n', '<br>')}</div>
  </div>
  <div class="context-question">${data.question}</div>
  <div class="mcq-options">${options}</div>
</div>`;
}

function buildScenarioExercise(num) {
    const data = LESSON_DATA.exercises.scenario;
    const letters = ['A', 'B', 'C'];

    const options = data.options.map((opt, i) =>
        `<div class="mcq-opt" onclick="mcq(this,${opt.correct})"><span class="mcq-letter">${letters[i]}</span><span class="en-text">${opt.en}</span></div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Scenario</div>
    <div class="ex-instruction">情景对话</div>
  </div></div>
    <div class="exercise-scenario-box">
    <div class="en-text" style="font-weight:700;margin-bottom:8px">📋 Scenario</div>
    <div class="en-text">${data.setup_en || data.question}</div>
    <div class="zh-text show" style="margin-top:4px">${data.setup_zh || ""}</div>
    <div style="border-top:1px dashed rgba(102,126,234,.3);margin:12px 0"></div>
    <div class="en-text">❓ ${data.question}</div>
  </div>
  <div class="mcq-options">${options}</div>
</div>`;
}

function buildVisualChoiceExercise(num) {
    const data = LESSON_DATA.exercises.visualChoice;
    const letters = ['A', 'B', 'C'];

    const options = data.options.map((opt, i) =>
        `<div class="mcq-opt" onclick="mcq(this,${opt.correct})"><span class="mcq-letter">${letters[i]}</span><span class="en-text">${opt.en}</span></div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">Choose from Image</div>
    <div class="ex-instruction">视觉推理</div>
  </div></div>
  <div class="visual-emoji">${data.emoji}</div>
  <div class="mcq-options">${options}</div>
</div>`;
}

function buildChallengeExercise(num) {
    const data = LESSON_DATA.exercises.challenge;
    const parts = data.sentence.split('___');

    let sentence = '';
    parts.forEach((part, i) => {
        sentence += part;
        if (i < data.answers.length) {
            sentence += `<input class="fill-input" data-answer="${data.answers[i]}">`;
        }
    });

    return `
<div class="exercise exercise-challenge">
  <div class="ex-header">
    <div class="ex-num ex-num-challenge">${toArabicNumber(num)}</div>
    <div><div class="ex-title">🏆 Big Challenge</div><div class="ex-instruction">终极挑战</div></div>
  </div>
  <div class="zh-text show exercise-context-box">${data.zh}</div>
  <div class="fill-sentence">${sentence}</div>
  <button class="check-btn" onclick="checkFill(this)">✓ Check</button>
  <div class="feedback"></div>
</div>`;
}

function buildMultiStepExercise(num) {
    const data = LESSON_DATA.exercises.multiStep;
    const letters = ['A', 'B', 'C'];
    let questions = '';

    data.questions.forEach(q => {
        questions += `<div class="exercise-question-en">${q.en} <span class="ex-q-zh">· ${q.zh}</span></div>`;
        questions += `<div class="mcq-options">`;
        q.options.forEach((opt, i) => {
            questions += `<div class="mcq-opt" onclick="mcq(this,${opt.correct})"><span class="mcq-letter">${letters[i]}</span><span class="en-text">${opt.en}</span></div>`;
        });
        questions += `</div>`;
    });

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">${data.title}</div><div class="ex-instruction">${data.instruction}</div>
  </div></div>
  <div class="exercise-story-box">
    <div class="en-text">${data.story.en}</div>
    <div class="zh-text">${data.story.zh}</div>
  </div>
  ${questions}
</div>`;
}

function buildGuidedWritingExercise(num) {
    const data = LESSON_DATA.exercises.guidedWriting;

    const rows = data.sentences.map(s =>
        `<div class="fill-sentence">${s.prefix} <input class="fill-input fill-input-wide" placeholder="${s.placeholder}"></div>`
    ).join('\n');

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">${data.title}</div><div class="ex-instruction">${data.instruction}</div>
  </div></div>
  ${rows}
</div>`;
}

function buildSentenceTransformExercise(num) {
    const data = LESSON_DATA.exercises.sentenceTransform;

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">${data.title}</div><div class="ex-instruction">${data.instruction}</div>
  </div></div>
  <div class="fill-sentence">${data.sentence}</div>
  <button class="check-btn" onclick="checkFill(this)">✓ Check</button>
  <div class="feedback"></div>
</div>`;
}

function buildSpeedChallengeExercise(num) {
    const data = LESSON_DATA.exercises.speedChallenge;

    return `
<div class="exercise">
  <div class="ex-header"><div class="ex-num">${toArabicNumber(num)}</div><div>
    <div class="ex-title">${data.title}</div><div class="ex-instruction">${data.instruction}</div>
  </div></div>
  <div class="speed-controls">
    <button class="btn btn-primary" onclick="startSpeed()">▶ Start</button>
    <div id="speedTimer" class="speed-timer">30 s</div>
    <div id="speedScore" class="speed-score">Score: 0</div>
  </div>
  <div id="speedQuestion" class="speed-question">Press to start</div>
  <div id="speedOpts" class="speed-options"></div>
</div>`;
}

function countExercises() {
    const container = document.getElementById('exercisesContainer');
    if (!container) return 0;
    const matches = container.querySelectorAll('.exercise');
    return matches.length;
}

// ================================================================
// *** 18. UTILITIES - أدوات مساعدة - 实用工具
// ================================================================
function toArabicNumber(num) {
    return num.toString();
}

// ================================================================
// *** 19. SPEAKING - المحادثة - 口语
// ================================================================
function showTip(en, zh) {
    const el = document.getElementById('speakTipModal');
    if (el) {
        el.querySelector('.tt-modal-en').textContent = en;
        el.querySelector('.tt-modal-zh').textContent = zh;
        el.style.display = 'flex';
    }
}
function closeSpeakTip() {
    const el = document.getElementById('speakTipModal');
    if (el) el.style.display = 'none';
}

function renderSpeaking() {
    const container = document.getElementById('speakingContainer');
    if (!container) return;

    const vocab = LESSON_DATA.vocab;
    const dialogue = LESSON_DATA.dialogue;

    // Level 1: جملة القراءة من أول جملة في الحوار
    const level1Text = dialogue[1].en;
    const level1Zh = dialogue[1].zh;

    // Level 2: كلمات البناء من المفردات (أول 9)
    const chipWords = vocab.slice(0, 9).map(v =>
        `<span class="chip" onclick="chipPick(this)">${v.en}</span>`
    ).join('\n    ');

    container.innerHTML = `
<div class="speak-level">
  <div class="speak-level-title">🟢 Level 1 <span class="speak-badge easy">Guided</span></div>
  <div class="speak-level-instruction">Read aloud:</div>
  <div class="en-text speak-level-en">${level1Text}</div>
  <div class="zh-text">${level1Zh}</div>
  <button class="btn btn-primary speak-btn" onclick="speakEn('${level1Text}')">🔊 Listen</button>
</div>

<div class="speak-level">
  <div class="speak-level-title">🟡 Level 2 <span class="speak-badge mid">Semi-guided</span></div>
  <div class="speak-level-instruction">Build the sentence:</div>
  <div id="chipArea" class="speak-chip-area">${chipWords}</div>
  <div class="builder-output" id="builderOut">...</div>
  <button class="btn btn-ghost speak-btn" onclick="clearBuilder()">🔄 Clear</button>
</div>

<div class="speak-level">
  <div class="speak-level-title">🔴 Level 3 <span class="speak-badge hard">Free</span></div>
  <div class="speak-level-instruction">Speak freely — Choose confidence level:</div>
  <div class="speak-level-btns">
    <button class="btn btn-ghost" onclick="showTip('Start with the main idea, then explain', '从主要想法开始，然后解释它')">😊 Confident</button>
<button class="btn btn-ghost" onclick="showTip('Use a simple sentence about the topic', '用关于主题的简单句子')">🤔 Average</button>
<button class="btn btn-ghost" onclick="showTip('Try separate words about the topic', '尝试与主题相关的单词')">😅 Shy</button>
  </div>
  <div class="speak-level-hint">💡 Tip: Idea → Explain → Conclusion</div>
</div>`;
}
// ================================================================
// *** 20. TEACHER TOOLS - أدوات المعلم - 教师工具
// ================================================================
const TeacherTools = {
    // الحالة
    panelOpen: false,
    presenterMode: false,
    answersHidden: false,
    timerInterval: null,
    timerSeconds: 0,
    flashcards: [],
    fcIndex: 0,
    fcFlipped: false,
    boardCtx: null,
    boardColor: '#1a1a2e',
    boardSize: 4,
    boardDrawing: false,

    init() {
        // اضبط رقم عشوائي عند البدء
        const numStudentsKey = 'teacherStudentCount';
        // يبقى الزر حاضراً حتى لو لم يضبط المعلم العدد
    },

    // ============ Panel Toggle ============
    togglePanel() {
        this.panelOpen = !this.panelOpen;
        document.getElementById('teacherToolbar').classList.toggle('open', this.panelOpen);
        // أبرز زر الـ topbar
        const topBtn = document.getElementById('teacherToolsBtn');
        if (topBtn) topBtn.classList.toggle('panel-open', this.panelOpen);
    },

    // ============ Presenter Mode (وضع العرض) ============
    togglePresenter() {
        this.presenterMode = !this.presenterMode;
        document.body.classList.toggle('presenter-mode', this.presenterMode);
        // أبرز زر العرض في اللوحة
        document.querySelectorAll('.tt-quick-btn').forEach(b => {
            if (b.getAttribute('onclick') && b.getAttribute('onclick').includes('togglePresenter')) {
                b.classList.toggle('active', this.presenterMode);
            }
        });
        this.toast(this.presenterMode ? '📺 Presenter mode ON' : '📺 Presenter mode OFF',
            this.presenterMode ? 'Presenter mode ON' : 'Presenter mode OFF');
    },

    // ============ Board Fullscreen (تكبير السبورة) ============
    toggleBoardFullscreen() {
        const card = document.getElementById('boardCardEl');
        const btn = document.getElementById('boardFsBtn');
        if (!card) return;
        const isFs = card.classList.toggle('fullscreen');
        if (btn) btn.classList.toggle('active', isFs);
        // إعادة حساب أبعاد الكانفاس بعد تغيير الحجم
        setTimeout(() => {
            const canvas = document.getElementById('boardCanvas');
            if (canvas && this.boardCtx) {
                // احفظ المحتوى الحالي
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = canvas.width;
                tempCanvas.height = canvas.height;
                tempCanvas.getContext('2d').drawImage(canvas, 0, 0);
                // غيّر الأبعاد
                const rect = canvas.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
                this.boardCtx = canvas.getContext('2d');
                this.boardCtx.lineCap = 'round';
                this.boardCtx.lineJoin = 'round';
                // أعد رسم المحتوى مقاساً
                this.boardCtx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
            }
        }, 320);
    },

    // ============ Hide/Show Answers (إخفاء الإجابات) ============
    toggleAnswers() {
        this.answersHidden = !this.answersHidden;
        document.body.classList.toggle('answers-hidden', this.answersHidden);
        const icon = document.getElementById('ttHideIcon');
        const hideBtn = document.getElementById('ttHideBtn');
        const badge = document.getElementById('answersHiddenBadge');

        if (this.answersHidden) {
            if (icon) icon.textContent = '👁️';
            if (hideBtn) hideBtn.classList.add('active');
            if (badge) badge.classList.add('show');
            this.toast('🙈 Answers hidden');
        } else {
            if (icon) icon.textContent = '🙈';
            if (hideBtn) hideBtn.classList.remove('active');
            if (badge) badge.classList.remove('show');
            this.toast('👁️ Answers visible');
        }
    },

    // ============ Timer (عداد الوقت) ============
    startTimer(seconds) {
        this.stopTimer();
        this.timerSeconds = seconds;
        this.updateTimerDisplay();
        const display = document.getElementById('ttTimerDisplay');
        if (display) display.classList.add('running');

        this.timerInterval = setInterval(() => {
            this.timerSeconds--;
            this.updateTimerDisplay();
            if (this.timerSeconds <= 0) {
                this.stopTimer();
                this.timerEndAlert();
            }
        }, 1000);
    },

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        const display = document.getElementById('ttTimerDisplay');
        if (display) display.classList.remove('running', 'warning');
    },

    updateTimerDisplay() {
        const display = document.getElementById('ttTimerDisplay');
        if (!display) return;
        const m = Math.floor(this.timerSeconds / 60);
        const s = this.timerSeconds % 60;
        const fmt = (n) => String(n).padStart(2, '0');
        display.textContent = `${fmt(m)}:${fmt(s)}`;
        // تحذير في آخر 10 ثوانٍ
        if (this.timerSeconds <= 10 && this.timerSeconds > 0) {
            display.classList.add('warning');
        }
    },

    timerEndAlert() {
        const display = document.getElementById('ttTimerDisplay');
        if (display) {
            display.textContent = '⏰';
            display.classList.add('finished');
        }
        // صوت تنبيه بسيط (Web Audio API)
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            [800, 1000, 800].forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination);
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.2);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.2 + 0.15);
                osc.start(ctx.currentTime + i * 0.2);
                osc.stop(ctx.currentTime + i * 0.2 + 0.15);
            });
        } catch (e) { }

        this.toast('⏰ Time is up!', 'Time is up!');
        setTimeout(() => {
            if (display) display.classList.remove('finished');
            display.textContent = '00:00';
        }, 3000);
    },

    // ============ Flashcards (بطاقات المراجعة) ============
    openFlashcards() {
        // اجمع المفردات من lesson.js
        if (typeof LESSON_DATA !== 'undefined' && Array.isArray(LESSON_DATA.vocab)) {
            this.flashcards = LESSON_DATA.vocab;
        } else {
            this.toast('⚠️ No vocabulary found', 'No vocabulary found');
            return;
        }
        this.fcIndex = 0;
        this.fcFlipped = false;
        this.renderFlashcard();
        document.getElementById('flashcardsModal').classList.add('show');
    },

    closeFlashcards() {
        document.getElementById('flashcardsModal').classList.remove('show');
    },

    renderFlashcard() {
        const card = this.flashcards[this.fcIndex];
        if (!card) return;
        const fc = document.getElementById('flashcardContent');
        if (fc) fc.classList.toggle('flipped', this.fcFlipped);
        document.getElementById('fcEmoji').textContent = card.emoji || '📚';
        document.getElementById('fcEn').textContent = card.en || '';
        document.getElementById('fcZh').textContent = card.zh || '';
        document.getElementById('fcCurrent').textContent = this.fcIndex + 1;
        document.getElementById('fcTotal').textContent = this.flashcards.length;
    },

    flipCard() {
        this.fcFlipped = !this.fcFlipped;
        const fc = document.getElementById('flashcardContent');
        if (fc) fc.classList.toggle('flipped', this.fcFlipped);
    },

    nextCard() {
        if (this.fcIndex < this.flashcards.length - 1) {
            this.fcIndex++;
            this.fcFlipped = false;
            this.renderFlashcard();
        }
    },

    prevCard() {
        if (this.fcIndex > 0) {
            this.fcIndex--;
            this.fcFlipped = false;
            this.renderFlashcard();
        }
    },

    speakCard() {
        const card = this.flashcards[this.fcIndex];
        if (card && card.en && typeof speakEn === 'function') {
            speakEn(card.en);
        }
    },

    // ============ Whiteboard (سبورة سريعة) ============
    openBoard() {
        document.getElementById('boardModal').classList.add('show');
        // ابدأ الكانفاس
        setTimeout(() => this.initBoard(), 100);
    },

    closeBoard() {
        document.getElementById('boardModal').classList.remove('show');
    },

    initBoard() {
        const canvas = document.getElementById('boardCanvas');
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        this.boardCtx = canvas.getContext('2d');
        this.boardCtx.lineCap = 'round';
        this.boardCtx.lineJoin = 'round';

        // أحداث الفأرة
        const startDraw = (e) => {
            this.boardDrawing = true;
            const pos = this.boardGetPos(e, canvas);
            this.boardCtx.beginPath();
            this.boardCtx.moveTo(pos.x, pos.y);
        };
        const draw = (e) => {
            if (!this.boardDrawing) return;
            e.preventDefault();
            const pos = this.boardGetPos(e, canvas);
            this.boardCtx.lineWidth = this.boardSize;
            this.boardCtx.strokeStyle = this.boardColor;
            this.boardCtx.lineTo(pos.x, pos.y);
            this.boardCtx.stroke();
        };
        const stopDraw = () => { this.boardDrawing = false; };

        canvas.onmousedown = startDraw;
        canvas.onmousemove = draw;
        canvas.onmouseup = stopDraw;
        canvas.onmouseleave = stopDraw;
        canvas.ontouchstart = startDraw;
        canvas.ontouchmove = draw;
        canvas.ontouchend = stopDraw;
    },

    boardGetPos(e, canvas) {
        const rect = canvas.getBoundingClientRect();
        const evt = e.touches ? e.touches[0] : e;
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },

    boardSetColor(color) { this.boardColor = color; },
    boardClear() {
        if (this.boardCtx) {
            const canvas = document.getElementById('boardCanvas');
            this.boardCtx.clearRect(0, 0, canvas.width, canvas.height);
        }
    },

    // ============ Random Student (طالب عشوائي) ============
    randomStudent() {
        // اطلب عدد الطلاب أول مرة فقط
        let count = parseInt(localStorage.getItem('teacherStudentCount') || '0');
        if (!count) {
            const input = prompt('Number of students?', '20');
            count = parseInt(input);
            if (!count || count < 1) return;
            localStorage.setItem('teacherStudentCount', count);
        }
        document.getElementById('randomStudentModal').classList.add('show');
        this.spinRandom();
    },

    spinRandom() {
        const count = parseInt(localStorage.getItem('teacherStudentCount') || '20');
        const display = document.getElementById('rsNumber');
        if (!display) return;

        // تأثير تدوير
        let i = 0;
        const spinInterval = setInterval(() => {
            const random = Math.floor(Math.random() * count) + 1;
            display.textContent = random;
            i++;
            if (i > 15) {
                clearInterval(spinInterval);
                display.classList.remove('spinning');
                display.classList.add('chosen');
                setTimeout(() => display.classList.remove('chosen'), 1000);
            }
        }, 80);
        display.classList.add('spinning');
    },

    // ============ Toast Helper ============
    toast(arText, zhText) {
        let toast = document.getElementById('teacherToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'teacherToast';
            toast.className = 'teacher-toast';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `<div class="tch-en">${arText}</div><div class="tch-zh">${zhText}</div>`;
        toast.classList.remove('show');
        void toast.offsetWidth;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2200);
    }
};

// تشغيل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TeacherTools.init());
} else {
    TeacherTools.init();
}

// ================================================================
// *** 22. SMART FEEDBACK - التغذية الراجعة - 智能反馈
// ================================================================
const SmartFeedback = {
    commonMistakes: LESSON_DATA.smartFeedback || {},

    // تحليل ذكي للإجابة
    analyzeMistake(input, expected, exerciseEl) {
        const inputClean = input.replace(/[\u064B-\u0652\u0670]/g, '').trim();
        const expectedClean = expected.replace(/[\u064B-\u0652\u0670]/g, '').trim();

        // إذا كان الإدخال يطابق خطأً شائعاً
        for (const [wrong, info] of Object.entries(this.commonMistakes)) {
            const wrongClean = wrong.replace(/[\u064B-\u0652\u0670]/g, '').trim();
            const correctClean = info.correct.replace(/[\u064B-\u0652\u0670]/g, '').trim();

            if (inputClean === wrongClean && expectedClean === correctClean) {
                return info;
            }
        }

        // إذا كان الإدخال قريباً جداً (فرق حرف واحد)
        if (this.editDistance(inputClean, expectedClean) === 1) {
            return {
                en: `💡 Very close! Correct answer: <strong>${expected}</strong>`,
                zh: `💡 很接近！正确答案: <strong>${expected}</strong>`
            };
        }

        return null;
    },

    // مقياس Levenshtein بسيط
    editDistance(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
                else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
        return matrix[b.length][a.length];
    },

    // إنشاء عنصر التغذية الراجعة الذكية
    showSmartHint(exerciseEl, hint) {
        let hintEl = exerciseEl.querySelector('.smart-hint');
        if (!hintEl) {
            hintEl = document.createElement('div');
            hintEl.className = 'smart-hint';
            const fb = exerciseEl.querySelector('.feedback');
            if (fb) fb.parentNode.insertBefore(hintEl, fb.nextSibling);
            else exerciseEl.appendChild(hintEl);
        }
        hintEl.innerHTML = `
            <div class="sh-en">${hint.en}</div>
            <div class="sh-zh">${hint.zh}</div>
        `;
        hintEl.classList.add('show');
    },

    hideSmartHint(exerciseEl) {
        const hintEl = exerciseEl.querySelector('.smart-hint');
        if (hintEl) hintEl.classList.remove('show');
    }
};

// ✨ نُغلِّف checkFill الأصلية لإضافة التغذية الراجعة الذكية بدون كسر السلوك
(function () {
    if (typeof checkFill !== 'function') return;
    const originalCheckFill = checkFill;
    window.checkFill = function (btn) {
        const ex = btn.closest('.exercise');
        const inputs = ex.querySelectorAll('.fill-input[data-answer]');

        // افحص أول خطأ ذكي قبل الفحص الأصلي
        let hint = null;
        inputs.forEach(input => {
            const expected = input.dataset.answer.trim();
            const got = input.value.trim();
            var strip2 = s => s.replace(/[\u064B-\u0652\u0670]/g, '').trim();
            if (got && strip2(got) !== strip2(expected)) {
                const found = SmartFeedback.analyzeMistake(got, expected, ex);
                if (found && !hint) hint = found;
            }
        });

        // نفّذ الفحص الأصلي
        originalCheckFill.call(this, btn);

        // أظهر/أخفِ التلميح
        if (hint) {
            SmartFeedback.showSmartHint(ex, hint);
        } else {
            SmartFeedback.hideSmartHint(ex);
        }
    };
})();


