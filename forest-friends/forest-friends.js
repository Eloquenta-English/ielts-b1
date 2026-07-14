// ═══════════════════════════════════════════
// FOREST FRIENDS — GAME ENGINE
// TTS + L1 Translation + Game Logic
// ═══════════════════════════════════════════

// ═══ 3 TTS MODELS × MULTIPLE VOICES ═══
// Model 1: SpeechMa (browser SpeechSynthesis — free, offline)
// Model 2: NaturalReader (web API — free tier)
// Model 3: LoveVoice AI (web API — free tier)

const TTS_MODELS = [
  {
    id: 'speechma',
    name: '🗣️ SpeechMa (Browser)',
    type: 'browser',
    voices: [
      { id: 'us-f', name: 'US Female', lang: 'en-US' },
      { id: 'us-m', name: 'US Male',   lang: 'en-US' },
      { id: 'uk-f', name: 'UK Female', lang: 'en-GB' },
      { id: 'uk-m', name: 'UK Male',   lang: 'en-GB' },
      { id: 'au-f', name: 'AU Female', lang: 'en-AU' },
      { id: 'in-f', name: 'IN Female', lang: 'en-IN' }
    ]
  },
  {
    id: 'naturalreader',
    name: '🎙️ NaturalReader',
    type: 'api',
    apiUrl: 'https://api.naturalreaders.com/v0/tts/',
    voices: [
      { id: 'en-US-f', name: 'US Female',  lang: 'en-US', voiceId: 'en-US-Wavenet-F' },
      { id: 'en-US-m', name: 'US Male',    lang: 'en-US', voiceId: 'en-US-Wavenet-D' },
      { id: 'en-GB-f', name: 'UK Female',  lang: 'en-GB', voiceId: 'en-GB-Wavenet-F' },
      { id: 'en-GB-m', name: 'UK Male',    lang: 'en-GB', voiceId: 'en-GB-Wavenet-D' },
      { id: 'en-AU-f', name: 'AU Female',  lang: 'en-AU', voiceId: 'en-AU-Wavenet-F' }
    ]
  },
  {
    id: 'lovevoice',
    name: '💖 LoveVoice AI',
    type: 'api',
    apiUrl: 'https://api.lovevoice.ai/v1/tts',
    voices: [
      { id: 'amy',     name: 'Amy (UK)',       lang: 'en-GB', voiceId: 'amy' },
      { id: 'josh',    name: 'Josh (US)',       lang: 'en-US', voiceId: 'josh' },
      { id: 'joanna',  name: 'Joanna (US)',     lang: 'en-US', voiceId: 'joanna' },
      { id: 'matthew', name: 'Matthew (US)',    lang: 'en-US', voiceId: 'matthew' },
      { id: 'brian',   name: 'Brian (UK)',      lang: 'en-GB', voiceId: 'brian' }
    ]
  }
];

// Flatten for dropdown: model > voice
let currentTtsModel = TTS_MODELS[0];
let currentTtsVoice = TTS_MODELS[0].voices[0];

// ── L1 LANGUAGES (12 free via MyMemory) ──
const LANGUAGES = [
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'it', name: 'Italiano' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'zh', name: '中文' },
  { code: 'ar', name: 'العربية' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ru', name: 'Русский' },
  { code: 'nl', name: 'Nederlands' }
];

let currentLang = null;
let translationCache = {};
let voicesLoaded = false;

