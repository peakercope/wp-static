<script>
  import {getPosts} from '@service/data';
  import PostsList from '@components/PostsList.svelte';

  async function _posts() {
    return await getPosts();
  }

  let posts = _posts();
</script>

<ul>
  <li><h1><a href="sfdsfsdfsdf">sfdsfsdfsdf</a></h1></li>
  <li><h1><a href="test-2">Test 2</a></h1></li>
  <li><h1><a href="test">Test</a></h1></li>
  <li><h1><a href="www">test</a></h1></li>
</ul>

<PostsList posts={posts}/>
