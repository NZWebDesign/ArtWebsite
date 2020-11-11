const timeLine = gsap.timeline({defaults:{ease: 'power1.out'}})

timeLine.to('.text', {y:'0%', duration: 1, stagger: 0.50});
timeLine.to('slider', {y: "-100%,", duration:1.5, delay: 0.5});
timeLine.to(".intro", {y:"-100%", duration: 1}, "-=1");
timeLine.fromTo(".navIndexPage", {opacity:0}, {opacity: 1, duration:1});
timeLine.fromTo(".bigText", {opacity:0}, {opacity: 1, duration:1}, '-=1');
timeLine.fromTo(".smallText", {opacity:0}, {opacity: 1, duration:1}, '-=1');
timeLine.fromTo(".hiddenPictures", {opacity:0}, {opacity: 1, duration:1}, '-=1');
timeLine.fromTo(".footer", {opacity:0}, {opacity: 1, duration:1}, '-=1');

/* ++++ Effects for pages other than index.html page ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*timeLine.to('.text1', {y:'0%', duration: 1, stagger: 0.50});*/
/*timeLine.to('slider1', {y: "-100%,", duration:1, delay: 0.1});*/
/*timeLine.to(".intro1", {y:"-100%", duration: 1}, "-=1");*/
timeLine.fromTo(".navClass", {opacity:0}, {opacity: 1, duration:1}, '1');
timeLine.fromTo(".bigText1", {opacity:0}, {opacity: 1, duration:1}, '1');
timeLine.fromTo(".smallText1", {opacity:0}, {opacity: 1, duration:1}, '1');
timeLine.fromTo(".hiddenPictures1", {opacity:0}, {opacity: 1, duration:1}, '1');
timeLine.fromTo(".footer1", {opacity:0}, {opacity: 1, duration:1}, '1');