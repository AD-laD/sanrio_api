

<template>
    <!-- <div class="select__container">
        <select class="select-gallery" v-model="triPar" @change="trierPersonnages">
            <option value="default">Default</option>
            <option value="nom">Name</option>
            <option value="date">Date</option>
        </select>
    </div> -->
    <div class="gallery-options select__container">
        <input type="text" name="search" placeholder="Search..." @input="onSearchInput">
      
        <label for="charac-sort">Order by : </label>
        <select class ="select-gallery" :value="characSortType" id="charac-sort" @change="onCharacSortChange">
            <option value="AZName">A-Z</option>
            <option value="ZAName">Z-A</option>
            <option value="12Date">Date</option>
            <!-- <option value="12Birthday">Birthday</option> -->
        </select>
        <label for="charac-specie">Species : </label>
        <select class ="select-gallery" :value="characSpecie" id="charac-specie" @change="onCharacSpecieChange">
            <option value="all">All</option>
            <option v-for="specie in species" :key="specie" :value="specie">{{ specie }}</option>
        </select>
        <button v-if="search || (characSpecie !== 'all')" @click="cleanSearch">Clean search</button>

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
    },
    methods: {
        onSearchInput(event) {
            this.$emit('update:search', event.target.value);//envoie un evenement : mise à jour du champ search quand le champ de recherche est mis à jour
            console.log('update:search');
        },
        cleanSearch() {
            this.$emit('clean-search');
        },
        onCharacSortChange(event) {
            this.$emit('update:characSortType', event.target.value);
        },
        onCharacSpecieChange(event) {
            this.$emit('update:characSpecie', event.target.value);
        },
    },
};
</script>


<style>

.select__container{
    display: flex;
    align-items: center;
    justify-content: center;
   gap:10px;
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

button{
    border-color:#FFF var(--second-pink) var(--second-pink) #FFF;
    border-style: solid;
    border-width: 1px;
    background-color:var(--first-pink);
    padding: 0.5rem 2rem;
    font-family: var(--body-font);
    color:var(--second-pink);
}

button:hover{
    background-color: var(--second-pink);
    color:var(--first-pink);
    box-shadow: -2px 0 4px -1px rgba(0, 0, 0, 0.2), inset -2px -2px 1px 0 #c76993
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