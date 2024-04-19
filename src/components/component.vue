<script setup>
import cleanImageURL from '@/services/tools/cleanImageURL.js'
</script>

<template>
    <div id="myComponent">
        <h2>{{ name }}</h2>
        <img class ="img" v-bind:src="cleanImageURL(pictureUrl)" v-bind:alt="name">
        <div class="card__text">
            <p class="card__p">{{ appearance }}</p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'MyComponent',
        props: {
        name: {type: String, required: true},
        appearance: String,
        pictureUrl: {type: String, default:"https://s.com/default.png"}
        },
       methods: {
        }
    }
</script>

<style>
    #myComponent {
        display: flex;
        flex-direction: column; 
        place-items: center;
        align-items: center;
    }

    h2 {
        font-size: var(--h2-font-size);
        margin : 10px;
        font-weight: var(--font-semi-bold);
        line-height: 1.6;
    }
    p{
        font-size : var( --normal-font-size);
        /* font-size: 11px; */
    }

    .card__text{
        border : solid transparent 30px;
        border-image: url('@/img/border_text.jpg') 20% round;
        border-image-width:30px;
        background-color: var(--first-pink);
        color:#ffa7d8;
        box-shadow: 0px 4px 4px 0px rgba(253, 36, 188, 0.5) ;
        height:120px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding:0; */
        /* margin:0; */
        max-width: 400px;
        margin-left:20px;

        margin-right: 20px;
        width:100%;
        box-sizing:content-box; /* La bordure est incluse dans la taille totale de la div */
    }

    .card__p{
        margin-right: 20px;
        margin-left:20px;
        /* margin:20px; */
        /* max-height: min-content;

        word-break: break-all; */
    }
    
    

</style>