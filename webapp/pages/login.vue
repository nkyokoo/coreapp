<template>
  <v-card>
    <v-card-title>login</v-card-title>
   <v-card-text>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        :type="'password'"
        required
      ></v-text-field>
      <v-btn
        color="success"
        class="mr-4"
        @click="login"
      >
        login
      </v-btn>
    </v-form>
   </v-card-text>
    <v-card-actions>
      <router-link to="/register">Don't have a account? register here!</router-link>
    </v-card-actions>
  </v-card>
  </template>

<script>
    export default {
        middleware: 'guest',
        name: 'login',
        data: () => ({
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
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
            async login() {
                try {
                    await this.$auth.loginWith('local', {
                        data:{
                            email: this.email,
                            password: this.password
                        }
                    })

                    this.$router.push('/')
                } catch (e) {
                    console.log(e.name)
                }
            }
        },

    }
</script>

<style scoped>

</style>
