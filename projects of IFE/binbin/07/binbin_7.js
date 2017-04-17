/*var treeNode = function(data){
	this.value = data;
	this.leftChild = null;
	this.rightChild = null;
}
var tree = function(){
	this.head = null;
	this.size = 0;
	this.insert = function(data){
		if(this.head == null){
			this.head = new treeNode(data);
			size ++;
			return;
		}else{
			var tempNode = this.head;
			var newNode = new treeNode(data);
			while(1){
				if(tempNode.leftChild){//有左孩子
					if(tempNode.rightChild == null){//有左孩子,没有右孩子
						tempNode.rightChild = newNode;
					}else{//有左孩子，有右孩子


					}
				}
			}
		}

	}
}
*/

var a = document.getElementsByClassName("elm");//该数组为先序遍历结果
function white(x){
	for(var i = 0; i < a.length; i++){
		if(i == x){ continue;}
		a[i].style.backgroundColor = "white";
	}
}
function black(elm){
	elm.style.backgroundColor = "black";
}

var i = 0;
function fun(){
	black(a[i]);
	white(i);
	i++;
}

setInterval(fun,2000);
