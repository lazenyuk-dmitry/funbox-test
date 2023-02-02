import { createStore } from "vuex";
import Products from "./modules/products";

export default createStore({
  modules: {
    Products,
  },
});
