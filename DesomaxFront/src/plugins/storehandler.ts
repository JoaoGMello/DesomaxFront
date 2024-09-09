import { storeHelper } from "@/store/store";
import type { App, Plugin } from "vue";

const storeHandler: Plugin = {
    install: (app: App) => {
      app.config.globalProperties.$storeHandler = storeHelper
    }
  }
  
  
  export default storeHandler;
  
  declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $storeHandler: typeof storeHelper;
    }
  }