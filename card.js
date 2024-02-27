let arr=[{
    d:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D",
    dp:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D"
},{
    d:"https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D",
    dp:"https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFydmVsfGVufDB8fDB8fHww"
},
{
    d:"https://images.unsplash.com/photo-1542157565-4607d82cf417?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpdmVyfGVufDB8fDB8fHww",
    dp:"https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fHww"
},{
    d:"https://images.unsplash.com/photo-1624639247627-73e6792f1ce3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlcm5vYnlsfGVufDB8fDB8fHww",
    dp:"https://images.unsplash.com/photo-1657376485430-fed03c6e578c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGhhbm9zfGVufDB8fDB8fHww"
},{
    d: "https://plus.unsplash.com/premium_photo-1685125884096-e726b9496baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGxhdGluYXxlbnwwfHwwfHx8MA%3D%3D",
    dp:"https://images.unsplash.com/photo-1579445710183-f9a816f5da05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWpvbG5pcnxlbnwwfHwwfHx8MA%3D%3D"
}
];
let addition = "";
let fun = document.querySelector("#story");
arr.forEach(function(element,index){
    addition += `<div class="dp">
    <img id="${index}" src="${element.d}" alt="">
</div>`
});
fun.innerHTML = addition;
fun.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].dp })`;
});
