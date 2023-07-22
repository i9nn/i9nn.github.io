// Moving of the about-us container on mouse move
const constraint = 120;
const container = document.getElementById("title");
const layer = document.getElementById("title-container");

// Calculate the rotation of the board relative to the mouse. 
function transforms(x, y, el) {
	let box = el.getBoundingClientRect();
	let calcX = -(y - box.y - (box.height / 2)) / constraint;
	let calcY = (x - box.x - (box.width / 2)) / constraint;

	return "perspective(150px) "
	+ "   rotateX("+ calcX +"deg) "
	+ "   rotateY("+ calcY +"deg) ";
};

function transformElement(el, xyEl) {
	el.style.transform  = transforms.apply(null, xyEl);
}

// When the mouse is on this element, apply the transformation.
container.onmousemove = function(e) {
    layer.classList.remove("reset-anim");

	let xy = [e.clientX, e.clientY];
	let position = xy.concat([layer]);

	window.requestAnimationFrame(function(){
		transformElement(layer, position);
	});
};

layer.onmouseleave = function(e) {
    layer.classList.add("reset-anim");
    setTimeout(function() {
        layer.style.transform = null;
    }, 1000);
}