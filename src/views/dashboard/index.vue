<template>
  <div class="dashboard">
    <Top />
    <div class="dashboard-content" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { WOW } from 'wowjs'
import Top from '@/components/top/top'
export default {
  name: 'Dashboard',
  components: { Top },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() { new WOW().init() }
}
</script>

<style scoped>
.dashboard {
  position: relative;
  top: -100px;
}
.dashboard-content {
  width: 100%;
  height: 1000px;
  background: radial-gradient(102.5% 144.43% at 85.56% 76.77%, rgba(40, 1, 27, 0.7) 0%, rgba(24, 57, 80, 0.7) 100%);
}
</style>
