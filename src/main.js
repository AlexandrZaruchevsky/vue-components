import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "./components/UI";
import icons from "./components/UI/icons";
import buttons from "./components/UI/buttons";
import "./index.css";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
icons.forEach((icon) => {
  app.component(icon.name, icon);
});
buttons.forEach((button) => {
  app.component(button.name, button);
});

app
  .use(store)
  .use(router)
  .mount("#app");
