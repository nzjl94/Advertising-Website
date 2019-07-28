<template>
    <div class="row my-4">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2  class="mx-auto text-danger">SUBCRIPTION</h2>
        </div>
        <form-one></form-one>
        <form-two></form-two>
        <form-three></form-three>
    </div>
</template>
<script>
    import formOne from './forms/form1';
    import formTwo from './forms/form2';
    import formThree from './forms/form3';
    export default {
        components:{
            formOne,
            formTwo,
            formThree
        }
    }
</script>
<style scoped>
    
</style>
