/*
基本思路： 
1.
处理文本，首先将文本所有分隔符（数字与大小写字母除外的所有符号）统一替换成
| 符，连续的分隔符视作一个分隔符。然后剔除文本末尾的分隔符。
将所有文本作为一个字符串存入字符串副本newtext中。

2.
将文本副本按照|符用 split()方法 分割成数组arr

3.
对于数组中的每一项(假如用arr[i]表示)： 对查询值使用indexOf()方法，返回一个数组index，
该数组储存着查询值的每一项在arr[i](注意这是一个字符串)中首次出现的位置，没有出现则
返回-1

4.
分析3中返回的index数组，如果index数组中的数没有-1并且严格增序，则说明arr[i]这一项
与查询值符合模糊匹配规则。计入下arr[i]的值。所有的i值构成一个数组match。
换句话硕，match数组中存储着所有满足条件的下标值（arr）的下标

5.
对于arr中的内容进行dom元素合成：
下标不在match数组中的，直接拼接，
下标在match数组中的，先将文本值拼接到<span>上(记得加上class),然后再进行拼接，
最终将拼接后的html元素展现到页面上
通过span来改变颜色，标识匹配值
*/

var text = document.getElementById("text");
var btn = document.getElementById("btn");
btn.addEventListener("click",match);

function isValue(str){
	var asc = str.charCodeAt();
	if((asc >= 48 && asc <= 57) || 	//如果是数字或者大小写字母
		(asc >= 65 && asc <= 90) ||
		(asc >=97 && asc <= 122)){
			return true;
	}else{
		return false
	}
}

//getArr()用来将文本框中的字符串中的所有分隔符替换成 | 符号，并且返回以 | 作为分隔符分割后的字符串数组
function getArr(){
	//下面用来处理结尾有一个或多个分隔符的情况
	var spcae = 0; //定义字符串末尾分隔符数量,
	for(var i1 = text.value.length - 1; !isValue(text.value[i1]) && i1 >= 0; i1--){
		spcae++;//如果判断到分隔符，则分隔符数量加1
	}

	var textValue = text.value;
	var newtext = "";//定义字符串副本
	for(var i = 0; i < textValue.length - spcae; i++){
		if(isValue(textValue[i])){
			newtext += textValue[i];
		}else{
			for(i; !isValue(textValue[i+1]); i++){}
			newtext += "|";
		}
	}
	return newtext.split("|");
}

//判断arr是否为升序
function order(arr){
	if(arr.length == 0){
		return false;
	}else if(arr.length == 1){
		if(arr[0] == -1){
			return false;
		}else{
			return true;
		}
	}else if(arr.indexOf(-1) != -1){//如果存在-1，则查询值中存在字符不属于匹配值，此升序无效
		return false;
	}else{
		for(var i = 0; i < arr.length-1; i++){
			if(arr[i] > arr[i+1]){
				break;
			}
		}
		if(i == arr.length - 1){
			return true;
		}else{
			return false;
		}
	}
	//这里违背了函数设计的基本原则，即一个函数应该只有一个出口，这样写是因为本人水平暂时只能写成这样O(∩_∩)O；
}

function match(){
	var strArr = getArr();		//获取分割后的字符串数组
	var matchValue = document.getElementById("input").value;	//获取匹配值
	var indexArr = []; //存储满足匹配条件的值的下标（对应strArr数组）
	//alert(matchValue.length);
	indexArr = strArr.map(function(str,idx){
		var index = []; //matchValue的每一个字符在strArr单个元素中的起始位置组成的数组，如果该数组为升序，则说明匹配成功
		for(var i = 0; i < matchValue.length; i++){
			index.push(str.indexOf(matchValue[i]));
		}	
		if(order(index)){
			return idx;
		}else{
			return -1;
		}
	});
	
	//获取匹配值下标结束，下面开始拼接html元素

	var pElement = document.createElement("p");
	var textElement;
	strArr.forEach(function(str,index){
		textElement = null;
		if(indexArr.indexOf(index) != -1){
			textElement = document.createElement("span");
			textElement.setAttribute("class","match");
			textElement1 = document.createTextNode(str + " ");
			textElement.appendChild(textElement1);
			pElement.appendChild(textElement);
		}else{
			textElement = document.createTextNode(str + " ");
			pElement.appendChild(textElement); 
		}
	});

	document.getElementById("matchText").appendChild(pElement);

}
