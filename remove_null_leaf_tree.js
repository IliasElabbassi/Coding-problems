var Node = function(val) {
	this.value = val
	this.right = null
	this.left = null
}

Node.prototype.addValue = function(valueToAdd) {
	if(valueToAdd.value <= this.value){
		if(this.right == null)
			this.right = new Node(valueToAdd)
		else
			this.right.addValue(valueToAdd)
	}
	else{
		if(this.left == null)
			this.left = new Node(valueToAdd)
		else
			this.left.addValue(valueToAdd)
	}
}

var tree = new Node(2)

tree.addValue(1);
tree.addValue(3);

console.log(tree)