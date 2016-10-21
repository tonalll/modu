<style lang="css">

.map {
    border: 1px solid #000;
}

</style>

<template lang="html">

<div @click='getBaseWidth()'>
    maxLeft:{{$store.state.maxLeft}}
    <br> minTop:{{$store.state.minTop}}
    <br> 第{{mapData.level}}关 第moud数{{mapData.level}} 数据是：{{mapData}}---
    <lRow class="" bgColor='#eee'>
        <lCol id='con' class="" width='100%' height="600px" :style="{position:'relative'}">
            <!-- 地图区域 -->
            <Pieces is-map=true :pieces-arr="mapArr" :pieces-width="getBaseWidth()*mapArr.length+'px'"></Pieces>
            <!-- 碎片区域 -->
            <Pieces v-for="(item,index) in piecesArr" :left='$store.state.left' :pieces-arr="item" :pieces-width="getBaseWidth()*item[0].length+'px'"></Pieces>
        </lCol>
    </lRow>
</div>

</template>

<script>

import lRow from './row.vue'
import lCol from './col.vue'
import Pieces from './pieces.vue'
import Gezi from './gezi.vue'
import $ from 'jquery'
import {
    mapGetters, mapActions, mapMutations
}
from 'vuex'
var options = {
    headers: {
        grwng_uid: '5468f3f3-933d-4d65-9798-bca67429a88b',
        AWSELB: '258D9D590E00B3DE939BD2301A2166BB8314D5BFDDFFCBF83991B462EC8DE4064D866831A6ADD8C5E3FDE4E0A3A9AFA2D7A654D9A629B8C461637A300314921B4742BA164EFD890795F1227FB9212CEB8EB1D6D2C2'
    },
    credentials: false
};

export default {
    name: 'map',
    props: {},
    data() {
        return {
            a: new String('aaa'),
            mapData: {},
            mapArr: [],
            piecesArr: [],
            mapUrl: '/ajax/map.json'
                // mapUrl:'http://www.qlcoder.com/train/automodu'
                // mapUrl:'http://121.201.63.168/train/automodu'
                // mapUrl:'http://211.149.193.19:8080/api/customers'
        }
    },
    computed: {},
    mounted() {
        window.tmpmap = this;
        this.getMapData();
        this.leftAdd();
        // this.$store.commit('leftAdd',10);
        // this.$store.commit('showLeft');
    },
    attached() {},
    methods: {
        getMapData: function() {
            var vm = this;
            window.map = this;
            vm.$http.get(vm.mapUrl, options).then((response) => {
                vm.$set(vm, 'mapData', response.data);
                vm.mapData = response.data;
                window.res = response.data;
                // vm.$set('mapData',response);
                // console.info(vm.mapData.map);
                this.updateMapData();
                this.init();
            }).catch(function(response) {
                // console.log(response)
            });
        },
        updateMapData: function() {
            this.mapArr = this.mapData.map.map(function(value) {
                return new String(value);
            });
            this.piecesArr = this.mapData.pieces.map(function(value) {
                var arr = value.split(',');
                // console.info(arr);
                arr = arr.map(function(_value) {
                    // console.info(typeof _value);
                    return _value.split('');
                });
                // console.info(arr);
                return arr;
            });
        },
        leftAdd: function() {
            this.$store.commit('leftAdd');
        },
        getBaseWidth: function() {
            // console.info(this.$store.state.baseWidth);
            return this.$store.state.baseWidth;
        },
        init: function() {
            // console.info(this.$store.state.maxLeft);
            // this.$store.state.origin.x=
            this.$store.state.maxLeft = $('body').width();
            this.$store.state.piecesPosition.initLeft = (this.mapArr.length + 2) * this.$store.state.baseWidth;
            this.$store.state.piecesPosition.left = (this.mapArr.length + 2) * this.$store.state.baseWidth;
            // console.info(this.$store.state.maxLeft);
        }
    },
    components: {
        lRow,
        lCol,
        Pieces,
        Gezi
    }
}

</script>
