'use strict';

{
  const header = document.querySelector('.header');
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
    header.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    header.classList.remove('hide');
  });

  const mql = window.matchMedia('(min-width: 1261px)');
  const handleMediaQuery = function(mql) {
    if (mql.matches) {
      overlay.classList.remove('show');
      header.classList.remove('hide');
    } else {
      open.classList.remove('hide');
    }
  };

  mql.addListener(handleMediaQuery);

  handleMediaQuery(mql);
 
  setInterval(myChange, 3000);

  const setImage = [
    "img/home6.png",
    "img/home2.png",
    "img/home3.png",
    "img/home4.png",
    "img/home5.png",
    "img/home1.png",
  ];

  let myNowCnt = -1;
  let myflg = 0;
  function myChange() {
    myNowCnt = (myNowCnt < setImage.length - 1) ? myNowCnt + 1: 0;
    myflg = (myflg == 0) ? 1: 0;
    if (myflg == 0){
      document.getElementById('idshow1').src = setImage[myNowCnt];
      document.getElementById('idshow1').className = 'fadein';
      document.getElementById('idshow2').className = 'fadeout';
    } else {
      document.getElementById('idshow2').src = setImage[myNowCnt];
      document.getElementById('idshow1').className = 'fadeout';
      document.getElementById('idshow2').className = 'fadeoin';
    }
  }

  setInterval(slideshow, 10000);

  const setImg = [
    "img/iphone4.png",
    "img/iphone2.png",
    "img/iphone3.png",
    "img/iphone1.png"
  ];

  let counter = -1;
  let data = 0;
  function slideshow() {
    counter = (counter < setImg.length - 1) ? counter + 1: 0;
    data = (data == 0) ? 1: 0;
    if (data == 0){
      document.getElementById('show1').src = setImg[counter];
      document.getElementById('show1').className = 'fadein';
      document.getElementById('show2').className = 'fadeout';
    } else {
      document.getElementById('show2').src = setImg[counter];
      document.getElementById('show1').className = 'fadeout';
      document.getElementById('show2').className = 'fadeoin';
    }
  }
}