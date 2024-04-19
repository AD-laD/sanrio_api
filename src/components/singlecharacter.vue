<script setup>
    import  getSanrioDataById  from '@/services/api/sanrioById.js';
    import  cleanImageURL  from '@/services/tools/cleanImageURL.js';
    import getEbayProducts from '@/services/api/ebayShopping';
    import Product from '@/components/product.vue';
    import getLoveCalculator from '@/services/api/loveCalculator.js';
    import loveMatch from '@/components/loveMatch.vue';
</script>

<template>
    <div id="CharacterPage" class="CharacterPage">
        <div class="character__container">
                <div v-if="!isDataLoaded" class="loading-gif-container">
                Fetching API...
                <img src="../gif/picmix.com_25159962.gif" alt="Loading GIF" height="150px" />
                </div>
            <div class="titles ">
                <div class="name character__container__child">
                    <h1>{{character.name}}</h1>
                    <h2>{{ character.appearance }}</h2>
                </div>
                <div class="characimg character__container__child">
                    <div v-if="isDataLoaded">
                 <img class ="imgchar" v-bind:src="cleanImageURL(character.img)" alt="image">
            </div>
                </div>
            </div>
           

            <div class="lovedata ">
                <div class="love character__container__child">
                    <loveMatch :percentage="loveResult.percentage" :fname="loveResult.fname" :sname="loveResult.sname" :result="loveResult.result" @nameinput="getLoveData"/>
                </div>
                <div class="character-datas character__container__child">
                <p class = "year character__about">Creation year :</p><p class= "character__data"> {{character.debut_year}}</p>
                <p class = "character__about">Created by :</p><p class= "character__data"> {{character.creator}}</p>
                <p class = "character__about">Universe :</p><p class= "character__data"> {{character.universe}}</p>
                <p class = "character__about">Residence :</p><p class= "character__data"> {{character.residence}}</p>
                <p class = "character__about">Gender :</p><p class= "character__data"> {{character.gender}}</p>
                <p class = "character__about">Specie :</p><p class= "character__data"> {{character.specie}}</p>
                <p class = "character__about">Birthday :</p><p class= "character__data"> {{character.birthday}}</p>
            </div>
            </div>
          
            
        </div>
        <div v-if="!isShoppingDataLoaded" class="parent-container-load product-container">
            <div  class="loading-gif-container">
                Fetching API...
                <img src="../gif/picmix.com_25159962.gif" alt="Loading GIF" height="150px" />
            </div>
        </div>
        <div v-if="isShoppingDataLoaded" class="product-container">
            <div class="product-gallery">
                <Product v-for="(product, index) in visibleProducts" :key="product.id" :title="product.title" :price="product.price" :url="product.url" :image="product.image" />
            </div>
            <div class="button_div">
                <button v-if="shouldShowLoadMoreButton" class="loadmorebutton" @click="loadMoreProducts">Charger plus</button>
            </div>
        </div>
       
    </div>
    <div>
    <a href="/..">
        <div class="button_div gallery__button">
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
            loveMatch,
        },
        data() {
            return {
                character: {},
                products: {},
                visibleProducts: [],
                isShoppingDataLoaded : false,
                isDataMounted : false,
                LoveData:false,
                productsPerPage: 4,
                currentPage: 1,
                productsArray: [],
                productsArrayDefault: [],
                characterName:"",
                loveResult: {},
            };
        },
        mounted() {
            const characterId = this.$route.params.id;
            this.getCharacterDataFromId(characterId);
            this.getProductsData();
            this.isDataMounted = true;
        },
        watch: {
        character: {
            handler: 'getProductsData',
            deep: true,
        },
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
                return this.visibleProducts.length < Object.keys(this.products).length-this.productsPerPage;
                
            },
        },
        methods:{
            async getCharacterDataFromId(characterId){
                try {
                    const sanrioData = await getSanrioDataById(characterId);
                    this.character = sanrioData;
                    console.log(this.character.name);
                    this.characterName = this.character.name;
                    this.isDataLoaded = true;
                    
                } catch (error) {
                    console.error(error);
                }
            }, 
            async getProductsData(){ 
                if(this.isDataLoaded){
                    const characname = this.character.name;
                    try{
                    const response = await getEbayProducts(characname);
                    if (response && response.results) {
                        this.products = response.results;
                        this.isShoppingDataLoaded = true;
                        this.productsArrayDefault = [...this.products];
                        this.visibleProducts = this.productsArrayDefault.slice(0, this.productsPerPage);
                    } else {
                        console.error("Invalid response format from the API");
                    }
                    } catch (error) {
                        console.error(error);
                    }
                }
                
            },
            loadMoreProducts() {
                this.currentPage++;
                this.visibleProducts = [...this.visibleProducts, ...this.paginatedProducts];
            },
            async getLoveData(value){
                console.log(value);
                if(this.isDataLoaded){
                    console.log("on entre ici");
                    const characname = this.character.name;

                    try {
                        this.loveResult = await getLoveCalculator(characname, value);
                        this.LoveData = true;
                        console.log(this.loveResult);
                    } catch (error) {
                        console.error(error);
                    }
                }
            },

        }
    }
