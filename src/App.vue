<template>
  <div id="app">
      <ul id="menu">
          <li data-menuanchor="page1" class="active"><a href="#page1">Section 1</a></li>
          <li data-menuanchor="page2"><a href="#page2">Section 2</a></li>
          <li data-menuanchor="page3"><a href="#page3">Section 3</a></li>
      </ul>

      <full-page ref="fullpage" :options="options" id="fullpage" >
          <div class="section">
              <h3>Section 1</h3>
          </div>
          <div class="section">
              <div class="slide">
                  <h3>Slide 2.1</h3>
              </div>
              <div class="slide">
                  <h3>Slide 2.2</h3>
              </div>
              <div class="slide">
                  <h3>Slide 2.3</h3>
              </div>
          </div>
          <div class="section">
              <h3>Section 3</h3>
          </div>
      </full-page>
  </div>
</template>

<script>

export default {
  name: 'app',
  options: {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    scrollBar: false,
    menu: '#menu',
    navigation: true,
    anchors: ['ceremony', 'reception', 'story','hotel','registry'],
    sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
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
