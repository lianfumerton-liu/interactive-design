$( document ).ready(function() {
  $('#sound')[0].play();

  var cursor =["#custom-cursor","#custom-cursor2","#custom-cursor3","#custom-cursor4","#custom-cursor5"]
  var random_cursor = cursor[Math.floor(Math.random() * cursor.length)];

  $(document).on('mousemove', function (e) {
    $(random_cursor).css({
        left: e.pageX,
        top: e.pageY,
        pointerEvents: 'none',
        opacity: 100
    });
});

  $( "#refresh" ).click(function() {
         location.reload();
});

var flavorsome = ["7up",
"a la carte",
"a la king",
"a la mode",
"acai berry",
"acid",
"acidic",
"acrid",
"airy",
"al dente",
"alcoholic",
"alligator pepper",
"almond ",
"almond flavored",
"ambrosial",
"americone dream",
"angel's wings",
"angular",
"appetizing",
"apple cider",
"apple pumpkin",
"aroma",
"aromatic",
"au fromage",
"au gratin",
"au jus",
"austere",
"autumn leaves",
"autumn wreath",
"avocado leaf",
"bahama breeze",
"balsam & cedar",
"balsamic",
"banana split",
"barbados cherry",
"barbecue",
"barnyard",
"basil",
"battered",
"bay leaf",
"bay leaf wreath",
"beach flowers",
"beach holiday",
"beach vacation",
"beach walk",
"beach wood",
"berry blue",
"berrylicious",
"big",
"birthday cake remix",
"bite-size",
"biting",
"bitter",
"black cardamom",
"black cherry",
"black coconut",
"black mustard",
"black pepper",
"blackened",
"blah",
"blanched",
"bland",
"blended",
"blue summer sky",
"blueberries and cream",
"blueberry",
"blueberry scone",
"blueberry vanilla graham",
"bold",
"bolognese",
"boned",
"booger",
"boom chocolatta",
"boston cream pie",
"brackish",
"braised",
"brewed",
"bright",
"briny",
"brittle",
"broiled",
"brown mustard",
"browned",
"bubble gum",
"bubbly",
"burning",
"bursting",
"buttercream",
"buttered popcorn",
"butterflied",
"butterscotch sundae",
"buttery",
"cacciatore",
"cake batter",
"campfire treat",
"candied",
"candy apple",
"candy bar pie",
"candy cane lane",
"candyfloss",
"canned",
"cantaloupe",
"caper",
"cappuccino",
"caramel corn",
"caramel pecan pie",
"caramelized",
"carbonated",
"cardamom",
"catnip",
"caustic",
"cayenne pepper",
"celebrate christmas",
"celery leaf",
"celery seed",
"chalky",
"charcoal ",
"charcuterie",
"charred",
"cheesecake brownie",
"cheesy",
"cherry cheesecake",
"cherry garcia",
"chewy",
"chicory",
"chili",
"chili mango ",
"chili pepper",
"chilled",
"chipotle",
"chives",
"chocolate chip cookie dough",
"chocolate fudge brownie",
"chocolate layer cake",
"chocolate peppermint crunch",
"chocolate pudding",
"chocolate therapy",
"chocolaty",
"chopped",
"chowder",
"christmas cookie",
"christmas eve",
"christmas wreath",
"chubby hubby",
"chunky monkey",
"cigar box",
"cilantro",
"cinnamon",
"cinnamon bun",
"cinnamon stick",
"cinnamon vanilla",
"citrus tango",
"clarified",
"classical",
"clean cotton",
"clove",
"coconut",
"coconut & vanilla bean",
"coconut bay",
"coffee toffee bar crunch",
"coffee, coffee buzzbuzzbuzz",
"comfort food",
"complex",
"condensed",
"condiment",
"coriander seed",
"cotton candy",
"course",
"cranberry chutney",
"cranberry pear",
"cranberry peppermint",
"cranberry raspberry",
"cream soda",
"creamed",
"creamery",
"creamy",
"creole",
"crisp",
"crispy",
"crumbly",
"crunchy",
"crushed pineapple",
"crusty",
"crystalized",
"cuisine",
"cumin",
"curd",
"curdled",
"cured",
"curried",
"curry",
"dash",
"decadent",
"deglaze",
"dehyrated",
"delectable",
"delicious",
"delightful",
"dense",
"devein",
"deviled",
"dietary",
"dill",
"diluted",
"dipping",
"dirt",
"disagreeable",
"disgusting",
"distasteful",
"distinctive",
"divine",
"dr pepper",
"dredged",
"drenched",
"dried out",
"dripping",
"drizzled",
"dry",
"dry-roasted",
"dull",
"dusted",
"early sunrise",
"earthworm",
"earthy",
"earwax",
"eatable",
"edible",
"elderflower",
"elegant",
"enjoyable",
"enticing",
"escalloped",
"etouffee",
"eucalyptus",
"evaporated",
"evening air",
"everything but theâ€¦",
"exotic bloom",
"exquisite",
"farmer's market",
"fat",
"fat-free",
"feathery",
"fennel",
"fermented",
"fibrous",
"fiery",
"filling",
"fine",
"finger licking good",
"fishy",
"fizzy",
"flabby",
"flakey",
"flamboyant",
"flambe",
"flavorless",
"flavorsome",
"fleshy",
"florentine",
"floury",
"fluffy",
"fluffy towels",
"foie gras",
"folded",
"foul",
"fra diablo",
"fragrant",
"freeze dried",
"french vanilla",
"fresh",
"fresh cut roses",
"fricasseed",
"fried",
"frosty",
"frozen",
"fruit fusion",
"fruit punch",
"fruity",
"full-bodied",
"full-flavored",
"gamy",
"garlicky",
"gastric",
"gingerbread",
"gingery",
"glazed",
"glopy",
"glossy",
"gluten-free",
"gluteny",
"golden sands",
"good",
"gooey",
"grainy",
"granulated",
"grape crush",
"grapevine & oak",
"grass",
"grated",
"gratifying",
"greasy",
"green apple",
"green grass",
"greenhouse",
"griddled",
"grilled",
"grippy",
"gritty",
"gross",
"half baked",
"hardboiled",
"harvest",
"hazed & confused",
"hazelnut coffee",
"heady",
"healthy",
"hearty",
"heat",
"heavenly",
"heavy",
"herbaceous",
"hint",
"hint of",
"holiday bayberry",
"home for the holiday",
"homogenized",
"honey blossom",
"honeydew melon",
"honeyed",
"hors d'oeuvre",
"horseradish",
"hot",
"hot sauce",
"icy",
"infused",
"intellectually satisfying",
"intense",
"inviting",
"island punch",
"island spa",
"jasmine",
"juicy",
"juicy peach",
"juicy pear",
"juicy watermelon",
"julienne",
"juniper berry",
"karamel sutra",
"kick",
"kitchen spice",
"kiwi",
"kiwi strawberry",
"kosher",
"laced",
"laden",
"laiche",
"lake sunset",
"laser-like",
"lavender",
"lavender vanilla",
"layered",
"lazy sunday",
"leather",
"lemon drop",
"lemon lavender",
"lemon lime",
"lemon meringue pie",
"lemony",
"licorice",
"light",
"lilac blossoms",
"limp",
"lip-smacking",
"liquid",
"liz lemon",
"low-calorie",
"low-fat",
"luau party",
"lumpy",
"luscious",
"luscious plum",
"lusty",
"lyonnaise",
"macintosh",
"magical frosted forest",
"malodorous",
"mandarin cranberry",
"mango",
"mango madness",
"mango peach salsa",
"margarita",
"margarita time",
"marinate",
"marvelous",
"mashed",
"meadow showers",
"mealy",
"medium",
"mellow",
"melting",
"merry marshmallow",
"messy",
"meyer lemon",
"microwave",
"midnight jasmine",
"midnight oasis",
"midsummer's night",
"mild",
"milk & cookies",
"milky",
"minced",
"minerally",
"mint",
"mint chocolate cookie",
"minty",
"mistletoe",
"mixed",
"mixed berry smoothie",
"mocha latte",
"moist",
"mojito",
"moldy",
"mountain lodge",
"mouth-watering",
"muddy",
"mushy",
"napa valley sun",
"nasty",
"natural",
"nauseating",
"nectarous",
"new york super fudge chunk",
"north pole",
"nosey",
"nourishing",
"november rain",
"noxious",
"nuked",
"nutmeg",
"nutriment",
"nutritious",
"nutty",
"oaked",
"ocean star",
"ocean water",
"odoriferous",
"odorless",
"oily",
"oniony",
"oozing",
"opulent",
"orange creamsicle",
"orange crush",
"orange dreamsicle",
"orange sherbet",
"orange splash",
"organic",
"over the river",
"overpowering",
"palatable",
"pan-fried",
"paprika",
"paradise spice",
"parboiled",
"parched",
"parsley",
"pasteurized",
"pasty",
"patchouli",
"peach",
"peach bellini",
"peach cobbler",
"peanut buttah",
"peanut butter fudge",
"peanut butter half baked",
"peck",
"penetrating",
"pepper",
"peppered",
"peppermint bark",
"peppery",
"perfumed",
"perishable",
"phish food",
"piccata",
"pickled",
"picnic in the park",
"pina colada",
"pineapple cilantro",
"pineapple passionfruit",
"pink lemonade",
"pink sands",
"piping",
"piquant",
"pistachio pistachio",
"pleasant",
"plum",
"pomegranate",
"pomegranate cider",
"pomegranate cosmo",
"potent",
"pouched",
"powdered",
"powdery",
"preserved",
"puffy",
"pulp",
"pulverized",
"pumpkin buttercream",
"pumpkin cheesecake",
"pumpkin ginger bark",
"pumpkin pie",
"pumpkin wreath",
"pungent",
"ragout",
"rancid",
"rank",
"rare",
"raspberry",
"raw",
"red apple",
"red apple wreath",
"red berry & cedar",
"red raspberry",
"red velvet",
"red velvet cake",
"redolent",
"reduced",
"reeking",
"refined",
"refreshing",
"relish",
"rib sticking",
"rich",
"ripe",
"roasted",
"robust",
"root beer",
"root beer float",
"rosemary",
"rotten",
"rotten egg",
"roux",
"ruined",
"runny",
"saffron",
"sage",
"sage & citrus",
"saline",
"salt water taffy",
"salted",
"salted caramel",
"salty",
"sapid",
"saporous",
"sassafras",
"saturated",
"sausage",
"saute",
"savory",
"scalded",
"scented",
"scorched",
"scrambled",
"scrumptious",
"sea coral",
"seared",
"seasoned",
"sharp",
"shredded",
"silky",
"silver birch",
"simmering",
"sizzling",
"sizzling cinnamon",
"skimmed",
"skunky",
"slathered",
"sliced",
"slimy",
"slivered",
"smelly",
"smokey",
"smooth",
"smothered",
"snappy",
"snowflake cookie",
"soaked",
"soap",
"sodden",
"soft",
"soft blanket",
"soft-boiled",
"soggy",
"sordid",
"souffle",
"soupy",
"sour",
"sour cherry",
"soy",
"sparkling",
"sparkling cinnamon",
"sparkling snow",
"spectacular speculoos",
"spiced pumpkin",
"spicy",
"spirited",
"spoiled",
"spongy",
"spread",
"sprinkled",
"stale",
"starchy",
"steamy",
"steely",
"stewed",
"stiff",
"stinging",
"stinky",
"storm watch",
"strawberry cheesecake",
"strawberry daiquiri",
"strawberry jam",
"strawberry shortcake",
"stringy",
"strong",
"structured",
"stuffed",
"subdued",
"succulent",
"sugar-coated",
"sugar-free",
"sugared apple",
"sugary",
"summer scoop",
"summer wish",
"sun & sand",
"sunflower",
"sunkist lemon",
"sunkist lime",
"sunkist orange",
"sunkist tangerine",
"sunnyside up",
"sunsets pink grapefruit",
"sweet",
"sweet and sour",
"sweet strawberry",
"syrupy",
"s'mores",
"tabasco",
"tainted",
"tangy",
"tantalizing",
"tarragon",
"tart",
"tasteless",
"tasty",
"tempting",
"tender",
"tepid",
"texture",
"that's my jam",
"the tonight dough",
"thick",
"thyme",
"tight",
"titillating",
"toasted",
"toasted marshmallow",
"toasty",
"toothsome",
"top banana ",
"tough",
"treehouse memories",
"true rose",
"tulips",
"tumaceous",
"turquoise sky",
"tutti-fruitti",
"two wild & crazy pies",
"unctuous",
"under the palms",
"unoaked",
"unsavory",
"vanilla",
"vanilla chai",
"vanilla cupcake",
"vanilla lime",
"velvety",
"very cherry",
"vicious",
"vinegary",
"vineyard",
"vomit",
"waikiki melon",
"warm",
"wasabi",
"water garden",
"watercress",
"watermelon",
"watery",
"wayne'swirled",
"wedding day",
"well-done",
"wet",
"what a cluster",
"whey",
"whipped",
"white chocolate apple",
"white christmas",
"white gardenia",
"wholesome",
"whoopie pie!",
"wild",
"wild blackberry",
"wild sea grass",
"wilted",
"windblown",
"winter garden",
"yucky",
"yummy",
"zest",
"zestful",
"zesty",
"zippy",
"home sweet home"];

  var img = ["products/febreze.png","products/lipbalm.jpg","products/tooth.jpg","products/axe.jpg","products/paper.jpg","products/towel.jpg","products/taco.jpg","products/slurpee.jpg","products/yogurt.jpg","products/cone.jpg","products/litter.jpg","products/lotion.jpg","products/candle.JPG","products/shirt.jpg","products/ridged.jpg","products/pie.jpg","products/shirt2.jpg","products/haribo.jpg","products/measure.jpg", "products/bowl.jpg", "products/solo.jpg","products/Lollipops.jpg","products/smell.jpg","products/bean.jpg","products/mints.png","products/wine.jpeg"];

// 1) Find your API's unique code.
//    To do this, go to your API's page and copy the string of numbers and letters after "apis/" in the URL
//    Paste this code in line 10 of the below code after "api/" and before the "?"

// 2) Find your username's unique API key.
//    When you are logged into Kimono, click your name at the top right and click "Account".
//    Your API key will appear. Paste this code in line 10 of the below code after "apikey-"

$.ajax({
  "url":"https://www.kimonolabs.com/api/4zfx1j62?apikey=yTczFgc5RrtElD4akPCpD7grhiQzkWVy",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data
  

  var flavor1 = flavorsome[Math.floor(Math.random() * flavorsome.length)];
  var flavor2 = flavorsome[Math.floor(Math.random() * flavorsome.length)];

  while (flavor1 == flavor2) {
    flavor2 = flavorsome[Math.floor(Math.random() * flavorsome.length)];
  }

  var collection = response.results.collection1;

  //random
  var caption_number = Math.floor(Math.random() * (collection.length - 1));
  var text = collection[caption_number].captions;

  var words = text.text.split(" ");
  var number_of_words = Math.floor(Math.random() * 2) + 2;

  if (number_of_words > words.length) {
    number_of_words = words.length;
  }

  var image_number = Math.floor(Math.random() * (img.length));
  $('#image1').attr("src", img[image_number]);

  $('.group').append(flavor1 + ' ');
  var start_number = Math.floor(Math.random() * (words.length - number_of_words));
  for (var i = start_number; i < (number_of_words + start_number); i++) {
    /*if (i == number_of_words + start_number - 1) {
      $('.group').append(words[i] + '<br>');
    }*/
    //else {
      $('.group').append(words[i] + ' ');//timeStamp + '<br>' + '<img src="' + photoURL + '">');
    //}
  }

  var color =["blue","red","lime","orange","yellow","fuchsia","BlueViolet"]
  var random_color = color[Math.floor(Math.random() * color.length)];
  var random_color2 = color[Math.floor(Math.random() * color.length)];

  var random_text = Math.floor(Math.random() * 230) + 100;
  var random_image_x = Math.floor(Math.random() * 1400) - 400;
  var random_image_y = Math.floor(Math.random() * 200) - 200;
  var random_image = Math.floor(Math.random() * 200) + 30;
  //var random_stroke = Math.floor(Math.random() * 5) + 2;
  var random_stroke = random_text / 50;

  $('.group').append(flavor2 + '<br>');

  $('body').css({
    'border-color' : random_color
  });

  $('p').hover(function(){
    $('p').css("color", random_color2);
    }, function(){
    $('p').css('color', 'white')
});

  $('.group').css({
    'font-size' : random_text + '%',
    '-webkit-text-stroke-color' : random_color,
    '-webkit-text-stroke-width' : random_stroke + 'px'
  });

  $('.bar').css({
    'background' : random_color 
  });

   $('#image1').css({
    'position' : 'absolute',
    'left' : random_image_x + 'px',
    'top' : random_image_y + 'px',
    'height' : random_image + '%'
  });



  console.log(text);
  console.log(number_of_words);
  console.log(start_number);
  console.log(image_number);
  console.log(random_color);
  }
});

});