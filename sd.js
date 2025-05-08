var bb1 = document.querySelector('.b1');
var box = document.querySelector('.box');
var yes = document.querySelector('.y');
var no = document.querySelector('.n');
bb1.innerHTML = 'متابعة';

bb1.addEventListener('click',()=>{
if (bb1.innerHTML == 'إلغاء المتابعة'){
    box.classList.add('so');
}else{
if (bb1.innerHTML == 'اشتراك'){
bb1.innerHTML = 'متابعة';
bb1.style.background= '#eee';
bb1.style.css = 'rgb(0, 0, 0)';
bb1.style.color = 'rgb(0, 0, 0)';
}
}
})

yes.addEventListener('click',()=>{
    box.classList.remove('so');
    bb1.innerHTML = 'تابع';
    bb1.style.background= '#fff';
    bb1.style.color = 'rgb(0, 0, 0)';
    
})

no.addEventListener('click',()=>{
    box.classList.remove('so');

})

bb1.addEventListener("mousemove",()=>{
if (bb1.innerHTML == 'متابعة'){
    bb1.innerHTML = 'إلغاء المتابعة';
    bb1.style.background= '#f11111';
    bb1.style.css = 'rgb(0, 0, 0)';
    bb1.style.color = 'rgb(255, 255, 255)';
}else{
    if (bb1.innerHTML== 'تابع'){
    bb1.innerHTML = 'اشتراك';
    bb1.style.background= 'rgb(4, 138, 255)';
    bb1.style.css = 'rgb(0, 0, 0)';
    bb1.style.color = 'rgb(255, 255, 255)';
}}
});

bb1.addEventListener("mouseout",()=>{
    if (bb1.innerHTML == 'إلغاء المتابعة'){  
    bb1.innerHTML = 'متابعة';
    bb1.style.background= '#eee';
    bb1.style.css = 'rgb(0, 0, 0)';
    bb1.style.color = 'rgb(0, 0, 0)';
}else{
if (bb1.innerHTML== 'اشتراك'){
 bb1.innerHTML = 'تابع';
    bb1.style.background= '#fff';
    bb1.style.color = 'rgb(0, 0, 0)';
}
}
});