/* lag rating stjerner til feedbacksiden */

// setFeedbackRating (starRating)
// onclick event for stjerner med parameter starRating
// som angir hvor mange stjerner som skal være satt til full
function setFeedbackRating(starRating)
{
    // sett verdi på den gjemte (hidden) input elementet som inneholder verdien på faktisk valgt stjerne
    document.getElementById("feedbackStarRating").value = starRating;
    // 
    for(let numberOfStars = 1; numberOfStars < 6; numberOfStars++)
    {
       let starPicture = "./images/icons8-star-96-clear.png";
       if (numberOfStars <= starRating)
        {
            starPicture = "./images/icons8-star-96-full.png";
        } 
        // else // dersom starPicture ikke er tildelt en verdi kan vi bruke else
        // {
        //     starPicture = "./images/icons8-star-96-clear.png";
        // }

        document.getElementById("feedbackStar" + numberOfStars).setAttribute("src", starPicture);
    }

    // Alternativt til for løkke
    // let numberOfStarsWhile = 1;
    // while (numberOfStarsWhile < 6)
    // {
    //     numberOfStarsWhile++;
    // }

}
