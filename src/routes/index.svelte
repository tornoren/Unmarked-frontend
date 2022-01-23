<script context='module'>


export async function load({
  fetch
}){
const points = await fetch('/markers.json').then(res => res.json())
const pointsWithPopups = points.map(point => {
  const text = point.slug ? `<div class="popup">
                  <a href="/places/${point.slug.current}">${point.title}<img src="${point.photo}?w=1"/></a>
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

  <pre>
    {JSON.stringify(points,null,2)}
  </pre>
  
</div>

