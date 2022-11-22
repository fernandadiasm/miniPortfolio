//home text
const typedTextSpan = document.querySelector(".typed__text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-end.", "Back-end.", "Fullstack."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
      if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  });



const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      if(tab.classList.contains("selected")){
        return;
      };
  
      selectTab(tab)
  
      showInfosTab(tab)
    });
  });
  
  function selectTab(tab) {
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");
  
    tab.classList.add("selected");
  }
  
  function showInfosTab(tab) {
    const infoSelected = document.querySelector(".info.selected");
    infoSelected.classList.remove("selected");
  
    const idElementInfosTab = `info-${tab.id}`;
  
    const infoToBeShown = document.getElementById(idElementInfosTab)
    infoToBeShown.classList.add("selected");
  }