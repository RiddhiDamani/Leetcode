// Source : SEATTLE
// Target : SEA, LET, TATTLE

function stickers(sticker, targetWord) {
  let dict = {};
  let maxStickers = 0;

  dictionary(dict, sticker);
  for (let i = 0; i < targetWord.length; i++) {
    if (dict[targetWord[i]]) {
      dict[targetWord[i]]--;
    } else if (dict[targetWord[i]] === 0) {
      dictionary(dict, sticker);
      maxStickers++;
    } else {
      return -1;
    }
  }
  maxStickers++;

  return maxStickers;
}

function dictionary(dict, sticker) {
  for (let i = 0; i < sticker.length; i++) {
    if (!dict[sticker[i]]) {
      dict[sticker[i]] = 1;
    } else {
      dict[sticker[i]]++;
    }
  }
}

console.log(stickers("SEATTLE", "SEA"));
console.log(stickers("SEATTLE", "LET"));
console.log(stickers("SEA", "SEASEA"));
console.log(stickers("SEATTLE", ""));
console.log(stickers("", ""));
console.log(stickers("", "SEA"));
console.log(stickers("SEATTLE", "TATTLE"));
console.log(stickers("SEATTLE", "TATASSS"));
