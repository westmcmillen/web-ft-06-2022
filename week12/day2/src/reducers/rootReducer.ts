type State = {
  products: { title: string; desc: string[]; src: string; price: number }[];
  cart: {}[];
  order: {};
};

const initialState: State = {
  products: [
    {
      title: "Ethang's Hat",
      desc: [
        "100% Cotton",
        "5 Panel, Structured, High Profile",
        "Eight-Row Stitching on Flat Visor",
        "Hard Buckram Backed Font Panels",
        "4 Sewn Eyelets",
        "Green Undervisor",
        "Plastic Adjustable Closure",
      ],
      src: "👲🏻",
      price: 20,
    },
    {
      title: "Blke Loafers",
      desc: [
        "100% Cotton",
        "5 Panel, Structured, High Profile",
        "Eight-Row Stitching on Flat Visor",
        "Hard Buckram Backed Font Panels",
        "4 Sewn Eyelets",
        "Green Undervisor",
        "Plastic Adjustable Closure",
      ],
      src: "👞",
      price: 100_000,
    },
    {
      title: "Stacy's Engagement Ring",
      desc: [
        "100% Cotton",
        "5 Panel, Structured, High Profile",
        "Eight-Row Stitching on Flat Visor",
        "Hard Buckram Backed Font Panels",
        "4 Sewn Eyelets",
        "Green Undervisor",
        "Plastic Adjustable Closure",
      ],
      src: "💍",
      price: 15_000,
    },
    {
      title: "Andrea's Cat",
      desc: [
        "100% Cotton",
        "5 Panel, Structured, High Profile",
        "Eight-Row Stitching on Flat Visor",
        "Hard Buckram Backed Font Panels",
        "4 Sewn Eyelets",
        "Green Undervisor",
        "Plastic Adjustable Closure",
      ],
      src: "🐈",
      price: NaN,
    },
  ],
  cart: [],
  order: {},
};

type Action = {
  type: string;
  payload?: any;
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action?.type) {
    case "ADD_TO_CART":
      return { ...state, products: [...state.products].filter(value => value !== action.payload), cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, products: [...state.products, action.payload], cart: [...state.cart].filter(value => value !== action.payload) };
    case "BUY_NOW":
      return { ...state, cart: [], order: { ...state.cart } };
    default:
      return state;
  }
};

export default rootReducer;
