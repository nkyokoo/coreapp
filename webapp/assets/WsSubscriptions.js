import Vue from "vue";

const userTopicSubscriptions = ()=> {

    let chatsubscription = Vue.ws.socket.getSubscription(`chat:default`);

  if (!chatsubscription) {
      chatsubscription = Vue.ws.subscribe(`chat:default`);

    }
};

export default async () => {
  return new Promise((resolve, reject) => {
    let split =  localStorage.getItem('auth._token.local').split(" ")
    let token = split[1]
    Vue.ws.disconnect()
    Vue.ws.connect(
      {
        wsDomain: "ws://10.130.54.151:3333",
        jwtToken:token
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
