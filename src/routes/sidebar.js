import {
  FiGrid,
  FiUsers,
  FiUser,
  FiCompass,
  FiSettings,
  FiSlack,
  FiGlobe,
  FiTarget,
  FiSave,
  FiFolder,
  FiShoppingCart,
  FiGift
} from "react-icons/fi";

/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: "/dashboard", // the url
    icon: FiGrid, // icon
    name: "Dashboard", // name that appear in Sidebar
  },
/*
  {
    icon: FiSlack,
    name: "Catalog",
    routes: [
      {
        path: "/products",
        name: "Products",
      },
      {
        path: "/categories",
        name: "Categories",
      },
      {
        path: "/attributes",
        name: "Attributes",
      },
      {
        path: "/coupons",
        name: "Coupons",
      },
    ],
  },
  
  {
    path: "/customers",
    icon: FiUsers,
    name: "Customers",
  },
*/
 
  
  
  {
    path: "/orders",
    icon: FiShoppingCart,
    name: "Orders",
  },
  
  {
    path: "/my-category",
    icon: FiFolder,
    name: "Category",
  },
  {
    path: "/user",
    icon: FiUsers,
    name: "User",
  },
  {
    path: "/our-staff",
    icon: FiUser,
    name: "OurStaff",
  },
  {
    path: "/page",
    icon: FiSave,
    name: "Page",
  }, 

  {
    icon: FiSettings,
    name: "Settings",
    routes: [
      {
        path: "/settings?settingTab=common-settings", 
        name: "General Settings",
      },
      {
        path: "/send-bulk-messages", 
        name: "Send Messages",
      },
      {
        path: "/reviews", 
        name: "Reviews",
      },
      {
        path: "/coupons", 
        name: "Coupons",
      },
      {
        path: "/banners", 
        name: "Banners",
      },
    ],
  },
  /*
  {
    icon: FiGlobe,
    name: "International",
    routes: [
      {
        path: "/languages",
        name: "Languages",
      },
      {
        path: "/currencies",
        name: "Currencies",
      },
    ],
  },
  {
    icon: FiTarget,
    name: "OnlineStore",
    routes: [
      {
        name: "ViewStore",
        path: "http://localhost:3000",
        outside: "store",
      },

      {
        path: "/store/customization",
        name: "StoreCustomization",
      },
      {
        path: "/store/store-settings",
        name: "Store Settings",
      },
    ],
  },

  {
    icon: FiSlack,
    name: "Pages",
    routes: [
      // submenu

      {
        path: "/404",
        name: "404",
      },
      {
        path: "/coming-soon",
        name: "Coming Soon",
      },
    ],
  },
  */
];

export default sidebar;
