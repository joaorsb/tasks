<template>
  <v-form @submit.prevent="login">
    <v-container>
      <loading :show="isLoading" :label="loadingLabel"></loading>

      <v-row class="d-flex justify-center">
        <v-col md="6">
          <v-text-field
            v-model="user.email"
            label="E-mail"
            clearable
            persistent-hint
            outlined
          ></v-text-field>
            <v-text-field
                v-model="user.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required,]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Digite sua senha"
                outlined
                counter
                @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-btn block color="primary"
                   type="submit"
                   :disabled="! showSubmit">
              Enviar
            </v-btn>
            
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  import {mapState, mapActions, mapGetters } from 'vuex'
  import loading from 'vue-full-loading'

  export default {
    components: {
      loading
    },
    data() {
        return {
            showPassword: false,
            rules: {
                required: value => !!value || 'Requerido',
            }
        }
    },
    methods: {
      ...mapActions('Accounts', ['login'])
    },
    computed: {
        ...mapState('Accounts', ['user']),
        ...mapGetters('Accounts', ['isLoading', 'loadingLabel']),

      showSubmit() {
          return this.user.password.length > 7 && this.user.email !== undefined
      }
    },
    watch: {
      isLoading(value) {
        return value
      }
    },
}
</script>

<style scoped>


</style>