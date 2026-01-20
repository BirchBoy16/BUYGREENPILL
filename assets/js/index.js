var buyNow = document.getElementById('buyNow');
var youtube = document.getElementById('youtube');
var x = document.getElementById('x');

buyNow.addEventListener('click', function() {
    location.href = "https://www.youtube.com/watch?v=g-lBQAoc6W0"
});

youtube.addEventListener('click', function() {
    window.open("https://www.youtube.com/@birchboy16", "_blank").focus();
});

x.addEventListener('click', function() {
    window.open("https://x.com/BirchBoy16", "_blank").focus();
});