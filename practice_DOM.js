let rem = document.querySelector("#remove");
var btn = document.querySelector("#add");
let change = document.querySelector("#message");
let count = 0;
btn.addEventListener("click",function(){
    
        btn.innerHTML = "You are now friends";
        btn.style.color = "green";
        change.innerHTML = "Tap to message";
        
})
remove.addEventListener("click",function(){
    btn.innerHTML = "Add friends";
    change.innerHTML = "Message";
})
