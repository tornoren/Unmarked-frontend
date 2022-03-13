<script context='module'>


export async function load({
  fetch
}){
const points = await fetch('/markers.json').then(res => res.json())
const pointsWithPopups = points.map(point => {
  const text = point.slug ? `<div class="popup">
                  <a href="/places/${point.slug.current}">${point.title}<br><br><img src="${point.photo}?w=264"/></a>
                </div>` : `No slug today`
  return {
    ...point, 
    popup: {
      text,
      isOpen: false,
    }    
  }
})
return {

  props: {
    points: pointsWithPopups
  }
}
};

</script>

<script>
  import Map from '$lib/Map.svelte'
  import { urlFor } from '$lib/sanity';
  export let points = []
  
  
  /*
  "popup": {
      "text": "<a href='/place/" 
      + slug.current + "'>"
      + title + "</a>",
      
      slug,
      image,
      
    },



    */
</script>

<div>
  <Map points={points} />
 
 {#each points as point}
 
 
  <a href='/places/{point.slug.current}'>
  <article class="hover:ease-in duration-500 hover:shadow-xl md:h-48 flex flex-col md:flex-row bg-slate-100 rounded-md m-12">
    <div class="md:w-1/3">
     <img class="w-full object-cover h-full md:rounded-tr-none rounded-t-md md:rounded-l-md" src={urlFor(point.photo).width(600).url()}>
  </div>
  <div class="p-4">
      <h1 class="text-lg font-bold">{point.title}</h1>
        <p>{point.description}</p>
    </div>
  
  </article>
</a>
{/each}
  <pre>
    {JSON.stringify(points,null,2)}
  </pre>
  
</div>

