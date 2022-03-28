export default [
  {
    name: 'Mercury', 
    planetPosition: 1,
    planetOverview: 'Red hot rocky planet a stones throw from the sun. Bring a warm blanket for the night though',
    distanceFromEarth: '130 Million km',
    travelTime: '40 days',
    temperature: 'Day: 430 degrees celcius Night: -180 dgrees celcius',
    dangerLevel: 9,
    thingsToDo: 'Rock climbing. Thermal hot springs. Observing the sun',
    offers: 'Book now and get upgraded to a Sun-view room',
    isReal: true,
    image: 'https://i.imgur.com/RkH8iD5.png',
    imageGallery: ['https://i.imgur.com/QdW04nk.jpeg','https://i.imgur.com/5yKSgdB.jpeg','https://i.imgur.com/sKhd5IP.jpeg','https://i.imgur.com/vtirW0B.jpeg'],
  },

  {
    name: 'Venus', 
    planetPosition: 2,
    planetOverview: 'Venus! The third brightest planet in our solar system, HOT..bring thermalpaste. Great if you like your volcanoes very active, and your toast very crisp',
    distanceFromEarth: '59 Million km',
    travelTime: '109 days',
    temperature: '475 degrees celcius.',
    dangerLevel: 9,
    thingsToDo: 'Tour the multiude of Volcanoes and lava spirals from your exposure craft',
    offers: 'Breakfast included',
    isReal: true,
    image: 'https://i.imgur.com/GH9NFnO.png',
    imageGallery: ['https://i.imgur.com/ORyukDr.jpg','https://i.imgur.com/AeV0X9V.jpg','https://i.imgur.com/lSUWm5c.jpg','https://i.imgur.com/mk9Ab0N.jpg'],
  },

  {
    name: 'Earth', 
    planetPosition: 3,
    planetOverview: 'Lots of wildlife',
    distanceFromEarth: '0',
    travelTime: '0 days',
    temperature: 'Average 20 degrees celcuis',
    dangerLevel: 2,
    thingsToDo: 'People watching',
    offers: 'Buy one week, stay a second week free.',
    isReal: true,
    image: 'https://i.imgur.com/pjL2Nzr.png',
    imageGallery: ['https://i.imgur.com/Uc4X8b7.jpg'],
  },

  {
    name: 'Moon', 
    planetPosition: 4,
    planetOverview: 'The short haul weekend destination for residents of earth. Lacks the atmosphere of other destinations',
    distanceFromEarth: '384 Thousand km',
    travelTime: '3 days',
    temperature: 'Day: 90 degrees celcius. Night: -173 dgrees celcius',
    dangerLevel: 1,
    thingsToDo: 'Taking one small step. Great views of earth',
    offers: 'Book now and get upgraded to an earth view room',
    isReal: true,
    reviews: [ {
      text: 'Me and Buzz travelled there back in 69. Some great views of earth but been spolit by tourism since ', 
      rating: '4',
      owner: '000000000001',
    }, 
    {
      text: 'Lacks atmosphere', 
      rating: '3',
      owner: '000000000004',
    }],
    image: 'https://i.imgur.com/rFq243m.png',
  },

  {
    name: 'Mars', 
    planetPosition: 5,
    planetOverview: 'Cool and rocky. On Elons wish list',
    distanceFromEarth: '316 Million km',
    alienLife: 'Yes',
    travelTime: '200 days',
    temperature: '-60 degrees celcius',
    dangerLevel: 4,
    thingsToDo: 'Growing potatoes with Matt Damon, Climbing Olympus Mons',
    offers: 'Free pair of climbing boots, when you book a 3 night stay',
    isReal: true,
    reviews: [ {
      text: 'Planet sucks had to grow my own potatoes using, you dont want to know what.',
      rating: '3',
      owner: '000000000002',
    } ],
    image: 'https://i.imgur.com/fY3xshZ.png',
    imageGallery: ['https://i.imgur.com/ZWj9z5W.jpeg','https://i.imgur.com/JloR4sq.jpeg','https://i.imgur.com/jyqxhBl.jpeg','https://i.imgur.com/Clue6xp.jpeg','https://i.imgur.com/iLip0Ps.jpeg'],
  },

  {
    name: 'Jupiter', 
    planetPosition: 6,
    planetOverview: 'The King of the solar system. Jupiter, the oldest planet in the solar system is volitile and unforgiving',
    distanceFromEarth: '885.29 million km',
    travelTime: '2 years',
    cryoSleepRequired: 'Optional',
    temperature: '-150 degrees celcius',
    dangerLevel: 9,
    thingsToDo: 'Exposure Craft tour of the planets liquid hydrogen surface',
    isReal: true,
    image: 'https://i.imgur.com/4YaIfVQ.png',
    imageGallery: ['https://i.imgur.com/MXk69ws.jpeg','https://i.imgur.com/AoHPgUY.jpeg','https://i.imgur.com/RFxyGP3.jpeg','https://i.imgur.com/yLlmSf6.jpeg'],
    offers: 'Half-Price for Humans 100+ years or older!',
  },

  {
    name: 'Saturn', 
    planetPosition: 7,
    planetOverview: 'With winds of 1000kmh sailing and windsurfing are very popular. Dont play golf though',
    distanceFromEarth: '1.6 billion km',
    travelTime: '8 Years',
    cryoSleepRequired: 'Recommended',
    temperature: '-130 degrees celcuis',
    dangerLevel: 2,
    thingsToDo: 'Windsurfing, sailing, flying a kite, Metal-detecting',
    offers: 'Guided day tour to the rings included',
    isReal: true,
    image: 'https://i.imgur.com/OzZSV0H.png',
    imageGallery: ['https://i.imgur.com/qt1h2sG.jpeg','https://i.imgur.com/Y7zNhzw.jpeg','https://i.imgur.com/Hv7ImyZ.jpeg'],
  },

  {
    name: 'Uranus', 
    planetPosition: 8,
    planetOverview: 'Cold Icy Planet. ',
    distanceFromEarth: '2.9 billion km',
    travelTime: '14 years',
    cryoSleepRequired: 'Highly Recommended',
    temperature: '-195 degrees celcius',
    dangerLevel: 7,
    thingsToDo: 'Skiing, ice skating and the luge. Due to host the winter olympics in 6533',
    offers: 'Ski-in Ski out upgrade',
    isReal: true,
    image: 'https://i.imgur.com/HGL5Av4.png',
  },
  {
    name: 'Neptune', 
    planetPosition: 9,
    planetOverview: 'Cold Icy Planet like Uranus, except you need to travel an extra 8 years to get there. ',
    distanceFromEarth: '4.6 billion km',
    travelTime: '22 years',
    cryoSleepRequired: 'Yes',
    temperature: '-214 degrees celcius',
    dangerLevel: 10,
    thingsToDo: 'Skiing. Neptunes moon Triton is also worth a visit',
    offers: 'Free daytrip to Triton ',
    isReal: true,
    image: 'https://i.imgur.com/gc4eNyK.png',
    imageGallery: ['https://i.imgur.com/vC2W47N.jpeg', 'https://i.imgur.com/8v5d4BA.jpeg', 'https://i.imgur.com/rwckuO3.jpeg'],
  },
  {
    name: 'Pluto', 
    planetPosition: 10,
    planetOverview: 'Your favourite dwarf planet, Pluto lies on the icy edge of the solar system. Do not leave your fission blanket at home!',
    distanceFromEarth: '5.2883 billion km',
    travelTime: '500 years',
    cryoSleepRequired: 'Yes',
    alienLife: 'Yes',
    temperature: '-240 degrees celcius',
    dangerLevel: 8,
    thingsToDo: 'Visit the heart-shaped indendation on the planets surface! The cause of Plutos unusal orbit',
    offers: 'Free kinetic socks on successfull booking',
    isReal: true,
    image: 'https://i.imgur.com/1yelOoh.png',
    imageGallery: ['https://i.imgur.com/F9ADbbp.jpeg','https://i.imgur.com/LW5tVEq.jpeg','https://i.imgur.com/GKkpKiU.jpeg'],
  },
  {
    name: 'Arrakis',
    planetPosition: 11,
    planetOverview: 'Dune ...Desert planety - wasteland of the Empire, it is here—and only here—where spice is found',
    alienLife: 'Yes: Fremen',
    cryoSleepRequired: 'Yes',
    lightYearsFromEarth: '3 million',
    travelTime: '2 cryo cycles',
    temperature: 'Day: 70 degrees celcius',
    dangerLevel: 6,
    thingsToDo: 'Relax from one of the few grand Empirial compounds, or go Worm-watching from the saftey of the sky!',
    offers: 'Two Stillsuits for the price of one',
    isReal: false,
  },
  {
    name: 'Endor',
    planetPosition: 12,
    planetOverview: 'Secluded in a remote corner of the galaxy, the forest moon of Endor would easily have been overlooked by history were it not for the decisive battle that occurred there. This lush, forest moon is home of the Ewok species',
    alienLife: 'Yes: Ewok',
    cryoSleepRequired: 'Yes',
    lightYearsFromEarth: '15 million',
    travelTime: '10 cryo cycles',
    temperature: 'Earth-like',
    dangerLevel: 2,
    thingsToDo: 'Tear through the endless forests on a speederbike',
    offers: 'Free trip to the Destroyed Shield Generator Museum',
    isReal: false,
  },
  {
    name: 'Krpton',
    planetPosition: 13,
    planetOverview: 'Krypton is a planet which orbits a red star. It is home to a great civilization which boasts advanced science and technology.',
    alienLife: 'Yes: Krpytonians',
    cryoSleepRequired: 'Yes',
    lightYearsFromEarth: '27.1',
    travelTime: '1 cryo cycle',
    temperature: '-30 celcius',
    dangerLevel: 2,
    thingsToDo: 'Take your pick in exploring some one of the most advanced technologial societies in the universe',
    isReal: false,
    offers: 'Free Glowing Green Rocks for every trip bought!',
  },
  {
    name: 'Trantor',
    planetPosition: 14,
    planetOverview: 'TRANTOR — The capital of the First Galactic Empire. Its land surface of 200 million square kilometers was entirely domed (except for the Imperial Palace area) and underlaid with an endless city that extended beneath the continental shelves.',
    alienLife: 'Yes',
    cryoSleepRequired: 'Yes',
    lightYearsFromEarth: '35 million',
    travelTime: '14 cryo cycles',
    temperature: '200 degrees above the covered surface',
    dangerLevel: 8,
    thingsToDo: 'Explore the endless multitude of tunnels or take a day trip to the Galactic Palace',
    offers: 'Buy One trip for the price of Three!',
    isReal: false,
  },
  {
    name: 'Solaris',
    planetPosition: 15,
    planetOverview: 'An uninhabited and inhospitable world, Solaris is covered by a single massive ocean, though the liquid that constitutes it remains a mystery to scientists.',
    alienLife: 'Unknown',
    cryoSleepRequired: 'Recommended',
    lightYearsFromEarth: '13',
    travelTime: '2 cryo cycles',
    temperature: 'Strange: Huge fluctuations reported',
    dangerLevel: 10,
    thingsToDo: 'Observe the unusual movements and formations in the ocean, also observe strange behaviour in each other.',
    isReal: false,
    offers: 'Free Health Insurance Cover!',
  },
  {
    name: 'Coroscant',
    planetPosition: 16,
    planetOverview: 'A city-covered planet. Featuring a diverse mix of citizens and culture. It features towering skyscrapers, streams of speeder-filled air traffic, and inner levels that stretch far below the worlds surface.',
    alienLife: 'Yes',
    cryoSleepRequired: 'Yes',
    lightYearsFromEarth: '17 million',
    travelTime: '3 cryo cycles',
    temperature: 'Yes: 35 degrees celcius',
    dangerLevel: 7,
    thingsToDo: 'Tour the skyline on a cruiser or deep dive into one of the thousands of bars, home to explosive night-life',
    isReal: true,
    offers: 'Free "The Earth is a Digital Construct" Book for Every Purchase!',
  }
 
]