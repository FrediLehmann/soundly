<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import HeaderLinkCombo from './HeaderLinkCombo.svelte';
</script>

<Meta
  title="Molecules/HeaderLinkCombo"
  component={HeaderLinkCombo}
  argTypes={{
    href: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'HREF link used for the link part of the component.'
        }
      }
    },
    headingText: {
      control: { type: 'slot' },
      table: {
        type: {
          summary: 'Named slot to pass content for the heading part.'
        }
      }
    },
    linkText: {
      control: { type: 'slot' },
      table: {
        type: {
          summary: 'Named slot to pass content for the link part.'
        }
      }
    }
  }} />

<Story name="HeaderLinkCombo">
  <HeaderLinkCombo href="#">
    <svelte:fragment slot="headingText">Heading text</svelte:fragment>
    <svelte:fragment slot="linkText">Link text</svelte:fragment>
  </HeaderLinkCombo>
</Story>
