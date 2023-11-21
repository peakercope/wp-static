<script lang="ts">
  import { onMount } from 'svelte';
  import { DynamicComponent } from '@/shared';
  import { JSDOM } from 'jsdom';
  import type { PostType } from '../../model';

  export let title: PostType['title'];
  export let content: PostType['content'];
  export let embedded: PostType['_embedded'];

  const dom = new JSDOM(content?.rendered);
  let parsedHTML = Array.from(dom.window.document.body.children);
</script>

{#if embedded?.['wp:featuredmedia']?.['0']?.source_url}
  <img
    alt={title.rendered}
    title={title.rendered}
    src={embedded['wp:featuredmedia']['0'].source_url}
  />
{/if}

{#each parsedHTML as element}
  <DynamicComponent
    tag={element.tagName.toLowerCase()}
    props={Object.fromEntries(Array.from(element.attributes).map((attr) => [attr.name, attr.value]))}
    content={element.tagName.toLowerCase() === 'img' ? element.getAttribute('src') : element.innerHTML}
    element={element}
  />
{/each}
