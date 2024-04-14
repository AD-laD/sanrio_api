<script setup>
  import MyComponent from '@/components/component.vue'
  import getSanrioData  from '@/services/api/sanrioAPI.js'
  import getSanrioDataLittleApi from '@/services/api/sanrioAPI2.js'
  import MyComponent2 from '@/components/component2.vue'
  import FilterOptions from '@/components/filterOptions.vue'
  import cutMonth from '@/services/tools/cutMonth.js'
  import sliderBirthdayValues from '@/services/tools/sliderBirthdayValues.js'

</script>

<template>
      <FilterOptions :triPar="triPar" :search="search" :characSortType="characSortType" :characSpecie.sync="characSpecie" @update:characSortType="updateCharacSortType" @update:search="updateSearch" @clean-search="cleanSearch"  @update:characSpecie="updateCharacSpecie" :species="species" :characBirthday="characBirthday" @update:characBirthday="updateCharacBirthday"/>
    <div class="component-gallery">
        <div v-if="!isDataLoaded" class="loading-gif-container">
            Fetching API...
            <img src="../gif/picmix.com_25159962.gif" alt="Loading GIF" height="150px" />
        </div>
            <router-link class="mycomponent" v-for="character in charactersOrganizedData" :key="character._id" :to="{ name: 'CharacterPage', params: { id: character._id } }">
                <MyComponent :name="character.name" :appearance="character.appearance" :pictureUrl="character.img" />
            </router-link>
    </div>
</template>

<script>
    export default {
        name: 'MyGallery',
        components: {
            MyComponent,
            MyComponent2,
            FilterOptions,
        },
        data() {
            return {
                characters: [],
                newCharacters : [],
                triPar: 'nom',
                isDataLoaded: false, 
                search: "",
                characSpecie: "all",
                characSortType: "AZName",
                species: [],
                characBirthday: "0",
            };
        },
        mounted() {
            this.fetchSanrioData();
            this.fetchSanrioLittleData();
        },
        computed: {
            charactersOrganizedData: function() {
                const field = ["AZName", "ZAName"].includes(this.characSortType) ? "name" : ["12Date"].includes(this.characSortType) ? "debut_year" : "_id";
                const reversed = ["ZAName"].includes(this.characSortType);
                const searchTerm = this.search.toLowerCase();
                const specieFilter = this.characSpecie.toLowerCase();  
                const birthdayFilter = sliderBirthdayValues(this.characBirthday);
                console.log(birthdayFilter);
                const comparator = (a, b) => {
                    if (field === "name") {
                        return a[field].localeCompare(b[field]);
                    } else if (field === "debut_year") {
                        return a[field] - b[field];
                    } else {
                        return a[field].localeCompare(b[field]);
                    }
                };

                let data = [...this.characters];
                data = data.filter(character => character.name.toLowerCase().includes(searchTerm));
                data.sort(comparator);
                data.filter(character => character.name.toLowerCase().includes(searchTerm));
                if (specieFilter && specieFilter!== "all") {
                    data =data.filter(character => character.specie.toLowerCase() === specieFilter);
                }
                if (birthdayFilter && birthdayFilter!=="all"){
                    data=data.filter(character => cutMonth(character.birthday) === birthdayFilter || cutMonth(character.birthday) === "every");
                }

                if (reversed) data = data.reverse();

                return data;
            },
        },
        methods: {
            async fetchSanrioData() {
                try {
                    const sanrioData = await getSanrioData();
                    console.log()
                    this.characters = sanrioData;
                    this.isDataLoaded = true;
                    const uniqueSpecies = new Set();
                    this.characters.forEach(character => {
                    if (character.specie) {
                        uniqueSpecies.add(character.specie);
                    }
                    });
                    this.species = Array.from(uniqueSpecies);
                    console.log('Unique Species:', Array.from(uniqueSpecies));
                } catch (error) {
                    console.error(error);
                }
            },
            async fetchSanrioLittleData(){
                try{
                    this.newCharacters = await getSanrioDataLittleApi();
                }catch(error){
                    console.error(error);
                }
            },
            updateCharacSortType(newSortType) {
                this.characSortType = newSortType;
            },
            updateSearch(newSearch) {
                this.search = newSearch;
            },
            cleanSearch() {
                this.search = '';
                this.characSpecie='all';
            },
            updateCharacSpecie(newSpecie) {
                this.characSpecie = newSpecie;
            },
            updateCharacBirthday(newBirthday){
                this.characBirthday=newBirthday;
            }
        }
    }
</script>

<style>
    .mycomponent {
        display: flex;
        flex-basis:300px;
        flex-direction: column;
        place-items: center;
        margin:50px;
        /* height:200px; */
        background-image: url('../img/card_bg.jpg');
        border: solid 30px transparent;
        border-image: url('@/img/border_img2.png') 30% round;
        border-image-width: 40px;
        background-clip: padding-box;
        max-width: 400px;
    }
    .mycomponent:hover{
        box-shadow: 0px 2px 4px 4px rgba(253, 36, 188, 0.5) ;
        cursor:pointer;
    }
    .img{
        width:80%;
        
    }
.component-gallery{
    margin-left: 150px;
    margin-right:150px;
    min-height: 450px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    background-image: url('../img/sanrio-background2.jpg');
    background-size: 10em auto;
    background-repeat: 10;
    border: solid 30px transparent;
    border-image: url('@/img/border.jpg') 5% round;
    border-image-width:20px;
    box-shadow: 0px 4px 4px 0px rgba(253, 36, 188, 0.5) ;
}

.loading-gif-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    color:var(--second-pink);
}

.loading-gif-container img {
    z-index: 1;
}

@media screen and (max-width: 680px) {
    .component-gallery{
        margin-left: 0;
        margin-right:0;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    }
    .mycomponent{
        margin:6%;
        background-image: url('../img/card_bg.jpg');
        border: solid 10px transparent;
        border-image: url('@/img/border_img2.png') 30% round;
        border-image-width: 30px;
        background-clip:padding-box;
        background-size: 15em auto;
        max-height: 180px;
    }
    h2{
        line-height: normal;
        font-size: 16px;
        max-width: 100px;
        text-align: center;
    }
    p{
        font-size: 14px;
    }

    .img{
        height:100px;
        width:auto;
    }
    #myComponent > .card__text{
        display: none;
    }

    .image__container {
        position: relative;
        width: 100%; 
        right:0;

    }

    .image__container h3 {
        position: absolute;
        word-break: break-all;
        width:100%;
        top: 0;
        left: 0;
        right:-50px;
        /* background-color: rgba(255, 255, 255, 0.8);  */
        color:azure;
        padding: 10px; 
        margin: 0; 
        z-index: 3;
    }

    .card__text{
        line-height: 0px;
    }

    .url{
       padding:10px;
    }
}

</style>