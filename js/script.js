var slotOne, slotTwo, slotThree;

document.getElementById("gamePannel").style.display = "none";
document.getElementById("gamePannel").style.visibility = "hidden";
document.getElementById("gameScreen").style.display = "none";
document.getElementById("gameScreen").style.visibility = "hidden";

// disables the button to send comments to the articles by default
document.getElementById("newMessageButton").disabled = true;
// display "no comments" in the comments section by default
document.getElementById("noComments").style.display = "block";
document.getElementById("noComments").style.visibility = "visible";
document.getElementById("listOfComments").style.display = "none";
document.getElementById("listOfComments").style.visibility = "hidden";

// When visiting an article, the article title will be the page title
var title = document.getElementById("titleOfTheArticle").innerHTML;
document.getElementById("autoWebTitle").innerHTML = title;

function startGame(){
    document.getElementById("gameStart").style.display = "none";
    document.getElementById("gameStart").style.visibility = "hidden";
    document.getElementById("gamePannel").style.display = "block";
    document.getElementById("gamePannel").style.visibility = "visible";
    document.getElementById("restartGameBox").style.display = "none";
    document.getElementById("restartGameBox").style.visibility = "hidden";
    document.getElementById("gamePannelDescription").style.display = "block";
    document.getElementById("gamePannelDescription").style.visibility = "visible";
    document.getElementById("rollNumbers").style.display = "inline";
    document.getElementById("rollNumbers").style.visibility = "visible";
}

function rollNumbers(){
    const numberOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numberTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numberThree = [1, 2, 3, 4, 5, 6, 7, 8, 9];    

    slotOne = Math.floor(Math.random() * 9);
    slotTwo = Math.floor(Math.random() * 9);
    slotThree = Math.floor(Math.random() * 9);

    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("gameScreen").style.visibility = "visible";

    document.getElementById("gameNumberOne").innerHTML = numberOne[slotOne];
    document.getElementById("gameNumberTwo").innerHTML = numberTwo[slotTwo];
    document.getElementById("gameNumberThree").innerHTML = numberThree[slotThree];

    if(isWinner()){
        document.getElementById("gameStart").style.display = "none";
        document.getElementById("gameStart").style.visibility = "hidden";

        // hides game panel title if winner
        document.getElementById("gamePannelTitle").style.display = "none";
        document.getElementById("gamePannelTitle").style.visibility = "hidden";
        // hides game panel description if winner
        document.getElementById("gamePannelDescription").style.display = "none";
        document.getElementById("gamePannelDescription").style.visibility = "hidden";
        // hides game button if winner
        document.getElementById("rollNumbers").style.display = "none";
        document.getElementById("rollNumbers").style.visibility = "hidden";

        document.getElementById("restartGameBox").style.display = "block";
        document.getElementById("restartGameBox").style.visibility = "visible";

        document.getElementById("winnerText").style.display = "inline";
        document.getElementById("winnerText").style.visibility = "visible";

        if(slotOne == 6){
            document.getElementById("winnerText").innerHTML = "CONGRATULATIONS! <br> You win the TOP PRIZE!";
            
        }
        else{
            document.getElementById("winnerText").innerHTML = "CONGRATULATIONS! <br> You won a normal prize!";
        }

    }
}

function isWinner(){
    if(slotOne == slotTwo && slotTwo == slotThree){
        return true;
    }
    else{
        return false;
    }
}

function restartGame(){
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("gameScreen").style.visibility = "hidden";

    document.getElementById("restartGameBox").style.display = "none";
    document.getElementById("restartGameBox").style.visibility = "hidden";

    document.getElementById("winnerText").innerHTML = "";
    document.getElementById("winnerText").style.display = "none";
    document.getElementById("winnerText").style.visibility = "hidden";

    document.getElementById("gameStart").style.display = "block";
    document.getElementById("gameStart").style.visibility = "visible";

    document.getElementById("gamePannelTitle").style.display = "block";
    document.getElementById("gamePannelTitle").style.visibility = "visible";
    // hides game panel description if winner
    

}

function sendNewMessage(){
    var comment = "";  
    var name = document.getElementById("userFullName").value;
    var comment = document.getElementById("userComment").value;
     
    //display the div that will contain the comments
    document.getElementById("noComments").style.display = "none";
    document.getElementById("noComments").style.visibility = "hidden";
    document.getElementById("listOfComments").style.display = "block";
    document.getElementById("listOfComments").style.visibility = "visible";
     
    // adds a new card/box with each new comment that has been sent
    document.getElementById("listOfComments").innerHTML +=
    '<div class="card">'+
        '<div class="card-header">'
            +name+
        '</div>'+
        '<div class="card-body">'+
            '<blockquote class="blockquote mb-0">'+
            '<p>'+comment+'</p>'+
            '</blockquote>'+
        '</div>'+
    '</div><br>';
}

function checkCommentLength(){
    nameLength = document.getElementById("userFullName").value.length;
    commentLength = document.getElementById("userComment").value.length;
    if(nameLength >= 5 && commentLength >= 10){
        document.getElementById("newMessageButton").disabled = false;
    }
}