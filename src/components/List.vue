<template>
    <div id="list" class="jumbotron">
        <div class="row">
            <div class="col">
                <!-- embed the manual input component -->
                <manual />
                <p class="lead text-center"
                v-if="getSales.length > 0">
                    Names for public sale:
                </p>
                <!-- display the following div in range of getSales -->
                <div class="row mb-3 mt-3 public-list"
                v-for="n in getSales"
                :key="n">
                    <div class="col">
                        <p class="lead">{{n.name}}</p>
                    </div>
                    <div class="col-3 text-right">
                        <p class="text-danger">{{n.price}} TRX</p>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-block btn-outline-success btn-shadow rounded-0">
                            Add to cart
                        </button>
                    </div>
                </div>
                <router-link
                v-if="getSales.length < 1"
                :to="{'name': 'sell'}">
                    <div class="btn btn-block btn-outline-primary btn-shadow rounded-0">
                        Be the first to sell a name!
                    </div>
                </router-link>
                <div class="btn btn-block btn-outline-primary btn-shadow rounded-0"
                @click="loadMoreAdd()"
                v-if="getSales.length > listLimit">
                    Load more names (+10)
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
    import {mapGetters} from 'vuex'
    import Manual from './Manual.vue'

    export default {
        // manual input component needs to be registered
        components:{
            Manual
        },
        // set up some basic dummy data
        data(){
            return{
                listLimit: 10,
                loadMore: 10
            }
        },
        methods: {
            // fetch more names for the sale list
            loadMoreAdd(){
                this.listLimit = this.listLimit + this.loadMore
            }
        },
        computed: {
            ...mapGetters([
                'getSales'
            ])
        }
    }
</script>