import { createApp } from "vue";
import App from "./App.vue";
import components from "./components/UI";
import router from "./router/router";
// import dirictives from "./components/dirictives";
import store from "./store/";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

// dirictives.forEach((dirictive) => {
//   app.directive(dirictive.name, dirictive);
// });

// app.use(router).mount("#app");

app.use(router).use(store).mount("#app");
