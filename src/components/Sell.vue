<template>
    <div id="sellform" class="jumbotron">
        <p class="lead text-center">
            Available names:
        </p>
        <!-- pull available names from the contract to make it easier for users to mass sell their name tags -->
        <div class="row mx-auto">
            <div class="col-auto mb-3 btn btn-primary btn-shadow rounded-0"
            v-for="name in getNames"
            :key="name"
            @click="offer(name)">
                {{name}}
            </div>
        </div>
        <p class="lead text-center"
        v-if="getOffers.length != 0">
            Prepare to sell:
        </p>
        <div class="row mb-3 public-list"
        v-for="offer in getOffers"
        :key="offer">
            <div class="col">
                {{offer.offer}}
            </div>
            <div class="col">
                <input type="number"
                v-model.trim="tempList"
                class="form-control rounded-0 border-top-0 border-left-0 border-right-0"
                placeholder="Name your price">
            </div>
            <div class="col-auto">
                <div class="btn btn-outline-danger btn-shadow rounded-0"
                @click="remove(offer)">
                    Remove
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12"
            v-if="getOffers.length != 0">
                <div class="btn btn-block btn-success btn-shadow rounded-0">
                    List names for sale
                </div>
            </div>
        </div>
        {{tempList}}
    </div>
</template>

<script>
    
    // scratch note
    // on load the getNames needs to be read into tempList as keys
    // when user input is registered a indexOf needs to be used to match the keys
    // and generate the price as value, that way I can move those entries easily
    // into the vuex store for the sell mutation
    
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data(){
            return {
                tempList: {}
            }
        },
        methods: {
            ...mapActions([
                'setNames',
                'setOffers',
                'setSales'
            ]),
            offer(name){
                this.setNames(name)
                this.setOffers({offer: name })
            },
            remove(offer){
                this.setOffers(offer)
                this.setNames(offer.offer)
            },
            sell(){

            },
            populate(){
                // let singleName
                // for (singleName in this.getNames) {
                //     this.tempList.singleName = ""
                // }
            }
        },
        computed: {
            ...mapGetters([
                'getNames',
                'getOffers',
                'getSales'
            ])
        },
        mounted() {
            this.populate()
        }
    }
</script>