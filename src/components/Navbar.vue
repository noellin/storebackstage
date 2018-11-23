<template>
    <div>
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a href="#" class="navbar-left"><img src="../assets/img/logo.png" style="width:180px;"></a>
    <!-- ../顯示 -->
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <strong><a class="nav-link" href="#" @click.prevent="signout">登出</a></strong>
        </li>
      </ul>
    </nav>
    </div>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    signout () {
      const vm = this
      const url = `${process.env.APIPATH}/logout`
      this.$http.post(url).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          vm.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
.navbar{
 line-height: 2
}
</style>
