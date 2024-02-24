
<template>
    <div id="myComponent2">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <p>{{ date }}</p>
        <p>{{ data }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MyComponent2',
        props: {
            name: {type: String, required: true},
            description: String,
            date: {type: String},
            data:{type: String}
        }
    }
   
</script>

<style>
    #myComponent2 {
        display: flex;
        flex-direction: column;
        place-items: center;
        padding : 10%;
    }

    h2 {
        font-size: 20px;
        margin : 10px;
    }
    p{
        font-size : 16px;
        margin: 20px;
    }
</style>