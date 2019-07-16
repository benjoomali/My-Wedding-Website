<template>
  <div id="app">
      <full-page ref="fullpage" :options="options" id="fullpage" >
          <div class="section">
              <h3>The Ceremony</h3>
              <p>St. Andrew Church in Pasadena</p>
              <p>311 N Raymond Ave Pasadena, CA</p>
              <p>12:30pm</p>
          </div>
          <div class="section">
                <h3>The Reception</h3>
                <p>Glen Arden Club in Glendale</p>
                <p>357 Arden Ave Glendale, CA</p>
                <p>4:30pm</p>
          </div>
          <div class="section">
              <h3>Our Story</h3>
              <p>Benjamin and Danielle first met in 2005 through a Catholic youth group called Couples For Christ Youth and Danielle was hosting a Halloween party at her house. Little did she know that her future husband was going to be attending this party. After many years of being friends, Danielle started her first year of college at Cal Poly Pomona while Benjamin stayed behind in Bakersfield to finish his senior year in high school. All the while, they were still one of each other's best friends throughout the year. Once Benjamin graduated high school and Danielle came back home for the summer, they began spending more time together over the summer. When Benjamin started college at University of California, Irvine in 2009, he asked Danielle's parents if he could court her. After many years of pursuing, Benjamin and Danielle continued to grow as friends, best friends and as partners. On January 27, 2018, Benjamin asked Danielle for her hand in marriage...and the rest is history!</p>
          </div>
          <div class="section">
              <h3>Hotel Accomodations</h3>
              <a href="https://www.hilton.com/en/hi/groups/personalized/B/BURHGHF-BDW-20191011/index.jhtml?WT.mc_id=POG" target="_blank">Click to Book</a>
          </div>
          <div class="section">
              <h3>Our Gift Registry</h3>
              <a href="https://www.zola.com/registry/danielleandbengetmarried" target="_blank">View our Zola Gift Registry</a>
              <p>We would love to give all our guests the opportunity to let their hair down and have a good time without having to worry about little eyes and ears, so we politely request <strong>no children.</strong></p>
          </div>
          <div class="section">
            <h3>Our Gallery</h3>

          </div>
      </full-page>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
export default {
  name: 'app',
  components: {
  'gallery': VueGallery
  },
  data () {
    return {
    options: {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      scrollBar: false,
      menu: '#menu',
      navigation: true,
      anchors: ['ceremony', 'reception', 'story', 'hotel', 'registry', 'gallery'],
      sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#a36b4f']
    },
    images: [
      {
        title: '400x400',
        description: '400 x 400 White',
        href: 'https://dummyimage.com/400/ffffff/000000',
      },
      {
        title: '400x400',
        description: '400 x 400 White',
        href: 'https://dummyimage.com/400/ffffff/000000',
      },
      {
        title: '400x400',
        description: '400 x 400 Black',
        href: 'https://dummyimage.com/400/000000/ffffff',
      },
      {
        title: '400x400',
        description: '400 x 400 Black',
        href: 'https://dummyimage.com/400/000000/ffffff',
      },
    ],
    index: null
    }
  },

}
</script>

<style>
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
</style>
