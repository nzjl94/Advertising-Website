<template>
  <div :class="containerClass">
    <p :class="formText.classes">{{formText.text}}</p>
    <b-form @submit="onSubmit">
        <b-form-group id="companyNameGroup" label-for="companyName" :class="$v.formData.companyName.$error ?'invalid py-1 my-1 mx-xl-2 px-xl-2':'py-1 my-1 mx-xl-2 px-xl-2'">
            <b-form-input 
              id="companyName" 
              class="rounded-pill" 
              placeholder="Company Name" 
              style="text-align:center;" 
              v-model="formData.companyName"
              @blur="$v.formData.companyName.$touch()"
            ></b-form-input>
        </b-form-group>
        <b-form-group id="emailGroup" label-for="email" :class="$v.formData.email.$error ?'invalid py-1 my-1 mx-xl-2 px-xl-2':'py-1 my-1 mx-xl-2 px-xl-2'">
            <b-form-input 
              id="input" 
              class="rounded-pill" 
              type="email" 
              placeholder="Email" 
              style="text-align:center;" 
              v-model="formData.email"
              @blur="$v.formData.email.$touch()"
            ></b-form-input>
        </b-form-group>
        <b-form-group id="phoneNumberGroup" label-for="phoneNumber" :class="$v.formData.phoneNumber.$error ?'invalid py-1 my-1 mx-xl-2 px-xl-2':'py-1 my-1 mx-xl-2 px-xl-2'">
            <b-form-input 
              id="phoneNumber" 
              class="rounded-pill"
              placeholder="Phone Number" 
              style="text-align:center;"
              v-model="formData.phoneNumber"
              @blur="$v.formData.phoneNumber.$touch()"
            ></b-form-input>
        </b-form-group>
        <b-form-group id="paymentGroup" label-for="payment" :class="$v.formData.payment.$error ?'invalid py-1 my-1 mx-xl-2 px-xl-2':'py-1 my-1 mx-xl-2 px-xl-2'">
            <b-form-input
              id="payment" 
              class="rounded-pill" 
              placeholder="Payment(Monthly/Yearly)" 
              style="text-align:center;" 
              v-model="formData.payment"
              @blur="$v.formData.payment.$touch()"
            ></b-form-input>
        </b-form-group>
        <b-form-group id="buttonTaxiGroup"  class="py-1 my-1 mx-xl-2 px-xl-2">
            <b-button type="submit" block pill variant="outline-danger" :disabled="$v.$invalid">SEND</b-button>
        </b-form-group>
    </b-form>
  </div>
</template>
<script>
    import {required,email,minLength,between,integer} from "vuelidate/lib/validators";
    export default {
      data() {
        return {
          formData:{
            type:this.formText.type,
            companyName:"",
            email:"",
            phoneNumber:"",
            payment:""
          }
        }
      },
      validations: {
        formData:{
          email:{
            required,
            email
          },
          companyName:{
            required,
            minLength: minLength(4)
          },
          phoneNumber:{
            required,
            integer
          },
          payment:{
            required,
            between: between(0,100000000)
          }
        }
      },
      methods: {
        onSubmit(evt) {
          evt.preventDefault();
          this.$emit('comingDataFromChild', this.formData)
        }
      },
      props:{
        formText: {type: Object,default:() => ({classes:"",text:"",type:""})},
        containerClass: {type: String,default:""},
      }
    }
</script>
<style scoped>  
  .invalid input{
    border: 2px solid rgba(102, 8, 8, 0.781);
    background-color: #f1652e;
  }
</style>
