<template>
    <div id="CharacterPage">
        <h1>{{ name }}</h1>
        <p>testo</p>
        <img class ="img" v-bind:src="pictureUrl">
        <p>{{ appearance }}</p>
        <p> {{ pictureUrl }}</p>
        <p class = "year">{{debutYear}}</p>
        <p>{{creator}}</p>
        <p>{{universe}}</p>
        <p>{{residence}}</p>
        <p>{{gender}}</p>
        <p>{{specie}}</p>
        <p>{{birthday}}</p>
    </div>
</template>

<script>
    export default {
        name: 'CharacterPage',
        props: {
            name: {type: String, required: true},
            appearance: String,
            pictureUrl: {type: String, default:"https://s.com/default.png"}
        }
    }
</script>