<script>
  import PostListItem from '@components/PostListItem.svelte';

  export let posts;
</script>

<ul>
  {#each posts as { title, slug }}
    <PostListItem
      title={title.rendered}
      slug={slug}
    />
  {/each}
</ul>
