/*
var rowObj = function(id){
	this.rowId = id;
	this.colState = [];
	this.init = function(){
		var childNodes = document.getElementById(id).childNodes;
		for(var i = 0; i < childNodes.length; i++){
			this.colState[i].push(childNodes[i]);
			this.colState[i].push(0);
		}
	};
	this.init();
}
function getActiveBox(direct){
	var activeBox = document.createElement("div");
	var activeBoxHead = document.createElement("div");
	var activeBoxTail = document.createElement("div");
	switch(direct){
		case "up": activeBox.class = "activeTop";break;
		case "down": activeBox.calss = "activeDown";break;
		case "left": activeBox.class = "activeLeft";break;
		case "right": activeBox.calss = "activeRight";break;
		default: return;
	}
	activeBoxHead.class = "head";
	activeBoxTail.class = "tail";
	activeBox.appendChild(activeBoxHead);
	activeBox.appendChild(activeBoxTail);
	return activeBox;
}

function buttonEvent(){
	var cmd = document.getElementById("cmd").value;
	var activeBox;
	switch(cmd){
		case "TUN LFT":
			rowArr[nowPosition.r].colState[nowPosition.c].children[0].class = "activeLeft";
	}
	
}

var rowArr = [];
var nowPosition = {
	r:0,
	c:0,
	direct:"up"
};
function init(){
	for(var i = 0; i < 10; i++){
		rowArr.push(new rowObj(i));
	}
	document.getElementById("run").addEventListener("click",buttonEvent);

	 
}
init();
*/
var nowPosition = {
	r:0,
	c:0,
	direct:"up"
};
function getBox(r,c){
	var row = document.getElementById(r);
	var box = row.children[c];
	
	return box;
}
function createBox(){
	var activeBox = document.createElement("div");
	var activeBoxHead = document.createElement("div");
	var activeBoxTail = document.createElement("div");
	activeBoxHead.className = "head";
	activeBoxTail.className = "tail";
	activeBox.appendChild(activeBoxHead);
	activeBox.appendChild(activeBoxTail);
	return activeBox;
}
function changeDirect(direct){
	var box = getBox(nowPosition.r,nowPosition.c);
	switch(direct){
		case "up": box.children[0].className = "activeTop";nowPosition.direct = "up"; break;
		case "down": box.children[0].className = "activeDown";nowPosition.direct = "down";break;
		case "left": box.children[0].className = "activeLeft";nowPosition.direct = "left";break;
		case "right": box.children[0].className = "activeRight";nowPosition.direct = "right";break;
	}
}
function go(){
	var nowBox = getBox(nowPosition.r,nowPosition.c);
	var nextBox = createBox();
	
	switch(nowPosition.direct){
		case "up":
			if(nowPosition.r == 0) return;
			nowBox.removeChild(nowBox.children[0]);
			nowPosition.r --;
			nowBox = getBox(nowPosition.r,nowPosition.c);
			nowBox.appendChild(nextBox);
			changeDirect("up");
			break;
		case "down":
			if(nowPosition.r == 9) return;
			nowBox.removeChild(nowBox.children[0]);
			nowPosition.r ++;
			nowBox = getBox(nowPosition.r,nowPosition.c);
			nowBox.appendChild(nextBox);
			changeDirect("down");
			break;
		case "left":
			if(nowPosition.c == 0) return;
			nowBox.removeChild(nowBox.children[0]);
			nowPosition.c --;
			nowBox = getBox(nowPosition.r,nowPosition.c);
			nowBox.appendChild(nextBox);
			changeDirect("left");
			break;
		case "right":
			if(nowPosition.c == 9) return;
			nowBox.removeChild(nowBox.children[0]);
			nowPosition.c ++;
			nowBox = getBox(nowPosition.r,nowPosition.c);
			nowBox.appendChild(nextBox);
			changeDirect("right");
			break;
	}
}
function identifyCmd(){
	var cmd = document.getElementById("cmd").value;
	switch(cmd){
		case "GO": 
			go();
			break;
		case "TUN LEF":
			if(nowPosition.direct == "up")		{ changeDirect("left"); return;}
			if(nowPosition.direct == "down")	{ changeDirect("right"); return;}
			if(nowPosition.direct == "left")	{ changeDirect("down"); return;}
			if(nowPosition.direct == "right")	{ changeDirect("up"); return;}
			break;
		case "TUN RIG":
			if(nowPosition.direct == "up")		{ changeDirect("right"); return;}
			if(nowPosition.direct == "down")	{ changeDirect("left"); return;}
			if(nowPosition.direct == "left")	{ changeDirect("up"); return;}
			if(nowPosition.direct == "right")	{ changeDirect("down"); return;}
			break;
		case "TUN BAC":
			if(nowPosition.direct == "up")		{ changeDirect("down"); return;}
			if(nowPosition.direct == "down")	{ changeDirect("up"); return;}
			if(nowPosition.direct == "left")	{ changeDirect("right"); return;}
			if(nowPosition.direct == "right")	{ changeDirect("left"); return;}
	}
}
document.getElementById("run").addEventListener("click",identifyCmd);


		