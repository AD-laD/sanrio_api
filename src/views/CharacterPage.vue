<script setup>
    import  getSanrioDataById  from '@/services/api/sanrioById.js';
    import  cleanImageURL  from '@/services/tools/cleanImageURL.js';
    import getGoogleProducts from '@/services/api/googleShopping';
    import Product from '@/components/product.vue';
</script>
<template>
    <div id="CharacterPage" class="CharacterPage">
        <div class="character__container">
                <div v-if="!isDataLoaded" class="loading-gif-container">
                Fetching API...
                <img src="../gif/picmix.com_25159962.gif" alt="Loading GIF" height="150px" />
            </div>
            <div class="titles">
                <h1>{{character.name}}</h1>
                <h2>{{ character.appearance }}</h2>
            </div>
            <div v-if="isDataLoaded">
                 <img class ="img" v-bind:src="cleanImageURL(character.img)" alt="image">
            </div>

            <div class="character-datas">
                <p class = "year character__about">Creation year :</p><p class= "character__data"> {{character.debut_year}}</p>
                <p class = "character__about">Created by :</p><p class= "character__data"> {{character.creator}}</p>
                <p class = "character__about">Universe :</p><p class= "character__data"> {{character.universe}}</p>
                <p class = "character__about">Residence :</p><p class= "character__data"> {{character.residence}}</p>
                <p class = "character__about">Gender :</p><p class= "character__data"> {{character.gender}}</p>
                <p class = "character__about">Specie :</p><p class= "character__data"> {{character.specie}}</p>
                <p class = "character__about">Birthday :</p><p class= "character__data"> {{character.birthday}}</p>
            </div>
            
        </div>

        <div v-if="isShoppingDataLoaded" class="product-container">
            
            <!-- <Product v-for="product in products" :key="product.id" :title="product.title" :price="product.price" :url="product.url" :image="product.image" /> -->
            <div class="product-gallery">
                <Product v-for="(product, index) in visibleProducts" :key="product.id" :title="product.title" :price="product.price" :url="product.url" :image="product.image" />
            </div>
         

            <!-- Afficher le bouton "Charger plus" si tous les produits ne sont pas encore affichés -->
            <div class="button_div">
                <button v-if="shouldShowLoadMoreButton" class="loadmorebutton" @click="loadMoreProducts">Charger plus</button>
            </div>
            
        </div>



       
    </div>
    <div>
    <a href="/..">
        <div class="button_div">
            <button > Go back to gallery</button>
        </div>
    </a>
       
    </div>
</template>

<script>
    export default {
        name: 'CharacterPage',
        components: {
            Product,
        },
        data() {
            return {
                character: {},
                products: {},
                visibleProducts: [],
                isShoppingDataLoaded : false,
                productsPerPage: 5,
                currentPage: 1,
                productsArray: [],
                productsArrayDefault: [],
            };
        },
        mounted() {
            const characterId = this.$route.params.id;
            this.getCharacterDataFromId(characterId);
            this.getProductsData();
        },
        computed:{
            paginatedProducts() {
                const startIndex = (this.currentPage - 1) * this.productsPerPage;
                const endIndex = startIndex + this.productsPerPage;
                this.productsArray = [...this.products];
                return this.productsArray.slice(startIndex, endIndex);
            },
            shouldShowLoadMoreButton() {
                console.log(this.visibleProducts.length);
                return this.visibleProducts.length < Object.keys(this.products).length-5;
                
            },
        },
        methods:{
            async getCharacterDataFromId(characterId){
                try {
                    const sanrioData = await getSanrioDataById(characterId);
                    this.character = sanrioData;
                    this.isDataLoaded = true;
                    
                } catch (error) {
                    console.error(error);
                }
            }, 
            async getProductsData(){
                try{
                    const response = await getGoogleProducts();
                if (response && response.results) {
                    this.products = response.results;
                    this.isShoppingDataLoaded = true;
                    this.productsArrayDefault = [...this.products];
                    this.visibleProducts = this.productsArrayDefault.slice(0, 5);
                    console.log(this.visibleProducts);
                } else {
                    console.error("Invalid response format from the API");
                }
                } catch (error) {
                    console.error(error);
                }
            },
            loadMoreProducts() {
                this.currentPage++;
                this.visibleProducts = [...this.visibleProducts, ...this.paginatedProducts];
            },
            
        }
    }
