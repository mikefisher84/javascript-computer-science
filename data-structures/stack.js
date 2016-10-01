function Stack() {
  this.size = 0;
  this.storage = 0;
}

Stack.prototype.push = function (data) {
  const size = this.size++;

  this.storage[size] = data;
};

Stack.prototype.pop = function () {
  const size = this.size;
  let deletedData;

  if (size) {
    deletedData = this.storage[size];

    delete this.storage[size];
    this.size--;

    return deletedData;
  }
  return 'empty stack';
};
