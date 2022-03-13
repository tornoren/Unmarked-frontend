import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '7wu42r07',
    dataset: 'production',
    apiVersion: '2021-09-02',
    useCdn: false
});
const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}