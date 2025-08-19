import { ADD_PRODUCT, ADD_TO_CART } from "./actions";

const initialState = {
  products: [
    {
      id: 1,
      title: "Laptop",
      description:
        "High performance laptop. new arrivals victus gaming 2023 designed by hp intel core i7 13th generation 14cores 20 threads upto 4.90ghz core i7-13650hx (13th) gen 1 tb ssd storage 16gb ram ddr5 memory",
      price: 1200,
    },
    {
      id: 2,
      title: "Smartphone",
      description:
        "Latest model smartphone with great camera and battery life. Available in multiple colors.  Samsung Galaxy A35 5G storage : 256GB ram:- 8GB battery :-5,000 mAh sim:- Dual physical sim",
      price: 800,
    },
    {
      id: 3,
      title: "Headphones",
      description:
        "Cute cat wireless headphone for kids and girls. High quality sound. Wireless or wired model to connect. Colorful RGB LED Moving light, Long Press the Phone button can control the light on or off.",
      price: 200,
    },
    {
      id: 4,
      title: "Smartwatch",
      description:
        "Js Watch4 Smart Watch 1.52 Amoled HD Screen, Call & Health Monitor. Fitness Tracker & Heart Rate Monitor. Heart Rate/Pulse Tracker. Push Message Remote Control & Call Reminder. Sleep Pattern Tracker",
      price: 250,
    },
  ],
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}

export default rootReducer;
