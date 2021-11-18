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
                <label class="label">現在、生命保険に加入されていますか？</label>
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="question1" @click="showFlag1 = true">はい
                  </label>
                  <label class="radio">
                    <input type="radio" name="question1" @click="showFlag1 = true">いいえ
                  </label>
                </div>
              </div>

              <transition name="fade">
                <div class="field" v-show="showFlag1">
                  <label class="label">現在入院中ですか？または、最近3か月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？</label>
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="question2" @click="showFlag2 = true">はい
                    </label>
                    <label class="radio">
                      <input type="radio" name="question2" @click="showFlag2 = true">いいえ
                    </label>
                  </div>
                </div>
              </transition>

              <transition name="fade">
                <div class="field" v-show="showFlag2">
                  <label class="label">過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</label>
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="question3">はい
                    </label>
                    <label class="radio">
                      <input type="radio" name="question3">いいえ
                    </label>
                  </div>
                </div>
              </transition>

            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="has-text-centered">
    <router-link :to="{name:'myForm1'}"><button class="button is-primary">前へ戻る</button></router-link>
    <router-link :to="{name:'myForm3'}"><button class="button is-primary">次へ進む</button></router-link>
  </div>

</div>
</template>

<script>
export default {
  name: 'myForm2',
  data: function() {
    return {
      showFlag1:false,
      showFlag2:false
    }
  },
}
</script>

<style scoped>
</style>
