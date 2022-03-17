window.addEventListener("DOMContentLoaded", ()=>{
  let loader=document.querySelector('.loader');
  let box=document.querySelector('#box')
  setTimeout(() => {
  
  loader.style.opacity=0;
  setTimeout(() => {
      loader.style.display="none"
      box.style.display='flex'
  }, 500);
}, 500);

})
  
  



var options = {
  strings: ['<i>  Web Devoloper', ' UI/UX Designer ', 'Freelancer'],
  typeSpeed: 40,
  backSpeed: 40,
  startDelay: 1000,
  backDelay:1000,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
  cursorChar: '|',
  autoInsertCss: true,
};

var typed = new Typed('.element', options);


function openPage(evt, Page) {
  var i, tabcontent, tablinks;
  let menu=document.getElementById('menu__open')
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Page).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();






































function menuOpen() {
 let left =document.querySelector('.left')
 left.classList.toggle('menu__open__noActive')
 left.classList.toggle('menu__open__active')
document.querySelector('.bir').classList.toggle('bir_x')
document.querySelector('.ikki').classList.toggle('ikki_x')
document.querySelector('.mobil').classList.toggle("black")
document.querySelector('.mobil').classList.toggle("transparent")
}


