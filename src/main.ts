import "./assets/main.css";

import { createApp } from "vue";
import AppTSX from "./tsx/App";
import AppSFC from "./sfc/AppSFC.vue";

createApp(AppTSX).mount("#app-tsx");
createApp(AppSFC).mount("#app-sfc");
