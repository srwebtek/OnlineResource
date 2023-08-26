// -----------------------------------------------------------
// this typewriter text on home page.
// this typewriter shows text only.
// this typewriter script is only displayed on the home page.
// -----------------------------------------------------------

// https://www.youtube.com/watch?v=SgmNxE9lWcY
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = [
  "sitemap.xml",
  "SEO",
];
// const phrases = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "JSON",
//   "Markdown",
//   "sitemap.xml",
//   "SEO",
//   ".htaccess",
//   "SVG",
//   "font-family"
// ];

const el = document.getElementById("typewriter");
let waitBeforeTypingTime = 1500;
let waitBeforeBackspaceTime = 2000;
let pressKeysTime = 180;
let pressBackspaceTime = 100;
let curPraseIndex = 0;
const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPraseIndex];
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = "Assets: " + curWord.substring(0, i + 1);
      await sleep(pressKeysTime);
    }
    await sleep(waitBeforeBackspaceTime);
    for (let i = curWord.length; i > 0; i--) {
      el.innerText = "Assets: " + curWord.substring(0, i - 1);
      await sleep(pressBackspaceTime);
    }
    await sleep(waitBeforeTypingTime);
    if (curPraseIndex === phrases.length - 1) {
      curPraseIndex = 0;
    } else {
      curPraseIndex++;
    }
  }
};

writeLoop();
