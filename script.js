var arr=[
    {dp:"https://i.pinimg.com/736x/7b/4a/8c/7b4a8c18e90866701634f436245ef082.jpg",story:"https://i.pinimg.com/736x/cb/93/ff/cb93ffe230f2365c845b61330ce074da.jpg"},
    {dp:"https://i.pinimg.com/1200x/01/37/20/013720101d045569e8a3e85b8d66e762.jpg",story:"https://i.pinimg.com/736x/93/79/6b/93796be542097f3ebd7ac1213693887b.jpg"},
    {dp:"https://i.pinimg.com/736x/bb/74/7f/bb747f4f4b09ef023a1b68927898a7ea.jpg",story:"https://i.pinimg.com/736x/9c/43/5d/9c435d1b7f9fdea13a52ca6bf78270fe.jpg"},
    {dp:"https://i.pinimg.com/736x/36/26/70/3626702e7c927d936a8ef17f4197dd52.jpg",story:"https://i.pinimg.com/736x/f1/a0/ca/f1a0ca3383cff2b6758b1f3f012a00c7.jpg"},
    {dp:"https://i.pinimg.com/736x/d1/cc/90/d1cc90fd52eca9365d49bcf329dd9d8f.jpg",story:"https://i.pinimg.com/1200x/5c/a1/56/5ca156130bf01012b02938b645c3ef86.jpg"},
    {dp:"https://i.pinimg.com/736x/a6/98/ca/a698cac70508198371b8693e1f35cf8f.jpg",story:"https://i.pinimg.com/736x/63/bf/4d/63bf4d141bbb06d8389db2a456457ba0.jpg"},
    {dp:"https://i.pinimg.com/736x/a2/14/15/a21415fc2a4597ae20ffb8d79edfed3c.jpg",story:"https://i.pinimg.com/1200x/23/65/ed/2365ede1d5cc90aa3b4739f97a33e120.jpg"},
]

 
var clutter=""

var storiyan=document.querySelector(".storiyan")

arr.forEach(function(elem,idx){
    clutter+=` <div class="story"><img  id="${idx}" src="${elem.dp} " alt=""></div>`
})

storiyan.innerHTML=clutter

 storiyan.addEventListener("click",function(dets){
    console.log(arr[dets.target.id].story);
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"

    },4000)
})






