const landmarks = [
  // --- EASY LANDMARKS (Rounds 1-5) ---
  {
    name: "Eiffel Tower",
    latitude: 48.8584,
    longitude: 2.2945,
    photoUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    hints: [
      "This iron structure is one of the most visited paid monuments in the world.",
      "It was built for the 1889 World's Fair.",
      "It is located in the capital of France.",
      "It offers panoramic views of Paris.",
      "Its name comes from its engineer, Gustave."
    ],
    difficulty: "easy",
    countryRegion: "France"
  },
  {
    name: "Statue of Liberty",
    latitude: 40.6892,
    longitude: -74.0445,
    photoUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    hints: [
      "This monument was a gift from France to the United States.",
      "It stands on Liberty Island.",
      "It is a symbol of freedom and democracy.",
      "It holds a torch in its right hand.",
      "It is located in New York Harbor."
    ],
    difficulty: "easy",
    countryRegion: "USA"
  },
  {
    name: "Great Wall of China",
    latitude: 40.4319,
    longitude: 116.5704,
    photoUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
    hints: [
      "This structure stretches over 13,000 miles.",
      "It was built to protect against invasions.",
      "It is visible from space (myth).",
      "It is located in East Asia.",
      "It is one of the New Seven Wonders of the World."
    ],
    difficulty: "easy",
    countryRegion: "China"
  },
  {
    name: "Sydney Opera House",
    latitude: -33.8568,
    longitude: 151.2153,
    photoUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
    hints: [
      "This building is famous for its sail-like design.",
      "It is a UNESCO World Heritage Site.",
      "It is located in the largest city of Australia.",
      "It hosts concerts and performances.",
      "It sits on Bennelong Point."
    ],
    difficulty: "easy",
    countryRegion: "Australia"
  },
  {
    name: "Taj Mahal",
    latitude: 27.1751,
    longitude: 78.0421,
    photoUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    hints: [
      "This white marble mausoleum was built by an emperor for his wife.",
      "It is located on the banks of the Yamuna River.",
      "It is a symbol of love.",
      "It is in Agra.",
      "It is one of the New Seven Wonders of the World."
    ],
    difficulty: "easy",
    countryRegion: "India"
  },
  {
    name: "Christ the Redeemer",
    latitude: -22.9519,
    longitude: -43.2105,
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    hints: [
      "This statue stands atop the Corcovado mountain.",
      "It overlooks a famous Brazilian city.",
      "It is one of the largest Art Deco statues in the world.",
      "It has outstretched arms.",
      "It is in Rio de Janeiro."
    ],
    difficulty: "easy",
    countryRegion: "Brazil"
  },
  {
    name: "Colosseum",
    latitude: 41.8902,
    longitude: 12.4922,
    photoUrl: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80",
    hints: [
      "This ancient amphitheater could hold up to 80,000 spectators.",
      "It was used for gladiatorial contests.",
      "It is located in the capital of Italy.",
      "It is an iconic symbol of Imperial Rome.",
      "It is called the Flavian Amphitheatre."
    ],
    difficulty: "easy",
    countryRegion: "Italy"
  },
  {
    name: "Big Ben",
    latitude: 51.5007,
    longitude: -0.1246,
    photoUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    hints: [
      "This clock tower is part of the Palace of Westminster.",
      "It is one of the most prominent symbols of the UK.",
      "It is located in London.",
      "Its official name is the Elizabeth Tower.",
      "It chimes every hour."
    ],
    difficulty: "easy",
    countryRegion: "United Kingdom"
  },
  {
    name: "Pyramids of Giza",
    latitude: 29.9792,
    longitude: 31.1342,
    photoUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    hints: [
      "These ancient structures are the only surviving Wonder of the Ancient World.",
      "They are located near Cairo.",
      "They were built as tombs for pharaohs.",
      "They include the Great Sphinx.",
      "They are in Egypt."
    ],
    difficulty: "easy",
    countryRegion: "Egypt"
  },
  {
    name: "Machu Picchu",
    latitude: -13.1631,
    longitude: -72.5450,
    photoUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    hints: [
      "This Incan citadel is set high in the Andes Mountains.",
      "It is often called the 'Lost City of the Incas'.",
      "It is located in Peru.",
      "It was built in the 15th century.",
      "It is a UNESCO World Heritage Site."
    ],
    difficulty: "easy",
    countryRegion: "Peru"
  },

  // --- MEDIUM LANDMARKS (Rounds 6-10) ---
  {
    name: "Guggenheim Museum Bilbao",
    latitude: 43.2686,
    longitude: -2.9340,
    photoUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This museum is known for its unique titanium-clad architecture.",
      "It is located in the Basque Country of Spain.",
      "It was designed by Frank Gehry."
    ],
    difficulty: "medium",
    countryRegion: "Spain"
  },
  {
    name: "Atomium",
    latitude: 50.8949,
    longitude: 4.3416,
    photoUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This structure represents an iron crystal magnified 165 billion times.",
      "It was built for the 1958 World's Fair in Brussels.",
      "It is a symbol of Belgium."
    ],
    difficulty: "medium",
    countryRegion: "Belgium"
  },
  {
    name: "Chichen Itza",
    latitude: 20.6843,
    longitude: -88.5678,
    photoUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This archaeological site was a major city of the Maya civilization.",
      "It is located in the Yucatán Peninsula.",
      "It features the pyramid of Kukulcán."
    ],
    difficulty: "medium",
    countryRegion: "Mexico"
  },
  {
    name: "Neuschwanstein Castle",
    latitude: 47.5576,
    longitude: 10.7498,
    photoUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This fairy-tale castle inspired Disney's Sleeping Beauty Castle.",
      "It is located in Bavaria.",
      "It was commissioned by King Ludwig II."
    ],
    difficulty: "medium",
    countryRegion: "Germany"
  },
  {
    name: "Table Mountain",
    latitude: -33.9628,
    longitude: 18.4098,
    photoUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This flat-topped mountain overlooks a major South African city.",
      "It is a popular hiking destination.",
      "It is in Cape Town."
    ],
    difficulty: "medium",
    countryRegion: "South Africa"
  },
  {
    name: "Petra",
    latitude: 30.3285,
    longitude: 35.4444,
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This ancient city is famous for its rock-cut architecture.",
      "It is also called the 'Rose City'.",
      "It is located in Jordan."
    ],
    difficulty: "medium",
    countryRegion: "Jordan"
  },
  {
    name: "Sagrada Familia",
    latitude: 41.4036,
    longitude: 2.1744,
    photoUrl: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This basilica has been under construction since 1882.",
      "It was designed by Antoni Gaudí.",
      "It is located in Barcelona."
    ],
    difficulty: "medium",
    countryRegion: "Spain"
  },
  {
    name: "Mount Rushmore",
    latitude: 43.8791,
    longitude: -103.4591,
    photoUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This monument features the faces of four U.S. presidents.",
      "It is carved into a granite mountain.",
      "It is located in South Dakota."
    ],
    difficulty: "medium",
    countryRegion: "USA"
  },
  {
    name: "Angkor Wat",
    latitude: 13.4125,
    longitude: 103.8670,
    photoUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This is the largest religious monument in the world.",
      "It was originally constructed as a Hindu temple.",
      "It is located in Cambodia."
    ],
    difficulty: "medium",
    countryRegion: "Cambodia"
  },
  {
    name: "St. Basil's Cathedral",
    latitude: 55.7525,
    longitude: 37.6231,
    photoUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=81",
    hints: [
      "This colorful cathedral is located in Red Square.",
      "It is famous for its onion-shaped domes.",
      "It is in Moscow."
    ],
    difficulty: "medium",
    countryRegion: "Russia"
  },

  // --- HARD LANDMARKS (Rounds 11+) ---
  {
    name: "The Kelpies",
    latitude: 56.0201,
    longitude: -3.7529,
    photoUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=82",
    hints: [
      "These 30-meter-high horse-head sculptures are a tribute to Scotland's industrial past.",
      "Located near Falkirk."
    ],
    difficulty: "hard",
    countryRegion: "Scotland"
  },
  {
    name: "Metropol Parasol",
    latitude: 37.3936,
    longitude: -5.9919,
    photoUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=82",
    hints: [
      "This wooden structure is also known as 'Las Setas' (The Mushrooms).",
      "It is located in Seville."
    ],
    difficulty: "hard",
    countryRegion: "Spain"
  },
  {
    name: "The Vessel",
    latitude: 40.7546,
    longitude: -74.0027,
    photoUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=82",
    hints: [
      "This honeycomb-like staircase is a public landmark in a new Manhattan development.",
      "It is located at Hudson Yards."
    ],
    difficulty: "hard",
    countryRegion: "USA"
  },
  {
    name: "Wat Rong Khun (White Temple)",
    latitude: 19.8243,
    longitude: 99.7635,
    photoUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=82",
    hints: [
      "This contemporary, unconventional Buddhist temple is known for its white color and glass details.",
      "It is located in Chiang Rai."
    ],
    difficulty: "hard",
    countryRegion: "Thailand"
  },
  {
    name: "The Hundertwasser House",
    latitude: 48.2075,
    longitude: 16.3946,
    photoUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=82",
    hints: [
      "This colorful apartment building was designed by an Austrian artist and architect.",
      "It is located in Vienna."
    ],
    difficulty: "hard",
    countryRegion: "Austria"
  },
  {
    name: "The Motherland Calls",
    latitude: 48.7425,
    longitude: 44.5378,
    photoUrl: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=82",
    hints: [
      "This is the tallest statue of a woman in the world.",
      "It is located in Volgograd."
    ],
    difficulty: "hard",
    countryRegion: "Russia"
  },
  {
    name: "The Lotus Temple",
    latitude: 28.5535,
    longitude: 77.2588,
    photoUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=82",
    hints: [
      "This Baháʼí House of Worship is notable for its flowerlike shape.",
      "It is located in New Delhi."
    ],
    difficulty: "hard",
    countryRegion: "India"
  },
  {
    name: "The Crooked Forest",
    latitude: 53.2194,
    longitude: 14.4914,
    photoUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=82",
    hints: [
      "This grove of oddly-shaped pine trees is a natural mystery.",
      "It is located near Gryfino."
    ],
    difficulty: "hard",
    countryRegion: "Poland"
  },
  {
    name: "The Salina Turda",
    latitude: 46.5875,
    longitude: 23.7872,
    photoUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=82",
    hints: [
      "This former salt mine is now a subterranean theme park.",
      "It is located in Transylvania."
    ],
    difficulty: "hard",
    countryRegion: "Romania"
  },
  {
    name: "The Door to Hell",
    latitude: 40.2525,
    longitude: 58.4392,
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=82",
    hints: [
      "This burning natural gas crater has been alight since 1971.",
      "It is located in the Karakum Desert."
    ],
    difficulty: "hard",
    countryRegion: "Turkmenistan"
  }
];