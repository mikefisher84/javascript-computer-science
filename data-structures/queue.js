function Queue() {
  this.oldestIndex = 1;
  this.newestIndex = 1;
  this.storage = {};
}

Queue.prototype.size = function () {
  return this.newestIndex - this.oldestIndex;
};

Queue.prototype.enqueue = function (data) {
  this.storage[this.newestIndex] = data;
  this.newestIndex++;
};

Queue.prototype.dequeue = function () {
  const oldestIndex = this.oldestIndex;
  const deletedData = this.storage[oldestIndex];

  if (oldestIndex !== this.newestIndex) {
    delete this.storage[oldestIndex];
    this.oldestIndex++;

    return deletedData;
  }
  return 'empty queue';
};
