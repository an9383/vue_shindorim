import WrapComponent from "./WrapComponent.js";

Vue.createApp({
  template: `
    <WrapComponent />
  `,
  components: {
    WrapComponent
  },
  data(){
    return{
      
    }
  }
}).mount('#root');