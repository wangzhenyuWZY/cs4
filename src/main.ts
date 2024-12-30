import App from "./App.vue";
import Tarbar from "@/components/Bottom/index.vue";
import { createPinia } from "pinia";

import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  // 创建 Pinia 实例
  const pinia = createPinia();
  app.use(pinia);
  app.component("TarbarMenu", Tarbar);
  return {
    app,
  };
}
