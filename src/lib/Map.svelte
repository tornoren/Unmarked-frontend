<script>
  import Map from '@anoram/leaflet-svelte'
  export let points
  let id = 'norgeskart_bakgrunn';
  let newestPointPosition = points.length - 1;
  let options = points.length > 0 ?   
  {
    center: [points[0].lat,points[0].lng],
    mapID: "map",
    zoom: 10,
    markers: points,    
    tilelayers: [
        {          
        url: `https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=${id}&zoom={z}&x={x}&y={y}`,
        attribution: `<a href="http://www.kartverket.no/">Kartverket</a>`,
      },
/*
       {
          url: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>`,
        }
  */  
    ],

  } : {}


</script>

<div class="map">
  <Map {options}/>


</div>

<style>
  .map {
    height: 600px;
    width: auto;
  }
</style>

