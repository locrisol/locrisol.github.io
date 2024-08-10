var slotOne, slotTwo, slotThree;

document.getElementById("gamePannel").style.display = "none";
document.getElementById("gamePannel").style.visibility = "hidden";
document.getElementById("gameScreen").style.display = "none";
document.getElementById("gameScreen").style.visibility = "hidden";

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

