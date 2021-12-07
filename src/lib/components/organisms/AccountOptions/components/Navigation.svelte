<script lang="ts" context="module">
  import { Settings, Upload } from '$lib/components/Icons';

  import NavLink from './NavLink.svelte';
</script>

<div
  class="shadow-md divide-y divide-gray-300 divide-solid absolute ml-5 top-11 border border-gray-200">
  <NavLink href="/upload"><Upload class="w-5 h-5" /> Upload</NavLink>
  <NavLink href="/uploads"><Upload class="w-5 h-5" /> Uploads</NavLink>
  <NavLink href="/profile"><Settings class="w-5 h-5" />Settings</NavLink>
</div>
