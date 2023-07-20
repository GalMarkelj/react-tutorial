const products = [
  {
    id: 'ts',
    name: 'T-shirt',
    attribute: 'size',
    price: '17.99',
    variations: [
      { id: 'tsm', variant: 'M', stock: 9 },
      { id: 'tsl', variant: 'L', stock: 0 },
      { id: 'tsxl', variant: 'XL', stock: 14 }
    ]
  },
  {
    id: 'j',
    name: 'Jeans',
    attribute: 'size',
    price: '59.50',
    variations: [
      { id: 'j32', variant: '32', stock: 3 },
      { id: 'j36', variant: '36', stock: 12 },
      { id: 'j40', variant: '40', stock: 7 }
    ]
  },
  {
    id: 'bc',
    name: 'Baseball Cap',
    attribute: 'color',
    price: '22.11',
    variations: [
      { id: 'bcr', variant: 'red', stock: 0 },
      { id: 'bcb', variant: 'blue', stock: 2 }
    ]
  },
  {
    id: 'sh',
    name: 'Shorts',
    attribute: 'size',
    price: '35.01',
    variations: [
      { id: 'shs', variant: 'S', stock: 11 },
      { id: 'shm', variant: 'M', stock: 2 },
      { id: 'shl', variant: 'L', stock: 4 }
    ]
  },
  {
    id: 'trk',
    name: 'Track shoes',
    attribute: 'size',
    price: '91.35',
    variations: [
      { id: 'trk39', variant: '39', stock: 8 },
      { id: 'trk42', variant: '42', stock: 0 },
      { id: 'trk45', variant: '45', stock: 1 }
    ]
  }
]

// 1. Get an array of variation IDs that are not in stock
const variationsNotInStock = products.map((product) =>
  product.variations
    .filter((variation) => variation.stock < 1)
    .map((variation) => variation.id))
    .flat()
console.log('variationsNotInStock: ', variationsNotInStock)

// 2. How many total Jeans are in stock?
const jeansInStock = products.find((product) => product.name === 'Jeans').variations.reduce((acc, cur) => acc + cur.stock, 0)
console.log('jeansInStock: ', jeansInStock)

// 3. Do all products have the attribute 'size'?
const allProductsHaveSize = products.every((product) => products.attribute === 'size')
console.log('allProductsHaveSize: ', allProductsHaveSize)

// This is your cart from an old session:
const cart = [
  { product: 'ts', variant: 'tsm', quantity: 2 },
  { product: 'bc', variant: 'bcb', quantity: 10 },
  { product: 'sh', variant: 'shl', quantity: 1 },
  { product: 'trk', variant: 'trk42', quantity: 1 }
]

// 4. Write a function that removes items from cart that don't exist among products and use it to save data from cart to a cleanCart variable
const getCleanCart = (cart) => cart.filter((cartItem) => {
  const matchingProduct = products.find((product) => product.id === cartItem.product)
  if (!matchingProduct) return false
  const matchingVariant = matchingProduct.variations.find((variant) => variant.id === cartItem.variant)
  if (!matchingVariant) return false
  return matchingVariant.stock >= cartItem.quantity
  })
const cleanCart = getCleanCart(cart)
console.log('cleanCart: ', cleanCart)

// 5. From items in `cleanCart` generate an array of product titles in this pattern:
// 'T-shirt (M): 2× 17.99' (where M refers to attribute and 2x refers to quantity)
const cartItemTitles = cleanCart.map((cartItem) => {
  const matchingProduct = products.find((product) => product.id === cartItem.product)
  const matchingVariant = matchingProduct.variations.find((variant) => variant.id === cartItem.variant)
  return `${matchingProduct.name} (${matchingVariant.variant}): ${cartItem.quantity}× ${matchingProduct.price}`
})
console.log('cartItemTitles: ', cartItemTitles)

// 6. Calculate the total price for `cleanCart` items
const totalPrice = cleanCart
  .reduce((acc, cur) => {
    const matchingProduct = products.find((product) => product.id === cur.product)
    const price = Number.parseFloat(matchingProduct.price) * cur.quantity
    return acc + price
  }, 0)
  .toFixed(2)
console.log('totalPrice: ', totalPrice)
