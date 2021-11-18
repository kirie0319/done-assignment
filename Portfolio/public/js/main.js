'use strict'; 
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const spPrev = document.getElementById('spPrev');
  const spNext = document.getElementById('spNext');
  const show1 = document.getElementById('show1');
  const show2 = document.getElementById('show2');
  const point1 = document.getElementById('point1');
  const point2 = document.getElementById('point2');

  next.addEventListener('click', () => {
    show1.classList.remove('fadeout');
    show2.classList.remove('fadein');
    show1.classList.add('fadein');
    show2.classList.add('fadeout');
    point1.classList.remove('check');
    point2.classList.add('check');
  });

  spNext.addEventListener('click', () => {
    show1.classList.remove('fadeout');
    show2.classList.remove('fadein');
    show1.classList.add('fadein');
    show2.classList.add('fadeout');
    point1.classList.remove('check');
    point2.classList.add('check');
  });
  
  prev.addEventListener('click', () => {
    show1.classList.remove('fadein');
    show2.classList.remove('fadeout');
    show1.classList.add('fadeout');
    show2.classList.add('fadein');
    point1.classList.add('check');
    point2.classList.remove('check');
  });

  spPrev.addEventListener('click', () => {
    show1.classList.remove('fadein');
    show2.classList.remove('fadeout');
    show1.classList.add('fadeout');
    show2.classList.add('fadein');
    point1.classList.add('check');
    point2.classList.remove('check');
  });

  const drop =  document.getElementById('drop');
  const drop2 =  document.getElementById('drop2');
  const drop3 =  document.getElementById('drop3');
  const drop4 =  document.getElementById('drop4');
  window.addEventListener('DOMContentLoaded', function() {
    drop.style.visibility = 'hidden';
    drop.addEventListener('transitionend', function() {
      if (drop.className !== 'show' ) {
        drop.style.visibility = 'hidden';
      }
    });    
    window.addEventListener('scroll', function() {
      if( 500 < window.scrollY ) {
        drop.style.visibility = 'visible';
        drop.classList.add('show');
      } else{
        drop.classList.remove('show');
      }
    });
  });

  window.addEventListener('DOMContentLoaded', function() {
    drop2.style.visibility = 'hidden';
    drop2.addEventListener('transitionend', function() {
      if (drop2.className !== 'show' ) {
        drop2.style.visibility = 'hidden';
      }
    });    
    window.addEventListener('scroll', function() {
      if( 1200 < window.scrollY ) {
        drop2.style.visibility = 'visible';
        drop2.classList.add('show');
      } else{
        drop2.classList.remove('show');
      }
    });
  });
  window.addEventListener('DOMContentLoaded', function() {
    drop3.style.visibility = 'hidden';
    drop3.addEventListener('transitionend', function() {
      if (drop3.className !== 'show' ) {
        drop3.style.visibility = 'hidden';
      }
    });    
    window.addEventListener('scroll', function() {
      if(2000 < window.scrollY ) {
        drop3.style.visibility = 'visible';
        drop3.classList.add('show');
      } else{
        drop3.classList.remove('show');
      }
    });
  });
  window.addEventListener('DOMContentLoaded', function() {
    drop4.style.visibility = 'hidden';
    drop4.addEventListener('transitionend', function() {
      if (drop4.className !== 'show' ) {
        drop4.style.visibility = 'hidden';
      }
    });    
    window.addEventListener('scroll', function() {
      if( 2700 < window.scrollY ) {
        drop4.style.visibility = 'visible';
        drop4.classList.add('show');
      } else{
        drop4.classList.remove('show');
      }
    });
  });
  
  
};
