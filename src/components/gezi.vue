<style lang="css">



</style>

<template lang="html">

<div class="l-col" :style="{
  backgroundColor:bgColor,
  width:_width,
  height:height
}">
    <slot></slot>
</div>

</template>

<script>

export default {
    name: 'gezi',
    props: {
        bgColor: {
            default: 'none'
        },
        height: {
            // default:'auto'
            default: '50px'
        },
        width:String,
        initValue:Number,
        totalValue:Number
    },
    data() {
        return {
        }
    },
    computed: {
        _width: function() {
            // console.info(this.$http);
            window.tmp=this;
            // let _width;
            return this.width?this.width:(100 / this.$parent.total + '%');
            // return this.width;
        }
    },
    watch:{
      width:function(val){
        // console.info('watch-----', val);
      }
    },
    beforeCreate: function() {
        // console.info('beforeCreate-----', this._width);
    },
    created: function() {

        // this.width='600px';
        // console.info('created-----', this._width);
    },
    beforeMount: function() {
        // this.width='600px';
        // console.info('beforeMount-----', this._width);
    },
    mounted() {
      window.tmp=this;
      // console.info(this.initValue);
      this.total=this.initValue;
      // console.info(this.total);
      // this.width = this.width ? this.width : (100 / this.$parent.total + '%');
      // this.width = (100 / this.$parent.total + '%');
      // console.info(this.width==undefined);
      // this.width='50px';
      // console.info('mounted-----', this._width);
    },
    beforeUpdate: function() {
        // console.info('beforeUpdate-----', this._width);
    },
    updated: function() {
        // console.info('updated-----', this._width);
    },
    activated: function() {
        // console.info('activated-----', this._width);
    },
    deactivated: function() {
        // console.info('deactivated-----', this._width);
    },
    beforeDestory: function() {
        // console.info('beforeDestory-----', this._width);
    },
    destoryed: function() {
        // console.info('destoryed-----', this._width);
    },
    attached() {},
    methods: {},
    components: {}
}

</script>
