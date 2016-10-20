<style lang="css">

.unit {
    display: inline-block;
    position: absolute;
}

.map {
    border: 1px solid #000;
}

</style>

<template lang="html">

<div class="unit" :class="{map:isMap}">
    <lRow :width="piecesWidth" inline=true :style="{flexWrap:'wrap'}">
        <lCol v-for="(_item,_index) in piecesArr" width="100%" :height="colHeight">
            <lRow class="" width="100%">
                <Gezi class="" v-for="(__item,__index) in _item" :init-value="__item==='X'?1:0" :class="{geziOk:__item==='.'||__item==='0' ,gezi:__item==='X'||Number(__item)>0}" width="100%" :height="colHeight" :style="{textAlign:'center',lineHeight:colHeight}">
                    {{__item|geziValue}}
                </Gezi>
            </lRow>
        </lCol>
    </lRow>
</div>

</template>

<script>
import $ from 'jquery'
import lRow from './row.vue'
import lCol from './col.vue'
import Gezi from './gezi.vue'
export default {
    name: 'pieces',
    props: {
      left:{

      },
        piecesArr: {
            type: Array,
            default: []
        },
        piecesWidth: {
            type: String
        },
        colHeight: {},
        isMap: {
            default: false
        }
    },
    data() {
        return {}
    },
    computed: {},
    mounted() {
      // console.info(this.left);
      // console.info($(this.$el).width(),'---------');
      // this.$store.commit('leftAdd',$(this.$el).width());
      // this.$state.commit('leftAdd');
        // console.info(this.piecesArr);
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
