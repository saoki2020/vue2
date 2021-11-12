<template>

<div class="container">
    <div class="column is-half is-offset-one-quarter">
        <div>
          <p>step1</p>
        </div>
        <div>
          <p>お客様の情報を入力してください</p>
        </div>
        <div class="container">
          <form class="box">
            <div class="field">
              <label class="label">-性別-</label>
              <label class="radio">
                <input type="radio" name="answer">
                男性
              </label>
              <label class="radio">
                <input type="radio" name="answer">
                女性
              </label>
            </div>

            <div class="field">
              <label class="label">-生年月日-</label>
              <div class="control">
                <input type="date">
              </div>
            </div>
          </form>
        </div>
      <button class="button is-primary">次へ進む</button>
    </div>
</div>

</template>

<script>
export default {
  name: 'Form',
}
</script>

<style scoped>

</style>
