import client from '$lib/sanity';
const query = `*[_type=='poi'] {
    "lat": location.lat,
    "lng": location.lng,
    slug,
    title,
    "photo": photo.asset->url
  }

  `;
export async function get() {
  const points = await client.fetch(query).catch((error) => console.log(error));
  console.log(points);
  return {
    status: 200,
    body: points,
  };
}
