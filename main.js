// ==UserScript==
// @name         KWYK, ntm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  pour que kwyk casse pas les couilles
// @author       You
// @match        https://www.kwyk.fr/*
// @icon         https://www.google.com/s2/favicons?domain=kwyk.fr
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
    if (document.body.innerHTML.search("et suivie de l'unité qui convient.") != -1) {
        alert("il faut penser à ajouter une unité !!!")
    }
})();
