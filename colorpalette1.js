javascript:(function(){
//text colors guide:
/*
	0 - timer reset
	1 - other text / timer during
	2 -  timer fail
	3 - successful
*/
//Carykh minesweeper classic skin - Gankuro(TheRedArmy)
//window.open("https://cdn.rawgit.com/Gankuro/mpalettes/master/test.html");
alert("you have launched Palettes for minesweeper, this program was made by gankuro: press 1 to go to the guide, and press 2 to input a palette code");
var colors; //= prompt("Paste code for palette here")
var pos = 0;
//classic palette code: bfbebbA0A0A0000000000000C0000000A0009E9E9EFF00000040FF008000FF0000000080800080008080606060000000
document.onkeydown = keyDown;
function keyDown(){
	event = event || window.event;
        var e = event.keyCode;
	if(e==50){
		bgColor = "#";
		tileColor = "#";
		textColors = ["#","#","#","#"];
		buttonColor = "#";
		deathColor = "#";
		numberColors = [tileColor, "#","#","#","#","#","#","#","#"];
		pos = 0;
		colors = prompt("Paste code for palette here");
		for(var i = 0; i < colors.length/6; i++){
			for(var x = 0; x < 6; x++){
				if(pos == 0){
				   bgColor = bgColor.concat(colors.charAt((i*6)+x));
				}
				if(pos == 1){
				   tileColor = tileColor.concat(colors.charAt((i*6)+x));
				}
				if(pos == 2){
				   textColors[0] = textColors[0].concat(colors.charAt((i*6)+x));
				}
				if(pos == 3){
				   textColors[1] = textColors[1].concat(colors.charAt((i*6)+x));   
				}
				if(pos == 4){
				   textColors[2] = textColors[2].concat(colors.charAt((i*6)+x));
				}
				if(pos==5){
				   textColors[3] = textColors[3].concat(colors.charAt((i*6)+x));
				}
				if(pos==6){
				   buttonColor = buttonColor.concat(colors.charAt((i*6)+x));
				}
				if(pos == 7){
				   deathColor = deathColor.concat(colors.charAt((i*6)+x));	   
				}
				if(pos==8){
				   numberColors[1] = numberColors[1].concat(colors.charAt((i*6)+x));				  
				}
				if(pos==9){
				   numberColors[2] = numberColors[2].concat(colors.charAt((i*6)+x));				  
				}
				if(pos==10){
				   numberColors[3] = numberColors[3].concat(colors.charAt((i*6)+x));				  
				}
				if(pos==11){
				   numberColors[4] = numberColors[4].concat(colors.charAt((i*6)+x));				  
				}
				if(pos==12){
				   numberColors[5] = numberColors[5].concat(colors.charAt((i*6)+x));				  
				}
				if(pos==13){
				   numberColors[6] = numberColors[6].concat(colors.charAt((i*6)+x));				  
				}
				if(pos==14){
				   numberColors[7] = numberColors[7].concat(colors.charAt((i*6)+x));				  
				}
				if(pos==15){
				   numberColors[8] = numberColors[8].concat(colors.charAt((i*6)+x));				  
				}
			}
			pos++;
		}
	}
	if(e==49){
		window.open("https://rawgit.com/Gankuro/mpalettes/master/test.html");
	}
}
/*
bgColor = "#bfbebb";
tileColor = "#A0A0A0";
textColors = ["#000000","#000000","#C00000","#00A000"];
buttonColor = "#9E9E9E";
deathColor = "#FF0000";
numberColors = [tileColor, "#0040FF","#008000","#FF0000","#000080","#800080","#008080","#606060","#000000"];
bfbebbA0A0A0000000000000C0000000A0009E9E9EFF00000040FF008000FF0000000080800080008080606060000000
*/

/*
Basic colors
bgColor = "#AADCFF";
tileColor = "#A0A0A0";
textColors = ["#8094A8","#000000","#C00000","#00A000"];
buttonColor = "#50A0B4";
deathColor = "#FF0000";
numberColors = [tileColor, "#0040FF","#008000","#FF0000","#000080","#800080","#008080","#606060","#000000"];
*/
	
})();
