//import "./style.css";

// Display the popup
const popup = document.querySelector('.popup');
const page = document.querySelector('.page');
const arrow = document.querySelector('.pagedown');
const ribbon = document.querySelector('.ribbon');

setTimeout(() => {page.classList.add('dimmed')}, 500);
page.addEventListener('transitionend', () => {
    if (page.classList.contains('dimmed')) {
        popup.classList.add('show');
    }
});

document.addEventListener('click', (e) => {
    if (popup.classList.contains('show')) {
        popup.classList.remove('show');
        page.classList.remove('dimmed');
        ribbon.classList.add('show');
        arrow.style.display = 'block';
        console.log('Clicked, hiding popup');
    }
});

arrow.addEventListener('click', () => {
    if (arrow._enterAnim) arrow._enterAnim.cancel();
    arrow._enterAnim = arrow.animate(
        [
            { transform: 'translateX(-50%) translateY(15px)', opacity: 0 },
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
/*
import { createDraggable } from "animejs";

createDraggable('.ribbon', {
    container: document.body,
    containerPadding: 15,
    releaseStiffness: 20,
    releaseEase: 'out(3)',
    //x: { snap: [0, 200] }
});
*/
//draggable_ribbon.setX(15);
//draggable_ribbon.setY(15);
