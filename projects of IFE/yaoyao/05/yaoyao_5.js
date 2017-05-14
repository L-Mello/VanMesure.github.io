
var activeBox = {
	top:0,
	left:0,
	directDeg: 0,
	getRotate: function(){
		return "rotate(" + this.directDeg + "deg)";
	},
	changeDirect: function(direct){
		switch(direct){
			case "left": this.directDeg -= 90; break;
			case "right": this.directDeg += 90; break;
			case "back": this.directDeg +=180;
		}
		
	},
	
	move: function(direct){
		if(direct != undefined){
			switch(direct){
				case "up": direct = 0;break;
				case "right": direct = 1;break;
				case "down": direct = 2;break;
				case "left": direct = 3;break;
			}
		}else{
			direct = this.directDeg;
			while(direct < 0){
				direct += 360;
			}
			while(direct >= 360){
				direct -= 360;
			}
			direct /= 90;
			
		}
		
		switch(direct){
			case 0:
				if(this.top == 0) return;
				this.top -= 40;
				break;
			case 1:
				if(this.left == 360) return;
				this.left += 40;
				break;
			case 2:
				if(this.top == 360) return;
				this.top += 40;
				break;
			case 3:
				if(this.left == 0) return;
				this.left -= 40; 
		}
		
	},
	move2: function(direct){
		this.move(direct);
		directDeg = this.directDeg;
		while(direct < 0){
			directDeg += 360;
		}
		while(directDeg >= 360){
			directDeg -= 360;
		}
		directDeg /= 90;
		switch(direct){
			case "up": this.directDeg += (0 - directDeg)*90;break;
			case "right": this.directDeg += (1 - directDeg)*90;break;
			case "down": this.directDeg += (2 - directDeg)*90;break;
			case "left": this.directDeg += (3 - directDeg)*90;
		}
	}
	
	/*
	correct: function(){
		while(this.directDeg < 0){
			this.directDeg += 360;
			}
		while(this.directDeg >= 360){
			this,directDeg -= 360;
		}
	}
	*/
};

function drawBox(){
	var boxGraph = document.getElementById("activeBox");
	boxGraph.style.top = box.top + "px";
	boxGraph.style.left = box.left + "px";
	boxGraph.style.transform = box.getRotate();
}
/*
TRA LEF：向屏幕的左侧移动一格，方向不变
TRA TOP：向屏幕的上面移动一格，方向不变
TRA RIG：向屏幕的右侧移动一格，方向不变
TRA BOT：向屏幕的下面移动一格，方向不变
MOV LEF：方向转向屏幕左侧，并向屏幕的左侧移动一格
MOV TOP：方向转向屏幕上面，向屏幕的上面移动一格
MOV RIG：方向转向屏幕右侧，向屏幕的右侧移动一格
MOV BOT：方向转向屏幕下面，向屏幕的下面移动一格
*/
function identifyCmd(){
	var cmd = document.getElementById("cmd").value;
	switch(cmd){
		case "GO": 
			box.move();
			break;
		case "TUN LEF":
			box.changeDirect("left");
			break;
		case "TUN RIG":
			box.changeDirect("right");
			break;
		case "TUN BAC":
			box.changeDirect("back");
			break;

		case "TRA LEF":
			box.move("left");
			break;
		case "TTRA TOP":
			box.move("up");
			break;
		case "TRA RIG":
			box.move("right");
			break;
		case "TRA BOT":
			box.move("down");
			break;

		case "MOV LEF":
			
			box.move2("left");
			break;
		case "MOV RIG":
		
			box.move2("right");
			break;
		case "MOV TOP":
			box.move2("up");
			break;
		case "MOV BOT":
			box.move2("down");
			break;
	}
	drawBox();
}

var box = activeBox;
document.getElementById("run").addEventListener("click",identifyCmd);


