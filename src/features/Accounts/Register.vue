<template>
  <v-form @submit.prevent="register">
    <v-container>
      <loading :show="isLoading" :label="loadingLabel"></loading>

      <v-row class="d-flex justify-center">
        <v-col md="6">
          <v-text-field
            v-model="user.name"
            label="Nome"
            clearable
            persistent-hint
            outlined
          ></v-text-field>
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
                :rules="[rules.required, rules.min]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Digite sua senha"
                outlined
                hint="A senha deve ter pelo menos 8 caracteres"
                counter
                @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-text-field
                v-model="confirm_password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.match]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Confirme sua senha"
                outlined
                hint="Senhas devem ser iguais"
                counter
                @click:append="showPassword = !showPassword"
            ></v-text-field>
             <v-btn block color="primary" type="submit"  :disabled=" ! showSubmit">Enviar</v-btn>
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
            confirm_password: "",
            showPassword: false,
            rules: {
                required: value => !!value || 'Requerido',
                min: v => v.length >= 8 || 'Min 8 caracteres',
                match: v => v == this.user.password || 'Senhas devem ser iguais'
            }
        }
    },
    watch: {
     user (value)  {
        if(value.id !== "" && value.id !== undefined){
          this.$router.push('/')
        }
     },
      isLoading(value) {
        return value
      }
    },
    methods: {
      ...mapActions('Accounts', ['register'])
    },
    computed: {
      ...mapState('Accounts', ['user']),
      ...mapGetters('Accounts', ['isLoading', 'loadingLabel']),
      showSubmit(){
          return this.user.password.length > 7 && this.user.password === this.confirm_password
      }
    }
    
}
</script>

<style scoped>

</style>