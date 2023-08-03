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

/*
    TASKS:

    1. Get an array of variation IDs that are not in stock
    2. How many total Jeans are in stock?
    3. Do all products have the attribute 'size'?
    4. Write a function that removes items from cart that don't exist among products and use it to save data from cart to a cleanCart variable
      This is your cart from an old session:
      const cart = [
        { product: 'ts', variant: 'tsm', quantity: 2 },
        { product: 'bc', variant: 'bcb', quantity: 10 },
        { product: 'sh', variant: 'shl', quantity: 1 },
        { product: 'trk', variant: 'trk42', quantity: 1 }
      ]
    5. From items in `cleanCart` generate an array of product titles in this pattern:
        'T-shirt (M): 2× 17.99' (where M refers to attribute and 2x refers to quantity)
    6. Calculate the total price for `cleanCart` items
*/
