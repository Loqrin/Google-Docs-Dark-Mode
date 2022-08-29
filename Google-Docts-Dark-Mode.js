// ==UserScript==
// @name         Google Docs Dark Mode
// @namespace    https://github.com/loqrin
// @version      1.0
// @description  Makes Google Docs into dark mode.
// @author       Loqrin
// @match        https://docs.google.com/document/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM_addStyle
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css.replace(/;/g, ' !important;');
    head.appendChild(style);
}

(function() {
    'use strict';

    //40, 44, 52

    //Menu Buttons
    GM_addStyle(addGlobalStyle('.menu-button { color: white; }'));

    //Toolbars
    GM_addStyle(addGlobalStyle('#docs-chrome { background-color: rgb(33, 37, 43); }'));
    GM_addStyle(addGlobalStyle('.docs-titlebar-buttons { background-color: rgb(33, 37, 43); }'));

    //Sub Toolbars
    GM_addStyle(addGlobalStyle('#docs-toolbar-wrapper { background-color: rgb(47, 51, 61); }'));
    GM_addStyle(addGlobalStyle('#docs-toolbar-wrapper { border-top: rgb(47, 51, 61); }'));
    GM_addStyle(addGlobalStyle('#docs-toolbar-wrapper { border-bottom: rgb(47, 51, 61); }'));

    //Ruler
    GM_addStyle(addGlobalStyle('.docs-horizontal-ruler { background-color: rgb(47, 51, 61); }'));
    GM_addStyle(addGlobalStyle('.docs-horizontal-ruler { border-bottom: rgb(47, 51, 61); }'));
    GM_addStyle(addGlobalStyle('.docs-ruler-face { background-color: rgb(40, 44, 52); }'));
    GM_addStyle(addGlobalStyle('.docs-ruler-face-number { color: white; }'));
    GM_addStyle(addGlobalStyle('.docs-vertical-ruler { background-color: rgb(47, 51, 61); }'));

    //Page Background
    GM_addStyle(addGlobalStyle('.kix-appview-editor { background-color: rgb(33, 37, 43); }'));
})();