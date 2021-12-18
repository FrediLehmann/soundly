<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Styleguide/Colors" />

<Story name="Colors">
  <h4>Primary</h4>
  <div class="color-box">
    <div class="box big-box" style="background-color: hsl(var(--primary));">
      --primary
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--primary-000));">
      --primary-000
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--primary-100));">
      --primary-100
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--primary-200));">
      --primary-200
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--primary-300));">
      --primary-300
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--primary-400));">
      --primary-400
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--primary-500));">
      --primary-500
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--primary-600));">
      --primary-600
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--primary-700));">
      --primary-700
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--primary-800));">
      --primary-800
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--primary-900));">
      --primary-900
    </div>
  </div>
  <h4>Secondary</h4>
  <div class="color-box">
    <div class="box big-box" style="background-color: hsl(var(--secondary));">
      --secondary
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--secondary-000));">
      --secondary-000
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--secondary-100));">
      --secondary-100
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--secondary-200));">
      --secondary-200
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--secondary-300));">
      --secondary-300
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--secondary-400));">
      --secondary-400
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--secondary-500));">
      --secondary-500
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--secondary-600));">
      --secondary-600
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--secondary-700));">
      --secondary-700
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--secondary-800));">
      --secondary-800
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--secondary-900));">
      --secondary-900
    </div>
  </div>
  <h4>Neutral</h4>
  <div class="color-box">
    <div class="box big-box" style="background-color: hsl(var(--neutral-900));">
      --neutral-900
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--neutral-000));">
      --neutral-000
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--neutral-100));">
      --neutral-100
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--neutral-200));">
      --neutral-200
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--neutral-300));">
      --neutral-300
    </div>
    <div
      class="box small-box black"
      style="background-color: hsl(var(--neutral-400));">
      --neutral-400
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--neutral-500));">
      --neutral-500
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--neutral-600));">
      --neutral-600
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--neutral-700));">
      --neutral-700
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--neutral-800));">
      --neutral-800
    </div>
    <div
      class="box small-box"
      style="background-color: hsl(var(--neutral-900));">
      --neutral-900
    </div>
  </div>
</Story>

<style>
  :root {
    --primary: 147, 69%, 55%;
    --primary-000: 154, 64%, 98%;
    --primary-100: 147, 69%, 95%;
    --primary-200: 147, 70%, 88%;
    --primary-300: 147, 69%, 76%;
    --primary-400: 147, 69%, 64%;
    --primary-500: 147, 69%, 51%;
    --primary-600: 147, 69%, 38%;
    --primary-700: 147, 69%, 25%;
    --primary-800: 147, 70%, 18%;
    --primary-900: 147, 69%, 10%;

    --secondary: 353, 56%, 45%;
    --secondary-000: 350, 60%, 98%;
    --secondary-100: 351, 54%, 95%;
    --secondary-200: 353, 57%, 88%;
    --secondary-300: 353, 56%, 76%;
    --secondary-400: 353, 56%, 64%;
    --secondary-500: 353, 56%, 51%;
    --secondary-600: 353, 56%, 38%;
    --secondary-700: 353, 56%, 25%;
    --secondary-800: 353, 57%, 18%;
    --secondary-900: 352, 57%, 10%;

    --neutral-000: 0, 0%, 99%;
    --neutral-100: 120, 7%, 97%;
    --neutral-200: 180, 2%, 92%;
    --neutral-300: 150, 3%, 87%;
    --neutral-400: 144, 4%, 77%;
    --neutral-500: 146, 4%, 64%;
    --neutral-600: 145, 7%, 53%;
    --neutral-700: 147, 10%, 42%;
    --neutral-800: 146, 20%, 25%;
    --neutral-900: 148, 32%, 8%;
  }

  .color-box {
    display: grid;
    gap: 12px;
    grid-template-columns: 2fr repeat(5, 1fr);
  }

  .box {
    border-radius: 4px;
    padding: 12px;

    color: white;
    font-size: large;
    font-weight: 700;
  }

  .big-box {
    grid-row: 2 span;
  }

  .small-box {
    width: 150px;
    height: 50px;
  }

  .black {
    color: black;
  }
</style>
