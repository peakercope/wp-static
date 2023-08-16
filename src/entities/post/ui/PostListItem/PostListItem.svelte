<script lang="ts">
  import type { PostType } from '../../model';

  export let title: PostType['title']['rendered'];
  export let slug: PostType['slug'];
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
