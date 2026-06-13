const trigrams = [
  { index: 1, name: "乾", symbol: "☰", nature: "天", element: "金", lines: [1, 1, 1] },
  { index: 2, name: "兑", symbol: "☱", nature: "泽", element: "金", lines: [1, 1, 0] },
  { index: 3, name: "离", symbol: "☲", nature: "火", element: "火", lines: [1, 0, 1] },
  { index: 4, name: "震", symbol: "☳", nature: "雷", element: "木", lines: [1, 0, 0] },
  { index: 5, name: "巽", symbol: "☴", nature: "风", element: "木", lines: [0, 1, 1] },
  { index: 6, name: "坎", symbol: "☵", nature: "水", element: "水", lines: [0, 1, 0] },
  { index: 7, name: "艮", symbol: "☶", nature: "山", element: "土", lines: [0, 0, 1] },
  { index: 8, name: "坤", symbol: "☷", nature: "地", element: "土", lines: [0, 0, 0] },
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

const hexagramOrders = {
  "乾为天": 1,
  "坤为地": 2,
  "水雷屯": 3,
  "山水蒙": 4,
  "水天需": 5,
  "天水讼": 6,
  "地水师": 7,
  "水地比": 8,
  "风天小畜": 9,
  "天泽履": 10,
  "地天泰": 11,
  "天地否": 12,
  "天火同人": 13,
  "火天大有": 14,
  "地山谦": 15,
  "雷地豫": 16,
  "泽雷随": 17,
  "山风蛊": 18,
  "地泽临": 19,
  "风地观": 20,
  "火雷噬嗑": 21,
  "山火贲": 22,
  "山地剥": 23,
  "地雷复": 24,
  "天雷无妄": 25,
  "山天大畜": 26,
  "山雷颐": 27,
  "泽风大过": 28,
  "坎为水": 29,
  "离为火": 30,
  "泽山咸": 31,
  "雷风恒": 32,
  "天山遁": 33,
  "雷天大壮": 34,
  "火地晋": 35,
  "地火明夷": 36,
  "风火家人": 37,
  "火泽睽": 38,
  "水山蹇": 39,
  "雷水解": 40,
  "山泽损": 41,
  "风雷益": 42,
  "泽天夬": 43,
  "天风姤": 44,
  "泽地萃": 45,
  "地风升": 46,
  "泽水困": 47,
  "水风井": 48,
  "泽火革": 49,
  "火风鼎": 50,
  "震为雷": 51,
  "艮为山": 52,
  "风山渐": 53,
  "雷泽归妹": 54,
  "雷火丰": 55,
  "火山旅": 56,
  "巽为风": 57,
  "兑为泽": 58,
  "风水涣": 59,
  "水泽节": 60,
  "风泽中孚": 61,
  "雷山小过": 62,
  "水火既济": 63,
  "火水未济": 64,
};

const daxieDigits = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
const lineNames = ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];
const aiLinks = [
  { name: "ChatGPT", url: "https://chatgpt.com/?q=", supportsPrompt: true },
  { name: "Claude", url: "https://claude.ai/new", supportsPrompt: false },
  { name: "Gemini", url: "https://gemini.google.com/app", supportsPrompt: false },
  { name: "Grok", url: "https://grok.com/?q=", supportsPrompt: true },
  { name: "DeepSeek", url: "https://chat.deepseek.com/", supportsPrompt: false },
  { name: "Kimi", url: "https://www.kimi.com/chat/", supportsPrompt: false },
  { name: "豆包", url: "https://www.doubao.com/chat/", supportsPrompt: false },
];

const $ = (selector) => document.querySelector(selector);
const questionEl = $("#question");
const castButton = $("#castButton");
const copyButton = $("#copyPrompt");
const promptText = $("#promptText");
const hexagramName = $("#hexagramName");
const hexagramDetail = $("#hexagramDetail");
const hexagramLines = $("#hexagramLines");
const changedHexagramLines = $("#changedHexagramLines");
const trigramGrid = $("#trigramGrid");
const promptBlock = $(".prompt-block");
const dashboardLeft = $(".dashboard-left");
const promptMobileAnchor = $("#promptMobileAnchor");
const steps = {
  upper: $("#stepUpper"),
  lower: $("#stepLower"),
  original: $("#stepOriginal"),
  moving: $("#stepMoving"),
  changed: $("#stepChanged"),
};
let currentPrompt = "";
let stepTimers = [];
const mobilePromptLayout = window.matchMedia("(max-width: 820px)");

