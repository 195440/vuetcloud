<style lang="less" scoped>
.login {
  width: 320px;
  height: 440px;
  top: 50%;
  left: 50%;
  margin: -220px 0 0 -160px;
  background: #ffffff;
  position: absolute;
  text-align: center;
  padding: 30px 40px;
  box-shadow: 0 2px 5px -1px #000;
  border-radius: 4px;
  img {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .form-control {
    background-color: #eee;
  }

  button {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 30px;
  }
}
</style>
<template>
	<div>
		<form class="login" v-on:submit.prevent="submit">
			<img src="./login.png" />
			<div class="input-group mb-3">
				<input type="text" class="form-control" placeholder="社員/AS番号" v-model="form.id" >
			</div>
			<div class="input-group mb-3">
				<input type="password" class="form-control" placeholder="パスワード" v-model="form.name" >
			</div>
			<button class="btn btn-secondary" >ログイン</button>
		</form>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { SET_STORE } from 'store/info';

export default {
  data() {
    return {
      form: {
        id: '10073306',
        name: ''
      }
    };
  },
  methods: {
    ...mapActions([SET_STORE]),
    submit() {
      let _this = this;
      if (!this.form.id) {
        return;
      }
      $.post(restpath + '/login', {
        id: this.form.id
      }).done(function(data) {
        if (data.success) {
          _this.SET_STORE(_this.form);
          _this.$router.replace({
            path: _this.oldRoutePath === 'login' ? '/' : _this.oldRoutePath
          });
        }
      });
    }
  },
  computed: mapState({
    oldRoutePath: state => state.info.oldRoutePath
  })
};
</script>