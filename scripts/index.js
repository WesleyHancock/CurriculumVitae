let gdIconsArr = Array.from(document.querySelectorAll('#GD .gd-text .software img'));
let webIconsArr = Array.from(document.querySelectorAll('#web .web-text .software img'));
let bool = true;

function readMore(e) {
    let text = e.srcElement.parentNode.previousElementSibling;
    text.classList.toggle('show-more');
    if(text.classList.contains('show-more')) {
        e.srcElement.innerText = 'Read less';
    } else {
        e.srcElement.innerText = 'Read more';
    }
}


setInterval(function() {
    bool = !bool;
    console.log(bool)
    if (bool === true) {
        gdIconsArr.forEach(function(element, index, arr) {
            element.style.transform = 'scale(1.16)';
            element.style.transition = 'all 0.6s ease-in-out';
        });
        webIconsArr.forEach(function(element, index, arr) {
            element.style.transform = 'scale(1.16)';
            element.style.transition = 'all 0.6s ease-in-out';
        });
    } else {
        gdIconsArr.forEach(function(element, index, arr) {
            element.style.transform = 'scale(1)';
        });
        webIconsArr.forEach(function(element, index, arr) {
            element.style.transform = 'scale(1)';
        });
    }
}, 2600);
