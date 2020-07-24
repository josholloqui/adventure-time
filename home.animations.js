/* eslint-disable */
let tl = gsap.timeline();

tl.from('h1', { duration: 1, opacity: 0, x: -400, ease: 'slow' });

tl.from('h2', { duration: .5, opacity: 0, y: 200, ease: 'bounce' });

gsap.from('.choose', {
    scrollTrigger: {
        trigger:'.choose',
        start: 'top center',
        toggleActions: 'restart pause none none'
    }, x: -600, opacity: 0, duration: 1.25, ease: 'bounce' });

gsap.from('button', {
    scrollTrigger: {
        trigger:'button',
        toggleActions: 'restart pause none none'
    }, y: 400, opacity: 0, duration: 1, ease: 'slow' });
