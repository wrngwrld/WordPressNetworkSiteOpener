// ==UserScript==
// @name         WordPressNetworkSiteOpener
// @namespace    https://github.com/wrngwrld
// @version      1.0
// @updateURL    https://github.com/wrngwrld/WordPressNetworkSiteOpener/raw/main/WordPressNetworkSiteOpener.user.js
// @downloadURL  https://github.com/wrngwrld/WordPressNetworkSiteOpener/raw/main/WordPressNetworkSiteOpener.user.js
// @supportURL   https://github.com/wrngwrld/WordPressNetworkSiteOpener/issues
// @description  Opens all websites of the current page inside a WordPress Network in a new tab!
// @author       wrngwrld
// @match        */wp-admin/network/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=https://wordpress.org/
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  window.addEventListener("load", () => {
    let button = addButton();

    button.addEventListener("click", () => {
      if (
        confirm("Alle Tabs öffnen?")
      ) {
        const allLinks = document.querySelectorAll(".visit");
        allLinks.forEach((el) => {
          console.log(el);
          const url = el.querySelector("a").href;
          window.open(url, "_blank");
        });
      }
    });
  });

  function addButton() {
    let button = document.createElement("a");
    const attachBtn = document.querySelector(".bulkactions");

    button.classList.add("button");
    button.innerHTML = "Alle Seiten in neuen Tab öffnen";

    attachBtn.appendChild(button);
    return button;
  }
})();