</script>
<!-- piste : changer le picture url uniquement après que les datas soient loaded-->
<style>
    .CharacterPage{
        padding-right:200px;
        padding-left: 200px;
    }

    .character__container{
        background-image: url('../img/sanrio-background2.jpg');
        background-size: 10em auto;
        background-repeat: 10;
        border: solid 30px transparent;
        border-image: url('@/img/border.jpg') 5% round;
        border-image-width:20px;
        box-shadow: 5px 5px 4px 5px rgba(253, 36, 188, 0.5) ;
        background-image: url('@/img/hellokitty bg.png');
        display: grid;
        grid-template-areas:
            "title image"
            "appearance image"
            "datas datas";
        gap: 10px;
    }

    .character__container .titles {
        grid-area: title;
        /* background-color: rgba(255, 188, 188, 0.451); */
    }

    .character__container img {
        grid-area: image;
        width:250px;
        border: solid 30px transparent;
        border-image: url('@/img/sanrio_border3.jpg') 10% round;
        border-image-width:30px;
        box-shadow: 0px 4px 4px 0px rgba(239, 182, 222, 0.5);

    }

    .character__container h1{
        background-color:#ffa7d8;
        color:var(--first-pink);
        padding: 1rem 2rem;
        box-shadow: 0px 2px 2px 0px rgba(253, 36, 188, 0.5) ;
        border-color:#FFF var(--second-pink) var(--second-pink) #FFF;
        border-width:1px;
        border-style: solid;
    }

    .character__container h2 {
        grid-area: appearance;
        background-color: var(--first-pink);
        color: #ffa7d8;
        box-shadow: 0px 2px 2px 0px rgba(253, 36, 188, 0.5) ;
        border-color:#FFF var(--second-pink) var(--second-pink) #FFF;
        border-width:1px;
        border-style: solid;
    }

    .character-datas{
        display: grid;
        /* grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); */
        grid-area: datas;
        grid-template-columns: repeat(4, 1fr);
        border: solid 30px transparent;
        border-image: url('@/img/border_text.jpg') 20% round;
        border-image-width:30px;
        background-color: var(--first-pink);
        background-image: url('@/img/charactextebg.jpg');
        background-size: 5em auto;
        background-repeat: 10;
        /* width:300px; */
        color:#ffa7d8;
        box-shadow: 0px 4px 4px 0px rgba(253, 36, 188, 0.5) ;
    }

    .character__about{
        background-color: rgb(254, 168, 228);
        color:#FFF;
    }

    .character__data{
        background-color: var(--first-pink);
        color:var(--second-pink);
    }

    .character__data, .character__about{
        border-color:#FFF var(--second-pink) var(--second-pink) #FFF;
        border-width: 1px;
        border-style: solid;
        height:40px;
        align-items: center;
        display: flex;
        justify-content:space-around;
    }

    .product-container{
        min-height: 450px;
        background-image: url('../img/sanrio-background2.jpg');
        background-size: 10em auto;
        background-repeat: 10;
        border: solid 30px transparent;
        border-image: url('@/img/border.jpg') 5% round;
        border-image-width:20px;
        box-shadow: 0px 4px 4px 0px rgba(253, 36, 188, 0.5) ;
    }

    .product-gallery{
        
        display: grid;
        gap:10px;
        grid-template-columns:  minmax(100px, max-content) repeat(auto-fill, 200px) 20%;

      
    }

    .button_div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }


</style>