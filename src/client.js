import createClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "yakutl1s",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

const imageBuilder = imageUrlBuilder(client);

async function fetchPageData(pageSlug) {
  const query = `*[_type == 'page' && slug.current==$slug][0]`;
  var data = await client.fetch(query, { slug: pageSlug });
  console.log(data);
  return data;
}

async function fetchObjectData(objectType) {
  const query = `*[_type == '${objectType}'] | order(_createdAt asc)`;
  var data = await client.fetch(query);
  return data;
}

async function fetchWorkShopsData() {
  const query = `*[_type == 'workshop'] | order(_createdAt asc) {
    slug, title, image, content
  }`;
  var data = await client.fetch(query);
  return data;
}

async function fetchWorkShopData(workshopSlug) {
  const query = `*[_type == 'workshop' && slug.current==$slug][0]`;
  var data = await client.fetch(query, { slug: workshopSlug });
  return data;
}
export {
  fetchPageData,
  fetchObjectData,
  fetchWorkShopsData,
  fetchWorkShopData,
  imageBuilder,
};
