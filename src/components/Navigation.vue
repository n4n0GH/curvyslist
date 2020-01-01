<template>
    <div class="row text-center">
        <div class="col">
            <!-- setting up the router links -->
            <!-- names are defined in /src/router.js -->
            <router-link :to="{name: 'list'}" class="btn btn-lg rounded-0" active-class="btn-primary" exact>
                Buy
            </router-link>
            <router-link :to="{name: 'sell'}" class="btn btn-lg rounded-0" active-class="btn-primary">
                Sell
            </router-link>
            <router-link :to="{name: 'cart'}" class="btn btn-lg rounded-0" active-class="btn-primary">
                Cart <span class="badge badge-danger rounded-0">{{cartCounter>0?cartCounter:''}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'getNameCart'
            ]),
            cartCounter(){
                return this.getNameCart.length
            }
        }
    }
</script>