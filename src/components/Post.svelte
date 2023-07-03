<script>
  export let title;
  export let content;
  export let _embedded;
</script>

{#if _embedded?.['wp:featuredmedia']?.['0']?.source_url}
  <img
    alt={title.rendered}
    title={title.rendered}
    src={_embedded['wp:featuredmedia']['0'].source_url}
  />
{/if}


{#if content?.rendered}
  <div>
    {@html content.rendered}
  </div>
{/if}

