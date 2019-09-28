<template>
    <v-container>
        <v-card>
            <v-card-title>
                Jogos
                <div class="flex-grow-1"></div>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-search"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    :headers="headers"
                    :items="matchesList"
                    :sort-by="['marketStartTime']"
                    :sort-desc="[false]"
                    :search="search"
                    class="elevation-1"
                    loading loading-text="Carregando os jogos..."
            ></v-data-table>
        </v-card>
    </v-container>

</template>

<script>
    import {mapState, mapActions, mapGetters } from 'vuex'

    export default {
        name: "MatchesList",
        data() {
            return {
                search: '',
                headers: [
                    { text: 'Horário UTC', value: 'marketStartTime' },
                    { text: 'Início da partida', value: 'localTime' },
                    { text: 'Liga', value: 'competition' },
                    { text: 'Partida', value: 'match' },
                    { text: 'Odd Casa', value: 'homePrice' },
                    { text: 'Odd Visitante', value: 'awayPrice' },
                    { text: 'Odd Empate', value: 'drawPrice' },
                    { text: 'Odd Over 2,5', value: 'overPrice' },
                    { text: 'Odd Under 2,5', value: 'underPrice' },
                ]
            }
        },
        beforeMount() {
            this.getMatches()
        },
        methods: {
            ...mapActions('Matches', ['getMatches', ])
        },
        computed: {
            ...mapState('Matches', ['isLoading', 'loadingLabel', ]),
            ...mapGetters('Matches', ['matchesList'])
        }
    }
</script>

<style scoped>

</style>