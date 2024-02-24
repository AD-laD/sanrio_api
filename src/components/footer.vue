<template>
    <footer>
        @Sanrio API 2024
        <div class="gif__container">
            <img class ="footer__gif" src="../gif/little-twin-stars-kiki-and-lala.gif">
            <img class ="footer__gif" src="../gif/hello-kitty-sanrio-characters.gif">
            <img class ="footer__gif" src="../gif/gudetama.gif">
            <img class ="footer__gif" src="../gif/pompompurin-sanrio.gif">
            <img class ="footer__gif" src="../gif/hurra.gif">
            <img class ="footer__gif" src="../gif/cine.gif">
        </div> 
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style>
footer{
    background-color: var(--first-pink);
    color:#FFF;
    margin: 0;
    padding:0;
    width:100%;
    display: flex;

} 



.footer__gif{
    height: 100px;
    margin: auto;
}
</style>