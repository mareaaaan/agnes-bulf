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
  const query = `*[_type == 'page' && slug.current==$slug][0]{
    title,
    pageBuilder,
    hierarchy[] ->
  }`;
  var data = await client.fetch(query, { slug: pageSlug });
  return data;
}

async function fetchHomePageData() {
  const pageSlug = "povestea-mea";
  const query = `*[_type == 'page' && slug.current==$slug][0]{
   pageBuilder[]{
    _type != 'feedback' => @,
    _type == 'feedback' => @{
      _type,
      feedback[] -> {
        "title": Product[0] -> title,
        text
      }
    }
   }
  }`;
  var data = await client.fetch(query, { slug: pageSlug });
  return data;
}

async function fetchWorkShopData(workshopSlug) {
  const query = `*[_type == 'workshop' && slug.current==$slug][0]`;
  var data = await client.fetch(query, { slug: workshopSlug });
  return data;
}
export { fetchPageData, fetchWorkShopData, fetchHomePageData, imageBuilder };
