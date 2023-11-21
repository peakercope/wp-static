<script lang="ts">
  import type { PageType } from '@/entities/page';

  export let content: PageType['content'];
  export let elements: {
    id: number
    name: string
    attributes: any
    parent: any
  }[];
</script>

{#if content.rendered}
  <div>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html content.rendered}
  </div>
{/if}

{#each elements as element}
    <div>
        {element.name}
        {@html element.parent}
        <!--{element.attributes}-->
        <!--{element.parent}-->
    </div>
{/each}
