<script setup>
  import MyComponent from '@/components/component.vue'
  import getSanrioData  from '@/services/api/sanrioAPI.js'
  import getSanrioDataLittleApi from '@/services/api/sanrioAPI2.js'
</script>

<template>
    <div class="component-gallery">
        <MyComponent v-for="character in characters" :key="character._id" :name="character.name" :appearance="character.appearance" :pictureUrl="character.img" />
    </div>
</template>

<script>
    export default {
        name: 'MyGallery',
        components: {
            MyComponent
        },
        data() {
            return {
                characters: []
            };
        },
        mounted() {
            this.fetchSanrioData();
        },
        methods: {
            async fetchSanrioData() {
                try {
                    const sanrioData = await getSanrioData();
                    this.characters = sanrioData;
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>
<style>
.component-gallery{
    /* display: flex;
    place-items: center; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /*3 colonnes*/
    padding: 0 2rem;
    max-width: 100%;
}
</style>