function toDaxie(num) {
  if (num <= 10) return num === 10 ? "拾" : daxieDigits[num];
  if (num < 20) return `拾${daxieDigits[num % 10]}`;
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  return `${daxieDigits[tens]}拾${ones ? daxieDigits[ones] : ""}`;
}

function formatDisplayNumber(num) {
  return `${toDaxie(num)}（${num}）`;
}

function normalize(number, base) {
  const remainder = number % base;
  return remainder === 0 ? base : remainder;
}

function quotientAndRemainder(number, base) {
  const quotient = Math.floor(number / base);
  const rawRemainder = number % base;
  return {
    quotient,
    rawRemainder,
    normalized: rawRemainder === 0 ? base : rawRemainder,
  };
}

function trigramFromNumber(number) {
  return trigrams[normalize(number, 8) - 1];
}

function lineSymbol(line) {
  return line ? "⚊" : "⚋";
}

function buildLines(lower, upper) {
  return [...lower.lines, ...upper.lines];
}

function getHexagramName(upper, lower) {
  return hexagramNames[`${upper.name}-${lower.name}`];
}

function trigramFromLines(lines) {
  return trigrams.find((trigram) => trigram.lines.every((line, index) => line === lines[index]));
}

function renderLineSet(target, lower, upper, movingLine = 0) {
  const lines = [...upper.lines].reverse().concat([...lower.lines].reverse());
  target.innerHTML = "";
  lines.forEach((line, visualIndex) => {
    const div = document.createElement("div");
    const lineFromBottom = 6 - visualIndex;
    div.className = `yao ${line ? "yang" : "yin"} ${lineFromBottom === movingLine ? "moving" : ""}`;
    target.appendChild(div);
  });
}

function renderLines(lower, upper, movingLine = 0) {
  renderLineSet(hexagramLines, lower, upper, movingLine);
}

function renderChangedLines(lower, upper, movingLine = 0, muted = false) {
  changedHexagramLines.classList.toggle("muted", muted);
  renderLineSet(changedHexagramLines, lower, upper, movingLine);
}

function renderTrigramGrid() {
  trigramGrid.innerHTML = trigrams
    .map(
      (trigram) => `
        <div class="trigram-cell">
          <strong>${trigram.index}</strong>
          <span>${trigram.name} ${trigram.symbol}</span>
          <small>${trigram.nature}</small>
        </div>
      `,
    )
    .join("");
}

function randomNumber() {
  return Math.floor(Math.random() * 99) + 1;
}

function updateAiLinks() {
  document.querySelectorAll(".ai-link").forEach((link, index) => {
    const ai = aiLinks[index];
    const query = currentPrompt ? encodeURIComponent(currentPrompt) : "";
    link.dataset.promptMode = ai.supportsPrompt ? "direct" : "copy";
    link.href = query && ai.supportsPrompt ? `${ai.url}${query}` : ai.url;
  });
}

function setPrompt(reading) {
  currentPrompt = [
    `我想问：${reading.question}`,
    `三数起卦得本卦「${reading.originalName}」，${lineNames[reading.movingLine - 1]}动，变卦「${reading.changedName}」。`,
    "请围绕我的问题本身解读这个卦象，给出事情走向、关键风险和可执行建议。",
  ].join("\n");
  promptText.textContent = currentPrompt;
  copyButton.disabled = false;
  updateAiLinks();
}

function setStep(step, html) {
  step.classList.add("is-active");
  step.querySelector("p").innerHTML = html;
}

