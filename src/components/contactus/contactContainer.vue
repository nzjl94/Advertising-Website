<template>
    <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h3 class="text-center" >
                      <ins>Get in Touch</ins>
                    </h3>
                    <p class="text-center">
                      We are available 24/7 by fax, e-mail, or by phone. You can also use our quick contack form to ask a 
                      question about our services and projects.
                    </p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <b-form @submit="onSubmit">
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <b-form-group id="companyNameTaxiGroup" label-for="companyNameTaxi" class="py-1 my-1 mx-xl-2 px-xl-2">
                                <b-form-input id="companyNameTaxi" class="pill" placeholder="Company Name" style="text-align:center;"></b-form-input>
                            </b-form-group>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <b-form-group id="emailTaxiGroup" label-for="emailTaxi" class="py-1 my-1 mx-xl-2 px-xl-2">
                                <b-form-input id="input" class="pill" type="email" placeholder="Email" style="text-align:center;"></b-form-input>
                            </b-form-group>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <b-form-group id="phoneNumberTaxiGroup" label-for="textarea" class="py-1 my-1 mx-xl-2 px-xl-2">
                              <b-form-textarea id="textarea" placeholder="Enter something..." rows="5" max-rows="8"></b-form-textarea>
                            </b-form-group>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <b-form-group id="paymentTaxiGroup" label-for="paymentTaxi" class="py-1 my-1 mx-xl-2 px-xl-2">
                                <b-form-input id="paymentTaxi" class="pill" placeholder="Payment(Monthly/Yearly)" style="text-align:center;"></b-form-input>
                            </b-form-group>
                          </div>
                          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <b-form-group id="buttonTaxiGroup"  class="py-1 my-1 mx-xl-2 px-xl-2">
                                <b-button type="submit" block variant="outline-danger">SEND</b-button>
                            </b-form-group>
                          </div>
                        </div>
                      </b-form>
                </div>
              </div>
          </div>
          <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
              <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h4><ins>Follow Us </ins>on Socials</h4>
                  </div>
              </div>
              <div class="row mt-3">
                   <div class="mx-2 px-0" v-for="(item, index) in icons_array" :key="index">
                     <Icons :iconName="item" iconType="fab" iconStyle="color:rgb(193, 39, 45);border: solid 3px rgb(193, 39, 45);"/>
                   </div>
              </div>
              <hr/>
              <div class="row mt-3">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4>Call Now</h4>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 my-3">
                      <Icons iconName="phone-alt" iconStyle="color:rgb(193, 39, 45);" iconClass="" />
                    </div>
                    <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                      <h5 class="float-left">+964 (0) 750 155 1212</h5>
                      <h5 class="float-left">+964 (0) 770 155 1212</h5>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div class="row mt-3">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4>Email Us</h4>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                      <Icons iconName="at" iconStyle="color:rgb(193, 39, 45);" iconClass="" />
                    </div>
                    <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 my-1">
                      <h5 class="float-left">citylight@info.com</h5>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
          </div>
        </div>
        <div class="row bg-light">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h3 class="text-center py-2 my-1">
                    City Light Addresses On Map
                </h3>
            </div>    
        </div>
    </div>
</template>
<script>
  import '@fortawesome/fontawesome-free/css/all.css'
  import Icons from '../ready/icons'
  export default {
    data() {
      return {
        icons_array:["facebook-f","twitter","instagram","pinterest-p","youtube","vimeo-v"]
      }
    },
    components:{
      Icons
    }
  }
</script>
<style scoped>
    ins { 
      text-decoration:none;
      border-bottom: 2px solid red;
      padding-bottom: 5px;
    }
</style>