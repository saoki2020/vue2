<template>
<div class="container">
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="box">
        <div>
          <p>step1</p>
        </div>
        <div class="column">
          <div class="has-background-primary">
            <p class="has-text-centered">お客様の情報を入力してください</p>
          </div>
          <div>
            <form class="column">
              <div class="field">
              <label class="label">-性別-</label>
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="sex" v-model="sexData" value="男性">男性
                  </label>
                  <label class="radio">
                    <input type="radio" name="sex" v-model="sexData" value="女性">女性
                  </label>
                </div>
              </div>
              <div class="field">
                <label class="label">-生年月日-</label>
                <div class="control">
                <input type="date" class="input" v-model="birthDay">
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <router-link :to="{name:'myForm2'}"><button class="button is-primary">次へ進む</button></router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'myForm1',
  computed: {
    sexData: {
      get() {
        return this.$store.state.sex
      },
      set(value) {
        this.$store.commit('setSex',value)
      }
    },
    birthDay: {
      get() {
        return this.$store.state.birthday
      },
      set(value) {
        this.$store.commit('setBirthDay',value)
      }
    },
  }
}

</script>

<style scoped>
</style>
