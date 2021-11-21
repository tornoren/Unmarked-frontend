import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: '7wu42r07',
  dataset: 'production',
  apiVersion: '2021-09-02',
  useCdn: false
});

export default client;
