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
                  v-model="username"
                  data-vv-name="username"
                  required>
                </v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  data-vv-name="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="New password"
                  :type="'password'"
                  id="new-password"
                  data-vv-name="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="repeatpassword"
                  label="Repeat password"
                  :type="'password'"
                  id="repeat-password"
                  data-vv-name="repeat-password"
                  required
                ></v-text-field>
                <div class="matches" v-if='notSamePasswords'>
                  <p>Passwords don't match.</p>
                </div>
                <v-btn class="mr-4" :disabled="notSamePasswords && !isFilled" color="blue" @click="register">create account</v-btn>
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
            username:"",
            email: '',
            password: '',
            repeatpassword:'',
            error: null,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }),

        methods: {
           async register(){

               try {
                   await this.$axios.post('/user/register', {
                       username: this.username,
                       email: this.email,
                       password: this.password
                   })
               } catch (e) {
                   console.log(e.name)
               }

            },
            isFilled(){
                return this.username !== "" && this.email !== "" && this.password !== "";

            }
        },
        computed:{
            notSamePasswords () {
                    return (this.password !== this.repeatpassword)
            },

        }


    }
</script>

<style scoped>
  .pa-2{
    margin-top: 1rem;
  }

</style>
