/*

    Welcome to the big brains of the website.
    JavaScript rocks! When it wants to. Sometimes it sucks.

*/ 

//-> Observer code for on-scroll animations. 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const waving = entry.target.querySelector('.waving-box')
        
        if (entry.isIntersecting) {
            waving.classList.add("animate__rubberBand");
            return; 
        }

        waving.classList.remove('animate__rubberBand');
    });
});

observer.observe(document.querySelector('.text-section-wrapper'));

