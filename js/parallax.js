document.addEventListener("mousemove", parallax);
// document.querySelectorAll('.layer').forEach(layer => {
//     console.log(window.getComputedStyle(layer).left);
// });

function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('item-speed');
        const midpointX = window.innerWidth/2;
        const midpointY = window.innerHeight/2;

        const x = ((midpointX - e.pageX)*parseFloat(speed)/2);
        const y = ((midpointY - e.pageY)*parseFloat(speed)/2);
        
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
}