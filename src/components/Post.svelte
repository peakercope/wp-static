<script lang="ts">
  import type { Post } from '@wordpress/core-data';

  export let title: Post['title'];
  export let content: Post['content'];
  // export let _embedded;

  let a =1
</script>

<!--
{#if _embedded?.['wp:featuredmedia']?.['0']?.source_url}
  <img
    alt={title.rendered}
    title={title.rendered}
    src={_embedded['wp:featuredmedia']['0'].source_url}
  />
{/if}
 -->
<span>{title}</span>
{#if content.rendered}
  <div>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html content.rendered}
  </div>
{/if}
