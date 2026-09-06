/* ============================================================
   chenchen · homepage interactions (minimal page)
   - theme toggle (light/dark; remembers choice, else follows system)
   - language toggle (en/zh; remembers choice, defaults to en)
   - fill in "Last updated" from the page's own modified time
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  var STORE_THEME = 'chenchen-theme';
  var STORE_LANG = 'chenchen-lang';

  var themeBtn = document.getElementById('theme-toggle');
  var langBtn = document.getElementById('lang-toggle');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function storeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function storeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  /* ---------- theme ---------- */
  function savedTheme() {
    var v = storeGet(STORE_THEME);
    return v === 'light' || v === 'dark' ? v : null;
  }
  function activeTheme() { return savedTheme() || (mq.matches ? 'dark' : 'light'); }

  function applyTheme() {
    var s = savedTheme();
    if (s) { root.setAttribute('data-theme', s); } else { root.removeAttribute('data-theme'); }
    if (themeBtn) themeBtn.textContent = activeTheme() === 'dark' ? '☀' : '☾';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      storeSet(STORE_THEME, activeTheme() === 'dark' ? 'light' : 'dark');
      applyTheme();
    });
  }
  if (mq.addEventListener) {
    mq.addEventListener('change', applyTheme);
  } else if (mq.addListener) {
    mq.addListener(applyTheme); // legacy Safari
  }

  /* ---------- language ---------- */
  function savedLang() { return storeGet(STORE_LANG) === 'zh' ? 'zh' : 'en'; }
  function applyLang() {
    var l = savedLang();
    root.setAttribute('data-lang', l);
    root.lang = l;
  }
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      storeSet(STORE_LANG, savedLang() === 'zh' ? 'en' : 'zh');
      applyLang();
    });
  }

  /* ---------- "last updated" from the file's own mtime ---------- */
  var lm = document.getElementById('last-modified');
  if (lm && document.lastModified) {
    try {
      lm.textContent = new Date(document.lastModified).toLocaleDateString();
    } catch (e) { /* ignore */ }
  }

  /* ---------- init ---------- */
  applyLang();
  applyTheme();
})();
