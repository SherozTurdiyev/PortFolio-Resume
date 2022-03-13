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
  let menuOpen = document.getElementById("menu__open")
  let divIcons = document.getElementById("divIcons")
  let x=document.getElementById("xIcons")
  menuOpen.style.transform= 'translateX(0)'
  menuOpen.style.backgroundColor="black"
  divIcons.style.display="none"
  x.style.display="block"
}
function menuClose() {
  let menuOpen = document.getElementById("menu__open")
  let divIcons = document.getElementById("divIcons")
  let x=document.getElementById("xIcons")
  menuOpen.style.transform= 'translateX(-400px)'
  menuOpen.style.backgroundColor="black"
  divIcons.style.display="block"
  x.style.display="none"
}

