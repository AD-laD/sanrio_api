<script setup>
 import { ref } from 'vue';
  import MyGallery from '@/components/gallery.vue'
  import MyHeader from '@/components/header.vue'
//   import getSanrioData  from '@/services/api/sanrioAPI.js'

</script>

<template>
    <div>
        <MyHeader/>
    </div>

    <div class="gallery">
        <MyGallery/>
    </div>
</template>

<script>

    export default {
        name: 'Routeur',
    }
</script>