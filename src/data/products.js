import sunCream from '../assets/products/Product1.svg';
import nightEyeCream from '../assets/products/Product2.svg';
import bodyProtection from '../assets/products/Product3.svg';
import allInOneGel from '../assets/products/Product4.svg';
import acneSkinGel from '../assets/products/Product5.svg';
import antiDrySkin from '../assets/products/Product6.svg';
import deepTreatment from '../assets/products/Product7.svg';
import morningShine from '../assets/products/Product8.svg';
import product1 from './../assets/singleProducts/Product1.svg';
import product2 from './../assets/singleProducts/Product2.svg';
import product3 from './../assets/singleProducts/Product3.svg';
import product4 from './../assets/singleProducts/Product4.svg';


const products = [
  {
    id: 1,
    sku: 123456789,
    src: sunCream,
    title: 'Sun Cream',
    oldPrice: '$30',
    newPrice: '$20',
    category: 'SUN CARE',
    discount: '20% OFF',
    color: '#FFC123',
    backgroundColor: '#FFF9E9',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 2,
    sku: 123456789,
    src: nightEyeCream,
    title: 'Night Eye Cream',
    oldPrice: '$30',
    newPrice: '$20',
    category: 'EYE CARE',
    discount: '20% OFF',
    color: '#2975FF',
    backgroundColor: '#EAF1FF',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 3,
    src: acneSkinGel,
    sku: 123456789,
    title: 'Acne Skin Gel',
    newPrice: '$20',
    category: 'TREATMENTS',
    color: '#FF66A0',
    backgroundColor: '#FFF0F6',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 4,
    src: antiDrySkin,
    sku: 123456789,
    title: 'Anti Dry Skin',
    newPrice: '$20',
    category: 'MOISTURIZERS',
    color: '#00CC96',
    backgroundColor: '#E6FAF5',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 5,
    src: bodyProtection,
    sku: 123456789,
    title: 'Body Protection',
    newPrice: '$20',
    category: 'TREATMENTS',
    discount: 'NEW IN',
    color: '#FFC123',
    backgroundColor: '#FFF9E9',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 6,
    src: allInOneGel,
    sku: 123456789,
    title: 'All In One Gel',
    newPrice: '$20',
    category: 'FEATURED',
    color: '#2975FF',
    backgroundColor: '#EAF1FF',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 7,
    src: deepTreatment,
    sku: 123456789,
    title: 'Deep Treatment',
    oldPrice: '$30',
    newPrice: '$20',
    category: 'ON SALE',
    discount: '20% OFF',
    color: '#FF66A0',
    backgroundColor: '#FFF0F6',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 8,
    src: morningShine,
    sku: 123456789,
    title: 'Morning Shine',
    newPrice: '$20',
    category: 'NIGHT Care',
    color: '#00CC96',
    backgroundColor: '#E6FAF5',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 9,
    src: acneSkinGel,
    sku: 123456789,
    title: 'Acne Skin Gel',
    newPrice: '$20',
    category: 'TREATMENTS',
    color: '#FF66A0',
    backgroundColor: '#FFF0F6',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 10,
    src: antiDrySkin,
    sku: 123456789,
    title: 'Anti Dry Skin',
    newPrice: '$20',
    category: 'MOISTURIZERS',
    color: '#00CC96',
    backgroundColor: '#E6FAF5',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 11,
    src: bodyProtection,
    sku: 123456789,
    title: 'Body Protection',
    newPrice: '$20',
    category: 'TREATMENTS',
    discount: 'NEW IN',
    color: '#FFC123',
    backgroundColor: '#FFF9E9',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
  {
    id: 12,
    src: allInOneGel,
    sku: 123456789,
    title: 'All In One Gel',
    newPrice: '$20',
    category: 'FEATURED',
    color: '#2975FF',
    backgroundColor: '#EAF1FF',
    singleProducts: [
      {
        id: 1,
        product: product1,
      },
      {
        id: 2,
        product: product2,
      },
      {
        id: 3,
        product: product3,
      },
      {
        id: 4,
        product: product4,
      },
    ],
  },
];

export default products;
