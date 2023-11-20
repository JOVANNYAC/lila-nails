import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
    const post = await getCollection('tips');
    return rss ({
        title: 'lilanails.art',
        description: 'Manicurista Marvin Velasco',
        site: context.site,
        items: postMessage.map((post) => ({
            ...post.data,
            link: `/posts/${post.slug}/`,
        })),
    });
}