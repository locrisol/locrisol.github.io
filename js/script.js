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

function toogleVideoLengthSelector(){
    var isChecked = document.getElementById("videoServiceNeeded").checked;
    var selectList = document.getElementById("lengthOfVideo");
    if(isChecked){
        selectList.disabled = false;
    }
    else{
        selectList.disabled = true;
    }
}

function toogleLanguagesSelector(){
    var isChecked = document.getElementById("translationServiceNeeded").checked;
    var selectList = document.getElementById("languagesToTranslate");
    if(isChecked){
        selectList.disabled = false;
    }
    else{
        selectList.disabled = true;
    }    
}

function toogleCalculatorButton(){
    // Stores on each value the reference to the lists availables
    var articles = document.getElementById("numberOfArticles");;
    var articlesLength = document.getElementById("lengthOfArticles");
    var videosLength = document.getElementById("lengthOfVideo");
    var languages = document.getElementById("languagesToTranslate");
    // Stores on each variable de value of the list that is selected
    var articlesSelectedValue = articles.options[articles.selectedIndex].value;
    var articlesLengthSelectedValue = articlesLength.options[articlesLength.selectedIndex].value;
    var videosLengthSelectedValue = videosLength.options[videosLength.selectedIndex].value;
    var languagesSelectedValue = languages.options[languages.selectedIndex].value;
    // Checks if the toogle buttons for Video and Translation are checked or not
    var needsVideoChecked = document.getElementById("videoServiceNeeded").checked;
    var needsTranslationChecked = document.getElementById("translationServiceNeeded").checked;
    // Stores the reference to the button that we will enable and disable
    var calculateButton = document.getElementById("calculatorButton");

    // Checks if any of the 2 mandatory options of the form is on default value
    if(articlesSelectedValue == "default" || articlesLengthSelectedValue == "default"){
        calculateButton.disabled = true;
    } // Checks if any toogle button was checked without choosing an option from each of the lists
    else if((needsVideoChecked == true && videosLengthSelectedValue == "default") || (needsTranslationChecked == true && languagesSelectedValue == "default")){
        calculateButton.disabled = true;
    } 
    else{
        calculateButton.disabled = false;
    } 
}

function displayEstimation(){
        // Stores on each value the reference to the lists availables
        var articles = document.getElementById("numberOfArticles");;
        var articlesLength = document.getElementById("lengthOfArticles");
        var videosLength = document.getElementById("lengthOfVideo");
        var languages = document.getElementById("languagesToTranslate");
        var pictures = document.getElementById("pictureServiceNeeded");
        // Stores on each variable the value of the list that is selected
        var articlesSelectedValue = articles.options[articles.selectedIndex].value;
        var articlesLengthSelectedValue = articlesLength.options[articlesLength.selectedIndex].value;
        var videosLengthSelectedValue = videosLength.options[videosLength.selectedIndex].value;
        var languagesSelectedValue = languages.options[languages.selectedIndex].value;

        var totalCost, numberDiscount, lengthCharge, picturesCharge, videoCharge, translationCharge;
        var basePriceArticle = 5;
        var needsPicturesChecked = pictures.checked;
        // Calculates priced based in weekly articles
        numberDiscount = 1; // No discount by default
        if(articlesSelectedValue >= 30){
            basePriceArticle *= 0.85;
            numberDiscount = basePriceArticle;
        }        
        else if(articlesSelectedValue >= 20){
            basePriceArticle *= 0.90;
            numberDiscount = basePriceArticle;
        }
        else if(articlesSelectedValue >= 10){
            basePriceArticle *= 0.95;
            numberDiscount = basePriceArticle;
        }        

        // Calculates if there is any extra to be charged based on articles length
        lengthCharge = 0 // No extra charge by default
        if(articlesLengthSelectedValue == 1000){
            lengthCharge = 0.5;
        }
        else if(articlesLengthSelectedValue == 2000){
            lengthCharge = 1.0;
        }
        else if(articlesLengthSelectedValue == 3000){
            lengthCharge = 1.5;
        }
        else if(articlesLengthSelectedValue == 3001){
            lengthCharge = 2.0;
        }       

        // Add charge if pictures needed
        picturesCharge = 0; // No charge by default
        if (needsPicturesChecked){
            picturesCharge = 5;
        }

        // Add charge if video is needed
        videoCharge = 0; // No charge by default
        if (videosLengthSelectedValue == 500){
            videoCharge = 5;
        }
        else if (videosLengthSelectedValue == 1000){
            videoCharge = 10;
        }
        if (videosLengthSelectedValue == 2000){
            videoCharge = 15;
        }
        
        // Add charge if translation needed
        translationCharge = 0; // No charge by default
        if (languagesSelectedValue == 1){
            translationCharge = 10;
        }
        else if (languagesSelectedValue == 2){
            translationCharge = 20;
        }
        if (languagesSelectedValue == 3){
            translationCharge = 30;
        }

        totalCost = articlesSelectedValue * (basePriceArticle + lengthCharge + picturesCharge + videoCharge + translationCharge);

        if(numberDiscount == 1){
            document.getElementById("individualPriceArticle").innerHTML = "Price of each article:<br> €"+ basePriceArticle;
        }
        else{
            document.getElementById("individualPriceArticle").innerHTML = ("Price of each article:<br> <del>€5.00</del> | €"+ numberDiscount);
        }
        document.getElementById("totalBasePriceArticles").innerHTML = "Total base price for articles:<br> €"+ basePriceArticle * articlesSelectedValue;
        document.getElementById("extraChargeLength").innerHTML = ("Length charges total:<br> €" + lengthCharge * articlesSelectedValue);
        document.getElementById("extraChargePictures").innerHTML = ("Pictures charges total:<br> €" + picturesCharge*articlesSelectedValue);
        document.getElementById("extraChargeVideos").innerHTML = ("Video charges total:<br> €" + videoCharge*articlesSelectedValue);
        document.getElementById("extraChargeTranslation").innerHTML = (" Translations charges total:<br> €" + translationCharge*articlesSelectedValue);
        document.getElementById("totalCost").innerHTML = ("Total weekly cost of service:<br> €" + totalCost);
}