<template>
  <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
    <b-card title="Large Public Bus" text-variant="danger" class="text-center" title-tag="h5">
        <b-form @submit="onSubmit">
            <b-form-group id="companyNameTaxiGroup" label-for="companyNameTaxi" class="py-1 my-1 mx-xl-2 px-xl-2">
                <b-form-input id="companyNameTaxi" class="rounded-pill" placeholder="Company Name" style="text-align:center;"></b-form-input>
            </b-form-group>
            <b-form-group id="emailTaxiGroup" label-for="emailTaxi" class="py-1 my-1 mx-xl-2 px-xl-2">
                <b-form-input id="input" class="rounded-pill" type="email" placeholder="Email" style="text-align:center;"></b-form-input>
            </b-form-group>
            <b-form-group id="phoneNumberTaxiGroup" label-for="phoneNumberTaxi" class="py-1 my-1 mx-xl-2 px-xl-2">
                <b-form-input id="phoneNumberTaxi" class="rounded-pill" placeholder="Phone Number" style="text-align:center;"></b-form-input>
            </b-form-group>
            <b-form-group id="paymentTaxiGroup" label-for="paymentTaxi" class="py-1 my-1 mx-xl-2 px-xl-2">
                <b-form-input id="paymentTaxi" class="rounded-pill" placeholder="Payment(Monthly/Yearly)" style="text-align:center;"></b-form-input>
            </b-form-group>
            <b-form-group id="buttonTaxiGroup"  class="py-1 my-1 mx-xl-2 px-xl-2">
                <b-button type="submit" block pill variant="outline-danger">SEND</b-button>
            </b-form-group>
        </b-form>
    </b-card>
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
