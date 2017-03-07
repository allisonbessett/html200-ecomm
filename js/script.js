var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
];

//TODO: trigger on change of cart contents
//object.onclick = function sumPrices(cartArray) {
  // for loop through array, sum value of price attribute for each object

// if i >= 0
//splice to get it out of the array
// else if index < 0, not in array, (else) so push into array
//


//function removeAnswer() {
//  var remove = document.removalForm.remove.value;
//  var index = fortunes.indexOf(remove);
//  
//  if(index >= 0) {
//    fortunes.splice(index, 1)
//  }
//  console.log(fortunes);
//  event.preventDefault();
  
//var cartArray[];
//function addButton() 
//  var total = 0;
//  //cartArray.push(whatever)
//  var test = this.getAttribute('value');
//  console.log(test);
//  var addTo = document.addButton.push.value;
//  var index = sumPrices.indexOf(push);
//  cartArray.push(addTo);
//  for (var i=0; i<cartArray.length; i++){
//    if (cartArray[i].price >= 0) {
//      total = total+cartArray[i].price;
//      console.log(cartArray.length);
//    }
//  }
//  
//  console.log(sumPrices);
//  event.preventDefault();
//  //TODO: print total as HTML to page next to cart icon
//  //document.labelname.
//  console.log(total);
//}

var cartArray[];
var cartTotal = 0;
function addButton(scarf){
 for (i = 0; i <= products.length; i++) {
   if (products[i].name = scarf) {
     cartArray.push;
     cartTotal += products[i].price;
   }
 }
}


//fuction addButton(p1) {
//	for (var i = 0; i<products.length; i++){
//		if (products[i].name = p1) {
//			cartTotal += products[i].price;
//		}
//	}
//}

var names = ["Reversible Plaid", "Wool Cable Knit", "Northern Lights", "Ombre Infinity", "Fringed Plaid", "Multi Color", "Etro Paisley-Print Silk", "Ashby Twill"];
names.sort();

var prices = [26.99, 49.99, 29.99, 11.99, 18.99, 22.99, 249.99, 70.99];
function comparePrices(a, b) {
  return a - b;
}
prices.sort(comparePrices);









