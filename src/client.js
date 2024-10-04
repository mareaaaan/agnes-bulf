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
    'content': content.content[] ,
    hierarchy[] ->
  }`;
  var data = await client.fetch(query, { slug: pageSlug });
  return data;
}

async function fetchHomePageData() {
  const pageSlug = "povestea-mea";
  const query = `
  *[_type == 'page' && slug.current==$slug][0] {
    title,
    'content': content.content[] {
      !(_type in ['feedbackList', 'videoList']) => @,
      _type == 'feedbackList' => @ {
        _type,
        'Feedback': Feedback[] -> {
          "title": Product[0] -> title,
          text
        }
      },
      _type == 'videoList' => @ {
        _type,
       'Video': Video[] -> 
      }
    }
  }
  `;
  var data = await client.fetch(query, { slug: pageSlug });
  return data;
}

async function fetchResursePageData() {
  const pageSlug = "resurse";
  const query = `
  *[_type == 'page' && slug.current==$slug][0] {
    title,
    'content': content.content[] {
      !(_type in ['feedbackList', 'videoList']) => @,
      _type == 'feedbackList' => @ {
        _type,
        'Feedback': Feedback[] -> {
          "title": Product[0] -> title,
          text
        }
      },
      _type == 'videoList' => @ {
        _type,
       'Video': Video[] -> 
      }
    }
  }
  `;
  var data = await client.fetch(query, { slug: pageSlug });
  return data;
}

async function fetchWorkShopData(workshopSlug) {
  const query = `*[_type == 'workshop' && slug.current==$slug][0]`;
  var data = await client.fetch(query, { slug: workshopSlug });
  return data;
}
export {
  fetchPageData,
  fetchWorkShopData,
  fetchHomePageData,
  fetchResursePageData,
  imageBuilder,
};
