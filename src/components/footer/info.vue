<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <p class="text-white emailInfo">info@city-light.com</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
          <ul class="list-unstyled">
            <li class="cityNameStyle">
              Erbil HQ
            </li>
            <li class="addressNameStyle">
                <span class="">
                  <Icons iconName="map-marker-alt" iconClass="fa-2x" />
                </span>
                English Village - Villa No. 333
            </li>
            <li class="phoneNumberStyle" style="margin-top:32px;">
                <span class="">
                  <Icons iconName="phone-alt" iconClass="fa-2x" />
                </span>
              +964 750 797 0000
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
          <ul class="list-unstyled">
            <li class="cityNameStyle">
              Sulaymanyah Branch
            </li>
            <li class="addressNameStyle">
              <span class="">
                <Icons iconName="map-marker-alt" iconClass="fa-2x" />
              </span>
              Mamostayan St., Bldg. 8 Beside Othman Akha Mosque-3rd floor
            </li>
            <li class="phoneNumberStyle" style="margin-top:13px;">
              <span class="">
                <Icons iconName="phone-alt" iconClass="fa-2x" />
              </span>
              +964 750 301 0301
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
          <ul class="list-unstyled">
            <li class="cityNameStyle">Baghdad Branch</li>
            <li class="addressNameStyle">
              <span class="">
                <Icons iconName="map-marker-alt" iconClass="fa-2x" />
              </span>
              AL-Mansour 13 St.Dist.609, Bldg.5/7
            </li>
            <li class="phoneNumberStyle" style="margin-top:32px;">
                <span class="">
                  <Icons iconName="phone-alt" iconClass="fa-2x" />
                </span>
                +964 750 376 7900
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
      return {}
    },
    components:{
      Icons
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/style/components/footer/info.scss";
</style>
