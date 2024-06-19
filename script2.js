const menutoggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
  menutoggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
  });