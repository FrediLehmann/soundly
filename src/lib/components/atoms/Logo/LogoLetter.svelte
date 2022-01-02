<script lang="ts" context="module">
  import { goto } from '$app/navigation';

  import LogoLetterBlackPNG from './assets/logo_letter_black.png';
  import LogoLetterBlackWEBP from './assets/logo_letter_black.webp';
  import LogoLetterWhitePNG from './assets/logo_letter_white.png';
  import LogoLetterWhiteWEBP from './assets/logo_letter_white.webp';
  import LogoLetterPrimaryPNG from './assets/logo_letter_primary.png';
  import LogoLetterPrimaryWEBP from './assets/logo_letter_primary.webp';

  const images = {
    png: {
      black: LogoLetterBlackPNG,
      white: LogoLetterWhitePNG,
      primary: LogoLetterPrimaryPNG
    },
    webp: {
      black: LogoLetterBlackWEBP,
      white: LogoLetterWhiteWEBP,
      primary: LogoLetterPrimaryWEBP
    }
  };
</script>

<script lang="ts">
  export let color: 'black' | 'white' | 'primary' = 'primary';
  export let size: 'small' | 'medium' | 'big' = 'small';
  export let href: string;
</script>

<picture data-size={size} on:click={() => goto(href)}>
  <source srcset={images.webp[color]} />
  <img alt="Noiceless Logo" src={images.png[color]} />
</picture>

<style>
  img {
    aspect-ratio: 1/1;
  }

  picture:hover {
    cursor: pointer;
  }

  picture[data-size='small'] > img {
    height: 1.25rem;
  }

  picture[data-size='medium'] > img {
    height: 2.5rem;
  }

  picture[data-size='big'] > img {
    height: 4rem;
  }
</style>
