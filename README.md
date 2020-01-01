# curvyslist

Check out the 'src/components' directory to see all available components that are loaded into this SPA.

The 'App.vue' file is the container vue-file to serve the router and routes.

Further explanation of what's done inside the components can be found in comments within each file.

Essentially all vue files consist of up to three parts, a `<template>`, a `<script>` and a `<style>` tag. Usually I don't use the style tag, so the components may miss that one. The template tag is holding all the HTML that is supposed to be rendered in the shadow DOM while the script holds all business logic of the component, as well as variables and event calls. Basically all the JavaScript you would want goes there.

The `router.js` is used to script the routing mechanics to make this a true SPA, `store.js` is the vuex localstorage part to save user's shopping carts temporarily.

## Current logic

### Core (App.vue + main.js + router.js + store.js)
The main.js instantiates a new Vue instance inside the App.vue which also holds the router view. Router.js and store.js are being used as outsourced component files to have a cleaner main.js file and hold the router configuration and vuex configuration.

### Buy component (Manual.vue + List.vue)
Users input new names into the Manual.vue which then stores the new names inside the vuex storage. Names stored there are then available on the other components as well.

The List.vue component queries the names that are up for sale right now and displays them in a repeating list, showing only the last n entries (a specific number needs to be decided on) and can load n more items on demand to not overload the interface.

### Sell component (Sell.vue)
All names that are currently owned by the user are displayed as click buttons. Clicking each will put them into the sale preparation where users can specify a price or remove them from the prep.

A big green button pops up underneath which is supposed to call the function to construct the transaction and interface with the smart contract.

### Cart component (Cart.vue)
When users decide to put names into their shopping cart, this component will list them. Users have a change to review the names they selected here as well as see individual and total price and remove names from the list should they change their mind.

A big green buy button underneath is supposed to call the function to construct the transaction and interface with the smart contract.

## Project setup
```
npm install
npm install vuex
npm install vue-router
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles for deployment (bundled with webpack)
```
npm run build
```