<script setup>
import { saveInputData, getInputData, displayCookieContent } from '../services/tools/cookieUtils';
</script>

<template>
    <div class="last-search">
        
        <div class ="last-search-txt">last search : {{ lastSearchValue }}</div>
        <button v-if="lastSearchValue" @click="applySearch">Apply</button>
        
        <div>order by : {{ characSortTypeValue }}</div>
        <div>last specie : {{ characSpeValue }}</div>
        
    </div>

    <div class="gallery-options select__container">
        <input type="text" name="search" placeholder="Search..." @input="onSearchInput" ref="searchInput">
        
        <div class="label__and__input">
            <label for="charac-sort">Order by : </label>
            <select class ="select-gallery" :value="characSortType" id="charac-sort" @change="onCharacSortChange" ref="characSort">
                <option value="AZName">A-Z</option>
                <option value="ZAName">Z-A</option>
                <option value="12Date">Date</option>
            </select>
        </div>
       
        
        <div class="label__and__input">
        <label for="charac-specie">Species : </label>
        <select class ="select-gallery" :value="characSpecie" id="charac-specie" @change="onCharacSpecieChange" ref="characSpe">
            <option value="all">All</option>
            <option v-for="specie in species" :key="specie" :value="specie">{{ specie }}</option>
        </select>
        </div>
        <button v-if="search || (characSpecie !== 'all')|| (characBirthday !== '0')" @click="cleanSearch">Clean search</button>
        <div id="cookieContent1"></div>
        <div id="cookieContent2"></div>

    </div>
    <div class="slider__container">
            <input type="range" class="slider" id="myRange" list="values" step="8" :value="characBirthday" @change="onCharacBirthdayChange">
        <datalist id="values">
            <option value="0" label="all"></option>
            <option value="8" label="jan"></option>
            <option value="16" label="feb"></option>
            <option value="24" label="mar"></option>
            <option value="32" label="apr"></option>
            <option value="40" label="may"></option>
            <option value="48" label="jun"></option>
            <option value="56" label="jul"></option>
            <option value="64" label="aug"></option>
            <option value="72" label="sep"></option>
            <option value="80" label="oct"></option>
            <option value="88" label="nov"></option>
            <option value="96" label="dec"></option>
        </datalist>
        </div>
</template>

<script>
export default {
    name: 'FilterOptions',
    props: {
        triPar: String,
        search: String,
        characSortType: String,
        characSpecie: String,
        species: Array,
        characBirthday: String,
        
    },
    data(){
        return {
        lastSearchValue: '',
        characSortTypeValue: '',
        characSpeValue:'',
        }
    },
    updated() {
        this.displayCookies();
    },

    methods: {
        onSearchInput(event) {
            this.$emit('update:search', event.target.value);//envoie un evenement : mise à jour du champ search quand le champ de recherche est mis à jour
            // console.log('update:search');
            const inputValue = this.$refs.searchInput.value;
            saveInputData('searchInput', inputValue);
        },
        created() {
            // this.displayCookies();
            const searchInputValue = getInputData('searchInput');
            if (searchInputValue) {
                this.$refs.searchInput.value = searchInputValue;
            }
            const characSortTypeValue = getInputData('characSortType');
            if (characSortTypeValue) {
                this.$refs.characSort.value = characSortTypeValue;
            }
            if (characSpeValue) {
                this.$refs.characSort.value = characSpeValue;
            }
        },
        displayCookies() {
            this.lastSearchValue = getInputData('searchInput') || '';
            this.characSortTypeValue = getInputData('characSortType') || '';
            this.characSpeValue = getInputData('characSpe') || '';

        },
        cleanSearch() {
            this.$emit('clean-search');
            this.$refs.searchInput.value = '';
        },
        applySearch(){
            this.$emit('apply-last-search', this.lastSearchValue);
        },
        onCharacSortChange(event) {
            this.$emit('update:characSortType', event.target.value);
            saveInputData('characSortType', event.target.value);
        },
        onCharacSpecieChange(event) {
            this.$emit('update:characSpecie', event.target.value);
            saveInputData('characSpe', event.target.value);

        },
        onCharacBirthdayChange(event){
            this.$emit('update:characBirthday', event.target.value);
            console.log(event.target.value);
        }
    },
};
</script>


