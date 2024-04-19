<template>
    <header>
        <div class = "header">
            <img class = "logo__img" src="@/gif/3dgifmaker95367.gif" alt="logo">
            <img class = "logo__sparkles__1" src="@/gif/picmix.com_1397143.gif" alt="logo">
            <img class = "logo__sparkles__2" src="@/gif/picmix.com_1397143.gif" alt="logo">
            <img class = "logo__sparkles__3" src="@/gif/picmix.com_1397143.gif" alt="logo">
            <img class = "logo__sparkles__4" src="@/gif/picmix.com_1397143.gif" alt="logo">
            <a href="/.."></a>
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
}
.header{
    margin-left: auto;
    margin-right: auto;
    padding:2rem;
}
.header a {
    display:block;
    position: absolute;
    top:0;
    left:0;
    height:200px;
    width:100%;
   
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


@media only screen and (max-width: 767px) {
    header, .header a {
        height:100px;
    }
    .logo__img{
        max-width: 100%; 
        display: block;
        margin-left: auto;
        margin-right: auto; 
    }

    .logo__sparkles__1,
    .logo__sparkles__2,
    .logo__sparkles__3,
    .logo__sparkles__4 {
        height:50px;
    }

}



</style>