<script lang="ts" context="module">
  import { goto } from '$app/navigation';

  import LogoFullBlackPNG from './assets/logo_full_black.png';
  import LogoFullBlackWEBP from './assets/logo_full_black.webp';
  import LogoFullWhitePNG from './assets/logo_full_white.png';
  import LogoFullWhiteWEBP from './assets/logo_full_white.webp';
  import LogoFullPrimaryPNG from './assets/logo_full_primary.png';
  import LogoFullPrimaryWEBP from './assets/logo_full_primary.webp';

  const images = {
    png: {
      black: LogoFullBlackPNG,
      white: LogoFullWhitePNG,
      primary: LogoFullPrimaryPNG
    },
    webp: {
      black: LogoFullBlackWEBP,
      white: LogoFullWhiteWEBP,
      primary: LogoFullPrimaryWEBP
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
    aspect-ratio: 8.5/1;
  }

  picture:hover {
    cursor: pointer;
  }

  picture[data-size='small'] > img {
    width: 8rem;
  }

  picture[data-size='medium'] > img {
    width: 12rem;
  }

  picture[data-size='big'] > img {
    width: 15rem;
  }
</style>