<style>

.select__container{
    display: flex;
    align-items: center;
    justify-content: center;
   gap:10px;
   padding-top: 10px;
    padding-bottom: 10px;
}
.slider__container{
    /* max-width: 500px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:10px;
    padding-left: 150px;
    padding-right:150px;
}
.select-gallery,
input
{
  width: 150px; 
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--second-pink);
  background-color: var(--first-pink);
  cursor: pointer;
  font-family: var(--body-font);
  color:var(--second-pink);
}

label{
    width:100px;
    padding: 10px;
    font-size: 16px;
    background-color: var(--second-pink);
    color:var(--first-pink);
}
.last-search{
    color:var(--first-pink);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.last-search-txt{
    background-color: var(--second-pink);
    margin-left: 10px;
    margin-right: 10px;
}

button{
    border-color:#FFF var(--second-pink) var(--second-pink) #FFF;
    border-style: solid;
    border-width: 1px;
    background-color:var(--first-pink);
    padding: 0.5rem 2rem;
    font-family: var(--body-font);
    color:var(--second-pink);
    align-items: center;
}

button:hover{
    background-color: var(--second-pink);
    color:var(--first-pink);
    box-shadow: -2px 0 4px -1px rgba(0, 0, 0, 0.2), inset -2px -2px 1px 0 #c76993;
    cursor:pointer;
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


.slider {
  -webkit-appearance: none; 
  appearance: none;
  width: 100%; 
  height: 25px; 
  background: var(--first-pink);
  outline: none; 
  opacity: 0.7; 
  -webkit-transition: .2s; 
  transition: opacity .2s;
  padding:none;
}

.slider:hover {
  opacity: 1;
}

.slider::-moz-range-thumb
{
-webkit-appearance: none; 
  appearance: none;
  width: 40px;
  height: 40px; 
  border: none;
  background: url('../img/cake.png');
  background-image: url('../img/cake.png');
  background-size: contain;
  cursor: pointer;
  z-index: 3;
}

.slider::-webkit-slider-thumb
{
-webkit-appearance: none; 
  appearance: none;
    width: 40px;
  height: 40px; 
  border: none;
  background: url('../img/cake.png');
  background-image: url('../img/cake.png');
  background-size: contain;
  cursor: pointer;
  z-index: 3;

}

.slider::-moz-range-thumb:hover{
    animation: rotateAnimation 2s infinite linear;
}

.slider::-webkit-slider-thumb:hover {
    -webkit-animation: rotateAnimation 2s infinite linear;
}


@keyframes rotateAnimation {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    25% {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
    50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    75% {
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}

datalist {
  display: flex;
  /* flex-direction: column; */
  flex-direction: row;
  justify-content: space-around;
  /* writing-mode: vertical-lr; */
  writing-mode: horizontal-tb;
  width: 100%;
  margin-right: 30px; 
}

@media only screen and (max-width: 767px) {
    .select__container{
        display: grid;
        gap:5px;
        justify-content: center;
    }
    .select-gallery,
    label
    {
        font-size:11px;
        max-width: 100px;
    }
    input{
        max-width:180px;
        font-size: 14px;
    }
    input[type="range"] {
        max-width: 100%;
    }

    .label__and__input{
        display: flex;
        gap : 0px;
    }
    .slider__container{
        padding-left:5px;
        padding-right: 5px;
        gap:5px;
    }
    datalist {
        flex-direction: column;
        justify-content:space-evenly;
        writing-mode: vertical-lr;
        margin:0;
        width:90%;
        margin-right:5px;
        font-size: 10px;
    }
}


</style>