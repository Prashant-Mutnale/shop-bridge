export default function priceFormat (price){
    var formatter = new Intl.NumberFormat('en-IN', {
        // minimumFractionDigits: 2,
        maximumSignificantDigits: 3 
      });
      return formatter.format(price)
    // return price
}