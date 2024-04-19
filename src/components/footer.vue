<template>
    <footer>
        <div class="footer__container">
            @Sanrio API project 2024
            made by wapsad
        <div class="gif__container">
            <div class="gif__moving">
                <img class ="footer__gif" src="../gif/little-twin-stars-kiki-and-lala.gif">
                <img class ="footer__gif" src="../gif/hello-kitty-sanrio-characters.gif">
                <img class ="footer__gif" src="../gif/gudetama.gif">
                <img class ="footer__gif" src="../gif/pompompurin-sanrio.gif">
                <img class ="footer__gif" src="../gif/hurra.gif">
                <img class ="footer__gif" src="../gif/cine.gif">
                <img class ="footer__gif" src="../gif/picmix.com_10392564.gif">
                <img class ="footer__gif" src="../gif/picmix.com_1926379.gif">
                <img class ="footer__gif" src="../gif/picmix.com_2134606.gif">
                <img class ="footer__gif" src="../gif/picmix.com_2532746.gif">
            </div>
           
        </div> 

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
        color:var(--second-pink);
        margin: 0;
        padding:0;
        width:100%;
        display: flex;
        overflow: hidden;

    } 
    .footer__container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .gif__container{
        width: 100vw;                    
    }


    .gif__moving{
        display: inline-block;               
    padding-right: 80em;                  
    padding-left: 100%;                   
    white-space: nowrap;                 
    animation: defilement-rtl 15s infinite linear;
    width:100%;
    }
    .footer__gif{
        width:100px;
    }

    @keyframes defilement-rtl {
    0% {
        transform: translate3d(0,0,0);     
    }
    100% {
        transform: translate3d(-100%,0,0);  
    }
    }
</style>