// ── INIT VOICES — 3 models, grouped in dropdown ──
function initVoices() {
  const sel = document.getElementById('voice-select');
  sel.innerHTML = '';
  TTS_MODELS.forEach((model, mi) => {
    const grp = document.createElement('optgroup');
    grp.label = model.name;
    model.voices.forEach((v, vi) => {
      const opt = document.createElement('option');
      opt.value = mi + ':' + vi;
      opt.textContent = '  ' + v.name;
      grp.appendChild(opt);
    });
    sel.appendChild(grp);
  });
  // Default: first voice of first model
  sel.value = '0:0';
  sel.onchange = () => {
    const [mi, vi] = sel.value.split(':').map(Number);
    currentTtsModel = TTS_MODELS[mi];
    currentTtsVoice = TTS_MODELS[mi].voices[vi];
  };

  const langSel = document.getElementById('lang-select');
  langSel.innerHTML = '<option value="">— L1 Off —</option>';
  LANGUAGES.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l.code;
    opt.textContent = l.name;
    langSel.appendChild(opt);
  });
  langSel.onchange = () => { currentLang = langSel.value || null; };

  if (window.speechSynthesis) {
    speechSynthesis.onvoiceschanged = () => { voicesLoaded = true; };
    speechSynthesis.getVoices();
    setTimeout(() => { voicesLoaded = true; }, 500);
  }
}

// ── SPEAK — routes to correct TTS model ──
function speakText(text) {
  if (!text) return;
  if (currentTtsModel.type === 'browser') {
    speakBrowser(text);
  } else {
    speakApi(text);
  }
}

function speakBrowser(text) {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = currentTtsVoice.lang;
  u.rate = 0.9;
  u.pitch = 1.0;
  if (voicesLoaded) {
    const voices = speechSynthesis.getVoices();
    const match = voices.find(v => v.lang.startsWith(currentTtsVoice.lang.substring(0,2)));
    if (match) u.voice = match;
  }
  speechSynthesis.speak(u);
}

function speakApi(text) {
  // Cancel any playing audio
  if (_apiAudio) { _apiAudio.pause(); _apiAudio = null; }

  if (currentTtsModel.id === 'naturalreader') {
    // NaturalReader free web API
    const url = `https://api.naturalreaders.com/v0/tts/?text=${encodeURIComponent(text)}&voice=${currentTtsVoice.voiceId || 'en-US-Wavenet-F'}&rate=0.9`;
    _apiAudio = new Audio(url);
    _apiAudio.play().catch(() => speakBrowser(text)); // fallback
  } else if (currentTtsModel.id === 'lovevoice') {
    // LoveVoice AI free API
    const url = `https://api.lovevoice.ai/v1/tts?text=${encodeURIComponent(text)}&voice=${currentTtsVoice.voiceId}&format=mp3`;
    _apiAudio = new Audio(url);
    _apiAudio.play().catch(() => speakBrowser(text)); // fallback
  }
}

let _apiAudio = null;

function speakQuestion() {
  const text = document.getElementById('activity').textContent;
  speakText(text);
}

