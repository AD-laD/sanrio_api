<template>
    <header>
        <div class = "header">
            <!-- <h1>Sanrio</h1> -->
            <img class = "header__img" src="@/img/Sanrio-Logo.jpg" alt="logo">
        </div>
    </header>
    
</template>
   


<script>
    export default {
        name: 'MyHeader',
    }
</script>

<style>
header{
    display:flex;
    align-items: center;
    text-align: center;

}
.header{
    margin-left: auto;
    margin-right: auto;
}
.header__img{
    width:100px;
}


</style>