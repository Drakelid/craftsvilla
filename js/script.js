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




function loadTestimonials(numberOfTestimonials) {
    let divTestimonial = document.getElementById("testimonials");

    // creating a request
    let request = new XMLHttpRequest();

    // getting the file from the adress
    request.open("GET", "./js/testimonials.json");

    // informing about the datatype for the output
    request.responseType = "json";

    // sending the request to the server
    request.send();

    // function for doing an action when the file is loaded onto our system
    request.onload = function()
    {
        //storing the response in a variable
        const testimonalJson = request.response;

        const testimonialsArray = testimonalJson.testimonials;

        if (testimonialsArray != undefined && testimonialsArray.length > 0)
        {
            for (let index = 0; index < testimonialsArray.length; index++)
            {
                let currentTestimonial = testimonialsArray[index];
                //  <article class="testimonial">
                //      <img class="testimonial__avatar" src="./images/avatar1.jpeg" alt="Person 1">
                //      <blockquote class="testimonial__text">"Craftsvilla products are top-notch. I was amazed by the quality and the personalized support I received. Truly a wonderful experience!"</blockquote>
                //      <p class="testimonial__author">— John Doe</p>
                //  </article>
                
                let testimonialCard = document.createElement("article");            // lag en HTML tag <article>
                testimonialCard.setAttribute("class", "testimonial");               // gi class=testimonial til <article>
                
                let testimonialImage = document.createElement("img");               // lag en html tag <img>
                testimonialImage.setAttribute("class", "testimonial__avatar");      // gi class=testimonial__avatar til <img>
                testimonialImage.setAttribute("src", currentTestimonial.image);     // gi src= JSONFIL.liste[index].image
                testimonialImage.setAttribute("alt", currentTestimonial.activity);  // gi alt= JSONFIL.liste[index].activity
                
                let testimonialText = document.createElement("blockquote");         // lag en HTML tag <blockquote>
                testimonialText.setAttribute("class", "testimonial__text");         // gi class=testimonial__text til <blockquote>
                testimonialText.innerText = currentTestimonial.review;              // legg inn JSONFIL.liste[index].review som innhold i elementet <blockquote>
                
                let testimonialAuthor = document.createElement("p");
                testimonialAuthor.setAttribute("class", "testimonial__author");
                testimonialAuthor.innerText = "- " + currentTestimonial.name;

                let testimonialRating = document.createElement("div");
                testimonialRating.setAttribute("class", "customerFeedbackRating");
                
                for (let starCount = 1; starCount < 6; starCount++)
                {
                    let starPicture = "./images/icons8-star-96-clear.png";
                    if (starCount <= currentTestimonial.rating)
                    {
                        starPicture = "./images/icons8-star-96-full.png";
                    }

                    testimonialRating.innerHTML += "<img src=\"" + starPicture + "\" alt = \"star\">"     //  WTF???!!! snakk om å gjøre noe avansert...
                }

                testimonialCard.appendChild(testimonialImage);
                testimonialCard.appendChild(testimonialRating);
                testimonialCard.appendChild(testimonialText);
                testimonialCard.appendChild(testimonialAuthor);

                document.querySelector(".testimonials__wrapper").appendChild(testimonialCard);
            }
        }

    }
}

loadTestimonials(1);