function changeTEXT() {
    document.getElementById("heading").textContent="welcome to javascript Events!";
}


let button=document.getElementaryById("mybtn");
button.addEventListener("click",
    function(){
        alert("Button clicked!");
    }
);