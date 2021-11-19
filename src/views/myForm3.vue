<template>
<div class="container">
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="box">
        <div>
          <p>step2</p>
        </div>
        <div class="column">
          <div class="has-background-primary">
            <p class="has-text-centered">以下にお答えください</p>
          </div>
          <div>
            <form class="column">
              <div class="field">
                <label class="label">-ご相談内容-</label>
                <div class="control">
                  <input type="textarea" class="textarea" v-model="consult">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="has-text-centered">
    <router-link :to="{name:'myForm2'}"><button class="button is-primary">前へ戻る</button></router-link>
    <router-link :to="{name:'Confirm'}"><button class="button is-primary">次へ進む</button></router-link>
  </div>
</div>

</template>

<script>
export default {
  name: 'myForm3',
  computed: {
    consult: {
      get() {
        return this.$store.state.consultation
      },
      set(value) {
        this.$store.commit('setConsult',value)
      }
    }
  }
}
</script>

<style scoped>
textarea {
	resize: none;
	width: 300px;
	height: 200px;
	}
</style>
