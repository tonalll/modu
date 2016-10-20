<style lang="css">



</style>

<template lang="html">

<div class="">
    <lRow v-for="(item,index) in piecesArr" :width="item[0].length*baseWidth+'px'" inline=true :style="{margin:'10px 0 0 10px',flexWrap:'wrap'}">
        <lCol v-for="(_item,_index) in item" width="100%" :height="colHeight">
            <lRow class="" width="100%">
                <Gezi class="" v-for="(__item,__index) in _item" :init-value="__item==='X'?1:0" :class="{geziOk:__item==='.' ,gezi:__item==='X'}" width="100%" :height="colHeight" :style="{textAlign:'center',lineHeight:colHeight}">
                    {{__item|piecesValue|mapValue}}
                </Gezi>
            </lRow>
        </lCol>
    </lRow>
</div>

</template>

<script>

import lRow from './row.vue'
import lCol from './col.vue'
import Gezi from './gezi.vue'
export default {
    name: 'pieces',
    props: {
        piecesArr: {
            type: Array,
            default: []
        },
        baseWidth: {
            type: Number
        },
        colHeight: {}
    },
    data() {
        return {}
    },
    computed: {},
    ready() {
        console.info(this.piecesArr);
    },
    attached() {},
    methods: {},
    components: {
        lRow,
        lCol,
        Gezi
    }
}

</script>
