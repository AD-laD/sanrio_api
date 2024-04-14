<script setup>
import cleanImageURL from '@/services/tools/cleanImageURL.js'
</script>

<template>
    <div id="myComponent">
        <h2>{{ name }}</h2>
        <img class ="img" v-bind:src="cleanImageURL(pictureUrl)" v-bind:alt="name">
        <div class="card__text">
            <p>{{ appearance }}</p>
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
        /* flex-basis:300px;*/
        flex-direction: column; 
        place-items: center;
        align-items: center;
        /* margin:50px;
        background-image: url('../img/card_bg.jpg');
        border: solid 30px transparent;
        border-image: url('@/img/border_img2.png') 30% round;
        border-image-width: 40px;
        background-clip: padding-box; */
    }
    /*
    #myComponent:hover{
        box-shadow: 0px 2px 4px 4px rgba(253, 36, 188, 0.5) ;
        cursor:pointer;
    } */

    h2 {
        font-size: var(--h2-font-size);
        margin : 10px;
        font-weight: var(--font-semi-bold);
        line-height: 1.6;
    }
    p{
        font-size : var(--smaller-font-size);
    }

    .card__text{
        border: solid 30px transparent;
        border-image: url('@/img/border_text.jpg') 20% round;
        border-image-width:30px;
        background-color: var(--first-pink);
        /* width:300px; */
        color:#ffa7d8;
        box-shadow: 0px 4px 4px 0px rgba(253, 36, 188, 0.5) ;
    }
    

</style>