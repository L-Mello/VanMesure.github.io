
var activeBox = {
	top:0,
	left:0,
	directDeg: 0,
	getRotate: function(){
		return "rotate(" + this.directDeg + "deg)";
	},
	changeDirect: function(direct){
		switch(direct){
			case "left": this.directDeg += 270; break;
			case "right": this.directDeg += 90; break;
			case "back": this.directDeg +=180;
		}
		if(this.directDeg >= 360){
			this.directDeg -= 360;
		}
	},
	move: function(direct){
		direct = this.directDeg / 90;
		switch(direct){
			case 0:
				if(this.top == 0) return;
				this.top -= 40;
				break;
			case 1:
				if(this.left == 400) return;
				this.left += 40;
				break;
			case 2:
				if(this.top == 400) return;
				this.top += 40;
				break;
			case 3:
				if(this.left == 0) return;
				this.left -= 40; 
		}
	}
};

function drawBox(){
	var boxGraph = document.getElementById("activeBox");
	boxGraph.style.top = box.top + "px";
	boxGraph.style.left = box.left + "px";
	boxGraph.style.transform = box.getRotate();
}

function identifyCmd(){
	var cmd = document.getElementById("cmd").value;
	switch(cmd){
		case "GO": 
			box.move();
			drawBox();
			break;
		case "TUN LEF":
			box.changeDirect("left");
			drawBox();
			break;
		case "TUN RIG":
			box.changeDirect("right");
			drawBox();
			break;
		case "TUN BAC":
			box.changeDirect("back");
			drawBox();
			break;
	}
}

var box = activeBox;
document.getElementById("run").addEventListener("click",identifyCmd);


/*
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

document.getElementById("run").addEventListener("click",identifyCmd);


		*/