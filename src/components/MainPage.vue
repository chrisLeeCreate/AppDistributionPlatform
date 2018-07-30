<template>
  <div class="hello">
    <h2>android</h2>
    <ul>
      <li>
        <a
          href="https://fir.im/apps/5acc5a47ca87a82ce95c1d85"
          target="_blank"
        >
        历史版本
        </a>
      </li>
      <br>
      <li>
       <router-link id="download" to="/DownLoadApk" target="_blank">预览下载</router-link>
      </li>
    </ul>
    <h2>ios</h2>
    <ul>
      <li>
        <a
          href="https://fir.im/apps/5acc5a47ca87a82ce95c1d85"
          target="_blank"
        >
        历史版本
        </a>
      </li>
      <br>
      <li>
         <router-link id="download" to="/DownLoadApk" target="_blank">预览下载</router-link>
      </li>
    </ul>
   <h2>jenkins地址链接</h2>
    <ul>
      <li>
        <a
          href="http://10.4.3.124:8080/"
          target="_blank"
        >
        jenkins mac 0
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://10.4.2.65:8080/"
          target="_blank"
        >
        jenkins mac 1
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://10.4.1.226:8080/"
          target="_blank"
        >
        jenkins mac 2
        </a>
      </li>
      <br>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
  color: #13b4e6;
}
</style>
