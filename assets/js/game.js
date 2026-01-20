var loadingText = document.getElementById('loadingText');

setInterval(function() {
    loadingText.style.scale = document.timeline.currentTime / 10000 + 1;
}, 5);