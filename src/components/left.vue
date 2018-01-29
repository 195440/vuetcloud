<style lang="less" scoped>
.v-left {
  position: relative;
  color: #fff;
  width: 320px;
  background: #27313c;
  overflow: auto;
  padding: 5px;
  ul {
    padding: 0;
    li {
      list-style-type: none;
      .v-notice-link {
        background: #396484;
        padding: 0 15px;
        line-height: 24px;
      }
      a {
        font-size: 0.8rem;
        display: block;
        width: 100%;
        border-bottom: solid 1px #343434;
        span {
          display: block;
          padding: 5px;
        }
        .v-notice-title {
          font-size: 0.9rem;
          white-space: pre;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .v-notice-circle {
          width: 10px;
          height: 10px;
          background: #ad2828;
          display: inline-block;
          padding: 0;
          margin-right: 5px;
          border-radius: 10px;
        }
        .v-notice-date {
          margin-right: 5px;
          color: #888;
          display: inline-block;
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
<template>
	<div class="v-left">
		<ul>
      <li v-for="(list, key, index) in noticeDatas" :key="key">
        <div class="v-notice-link">{{ key.trim() }}</div>
         <a @click="noticeOpen(list1)" :title="list1.notice" v-for="(list1, key1) in list" :key="key1">
            <span class="v-notice-title"><span class="v-notice-date"><span class="v-notice-circle"></span>21日 00時</span>{{ list1.notice }}</span>
         </a>
      </li>
    </ul>
	</div>
</template>
<script>
export default {
  data() {
    return {
      noticeDatas: []
    };
  },
  methods: {
    noticeList() {
      $.get(restpath + '/notice').done(data => (this.noticeDatas = _.groupBy(data, 'appNM')));
    },
    noticeOpen(list1){
      alert(list1);
    }
  },
  mounted() {
    // 组件创建完后
    this.noticeList();
  }
};
</script>