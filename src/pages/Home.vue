<template>
  <div>
    <div>ssss</div>
  </div>
</template>

<script>

  export default {
    name: "Home",
    data() {
      return {

      }
    },
    methods: {

    },
    mounted(){
      this.$axios.get('http://127.0.0.1:8080/api/video/1').then((response) => {
        console.log(response)
      })
    }

  }
</script>

<style scoped>

</style>