$(document).ready(function(){
	init();
});

function init() {
	var updateTimer = setInterval(update, 10);
	var positieGebruiker;
	var positieHand;
	input();
}

function update(){
	positieGebruiker = $("#camera").attr("position");
	rotatieGebruiker = $("#camera").attr("rotation");
	positieHand = {x: positieGebruiker.x, y: positieGebruiker.y - 5, z: positieGebruiker.z - 9};
	rotatieHand = {x: rotatieGebruiker.x, y: rotatieGebruiker.y, z: rotatieGebruiker.z};

	$("a-obj-model").hover( function() {
		});
}

function dragenObject(object){
	$(object).attr("position", "0 -2 -6");
	camera.add(object);
}

function draaienObject(graden, object, ms){
	$(object).animate({
		x: graden
	},{
		duration: ms,
		step: function(now) { $(this).attr("rotation", now); }
	});
}

function fadeObject(doorzichtigheid, object, ms){
	$(object).animate({
		x: doorzichtigheid
	},{
		duration: ms,
		step: function(now) { $(this).attr("opacity", now); }
	});
}

//$(object).attr({"position": ''+positieHand.x+' '+positieHand.y+' '+positieHand.z+'', "rotation": ''+rotatieHand.x+' '+rotatieHand.y+' '+rotatieHand.z+''});

function input(){
	$(".bed-object").click(function(){
		alert("ok");
		$("#object-title").attr({"bmfont-text": 'text:'+$(this).attr("id")+' fnt: ./fonts/DejaVu-sdf.fnt; fntImage: ./fonts/DejaVu-sdf.png'});
		if($(this).attr("id") != "bed"){
			$("#cursor").attr("material", "color: #00e203; shader: flat");
			dragenObject(this);
			//var draagUpdate = setInterval(dragenObject, 10, this);
		}
	});
}
