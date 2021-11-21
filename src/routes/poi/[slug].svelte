<script context='module'>

import client from '$lib/sanity';

export async function load(props){
const {
  page
}=props
console.log(props)
const query = `*[_type=='poi'&&slug.current==$slug] [0] {
    title,
    description,
  	slug,
    gallery[]{
      asset->
      {
        description,
        source, url
      }
    },
    "lat": location.lat,
    "lng": location.lng,
    "popup": {
      "text": title,
      
    },}`
const poi = await client.fetch(query,{slug:page.params.slug})

return {
  props: {
    poi: poi,
  }
}
};

</script>
<script>
  export let poi
  $: ({title,description,gallery}=poi)

</script>




<h1>{title}</h1>
<p>{description}</p>



<ul>
	{#each gallery as image}
   <li>  <img src={image.asset.url+"?w=600"} alt={image.asset.description||"No alttext available"}>
   </li>
  {/each}
</ul>


<pre>
  {JSON.stringify(gallery,null,2)}
</pre>


<style>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
}

pre {
  margin-top: 200px;
  white-space: pre-wrap;
}
</style>
