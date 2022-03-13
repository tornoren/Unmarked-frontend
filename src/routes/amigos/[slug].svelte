<script context='module'>
 //når siden bygges
  import {client} from '$lib/sanity';
  
  const query = `*[_type=='user'&&slug.current==$slug][0]
  {
    name, 
    email, 
    tagline,
    poster,
    "amigosCount": count(amigos),
    amigos[]{
     user->{name, email, slug},
     dateAdded
    }
  }
  `
  
  export async function load(props){
    let slug = props.page.params.slug
    let user = await client.fetch(query, {slug: slug})
    return {props: {user}}
  }
  
  </script>
  
  
  <script>
 export let user 
 import {urlFor} from '$lib/sanity'
 console.log(user)
  </script>
  
<h1>Amigos</h1>    


  <ul>
    <li>Name {user.name} </li>
    <li>Email {user.email}</li>
    <li>Tagline {user.tagline}</li>
    <li><img src={urlFor(user.poster).width(200).url()} /></li>
    <li>{user.amigosCount} amigos</li>
  </ul>

  

