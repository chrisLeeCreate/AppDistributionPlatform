<template>
  <div class="hello">
    <!-- <h1>{{ list[0] }}</h1> -->
    <img src="http://10.4.2.65/Android/Apk/Archive/6.5.5/99-Debug/downloadApk.png" >
    <ul>
      <li>
        <a
          href="http://10.4.2.65/Android/Apk/Archive/6.5.5/99-Debug/xesapp.apk"
          target="_blank"
        >
          链接下载
        </a>
      </li>
    </ul>
   
  </div>
</template>

<script>
import api from '../constant/api'
import request from "../request"
export default {
  name: 'DownLoadApk',
  data () {
    return {
      msg: '扫码二维码下载或者点击链接',
      list: []
    }
  },
  mounted(){
    this.getRepository();
  },
  methods: {
  getRepository(){
    let data = {'dataType': "jsonp"}
    request.BingGet("https://gamma-xesapi.speiyou.cn/client-dev/",data)
      .then(response => {
         this.list = response.data;
      })
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
  color: #42b983;
}
</style>
