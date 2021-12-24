<nav>
  <ul>
    <li>
      <a href="/upload" sveltekit:prefetch>Upload</a>
    </li>
    <li>
      <a href="/about" sveltekit:prefetch>About</a>
    </li>
    <li>
      <a href="/api" sveltekit:prefetch>API</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    margin-inline-start: auto;
    background: hsla(var(--primary))
      linear-gradient(
        20deg,
        hsla(var(--primary)) 20%,
        hsla(var(--secondary)) 80%
      );
  }

  ul {
    list-style: none;
    display: flex;

    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    border-right: 4px hsla(var(--neutral-000)) solid;
  }

  li::before {
    content: '';
    position: absolute;
    background-color: hsla(var(--neutral-000));
    width: 100%;
    height: calc(100% - 5px);
    z-index: 1;
  }

  li:hover::before {
    opacity: 0.6;
  }

  a {
    position: relative;
    text-decoration: none;
    color: hsla(var(--neutral-900));
    display: inline-block;
    padding: 0.5rem 1rem;
    z-index: 2;
  }
</style>
