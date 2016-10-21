<style lang="css">

.unit {
    position: absolute;
}

</style>

<template lang="html">

<div class="unit" @mousedown='mousedown($event,$el)' :class="{map:isMap}" :style="{top:top,left:left,height:piecesArr.length*$store.state.baseWidth+'px'}">
    <lRow :width="piecesWidth" inline=true :style="{flexWrap:'wrap'}">
        <lCol v-for="(_item,_index) in piecesArr" width="100%" :height="$store.state.baseWidth+'px'">
            <lRow class="" width="100%">
                <Gezi class="" v-for="(__item,__index) in _item" :init-value="__item==='X'?1:0" :class="{geziOk:__item==='.'||__item==='0' ,gezi:__item==='X'||Number(__item)>0}" width="100%" :height="$store.state.baseWidth+'px'" :style="{textAlign:'center',lineHeight:$store.state.baseWidth+'px'}">
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
import {
    mapGetters, mapActions, mapMutations
}
from 'vuex'
export default {
    name: 'pieces',
    props: {
        piecesArr: {
            type: Array,
            default: []
        },
        piecesWidth: {
            type: String
        },
        isMap: {
            default: false
        }
    },
    data() {
        return {
            left: {
                default: 0
            },
            top: {
                default: 0
            },
        }
    },
    computed: {},
    mounted() {
        this.init();
        window.pieces=this;
        // console.info(this.left);
        // console.info($(this.$el).width(),'---------');
        // this.$store.commit('leftAdd',$(this.$el).width());
        // this.$state.commit('leftAdd');
        // console.info(this.piecesArr);
    },
    attached() {},
    methods: {
      mousedown:function(event,b){
        console.info(event.clientX,event.clientY);
        console.info($(b));
      },
        init: function() {
          this.$store.commit('getPiecesPosition', {
              piecesWidth: this.piecesWidth,
              piecesArr: this.piecesArr
          });

            if (this.isMap) {
                this.left = this.$store.state.baseWidth + 'px';
                this.top = this.$store.state.baseWidth + 'px';
            } else {
                this.left = this.$store.state.piecesPosition.left + 'px';
                this.top = this.$store.state.piecesPosition.top + 'px';
            }

            this.$store.commit('setPiecesPosition', {
                piecesWidth: this.piecesWidth,
                piecesArr: this.piecesArr
            });

        }
    },
    components: {
        lRow,
        lCol,
        Gezi
    }
}

</script>
