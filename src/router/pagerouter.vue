<script setup>
//  import { ref } from 'vue';
  import CharacterPage from '@/views/CharacterPage.vue'
  import MyHeader from '@/components/header.vue'
  import Footer from '@/components/footer.vue'
</script>

<template>
    <div>
        <MyHeader/>
    </div>
    <div>
        <CharacterPage/>
    </div>
   
    <div class="footer">
        <Footer/>
    </div>
</template>

<script>

    export default {
        name: 'PageRouter',
    }
</script>