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
              Register
            </v-card-title>
            <v-card-text>
              <form>
                <v-text-field
                  label="username"
                  v-validate="'required|password'"
                  data-vv-name="username"
                  required></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  v-validate="'required|email'"
                  label="E-mail"
                  data-vv-name="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-validate="'required|password'"
                  label="New password"
                  :type="'password'"
                  id="new-password"
                  required
                ></v-text-field>

                <v-btn class="mr-4"  color="blue" @click="register">create account</v-btn>
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
    export default {
        data: () => ({
            alignments: [
                'start',
                'center',
                'end',
            ],
            valid: true,
            email: '',
            password: '',
            error: null,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }),

        methods: {
            register(){

            }
        }


    }
</script>

<style scoped>
  .pa-2{
    margin-top: 1rem;
  }

</style>
