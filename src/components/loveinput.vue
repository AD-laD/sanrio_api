<template>
    <div id="loveinput">
        <input type="text" name="nameinput" placeholder="Name..." @keypress.enter="onEnter">
    </div>

</template>
  
<script>
    export default {
        name: 'LoveInput',
        props: {
            nameinput: String,
        },
        data() {
            return {
                nameinput: ''
            };
        },
       methods: {
            onEnter(event) {
                this.nameinput = event.target.value;
                localStorage.setItem('nameinput', this.nameinput);
                this.$emit('nameinput', this.nameinput);
                console.log(this.nameinput);
                
            },
        }
    };
</script>

  