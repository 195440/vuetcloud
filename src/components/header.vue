<style lang="less" scoped>
.v-header {
  position: relative;
  line-height: 38px;
  color: #fff;
  box-shadow: 0 1px 5px -2px #000;
  display: flex;
  text-align: center;
  span {
    flex: 1;
    .t-user {
      float: right;
      .t-user-photo {
        width: 30px;
        height: 30px;
        background-size: 100%;
        border-radius: 100px;
        margin: 5px 5px 0;
        box-shadow: 0 1px 5px -1px #000;
        display: block;
      }
      .t-user-photo:after {
        content: none;
      }
    }
  }
}
</style>
<template>
	<header class="v-header">
    <span></span>
		<span>Vue tCloud</span>
    <span>
      <div class="t-user">
 
        <div class="dropdown">
          <a :style="'background-image:url(http://t3cloud.jp/userPhoto/'+user+'.jpg)'" class="t-user-photo dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" >
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="logout()">退出</a>
          </div>
        </div>
      </div>
    </span>
	</header>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { SET_STORE } from 'store/info';

export default {
  methods: {
    ...mapActions([SET_STORE]),
    logout() {
      this.SET_STORE({ routePath: ['/'] });
      this.SET_STORE({ oldRoutePath: '/' });
      this.$router.replace({
        path: '/login'
      });
    }
  },
  computed: mapState({ user: state => state.info.id })
};
</script>