function Stack() {
	this._size = 0;
	this._storage = 0;
}

Stack.prototype.push = function(data) {
	var size = this._size++;

	this._storage[size] = data;
}

Stack.prototype.pop = function() {
	var size = this._size,
			deletedData;
	if (size) {
		deletedData = this._storage[size];

		delete this._storage[size];
		this.size--;

		return deletedData
	}
}
