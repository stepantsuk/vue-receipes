import { createStore } from "vuex";
import { receiptsModule } from "./receiptsModule";

const store = createStore({
  modules: {
    receipts: receiptsModule,
  },
});

export default store;
