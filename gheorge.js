class MyArray {
    constructor (arr) {
      this.arr = arr;
    }
    map (fn) {
      const tempArray = [];
      for (let i = 0; i < this.arr.length; i++) {
        tempArray[i] = fn(this.arr[i]);
      }
      return tempArray;
    }
    filter (fn) {
      const tempArray = [];
      for (let i = 0; i < this.arr.length; i++) {
        if (fn(this.arr[i])) {
          tempArray.push(this.arr[i]);
        }
      }
      return tempArray;
    }
  };