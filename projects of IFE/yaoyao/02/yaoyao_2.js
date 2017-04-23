function query(){
	var target = document.getElementById("inputValue").value;
	var length = 0;
	for(var i = 0; i < target.length; i++){
		if (target[i].charCodeAt() > 255 || target[i].charCodeAt() < 0 ){
			length += 2;
		}else{
			length++;
		}
	}
	return length;
}

function result(){
	var result = query();
	var p = document.getElementById("text");
	var inputValue = document.getElementById("inputValue");
	if(result >= 14 || result <= 4){
		p.innerHTML = "长度必须大于4且小于14";
		p.style.color = "red";
		inputValue.style.border = "1px solid red";
		return false;
	}else{
		p.innerHTML = "通过！";
		p.style.color = "green";
		inputValue.style.border = "1px solid green";
		return true;
	}
}


function showTextFocus(){
	var text = document.getElementById("text");
	text.innerHTML = "长度大于4小于14，中文算两个字符";
	text.style.color = "#eee";
}

function submit(){
	if(result()){
		alert("成功！");
	}else{
		alert("失败");
	}
}



var searchBox = document.getElementById("inputValue");
searchBox.addEventListener("focus",showTextFocus);
searchBox.addEventListener("blur",result);
document.getElementById("searchBtn").addEventListener("click",submit);

