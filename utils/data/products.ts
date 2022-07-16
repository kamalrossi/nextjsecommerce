export const products = [
  {
    id: '1',
    name: 'Mango',
    price: 5,
    discount: 10,
    quantityAvailable: 100,
    category: 'Fruit',
    currentPrice: 4,
    sizes: ['xl', 'l'], 
    colors: ['#000', '6F3E18', '#D4BE8D', '#FFF'],
    images: [
      '/images/products/m.png',
    ],
    punctuation: {
      countOpinions: 81,
      punctuation: 4.5,
      votes: [
        {
          value: 1,
          count: 1
        },
        {
          value: 2,
          count: 10
        },
        {
          value: 3,
          count: 10
        },
        {
          value: 4,
          count: 20
        },
        {
          value: 5,
          count: 40
        },
      ]
    },
    reviews: [
      {
        name: 'John Doe',
        avatar: '/images/featured-1.jpg',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>',
        punctuation: 2
      },
      {
        name: 'John Doe',
        avatar: '/images/featured-1.jpg',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>',
        punctuation: 4
      },
      {
        name: 'John Doe',
        avatar: '/images/featured-1.jpg',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>',
        punctuation: 5
      },
    ]
  },
  {
    id: '2',
    name: 'Onion',
    price: 10,
    quantityAvailable: 2,
    category: 'Vegetable',
    currentPrice: 8,
    sizes: ['xl', 'l'], 
    colors: ['#000', '6F3E18', '#D4BE8D', '#FFF'],
    images: [
      '/images/products/o.png',
    ],
    punctuation: {
      countOpinions: 81,
      punctuation: 4.5,
      votes: [
        {
          value: 1,
          count: 1
        },
        {
          value: 2,
          count: 10
        },
        {
          value: 3,
          count: 10
        },
        {
          value: 4,
          count: 20
        },
        {
          value: 5,
          count: 40
        },
      ]
    },
    reviews: [
      {
        name: 'Veronica',
        avatar: '/images/featured-1.jpg',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>',
        punctuation: 2
      },
      {
        name: 'John Doe',
        avatar: '/images/featured-1.jpg',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>',
        punctuation: 4
      },
      {
        name: 'John Doe',
        avatar: '/images/featured-1.jpg',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>',
        punctuation: 5
      },
    ]
  },
  
];

export default products;
