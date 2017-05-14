var student = document.getElementById("student");
var notstudent = document.getElementById("notstudent");
var city = document.getElementById("city");
var school = document.getElementById("school");
function displayChange(){
	if(document.getElementById("select").style.display == "none"){
		document.getElementById("select").style.display = "block";
		document.getElementById("input").style.display = "none";
	}else{
		document.getElementById("select").style.display = "none";
		document.getElementById("input").style.display = "block";
	}
	
}
student.addEventListener("change",displayChange);
notstudent.addEventListener("change",displayChange);
function nameChange(){
	var checked = city.selectedIndex;
	switch(checked){
		case 0:
			school.options[0].text = "北京学校1";
			school.options[1].text = "北京学校2";
			school.options[2].text = "北京学校3";
			break;
		case 1:
			school.options[0].text = "上海学校1";
			school.options[1].text = "上海学校2";
			school.options[2].text = "上海学校3";
			break;
		case 2:
			school.options[0].text = "广州学校1";
			school.options[1].text = "广州学校2";
			school.options[2].text = "广州学校3";
			break;
	}	
}
city.addEventListener("change",nameChange);