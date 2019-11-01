<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
      </div>
      <v-card>
        <v-card-title class="headline">
          Chat
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>


    import WsSubscriptions from '../assets/WsSubscriptions'
    export default {
        middleware: 'auth',
        data () {
            return {
                loading: true
            }
        },
        async created() {
            await WsSubscriptions()
            this.loading = false
        }
    }

</script>
