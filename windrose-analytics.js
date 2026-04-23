/*!
 * windrose-analytics.js
 * ------------------------------------------------------------------
 * Law 25 (Québec) + PIPEDA (Canada) compliant Google Analytics 4
 * with Consent Mode v2 and a self-injecting consent banner.
 *
 * Usage: include on every page, anywhere inside <head>:
 *     <script src="/windrose-analytics.js"></script>
 *
 * The script:
 *   - Initialises gtag and sets ALL storage to "denied" by default.
 *   - Loads gtag.js only after defaults are in place.
 *   - Reads the visitor's prior choice from localStorage (shared
 *     across all pages on windrose.news) and upgrades consent if
 *     "granted" was previously chosen.
 *   - If no prior choice exists, injects a consent banner at the
 *     bottom of the page with Accept / Decline buttons.
 *
 * The consent choice is stored under the key "windrose_consent".
 * ------------------------------------------------------------------
 */

(function () {
    'use strict';

    var GA_ID       = 'G-5D6FNZS1C8';
    var STORAGE_KEY = 'windrose_consent';

    // ── 1. Initialise gtag immediately ────────────────────────────────
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    // ── 2. Set consent defaults — DENY everything that requires consent
    gtag('consent', 'default', {
        'ad_storage'            : 'denied',
        'ad_user_data'          : 'denied',
        'ad_personalization'    : 'denied',
        'analytics_storage'     : 'denied',
        'functionality_storage' : 'granted',
        'security_storage'      : 'granted',
        'wait_for_update'       : 500
    });

    // ── 3. Read any prior consent choice from localStorage ────────────
    var storedConsent = null;
    try { storedConsent = localStorage.getItem(STORAGE_KEY); } catch (e) {}

    if (storedConsent === 'granted') {
        gtag('consent', 'update', { 'analytics_storage': 'granted' });
    }

    // ── 4. Load gtag.js (AFTER defaults are set) ──────────────────────
    var tag = document.createElement('script');
    tag.async = true;
    tag.src   = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(tag);

    // ── 5. Configure GA4 ──────────────────────────────────────────────
    gtag('js', new Date());
    gtag('config', GA_ID, { 'anonymize_ip': true });

    // ── 6. If visitor has already chosen, we're done ──────────────────
    if (storedConsent !== null) return;

    // ── 7. Otherwise: inject the consent banner ───────────────────────
    function injectBanner() {
        if (document.getElementById('windrose-consent-banner')) return;

        var css = [
            '#windrose-consent-banner {',
            '  position: fixed; bottom: 0; left: 0; right: 0;',
            '  background: #0f1424; color: #fff;',
            '  border-top: 1px solid rgba(231,76,60,0.4);',
            '  padding: 18px 20px; z-index: 2147483647;',
            '  box-shadow: 0 -6px 30px rgba(0,0,0,0.5);',
            '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
            '  font-size: 14px; line-height: 1.5;',
            '  animation: wrFadeIn 0.25s ease-out;',
            '}',
            '@keyframes wrFadeIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }',
            '#windrose-consent-banner .wc-inner {',
            '  max-width: 1000px; margin: 0 auto;',
            '  display: flex; flex-wrap: wrap; align-items: center;',
            '  gap: 16px; justify-content: space-between;',
            '}',
            '#windrose-consent-banner .wc-text {',
            '  flex: 1 1 400px; opacity: 0.92; color: #fff;',
            '}',
            '#windrose-consent-banner .wc-text a {',
            '  color: #63b3ed; text-decoration: underline;',
            '}',
            '#windrose-consent-banner .wc-buttons {',
            '  display: flex; gap: 10px; flex-shrink: 0;',
            '}',
            '#windrose-consent-banner button {',
            '  padding: 10px 20px; border-radius: 6px;',
            '  font-size: 14px; font-weight: 600; cursor: pointer;',
            '  border: 1px solid transparent; font-family: inherit;',
            '  transition: background 0.15s, border-color 0.15s;',
            '  line-height: 1; margin: 0;',
            '}',
            '#windrose-consent-banner .wc-accept {',
            '  background: #e74c3c; color: #fff;',
            '}',
            '#windrose-consent-banner .wc-accept:hover { background: #c0392b; }',
            '#windrose-consent-banner .wc-decline {',
            '  background: transparent; color: #fff;',
            '  border-color: rgba(255,255,255,0.3);',
            '}',
            '#windrose-consent-banner .wc-decline:hover { border-color: rgba(255,255,255,0.6); }',
            '#windrose-consent-banner button:focus-visible {',
            '  outline: 2px solid #63b3ed; outline-offset: 2px;',
            '}',
            '@media (max-width: 600px) {',
            '  #windrose-consent-banner .wc-buttons { width: 100%; }',
            '  #windrose-consent-banner button { flex: 1; }',
            '}'
        ].join('\n');

        var style = document.createElement('style');
        style.setAttribute('data-windrose', 'consent');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);

        var banner = document.createElement('div');
        banner.id = 'windrose-consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-live', 'polite');
        banner.setAttribute('aria-label', 'Privacy consent');
        banner.innerHTML =
            '<div class="wc-inner">' +
                '<div class="wc-text">' +
                    'Windrose uses Google Analytics to understand how visitors use this site. ' +
                    'No personal information is sold or shared with advertisers. ' +
                    'See our <a href="/privacy.html">Privacy Policy</a> for details. ' +
                    'You can change your choice at any time.' +
                '</div>' +
                '<div class="wc-buttons">' +
                    '<button type="button" class="wc-decline">Decline</button>' +
                    '<button type="button" class="wc-accept">Accept</button>' +
                '</div>' +
            '</div>';

        document.body.appendChild(banner);

        function setConsent(value) {
            try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
            gtag('consent', 'update', {
                'analytics_storage': value === 'granted' ? 'granted' : 'denied'
            });
            if (banner.parentNode) banner.parentNode.removeChild(banner);
        }

        banner.querySelector('.wc-accept').addEventListener('click', function () {
            setConsent('granted');
        });
        banner.querySelector('.wc-decline').addEventListener('click', function () {
            setConsent('denied');
        });
    }

    // Wait for <body> to exist before injecting.
    // Slight delay (900 ms) so the banner appears after any page
    // loading spinner has dismissed — matches index.html behaviour.
    function schedule() { setTimeout(injectBanner, 900); }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', schedule);
    } else {
        schedule();
    }
})();
