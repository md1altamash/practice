let con = document.querySelector("#container");
let love = document.querySelector("i");

con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.6;
    setTimeout(function(){
        love.style.opacity = 0
    }, 800)
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    }, 4000)
})
