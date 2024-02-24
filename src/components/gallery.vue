<script setup>
  import MyComponent from '@/components/component.vue'
  import getSanrioData  from '@/services/api/sanrioAPI.js'
  import getSanrioDataLittleApi from '@/services/api/sanrioAPI2.js'
  import MyComponent2 from '@/components/component2.vue'
</script>

<template>
    <div class="select__container">
        <select class="select-gallery" v-model="triPar" @change="trierPersonnages">
            <option value="default">Default</option>
            <option value="nom">Name</option>
            <option value="date">Date</option>
        </select>
    </div>
   
    <div class="component-gallery">
        <router-link class="mycomponent" v-for="character in characters" :key="character._id" :to="{ name: 'CharacterPage', params: { id: character._id } }">
            <MyComponent :name="character.name" :appearance="character.appearance" :pictureUrl="character.img" />
        </router-link>
        <!-- <MyComponent v-for="character in characters" :key="character._id" :name="character.name" :appearance="character.appearance" :pictureUrl="character.img" /> -->
        <MyComponent2 :data="newCharacters" />
        <!-- <MyComponent2 v-for="character in newCharacters" :key="character.name" :name="character.name"/>-->
        <!-- <MyComponent2 v-for="character in newCharacters" :key="character.name" :name="character.name" :description="character.description" :date="character.debut_year"/> -->
        <!-- <MyComponent2 v-for="character in newCharacters" :key="character.name" :name="character.name" :description="character.description" :date="character.debut_year" /> -->
    </div>
</template>

<script>
    export default {
        name: 'MyGallery',
        components: {
            MyComponent,
            MyComponent2
        },
        data() {
            return {
                characters: [],
                newCharacters : [],
                triPar: 'nom',
            };
        },
        mounted() {
            this.fetchSanrioData();
            this.fetchSanrioLittleData();
        },
        methods: {
            async fetchSanrioData() {
                try {
                    const sanrioData = await getSanrioData();
                    this.characters = sanrioData;
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
            trierPersonnages() {
                this.characters.sort((a, b) => {
                    if (this.triPar === 'nom') {
                        return a.name.localeCompare(b.name);
                    }
                    else if(this.triPar === 'date'){
                        const yearA = a.debut_year; 
                        const yearB = b.debut_year;
                        return yearA - yearB;
                    } else if(this.triPar === 'default'){
                        return a._id.localeCompare(b._id);
                    }
                    return 0;
                });
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
    }
    .mycomponent:hover{
        box-shadow: 0px 2px 4px 4px rgba(253, 36, 188, 0.5) ;
        cursor:pointer;
    }
.component-gallery{
    /* display: flex;
    place-items: center; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /*3 colonnes*/
    padding: 0 3rem;
    max-width: 100%;
}

.select__container{
    display: flex;
    align-items: center;
    justify-content: center;
}

.select-gallery {
  width: 200px; 
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--second-pink);
  background-color: var(--first-pink);
  cursor: pointer;
  font-family: var(--body-font);
  color:var(--second-pink);
}

.select-gallery option {
  font-size: 14px;
  background-color: #fff;
  color: var(--color-text);
  font-family: var(--body-font);
}


.select-gallery:hover {
  border-color: var(--color-text);
}

.select-gallery:focus {
  outline: none;
  box-shadow: 0 0 5px var(--second-pink);
}

.select-gallery option[value="default"] {
  font-style: italic;
  color: #999;
}

</style>