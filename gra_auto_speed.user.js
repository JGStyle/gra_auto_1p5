// ==UserScript==
// @name         GRA Videos keep speed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  stop clicking the speed up button on every video. Automatically set playbackspeed
// @author       Josef Schmid
// @match        https://gra.caps.in.tum.de/video/*
// @icon         https://www.tum.de/favicon.ico
// @grant        none
// ==/UserScript==


function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

(function() {
    'use strict';

    // === constants ===
    const xpath_speedup_button = "/html/body/div/div[3]/div/div/div[4]/div[9]/button";
    const amount_click = 1;
    const wait_iterations = 10000;
    // === constants ===

    // get the element from the DOM
    let button = getElementByXpath(xpath_speedup_button);

    // click the button amount_click - times
    for (let i = 0; i < amount_click; i++) {
        button.click();
        for (let _ = 0; _ < wait_iterations; _++) {
            console.log('a');
        }
    }


})();