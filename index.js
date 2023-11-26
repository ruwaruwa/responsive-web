const humburger=document.querySelector('.hamburger')
// const navtwo=document.querySelector('.nav-menu')
//  const hum=document.querySelector('.nav-menu')
const navMenu= document.querySelector('.nav-menu')
humburger.addEventListener('click',()=>{
    humburger.classList.toggle('active')
    navMenu.classList.toggle('active');

})
// document.querySelectorAll('.nav-link'.forEach (element =>  
//      element.addEventListener('click' ,() =>{
//     humburger.classList.remove('active');
//      navMenu.classList.remove('active')
// })
// ))
humburger.addEventListener('click',function(){
    // hum.style.display='none'
  
//   navMenu.style.display = 'block'
//     navtwo.style.display='none';
})
//  humburger.addEventListener('click',function(){
//     humburger.style.display='block'
//     navtwo.style.display = 'block'
//     navMenu.style.display='none';

//     })
