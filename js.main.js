'use strict';

{
  function play() {
    if (clearId === 'clear') {
      return;
    }
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      if (currentIndex < images.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0
      }
      images[currentIndex].classList.add('current');
      play();
    }, 2800);
  }
  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  // intersection observer API
  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        clearId = '';
        play;
      };
      if (!entry.isIntersecting) {
        console.log('aaa');
        clearId = 'clear';
      };
    })
  };

  const line = document.querySelector('.slideshow-line');
  const observer = new IntersectionObserver(callback);
  observer.observe(line);
}
