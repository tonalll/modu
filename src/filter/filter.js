import Vue from 'vue'
// Vue.filter('px',(value))={
//   return value+'px'
// }
Vue.filter('px',function(value){
  return value+'px'
});
// 地图初始化数据转换
Vue.filter('mapValue',function(value){
  return value==="0"?'':value;
});
// 碎片初始化数据转换
Vue.filter('piecesValue',function(value){
  return value==="X"?1:'0';
});
// 格子初始化数据转换
Vue.filter('geziValue',function(value){
  if(value==='0') return '';
  if(value==='X') return 1;
  if(value==='.') return '';
  return value;
});