function resetReadingUi() {
  stepTimers.forEach((timer) => window.clearTimeout(timer));
  stepTimers = [];
  Object.values(steps).forEach((step) => {
    step.classList.remove("is-active");
  });
  steps.upper.querySelector("p").textContent = "等待第一数。";
  steps.lower.querySelector("p").textContent = "等待第二数。";
  steps.original.querySelector("p").textContent = "等待上下卦合成。";
  steps.moving.querySelector("p").textContent = "等待第三数。";
  steps.changed.querySelector("p").textContent = "等待动爻阴阳相变。";
  hexagramName.textContent = "推演中";
  hexagramDetail.textContent = "三数已得，正在按八卦取余、合成本卦并推得变卦。";
  renderChangedLines(trigrams[7], trigrams[0], 0, true);
  promptText.textContent = "起卦后将自动生成完整解读模板。";
  copyButton.disabled = true;
}

function syncPromptLayout(event) {
  const isMobile = event.matches ?? event.currentTarget?.matches ?? mobilePromptLayout.matches;
  if (isMobile) {
    if (promptMobileAnchor && promptBlock?.previousElementSibling !== promptMobileAnchor) {
      promptMobileAnchor.after(promptBlock);
    }
    return;
  }

  if (dashboardLeft && dashboardLeft.lastElementChild !== promptBlock) {
    dashboardLeft.append(promptBlock);
  }
}

function makeReading(numbers) {
  const [first, second, third] = numbers;
  const upper = trigramFromNumber(first);
  const lower = trigramFromNumber(second);
  const movingLine = normalize(third, 6);
  const question = questionEl.value.trim() || "我所关心的这件事";
  const originalLines = buildLines(lower, upper);
  const changedLines = [...originalLines];
  changedLines[movingLine - 1] = changedLines[movingLine - 1] ? 0 : 1;
  const changedLower = trigramFromLines(changedLines.slice(0, 3));
  const changedUpper = trigramFromLines(changedLines.slice(3, 6));
  const movingInUpper = movingLine > 3;
  const bodyTrigram = movingInUpper ? lower : upper;
  const useTrigram = movingInUpper ? upper : lower;
  const originalName = getHexagramName(upper, lower);
  const changedName = getHexagramName(changedUpper, changedLower);

  return {
    numbers,
    question,
    upper,
    lower,
    upperMath: quotientAndRemainder(first, 8),
    lowerMath: quotientAndRemainder(second, 8),
    movingMath: quotientAndRemainder(third, 6),
    movingLine,
    originalLines,
    changedLines,
    changedLower,
    changedUpper,
    bodyTrigram,
    useTrigram,
    originalName,
    changedName,
    originalOrder: hexagramOrders[originalName],
    changedOrder: hexagramOrders[changedName],
  };
}

function linesText(lines) {
  return lines
    .map((line, index) => `${lineNames[index]} ${lineSymbol(line)}`)
    .reverse()
    .join(" ｜ ");
}

