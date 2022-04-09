// Implementation of hash table using array
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // class - private method
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // avoiding duplicate values
  values() {
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        //console.log(this.keyMap[i]);
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArr.includes(this.keyMap[i][j][1])) {
            valueArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valueArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        //console.log(this.keyMap[i]);
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(17);
console.log(ht.set("maroon", "#800000"));
console.log(ht.set("yellow", "#FFFF00"));
console.log(ht.set("olive", "#808000"));
console.log(ht.set("salmon", "#FA8072"));
console.log(ht.set("violet", "#FA8072"));
// console.log(ht.set("hello world", "goodbye!"));
// console.log(ht.set("dogs", "are cool"));
// console.log(ht.set("cats", "are fine"));
// console.log(ht.set("i love", "pizza!"));
console.log(ht);
console.log(ht.get("olive"));
console.log(ht.values());
console.log(ht.keys());
ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
