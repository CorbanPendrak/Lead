// Display the popup
const popup = document.querySelector('.popup');
const page = document.querySelector('.page');
const arrow = document.querySelector('.pagedown');

setTimeout(() => {page.classList.add('dimmed')}, 500);
page.addEventListener('transitionend', () => {
    if (page.classList.contains('dimmed')) {
        popup.classList.add('show');
    }
});

popup.addEventListener('click', () => {
    popup.classList.remove('show');
    page.classList.remove('dimmed');
    arrow.style.display = 'block';
    if (arrow._enterAnim) arrow._enterAnim.cancel();
    arrow._enterAnim = arrow.animate(
        [
            { transform: 'translateX(-50%) translateY(20px)', opacity: 0 },
            { transform: 'translateX(-50%) translateY(-8px)', opacity: 1 },
            { transform: 'translateX(-50%) translateY(0)', opacity: 1 }
        ],
        { duration: 600, easing: 'cubic-bezier(.22,.8,.26,1)', fill: 'forwards'}
    );
});


// Pages functionality
const pages = document.querySelectorAll('.page');
pages.forEach(page => {
    page.style.display = 'none';
});

var currPageIndex = 0;
function showPage(index) {
    pages[currPageIndex].style.display = 'none';
    pages[index].style.display = 'block';
    currPageIndex = index;
}
showPage(0);

document.querySelector('.pagedown').addEventListener('click', () => {
    showPage((currPageIndex + 1) % pages.length);
});


// Next arrow background color
