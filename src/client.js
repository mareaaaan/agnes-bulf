import createClient from "@sanity/client";

const client = createClient({
  projectId: "yakutl1s",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

async function fetchPageData(pageSlug) {
  const query = `*[_type == 'page' && slug.current==$slug][0]`;
  var data = await client.fetch(query, { slug: pageSlug });
  console.log(data);
  return data;
}

export { fetchPageData };
