
function slider(obj, abc){
    let img=document.getElementsByClassName('img');
    let btn=document.querySelectorAll('button');
    for (let i = 0; i < btn.length; i++) {
        btn[i].className=btn[i].className.replace('btn__active', ' ')
        
    }
 obj.currentTarget.classList.add('btn__active');

 for (let j = 0; j < img.length; j++) {
      img[j].className=img[j].className.replace('block', ' ')
     }
     document.getElementById(abc).classList.add('block');
}

document.getElementById("btn__1").click();

//  Slider 2


function slider__2(obj2, abc) {
    let slider__img=document.getElementsByClassName('slider__img');
    let  ctn__img=document.getElementsByClassName('ctn__img');

    for (let i = 0; i < ctn__img.length; i++) {
        ctn__img[i].className=ctn__img[i].className.replace("opacity-1", ' ');  
    }
    obj2.currentTarget.classList.add('opacity-1');

    for (let i = 0; i < slider__img.length; i++) {
        slider__img[i].className=slider__img[i].className.replace('block-2', ' ');
        
    }
    document.getElementById(abc).classList.add('block-2');

 
}   
document.getElementById("ctn_1").click();

