psGamePrice = Number(prompt('How much is HellDivers 2?'))

discountprice = psGamePrice * 0.9
finalPrice = 'The new discounted price of the game is ' + discountprice.toPrecision(4) + ' dollars'

console.log('Original PS Game Price:', psGamePrice)
console.log('final Price:', finalPrice)