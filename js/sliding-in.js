const profileHeadings = document.querySelector('#profile-headings');
const profilePhoto = document.querySelector('#profile-picture');
const profileDescription = document.querySelector('#professional-description');

function debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;
            
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        
        clearTimeout(timeout);

        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
};


function checkSlide(item) {
    // half way through the item
    const slideInAt = (window.scrollY + window.innerHeight) - item.height / 2;
    // bottom of the item
    const itemBottom = item.offsetTop + item.height;
    // item is hal shown
    const isHalfShown = slideInAt > item.offsetTop;
    // item is not scrolled past
    const isNotScrolledPast = window.scrollY < itemBottom;

    if(isHalfShown && isNotScrolledPast) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
}

window.addEventListener('scroll', debounce(checkSlide(profileHeadings)));
window.addEventListener('scroll', debounce(checkSlide(profilePhoto)));
window.addEventListener('scroll', debounce(checkSlide(profileDescription)));
