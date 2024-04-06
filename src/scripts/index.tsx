import "../css/style.css";

const title: HTMLElement = document.getElementById("card"); 
const container: HTMLElement = document.getElementById("card-cont");
const circle: HTMLElement = document.getElementById("circle");

const limit: number = 270;

function calculateRotation(x: number, y: number, el: HTMLElement): string {
	const box = el.getBoundingClientRect();
	const calcX = -(y - box.y - (box.height / 2)) / limit;
	const calcY = (x - box.x - (box.width / 2)) / limit;

	return "perspective(150px) " + "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
}

function transformElement(el: HTMLElement, xyEl: (number | HTMLElement)[]) {
	el.style.transform = calculateRotation.apply(null, xyEl);
    el.style.transitionDuration = "0.1s";
}

container.onmousemove = function(e) {
	const xy : (number | HTMLElement)[] = [e.clientX, e.clientY];
	let position = xy.concat([container!]);

	window.requestAnimationFrame(function(){
        transformElement(title!, position);

        const box = title.getBoundingClientRect();
        circle.style.top = e.clientY - box.y - circle.offsetHeight / 2 + "px";
        circle.style.left = e.clientX - box.x - circle.offsetWidth / 2 + "px";
        circle.style.transitionDuration = "0.05s";
	});
};

container.onmouseenter = function() {
    circle.style.opacity = "1";
    circle.style.transitionDuration = "0.5s";
}

container.onmouseleave = function() {
    window.requestAnimationFrame(function(){
        title.style.transform = "perspective(150px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
        title.style.transitionDuration = "0.5s";

        circle.style.transitionDuration = "0.5s";
        circle.style.opacity = "0";
	});
}