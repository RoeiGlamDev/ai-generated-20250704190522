// Add event listener to window load
window.addEventListener('load', () => {
    // Get all elements with class fade-in
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Add fade-in animation to elements
    fadeInElements.forEach((element) => {
        element.classList.add('fade-in');
    });
});

// Add event listener to window scroll
window.addEventListener('scroll', () => {
    // Get all elements with class manga-story
    const mangaStoryElements = document.querySelectorAll('.manga-story');

    // Add fade-in animation to elements when they come into view
    mangaStoryElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('fade-in');
        }
    });
});