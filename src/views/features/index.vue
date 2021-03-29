<template>
  <div class="features">
    <FeaturesTop />
    <PowerFul />
    <Foot />
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import FeaturesTop from '@/components/featuresView/top/index'
import PowerFul from '@/components/featuresView/powerFul/index'
import Foot from '@/components/dashboardView/foot/index'

export default {
  name: 'Features',
  components: { Foot, PowerFul, FeaturesTop },
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

