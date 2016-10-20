<style lang="css">

.flex {
    display: flex;
    width: 800px;
    margin: 0;
    padding: 0;
    list-style: none;
}
.flex-box{
  display: flex;
}
.flex :nth-child(1) {
    flex: 1 1 300px;
    background: #ddd
}

.flex :nth-child(2) {
    flex: 2 2 200px;
}

.flex :nth-child(3) {
    flex: 3 3 400px;
}

</style>

<template lang="html">
<div class="">
    <div class="flex">
        <span>a</span>
        <span>b</span>
        <span>c</span>
    </div>
    <div class="flex-box">
      <div class="" style="width:20px;background:#000;"></div>
        <div style="width:50%;background:#ddd;height:30px;"></div>
        <div class="" style="width:20%;background:#000;"></div>
    </div>
</div>

</template>

<script>

export default {
    data() {
            return {}
        },
        computed: {},
        ready() {},
        attached() {},
        methods: {},
        components: {}
}

</script>
