<template>
  <div>
    <button @click="count.like++">{{'like: ' + count.like }}</button>
    <button @click="count.hate++">{{'hate: ' + count.hate }}</button>
  </div>
</template>

<script>
export default {
  name: 'enter',
  data: function () {
    return {
      count: {
        like: 0,
        hate: 0
      }
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="stylus" scoped>
  h2
    color: $accentColor
    background-color: red

</style>
