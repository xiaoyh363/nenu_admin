<template>
  <div class="dashboard-container">
    <div class="dashboard-text">姓名: {{ name }}</div>
    <div class="dashboard-text">头像地址: {{ avatar }}</div>
    <div class="dashboard-text">令牌: {{ token }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'token'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
