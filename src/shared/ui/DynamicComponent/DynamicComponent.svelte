<script>
    import { onMount } from 'svelte';
    import { JSDOM } from 'jsdom';

    export let tag;
    export let props;
    export let content;

    let Component;

    onMount(async () => {
      const dom = new JSDOM();
      global.window = dom.window;
      global.document = dom.window.document;

      const componentMap = {
        p: 'Paragraph',
        h1: 'Heading1',
        img: 'Image',
      };

      if (componentMap[tag]) {
        Component = await import(`./${componentMap[tag]}.svelte`);
      }
    });
</script>

{#if Component}
    <Component {props} {content} />
{:else}
    <p>Unknown component: {tag}</p>
{/if}
