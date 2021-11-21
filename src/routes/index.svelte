<script context='module'>


export async function load({
  fetch
}){
const points = await fetch('/markers.json').then(res => res.json())
const pointsWithPopups = points.map(point => {
  const text = `<div class="popup">
                  <a href="/poi/${point.slug.current}">${point.title}<img src="${point.photo}"/></a>
                </div>
`
  return {
    ...point, 
    popup: {
      text,
      isOpen: true,
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
      "text": "<a href='/poi/" 
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

