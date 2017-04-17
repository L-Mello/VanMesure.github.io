var time = null;
var changeTime = 0; //定时器循环次数
var nodeList = [];//存储遍历结果
var i = 0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！

function preTraverse(node){
	if(node != null){
		nodeList.push(node);
		preTraverse(node.children[0]);
		preTraverse(node.children[1]);
	}
}
function midTraverse(node){
	if(node != null){
		midTraverse(node.children[0]);
		nodeList.push(node);
		midTraverse(node.children[1]);
	}
}
function lastTraverse(node){
	if(node != null){
		lastTraverse(node.children[0]);
		lastTraverse(node.children[1]);
		nodeList.push(node);
	}
}
function changeColor(){

	
	time = setInterval(function(){
		if(i < nodeList.length){
			//先将目标节点变黑
			nodeList[i].style.backgroundColor = "#000";

			//再将非目标节点变白
			nodeList.forEach(function(node){
				if(node != nodeList[i]){
					node.style.backgroundColor = "#fff";
				}
			});
			i++;
		}else{//让循环多进行一次，最后一次让所有的元素变白
			if(i == nodeList.length+1){
				nodeList[nodeList.length - 1].style.backgroundColor = "#fff";
			}
			i++;
		}
		
		
	},500);
}




function startPreTraverse(){
	nodeList = [];//存储遍历结果
	i = 0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！
	var node = document.getElementById("d1");
	
	clearInterval(time);//如果调用该遍历前调用过其他变
	time = null;
	changeTime = 0;

	preTraverse(node);//构造nodeList,该数组中存储的为遍历结果

	changeColor();

}
function startMidTraverse(){
	nodeList = [];//存储遍历结果
	i = 0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！
	var node = document.getElementById("d1");
	
	clearInterval(time);//如果调用该遍历前调用过其他变
	time = null;
	changeTime = 0;

	midTraverse(node);//构造nodeList,该数组中存储的为遍历结果
	changeColor();

}
function startLastTraverse(){
	nodeList = [];//存储遍历结果
	i = 0;//用来遍历nodeList的计数器，调用changeColor之前一定要先清空！
	var node = document.getElementById("d1");
	
	clearInterval(time);//如果调用该遍历前调用过其他变
	time = null;
	changeTime = 0;

	lastTraverse(node);//构造nodeList,该数组中存储的为遍历结果

	changeColor();

}




document.getElementById("pre").addEventListener("click",startPreTraverse,false);
document.getElementById("mid").addEventListener("click",startMidTraverse,false);
document.getElementById("last").addEventListener("click",startLastTraverse,false);






