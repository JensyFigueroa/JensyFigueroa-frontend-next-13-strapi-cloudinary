import PageHeader from '@/components/PageHeader';
import { getStrapiURL } from '@/helpers/api-helper';
import { fetchApi } from '@/helpers/fecth-api';
import { formatDate } from '@/helpers/format-date-helper';
import { Post } from '@/interfaces/post';
import Image from 'next/image';
import { notFound } from 'next/navigation'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'


const getData = async (slug = '') => {
    const path = '/posts';
    const urlParamsObject = {
        populate: 'image',
        filters: {
            slug: slug
        },

    }
    const { data } = await fetchApi(path, urlParamsObject)
    return data[0]
}

interface Props {
    params: {
        slug: string
    }
}

const Slug = async ({ params }: Props) => {
    const { slug } = params
    const post: Post = await getData(slug)

    //Desestructurando el post
    const { title, description, body, createdAt, image } = post.attributes
    const { url, width, height } = image.data.attributes.formats.small

    if (!post) {
        notFound()
    }
    return (
        <div className='space-y-8'>
            {/* <pre>
                {JSON.stringify(post, null, 2)}
            </pre> */}

            <PageHeader text={title} />
            <p className="text-gray-500">
                {
                    formatDate(createdAt)
                }
            </p>
            <Image className='h-auto rounded-lg' src={url} alt={`imagen ${title}`} width={width} height={height} />
            <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-700 first-letter:mr-3 first-letter:float-left">
                {description}
            </p>
            {/* <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase">
                {body}
            </p>*/}

            {/* usamos un plugins de tailwinds y le pasaos esta className prose al MARKDOWN */}
            <div className="prose">
                <MDXRemote source={body} />
            </div>
        </div>
    )
}

export default Slug