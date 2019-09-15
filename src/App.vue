<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
        <v-app-bar-nav-icon @click.native.stop="navBarMenu = ! navBarMenu" 
          class="hidden-sm-and-up">
        </v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">
          <span>Tasks</span>
          <span class="font-weight-light"></span>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn v-for="item in menuItems" v-bind:key="item.title"
            text
            :to=item.url
            small>
            <v-icon left>{{item.icon}}</v-icon>
            <span class="mr-2">{{item.title}}</span>
          </v-btn>
        </v-toolbar-items>
        
    </v-app-bar>

    <v-content >

      <v-navigation-drawer
          v-model="navBarMenu"
          absolute
          temporary
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Ações</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>

            <v-list-item
              link
              v-for="item in menuItems" v-bind:key="item.title"
              :to=item.url
            >
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-container >
          <v-row class="d-flex justify-center">
            <v-alert type="error" v-if="this.authError !== null" dismissible @click="clearAuthError">
              {{ this.authError.message }}
            </v-alert>
            <v-col cols="12">
              <router-view ></router-view>
            </v-col>
          </v-row>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {

    name: 'App',
    data: () => ({
      navBarMenu: false,
    }),
    methods: {
      ...mapActions('Accounts', ['clearAuthError', 'setToken']),
    },
    computed: {
      ...mapGetters('Accounts', ['loggedUser', 'authError']),
      menuItems() {
        let menuItems = [
          { icon: "mdi-login", title: "Login", url: '/login'},
          { icon: "mdi-account", title: "Registrar", url: '/registrar'},
          { icon: "mdi-home", title: "Home", url: '/'}
        ]

        if(this.userIsAuthenticated){
          menuItems = [
            { icon: "mdi-logout", title: "Logout", url: '/logout'},
            { icon: "mdi-home", title: "Home", url: '/'},
            { icon: "mdi-clipboard-list", title: "Tasks", url: '/tasks'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated() {
        return this.loggedUser.id !== undefined
      }
    },
    watch: {
      loggedUser (value)  {
        if(value.id !== "" && value.id !== undefined){
          this.$router.push('/')
        }
      },
      '$route' () {
        if(this.authError){
          this.clearAuthError()
        }
      },
    },
  };
</script>
