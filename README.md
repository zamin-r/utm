# utm
This is a UTM (urchin tracking module) that I built using Bootstrap 5 and JavaScript. As I am more of a beginner for JavaScript, some of the code is not the most efficient. Nonetheless, this is a working UTM builder.

What is a UTM? A UTM, or Urchin Tracking Module, is a piece of text data that is added to an existing URL. These parameters allow you to see the traffic that is accessing the link. UTM's are commonly used for analytical apps such as Google Analytics. When you generate your completed UTM link, you can input that link into an analytics software (i.e Google Analytics) to begin using it to see where traffic comes from.

Some of the parameters used to build up a UTM are: Medium: This is the tag used to categorize how your traffic is getting to you. Think of it like a mode of transportation. An example of a medium tag is email. Source: This tag deals with where the traffic is coming from. An example of this would be a social media platform like Facebook. Campaign: This tag allows you to add a name to your tag depending on the specific use for the UTM link. An example would be doing a new promotion for a sale on your website.

Now that we know what the parameters are, we can use them in an example. Let's say that you run a clothing store and you're running a sale on some products. You want to reach out to your followers on social media but you want to track the amount of people actually clicking onto your advertisement, this is where you make a UTM. You choose the medium "Social Media", you set source to "Instagram", and you write your campaign name as "so you know specifically what this UTM is for. The resulting link would be: https://exampleclothing.com?&utm_medium=social&utm_source=instagram&utm_campaign=sale

This project was the first time I used the Bootstrap 5 framework so I had a bit of fun trying to work with the different tools that I had for designing the UI. I also got the chance to study some more JavaScript.

The js/script.js file contains the code that allows the user to swap between the different screens The js/cookie.js file contains the main meat of code that puts together the UTM based off of the user's input. It was originally named cookie.js as I had a JavaScript cookies functionality built in which I got rid of for this upload as it did not seem to work as I wanted it to.

This project took me about three months to finish as I was doing a full time course load for my university studies. Note that this version of the project is a more stripped down version of what I worked on as the original project was created with the intention of intertwining it with the company's software product.
