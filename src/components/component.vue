
<template>
    <div id="myComponent">
        <h2>{{ name }}</h2>
        <img class ="img" v-bind:src=pictureUrl alt="Character Image">
        <p>{{ appearance }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MyComponent',
        props: {
        name: {type: String, required: true},
        appearance: String,
        pictureUrl: {type: String, default:"https://s.com/default.png"}
        }
    }
</script>

<style>
    #myComponent {
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