var names = ["Reversible Plaid", "Wool Cable Knit", "Northern Lights", "Ombre Infinity", "Fringed Plaid", "Multi Color", "Etro Paisley-Print Silk", "Ashby Twill"];
names.sort();

var prices = [26.99, 49.99, 29.99, 11.99, 18.99, 22.99, 249.99, 70.99];
function comparePrices(a, b) {
  return a - b;
}
prices.sort(comparePrices);

function capture(){
  console.log(document.filter.name.value);
  event.preventDefault();
}