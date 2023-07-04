<script lang="ts">
  import PostListItem from '@components/PostListItem.svelte';
  import type { Post } from '@wordpress/core-data';

  export let posts: Post[] = [];
</script>

<ul>
  {#each posts as { title, slug }}
    <PostListItem
      title={title.rendered}
      slug={slug}
    />
  {/each}
</ul>
