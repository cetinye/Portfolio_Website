document.addEventListener('DOMContentLoaded', () => {
    const timelineEvents = document.querySelectorAll('.infocontainer');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    timelineEvents.forEach(event => {
        observer.observe(event);
    });
});