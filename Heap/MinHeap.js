const Heap = require("./Heap");

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }
}

module.exports = MinHeap;
