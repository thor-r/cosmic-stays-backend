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

![Screen Shot 2022-03-26 at 12 47 47 AM](https://user-images.githubusercontent.com/87788714/161664299-9aac7ea5-b349-404d-9011-9dddffd88c6b.png)

### Wireframing

After setting out the step-by-step plan for the back-end we used Figma to start conceptualising the front-end side of the site. 

![Screen Shot 2022-03-26 at 12 46 00 AM](https://user-images.githubusercontent.com/87788714/161664323-03408010-7573-4875-991e-d56c675f3c62.png)

![Screen Shot 2022-03-26 at 12 46 42 AM](https://user-images.githubusercontent.com/87788714/161664346-5c0f4f46-fee4-4d41-b6c6-d6712bb7600b.png)

We also added in some stretch-goals at this point. On-top of using our planets' solar systems’ planets as destinations we wanted to have a filter toggle on the homepage that swapped the default planets to a list of fictional planets. 

## Back-end 

The back-end consisted of a locally-seeded database, secure routes, controllers, routes and models. 

We started by creating the index.js file and writing our ‘startServer’ function. 
This function connects to our chosen MongoDB server, converts the body of the request to JSON then uses our routes which we defined in our routes file. 

Next we targeted the models, for the planet model we defined two schemas. The ‘planetSchema’ had a number of keys with nested data, we focused on seeding ‘offers’ and ‘imageGallery’, both were nested arrays. 
We also gave each planet an average review rating. To do this we attached a virtual field to the planet schema that used the reduce method to calculate the mean. 

![Screen Shot 2022-03-26 at 3 28 31 AM](https://user-images.githubusercontent.com/87788714/161664387-6c73a7f0-1cdf-42a4-8ccc-23e0f032f6b4.png)

The ‘reviewSchema’ referenced the logged-in User to populate its owner field. 

![Screen Shot 2022-03-26 at 2 55 26 AM](https://user-images.githubusercontent.com/87788714/161664406-7a121360-6cde-4436-a6b1-1fbb08c1051c.png)

For the User model we wrote the Schema then gave the Schema three additional virtual fields to handle the users ‘reviewed planets’, ‘wish list’ and ‘booked trips’. The reviewed planets field was the most tricky to add - we used a forEach loop that spread-in existing reviews then filtered them returning only those that matched the user’s Id. 

![Screen Shot 2022-03-26 at 3 11 54 PM](https://user-images.githubusercontent.com/87788714/161664440-8ab51dd3-13c4-416c-8cd3-2697dd1b5c66.png)

We also used a virtual field to set the password confirmation then we used bcrypt to hash/validate the password. 
![Screen Shot 2022-03-26 at 3 12 28 PM](https://user-images.githubusercontent.com/87788714/161664780-9175c631-68e4-4518-a937-05c9ba88fcb7.png)

![Screen Shot 2022-03-26 at 3 12 37 PM](https://user-images.githubusercontent.com/87788714/161664796-60cd4fd4-e90e-4b05-bac7-d6d5b5b0f10d.png)


We then focused on the routes and controllers. We added Create, Read, Update, Delete routes and their related controller functions. To return our full dataset we populated our GET requests with ‘owner’ and ‘reviews’ to return each planet's related data. 

![Screen Shot 2022-03-26 at 3 11 39 AM](https://user-images.githubusercontent.com/87788714/161664728-8ed55d2c-8061-4bc9-a2ff-d52cdab29ecf.png)

Finally we seeded our database with a few planets and wrote our seedDatabase function to test out our routes on Insomnia. 

![Screen Shot 2022-03-26 at 3 23 20 PM](https://user-images.githubusercontent.com/87788714/161664748-b3eee3b4-40e8-4c0a-a9bb-b233e8305b54.png)


## Front-end

As a group we agreed that the most productive way to write the front-end would be to delegate components amongst the group to be tackled solo. 
My tasks were to build and style the home page, the booking page, the planet detail page and the nav bar. 

### Homepage 

To build the home page I made an axios request to our database and used state to store the data returned from the request. Then, inside the JSX return I used a map method on the populated piece of state to display each planet as a link in its own div. 

<img width="921" alt="Screen Shot 2022-03-27 at 12 08 47 AM" src="https://user-images.githubusercontent.com/87788714/161664859-52aba485-f900-4ac9-9e14-94784ba45ab8.png">

We realised that each time the server was run the planets were returned from the database in a different order. To solve this I added wrote a function

<img width="876" alt="Screen Shot 2022-03-27 at 2 40 32 AM" src="https://user-images.githubusercontent.com/87788714/161664941-f7ed9f1a-70da-4d61-8254-51623371668b.png">

Also, since we seeded the database with our stretch goals in-mind we had both fictional and non fictional planets seeded so I needed to write a function that filtered them before displaying them. To achieve this I had to add a key on the back-end planet schema ‘isReal’ with a boolean value of true or false. I then used this as a conditional inside the map method returning 9 planets. 

<img width="876" alt="Screen Shot 2022-03-27 at 2 40 52 AM" src="https://user-images.githubusercontent.com/87788714/161664971-c7ecd838-4e14-4626-86e4-7c8582f30bfe.png">

### Homepage Styling

Once I had the planets displayed on the page I moved onto styling them. I wanted to use CSS animation to create a visually striking page, so I settled on building an infinite loop 3D carousel.

![Screen Shot 2022-03-29 at 5 40 23 PM](https://user-images.githubusercontent.com/87788714/161665008-aa11420f-eb89-4360-bdb5-2d8e4dc1a336.png)

![Screen Shot 2022-03-29 at 5 40 50 PM](https://user-images.githubusercontent.com/87788714/161665021-2b32e86a-24f7-4849-be2e-d85b2a97b0e8.png)

As a final touch I added a div with an ‘onHover’ effect showing some basic information on each planet. 

### Navbar

The navbar follows the user throughout the site. I used CSS to give the buttons both an animated hover effect and an animated click effect. 

![nav-bar-gif](https://user-images.githubusercontent.com/87788714/161665106-4a1b8e5a-8439-4a1f-a51b-243475497390.gif)

### Planet Detail Page 

Again this page features a UseEffect function that makes an axios request to our database, the endpoint being each planet's individual ID - we used string interpolation here. I then populate a piece of state with the data that is retrieved. 

<img width="985" alt="Screen Shot 2022-03-29 at 6 13 46 PM" src="https://user-images.githubusercontent.com/87788714/161665145-240f433e-9353-4e1a-a290-65a7bb6bbd2b.png">

Once I had access to this data I could then access the keys on planet schema and use array methods. I mapped through the planet's image gallery returning the images in divs and styled them using Bootstrap. 
I used the same method to display the reviews. 

<img width="1149" alt="Screen Shot 2022-03-29 at 6 23 39 PM" src="https://user-images.githubusercontent.com/87788714/161665163-91d84c57-5261-41da-bb88-44b52ac193f9.png">

### Booking Page

The trickiest part of the form was getting the checkbox to trigger between true and false (checked and unchecked). The solution was to use a ternary operator in the ‘handleChange’ function that asks if the type is a checkbox then sets the value to ‘checked’ if true. 

<img width="952" alt="Screen Shot 2022-03-29 at 7 21 13 PM" src="https://user-images.githubusercontent.com/87788714/161665190-873fdcd0-f535-473f-83f0-231407e36120.png">

The form is submitted using a ‘handleSubmit’ function that takes the form data and converts it into JSON string. 

<img width="952" alt="Screen Shot 2022-03-29 at 6 39 07 PM" src="https://user-images.githubusercontent.com/87788714/161665211-9a45faf7-e10c-4d9f-9483-600213a2c17f.png">

I then used SCSS to style the booking form. 

<img width="1728" alt="Screen Shot 2022-03-29 at 6 26 34 PM" src="https://user-images.githubusercontent.com/87788714/161665232-c1e3cd7c-b567-4c2f-8b6e-3797ec16d830.png">

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

