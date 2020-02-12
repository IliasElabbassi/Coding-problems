function setup() {
	createCanvas(600,400);
	background(51);

	var Node = function(val) {
		this.value = val
		this.right = null
		this.left = null
	}

	Node.prototype.addNode = function(n) { // add value att random right or left

		// 2 -> left and 1 -> right
		var randomVal = Math.floor((Math.random() * 2) + 1)

		if(randomVal == 2) // left
			if (this.left == null) // we check if the spot is empty
				this.left = n
			else
				this.left.addNode(n) // recursive
		else if(randomVal == 1) // right
			if (this.right == null) // we check if the spot is empty
				this.right = n
			else
				this.right.addNode(n) // recursive
	}

	Node.prototype.removeZero = function() {
		if (this.left != null)
			this.left.visit()

		if (this.right != null)
			this.right.visit()

		console.log("removing " + this.value)
	}

	Node.prototype.visualize = function(x,y) {

		fill(255)
		ellipse(x,y, 25,25);
		fill(255,0,0);
		textSize();

		if(this.value != null)
			text(this.value, x-5,y+5);

		if (this.left != null)
			this.left.visualize(x+-40,y+40);

		if (this.right != null)
			this.right.visualize(x+40,y+40);
	}

	Node.prototype.removeZero = function() {
		if (this.left != null)
			this.left.removeZero()

		if (this.right != null)
			this.right.removeZero()

		if(this.right == null && this.left == null)
			if(this.value == 0 )
				this.value = null
	}

	var Tree = function(val){
		this.root = new Node(val)
	}

	Tree.prototype.addValue = function(val){
		var n = new Node(val)

		this.root.addNode(n)
	}

	Tree.prototype.visualize = function() {
		this.root.visualize(600/2, 15)
	}

	Tree.prototype.removeZero = function() {
		this.root.removeZero();
	}


	var tree = new Tree(1)

	for (var i = 0; i < 7; ++i) {
		randomVal = Math.floor((Math.random() * 2) + 1)
		if(randomVal == 2)
			tree.addValue(0)
		else if(randomVal == 1)
			tree.addValue(1)
	}

	console.log(tree)

	tree.removeZero()
	tree.visualize()
}