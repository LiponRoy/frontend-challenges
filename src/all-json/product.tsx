interface Iproduct {
    product_id: number,
    name: string,
    category: string,
    price: number,
    stock_quantity: number,
}


export const products: Iproduct[] = [
    {
        "product_id": 11111,
        "name": "Product 1",
        "category": "Electronics",
        "price": 499.99,
        "stock_quantity": 50
    },
    {
        "product_id": 22222,
        "name": "Product 2",
        "category": "Clothing",
        "price": 39.99,
        "stock_quantity": 100
    },
    {
        "product_id": 33333,
        "name": "Product 3",
        "category": "Home and Kitchen",
        "price": 129.99,
        "stock_quantity": 25
    },
    {
        "product_id": 44444,
        "name": "Product 4",
        "category": "Sports and Outdoors",
        "price": 79.99,
        "stock_quantity": 75
    },
    {
        "product_id": 55555,
        "name": "Product 5",
        "category": "Books",
        "price": 19.99,
        "stock_quantity": 200
    },
    {
        "product_id": 66666,
        "name": "Product 6",
        "category": "Beauty",
        "price": 49.99,
        "stock_quantity": 30
    },
    {
        "product_id": 77777,
        "name": "Product 7",
        "category": "Toys",
        "price": 34.99,
        "stock_quantity": 60
    },
    {
        "product_id": 88888,
        "name": "Product 8",
        "category": "Furniture",
        "price": 249.99,
        "stock_quantity": 15
    },
    {
        "product_id": 99999,
        "name": "Product 9",
        "category": "Garden",
        "price": 89.99,
        "stock_quantity": 40
    }
]