let btns=document.querySelectorAll('.btn');
let txt=document.getElementById("text_area");
function making_heading(e){
    console.log(e.textContent);
    console.log(txt.textContent)
    txt.innerHTML=`<h${e.textContent}>${txt.textContent}</h${e.textContent}>`
}



for(let i of btns){
    i.addEventListener('click',(e)=>{
        console.log(i.textContent);
        making_heading(e.target);
    })
    
}

setInterval(function() {
    txt.style.color =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
      for (let btn of btns) {
        btn.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        btn.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      }
  }, 500);