// ── TRANSLATE (MyMemory free API) ──
async function translateText(text, lang) {
  if (!lang || !text) return '';
  const cacheKey = lang + '|' + text;
  if (translationCache[cacheKey]) return translationCache[cacheKey];
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`);
    const data = await res.json();
    const translated = data.responseData?.translatedText || text;
    translationCache[cacheKey] = translated;
    return translated;
  } catch {
    return text;
  }
}

// ── GAME STATE ──
let currentTopic = null;
let currentIdx = 0;
let score = 0;
let questions = [];
let translatedQuestions = null;

// ── URL PARAMS ──
const urlParams = new URLSearchParams(window.location.search);
const topicParam = urlParams.get('topic');

// ── INIT ──
initVoices();
if (topicParam) {
  const found = TOPICS.find(t => t.name === topicParam);
  if (found) startTopic(found);
  else showTopicSelect();
} else {
  showTopicSelect();
}

// ── TOPIC SELECT ──
function showTopicSelect() {
  document.getElementById('topic-select').style.display = 'block';
  document.getElementById('game-area').style.display = 'none';
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = '';
  TOPICS.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'topic-btn ' + t.cls;
    btn.style.backgroundImage = 'url("' + t.img + '")';
    btn.style.backgroundSize = 'cover';
    btn.style.backgroundPosition = 'center';
    btn.innerHTML = '<span class="topic-emoji">' + t.questions[0][0] + '</span><span>' + t.name + '</span>';
    btn.onclick = () => startTopic(t);
    grid.appendChild(btn);
  });
}

// ── START TOPIC ──
async function startTopic(topic) {
  currentTopic = topic;
  currentIdx = 0;
  score = 0;
  questions = shuffle([...topic.questions]);
  translatedQuestions = null;

  // Pre-translate if L1 selected
  if (currentLang) {
    translatedQuestions = [];
    for (const q of questions) {
      const tQ = [...q];
      tQ[1] = await translateText(q[1], currentLang);
      translatedQuestions.push(tQ);
    }
  }

  document.getElementById('topic-select').style.display = 'none';
  document.getElementById('game-area').style.display = 'block';
  document.getElementById('topic-label').textContent = topic.name.toUpperCase();
  loadQuestion();
}

// ── LOAD QUESTION ──
function loadQuestion() {
  if (currentIdx >= questions.length) { showWin(); return; }
  const q = (translatedQuestions && translatedQuestions[currentIdx]) ? translatedQuestions[currentIdx] : questions[currentIdx];

  // Background image
  const bg = document.getElementById('game-area-bg');
  bg.style.backgroundImage = 'url("' + currentTopic.img + '")';

  document.getElementById('char').textContent = q[0];
  document.getElementById('activity').textContent = q[1];
  document.getElementById('progress-text').textContent = (currentIdx + 1) + ' / ' + questions.length;
  document.getElementById('score-text').textContent = 'Score: ' + score;
  document.getElementById('progress-fill').style.width = (currentIdx / questions.length * 100) + '%';

  const optDiv = document.getElementById('options');
  optDiv.innerHTML = '';
  const opts = shuffle([q[2], q[3], q[4], q[5]]);
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, q[2], btn);
    optDiv.appendChild(btn);
  });

  // Auto-speak question
  setTimeout(() => speakText(q[1]), 300);
}

// ── CHECK ANSWER ──
function checkAnswer(selected, correct, btn) {
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);
  if (selected === correct) {
    btn.classList.add('correct');
    score++;
    fireConfetti();
    speakText('Correct!');
    setTimeout(() => { currentIdx++; loadQuestion(); }, 1100);
  } else {
    btn.classList.add('wrong');
    allBtns.forEach(b => { if (b.textContent === correct) b.classList.add('correct'); });
    speakText('Try again');
    setTimeout(() => { currentIdx++; loadQuestion(); }, 1600);
  }
}

// ── WIN SCREEN ──
function showWin() {
  document.getElementById('progress-fill').style.width = '100%';
  const bg = document.getElementById('game-area-bg');
  bg.style.backgroundImage = 'url("' + currentTopic.img + '")';
  document.getElementById('game-area-inner').innerHTML = `
    <div class="win-screen">
      <h2>ARENA COMPLETE</h2>
      <div class="final-score">${score}/${questions.length}</div>
      <div class="final-detail">${currentTopic.name} — ${Math.round(score/questions.length*100)}% accuracy</div>
      <div class="win-actions">
        <button class="btn-neon" onclick="startTopic(currentTopic)">PLAY AGAIN</button>
        <button class="btn-neon btn-neon-pink" onclick="showTopicSelect()">CHANGE ARENA</button>
      </div>
    </div>`;
  fireConfetti();
  speakText('Great job! You scored ' + score + ' out of ' + questions.length);
}

// ── CONFETTI ──
function fireConfetti() {
  const colors = ['#39ff14','#00f0ff','#ff2d95','#ff6b00','#bf00ff','#ffe600','#ff073a'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.left = (10 + Math.random() * 80) + '%';
    el.style.top = (5 + Math.random() * 15) + '%';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDelay = (Math.random() * 0.5) + 's';
    el.style.animationDuration = (1 + Math.random()) + 's';
    el.style.width = (6 + Math.random() * 6) + 'px';
    el.style.height = (6 + Math.random() * 6) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
}

// ── UTILS ──
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function goBack() {
  if (currentTopic && currentIdx > 0) {
    showTopicSelect();
  } else {
    window.location.href = 'forest-home.html';
  }
}
