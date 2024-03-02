function checkDate(word) {
  if (word.includes(":") || word.includes("h")) {
    return {
      type: "hour",
      value: word,
    };
  } else if (word.includes("/") || word.includes("-") || word.includes(".")) {
    return {
      type: "date",
      value: word,
    };
  }
  return null;
}

function checkSign(word) {
  const VWordSign = [
    "vào",
    "lúc",
    "ngày",
    "hạn chót",
    "at",
    "on",
    "at on",
    "deadline",
    "due",
  ];
  return VWordSign.includes(word);
}

function detectDate(text) {
  let date = [];

  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
    if (checkSign(words[i]) && i + 1 < words.length) {
      const temp = checkDate(words[i + 1]);
      date[temp.type == "hour" ? 0 : 1] = temp.value;
    }
  }

  return date;
}

export function useDetectDate() {
  return detectDate;
}