function showResult(numbers) {
  const reading = makeReading(numbers);

  resetReadingUi();
  renderLines(reading.lower, reading.upper, 0);
  renderChangedLines(trigrams[7], trigrams[0], 0, true);

  const queueStep = (delay, action) => {
    stepTimers.push(window.setTimeout(action, delay));
  };

  queueStep(300, () => {
    setStep(
      steps.upper,
      `${formatDisplayNumber(reading.numbers[0])} ÷ 8 = ${reading.upperMath.quotient} 余 ${reading.upperMath.rawRemainder}，取 ${formatDisplayNumber(reading.upperMath.normalized)}，对应 ${reading.upper.name}卦 ${reading.upper.symbol}，${reading.upper.name}为${reading.upper.nature}。`,
    );
  });

  queueStep(1000, () => {
    setStep(
      steps.lower,
      `${formatDisplayNumber(reading.numbers[1])} ÷ 8 = ${reading.lowerMath.quotient} 余 ${reading.lowerMath.rawRemainder}，取 ${formatDisplayNumber(reading.lowerMath.normalized)}，对应 ${reading.lower.name}卦 ${reading.lower.symbol}，${reading.lower.name}为${reading.lower.nature}。`,
    );
  });

  queueStep(1700, () => {
    hexagramName.textContent = reading.originalName;
    hexagramDetail.textContent = `${reading.upper.name}${reading.upper.nature}在上，${reading.lower.name}${reading.lower.nature}在下，合为本卦「${reading.originalName}」，卦序第 ${reading.originalOrder}。`;
    setStep(
      steps.original,
      `下卦在下，上卦在上。画面自上而下为：${linesText(reading.originalLines)}，即 ${reading.upper.symbol}上 ${reading.lower.symbol}下。`,
    );
  });

  queueStep(3000, () => {
    renderLines(reading.lower, reading.upper, reading.movingLine);
    setStep(
      steps.moving,
      `${formatDisplayNumber(reading.numbers[2])} ÷ 6 = ${reading.movingMath.quotient} 余 ${reading.movingMath.rawRemainder}，取 ${formatDisplayNumber(reading.movingMath.normalized)}，因此 ${lineNames[reading.movingLine - 1]}动。`,
    );
  });

  queueStep(4300, () => {
    renderChangedLines(reading.changedLower, reading.changedUpper, 0, false);
    setStep(
      steps.changed,
      `${lineNames[reading.movingLine - 1]}由 ${lineSymbol(reading.originalLines[reading.movingLine - 1])} 变为 ${lineSymbol(reading.changedLines[reading.movingLine - 1])}。变卦为 ${reading.changedUpper.name}${reading.changedUpper.nature}上、${reading.changedLower.name}${reading.changedLower.nature}下，即「${reading.changedName}」，卦序第 ${reading.changedOrder}。`,
    );
    hexagramDetail.textContent = `本卦「${reading.originalName}」第 ${reading.originalOrder} 卦，${lineNames[reading.movingLine - 1]}动，变卦「${reading.changedName}」第 ${reading.changedOrder} 卦。体卦取${reading.bodyTrigram.name}${reading.bodyTrigram.element}，用卦取${reading.useTrigram.name}${reading.useTrigram.element}。`;
    setPrompt(reading);
  });
}

function animateNumbers() {
  const outputIds = ["#numOne", "#numTwo", "#numThree"];
  const cards = document.querySelectorAll(".number-card");
  const locked = [false, false, false];
  const settledNumbers = [0, 0, 0];
  resetReadingUi();
  hexagramName.textContent = "三数未定";
  hexagramDetail.textContent = "正在取数，约五息后出本卦。";
  const interval = window.setInterval(() => {
    outputIds.forEach((id, index) => {
      if (locked[index]) return;
      $(id).textContent = toDaxie(randomNumber());
    });
  }, 82);

  cards.forEach((card) => card.classList.add("is-rolling"));
  castButton.disabled = true;

  outputIds.forEach((id, index) => {
    window.setTimeout(() => {
      const number = randomNumber();
      locked[index] = true;
      settledNumbers[index] = number;
      $(id).textContent = toDaxie(number);
      cards[index].classList.remove("is-rolling");
    }, 1400 + index * 900);
  });

  window.setTimeout(() => {
    window.clearInterval(interval);
    cards.forEach((card) => card.classList.remove("is-rolling"));
    showResult(settledNumbers);
  }, 3300);

  window.setTimeout(() => {
    castButton.disabled = false;
  }, 9000);
}

castButton.addEventListener("click", () => {
  animateNumbers();
});

copyButton.addEventListener("click", async () => {
  if (!currentPrompt) return;
  await navigator.clipboard.writeText(currentPrompt);
  copyButton.textContent = "已复制";
  window.setTimeout(() => {
    copyButton.textContent = "复制";
  }, 1300);
});

document.querySelectorAll(".ai-link").forEach((link, index) => {
  link.addEventListener("click", async () => {
    if (!currentPrompt) return;
    await navigator.clipboard.writeText(currentPrompt);
    link.classList.add("copied");
    window.setTimeout(() => {
      link.classList.remove("copied");
    }, 1200);
  });
  link.dataset.promptMode = aiLinks[index].supportsPrompt ? "direct" : "copy";
});

renderLines(trigrams[7], trigrams[0], 1);
renderChangedLines(trigrams[7], trigrams[0], 0, true);
renderTrigramGrid();
updateAiLinks();
syncPromptLayout(mobilePromptLayout);
mobilePromptLayout.addEventListener("change", syncPromptLayout);
