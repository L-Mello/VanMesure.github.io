
var time = null;
var nodeList = [];//存储遍历结果
var i = 0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！

function preTraverse(node){
	if(node != null){
		nodeList.push(node);
		for(var i = 0; i < node.children.length; i++){
			preTraverse(node.children[i]);
		}
	}

}

function lastTraverse(node){
	if(node != null){
		
		for(var i = 0; i < node.children.length; i++){
			lastTraverse(node.children[i]);
		}
		nodeList.push(node);
	}
}

function changeColor(targetNodeId){
	time = setInterval(function(){
		if(i < nodeList.length){
			//先将目标节点变黑
			nodeList[i].style.backgroundColor = "orange";

			//再将非目标节点变白
			nodeList.forEach(function(node){
				if(node != nodeList[i]){
					node.style.backgroundColor = "#fff";
				}
			});
			if(targetNodeId){
				if(nodeList[i].id == targetNodeId){
					clearInterval(time);
				}
			}
			i++;
		}else{//让循环多进行一次，最后一次让所有的元素变白
			if(i == nodeList.length){
				nodeList[nodeList.length - 1].style.backgroundColor = "#fff";
			}
			clearInterval(time);
		}
		
	},500);
}




function startPreTraverse(){
	nodeList = [];//存储遍历结果
	i = 0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！
	var node = document.getElementById("n1");
	clearInterval(time);//如果调用该遍历前调用过其他变
	time = null;
	preTraverse(node);//构造nodeList,该数组中存储的为遍历结果
	changeColor();

}


function startLastTraverse(){
	nodeList = [];//存储遍历结果
	i = 0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！
	var node = document.getElementById("n1");
	clearInterval(time);//如果调用该遍历前调用过其他变
	time = null;
	lastTraverse(node);//构造nodeList,该数组中存储的为遍历结果
	changeColor();
}

function search(){
	var targetNodeId = document.getElementById("searchValue").value;
	if(targetNodeId){
		nodeList = [];//存储遍历结果
		i = 0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！
		var node = document.getElementById("n1");
		clearInterval(time);//如果调用该遍历前调用过其他变
		time = null;
		preTraverse(node);
		changeColor(targetNodeId);
	}else{
		alert("请输入n1-n21");
	}

}



document.getElementById("pre").addEventListener("click",startPreTraverse,false);
document.getElementById("last").addEventListener("click",startLastTraverse,false);
document.getElementById("startSearch").addEventListener("click",search,false);





