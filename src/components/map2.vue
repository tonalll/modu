<style lang="css">

.unitOk {
    background-color: none;
    color: none;
}

.unit {
    background-color: #000;
    color: #fff;
    cursor: pointer;
}

</style>

<template lang="html">

<div>
    第{{mapData.level}}关 第moud数{{mapData.level}} 数据是：{{mapData}}---
    <lRow class="" bgColor='#eee'>
        <lCol class="" width='40%' height="auto">
            <!-- 地图区域 -->
            <lRow :width="rowWidth" :style="{flexWrap:'wrap',border:'1px solid #000'}">
                <lCol class=" " v-for="(item,index) in mapArr " width="100% " :height="colHeight ">
                    <lRow width="100% ">
                        <lCol class=" " v-for="(_item,_index) in item " :width="colWidth " :height="colHeight " :class="{unitOk:_item==='0' ,unit:_item!=='0' } " :style="{textAlign: 'center',lineHeight:colHeight} ">
                            {{_item|mapValue}}
                        </lCol>
                    </lRow>
                </lCol>
            </lRow>
        </lCol>
        <lCol class="" bgColor='#ddd' width='60%' height="auto">
            <!-- 碎片区域 -->
            <lRow v-for="(item,index) in piecesArr" :width="item[0].length*baseWidth+'px'" inline=true :style="{margin:'10px 0 0 10px',flexWrap:'wrap'}">
                <lCol v-for="(_item,_index) in item" width="100%" :height="colHeight">
                    <lRow class="" width="100%">
                        <lCol class="" v-for="(__item,__index) in _item" :class="{unitOk:__item==='.' ,unit:__item==='X'}" width="100%" :height="colHeight" :style="{textAlign:'center',lineHeight:colHeight}">
                            {{__item|piecesValue}}
                        </lCol>
                    </lRow>
                </lCol>
            </lRow>
        </lCol>
    </lRow>
</div>

</template>

<script>

import lRow from './row.vue'
import lCol from './col.vue'
var options = {
    headers: {
        grwng_uid: '5468f3f3-933d-4d65-9798-bca67429a88b',
        AWSELB: '258D9D590E00B3DE939BD2301A2166BB8314D5BFDDFFCBF83991B462EC8DE4064D866831A6ADD8C5E3FDE4E0A3A9AFA2D7A654D9A629B8C461637A300314921B4742BA164EFD890795F1227FB9212CEB8EB1D6D2C2'
    },
    credentials: false
};

export default {
    name: 'map',
    props: {
        baseWidth: {
            default: 40
        }
    },
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
    computed: {
        rowWidth: function() {
            // return this._width_=='auto'?this._width_:(this.baseWidth*this.mapData.map.length+'px')
            return !this.mapData.map ? 'auto' : (this.baseWidth * this.mapData.map.length + 'px')
        },
        colWidth: function() {
            // return this._width_=='auto'?this._width_:(this.baseWidth*this.mapData.map.length+'px')
            return 100 / this.mapData.map.length + '%'
        },
        colHeight: function() {
            // return this._width_=='auto'?this._width_:(this.baseWidth*this.mapData.map.length+'px')
            return this.baseWidth + 'px'
        },
        piecesWidth: function() {
            return !this.mapData.map ? 'auto' : (this.baseWidth * this.piecesArr[0][0].length + 'px')
        }
    },
    mounted() {
        window.tmpmap = this;
        this.getMapData();
    },
    attached() {},
    methods: {
        getMapData: function() {
            var vm = this;
            window.map = this;
            vm.$http.get(vm.mapUrl, options).then((response) => {
                vm.$set(vm, 'mapData', response.data)
                vm.mapData = response.data;
                window.res = response.data;
                // vm.$set('mapData',response);
                // console.info(vm.mapData.map);
                this.updateMapData();
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
        }
    },
    components: {
        lRow,
        lCol,
    }
}

</script>
