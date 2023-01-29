interface Restaurant {
  name: string;
  link: string;
  description: string;
  idealMeal: string;
  price: string;
  idealGroupNumber: string;
  bestThingOnTheMenu: string;
  alsoGreat: string;
  drinkOrder: string;
  note: string;
  guide: string;
}

export const restaurants: Restaurant[] = [
  {
    name: "SOBAK",
    link: "https://www.instagram.com/sobak.han/",
    description:
      "Sobak is a relative newcomer to the Dimes Square food lineup, right next door to Dimes. The Korean joint is small, and the menu is even smaller. There are three big menu items and a couple of sides, all of which are excellent. The amazingly tender kochujang eel with cabbage salad and rice is one of the best things you can eat on the LES, no exaggeration.",
    idealMeal: "Lunch",
    price: "$$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Kochujang enagi (eel) bowl",
    alsoGreat: "Bibimbap, kalbi soup, daily specials",
    drinkOrder: "Korean sodas",
    note: "There are only two seats available inside. If it’s shitty out, eat there. Otherwise, take your food and eat in Seward Park.",
    guide: "les",
  },
  {
    name: "SCARR’S PIZZA",
    link: "https://www.scarrspizza.com/",
    description:
      "Yes, it’s still the best slice of plain pizza in NYC. And yes, just about everything else at Scarr’s is top tier too. Weekdays at off hours are definitely the move here, as it gets crowded as hell on the weekends. If you can grab a booth at the back, or one of the three seats on the far end of the bar, do that.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Pepperoni slice",
    alsoGreat:
      "Vegan Caesar salad, eggplant parm sandwich, mushroom slice, sausage Sicilian, white Sicilian pie",
    drinkOrder: "Presidente on draft",
    note: "Line on weekends, moves pretty quickly. Order a pie for pickup. Eat it on the sidewalk or in Seward Park.",
    guide: "les",
  },
  {
    name: "SUPER TASTE RESTAURANT",
    link: "https://www.yelp.com/biz/super-taste-new-york",
    description:
      "Super Taste specializes in noodle soup, which most patrons will order, but their dumplings and buns are also great. The “Szechuan Style Dumplings” are unreal, served in a bit of broth with chile crisp and fresh cilantro on top. Across the board, everything is very affordable.",
    idealMeal: "Dinner",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Szechuan Style Dumplings",
    alsoGreat:
      "Hand-pulled beef noodle soup, pork buns, steamed pork and chive dumplings",
    drinkOrder: "a can of soda",
    note: "If you live in the area, takeout is the move. Space is small and seating is limited.",
    guide: "les",
  },
  {
    name: "FACTORY TAMAL",
    link: "https://www.factorytamal.com/",
    description:
      "This is THE spot for tamales, not only in LES, but anywhere in Manhattan. The tortas are also excellent, as are the soups. Factory Tamal cooks the breakfast of champions, and yes, there is another location in the East Village.",
    idealMeal: "Breakfast",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Mole poblano tamales",
    alsoGreat:
      "Salsa verde tamales, chipotle tamales, green soup, longaniza torta",
    drinkOrder: "Jarritos",
    note: "There are a few chairs, but it’s best to take your order to-go and eat it in Seward park, if the weather looks good",
    guide: "les",
  },
  {
    name: "DOUSKA",
    link: "https://www.douskanyc.com/",
    description:
      "Anyone looking for relatively affordable sushi without getting into low-quality fish territory needs Douska. They have a lineup of hand roll sets at approachable prices (Think 6 hand rolls for ~$35), as well as additional rolls and starters to fill out the menu. Sit at the counter if you can. Pound-for-pound, this is probably the best sushi value in NYC.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2",
    bestThingOnTheMenu: "Handroll sets",
    alsoGreat: "Seaweed salad, edamame with matcha salt, yellowtail crudo",
    drinkOrder: "a Kirin (wine menu is bleh, and the sake menu is fine)",
    note: "Only dine-in. They deliver, but handroll nori crispiness never holds up in transit.",
    guide: "les",
  },
  {
    name: "LING KEE BEEF JERKY",
    link: "https://www.facebook.com/pages/Ling-Kee-Beef-Jerky/139379259441322",
    description:
      "Ling Kee is not a restaurant. Or, maybe it is, and it only serves one thing? Either way, the fresh (not dehydrated) jerky that comes out of the ovens at Ling Kee is one of the great LES food staples that needs approximately 1000% more love. The thinly pounded squares of tender meat are seasoned with a sweet, spicy, salty marinade that makes you feel like you’re ascending to a higher plane.",
    idealMeal: "Snack",
    price: "$",
    idealGroupNumber: "1-873,000",
    bestThingOnTheMenu: "spicy pork jerky",
    alsoGreat: "regular pork jerky, spicy beef jerky, regular beef jerky",
    drinkOrder: "A soda from E-Smoke on the corner",
    note: "Jerky is sold by the pound (definitely affordable), but you can also ask for just a slice or two of whatever you want.",
    guide: "les",
  },
  {
    name: "KING DUMPLING",
    link: "https://www.yelp.com/biz/king-dumplings-new-york-2",
    description:
      "As the name implies, you go to King for dumplings. The spot is always filled with some LES highschoolers, art gallery assistants, and skaters. The wrappers are always perfectly chewy and freshly pressed. And the filling is always super flavorful. They get compared to North Dumpling, a few blocks away. I prefer King any day of the week.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Steamed pork and cabbage dumplings",
    alsoGreat:
      "Fried pork dumplings, steamed pork and chive dumplings, steamed chicken dumplings, sesame pancake with pork",
    drinkOrder: "a can of soda",
    note: "Cash only. Buy a bag of frozen dumplings for your freezer. They sell bags of 50 to-go.",
    guide: "les",
  },
  {
    name: "WAYLA",
    link: "https://www.waylanyc.com/",
    description:
      "Wayla is 100p the best spot for Thai on the LES. Their menu is large. The food is incredibly fun. And every single dish on the menu is good. You will not find deep, nuanced flavor in short supply on any table at this restaurant.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "4",
    bestThingOnTheMenu: "Whole fried branzino",
    alsoGreat:
      "Fried calamari, veggie curry, curry puffs, chicken wings, wok-fried string beans, crab fried rice, lobster noodles",
    drinkOrder:
      "Cold beer, the cocktail menu leans sweet and the wine list is shallow",
    note: "The backyard at Wayla is lovely, if the weather looks good.",
    guide: "les",
  },
  {
    name: "DON CEVICHE",
    link: "https://www.doncevicheny.com/",
    description:
      "The ceviche at Don Ceviche is totally fine. But the Peruvian rotisserie chickens and green sauce are excellent. The stall in Essex market is all to-go, so you can eat it at a food hall table there or take it home. I always buy a pint of the bright, herby, creamy green sauce to drizzle on rice, salads, or whatever else I’ve got going at home that week. It’s unreal.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Green sauce",
    alsoGreat: "Rotisserie chicken, lomo saltado, arroz con mariscos",
    drinkOrder: "a soda",
    note: "Extra green sauce. Don’t forget it!",
    guide: "les",
  },
  {
    name: "WILDAIR",
    link: "https://www.wildair.nyc/",
    description:
      "Classic LES wine bar with killer small plates, and a few larger options for groups. This is a perfect first date spot, IMO. Fun, cool scene, excellent wine list, food that encourages a sprawling order and makes you happy. Fabian von Hauske’s desserts are some of the best in the city. Order more than one.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Tomato toast",
    alsoGreat:
      "Potato darphin with uni, XO clams, beef tartare, fried olives, dry-aged steak, bread",
    drinkOrder: "natural wine by the bottle, amaro or eau de vie for dessert",
    note: "Seating is all high tops. Some complain that chairs are uncomfortable. Worth it, tbh.",
    guide: "les",
  },
  {
    name: "CERVO’S",
    link: "https://www.cervosnyc.com/",
    description:
      "Cervo’s used to be a little more chill (less of a scene), but it doesn’t really matter because the simple portuguese inspired seafood is still EXCELLENT. It’s a killer date spot (maybe 2nd or 3rd date), and the drinks coming out of the bar are perfectly executed.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "2",
    bestThingOnTheMenu:
      "whatever seafood happens to be served on toast or fried",
    alsoGreat:
      "Olives, piri piri chicken, prawns, and some bread for mopping up sauces",
    drinkOrder: "Sherry or vermouth spritzes, classic cocktails",
    note: "You will probably wait for your table. Showing up on the earlier side is never a bad move. Not the place for large parties.",
    guide: "les",
  },
  {
    name: "FAT CHOY",
    link: "https://www.fatchoynyc.com/",
    description:
      "Chef Justin Lee says his food is “kind of Chinese” and “also vegan.” It’s also one of the best bangs for your buck in the city. Whether you’re vegan or not (I’m not.), you will want to eat here often. (I do.) Perfect for a quick lunch that feels special.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Rice rolls",
    alsoGreat:
      "Salt and pepper cauliflower, cucumber salad, sticky rice dumplings, whatever’s on special",
    drinkOrder: "Tiger Beer or Little Sumo Sake",
    note: "Vegan!",
    guide: "les",
  },
  {
    name: "CONTRA",
    link: "https://contra.nyc/",
    description:
      "Contra is the best tasting menu experience in NYC. Period. Attitude is relaxed. Food is stellar. Room is cool. The wine list goes deep. And if you don’t want the tasting menu, you can order a la carte. I’ve done birthdays and anniversaries here. It’s perfect for a celebration that doesn’t feel stuffy. And it needs to be said that Jeremiah Stone’s maple-caviar-tofu dish at Contra belongs in the NYC restaurant dish Hall of Fame.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "2",
    bestThingOnTheMenu: "Tasting menu",
    alsoGreat: "Tofu, smoked eel, monkfish",
    drinkOrder: "Deysi cocktail to start, wine by the bottle(s) after that",
    note: "Make a reservation!",
    guide: "les",
  },
  {
    name: "CHEEKY SANDWICHES",
    link: "https://www.yelp.com/biz/cheeky-sandwiches-new-york",
    description:
      "Cheeky feels a bit ramshackle in terms of the space. It’s not about glitz and glam. It is, however, about very good, very comforting sandwiches and New Orleans treats. Another great stop for lunch while strolling on Orchard St.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Fried chicken biscuit",
    alsoGreat: "Breakfast biscuit, braised short rib sandwich, ben-yays",
    drinkOrder: "Chicory coffee",
    note: "A bag of Zapps chips is mandatory with any sandwich.",
    guide: "les",
  },
  {
    name: "SHU JIAO FU ZHOU",
    link: "http://www.shujiaofuzhou.com/",
    description:
      "This is the best budget meal option on the LES, IMO. The peanut noodles (the best in the immediate area) are $2.50, and you’ll see most folks with a plate of them on the table. The food comes out quick, and I like it more for takeout than dine-in. But if you love to bask in the glow of searingly bright florescent lighting, definitely take a seat.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Peanut wheat noodles",
    alsoGreat:
      "Pork ball soup, fish ball soup, steamed pork and chive dumplings",
    drinkOrder: "Can of soda",
    note: "Cash only. And SJFZ recently relocated from their old spot on Eldridge and Broome to a spot down the street on Grand and Eldridge.",
    guide: "les",
  },
  {
    name: "GOLDEN DINER",
    link: "https://www.goldendinerny.com/",
    description:
      "This is the best spot for brunch in Manhattan. Period. The menu is all hits. Zero misses. The avocado toast here (with fresh turmeric, basil, galangal, and lemongrass) is single handedly keeping the avocado toast genre alive. The Korean-leaning spins on just about everything on the classic diner-style menu are brilliant.",
    idealMeal: "Lunch",
    price: "$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Chicken Katsu Club",
    alsoGreat:
      "Avocado toast, egg sandwich, pancakes, seasonal bibimbap, cobb salad, hash browns",
    drinkOrder: "Coffee and a grapefruit juice",
    note: "The weak link here is the booze menu. And there can definitely be a line. Put your name in and grab a coffee at Oliver Coffee a few blocks away while you wait.",
    guide: "les",
  },
  {
    name: "ERNESTO’S",
    link: "https://www.ernestosnyc.com/",
    description:
      "Ernesto’s feels like a proper sit-down restaurant, even a little old school. The room is beautiful. The staff is on point. The Basque-inspired menu is large. It’s a place to go for a celebration, a big date, or maybe (definitely) when someone else is paying.",
    idealMeal: "Dinner",
    price: "$$$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Tortilla with jamon and truffle",
    alsoGreat:
      "Shrimp toast, gildas, tuna pinxto, bikini Hemmingway, duck breast, bacalao",
    drinkOrder: "Spanish wine by the bottle",
    note: "Ernesto’s doesn’t have a full liquor license, so the cocktails are all made with wine-based spirits, instead of full-proof booze",
    guide: "les",
  },
  {
    name: "PHO GRAND",
    link: "https://www.pho-grand.com/",
    description:
      "Pho Grand will not blow your mind, but it will satisfy a craving for pho. I know that seems like a weak sell, but it is not. The broth is perfect. The bowls of soup are classic. And there’s almost always a spot to sit down. This is what we talk about when we talk about reliability. **_Best Thing on the Menu: Big Bowl:_Brisket, Tripe, Tendon, and Eye Round",
    idealMeal: "Dinner",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Big Bowl: Brisket, Tripe, Tendon, and Eye Round",
    alsoGreat:
      "whatever pho you want, water spinach with garlic sauce, Malaysian tofu with shrimp, stewed beef cubes with curry in tomato sauce",
    drinkOrder: "Singha or a salty plum soda",
    note: "Pho Grand has two locations, the original on Grand St. and a new one in the basement of Essex Market.",
    guide: "les",
  },
  {
    name: "EL CASTILLO DE JAGUA",
    link: "https://www.castillodejagua.com/",
    description:
      "The beauty of El Castillo is that it is both a classic American-style diner and a Dominican-Caribbean restaurant. Sure, you can order a plate of pancakes, but if it’s your first time in, I’d say go for a mangu and Dominican sausage breakfast platter. Either way, it’s super affordable, simple, and comorting.",
    idealMeal: "Breakfast",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Mangu with fried Dominican sausage",
    alsoGreat: "Pork mofongo, carne guisada, diner-style omelets",
    drinkOrder: "Coffee",
    note: "There are two El Castillo de Jagua locations, but the one on Rivington is the original.",
    guide: "les",
  },
  {
    name: "CAFE KATJA",
    link: "https://www.cafekatja.com/",
    description:
      "Cafe Katja deserves so much more love than it gets. It’s on the same block as Dudley’s, so it always gets lost in the brunch chaos over there. Those folks should be going to Cafe Katja though. The beers are cold. The sausages are excellent. The schnitzel is crispy. And Gulasch could fuel you for a week. There aren’t many Austrian spots in NYC. Get this one into your rotation.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "2-6",
    bestThingOnTheMenu: "Emmentaler sausage",
    alsoGreat: "Wiener schnitzel, beef gulasch, Katja’s reuben, krainerwurst",
    drinkOrder: "Steigl lager",
    note: "The sausage sampler is available to be ordered for two people. Do that.",
    guide: "les",
  },
  {
    name: "GEM",
    link: "https://www.gem-nyc.com/",
    description:
      "Everything at Gem is pretty. That’s kind of the “thing” there. The Joe Henry Baker paintings on the walls are fantastic. The wooden built-ins are impeccable. The lighting is nice. But the food is also very good, and the tasting menu tip-toes the line of being precious and novel, without making you roll your eyes. It’s well done, all the way through. The wine menu is also great, for all you natural wine folks out there.",
    idealMeal: "Dinner",
    price: "$$$$",
    idealGroupNumber: "2",
    bestThingOnTheMenu: "Tasting menu",
    alsoGreat: "",
    drinkOrder: "Wine by the bottle",
    note: "Tasting menu is 10 courses for $140.",
    guide: "les",
  },
  {
    name: "PEPPA’S",
    link: "https://peppasonline.com/",
    description:
      "I’m not 100% sure why more people haven’t been talking about the fact that legendary BK jerk chicken spot Peppa’s opened a location in the LES, but they did. And they’re open late, so the late night jerk chicken and festivals fix is very much achievable post-bar on a Friday.",
    idealMeal: "Late night",
    price: "$$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Jerk chicken meal",
    alsoGreat: "Festivals, curry goat meal, oxtail",
    drinkOrder: "Soda or a sidewalk bodega beer (with caution)",
    note: "Open until 4am every night.",
    guide: "les",
  },
  {
    name: "MIGHTIE’S",
    link: "https://www.mightiesburgers.com/",
    description:
      "The Wildair and Contra crew opened a burger spot in the basement of Essex Market, and it’s amazing. The menu is small, and all of the beef comes from the legends at End’s Meat. The patty’s are perfectly portioned. The sear is serious. The cheese is melty. This is one of the best burgers in NYC, no doubt. And yeah, it’s a burger spot, but the hot dog is unreal. Order both.",
    idealMeal: "Lunch",
    price: "$$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Double cheeseburger",
    alsoGreat:
      "Mightie’s Burger (wildly juicy steakhouse burger), Mightie’s Dog, fries",
    drinkOrder: "Soda",
    note: "Mightie’s does a dry-aged burger only on Friday’s",
    guide: "les",
  },
  {
    name: "KATZ’S DELICATESSEN",
    link: "https://katzsdelicatessen.com/",
    description:
      "I always say you should never plan to go to Katz’s. But if you’re walking by and there’s no line, you should definitely stop in. There’s not really much more to say. It’s a goddamn institution. You know what it is. You know what you want.",
    idealMeal: "Late Night",
    price: "$$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Pastrami Sandwich",
    alsoGreat:
      "Hot dogs with kraut, chili dog, corned beef sandwich, matzoh ball soup, cheese blintzes, hot turkey sandwich",
    drinkOrder: "Soda",
    note: "Katz’s is open 24 hours. Do with that information what you will.",
    guide: "les",
  },
  {
    name: "DIM SUM GOGO",
    link: "https://www.dimsumgogonyc.com/",
    description:
      "Dim Sum Go Go is directly across the street from Golden Unicorn, the Dim Sum capital of Manhattan. And while I do love Golden Unicorn, Dim Sum Go Go I always enjoy a bit more. The options, as is tradition, are vast, and the rice roll, dumpling, and fried options are all immaculate. You can BYO to Dim Sum Go Go, and you absolutely should.",
    idealMeal: "Brunch or Dinner",
    price: "$$",
    idealGroupNumber: "2-8",
    bestThingOnTheMenu: "Dim sum options. As much as you can. Go crazy.",
    alsoGreat:
      "Fried salt and pepper squid, minced duck with lettuce leaves, roasted garlic chicken, peking duck, Go Go seafood rice",
    drinkOrder: "BYOB of wine",
    note: "The restaurant is also quite large (they have a second floor) and can accommodate larger groups. It’s a great spot for a birthday.",
    guide: "les",
  },
  {
    name: "MANOUSHEH",
    link: "https://www.manousheh.com/",
    description:
      "The original location of this Lebanese spot is over on Bleecker in Greenwich Village, but they opened a MASSIVE location on Grand a couple years ago. For the uninitiated, manousheh is a Lebanese flatbread topped with herbs, sauces, meats, veggies, or whatever else the chef wants to throw at it. They’re crispy, chewy, and perfect to eat at literally any time of day. The kishek (dried yogurt aka kishek, with sesame seeds, tomato, onion, and potato) is one of my favorite things to eat while walking in NYC.",
    idealMeal: "Brunch or Dinner",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Kishek manousheh",
    alsoGreat:
      "Cocktail manousheh, lahem bi ajine manousheh, muhammara manousheh",
    drinkOrder: "a cold Almaza",
    note: "Manousheh also stocks some Lebanese pantry items worth checking out while waiting for your food.",
    guide: "les",
  },
  {
    name: "RAMEN NAKAMURA",
    link: "https://www.nakamuranyc.com/",
    description:
      "There are a few great ramen options on the LES (not as many as the East Village), but Nakamura is my favorite by far. The broth of the torigara shoyu ramen, a blend of chicken and seafood broths, is wildly good. It’s rare I deviate from that bowl, but the rest of the soups are spectacular as well.",
    idealMeal: "Dinner",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Torigara ramen",
    alsoGreat:
      "chicken curry ramen, spicy yuzu wonton soup, chili cabbage, jidori chicken mini bowl",
    drinkOrder: "Panda junmai",
    note: "Nakamura also offers a few (very good) vegan options to boot",
    guide: "les",
  },
  {
    name: "LOS TACOS #1",
    link: "https://www.lostacos1.com/",
    description:
      "Where do I go for great tacos in NYC? That’s a question with (sadly) not as many answers as you’d expect when you’re in Manhattan. BUT, it is my very strong opinion that there is a correct answer, and that answer is Los Tacos Numero Uno (a local chain with a newly opened NoHo location), for Tijuana-style tacos. The place gets slammed at lunch, but it’s an impressively run ship. The line moves quickly and steadily as beautifully flavorful adobada pork is sliced off the trompo, tortillas are warmed on the plancha, and salsas are flung onto tacos with expert precision. Get a taco. Get twenty. It’s all good.",
    idealMeal: "Lunch",
    price: "$$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Adobada especial",
    alsoGreat: "Adobada taco, chicken mula,",
    drinkOrder: "Mexican Coke or a jaimica agua fresca",
    note: "Both the flour and corn tortillas are truly excellent at Los Tacos, but if I had to ride with one for the rest of my days, I’m team flour for an extra flaky, fatty boost. Standing room only. Multiple locations.",
    guide: "soho-noho",
  },
  {
    name: "PINCH CHINESE",
    link: "https://www.pinchchinese.com/",
    description:
      "Pinch is one of the best spots to go for a proper feast and excellent wine list anywhere in NYC. If you are like, I am fucking hungry. And I want some really fucking good wine, it’s your spot. Period. The dumpling program is phenomenal, as are the large format protein dishes (chicken, duck, lobster), and the rest of the menu makes you want to order and share and order and share. The wine list is filled with responsibly produced bottles that can lean tailored/traditional or loose/fun, but always hit nicely with a table full of food one way or another.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "2-6",
    bestThingOnTheMenu: "Wind sand chicken",
    alsoGreat:
      "Salt and pepper calamari, pork soup dumplings, Zha Jiang noodles, braised pork rice, Ma La five treasures, fish dumplings, cumin pork ribs, spicy wontons, peking duck (advance order needed)",
    drinkOrder: "Wine by the bottle",
    note: "Pinch is open for lunch on Saturday and Sunday.",
    guide: "soho-noho",
  },
  {
    name: "CAFE ALTRO PARADISO",
    link: "https://altroparadiso.com/",
    description:
      "This is a restaurant for all seasons. All occasions. All emotions. All cravings. If anyone comes into town and asks where we should go for dinner, my first answer is always Altro. The room is big and always filled with interesting people. The bar is one of the best restaurant bars in NYC. The menu is filled with reliable classics and fresh updates. Whether it’s pastas or salads or crudos or a lunch burger or a spritz and olives before dinner elsewhere or a massive steak for the table, Altro is amazing. Also, worth mentioning, the playlist is alway exceptional.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Spaghetti pomodoro",
    alsoGreat:
      "Antipasti plate, olives, arancini, house-made sausage, octopus and potatoes, grilled cuttlefish, cacio e pepe, braised greens, fennel salad, bistecca fiorentina, biscotti, gelato",
    drinkOrder:
      "Italian wine by the bottle, amaro and dessert wine after the meal",
    note: "Eating at the bar at Altro is a massive vibe, if you want to clock who else is eating there that night, Also, the biscotti really are one of my favorite things on this planet. So fucking good.",
    guide: "soho-noho",
  },
  {
    name: "TORIEN",
    link: "https://torien-nyc.com/",
    description:
      "Yakitori omakase. That’s what you’re getting at Torien, the stylish little spot on the northernmost block of Elizabeth. It’s a solid price tag ($180) for 15 courses of crispy grilled chicken skin, tender chicken oysters, smoky shishitos, and whatever else comes off of the wildly hot binchotan charcoal grill, but for an experience like this (maybe the best yakitori in NYC), I’d say it’s 100% worth it. Line up a special occasion with someone you love. And go eat some chicken.",
    idealMeal: "Dinner",
    price: "$$$$",
    idealGroupNumber: "2",
    bestThingOnTheMenu: "Yakitori omakase",
    note: "Reservations are much easier to get at Torien than most top-tier sushi omakase counters in NYC.",
    alsoGreat: "",
    drinkOrder: "",
    guide: "soho-noho",
  },
  {
    name: "BLUE RIBBON BRASSERIE",
    link: "https://www.blueribbonbrasserie.com/",
    description:
      "Late night dining in NYC is pretty terrible. But Blue Ribbon Brasserie has been open until 4am since it opened, and it remains the shining star of the post-midnight bite genre. The room is always fun, the menu is large, the cocktails are great, and the food is consistently good. Choosing between a raw bar blow out, grilled steaks for the table, or a massive spread of appetizers will be tough. Or maybe it won’t be. Maybe it’ll be 2am, and you’ll say, Fuck it. We ball. **_Drink Order: Cocktails (read:_martinis)",
    idealMeal: "Late night debauchery",
    price: "$$$",
    idealGroupNumber: "2-4 (6 if you have a res!)",
    bestThingOnTheMenu:
      "New Orleans shrimp (Massive! Fun! Get one per person, if you’re hungry)",
    alsoGreat:
      "Steak tartare, escargots, oysters, salt and pepper shrimp, seafood plateau, duck club, fried chicken, paella Basquez, NY Strip au poivre",
    drinkOrder: "",
    note: "It can be a hell of a scene at Blue Ribbon. Maybe it'll be a wait. Maybe it won’t.",
    guide: "soho-noho",
  },
  {
    name: "ZOOBA",
    link: "https://www.zoobaeats.com/",
    description:
      "I think of Zooba as an upgraded Sweetgreen or Cava or Chipotle, but really, that’s selling it short. The format (fast casual, bowls, medium-sized menu) is the same, but the food is about a hundred times better. Zooba hits classic Egyptian street foods like taameya and hawawshi with dips, salads, and cold beers. If you want lunch (but not like…proper sit-down lunch) in SoHo, this is your move.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Cheese Hawashi",
    alsoGreat: "Ful medames, bessara, taameya salad, koshari",
    drinkOrder: "Threes pilsner or or an El Arosa iced tea",
    note: "You can eat Zooba at the restaurant, but walking across the street and sitting on a bench at Lt. Petrosino Square is my move.",
    guide: "soho-noho",
  },
  {
    name: "LE COUCOU",
    link: "https://lecoucou.com/",
    description:
      "Le Coucou is expensive. It’s not your everyday dinner stop. (If it is, congrats on your success or inherited generational wealth.) It’s definitely a restaurant reserved for special occasions, and in that regard, it’s one of the best places for a proper fancy dinner in NYC. The French dishes are incredibly dialed. The sauces are rich and moan-inducing. And the room makes you feel like something important is happening closeby, possibly even at your table.",
    idealMeal: "Dinner",
    price: "$$$$",
    idealGroupNumber: "2",
    bestThingOnTheMenu: "Lobster au poivre",
    alsoGreat:
      "Duckling with cherries, halibut with caviar, escargot, beef tartare, leeks, fried eel",
    drinkOrder: "French wine by the bottle, house cocktails",
    note: "The beer list is also exceptional at Le Coucou, featuring some Euro-brewed beers from breweries like De Dolle and Brasserie des Franches-Montagnes",
    guide: "soho-noho",
  },
  {
    name: "JOE’S STEAM RICE ROLLS",
    link: "https://www.instagram.com/steamriceroll/?hl=en",
    description:
      "Canal Street Market opened a few years ago and is usually crowded and a little hectic, but it’s all worth it, because Joe’s is in there. Their classic steamed rice rolls, featuring freshly milled rice, are truly some of the best and most affordable things you can eat downtown. You will eat them quickly and happily and get on with your day. Or maybe rip another order.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "BBQ pork rice roll",
    alsoGreat: "Curry fish ball rice roll, shrimp rice rolls, pork rice roll",
    drinkOrder: "Soda",
    note: "Joe’s has other locations in Flushing and the UWS.",
    guide: "soho-noho",
  },
  {
    name: "LAN LARB CHIANG MAI",
    link: "https://www.lanlarbchiangmai.com/",
    description:
      "In the interest of full transparency, I’ve never actually eaten at Lan Larb Chiangmai. (The space is on the smaller side.) But I order takeout allllllllll the time. It was recommended to me a while back and has become the go-to takeout spot whenever I’m craving larb. Consider this write-up a reminder for me to get up and stop in next time. The food is so damn good.",
    idealMeal: "Dinner",
    price: "$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Larb Kua Changmai",
    alsoGreat:
      "Gaeng Hoh, sai oua and nam prik num, gaeng awm nur, khao na ped, appetizer combo, kana moo grab",
    drinkOrder: "Cold lager",
    note: "Lan Larb runs lunch specials every day.",
    guide: "soho-noho",
  },
  {
    name: "RAKU",
    link: "https://rakunyc.com/",
    description:
      "Raku makes my favorite udon in NYC, and it’s not even close. I’ll expand that sentiment to say that Raku is probably my favorite for noodle soup of any genre in NYC. It is exceptional, and while I like the East Village location a little better than the SoHo location, the SoHo location is much larger and more comfortable. Do not take this broth for granted. Do not eat your noodles quickly. Savor the chewiness. It is incredibly special stuff.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Gyunan udon",
    alsoGreat:
      "Hamaguri udon, sansai udon, curry udon, tantan udon, chicken tatsuta-age, agedashi tofu, chawan mushi, wakame salad",
    drinkOrder: "Asahi",
    note: "Raku is also open for lunch and way more chill during the day.",
    guide: "soho-noho",
  },
  {
    name: "KING",
    link: "https://kingrestaurant.nyc/",
    description:
      "There is no shortage of olive oil at King. The simple Italo-French cooking does not hold back in the arena of fatty indulgence, but the food here is also a reminder that simple can feel special, especially when talking about the decor. I’m not really a person that says the word chic, but King is chic and a perfect spot for a fourth or fifth date or dinner with parents.",
    idealMeal: "Dinner",
    price: "$$$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu:
      "Menu changes regularly, but the King kitchen does simple vegetables, beans, stewed meats, and fish extremely well.",
    alsoGreat: "Dessert. Duh. Trust your gut.",
    drinkOrder:
      "Chartreuse and soda, Train to Bayonne, Italian wine by the bottle",
    note: "If you’re just looking for a drink and a snack, show up early. Sit in the front room. And order all of the snacks. They are perfect little salty bites.",
    guide: "soho-noho",
  },
  {
    name: "LANDMARK COFFEE SHOP",
    link: "https://www.yelp.com/biz/landmark-coffee-shop-new-york",
    description:
      "SoHo is not filled with affordable food, like the Lower East Side. Looking at this list, you’ll notice most places skew pricey. But Landmark Coffee Shop is the legendary greasy spoon that keeps SoHo grounded. It’s been around forever, and the classic diner menu will not let you forget it. It’s certainly not nice, but when you want a plate of eggs, sausage, and some hash browns with a side of pancakes, are you really worried about nice?",
    idealMeal: "Breakfast",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Your classic diner order",
    alsoGreat: "",
    drinkOrder: "Drip coffee",
    note: "Landmark is not a late night diner. It’s open from 6am to 6pm.",
    guide: "soho-noho",
  },
  {
    name: "EMMETT’S",
    link: "https://www.emmettsnyc.com/",
    description:
      "Emmett’s might be one of the more underrated restaurants in NYC. Flanked by 12 Chairs and Raku on MacDougal, it’s almost always easy to get a seat at Emmett’s, the Chicago-style pizza joint that serves the best bar-style pizza in nyc. And it really shouldn’t be. Emmett’s is perfect for sitting down for a casual meal of pizza or sandwiches with a bunch of buds and opening a bottle from a wine menu that’s way better than you’d expect. Emmett’s makes me very happy.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "4-6",
    bestThingOnTheMenu: "Hot poppy thin crust pizza",
    alsoGreat:
      "Mozzarella sticks, garlic bread, Italian beef sandwich, wedge salad, Peggy O thin crust pizza, combo sandwich",
    drinkOrder: "Bottles of French or Italian red, pints of Veltins Pilsner",
    note: "There are two locations of Emmett’s. The newer location on Grove has a larger menu and is usually more crowded.",
    guide: "soho-noho",
  },
  {
    name: "SHIKI OMAKASE",
    link: "https://shikiomakasenyc.com/",
    description:
      "I think the affordable omakase is one of the more interesting food trends in NYC that has been popping lately. It seems like over the past two years, a handful of fast and affordable omakase spots have opened downtown. Shiki is definitely one of them, and while it is not one of the top omakases in the city, the 12 piece experience is certainly worth the $65 price tag. A nice sushi stop in a neighborhood with just about zero good sushi.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2",
    bestThingOnTheMenu: "Omakase",
    alsoGreat: "",
    drinkOrder: "",
    note: "Shiki got their liquor license, but you can still BYO for a $20 corkage fee.",
    guide: "soho-noho",
  },
  {
    name: "ATLA",
    link: "https://www.atlanyc.com/",
    description:
      "The food at Atla is fantastic. The mezcal selection and margaritas too. My only two hangups with the place are that 1. whenever I get the bill, I’m like, DAMN, and 2. dinner service is never relaxed. They want your table back! Which is why I actually prefer Atla for a chill lunch, rather than dinner. I’m not saying don’t go for dinner. Definitely go. It’s a scene. It’s great. But at lunch it’s just…easier to get quality time with your flautas. Which is why I go in the first place.",
    idealMeal: "Lunch",
    price: "$$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Beef birria",
    alsoGreat:
      "Potato flautas, cheese quesadilla, chicken soup, branzino, roast chicken, guacamole",
    drinkOrder: "Margaritas, mezcal",
    note: "Atla also serves espresso during the afternoon and is a great place to get a coffee in NoHo, if you’ve already been to Cafe Lyria a million times.",
    guide: "soho-noho",
  },
  {
    name: "FISH CHEEKS",
    link: "https://www.fishcheeksnyc.com/",
    description:
      "Feasting on Thai food with a group is what you do at Fish Cheeks. The restaurant’s menu is perfect for sitting down with a crew and ordering aggressively, with the intention of sharing everything and leaving in a mild state of comatose. Every single dish here is good, and they’re all super layered when it comes to flavor. The kitchen does not fuck around. Spice levels are noted on the menu, if you care about that kind of thing.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "4 (you want to share a lot)",
    bestThingOnTheMenu: "Coconut crab curry",
    alsoGreat:
      "crispy rice salad and pork, manila clams with sweet basil, grilled pork cheeks, prawn karee, grilled king mackerel, Isan style half chicken, crab fried rice, khua kling",
    drinkOrder: "Very cold white wine",
    note: "Fish Cheeks is not a small restaurant, but it fills up very quickly on weekends. I try to hit it on a weeknight for easy access.",
    guide: "soho-noho",
  },
  {
    name: "IL BUCO ALIMENTARI & VINERIA",
    link: "https://ilbuco.com/pages/alimentari",
    description:
      "Alimentari & Vineria is the more casual location of Il Buco, and to be honest, I prefer it over the OG.It feels like…less pressure? And it’s always going to be good at Il Buco A&V, no matter when you show up. But I like sitting out on the sidewalk for lunch and devouring crispy Roman-style fried artichokes in the early afternoon. Some pasta too. OK, and maybe a whole fish if I’m with some friends.",
    idealMeal: "Lunch",
    price: "$$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Crispy artichokes",
    alsoGreat:
      "house-baked bread, salumi plates, spicy jicama salad, cavatelli with sausage, cacio e pepe, torchio, whole roasted branzino, olive oil cake",
    drinkOrder: "A spritz, chilled red wine",
    note: "Like I said, Il Buco has multiple restaurants under the “Il Buco” name. Pay attention to which you’re at!",
    guide: "soho-noho",
  },
  {
    name: "PICCOLA CUCINA ESTIATORIO",
    link: "https://www.piccolacucinagroup.com/en/piccola-cucina-estiatorio-soho-nyc/",
    description:
      "Piccola is a Sicilian-Greek restaurant that is, in my book, unbelievably underrated. It’s not cool, but it is so so good. The pastas are excellent. The smaller seafood plates make you want to preach the gospel of simple Mediterranean cooking. And in a neighborhood filled with over-the-top this and expensive that, it’s a place to feel welcome and taken care of and happy.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu:
      "I honestly do not know. I sat and thought for a long time, and I failed you. It’s certainly on the pasta section of the menu though.",
    alsoGreat:
      "Octopus caprese, grilled sardines, boar meatballs, fritto misto, mozzarella in carrozza, tuna tartare with celery, pasta alla norma, paccheri with octopus ragu, calamarata with sea bass, penne pomodoro, chicken milanese",
    drinkOrder: "A spritz, chilled red wine",
    note: "The Piccola location on Thompson is where you want to be. They have another location on Spring, which isn’t as enjoyable of a vibe.",
    guide: "soho-noho",
  },
  {
    name: "THAI DINER",
    link: "https://www.thaidiner.com/",
    description:
      "If someone from out of town asks where they should eat for one meal in NYC, I say Thai Diner. Zero hesitation. Thai. Diner. It is currently, in my eyes, the best restaurant in downtown NYC. The food is fucking phenomenal, expertly dialed, and served without pretension. The desserts are better than most others in NYC. The staff is excellent. The cocktails are fun and beautiful and good. The lineup of custom spirits and wine distilled and produced especially for Thai Diner is super cool. The music is stellar. And it is always buzzing. In short, Thai Diner is really really fun and makes me really really happy.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu:
      "Seafood Tower (I promise, it's the best seafood tower in NYC.)",
    alsoGreat:
      "Thai Diner egg sandwich, tom yum shrimp soup, stuffed cabbage, clams nam yaa, hoi frites, lobster omelet, khao mun gai, banana pudding, coconut sundae",
    drinkOrder:
      "Barbichette house wine (made especially for Thai Diner), whatever cocktail catches your eye (You can order them for the table by the pitcher!)",
    note: "Thai Diner doesn't accept reservations, so it can get crowded on weekends for dinner. Put your name in and grab a glass of wine at Compagnie while you wait. (A solo lunch move at the bar is also great for those who want a little less commotion.)",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "BANH MI SAIGON",
    link: "https://kubiti.blog/banh-mi-saigon-new-york/",
    description:
      "I have probably ordered the #1 at Banh Mi Saigon more than any other menu item in NYC. This is my banh mi and summer roll MVP in downtown Manhattan. The bread is crusty. The meats are packed with flavor, the pate and mayo are perfectly portioned, and the veggies and herbs consistently pack the right crunch. The summer rolls are also not to be missed. All around, it's one of the better solo lunch stops you can make.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1",
    bestThingOnTheMenu: "BBQ pork banh mi (#1)",
    alsoGreat:
      "BBQ pork summer rolls, shrimp chips, chicken banh mi, shrimp summer rolls, ham banh mi",
    drinkOrder: "Soda",
    note: "BMS has some seating, but you’ll probably end up taking it to go.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "MEE SUM CAFE",
    link: "https://www.yelp.com/biz/mee-sum-cafe-new-york",
    description:
      "When I’m craving some zongzi (steamed glutinous sticky rice), I go to Mee Sum. Stuffed with pork or lap cheong (chinese sausage) or bean paste or peanuts or maybe all of the above, wrapped in bamboo leaves, and steamed, they are one of the best portable snacks you can find in Chinatown. Mee Sum also has a full menu of protein over rice dishes, as well as solid congee and a smaller menu of dim sum options. It’s a true mom and pop that has been kicking for over 50 years.",
    idealMeal: "Breakfast",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Sticky rice with pork, sausage, and green bean paste",
    alsoGreat:
      "Any of the sticky rices, salted chicken congee, combination rice dish, dim sum options",
    drinkOrder: "House-made ginger-lemon tea (so good)",
    note: "Cash only. Mee Sum has counter seating for quick eating, but I prefer to walk a couple blocks and find a bench in Columbus Park.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "BO KY",
    link: "http://www.bo-ky-nyc.com/",
    description:
      "This is, in my eyes, one of the truly great restaurants of Chinatown and lower Manhattan. Bo Ky doesn't get much airtime on the “best of” lists, but please trust, this is some of the best soup and roast poultry you will eat in NYC. A country style chicken or duck should always be ordered for the table, along with the house special shrimp rolls (wrapped in tofu skins and fried). And then it's off to the races for whichever Vietnamese-influenced Chinese noodle soup you want. All soups come with the option of egg or rice noodles, so know before you throw.",
    idealMeal: "Dinner",
    price: "$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Whole country style chicken",
    alsoGreat:
      "Whole country style duck, house special shrimp rolls, beef belly flat noodle soup, curry chicken soup, house special fish noodles, country style duck noodle soup",
    drinkOrder: "BYOB wine",
    note: "Cash only.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "NAKAJI",
    link: "https://www.nakajinyc.com/",
    description:
      "If I were to recommend one omakase experience in NYC, it would be Nakaji. The entry bar (and its high ball menu) is amazing. The counter is beautiful. Chef Nakajima is kind, attentive, and an absolute master. The additional uni menu (Yeahhhhhhhh) offers varieties you do not see on most menus. And while it’s certainly expensive, it’s not refinance-your-house expensive. If anyone asks me for a celebratory omakase destination, Nakaji is my answer.",
    idealMeal: "Dinner",
    price: "$$$$",
    idealGroupNumber: "2",
    bestThingOnTheMenu: "Omakase",
    alsoGreat: "The omakase. C’mon! Get with the program.",
    drinkOrder: "Highballs to start. Sake with the omakase.",
    note: "You can order a limited menu of sushi a la carte at the bar, which is in the entry room before the counter. It’s a nice move for a more casual experience.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "ESTELA",
    link: "https://estelanyc.com/",
    description:
      "Estela has been one of the best restaurants in NYC since it opened in 2014. If you’re looking for simple, incredibly dialed, makes-you-feel special, truly delectable food in a sexy room, there’s not a better option in Manhattan. Estela is expensive, but it always feels worth it to me. Whether it’s a cocktail, oysters, and jamon for a date at the bar, or three bottles of wine and half the menu at a table of friends in the back, Estela ALWAYS makes me feel incredibly lucky to live in NYC. It is, has been, and will continue to be one of the city’s most wonderful places to eat.",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Arroz negro",
    alsoGreat:
      "Endive salad, jamon, oysters, any and all crudos, any fish dish, ricotta dumplings, really whatever looks good",
    drinkOrder: "Wine by the bottle, cocktails to start",
    note: "Reservations definitely required. Estela is expensive but not stuffy. If you want to try to sneak in for a seat at the bar, get there early. (But save me a seat.)",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "DELUXE GREEN BO",
    link: "https://www.deluxegreenbo.com/",
    description:
      "Deluxe Green Bo is an excellent restaurant all-around, but most notably it is home to two things: One of Chinatown’s most iconic and delicious dishes and arguably the best soup dumplings in Chinatown. (I said arguably!) That iconic dish I’m talking about is the hot and spicy wonton, delicately wrapped and smothered with a killer peanut sauce and chile oil. They are beyond delicious and you should order more than one bowl for the table. Maybe more than two. It’s also worth noting that the house combo for noodle and rice dishes is pork and preserved cabbage, and any dish with that combo will be excellent.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2-6",
    bestThingOnTheMenu: "Hot and spicy wonton",
    alsoGreat:
      "Soup dumplings, fried pork dumplings, steamed pork and crab dumplings, spicy cabbage, rice cakes with shredded pork and preserved cabbage, pan fried noodles with pork and preserved cabbage, pork with bean curd skin + preserved cabbage + soy beans, cold dish combo, and any of the classics you’re feeling",
    drinkOrder: "Tsingtaos for the table, keep ‘em comin’",
    note: "Cash only! If anyone is like, we want dumplings, THIS IS YOUR SPOT.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "GREAT NY NOODLE TOWN",
    link: "http://www.greatnynoodletown.net/",
    description:
      "OK, before we talk about Noodletown, I have to say one thing: It’s under new management, which means it is no longer open until 4am, and some of the dishes have changed a bit. BUT it is still my #1 spot in Chinatown and one of my favorite restaurants in NYC. It’s an absolute institution, and I think I’ve probably eaten at Noodletown more times than any other restaurant in NYC. Go with a group. Order BBQ meats. Order noodles. Order soup. Order Sea Bass and pea shoots and fried rice and ginger scallion noodles. Order it all.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2-6",
    bestThingOnTheMenu: "Shredded chicken with pea shoots in ginger sauce",
    alsoGreat:
      "BBQ pork, dumplings, chinese sausage fried rice, pan fried noodles with BBQ duck, sea bass with flowering chives, wonton noodle soup, chicken with XO sauce, ginger-scallion noodles",
    drinkOrder: "BYOB wine",
    note: "Cash only. The large circular tables in the middle of the restaurant are treated as communal tables, but if you show up with a group of 8 you can claim a whole one.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "WONTON NOODLE GARDEN",
    link: "http://www.wontonnoodlegarden.com/",
    description:
      "I love standing on the sidewalk in front of the window at Wonton Noodle Garden. To be fair, I like going in and eating more, but watching wonton noodle soup after wonton noodle soup be assembled is absolutely mesmerizing. WNG has a full Cantonese menu, but as the name suggests, wonton noodle soups are where you should spend most of your time here. On the menu, they’re labeled as “Cantonese Style Lo Mein.” An order comes with springy wavy noodles, simple but flavorful broth, and delicately wrapped wontons. This is one of my favorite things to eat in Chinatown. Period.",
    idealMeal: "Dinner",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Noodles Stewed with Wontons and Dumplings",
    alsoGreat:
      "Wonton with Shanghai noodles, Noodles stewed with beef stew and curry sauce, pan-fried noodles Singapore style, pan fried rice noodles with mixed sauce, soy sauce bean curd, beef tripe and wontons with noodles, fish balls with curry sauce",
    drinkOrder: "Tsingtaos for the table",
    note: "WNG is open late, until 4am.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "UPSIDE PIZZA",
    link: "https://www.upsidepizza.com/",
    description:
      "The second location of Upside Pizza has become a bit of a neighborhood hub in Nolita. The slices are always excellent. You can crack a pint of IPA or pilsner or grab a glass of wine while you wait for your pizza. And hang out all afternoon or for as long as it takes for you to scarf down your slices after you get them. It's one of the best pizza shops in Manhattan, whether we’re talking square slices or classic NYC round pies.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "White mushroom slice",
    alsoGreat:
      "Tomato/garlic Sicilian slice, spicy vodka sauce slice, pepperoni sicilian slice",
    drinkOrder: "Threes IPA",
    note: "It gets absolutely slammed on Saturdays when the tourists descend on Nolita. Save it for a weekday.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "UNCLE LOU",
    link: "https://www.unclelounyc.com/",
    description:
      "When we talk about Cantonese restaurants in Chinatown, we usually talk about businesses that have been around for some time. Uncle Lou is the outlier, opened in 2021 and serving truly excellent food. You’ll find a large menu filled with classics (fried rice, congee, fried noodles), but I spend most of my time in the Lo Wah Kiu section of the menu, which is filled with old school favorites. The whole fish dishes are excellent, as are any braised meats, fried seafood, and casseroles.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2-6",
    bestThingOnTheMenu: "Fried salt and pepper scallops, prawns, and squid",
    alsoGreat:
      "Crispy garlic chicken, whole fried snapper, oxtail stew casserole, crispy tofu with sliced conch, homestyle seafood stir fry, stuffed eggplants, ginger fried rice, Taipan chow mei fun, everything on the menu",
    drinkOrder: "Tsingtao/Budweiser",
    note: "The menu is large and seriously so so so good throughout. Go with a group and order to have leftovers. Try as much as you can.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "HOMETOWN HOTPOT AND BBQ",
    link: "https://hometownhotpot.com/index.html",
    description:
      "Hometown is, as advertised, a spot to sit and eat hotpot and BBq’d meats. They price their menu as an all-you-can eat set price for either just hotpot, just BBQ or a combination of both. You’ll pay between $35 and $45 depending on what you choose. In terms of ordering, go with your usual hotpot ordering strategy. The combos are endless, so I’m not going to pretend to be familiar with all of them. BUT I will say the Chinese Herbal, Spicy Ma La, and Tom Yum broth bases are all great places to start.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2-6",
    bestThingOnTheMenu: "All you can eat hotpot",
    alsoGreat: "You know, the only other thing, all you can eat BBQ",
    drinkOrder:
      "Hometown has a house beer (an amber ale), if you’re into that sorta thing, the fresh juices and coconut water are also great",
    note: "The menu is large and seriously so so so good throughout. Go with a group and order to have leftovers. Try as much as you can.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "PEKING DUCK HOUSE",
    link: "https://www.pekingduckhousenyc.com/",
    description:
      "People talk big game about Wu’s being the best BYO downtown, but there are quite a few spots I like better. Peking Duck House is certainly one of them. If we’re talking whole traditional Peking ducks for the table, there's nowhere else I’d rather be. Come in with a big crew, strapped with some Riesling and Plousard, and figure out which menu you want for the table. You’ll have the choice to pay anywhere from $47-$57 per person. Also, it’s a white tablecloth vibe. Wear a suit. Bring out the dresses. Throw some loafers on. Get dressed up. You might be the only ones balling out, but it’ll be fun.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "4-6",
    bestThingOnTheMenu: "Peking duck",
    alsoGreat: "",
    drinkOrder: "BYO wine! Bright reds and zippy whites!",
    note: "Like I said, it’s a formatted menu. Your options are limited, but you can’t really miss",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "LOVELY DAY",
    link: "https://www.lovelydaynyc.com/",
    description:
      "Lovely Day is really a testament to consistency, affordability, and access. It’s always easy to get a table. The Thai dishes (a solid amount of which feature Japanese influence) aren’t as dialed or mind blowing as Wayla, Thai Diner, or Somtum Der, but they are undeniably great. And you can easily walk out feeling like your table of four got a solid deal on dinner. It also happens to be on one of the more chill blocks of Nolita, across from Elizabeth St. Garden.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Ginger fried chicken",
    alsoGreat:
      "Julienne vegetable salad, fried tofu, long beans, hobo noodles, coconut curry udon noodles, grilled salmon over green curry, red curry, summer rolls, pandan tres leches cake",
    drinkOrder:
      "Accessible natural wines for the table, think rosé or a crispy white",
    note: "American Express or Cash. Lovely Day opens at 11am and surprisingly serves a really great full Irish breakfast (I know! What?!) if you're in need of a chill and versatile lunch/brunch move.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "TAIM",
    link: "https://taimkitchen.com/",
    description:
      "Taim is the fast casual falafel spot you've been searching for. They have a few locations around Manhattan, but the Nolita spot is their OG. As is typical of the genre, you get to choose bases, and toppings for your falafel bowls or pitas. IOt;s a great stop for vegetarians and vegans…or, you know, anyone that likes hummus and pickles and falafel. Pro **_tip:_get French fries on top of your bowl. Trust me.",
    idealMeal: "Lunch",
    price: "$$",
    idealGroupNumber: "1",
    bestThingOnTheMenu: "Build-your-own falafel bowl",
    alsoGreat: "",
    drinkOrder: "Get a Diet Coke for me, please",
    note: "Except for a small window counter space , this is a takeout situation. I would take your bowl and eat in Elizabeth St. Garden or in Lt. Petrosino Sq.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "XI’AN FAMOUS FOODS",
    link: "https://www.xianfoods.com/",
    description:
      "Xia’an is what we talk about when we talk about local NYC chain restaurants. They have locations all over Manhattan, Brooklyn, and Queens, which serve some of the best hand-pulled noodles anywhere in the five boroughs. You’ll find peppercorns and chiles all over this menu, so expect healthy servings of that szechuan heat. And while the noodles are certainly where you should concentrate your efforts, don;t sleep on the lamb burger, a nice lil’ snack or split item.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Cumin lamb noodles",
    alsoGreat: "",
    drinkOrder: "Soda soda soda",
    note: "Xi’an has 11 locations across NYC and also sells jars of its very good chile oil on its website.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "REGINA’S GROCERY",
    link: "https://www.reginasgrocery.com/",
    description:
      "If you’re looking for hoagies or subs or heroes or whatever you want to call them, you’re probably going to end up at Regina’s on Mulberry, the second location of the new-school old-school downtown Italian deli where menu items are named after family members. Sandwiches are proper, from cold cuts to cutlets, and while the shop is small, you’ll find a crew of regulars hanging around at all hours.",
    idealMeal: "Lunch",
    price: "$$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu: "Uncle John",
    alsoGreat: "Cousin Anthony, Big Anthony, Uncle Rocco",
    drinkOrder: "Coca-Cola",
    note: "Eat your sandwich on the sidewalk or take a walk around the corner and find a seat in Elizabeth Street Garden.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "FRIED DUMPLING",
    link: "http://www.fried-dumpling.com/",
    description:
      "If you are looking for the best deal on dumplings in Chinatown, Fried Dumpling is without competition. 5 fried pork and chive dumplings for $1.25. 30 frozen dumplings for $6.00. There’s really not much more to say. The dumplings are juicy, chewy, crispy, and salty. It’s a win-win.",
    idealMeal: "Lunch/Snack",
    price: "$",
    idealGroupNumber: "1-1,000",
    bestThingOnTheMenu: "Fried pork dumplings",
    alsoGreat: "",
    drinkOrder: "",
    note: "Cash only. There used to be more locations of Fried Dumpling, but the Mosco St. location is the only one still in operation.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "SINGAPORE MALAYSIA BEEF JERKY",
    link: "https://malaysiabeefjerky.com/",
    description:
      "I won’t claim to be an undisputed Chinatown jerky expert, but of all the jerky spots in Manhattan’s Chinatown (excluding Ming Kee on the LES) I’ve been to, I’ll say SMBJ is my favorite. Squares are marinated and grilled regularly. The meat is exceptionally tender. And the levels of spice and sweetness are beautifully balanced. An excellent walk-around snack, if you ask me. As a reminder, this is fresh jerky, not dehydrated jerky.",
    idealMeal: "Snack",
    price: "$",
    idealGroupNumber: "1-1,000",
    bestThingOnTheMenu: "Spicy pork jerky",
    alsoGreat: "Pork jerky, spicy beef jerky, beef jerky",
    drinkOrder: "",
    note: "Cash only.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "BANH MI CO UT",
    link: "https://www.yelp.com/biz/banh-mi-co-ut-new-york-2",
    description:
      "It’s very possible that the staff at Banh Mi Co Ut are the nicest people in NYC. Every single time, without fail, that I go into the shop, I leave with the biggest smile on my face, so excited to eat my food. The staff rules. The food rules. And while the sandwiches are excellent, the smaller non-sandwich Vietnamese dishes are the real stars of the show. Get a banh mi for sure, but don’t leave without a little sidekick to share with a friend or devour by yourself.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-2",
    bestThingOnTheMenu:
      "Banh Mi Co Ut Special (First thing on the menu. You’ll see it.)",
    alsoGreat:
      "Banh Gio (steamed rice cakes with minced pork, mushrooms, and egg), patechaud (pastry dough stuffed with minced pork), Banh Bot Loc (stemed tapioca dumplings with shrimp and pork), Goi Du Du Kho BO (papaya salad with beef jerky)",
    drinkOrder: "Soda",
    note: "Cash only. No space to eat-in.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "SUN SAI GAI",
    link: "http://www.sunsaigai.com/",
    description:
      "SSG is maybe my top value play for a full Cantonese menu in Chinatown. The food is all tasty, although not as on point as Noodletown or Uncle Lou. But like I said, this is a value play. The $6.25 plates of lo mein are truly massive, and the full bakery in the front of the restaurant gives a not-so-common option for full kitchen and bakery menus in the same establishment. The roast pork and roast hot dog/scallion buns are excellent. And while they close early, they also open at 7am. Great for the early riser noodle craving.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu:
      "Pork Lo Mein (this might be boring, but the value is truly unbeatable)",
    alsoGreat:
      "Roast pork bun, roast pork and duck on rice, chicken and salted fish fried rice, beef with curry sauce on rice, roast pork and wonton soup, spare rib fried noodles with green pepper and black bean, spare rib with spicy black bean sauce on rice",
    drinkOrder: "Soda",
    note: "Cash only. Plenty of space to sit and eat. Also, very close to SoHo, if you need a WAB (WAB = walk-around bun) while shopping for jawnz.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "CHA KEE",
    link: "https://www.chakeenyc.com/",
    description:
      "Cha Kee is a newer spot that does Chinese-Japanese fusion to a really high degree. Their dishes are all beautiful and pull ingredients and techniques cross-culturally to create dishes that really feel like their own thing. The menu is spread pretty evenly in terms of stand-out dishes, so spend time with each section.",
    idealMeal: "Dinner",
    price: "$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "XO Shrimp",
    alsoGreat:
      "Spicy chicken wings, garlic bread, crispy baby bok choy, sake steamed mussels, Cha Kee fried rice, sweet and sour pork jowl and belly, yaki udon, kimchi fried rice",
    drinkOrder: "Soda",
    note: "",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "BLACK SEED BAGELS",
    link: "https://www.blackseedbagels.com/",
    description:
      "For being such a bagel town, there really aren’t that many great bagel spots in lower Manhattan. Black Seed is certainly the best outside of the East Village, and they’re a chain that serves up Montreal style bagels. The bagels are great though, and there will be a line if you go on a weekend.",
    idealMeal: "Breakfast",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Whatever your bagel order is",
    alsoGreat: "",
    drinkOrder: "Coffee",
    note: "Black Seed sells rolls of half dozen day old bagels that (IMO) are a pretty great thing to keep in the freezer. Their bagel chips are also great.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "UMBERTOS CLAM HOUSE",
    link: "https://www.umbertosclamhouse.com/",
    description:
      "Yeah, yeah, it's the place where Joe Gallo got whacked. But it’s also a good place to eat vongole and one of the only worthwhile restaurants in Little Italy. Stick to classic Italian clam dishes and seafood appetizers, forget the pizzas. And don’t go deep on the pasta menu. You know what you’re here for. (It’s clams.)",
    idealMeal: "Dinner",
    price: "$$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu: "Linguine and clam sauce",
    alsoGreat:
      "Baked clams, fried calamari, fried clams, fish salad, shrimp scampi",
    drinkOrder: "A bottle of Sicilian white",
    note: "The staff at Umberto’s rules, even after years of abuse by tourists, it’s a good vibe.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "EL SITIO",
    link: "https://www.yelp.com/biz/el-sitio-restaurant-nyc-new-york",
    description:
      "Dominican classics in Chinatown. You love to see it. And smell it. And eat it. El Sitio is right on Columbus Park and serves a really great Dominican menu, filled with everything from oxtail stew to Dominican breakfast plates to mofongos to pastelitos to fried chicken to papaya milkshakes. It's always a chill vibe and will deliver for a low key lunch whenever you need it.",
    idealMeal: "Lunch",
    price: "$",
    idealGroupNumber: "1-4",
    bestThingOnTheMenu: "Oxtail stew",
    alsoGreat:
      "Pastelitos, eggs with fried Dominican cheese and salami, chicharones de pollo, Asopao de camarones",
    drinkOrder:
      "Papaya milkshakes are unreal, if you’re in the mood to really go for it",
    note: "El Sitio also runs a pretty serious catering operation.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "PING’S",
    link: "https://www.eatatpings.com/",
    description:
      "If you’re looking for a dim sum destination in NYC, Ping’s (also shout out Dim Sum Go Go) is probably my number one recommendation. The all-day dim sum menu is superb, and the rest of the menu follows suit. There’s also an option to do a prix fixe menu, but I’d suggest sticking to a la carte. Anything coming from the woks will be excellent, but I’d especially focus on the seafood options.",
    idealMeal: "(Big) Lunch",
    price: "$$",
    idealGroupNumber: "2-4",
    bestThingOnTheMenu:
      "A dim sum spread (order a lot of what you know and don’t know)",
    alsoGreat:
      "stir fried fish in XO sauce, shrimp stuffed pepper, braised oxtail in curry, sichuan spicy fried chicken, crispy squid, stir fried clams in black bean sauce, sliced jellyfish and brisket platter",
    drinkOrder:
      "You can order a bottle of Dom P. Just saying. Tsingtao works too.",
    note: "You’ll find some dishes with clear European influence throughout the menu, which are fun to explore, but save them for your second time in.",
    guide: "nolita-chinatown-littleitaly",
  },
];
