let tl = gsap.timeline();

tl.from('h1', { duration: 1, opacity: 0, x: -400, ease: 'slow' });

tl.from('h2', { duration: .5, opacity: 0, y: 200, ease: 'bounce' });