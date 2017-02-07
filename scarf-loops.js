// loop through array of objects. Print attributes of each object to console. 


var reversiblePlaid = {
  price: 26.99,
  description: "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic."
};

var woolCableKnit = {
  price: 49.99,
  description: "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported."
};

var northernLights = {
  price: 29.99,
  description: "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton."
};

var ombreInfinity = {
  price: 11.99,
  description: "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic."
};

var fringedPlaid = {
  price: 18.99,
  description: "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic."
};

var multiColor = {
  price: 22.99,
  description: "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic"
};

var etroPaisleyPrintSilk = {
  price: 249.99,
  description:"Luxurious silk scarf with subtle paisley pattern. 100% silk"
};

var ashbyTwill = {
  price: 70.99,
  description: "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool"
};

var scarfs = [reversiblePlaid, woolCableKnit, northernLights, ombreInfinity, fringedPlaid, multiColor, etroPaisleyPrintSilk, ashbyTwill];

for (var i = 0; i < scarfs.length; i++) {
    console.log(scarfs[i].price + "\n" + scarfs[i].description + "\n"); 
};

