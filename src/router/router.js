import { createRouter, createWebHistory } from "vue-router";

import Main from "../pages/Main.vue";
import ReceiptsPage from "../pages/ReceiptsPage.vue";
import ReceiptPage from "../pages/ReceiptPage.vue";
import ReceiptsPageFavorite from "../pages/ReceiptsPageFavorite.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/receipts",
    component: ReceiptsPage,
  },
  {
    path: "/receipts/:id",
    component: ReceiptPage,
  },
  {
    path: "/favorites",
    component: ReceiptsPageFavorite,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
