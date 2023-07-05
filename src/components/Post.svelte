<script lang="ts">
  import type { Post } from '@ts/post';

  export let title: Post['title'];
  export let content: Post['content'];
  export let embedded: Post['_embedded'];
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
