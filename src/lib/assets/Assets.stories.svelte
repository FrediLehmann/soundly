<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import logo_full_black from './logo_full_black.png';
  import logo_full_white from './logo_full_white.png';
  import logo_full_primary from './logo_full_primary.png';

  import logo_letter_black from './logo_letter_black.png';
  import logo_letter_white from './logo_letter_white.png';
  import logo_letter_primary from './logo_letter_primary.png';
</script>

<Meta title="Styleguide/Assets" />

<Story name="Full Logo">
  <div>
    <h3>Black</h3>
    <h4>logo_full_black.png</h4>
    <img src={logo_full_black} alt="Logo Full Black" />
  </div>
  <div style="background-color: black; color: white;">
    <h3>White</h3>
    <h4>logo_full_white.png</h4>
    <img src={logo_full_white} alt="Logo Full White" />
  </div>
  <div>
    <h3>Primary</h3>
    <h4>logo_full_primary.png</h4>
    <img src={logo_full_primary} alt="Logo Full Primary" />
  </div>
</Story>

<Story name="Letter Logo">
  <div>
    <h3>Black</h3>
    <h4>logo_letter_black.png</h4>
    <img src={logo_letter_black} alt="Logo Letter Black" />
  </div>
  <div style="background-color: black; color: white;">
    <h3>White</h3>
    <h4>logo_letter_white.png</h4>
    <img src={logo_letter_white} alt="Logo Letter White" />
  </div>
  <div>
    <h3>Primary</h3>
    <h4>logo_letter_primary.png</h4>
    <img src={logo_letter_primary} alt="Logo Letter Primary" />
  </div>
</Story>

<style>
  div {
    padding: 12px;
  }
</style>
