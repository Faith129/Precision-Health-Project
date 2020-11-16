
var tabButtons=document.querySelectorAll(".tabcontainer .buttoncontainer button");
var tabpanels=document.querySelectorAll(".tabcontainer .tabpanel");

function showPanel(panelIndex,colorCode){
tabButtons.forEach(function(node){
node.style.backgroundColor="";
node.style.color="";
});
tabButtons[panelIndex].style.backgroundColor="colorCode";
tabButtons[panelIndex].style.color="#e60f7f";
tabpanels.forEach(function(node){
node.style.display="none";
});
tabpanels[panelIndex].style.display="block";
tabpanels[panelIndex].style.backgroundColor="colorCode";
}

var mhtabButtons=document.querySelectorAll(".tabcontainer1 .buttoncontainer1 button");
var mhtabpanels=document.querySelectorAll(".tabcontainer1 .tabpanel1");

function mhshowPanel(panelIndex,colorCode){
mhtabButtons.forEach(function(node){
node.style.backgroundColor="";
node.style.color="";
});
mhtabButtons[panelIndex].style.backgroundColor="colorCode";
mhtabButtons[panelIndex].style.color="#e60f7f";
mhtabpanels.forEach(function(node){
node.style.display="none";
});
mhtabpanels[panelIndex].style.display="block";
mhtabpanels[panelIndex].style.backgroundColor="colorCode";
}



var mtabButtons=document.querySelectorAll(".tabcontainer2 .buttoncontainer2 button");
var mtabpanels=document.querySelectorAll(".tabcontainer2 .tabpanel2");

function pmhshowPanel(panelIndex,colorCode){
mtabButtons.forEach(function(node){
node.style.backgroundColor="";
node.style.color="";
});
mtabButtons[panelIndex].style.backgroundColor="colorCode";
mtabButtons[panelIndex].style.color="#e60f7f";
mtabpanels.forEach(function(node){
node.style.display="none";
});
mtabpanels[panelIndex].style.display="block";
mtabpanels[panelIndex].style.backgroundColor="colorCode";
}


var vmtabButtons=document.querySelectorAll(".tabcontainer3 .buttoncontainer3 button");
var vmtabpanels=document.querySelectorAll(".tabcontainer3 .tabpanel3");

function vmhshowPanel(panelIndex,colorCode){
vmtabButtons.forEach(function(node){
node.style.backgroundColor="";
node.style.color="";
});
vmtabButtons[panelIndex].style.backgroundColor="colorCode";
vmtabButtons[panelIndex].style.color="#e60f7f";
vmtabpanels.forEach(function(node){
node.style.display="none";
});
vmtabpanels[panelIndex].style.display="block";
vmtabpanels[panelIndex].style.backgroundColor="colorCode";
}




var pemtabButtons=document.querySelectorAll(".tabcontainer4 .buttoncontainer4 button");
var pemtabpanels=document.querySelectorAll(".tabcontainer4 .tabpanel4");

function peshowPanel(panelIndex,colorCode){
pemtabButtons.forEach(function(node){
node.style.backgroundColor="";
node.style.color="";
});
pemtabButtons[panelIndex].style.backgroundColor="colorCode";
pemtabButtons[panelIndex].style.color="#e60f7f";
pemtabpanels.forEach(function(node){
node.style.display="none";
});
pemtabpanels[panelIndex].style.display="block";
pemtabpanels[panelIndex].style.backgroundColor="colorCode";
}


var ahtabButtons=document.querySelectorAll(".tabcontainer5 .buttoncontainer5 button");
var ahtabpanels=document.querySelectorAll(".tabcontainer5 .tabpanel5");

function ashowPanel(panelIndex,colorCode){
ahtabButtons.forEach(function(node){
node.style.backgroundColor="";
node.style.color="";
});
ahtabButtons[panelIndex].style.backgroundColor="colorCode";
ahtabButtons[panelIndex].style.color="#e60f7f";
ahtabpanels.forEach(function(node){
node.style.display="none";
});
ahtabpanels[panelIndex].style.display="block";
ahtabpanels[panelIndex].style.backgroundColor="colorCode";
}


var asstabButtons=document.querySelectorAll(".tabcontainer6 .buttoncontainer6 button");
var asstabpanels=document.querySelectorAll(".tabcontainer6 .tabpanel6");

function medihistoryshowPanel(panelIndex,colorCode){
asstabButtons.forEach(function(node){
node.style.backgroundColor="";
node.style.color="";
});
asstabButtons[panelIndex].style.backgroundColor="colorCode";
asstabButtons[panelIndex].style.color="#e60f7f";
asstabpanels.forEach(function(node){
node.style.display="none";
});
asstabpanels[panelIndex].style.display="block";
asstabpanels[panelIndex].style.backgroundColor="colorCode";
}



document.getElementById("button").addEventListener("click", function(){
		document.querySelector(".popup").style.display="flex";
		});
		document.querySelector(".close").addEventListener("click", function(){
		document.querySelector(".popup").style.display="none";
		});
		
		
		document.getElementById("button1").addEventListener("click", function(){
		document.querySelector(".popup1").style.display="flex";
		});
		document.querySelector(".close1").addEventListener("click", function(){
		document.querySelector(".popup1").style.display="none";
		});
	

document.getElementById("button2").addEventListener("click", function(){
		document.querySelector(".popup2").style.display="flex";
		});
		document.querySelector(".close2").addEventListener("click", function(){
		document.querySelector(".popup2").style.display="none";
		});

document.getElementById("button3").addEventListener("click", function(){
		document.querySelector(".popup3").style.display="flex";
		});
		document.querySelector(".close3").addEventListener("click", function(){
		document.querySelector(".popup3").style.display="none";
		});
		
		
		
		document.getElementById("button4").addEventListener("click", function(){
		document.querySelector(".popup4").style.display="flex";
		});
		document.querySelector(".close4").addEventListener("click", function(){
		document.querySelector(".popup4").style.display="none";
		});
		
		
		document.getElementById("button5").addEventListener("click", function(){
		document.querySelector(".popup5").style.display="flex";
		});
		document.querySelector(".close5").addEventListener("click", function(){
		document.querySelector(".popup5").style.display="none";
		});