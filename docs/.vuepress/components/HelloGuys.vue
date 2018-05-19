<template>
  <div>
    <h1>Principle 1: Easing</h1>
    <div class="container">
      <div class="easing square"></div>
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
    <h1>Principle 5: Value change</h1>
    <div class="container">
      <div class="value-change">
        {{ animatedNumber }}
      </div>
      <div class="theme-title">
        <h3>UX IN MOTION PRINCIPLE</h3>
        <h1>{{ valueChange.title }}</h1>
        <h3>UXINMOTION.NET</h3>
      </div>
    </div>
    <h1>Principle 6: Masking</h1>
    <div class="container">    
      <div class="face">
        <div class="mask"></div>
      </div>
      <div class="theme-title">
        <h3>UX IN MOTION PRINCIPLE</h3>
        <h1>{{ masking.title }}</h1>
        <h3>UXINMOTION.NET</h3>
      </div>
    </div>
    <h1>Principle 7: Overlay</h1>
    <div class="container">    
      <div class="square">
        <div class="square overlay"></div>
      </div>
      <div class="theme-title">
        <h3>UX IN MOTION PRINCIPLE</h3>
        <h1>{{ overlay.title }}</h1>
        <h3>UXINMOTION.NET</h3>
      </div>
    </div>
    <h1>Principle 8: Cloning</h1>
    <div class="container">
      <div class="circle-wrapper">
        <div class="circle circle-left">
        </div>
        <div class="circle circle-right">
        </div>
      </div>       
      <div class="theme-title">
        <h3>UX IN MOTION PRINCIPLE</h3>
        <h1>{{ cloning.title }}</h1>
        <h3>UXINMOTION.NET</h3>
      </div>
    </div>
    <div>
      因為使用模糊加銳化效果，有顏色看起來會比較小顆，因為由外往內模糊的關係，
      另外模糊的部分也可能因為糊化又銳化後變色
    </div>
    <h1>Principle 8: Cloning</h1>
    <div class="container">
      <div class="circle-wrapper">
        <div class="circle circle-left">
        </div>
        <div class="circle circle-right">
        </div>
      </div>       
      <div class="theme-title">
        <h3>UX IN MOTION PRINCIPLE</h3>
        <h1>{{ cloning.title }}</h1>
        <h3>UXINMOTION.NET</h3>
      </div>
    </div>
    <button @click="count.like++">{{'like: ' + count.like }}</button>
    <button @click="count.hate++">{{'hate: ' + count.hate }}</button>
  </div>
</template>

<script>
import { TweenLite } from "gsap";

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
      },
      valueChange: {
        title: "Value change",
        number: 0,
        tweenedNumber: 0
      },
      masking: {
        title: "Masking"
      },
      overlay: {
        title: "Overlay"
      },
      cloning: {
        title: "Cloning"
      }
    }
  },
  mounted: function () {
    setInterval(()=>{
      this.switchValue()
    }, 1500)
  },
  computed: {
    animatedNumber: function () {
      return this.valueChange.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    'valueChange.number': function(newValue) {
      TweenLite.to(this.$data.valueChange, 0.5, { tweenedNumber: newValue });
    }
  },
  methods: {
    switchValue() {
      if(this.valueChange.number === 0) {
        this.valueChange.number = 10
      } else {
        this.valueChange.number = 0
      }
    }
  },
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
      &.easing
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

    .value-change
      position relative
      top 10%
      width 400px
      height 200px
      margin 0 auto
      font-size 250px
      text-align center
      color white

    .face
      position relative
      top 20%
      width 400px
      height 200px
      margin 0 auto
      margin-top 20px
      background #aaaaaa
      .mask
        position absolute
        top 0
        width 100%
        height 100%
        background #dcdcdc
        animation trans-cirtangle 2s infinite

    .overlay
      position absolute
      top 0
      left 0
      background #aaaaaa
      animation overlay-off 2s infinite

    .circle-wrapper
      width 80%
      height 200px
      background black
      position absolute
      top 20%
      left 50%
      transform translateX(-50%)
      filter contrast(20)
      .circle
        width 100px
        height 100px
        border-radius 51%
        background #dcdcdc
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        
        &.circle-left     
          animation cloning-left 2.5s ease-in infinite
          filter blur(10px)        
        &.circle-right
          animation cloning-right 2.5s ease-in infinite
          filter blur(10px)
        
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

  @keyframes overlay-off {
    45% {
      transform translateX(70%)
    }
    55% {
      transform translateX(70%)
    }
  }

  @keyframes cloning-right {
    0% {
      left 80%
    }
    50% {
      left 50%
    }	
    100% {
      left 80%
    }
  }

  @keyframes cloning-left {
    0% {
      left 20%
    }
    50% {
      left 50%
    }	
    100% {
      left 20%
    }
  }
</style>
