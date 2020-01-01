<template>
    <div id="cart" class="jumbotron">
        <div class="row"
        v-if="getNameCart.length < 1">
            <div class="col">
                <p class="lead text-center">
                    Your Cart is Empty!
                </p>
            </div>
        </div>
        <p class="lead text-center"
        v-if="getNameCart.length > 0">
            Your selection:
        </p>
        <div class="row mb-3 public-list"
        v-for="n in getNameCart"
        :key="n+1">
            <div class="col-8">
                {{n}}
            </div>
            <div class="col-2 text-right">
                250 TRX
            </div>
            <div class="col-2 text-right">
                <button class="btn btn-outline-danger btn-shadow rounded-0"
                @click="setNameCart(n)">
                    Remove
                </button>
            </div>
        </div>
        <div class="row mt-3"
        v-if="getNameCart.length > 0">
            <div class="col-8">
                <p class="lead">
                    Total:
                </p>
            </div>
            <div class="col-2 text-right">
                <p class="lead">
                    {{getNameCart.length*250}} TRX
                </p>
            </div>
            <div class="col-2">
                <!-- quack -->
            </div>
            <div class="col-12">
                <button class="btn btn-block btn-success btn-shadow rounded-0">
                    Buy those names for {{getNameCart.length*250}} TRX!
                </button>
                <p class="small text-center mt-2">
                    Please note that names in your cart are not reserved and might be bought by other users in the meantime. If that is the case you won't be billed for the names you can't buy.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'setNameCart'
            ])
        },
        computed: {
            ...mapGetters([
                'getNameCart'
            ])
        }
    }
</script>