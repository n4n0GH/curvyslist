<template>
    <div id="manualPurchase">
        <p class="lead text-center">
            Buy custom names:
        </p>
        <div class="row mb-3">
            <div class="col">
            <input type="text" 
            class="form-control rounded-0 border-top-0 border-left-0 border-right-0"
            placeholder="Enter a name"
            v-model="singleName"
            @keyup.enter="addToList()">   
            </div>
            <div class="col-3 text-right">
                <p class="text-danger">
                    250 TRX
                </p>
            </div>
            <div class="col-auto">
                <button class="btn btn-outline-success rounded-0 btn-shadow"
                    @click="addToList()">
                        Add to cart
                    </button>
            </div>
        </div>
        
        <div class="row"
        v-if="getNameCart != ''">
            <div class="col">
                <p class="lead">Your cart:
                    <span v-for="n in getNameCart"
                    :key="n+1">
                        {{n}}{{getNameCart.indexOf(n) + 1 == getNameCart.length?'':', '}}
                    </span>
                </p>
            </div>
        </div>
        <router-link
            :to="{'name': 'cart'}"
            v-if="getNameCart != ''">
            <button class="btn btn-success btn-block mt-3 mb-3 btn-shadow rounded-0">
            <!-- TODO: this needs to directly link to the
            checkout process page or at least the cart -->
                Proceed to checkout
            </button>
        </router-link>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data(){
            return{
                singleName: ""
            }
        },
        methods: {
            ...mapActions([
                'setNameCart'
            ]),
            addToList(){
                // only add to cart if name ain't empty
                // semi-sanitize by trimming whitespace
                if(this.singleName.trim() != ""){
                    this.setNameCart(this.singleName.trim())
                    this.singleName = ""
                }
            }
        },
        computed: {
            ...mapGetters([
                'getNameCart'
            ])
        }
    }
</script>