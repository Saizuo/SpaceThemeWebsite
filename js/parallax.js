document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('item-speed');
        const midpointX = window.innerWidth/2;
        const midpointY = window.innerHeight/2;

        const x = (midpointX - e.pageX)*parseFloat(speed);
        const y = (midpointY - e.pageY)*parseFloat(speed);
        
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
}