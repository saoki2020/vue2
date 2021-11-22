<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column">
        <div class="box">
          <div>
            <p>step4</p>
          </div>
          <div class="column">
            <div class="has-background-primary">
              <p class="has-text-centered">以下の内容をご確認ください</p>
            </div>
          </div>
          <div class="field">
            <p class="label">-性別-</p>
            <p> {{$store.getters.getSex}} </p>
          </div>
          <div class="field">
            <p class="label">-生年月日-</p>
            <p> {{$store.getters.getBirthDay}} </p>
          </div>
          <div class="field">
            <p class="label">-現在、生命保険に加入されていますか？-</p>
            <p> {{$store.getters.getQuestion1}} </p>
          </div>
          <div class="field">
            <p class="label">-現在入院中ですか？または、最近3か月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-</p>
            <p> {{$store.getters.getQuestion2}} </p>
          </div>
          <div class="field">
            <p class="label">-過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-</p>
            <p> {{$store.getters.getQuestion3}} </p>
          </div>
          <div class="field">
            <p class="label">-ご相談内容-</p>
            <p> {{$store.getters.getConsult}} </p>
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <router-link :to="{name:'myForm3'}"><button class="button is-primary">前へ戻る</button></router-link>
      <button class="button is-primary">送信</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Confirm',
}
</script>

<style scoped>
</style>
