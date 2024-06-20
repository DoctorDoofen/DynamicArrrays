class DynamicArray {

  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize)
    this.capacity = defaultSize
    this.length = 0

  }

  read(index) {

    return this.data[index]
  }

  unshift(val) {
    for (let i = this.data.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val
    this.length++
  }

}

let test = new DynamicArray(8)
console.log(test)
test.unshift(3)
console.log(test)

module.exports = DynamicArray;
