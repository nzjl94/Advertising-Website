<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <p class="text-white emailInfo">info@city-light.com</p>
        </div>
      </div>
      <div class="mainContainer">
        <div :class="'subContainer subContainer'+index" v-for="(item, index) in addresses" :key="index">
          <ul class="list-unstyled">
            <li class="cityNameStyle">
              {{item["name"]}}
            </li>
            <li class="addressNameStyle">
                <span class="">
                  <Icons iconName="map-marker-alt" iconClass="fa-2x" />
                </span>
                {{item["address"]}}
            </li>
            <li class="phoneNumberStyle">
                <span class="">
                  <Icons iconName="phone-alt" iconClass="fa-2x" />
                </span>
              {{item["phone"]}}
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
  import Icons from '../general/icons'
  export default {
    data() {
      return {
        addresses:[
          {"name":"Erbil HQ","address":"English Village - Villa No. 333","phone":"+964 750 797 0000"},
          {"name":"Sulaymanyah Branch","address":"Mamostayan St., Bldg. 8 Beside Othman Akha Mosque-3rd floor","phone":"+964 750 301 0301"},
          {"name":"Baghdad Branch","address":"AL-Mansour 13 St.Dist.609, Bldg.5/7","phone":"+964 750 376 7900"},
        ]
      }
    },
    components:{
      Icons
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/style/components/footer/info.scss";
</style>
