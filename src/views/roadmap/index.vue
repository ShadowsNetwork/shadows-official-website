<template>
  <div class="features">
    <PowerFul />
    <Foot />
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import PowerFul from '@/components/roadmapView/main/index'
import Foot from '@/components/dashboardView/foot/index'

export default {
  name: 'Roadmap',
  components: { Foot, PowerFul },
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.features {
  width: 100%;
  background: #151519;
  position: relative;
  top: -100px;
}
</style>

