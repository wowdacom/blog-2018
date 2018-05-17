<template>
  <div>
    <h1>Principle 1: Easing</h1>
    <div class="container">
      <div class="square"></div>
      <div class="theme-title">
        <h3>UX IN MOTION PRINCIPLE</h3>
        <h1>{{ ease.title }}</h1>
        <h3>UXINMOTION.NET</h3>
      </div>
    </div>
    <h1>Principle 2: Offset & Delay</h1>
    <div class="container">
      <div class="stripes"></div>
      <div class="stripes"></div>
      <div class="stripes stripes-delay"></div>
      <div class="theme-title">
        <h3>UX IN MOTION PRINCIPLE</h3>
        <h1>{{ offset.title }}</h1>
        <h3>UXINMOTION.NET</h3>
      </div>
    </div>
    <h1>Principle 3: Parenting</h1>
    <div class="container">
      <div class="rectangle parent"></div>
      <div class="rectangle child"></div>
      <div class="theme-title">
        <h3>UX IN MOTION PRINCIPLE</h3>
        <h1>{{ parenting.title }}</h1>
        <h3>UXINMOTION.NET</h3>
      </div>
    </div>
    <h1>Principle 4: Transformation</h1>
    <div class="container">
      <div class="cirtangle"></div>
      <div class="theme-title">
        <h3>UX IN MOTION PRINCIPLE</h3>
        <h1>{{ transformation.title }}</h1>
        <h3>UXINMOTION.NET</h3>
      </div>
    </div>
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
      },
      ease: {
        title: "Easing"
      },
      offset: {
        title: "Offset & Delay"
      },
      parenting: {
        title: "Parenting"
      },
      transformation: {
        title: "Transformation"
      }
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="stylus" scoped>
  h1
    font-weight bolder
  h2
    color: $accentColor
    background-color: red
  .container
    position relative
    margin 10px
    height 500px
    background-color black
    overflow hidden
    .theme-title
      text-align center
      position absolute
      bottom 10%
      left 50%
      transform translate(-50%)
      h1
        margin 10px
      h3
        margin 0px
      
    .square
      position relative
      top 20%
      width 200px
      height 200px
      background #dcdcdc
      margin 0 auto
      animation easing 1.5s infinite
      transition-timing-function cubic-bezier(0.64, 0.57, 0.67, 1.53)

    .stripes
      position relative
      top 20%
      width 350px
      height 40px
      margin 0 auto
      margin-top 20px
      background #dcdcdc
      animation offset 2s infinite
      transition-timing-function cubic-bezier(0.64, 0.57, 0.67, 1.53)
      &.stripes-delay
        animation-delay 0.15s
    
    .rectangle
      position relative
      top 10%
      width 200px
      height 100px
      margin 0 auto
      margin-top 20px
      &.parent
        background #aaaaaa
        animation parenting-parent 2s infinite
        transform-origin: bottom 
      &.child
        background #dcdcdc
        animation parenting-child 2s infinite

    .cirtangle
      position relative
      top 20%
      width 400px
      height 200px
      margin 0 auto
      background #dcdcdc
      animation trans-cirtangle 2s infinite
      transform-origin: bottom

  @keyframes easing {
    0% {
      transform translate(-200%)
    }
    45% {
      transform translate(0)
    }
    55% {
      transform translate(0)
    }
    100% {
      transform translate(200%)
    }
  }

  @keyframes offset {
    0% {
      transform translate(-500%)
    }
    45% {
      transform translate(0)
    }
    55% {
      transform translate(0)
    }
    100% {
      transform translate(500%)
    }
  }

  @keyframes parenting-parent {
    0% {
      transform translate(-70%) scale(0.1)
    }
    45% {
      transform translate(70%)
    }
    55% {
      transform translate(70%)
    }
    100% {
      transform translate(-70%) scale(0.1)
    }
  }

  @keyframes parenting-child {
    0% {
      transform translate(-70%)
    }
    45% {
      transform translate(70%)
    }
    55% {
      transform translate(70%)
    }
    100% {
      transform translate(-70%)
    }
  }

  @keyframes trans-cirtangle {
    45% {
      transform scale(0.25, 0.5)
      border-radius 50%
    }
    55% {
      transform scale(0.25, 0.5)
      border-radius 50%
    }
  }

</style>
