<template>
  <v-container>
    <v-layout row wrap>
      <v-col md="6">Hola!</v-col>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters('Accounts', ['loggedUser'])
  }
};
</script>
