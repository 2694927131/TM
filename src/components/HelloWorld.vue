<template>
  <div>
    <input v-model="key" type="text" />
    <button @click="search">search</button>

    <div>
      经度 - {{ longitude }}
      纬度 - {{ latitude }}
    </div>
    <div id="container" style="width:600px;height:500px;"></div>
  </div>
</template>

<script type="model">

import qq from 'qq'


export default {
  mounted() {
    console.log()

    this.init();
  },
  data() {
      return {
        map: {},
        key: '',
        longitude:39.916527,//经度
        latitude:116.397128//纬度
      }
  },
  
  methods:{
    search(){
      this.$axios({
        method:"get",
        // 该url为服务器端地址
        url:"http://localhost:9527/map",
        dataType: "jsonp",
        params:{
          name: this.key,
        },
      }).then((ok)=>{
        console.log(ok.data.result.location)
        this.latitude = ok.data.result.location.lat
        this.longitude = ok.data.result.location.lng
        let lat = new qq.maps.LatLng(this.latitude, this.longitude)
        this.map.panTo(lat)
      },(err)=>{
        console.log(err)
      })
    },
    init() {
      let that = this
      //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
      //设置地图中心点
      var myLatlng = new qq.maps.LatLng(this.longitude,this.latitude);
      //定义工厂模式函数
      var myOptions = {
        zoom: 8,               //设置地图缩放级别
        center: myLatlng,      //设置中心点样式
        mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
      }
      //获取dom元素添加地图信息
      this.map = new qq.maps.Map(document.getElementById("container"), myOptions);
      //给地图添加点击事件
      //并获取鼠标点击的经纬度
      qq.maps.event.addListener(this.map, 'click', function(event) {
          that.changeLat(event.latLng.getLat())
          that.changeLon(event.latLng.getLng())
      });
    },
    changeLon(e){
      this.longitude = e
    },
    changeLat(e){
      this.latitude = e
    },
  }
}
</script>

<style>

</style>