<template>
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
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>
<style scoped>
</style>