</script>
<style>
    .CharacterPage{
        padding-right:15%;
        padding-left: 15%;
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
        display: flex;
        flex-direction: column;
        gap: 10px;
        width:100%;
    }

    .character__container .titles,
    .character__container .lovedata {
        display: flex;
        flex-direction: row;
    }

    .character__container__child{
        flex-grow: 1;
        margin:5px;
    }
    .character__container .titles .name{
        flex-basis: 70%;
    }


    .character__container .imgchar {
        width:100%;
        border: solid 30px transparent;
        border-image: url('@/img/sanrio_border3.jpg') 10% round;
        border-image-width:30px;
        box-shadow: 0px 4px 4px 0px rgba(239, 182, 222, 0.5);
        min-width: 200px;
        background-image: url('../img/card_bg.jpg');
        background-size: 20em auto;
        background-clip: padding-box;

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
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        border: solid 30px transparent;
        border-image: url('@/img/border_text.jpg') 20% round;
        border-image-width:30px;
        background-color: var(--first-pink);
        color:#ffa7d8;
        box-shadow: 0px 4px 4px 0px rgba(253, 36, 188, 0.5) ;
        width:100%;
    }

    .love{
        min-width: 300px;
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
        margin:0px;
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
        /* grid-template-columns:  minmax(120px, max-content) repeat(auto-fill, 200px) 20%; */
        grid-template-columns: repeat(4, minmax(100px, 1fr));
    }

    .button_div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
    .gallery__button{
        margin-top: 30px;
        margin-bottom: 30px;
    }

@media screen and (max-width: 1100px) {
    .product-gallery{
        grid-template-columns: repeat(3, minmax(100px, 1fr));

    }
    button .mon-bouton{
        padding: 0 !important;
        background-color: #FFF;
    }
}


@media only screen and (max-width: 767px) {
    .CharacterPage{
        padding-right:30px;
        padding-left: 30px;
    }
    .character-datas{
        box-shadow: 0px 2px 2px 0px rgba(253, 36, 188, 0.5);
        /* grid-template-columns: repeat(2, minmax(100px, 1fr)); */
        flex-basis: 100%;
    }
    .character__data, .character__about{
        font-size: 12px;
        /* margin:0px; */
    }
    .character__container h1{
        font-size: 16px;
        padding: 0.5rem 0.5rem;
    }
    .character__container h2{
        font-size: 14px;
        padding: 0.5rem 0.5rem;
        margin:none;
    }
    .character__container__child{
        margin:2px;
    }
    .character__container .imgchar {
        min-width: 10px;
        width:100%;
        border-color:#FFF var(--second-pink) var(--second-pink) #FFF;
        border-width:3px;
        border-style: solid;
        height:100%;
        border-image:none;
        background-size: 15em auto;
    }
    .characimg{
        width:30%;
    }

    .character__container .lovedata {
        flex-direction: column;
    }

    .product-gallery{
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    }

}



</style>