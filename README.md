## General Assembly Project 3 - Space Book 
### Table of Contents

- [Code Installation](#code-installation)
- [Brief](#brief)
- [Technologies Used](#technologies-used)
- [Development Process](#development-process)
- [Planning](#planning-&-preparation)
- [Back-end](#back-end)
- [Front-end](#front-end)
- [Homepage](#homepage)
- [Homepage Styling](#homepage-styling)
- [Navbar](#navbar)
- [Planet Detail Page](#planet-detail-page)
- [Booking Page](#booking-page)
- [Challenges](#challenges)
- [Wins](#wins)
- [Key Learnings](#key-learnings)
- [Future Improvements](#future-improvements)

## Space Book 
A MERN-Stack app. Once registered users can book interstellar travel, leave reviews on their planet stays and search travel offers before their trip. My fellow project members were [Jomari](https://github.com/CamJom) and [Neil](https://github.com/Spurs129).

### Code Installation 

    1. Clone the repo
    2. Install MongoDB and setup mongo server
    3. Use ::mongosh:: command in terminal to start database
    4. Install dependencies **yarn init**
    5. Load the seeds into your local server **yarn seed** 
    6. Start the server **yarn serve**
    7. Split terminal > cd into client folder > install packages run **yarn** 
    8. Start client server **yarn start**


**All users are welcome to use the login details below:**

Email: thor@email.com | Password: pass

### Build-time
/10 days/

### Brief 
Group project (3 people). Create a full-stack React app using Node.js, Express and MongoDB. 

### Technologies Used

#### Back-end
* Express
* MongoDB/Mongoose
* Bcrypt
* JWT (jsonwebtoken)
* Axios

#### Front-end
* JSX (HTML5 in React)
* SCSS
* JavaScript (ES6)
* Node.js
* Bootstrap
* Axios

#### Dev Tools 
* VScode 
* Yarn 
* Insomnia 
* Git
* GitHub
* Heroku (deployment)
* Figma (planning) 

## Development Process

### Planning & preparation 

This was for all of us our first time building a Full-Stack app so we decided that we would code the back-end together through a mix of VScode live-share and zoom screen-sharing. We thought that this approach would bolster our error handling with multiple eyes on a particular section at once. 

After deciding how we were going to tackle the back-end the next step in the planning phase was to get specific about each section of code we needed to add to build a functional back-end. We used Trello to facilitate this phase adding ordered checklists to tick-off as we went. 

### Wireframing

After setting out the step-by-step plan for the back-end we used Figma to start conceptualising the front-end side of the site. 

We also added in some stretch-goals at this point. On-top of using our planets' solar systems’ planets as destinations we wanted to have a filter toggle on the homepage that swapped the default planets to a list of fictional planets. 

## Back-end 

The back-end consisted of a locally-seeded database, secure routes, controllers, routes and models. 

We started by creating the index.js file and writing our ‘startServer’ function. 
This function connects to our chosen MongoDB server, converts the body of the request to JSON then uses our routes which we defined in our routes file. 

Next we targeted the models, for the planet model we defined two schemas. The ‘planetSchema’ had a number of keys with nested data, we focused on seeding ‘offers’ and ‘imageGallery’, both were nested arrays. 
We also gave each planet an average review rating. To do this we attached a virtual field to the planet schema that used the reduce method to calculate the mean. 

The ‘reviewSchema’ referenced the logged-in User to populate its owner field. 

For the User model we wrote the Schema then gave the Schema three additional virtual fields to handle the users ‘reviewed planets’, ‘wish list’ and ‘booked trips’. The reviewed planets field was the most tricky to add - we used a forEach loop that spread-in existing reviews then filtered them returning only those that matched the user’s Id. 

We also used a virtual field to set the password confirmation then we used bcrypt to hash/validate the password. 

We then focused on the routes and controllers. We added Create, Read, Update, Delete routes and their related controller functions. To return our full dataset we populated our GET requests with ‘owner’ and ‘reviews’ to return each planet's related data. 

Finally we seeded our database with a few planets and wrote our seedDatabase function to test out our routes on Insomnia. 

## Front-end

As a group we agreed that the most productive way to write the front-end would be to delegate components amongst the group to be tackled solo. 
My tasks were to build and style the home page, the booking page, the planet detail page and the nav bar. 

### Homepage 

To build the home page I made an axios request to our database and used state to store the data returned from the request. Then, inside the JSX return I used a map method on the populated piece of state to display each planet as a link in its own div. 

We realised that each time the server was run the planets were returned from the database in a different order. To solve this I added wrote a function

Also, since we seeded the database with our stretch goals in-mind we had both fictional and non fictional planets seeded so I needed to write a function that filtered them before displaying them. To achieve this I had to add a key on the back-end planet schema ‘isReal’ with a boolean value of true or false. I then used this as a conditional inside the map method returning 9 planets. 

### Homepage Styling

Once I had the planets displayed on the page I moved onto styling them. I wanted to use CSS animation to create a visually striking page, so I settled on building an infinite loop 3D carousel.

As a final touch I added a div with an ‘onHover’ effect showing some basic information on each planet. 

### Navbar

The navbar follows the user throughout the site. I used CSS to give the buttons both an animated hover effect and an animated click effect. 

### Planet Detail Page 

Again this page features a UseEffect function that makes an axios request to our database, the endpoint being each planet's individual ID - we used string interpolation here. I then populate a piece of state with the data that is retrieved. 

Once I had access to this data I could then access the keys on planet schema and use array methods. I mapped through the planet's image gallery returning the images in divs and styled them using Bootstrap. 
I used the same method to display the reviews. 

### Booking Page

The trickiest part of the form was getting the checkbox to trigger between true and false (checked and unchecked). The solution was to use a ternary operator in the ‘handleChange’ function that asks if the type is a checkbox then sets the value to ‘checked’ if true. 

The form is submitted using a ‘handleSubmit’ function that takes the form data and converts it into JSON string. 

I then used SCSS to style the booking form. 

## Challenges 

* Wishlist: We had difficulty utilising local storage to add the user’s wishlist on the front-end.

* Our first time writing a back-end and using MongoDB we initially had trouble understanding how the virtual fields needed to be used and what needed to be populated when defining the routes. 

* Git: This was our first time using Git as version control and so we spent a considerable amount of time fixing merge conflicts and going over the steps to push and pull our various branches. 

## Wins
Planning: We spent the whole first day of the project wireframing on Figma. I found this invaluable later on in the build because I already had a clear impression of what each page was supposed to do and how it needed to be styled.  

CSS animation! Even though it was time consuming, I am pleased with the outcome. Having seen the site with and without it I believe it delivers a more engaging initial impression for the user. 

## Key Learnings
* MVP: Since the 3D carousel was my first experience with CSS animation building it was time-consuming, this meant I had less time to focus on arguably more important functionality features, like the booking functionality. It was a strong reminder to really focus on the project MVP and make sure it works smoothly before working on auxiliary effects/styling. 

* Git: Having finished this project I can confidently use Git as part of a group. This means minimising potential merge conflicts and sorting conflicts quickly when they inevitably appear.  

 
## Future Improvements 
* Finish the User profile page and populate it with their reviews, wishlist and booked trips.
* Set-up the booking functionality, saving users booked trips to local storage. 
* Stretch goals:  add a button to toggle fictional planets on the homepage. 

