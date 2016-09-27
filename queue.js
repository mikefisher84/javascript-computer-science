function Queue() {
	this._oldestIndex = 1;
	this._newestIndex = 1;
	this._storage = {};
}

Queue.prototype.size = function () {
	return this._newestIndex - this.oldestIndex;
};

Queue.prototype.enqueue = function(data) {
	this._storage[this._newestIndex] = data;
	this._newestIndex++;
};

Queue.prototype.dequeue = function() {
	var oldestIndex = this._oldestIndex,
			deletedData = this._storage[oldestIndex];

	if(oldestIndex !== newestIndex) {
		delete this._storage[oldestIndex];
		this._oldestIndex++

		return deletedData;
	}

}
