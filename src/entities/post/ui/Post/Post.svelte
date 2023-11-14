<script lang="ts">
  import { DynamicComponent } from '@/shared';
  import { JSDOM } from 'jsdom';
  import type { PostType } from '../../model';

  export let title: PostType['title'];
  export let content: PostType['content'];
  export let embedded: PostType['_embedded'];

  let parsedHTML;

  // Анализируем HTML
  const dom = new JSDOM(content.rendered);
  parsedHTML = Array.from(dom.window.document.body.children);

</script>

{#if embedded?.['wp:featuredmedia']?.['0']?.source_url}
  <img
    alt={title.rendered}
    title={title.rendered}
    src={embedded['wp:featuredmedia']['0'].source_url}
  />
{/if}

{#if content.rendered}
  <div>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html content.rendered}
  </div>
{/if}

{#each parsedHTML as element}
    <DynamicComponent
            tag={element.tagName.toLowerCase()}
            props={Object.fromEntries(Array.from(element.attributes).map((attr) => [attr.name, attr.value]))}
            content={element.tagName.toLowerCase() === 'img' ? element.getAttribute('src') : element.innerHTML}
    />
{/each}
