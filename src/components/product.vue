<script setup>
// import cleanImageURL from '@/services/tools/cleanImageURL.js'
</script>

<template>
    <div id="product">
        <h3>{{ title}}</h3>
        <img class ="img" v-bind:src="image" v-bind:alt="title">
        <div class="card__text">
            <p>{{ price }}</p>
            <a :href="url" target="_blank" class="mon-bouton">
                <button class="url">View product</button>
            </a>
           
            
        </div>
        <!-- <p>{{ data }}</p> -->
    </div>
</template>

<script>
    export default {
        name: 'Product',
        props: {
            title: {type: String, required: true},
            price: String,
            url: String,
            image: {type: String, default:"https://s.com/default.png"},
            // data:{ type: Object, required: true },
        },
       methods: {
        }
    }
</script>

<style>
    #product {
        display: flex;
        /* flex-basis:300px;*/
        flex-direction: column; 
        place-items: center;
        align-items: center;
        border: solid 30px transparent;
        border-image: url('@/img/border_text.jpg') 20% round;
        border-image-width:30px;
        background-color: var(--first-pink);
        /* width:300px; */
        color:#ffa7d8;
        /* margin:50px;
        background-image: url('../img/card_bg.jpg');
        border: solid 30px transparent;
        border-image: url('@/img/border_img2.png') 30% round;
        border-image-width: 40px;
        background-clip: padding-box; */
    }
    
    #product:hover{
        box-shadow: 0px 2px 4px 4px rgba(253, 36, 188, 0.5) ;
        cursor:pointer;
    }

    h3 {
        font-size: 10px;
        margin : 10px;
        font-weight: var(--font-semi-bold);
        line-height: 1.6;
        height:70px;
    }

    .card__text{
        border: solid 10px transparent;
        border-image: url('@/img/border.jpg') 5% round;
        border-image-width:10px;
        background-color: var(--first-pink);
        /* width:300px; */
        color:#ffa7d8;
        box-shadow: 0px 4px 4px 0px rgba(253, 36, 188, 0.5) ;
        width:100%;
    }

    #product img{
        width:100%;
        object-fit: cover;
        height:150px;
    }
</style>