<template>
  <div>
  <v-container>

    <v-row
      no-gutters
      style="height: 150px;"
    >

      <v-col>
        <v-spacer></v-spacer>

      </v-col>
      <v-col>
        <v-card
          class="pa-2"
        >
          <v-card-title>
            Account info
          </v-card-title>
          <v-card-text>
            <p> firstname: {{loggedInUser.firstname}}</p>
            <p> lastname: {{loggedInUser.lastname}}</p>
            <p> email: {{loggedInUser.email}}</p>
          </v-card-text>
        </v-card>
        <v-card
          class="pa-2"
        >
          <v-card-title>
            Password
          </v-card-title>
          <v-card-text>
            <form>
              <v-text-field
                label="Current password"
                :type="'password'"
                id="current-password"
                required
              ></v-text-field>
              <v-text-field
                label="New password"
                :type="'password'"
                id="new-password"
                required
              ></v-text-field>
              <v-text-field
                label="Repeat password"
                :type="'password'"
                id="repeat-password"
                required
              ></v-text-field>
            <v-btn color="error" class="mr-4" @click="changePasword">change password</v-btn>
          </form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {

        middleware: 'auth',
        data: () => ({
            alignments: [
                'start',
                'center',
                'end',
            ],
        }),
        methods: {
            changePasword(){

            }
        },
        computed:{
            ...mapGetters(['isAuthenticated', 'loggedInUser']),

        }


    }
</script>

<style scoped>
  .pa-2{
    margin-top: 1rem;
  }

</style>
