<script>
  import { onMount } from 'svelte';
  import Paragraph from '../Tags/Paragraph.svelte';

  export let tag;
  export let props;
  export let content;
  // export let element
  // console.log(element);

  const componentMap = {
    p: Paragraph,
  };

  let Component = componentMap[tag];


  let container;

  onMount(() => {
    const child = document.createElement('span');
    child.textContent = 'child';
    container.appendChild(child);
  });
</script>

{#if Component}
  <Component {props} {content} />
{:else}
  {@html container}
{/if}
