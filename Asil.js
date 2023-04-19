let section = document.querySelector(".section")
let uio = document.querySelector(".right")


let mass = [{
    i:0,
    count:1,
    rasm:"./img/Ellipse 5.png",
    yozuv:"Smashed Avo",
    yozuv1:"20.00$",

    btn3:"Х"
},{
    i:0,
    count:1,
    rasm:"./img/Ellipse 5.png",
    yozuv:"Smashed Avo",
    yozuv1:"20.00$",

    btn3:"Х"
},{
    i:0,
    count:1,
    rasm:"./img/Ellipse 5.png",
    yozuv:"Smashed Avo",
    yozuv1:"20.00$",

    btn3:"Х"
},{
    i:0,
    count:1,
    rasm:"./img/Ellipse 5.png",
    yozuv:"Smashed Avo",
    yozuv1:"20.00$",

    btn3:"Х"
}]

function mevalarBaza() {
    uio.innerHTML = ""
    mass.forEach((item,i)=>{
    
    uio.innerHTML+=`
    
    
<div class="rasm">
<div>
<img src="${item.rasm}" alt="">
</div>
<div class = "koli">
<p class = "lop">${item.yozuv}</p>
<p class = "lopi">${item.yozuv1}</p>
</div>
<div class="plus">
<button onclick="minus(${i})" >-</button>
<div class = "jok"  >
<p>${item.count}</p>
</div>
<button  onclick="plus(${i})">+</button>
</div>
<div class="otmen">
<button onclick="kgh">${item.btn3}</button>
</div>



    
    
    
    `})
    
}



mevalarBaza()
const minus = (i) => {
    if (mass[i].count > 0) {
        mass[i].count = mevalar[i].count - 1
    }
    mevalarBaza()
}
const plus = (i) => {
    mass[i].count = mevalar[i].count + 1
    mevalarBaza()
}





