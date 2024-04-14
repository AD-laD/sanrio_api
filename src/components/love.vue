<script setup>
    import LoveInput from '@/components/loveinput.vue';
</script>

<template>
    <div class="love_container">
        <div id="loveMatch">
            <!-- <input type="text" name="nameinput" placeholder="Name..." @keypress.enter="onEnter"> -->
            <LoveInput @nameinput="handleNameInput"/>
            <p class="love-res title">Discover your love score !! </p>
            <h2 class="love-percent">{{ percentage }} .00%</h2>
            <p class ="love-between">between {{ fname }} & {{ sname }}</p>
            <!-- <div class="card__text"> -->
                
            <!-- </div> -->
            
        </div>
        <p class="love-res">Love tip :{{ result }}</p>
    </div>
</template>

<script>
    export default {
        name: 'loveMatch',
        props: {
            percentage: {
                type: String,
                default: '??'
            },
            fname: String,
            sname: String,
            result: String,
        },
        components: {
            LoveInput,
        },
        methods:{
            handleNameInput(value) {
                this.$emit('nameinput', value);
            }
        },
    }
</script>

<style>
#loveMatch{
    /* background-image: url(../img/love_bg.png);
    background-size: contain; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:100%;
    height:250px;
    border: solid 40px transparent;
    border-image: url('@/img/love_bg.png') 20% round;
    border-image-width:60px;
    box-shadow: 0px 4px 4px 0px rgba(239, 182, 222, 0.5);
}

#loveMatch > p {
    margin:0;
}


.love-res{
    line-height: 20px;
    color:var(--second-pink);
    font-size: 18px;
}

.love-between{
    font-size: 10px;
}

.love-percent{
    line-height:normal;
}

.love_container{
    background-color: var(--first-pink);
    width:fit-content;
}
</style>