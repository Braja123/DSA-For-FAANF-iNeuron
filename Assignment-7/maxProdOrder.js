// 3. An e-commerce site tracks the purchases made each day. The product that is purchased
// the most one day is the featured product for the following day. If there is a tie for the product
// purchased most frequently, those product names are ordered alphabetically ascending and
// the last name in the list is chosen.[Amazon]
// ['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat','pinkHat', 'blackShirt', 'yellowShirt',
// 'greenPants', 'greenPants', 'greenPants']
// 'yellowShirt' - 2
// 'redHat' - 2
// 'blackShirt' - 2
// 'bluePants' - 1
// 'greenPants' - 3
// 'pinkHat' - 1
// Output - greenPants

const maxProductOrder = (arr1) => {
  // sort the products
  let sortProd = arr.sort((a, b) => a.localeCompare(b));
  console.log(sortProd);
  // check product items length
  let freq = {};
  for(let item of sortProd) {
    freq[item] = (freq[item] || 0) + 1;
  }
  console.log(freq);
  // return most purchased order
  let max = 0;
  let product = '';
  for(let item in freq) {
    if(freq[item] >= max) {
      max = freq[item]
      product = item;
    }
  }
  return product;
}
let arr = ['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat','pinkHat', 'blackShirt', 'yellowShirt',
'greenPants', 'greenPants', 'greenPants']

console.log(maxProductOrder(arr));