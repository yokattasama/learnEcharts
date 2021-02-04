<template>
  <div class="home">
    <h1>首页</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  created() {
    console.log('fsa');
    this.getList();
  },
  methods: {
    getList() {
      this.axios.get('/api/list').then((res)=>{
        if(res.status == 200) {
          console.log(res.data)
        }
      })
    }
  },
};
</script>
