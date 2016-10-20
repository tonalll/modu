<style>

body {
    font-family: Helvetica, sans-serif;
}

</style>

<template>

<div id="app">
    <h1>
  modulo
</h1>
<lMap class=""></lMap>

</div>
</template>

<script>

import flex from './flex.vue'
import lRow from './row.vue'
import lCol from './col.vue'
import lMap from './map.vue'
export default {
    data() {
            return {
                msg: 'Hello Vue!----',
            }
        },
        components: {
            flex: flex,
            lRow,
            lCol,
            lMap,
        }
}

</script>
