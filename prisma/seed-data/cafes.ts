interface Cafe {
  name: string;
  description: string;
  link: string;
  coffeeBeans: string;
  bakedGoods: string;
  specialty: string;
  note: string;
  roomToHang: string;
  guide: string;
}

export const cafes: Cafe[] = [
  {
    name: "ROUND K",
    link: "https://www.roundk.com/",
    description:
      "Everything at Round K is great. It’s a go-to for coffee, but the fried chicken sandwich should not be overlooked, nor should the avocado toast, served on Mel Bakery sourdough. Or the cocktails they serve at night in the back room. This is a shining light on that weird little strip of Canal between the bridge and Allen St.",
    coffeeBeans: "Round K",
    bakedGoods: "From Mel, and a full food menu too",
    specialty:
      "Everything. The food is excellent. The espresso is excellent. The cold brew is excellent. The specialty coffee drinks are excellent. Cocktails too.",
    roomToHang: "Indoor and outdoor, they have a backyard",
    note: "",
    guide: "les",
  },
  {
    name: "LITTLE CANAL",
    link: "https://www.littlecanal.com/",
    description:
      "Some would say LC is the ultimate Dimes Square meeting place. Those people would be right. Espresso and drip are both great and the crew behind the counter is one of the best (and most fun) in the city.",
    coffeeBeans: "Variety Coffee Roasters",
    bakedGoods: "Balthazar",
    specialty:
      "Vegetarian-friendly food menu is better than it needs to be. The Hangover Wrap is excellent.",
    roomToHang: "Indoor and outdoor",
    note: "",
    guide: "les",
  },
  {
    name: "OLIVER COFFEE",
    link: "https://www.olivercoffee.com/",
    description:
      "You can order inside, amongst a great packaged snack selection, or at the window outside at Oliver Coffee. The vibe is great. And it’s pretty much the only spot for a good cup in a five block radius. Also, the window at Oliver Coffee is cute as shit. You can Instagram it. It will look great.",
    coffeeBeans: "Variety Coffee Roasters",
    bakedGoods: "Yes",
    specialty: "Cold brew",
    roomToHang: "Outdoor",
    note: "",
    guide: "les",
  },
  {
    name: "COLBO",
    link: "https://colbo.nyc/",
    description:
      "Colbo is just as much a coffee shop as it is an art gallery, a record store, and a clothing boutique. The vibe is excellent. Get your coffee to stay. It’s served in custom ceramics.",
    coffeeBeans: "Canyon Coffee",
    bakedGoods: "Rotating offerings from local bakers like Takeout Delivery",
    specialty: "Espresso drinks",
    roomToHang: "Indoor and outdoor",
    note: "",
    guide: "les",
  },
  {
    name: "ERNESTO’S CAFE",
    link: "https://www.ernestosnyc.com/cafe",
    description:
      "Ernestos’ (the restaurant) also has a small cafe space around the corner from their main door, and the coffee is killer. There’s a small selection of house-made pastry, and you can watch chefs prep in the open kitchen next to the coffee counter as you wait. It’s also the only place in NYC to get Portland, Maine’s Tandem Coffee Roasters coffee.",
    coffeeBeans: "Tandem Coffee Roasters",
    bakedGoods: "All made in-house",
    specialty: "Bocadillo sandwich is a must order",
    roomToHang: "Indoor and outdoor",
    note: "",
    guide: "les",
  },
  {
    name: "HAWA",
    link: "https://www.yelp.com/biz/hawa-smoothies-new-york-4",
    description:
      "OK, no coffee here. Hawa is a chain of smoothie and juice places that have a bunch of locations across NYC, but the LES East Broadway location is the best. The menu is large. The prices are cheap. They’ll do just about anything involving fruit and vegetables and a blender.",
    coffeeBeans: "",
    bakedGoods: "No",
    specialty: "Smoothies and juices",
    roomToHang: "No",
    note: "Cash only",
    guide: "les",
  },
  {
    name: "CAFE INTEGRAL",
    link: "https://www.cafeintegral.com/",
    description:
      "Integral is my number one stop for espresso in NYC. And for cold brew. And for half gallons of house-made coconut milk. And also for specialty coffee drinks. And also for some good old fashioned drip. OK, it's my favorite coffee shop in NYC. There. I said it. The house-roasted beans (always from Nicaragua) are brewed and served perfectly every time.",
    coffeeBeans: "Roasted in-house",
    bakedGoods: "Yes",
    specialty: "Everything",
    roomToHang: "Inside and a couple benches outside",
    note: "Don’t gloss over the specialty drinks, like the ‘sprocaine, made with espresso, Mexican Coke, and bitters. Or the Olivia, espresso, house almond milk, cinnamon, and date, shaken over ice. They’re truly delicious.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "THE ELK",
    link: "https://www.theelknyc.com/",
    description:
      "The Elk has been the best stop for coffee in the West Village for some time, and they just opened a new location in Nolita not too long ago. If you don;t feel like walking a few blocks further south to Cafe Integral or North to Cafe Lyria in NoHo, it's definitely the best option for coffee in the heart of Nolita. Their lunch and breakfast menu is also great for light simple food.",
    coffeeBeans: "Parlor Coffee",
    bakedGoods: "Yupppp and a full kitchen",
    specialty: "Espresso",
    roomToHang: "A few tables outside",
    note: "The Elk has two other locations, one in the West Village and one in FiDi.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "MATCHAFUL",
    link: "https://www.matchaful.com/collections/all-products",
    description:
      "Matchaful is definitely the best matcha shop chain in NYC that panders more to an Instagram-focused crowd. They serve colorful, layered drinks and bowls, ready to be posted, tagged, and then enjoyed. It has two locations downtown, and the Nolita location is on that hot block of Mulberry, next to Upside Pizza. Their vegan matcha soft serve is also quite good.",
    coffeeBeans: "In-house matcha",
    bakedGoods: "Yes, and bowls",
    specialty: "Matcha",
    roomToHang: "Outside",
    note: "",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "KORÉ COFFEE",
    link: "https://www.instagram.com/kore.coffee/?hl=en",
    description:
      "There are quite a few cafes in NYC that serve the always-excellent beans from Durham’s Counter Culture Coffee, and Korean cafe Koré Coffee is one of the best. It’s on the top of the last block of Elizabeth, between Canal and Bayard, which doesn;t get as much foot traffic as Mott and Mulberry, beside it. Koré is a nice little stop to escape busy Chinatown sidewalks, if only for a minute.",
    coffeeBeans: "Counter Culture",
    bakedGoods: "Croissant waffles (for real)",
    specialty: "Espresso",
    roomToHang: "A few tables inside",
    note: "The “croffles” seem very Instagram-y (they are) but they’re really quite good.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "ENLY",
    link: "https://enlynyc.com/",
    description:
      "OK, Enly is just as much a coffee shop as it is a candle store. Their candles smell great, but I’m most often in for coffee or matcha. (You can only burn so many candles so quickly.) They pull consistently solid espresso and serve some really great specialty drinks, like their strawberry milk matcha latte and beso quemado (latte with burnt sugar).",
    coffeeBeans: "Parlor Coffee",
    bakedGoods: "Yes",
    specialty: "Espresso and Matcha",
    roomToHang: "Inside and outside",
    note: "",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "SUGARCANE DADDY",
    link: "https://www.instagram.com/sugarcanedaddynyc/?utm_medium=copy_link",
    description:
      "Fresh sugarcane juice. Have you had it? No? Remedy that immediately. The crew at Sugarcane Daddy peels and juices fresh sugarcane to make a wildly refreshing juice. You can grab one straight-up, but I like adding another hit of fruit juice on top. Watermelon. Kumquat. Pineapple. It’s all great, and not as sweet as you’d think.",
    coffeeBeans: "",
    bakedGoods: "No",
    specialty: "Juiceeeeeee",
    roomToHang: "Inside and out",
    note: "SD is located in Nha Trang One, a Vietnamese restaurant on Baxter St.",
    guide: "nolita-chinatown-littleitaly",
  },
  {
    name: "CAFE LYRIA",
    link: "https://www.instagram.com/cafelyria/",
    description:
      "Cafe Lyria is the best option for coffee in SoHo and NoHo, and there’s no room for argument there. The espresso is pulled expertly, and the iced coffee is perfectly weighted. The iced tea is made with sage from the Taygetos mountains in Greece, and all sweetened drinks are done so with Greek thyme wildflower honey from Crete island. It’s all deeply considered, including the decor, an assortment of family heirlooms and photographs taken by owner Yannis Mastoros. Cafe Lyria rules and is one of the best cafes anywhere in Manhattan.",
    coffeeBeans: "Passenger Coffee",
    bakedGoods: "Coffee cookies baked on Crete Island in Greece",
    specialty:
      "Everything is great. Drip. Espresso. And don’t sleep on the teas.",
    roomToHang:
      "Indoor and outdoor, they are situated in the lobby of an office building with a small lounge",
    note: "",
    guide: "soho-noho",
  },
  {
    name: "KETTL",
    link: "https://kettl.co/",
    description:
      "Kettl is one of the best places to drink tea anywhere in NYC. Their main hub is in Greenpoint, but they also have a small window at the Bowery Market. Their specialty lies in Japanese tea, including matcha, and you should spend a minute tasting and considering whatever ends up in your cup. The staff is always super knowledgeable and happy to explain tea flavor profiles and origins.",
    coffeeBeans: "in-house brand teas",
    bakedGoods: "In-house",
    specialty: "Japanese tea",
    roomToHang: "A few stools outside",
    note: "",
    guide: "soho-noho",
  },
  {
    name: "SATURDAYS NYC",
    link: "https://www.saturdaysnyc.com/",
    description:
      "I’m not the biggest fan of La Colombe beans, but I’ll gladly drink them when I’m sitting in the Saturdays backyard. It is (and has been for a decade) the best spot to sit and drink a coffee outside in downtown Manhattan. You have to walk past the counter, through the shop, and out the backdoor to get to the benches. Sit down. Chill. Stay a while.",
    coffeeBeans: "La Colombe",
    bakedGoods: "Balthazar",
    specialty: "Cold brew/drip",
    roomToHang: "One of the best backyards in NYC, through the shop",
    note: "",
    guide: "soho-noho",
  },
  {
    name: "BOBA GUYS",
    link: "https://www.bobaguys.com/",
    description:
      "This San Francisco shop has opened a few locations in NYC over the years, and while I am certainly no expert in the field of boba, Boba Guys serves the best boba I’ve ever had. Their tea is brewed with all whole-leaf teas, and all of their ingredients are organic. In SoHo they’ve got a location on Houston and Greene, as well as a location in the Canal Street Market. There are a TON of very delicious drinks on this menu, so start with a classic black tea and work your way out from there.",
    coffeeBeans: "Tea People",
    bakedGoods: "",
    specialty: "Boba teas",
    roomToHang: "Nope",
    note: "",
    guide: "soho-noho",
  },
  {
    name: "MATCHAFUL",
    link: "https://www.matchaful.com/",
    description:
      "Matchaful is definitely the best matcha shop chain in NYC that panders more to an Instagram-focused crowd. They serve colorful, layered drinks and bowls, ready to be posted, tagged, and then enjoyed. It has two locations downtown, and the SoHo location is down on Canal Street, on the same block as Cool Wines and Spirits. Their vegan matcha soft serve is also quite good.",
    coffeeBeans: "In-house matcha",
    bakedGoods: "Yes, and bowls",
    specialty: "Matcha",
    roomToHang: "Inside",
    note: "",
    guide: "soho-noho",
  },
];
