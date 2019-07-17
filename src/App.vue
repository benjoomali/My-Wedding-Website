<template>
  <div id="app">
    <ul id="menu">
      <li class="no-show-mobile active" data-menuanchor="home"><a href="#home"> Wedding</a></li>
      <li data-menuanchor="ceremony"><a href="#ceremony">Ceremony</a></li>
      <li data-menuanchor="reception"><a href="#reception">Reception</a></li>
      <li class="no-show-mobile" data-menuanchor="story"><a href="#story">Our Story</a></li>
      <li data-menuanchor="hotel"><a href="#hotel">Hotel</a></li>
      <li data-menuanchor="registry"><a href="#registry">Gifts</a></li>
  </ul>
      <full-page ref="fullpage" :options="options" id="fullpage" >
          <div class="section" id="section0">
            <div class="main-content">
              <div class="overlay"></div>
              <h1 class="main-header">Danielle & Ben</h1>
              <h3>tie the knot</h3>
              <span class="date">on October 12, 2019</span>
              <hr>
              <Countdown deadline="October 12, 2019"></Countdown>
              <br>
              <p class="scroll">Scroll Down for More Details</p>
            </div>

          </div>
          <div class="section" id="section1">
            <div class="main-content bottom-left">
              <h1>The Ceremony</h1>
              <h3>St. Andrew Church in Pasadena</h3>
              <a href="https://goo.gl/maps/rJ8AXR9Cjr92" target="_blank" class="address"><font-awesome-icon icon="map-marked" /> 311 N Raymond Ave Pasadena, CA </a>
              <br><br>
              <a class="time" target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M2JrcDg4MGZzYmZ1dWNpcmw2ZjQyczBoYm0gNmQwdHNiM2E4dmxnbGIwdmhwcnM5cGpzYXNAZw&tmsrc=6d0tsb3a8vlglb0vhprs9pjsas%40group.calendar.google.com">
                <font-awesome-icon icon="clock" /> 12:30pm
              </a>
            </div>
          </div>
          <div class="section" id="section2">
            <div class="main-content top-right">

              <h1>The Reception</h1>
              <h3>Glen Arden Club in Glendale</h3>
              <a href="https://goo.gl/maps/KxuFDNDbDYn" class="address"><font-awesome-icon icon="map-marked" /> 357 Arden Ave Glendale, CA</a>
              <br><br>
              <a class="time" target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NGt1NTNtbWRkYWNsaHYwdWVrbG5ucWc0cmUgNmQwdHNiM2E4dmxnbGIwdmhwcnM5cGpzYXNAZw&tmsrc=6d0tsb3a8vlglb0vhprs9pjsas%40group.calendar.google.com">
                <font-awesome-icon icon="clock" /> 4:30pm
              </a>
            </div>
          </div>
          <div class="section" id="section3">
            <div class="main-content bottom-left">
              <h1>Our Story</h1>
              <div class="story-text">
                <p>Benjamin and Danielle first met in 2005 through a Catholic youth group called Couples For Christ Youth and Danielle was hosting a Halloween party at her house. Little did she know that her future husband was going to be attending this party. After many years of being friends, Danielle started her first year of college at Cal Poly Pomona while Benjamin stayed behind in Bakersfield to finish his senior year in high school. All the while, they were still one of each other's best friends throughout the year. Once Benjamin graduated high school and Danielle came back home for the summer, they began spending more time together over the summer. When Benjamin started college at University of California, Irvine in 2009, he asked Danielle's parents if he could court her. After many years of pursuing, Benjamin and Danielle continued to grow as friends, best friends and as partners. On January 27, 2018, Benjamin asked Danielle for her hand in marriage...and the rest is history!
                </p>
                <a class="btn" href="https://three16photography.com/disneyland-engagement-danielle-ben/?fbclid=IwAR0eH1KcJ771u0XBZitv4F-xjF8mJe7JWwzU1fmMReMvk5cymvOeqPEoHW0" target="_blank">How We Met</a>
              </div>

            </div>

          </div>
          <div class="section" id="section4">
            <div class="main-content">
              <h1>Hotel Accomodations</h1>
              <p class="description">We have a hotel block at the Hilton North in Glendale, CA. This hotel is a 2 minute walk from the venue. It is in a central location near popular places in the city like the Americana, the Glendale Galleria and Max's Chicken.</p>
              <a class="btn" href="https://www.hilton.com/en/hi/groups/personalized/B/BURHGHF-BDW-20191011/index.jhtml?WT.mc_id=POG" target="_blank" style="max-width: 300px; margin: 0 auto;"><font-awesome-icon icon="hotel" /> Click to Book</a>
            </div>

          </div>
          <div class="section" id="section5">
            <div class="main-content">
              <h1>Our Gift Registry</h1>
              <p class="description">
                In lieu of gifts, please visit our Zola gift registry. We'll be heading to Italy for our Honeymoon, so we appreciate all the love and support!
              </p>
              <a class="btn" href="https://www.zola.com/registry/danielleandbengetmarried" target="_blank" style="max-width: 300px; margin: 0 auto;">View our Gift Registry</a>
            </div>
          </div>
      </full-page>
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown';
export default {
  name: 'app',
  components: {
    Countdown
  },
  data () {
    return {
    options: {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      scrollBar: false,
      menu: '#menu',
      navigation: true,
      anchors: ['home','ceremony', 'reception', 'story', 'hotel', 'registry', 'gallery'],
      sectionsColor: ['#89a380', '#bf7858', '#3e5835', '#b3a59c', '#466061', '#a7aea6']
    },
    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
    @import "./styles/app.scss";

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
    }


    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    #fp-nav ul li a span, .fp-slidesNav ul li a span {
        background: #fff;
    }

</style>
