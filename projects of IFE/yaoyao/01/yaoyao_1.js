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
	var result = document.getElementById("result");
	if(length >= 14 || length <= 4){
		result.innerHTML = "长度必须大于4且小于14";
		result.style.color = "red";
	}else{
		result.innerHTML = "通过！";
		result.style.color = "green";
	}
	return false;
}
	






	document.getElementById("searchBtn").addEventListener("click",query);

