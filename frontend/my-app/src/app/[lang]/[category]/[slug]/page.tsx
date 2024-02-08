import { fetchAPI } from '@/app/[lang]/utils/fetch-api';
import Post from '@/app/[lang]/components/Post';
import type { Metadata } from 'next';

async function getPostBySlug(slug: string, lang: string) {  //aangepastes
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        lang,  //aangepastes
        populate: {
            cover: { fields: ['url'] },
            authorsBio: { populate: '*' },
            category: { fields: ['name'] },
            blocks: { populate: '*' },
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

// async function getPostBySlug(slug: string, lang: string) {
//     const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//     const path = `/articles`;
//     const urlParamsObject = {
//         filters: { slug },
//         lang, // Include language parameter
//         populate: {
//             cover: { fields: ['url'] },
//             authorsBio: { populate: '*' },
//             category: { fields: ['name'] },
//             blocks: { populate: '*' },
//         },
//     };
//     const options = { headers: { Authorization: `Bearer ${token}` } };
//     const response = await fetchAPI(path, urlParamsObject, options);
//     return response;
// }

async function getMetaData(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: { seo: { populate: '*' } },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response.data;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const meta = await getMetaData(params.slug);
    const metadata = meta[0].attributes.seo;

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
    };
}

export default async function PostRoute({ params }: { params: { slug: string, lang: string} }) {  //aangepastes
    const { slug, lang } = params;  //aangepastes
    const data = await getPostBySlug(slug, lang);  //aangepastes
    if (data.data.length === 0) return <h2>no post found</h2>;
    return <Post data={data.data[0]} />;
}


export async function generateStaticParams() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const articleResponse = await fetchAPI(
        path,
        {
            populate: ['category'],
        },
        options
    );

    return articleResponse.data.map(
        (article: {
            attributes: {
                slug: string;
                category: {
                    slug: string;
                };
            };
        }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
    );
}