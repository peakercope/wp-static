<script lang="ts">
  import type { Post } from '@wordpress/core-data';

  export let title: Post['title']['rendered'];
  export let slug: Post['slug'];
</script>

<li class="title">
  <a href={slug}>{title}</a>
</li>

<style lang="scss">
  .title {
    font-size: 1.5rem;
    margin: 0 0 0.5rem;
    list-style-type: none;
  }
</style>
