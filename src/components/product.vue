
<template>
    <div id="product">
        <div class="image__container">
            <h3>{{ title}}</h3>
        </div>
       
        <img class ="img" v-bind:src="image" v-bind:alt="title">
        <div class="card__text__alt">
            <p>{{ price }}</p>
            <a :href="url" target="_blank" class="mon-bouton">
                <button class="url">View product</button>
            </a>
           
            
        </div>
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
        },
       methods: {
        }
    }
</script>

<style>
    #product {
        display: flex;
        flex-direction: column; 
        place-items: center;
        align-items: center;
        border: solid 30px transparent;
        border-image: url('@/img/border_text.jpg') 20% round;
        border-image-width:30px;
        background-color: var(--first-pink);
        color:#ffa7d8;
    }
    
    #product:hover{
        box-shadow: 0px 2px 4px 4px rgba(253, 36, 188, 0.5) ;
        
    }

    h3 {
        font-size: 10px;
        margin : 10px;
        font-weight: var(--font-semi-bold);
        line-height: 1.6;
        height:70px;
    }

    .card__text__alt{
        border: solid 10px transparent;
        border-image: url('@/img/border.jpg') 5% round;
        border-image-width:10px;
        background-color: var(--second-pink);
        color:var(--first-pink);
        box-shadow: 0px 4px 4px 0px rgba(253, 36, 188, 0.5) ;
        width:100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #product img{
        width:100%;
        object-fit: cover;
        height:150px;
    }

    .url{
        width:100%;
        text-align: center;
        padding-top:5px;
        padding-bottom: 5px;
    }

    .mon-bouton{
        width:100%;
    }
</style>