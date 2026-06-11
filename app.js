const trigrams = [
  { index: 1, name: "乾", nature: "天", lines: [1, 1, 1] },
  { index: 2, name: "兑", nature: "泽", lines: [1, 1, 0] },
  { index: 3, name: "离", nature: "火", lines: [1, 0, 1] },
  { index: 4, name: "震", nature: "雷", lines: [1, 0, 0] },
  { index: 5, name: "巽", nature: "风", lines: [0, 1, 1] },
  { index: 6, name: "坎", nature: "水", lines: [0, 1, 0] },
  { index: 7, name: "艮", nature: "山", lines: [0, 0, 1] },
  { index: 8, name: "坤", nature: "地", lines: [0, 0, 0] },
];

const hexagramNames = {
  "乾-乾": "乾为天",
  "乾-兑": "天泽履",
  "乾-离": "天火同人",
  "乾-震": "天雷无妄",
  "乾-巽": "天风姤",
  "乾-坎": "天水讼",
  "乾-艮": "天山遁",
  "乾-坤": "天地否",
  "兑-乾": "泽天夬",
  "兑-兑": "兑为泽",
  "兑-离": "泽火革",
  "兑-震": "泽雷随",
  "兑-巽": "泽风大过",
  "兑-坎": "泽水困",
  "兑-艮": "泽山咸",
  "兑-坤": "泽地萃",
  "离-乾": "火天大有",
  "离-兑": "火泽睽",
  "离-离": "离为火",
  "离-震": "火雷噬嗑",
  "离-巽": "火风鼎",
  "离-坎": "火水未济",
  "离-艮": "火山旅",
  "离-坤": "火地晋",
  "震-乾": "雷天大壮",
  "震-兑": "雷泽归妹",
  "震-离": "雷火丰",
  "震-震": "震为雷",
  "震-巽": "雷风恒",
  "震-坎": "雷水解",
  "震-艮": "雷山小过",
  "震-坤": "雷地豫",
  "巽-乾": "风天小畜",
  "巽-兑": "风泽中孚",
  "巽-离": "风火家人",
  "巽-震": "风雷益",
  "巽-巽": "巽为风",
  "巽-坎": "风水涣",
  "巽-艮": "风山渐",
  "巽-坤": "风地观",
  "坎-乾": "水天需",
  "坎-兑": "水泽节",
  "坎-离": "水火既济",
  "坎-震": "水雷屯",
  "坎-巽": "水风井",
  "坎-坎": "坎为水",
  "坎-艮": "水山蹇",
  "坎-坤": "水地比",
  "艮-乾": "山天大畜",
  "艮-兑": "山泽损",
  "艮-离": "山火贲",
  "艮-震": "山雷颐",
  "艮-巽": "山风蛊",
  "艮-坎": "山水蒙",
  "艮-艮": "艮为山",
  "艮-坤": "山地剥",
  "坤-乾": "地天泰",
  "坤-兑": "地泽临",
  "坤-离": "地火明夷",
  "坤-震": "地雷复",
  "坤-巽": "地风升",
  "坤-坎": "地水师",
  "坤-艮": "地山谦",
  "坤-坤": "坤为地",
};

const daxieDigits = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
const aiLinks = [
  ["ChatGPT", "https://chatgpt.com/?q="],
  ["Claude", "https://claude.ai/new?q="],
  ["Gemini", "https://gemini.google.com/app?prompt="],
  ["Grok", "https://grok.com/?q="],
  ["DeepSeek", "https://chat.deepseek.com/?q="],
  ["Kimi", "https://www.kimi.com/chat/?q="],
  ["豆包", "https://www.doubao.com/chat/?q="],
];

const $ = (selector) => document.querySelector(selector);
const questionEl = $("#question");
const castButton = $("#castButton");
const copyButton = $("#copyPrompt");
const promptText = $("#promptText");
const hexagramName = $("#hexagramName");
const hexagramDetail = $("#hexagramDetail");
const hexagramLines = $("#hexagramLines");
let currentPrompt = "";

function toDaxie(num) {
  if (num <= 10) return num === 10 ? "拾" : daxieDigits[num];
  if (num < 20) return `拾${daxieDigits[num % 10]}`;
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  return `${daxieDigits[tens]}拾${ones ? daxieDigits[ones] : ""}`;
}

function normalize(number, base) {
  const remainder = number % base;
  return remainder === 0 ? base : remainder;
}

function trigramFromNumber(number) {
  return trigrams[normalize(number, 8) - 1];
}

function renderLines(lower, upper, movingLine) {
  const lines = [...upper.lines].reverse().concat([...lower.lines].reverse());
  hexagramLines.innerHTML = "";
  lines.forEach((line, visualIndex) => {
    const div = document.createElement("div");
    const lineFromBottom = 6 - visualIndex;
    div.className = `yao ${line ? "yang" : "yin"} ${lineFromBottom === movingLine ? "moving" : ""}`;
    hexagramLines.appendChild(div);
  });
}

function randomNumber() {
  return Math.floor(Math.random() * 99) + 1;
}

function updateAiLinks() {
  document.querySelectorAll(".ai-link").forEach((link, index) => {
    const [, baseUrl] = aiLinks[index];
    const query = currentPrompt ? encodeURIComponent(currentPrompt) : "";
    link.href = query ? `${baseUrl}${query}` : link.href.split("?")[0];
  });
}

function setPrompt(question, hexagram) {
  currentPrompt = `我对于${question}问题起卦得${hexagram}卦，请你帮我解读`;
  promptText.textContent = currentPrompt;
  copyButton.disabled = false;
  updateAiLinks();
}

function showResult(numbers) {
  const [first, second, third] = numbers;
  const upper = trigramFromNumber(first);
  const lower = trigramFromNumber(second);
  const movingLine = normalize(third, 6);
  const name = hexagramNames[`${upper.name}-${lower.name}`];
  const question = questionEl.value.trim() || "我所关心的这件事";

  hexagramName.textContent = name;
  hexagramDetail.textContent = `第一数 ${toDaxie(first)} 取 ${upper.name}${upper.nature} 为上卦，第二数 ${toDaxie(second)} 取 ${lower.name}${lower.nature} 为下卦，第三数 ${toDaxie(third)} 定第 ${toDaxie(movingLine)} 爻为动爻。`;
  renderLines(lower, upper, movingLine);
  setPrompt(question, name);
}

function animateNumbers(finalNumbers) {
  const outputIds = ["#numOne", "#numTwo", "#numThree"];
  const cards = document.querySelectorAll(".number-card");
  const interval = window.setInterval(() => {
    outputIds.forEach((id) => {
      $(id).textContent = toDaxie(randomNumber());
    });
  }, 82);

  cards.forEach((card) => card.classList.add("is-rolling"));
  castButton.disabled = true;

  window.setTimeout(() => {
    window.clearInterval(interval);
    outputIds.forEach((id, index) => {
      $(id).textContent = toDaxie(finalNumbers[index]);
    });
    cards.forEach((card) => card.classList.remove("is-rolling"));
    castButton.disabled = false;
    showResult(finalNumbers);
  }, 980);
}

castButton.addEventListener("click", () => {
  const numbers = [randomNumber(), randomNumber(), randomNumber()];
  animateNumbers(numbers);
});

copyButton.addEventListener("click", async () => {
  if (!currentPrompt) return;
  await navigator.clipboard.writeText(currentPrompt);
  copyButton.textContent = "已复制";
  window.setTimeout(() => {
    copyButton.textContent = "复制";
  }, 1300);
});

renderLines(trigrams[7], trigrams[0], 1);
