<template>
  <v-app :dark="setTheme">
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >

      <v-toolbar-title style="margin-left: 1rem">Chatapp</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu v-if="this.isAuthenticated">
        <template v-slot:activator="{ on }">

          <v-avatar
            left
            bottom
            color="primary"
            order-xl-last
            style="cursor: pointer"
            dark
            v-on="on">
           {{ loggedInUser.username }}
          </v-avatar>

        </template>
        <v-list>
          <v-list-item

            v-for="(item, index) in profilemenuitems"
            :key="index"
            @click="go(item.action)"
          >
            <v-list-item-title><v-icon>{{item.icon}}</v-icon>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item
            @click="logout"
          >
            <v-list-item-title>
              <v-icon>exit_to_app</v-icon>
              logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                clipped: false,
                drawer: false,
                fixed: false,
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'udlån system',
                goLight: false,
                profilemenuitems: [
                    {icon: 'account-box', title: 'account', action: "/account"},

                ],
            }
        },
        methods: {
            go: function (action) {
                this.$router.push({
                    path: action
                })
            },
            async logout() {
                await this.$auth.logout();
                this.$router.push('/login')
            },
        },
        computed: {
            setTheme() {
                if (this.goLight === true) {
                    return (this.$vuetify.theme.dark = false);
                } else {
                    return (this.$vuetify.theme.dark = true);
                }
            },
            ...mapGetters(['isAuthenticated', 'loggedInUser']),


        },
    }
</script>
<style>

</style>
