<script context='module'>

import {client} from '$lib/sanity';

export async function load(props){
const {
  params
}=props
console.log(props)
const query = `*[_type=='poi'&&slug.current==$slug] [0] {
    title,
    description,
  	slug,
    photo,
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
const poi = await client.fetch(query,{slug:params.slug})

return {
  props: {
    poi: poi,
  }
}
};

</script>
<script>
  export let poi = {}
  $: ({title,description,photo,gallery}=poi)

  import {urlFor} from '$lib/sanity';
</script>




<h1>{title}</h1>
<p>{description}</p>
<img src="{urlFor(photo).width(640).url()}" alt="{title}"/>


<ul>
    
  {#if gallery != null}
  
    {#each gallery as image}
    <li>  <img src={image.asset.url+"?w=600"} alt={image.asset.description||"No alttext available"}>
    </li>
    {/each}
  {:else}
  <li>No images available</li>
  {/if}
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
