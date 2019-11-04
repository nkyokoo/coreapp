import Vue from "vue";

const userTopicSubscriptions = ()=> {

    let subscription = Vue.ws.socket.getSubscription(`chat:default`);
    if (!subscription) {
      subscription = Vue.ws.subscribe(`chat:default`);
    }
};

export default async () => {
  return new Promise((resolve, reject) => {
    Vue.ws.disconnect()
    Vue.ws.connect(
      {
        wsDomain: "ws://localhost:3333",
        jwtToken: localStorage.getItem('auth._token.local')
      },
      {
        path: 'adonis-ws',
        reconnectionAttempts: 300,
        reconnectionDelay: 5000
      }
    );
    Vue.ws.socket.on("open", () => {
      userTopicSubscriptions();
      resolve()
    });

    // FOR EXAMPLE you can observe for userId or another variable from Vuex
    // store.watch(
    //   () => store.getters.vgUserUid,
    //   async id => {
    //     if (id) {
    //       userTopicSubscriptions(uid);
    //     }
    //   }
    // );
  })
};
