<template>
  <v-layout>

    <v-row
      no-gutters
      style="height: 150px;"
    >

      <v-col>
        <v-spacer></v-spacer>

      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="headline">
            Chat
          </v-card-title>
        </v-card>
        <v-card style="margin-top: 1rem">
          <v-card-text>
            <div>
             <textarea
                class="mx-2"
                readonly
                id="chatbox"
                style="height: 40rem !important; width: 30rem; resize: none; border: solid red 1px "
              ></textarea>
              <div>
                <div class="d-inline">
                  <v-text-field
                    label="type message"
                    style="display: inline; width: 5rem !important;"
                    type="'text'"
                    v-model="message"
                  >
                  </v-text-field>
                </div>
                <div class="d-inline">
                  <v-btn type="'button'" @click="this.sendmessage" style="display: inline">
                    <v-icon>send</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>

  </v-layout>
</template>

<script>

    import {mapGetters} from 'vuex'
    import WsSubscriptions from '../assets/WsSubscriptions'

    export default {
        middleware: 'auth',
        data() {
            return {
                loading: true,
                chatbox:"",
                message:""

            }

        },
        mounted(){
            this.$ws.$on('USER_JOIN',this.joinEvent)
            this.$ws.$on('USER_LEFT',this.leftEvent)
            this.$ws.$on('message',this.messageReceived)


        },
        methods:{
            async sendmessage() {
                this.$ws.$emitToServer("chat:default", 'message', {message: this.message, sender:this.loggedInUser})

            },
            joinEvent(data){
                console.log(data);
                document.getElementById('chatbox').value += data.message+"\n"
            },
            leftEvent(data){
                console.log(data);
                document.getElementById('chatbox').value += data.message+"\n"
            },
            messageReceived(data) {
                document.getElementById('chatbox').value += "<"+data.sender.username+">: " + data.message+"\n"
                console.log(data)
            }
        },
        async created() {
            await WsSubscriptions()
            this.loading = false
        },
        computed:{
            ...mapGetters(['isAuthenticated', 'loggedInUser']),
        }


    }

</script>
