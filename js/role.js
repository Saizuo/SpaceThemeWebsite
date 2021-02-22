var i = 0;
var txt = 'String role = "Developer";'
var speed = 100; /* The speed/duration of the effect in milliseconds */
var delay = 1000;
setTimeout(typeWriter, delay);
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("profile-role").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
  
}