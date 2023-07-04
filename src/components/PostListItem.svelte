<script lang="ts">
  import type { Post } from '@wordpress/core-data';

  export let title: Post['title']['rendered'];
  export let slug: Post['slug'];
</script>

<li>
  <h1>
    <a href="{slug}">
      {title}
    </a>
  </h1>
</li>
