import { client } from '$lib/sanity';
//*[_type == 'movie' && releaseYear >= 1979] 


const query = `*[_type=='poi' && location != null && slug != null && photo != null] {
    "lat": location.lat,
    "lng": location.lng,
    slug,
    title,
    description,
    photo,  }


  `;
export async function get() {
    const points = await client.fetch(query).catch((error) => console.log(error));
    console.log(points);
    return {
        status: 200,
        body: points,
    };
}