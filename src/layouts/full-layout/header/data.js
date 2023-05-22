import img2 from '../../../assets/images/users/2.jpg';
import img3 from '../../../assets/images/users/3.jpg';

import sprd1 from '../../../assets/images/products/s1.jpg';
import sprd2 from '../../../assets/images/products/s2.jpg';
import sprd3 from '../../../assets/images/products/s3.jpg';

//
// Notifications dropdown
//
const notifications = [

  {
    avatar: img3,
    title: 'Nuevo Mensaje',
    subtitle: 'Tienes un mensaje de Jeisson',
  }
];

//
// Messages dropdown
//
const messages = [
  {
    avatar: img2,
    title: 'Notificacion 1',
    subtitle: 'Pruebas',
    time: '4:39 AM',
    status: 'success',
  }
];

//
// Ecommerce dropdown
//
const products = [
  {
    imgsrc: sprd1,
    name: 'butterscotch ice-cream',
    subtext: 'Milk product',
    price: '250',
  },
  {
    imgsrc: sprd2,
    name: 'Supreme fresh tomato',
    subtext: 'Vegetable Item',
    price: '450',
  },
  {
    imgsrc: sprd3,
    name: 'Red color candy',
    subtext: 'Food Item',
    price: '190',
  },
];

export { notifications, messages, products };
