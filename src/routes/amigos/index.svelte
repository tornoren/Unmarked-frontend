<script context='module'>
import client from '$lib/sanity';

const query = `*[_type=='user'&&slug.current==$slug][0]
{
  name, 
  email, 
  amigos[]{
   user->{name, email, slug},
   dateAdded
  }
}
`

export async function load(){
  let user = await client.fetch(query, {slug: "torstein-norendal"})
  return {props: {user}}
}

</script>


<script>
export let user = {amigos: []}
</script>

<h1>Your amigos, {user.name}</h1>
<ul>
  {#each user.amigos as amigo}
  <li><a href="/amigos/{amigo.user.slug.current}">{amigo.user.name}</a>({amigo.dateAdded})</li>

  {/each}
</ul> 

