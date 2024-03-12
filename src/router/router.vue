<script setup>
 import { ref } from 'vue';
  import MyGallery from '@/components/gallery.vue'
  import MyHeader from '@/components/header.vue'
  import Footer from '@/components/footer.vue'
//   import getSanrioData  from '@/services/api/sanrioAPI.js'

</script>

<template>
    <div>
        <MyHeader/>
    </div>
    <div class="container">
        <div class="gallery">
            <MyGallery/>
        </div>
    </div>
    

    <div class="footer">
        <Footer/>
    </div>
</template>

<script>

    export default {
        name: 'Router',
    }
</script>

<style>
    .container{
        width:100%;
        background-color: var(--first-pink);
        background-image: url('../img/fond sanrio2.gif');
    }
</style>