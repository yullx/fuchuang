<template>
   <div>
       周日12点时的交通路况
      

  <baidu-map class="bm-view" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
    <bm-traffic :predictDate="{weekday: 6, hour: 12}"></bm-traffic>
     <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-map-type>
  </baidu-map>
  
  </div> 
</template>

<script>
export default {
    name: 'SeeOver',
    data () {
        return{
             center: {lng: 0, lat: 0},
      zoom: 3
        }
    },
    methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>
<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: 550px;
}


</style>
