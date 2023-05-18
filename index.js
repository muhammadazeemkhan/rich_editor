// function expandLoris() {
// var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several    adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
//  }

var boldBtn = document.getElementById("boldBtn");
var italicBtn = document.getElementById("italicBtn");
var underlineButton = document.getElementById("underlineButton");
var textArea = document.getElementById("textArea");

var isText = false

boldBtn.addEventListener("click", boldtext)
italicBtn.addEventListener("click" , italicText)
underlineButton.addEventListener("click" , underlineBtn)
function boldtext(){
if(isText){
    textArea.style.fontWeight = "normal"
    boldBtn.style.fontWeight = "normal"
    isText = false
}else{
    textArea.style.fontWeight = "bold"
    boldBtn.style.fontWeight = "bold"
    isText=true

}
}

function italicText(){
    if(isText){
        textArea.style.fontStyle = "normal"
        italicBtn.style.fontWeight = "normal"
        isText = false
    }else{
        textArea.style.fontStyle = "italic"
        boldBtn.style.fontWeight = "bold"
        isText=true
    
    }
}


function underlineBtn(){
    if(isText){
        textArea.style.textDecoration = "none"
        underlineButton.style.fontWeight = "normal"
        isText = false
    }else{
        textArea.style.textDecoration = "underline"
        underlineButton.style.fontWeight = "bold"
        isText=true
    
    }
}