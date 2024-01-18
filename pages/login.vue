<script setup>



const arrayData = [
    {
        id: 1,
        name: "email",
        placeholder: "Enter email",
        type: "text",
        formName: "login",
        text:"Enter Email"
    },
    {
        id: 2,
        name: "password",
        placeholder: "Enter password",
        type: "password",
        formName: "login",
        text:"Enter Password"   
    },

]


</script>
<template>
    <div>
        <h1 class="text-5xl"> Login </h1>
        <FormComponent :arrayData="arrayData" />
    </div>
</template>
  
<style scoped>
h1{
margin-top: 80px;
margin-bottom: 20px;

}</style>
 
  