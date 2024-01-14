document.getElementById('menu').addEventListener('click', function(event) {
    event.preventDefault();
    var target = event.target;
    if (target.tagName === 'A') {
        window.location.hash = target.hash;
    }
});