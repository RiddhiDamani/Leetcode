// Source Sticker : SEATTLE
// Target : SEA, LET, TATTLE
function stickers(sticker, targetWord) {
  let stickerDict = {},
    targetWordDict = {};
  let maxStickers = 0,
    count = 0;

  if (targetWord.length === 0) {
    return -1;
  }

  // O(n)
  for (let i = 0; i < sticker.length; i++) {
    if (!stickerDict[sticker[i]]) {
      stickerDict[sticker[i]] = 1;
    } else {
      stickerDict[sticker[i]]++;
    }
  }

  // O(n)
  for (let i = 0; i < targetWord.length; i++) {
    if (!targetWordDict[targetWord[i]]) {
      targetWordDict[targetWord[i]] = 1;
    } else {
      targetWordDict[targetWord[i]]++;
    }
  }

  // Calculate max stickers required
  for (let x in targetWordDict) {
    if (stickerDict[x]) {
      maxStickers = Math.ceil(targetWordDict[x] / stickerDict[x]);
      if (maxStickers > count) {
        count = maxStickers;
      }
    } else {
      return -1;
    }
  }

  return count;
}

// function stickers(sticker, targetWord) {
//   let dict = {};
//   let maxStickers = 0;

//   dictionary(dict, sticker);
//   for (let i = 0; i < targetWord.length; i++) {
//     if (dict[targetWord[i]]) {
//       dict[targe2tWord[i]]--;
//     } else if (dict[targetWord[i]] === 0) {
//       dictionary(dict, sticker);
//       maxStickers++;
//     } else {
//       return -1;
//     }
//   }
//   maxStickers++;

//   return maxStickers;
// }

// function dictionary(dict, sticker) {
//   for (let i = 0; i < sticker.length; i++) {
//     if (!dict[sticker[i]]) {
//       dict[sticker[i]] = 1;
//     } else {
//       dict[sticker[i]]++;
//     }
//   }
// }

console.log(stickers("SEATTLE", "SEA")); // 1
console.log(stickers("SEATTLE", "LET")); // 1
console.log(stickers("SEA", "SEASEA")); // 2
console.log(stickers("SEATTLE", "")); // -1
console.log(stickers("", "")); // -1
console.log(stickers("", "SEA")); // -1
console.log(stickers("SEATTLE", "TATTLE")); // 2
console.log(stickers("SEATTLE", "TATASSS")); // 3
