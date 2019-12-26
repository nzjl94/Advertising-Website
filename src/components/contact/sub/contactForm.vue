<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ml-1">
        <b-form @submit="onSubmit">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <b-form-group  :class="$v.companyInfo.name.$error ?'invalid py-1 my-1 mx-xl-2 px-xl-2':'py-1 my-1 mx-xl-2 px-xl-2'">
                  <b-form-input 
                    class="pill" 
                    placeholder="Company Name" 
                    style="text-align:center;" 
                    @blur="$v.companyInfo.name.$touch()"
                    v-model="companyInfo.name"
                  >
                  </b-form-input>
                  <p style="text-align:center;color:red;" v-if="!$v.companyInfo.name.required">the name is required</p>
                  <p style="text-align:center;color:red;" v-if="!$v.companyInfo.name.minLength">must be 6 letter or more</p>
              </b-form-group>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <b-form-group :class="{ 'invalid': $v.companyInfo.email.$error,'py-1 my-1 mx-xl-2 px-xl-2':true}">
                  <b-form-input 
                    class="pill" 
                    type="email" 
                    placeholder="Email" 
                    @blur="$v.companyInfo.email.$touch()"
                    style="text-align:center;" v-model="companyInfo.email"
                  >
                  </b-form-input>
                  <p style="text-align:center;color:red;" v-if="!$v.companyInfo.email.email">Email format not correct</p>
                  <p style="text-align:center;color:red;" v-if="!$v.companyInfo.email.required">Email field is required.</p>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <b-form-group class="py-1 my-1 mx-xl-2 px-xl-2">
                <b-form-textarea 
                  placeholder="Enter something..." 
                  rows="5" 
                  max-rows="8" 
                  @blur="$v.companyInfo.note.$touch()"
                  v-model="companyInfo.note"
                >
                </b-form-textarea>
                <p style="text-align:center;color:red;" v-if="!$v.companyInfo.note.required">the note is required</p>
                <p style="text-align:center;color:red;" v-if="!$v.companyInfo.note.minLength">must be 10 letter or more</p>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <b-form-group  :class="$v.companyInfo.payment.$error ?'invalid py-1 my-1 mx-xl-2 px-xl-2':'py-1 my-1 mx-xl-2 px-xl-2'">
                  <b-form-input
                    class="pill" 
                    placeholder="Payment(Monthly/Yearly)" 
                    style="text-align:center;" 
                    @blur="$v.companyInfo.payment.$touch()"
                    v-model="companyInfo.payment"
                  >
                  </b-form-input>
                  <p style="text-align:center;color:red;" v-if="!$v.companyInfo.payment.required">the name is required</p>
                  <p style="text-align:center;color:red;" v-if="!$v.companyInfo.payment.between">The money must be between 0 to 100,000,000</p>
              </b-form-group>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <b-form-group  class="py-1 my-1 mx-xl-2 px-xl-2">
                  <b-button type="submit" block variant="outline-danger" :disabled="$v.$invalid">SEND</b-button>
              </b-form-group>
            </div>
          </div>
        </b-form>
    </div>
</template>
<script>
  import {required,email,minLength,between} from "vuelidate/lib/validators";
  import axios from "axios";
  export default {
    data() {
      return {
        companyInfo:{
          "name":"",
          "email":"",
          "note":"",
          "payment":""
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        axios.post("/contact.json",this.companyInfo)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    },
    validations: {
      companyInfo:{
        email:{
          required,
          email
        },
        name:{
          required,
          minLength: minLength(4)
        },
        note:{
          required,
          minLength: minLength(10)
        },
        payment:{
          required,
          between: between(0,100000000)
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .invalid input{
    border: 2px solid rgba(102, 8, 8, 0.781);
    background-color: #f1652e;
  }
</style>
