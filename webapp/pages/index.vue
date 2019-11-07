<template>
  <v-layout>

    <v-row
      no-gutters
      style="height: 150px;"
    >

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
        <v-card
          style="width: 20rem; margin-left: 1rem; margin-bottom: 0.5rem"
        >
         <v-card-title>users</v-card-title>
        </v-card>
        <v-expansion-panels
          style="width: 20rem; margin-left: 1rem"
        >
          <v-expansion-panel
            v-for="(Item,i) in this.users"
            :key="i"
          >
            <v-expansion-panel-header>{{Item.username}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-btn v-if="loggedInUser.group_id === 2 && Item.id !== loggedInUser.id"  color="red" :click="kickuser(Item.socketid)">kick</v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
                message:"",
                users: []

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
                this.users.push(data.user)
                document.getElementById('chatbox').value += data.message+"\n"
            },
            leftEvent(data){
                console.log(data)
                let jsonusers = JSON.parse(JSON.stringify(this.users))
                let index = jsonusers.findIndex(function(item, i){
                    return item.id === data.user.id
                });
                jsonusers.splice(index, 1);
                this.users = jsonusers
                document.getElementById('chatbox').value += data.message+"\n"
            },
            messageReceived(data) {
                document.getElementById('chatbox').value += "<"+data.sender.username+">: " + data.message+"\n"
                console.log(data)
            },
            kickuser(socketid){

            },
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
