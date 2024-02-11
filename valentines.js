//Valentines Card

const YesButton = document.getElementById("yesBut");
const NoButton = document.getElementById("NoBut");
const Question = document.getElementById("Question");

NoCount = 0;
YesCount = 0;

YesButton.onclick = function(){
    YesCount = YesCount + 100;
    console.log(YesCount);
    if(YesCount >= 1){
        Question.textContent = "Yayyyyyyy 💗💗💗💗😊";
        document.getElementById("GifV").src = "imgjava/blushgif.gif";
    }
}
NoButton.onclick = function(){
    NoCount--;
    if(NoCount == -1){
        Question.textContent = "why? -_-";
        document.getElementById("GifV").src = "imgjava/whyyy.gif";
    }
    else if(NoCount == -2){
        Question.textContent = "Sure okay -_-";
        document.getElementById("GifV").src = "imgjava/okaa.gif";
    }
    else if(NoCount == -3){
        Question.textContent = "I hate you...";
        document.getElementById("GifV").src = "imgjava/sulk.gif";
    }
    else if(NoCount == -4){
        Question.textContent = "Brooo she doesn't love me anymoreeeee :(";
        document.getElementById("GifV").src = "imgjava/cryyy.gif";
    }
}
