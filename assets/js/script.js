var start = document.getElementById('start');
var content = document.getElementById('content');
var ambience = new Audio('assets/audio/website ambien.mp3');
var click = new Audio('assets/audio/clicke.wav');

const imagePaths = [
    "assets/images/random/image.png",
    "assets/images/random/image2.png",
    "assets/images/random/image3.png",
    "assets/images/random/image4.png"
];

var isStarted = false;

start.addEventListener('click', function() {
    ambience.play();

    content.style.display = 'block';
    start.style.display = 'none';

    isStarted = true;
});

content.addEventListener('click', (event) => {
    click.play();
})

setInterval(changeTitle, 1000);

var titleNum = 0;
function changeTitle() {
    var titles = ["Buy Now!", "Limited Time Offer!", "Don't Miss Out!", "Exclusive Deal!", "Shop Today!"];
    document.title = titles[titleNum];
    titleNum++;

    if (titleNum >= titles.length) {
        titleNum = 0;
    }
}

Notification.requestPermission();

alert("PLEASE DON'T LEAVE");

if (Math.random() < 1 / 69)
{
    setInterval(images, 100);
}

function images()
{
    if (!isStarted)
        return;

    var img = document.createElement("img");
    img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    var src = document.getElementById("randomImages");
    
    img.style.position = "fixed";
    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.top = Math.random() * window.innerHeight  + "px";

    src.appendChild(img);
}