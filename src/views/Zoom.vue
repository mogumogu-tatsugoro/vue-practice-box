<template>
  <div>
    <Zoom />
  </div>
</template>

<script>
import Zoom from '../components/zoom/Child'

export default {
  components: {
    Zoom
  }
}
</script>

<style lang="scss" scoped>
// <div data-v-578694e6=""><div data-v-060ef1d0="" data-v-578694e6=""> child </div></div>
// => [data-v-578694e6] .child
/deep/ div {
  color: lightblue;
}
</style>
