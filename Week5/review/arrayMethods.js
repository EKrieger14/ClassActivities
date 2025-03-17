const store = [
  {
    category: "Electronics",
    products: [
      {
        id: 101,
        name: "Smartphone",
        brand: "TechCorp",
        price: 699,
        stock: 50,
        reviews: [
          { user: "Alice", rating: 5, comment: "Amazing phone!" },
          { user: "Bob", rating: 4, comment: "Great value for the price." }
        ]
      },
      {
        id: 102,
        name: "Laptop",
        brand: "MegaComp",
        price: 1200,
        stock: 20,
        reviews: [
          { user: "Charlie", rating: 5, comment: "Super fast!" },
          { user: "David", rating: 3, comment: "Battery life could be better." }
        ]
      }
    ]
  },
  {
    category: "Home Appliances",
    products: [
      {
        id: 201,
        name: "Vacuum Cleaner",
        brand: "CleanTech",
        price: 250,
        stock: 80,
        reviews: [
          { user: "Eve", rating: 4, comment: "Works well on carpets!" },
          { user: "Frank", rating: 5, comment: "Quiet and powerful." }
        ]
      },
      {
        id: 202,
        name: "Air Fryer",
        brand: "KitchenPro",
        price: 150,
        stock: 30,
        reviews: [
          { user: "Grace", rating: 4, comment: "Makes crispy fries!" },
          { user: "Hank", rating: 2, comment: "Too small for a family." }
        ]
      }
    ]
  }
];


store.forEach(category => {
  category.products.forEach(product => {
    // console.log(product.name)
  })
} )

const productNames = store.map(category =>
  category.products.map(product => product.name)
).flat()

// console.log(productNames)

const filteredProducts = store.map(category =>
  category.products.filter(product => product.price >= 200)
).flat()

console.log(filteredProducts)


