<template>
    <header>
        <div class = "header">
            <!-- <h1>Sanrio</h1> -->
            <!-- <img class = "header__img" src="@/img/Sanrio-Logo.jpg" alt="logo"> -->
            <img class = "logo__img" src="@/gif/3dgifmaker95367.gif" alt="logo">
            <img class = "logo__sparkles__1" src="@/gif/picmix.com_1397143.gif" alt="logo">
            <img class = "logo__sparkles__2" src="@/gif/picmix.com_1397143.gif" alt="logo">
            <img class = "logo__sparkles__3" src="@/gif/picmix.com_1397143.gif" alt="logo">
            <img class = "logo__sparkles__4" src="@/gif/picmix.com_1397143.gif" alt="logo">
            <!-- <img class="header__img" src="@/img/main-sanrio-characters.jpg"> -->
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
    height:200px;
    /* box-shadow: 0px 4px 4px 0px rgba(253, 36, 188, 0.5) ; */
}
.header{
    margin-left: auto;
    margin-right: auto;
    padding:2rem;
}
.header__img{
    /* width:200px; */
    height:100px;
    /* position:absolute;
    left:400px; */
}

.logo__img{
   max-height:700px;
}

.logo__sparkles__1{
    position:absolute;
    top:20px;
    left:10%;
}

.logo__sparkles__2{
    position:absolute;
    top:30px;
    left:20%;
}

.logo__sparkles__3{
    position:absolute;
    top:20px;
    left:90%;
}

.logo__sparkles__4{
    position:absolute;
    top:30px;
    left:80%;
}



</style>