document.addEventListener('DOMContentLoaded', () => {
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const images = document.querySelector('.carousel').children;
  const totalImages = images.length;
  let index = 0;
  let interval;


  prev.addEventListener('click', () => {
    clearInterval(interval);
    nextImage('prev');
  });

  next.addEventListener('click', () => {
    clearInterval(interval);
    nextImage('next');
  });

  function nextImage(direction) {
    if (direction === 'next') {
      index++;
      if (index === totalImages) {
        index = 0;
      }
    } else {
      if (index === 0) {
        index = totalImages - 1;
      } else {
        index--;
      }
    }

    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('main');
    }
    images[index].classList.add('main');
  }

  function startInterval() {
    interval = setInterval(() => {
      nextImage('next');
    }, 3000);
  }

  startInterval();

  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseover', () => {
    clearInterval(interval);
  });

  carousel.addEventListener('mouseout', () => {
    startInterval();
  });
});