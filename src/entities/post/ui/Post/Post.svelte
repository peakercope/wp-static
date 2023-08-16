<script lang="ts">
  import type { PostType } from '../../model';

  export let title: PostType['title'];
  export let content: PostType['content'];
  export let embedded: PostType['_embedded'];
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
