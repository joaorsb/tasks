<template>
<!-- background by SVGBackgrounds.com <3 -->
    <v-parallax
    dark
    height="700"
    src="@/assets/constellation.svg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <h1 class="display-2 font-weight-thin mb-4">Até breve!</h1>
      <h4 class="subheading"> Volte logo!</h4>
    </v-row>
  </v-parallax>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        methods: {
            ...mapActions('Accounts', ['clearUser'])
        },
        mounted() {
            this.clearUser()
        }
    }
</script>
<style scoped>

</style>