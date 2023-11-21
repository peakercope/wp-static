<script lang="ts">
  import { PageType } from "@/entities/page";

  export let content: PageType['content'];
  export let elements = [];

  console.log(elements);
</script>

{#if content.rendered}
  <div>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html content.rendered}
  </div>
{/if}
