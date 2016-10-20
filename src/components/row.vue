<style lang="css">



</style>

<template lang="html">

<div class="l-row"
:style="{
  backgroundColor:bgColor,
  width:width,
  display:inline?'inline-flex':'flex'
  }">
    <slot></slot>
</div>

</template>

<script>

export default {
    name: 'row',
    props: {
        bgColor: {
            type: String,
            required: false,
            default: 'none'
        },
        width: {
          default:'100%'
        },
        inline:{
          default:false
        },
        // 默认一行分12份
        total:{
          default:12
        }
    },
    data() {
        return {

        }
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {}
}

</script>
