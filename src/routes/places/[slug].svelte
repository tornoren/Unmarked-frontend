<script context='module'>

import {client} from '$lib/sanity';
import GallerySwipe from '$lib/Gallery_swipe.svelte';


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
  $: ({title,description,photo,gallery,lat,lng}=poi)

  import {urlFor} from '$lib/sanity';
  import Map from '$lib/Map.svelte';
 
</script>







<div>
  <GallerySwipe images={gallery}/>
</div>



<h1 class="text-2xl my-5 font-bold">{title}</h1>


<p>{description}</p>

<div>
  <Map points={[{lat,lng}]} zoom={14}/>
</div>

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
