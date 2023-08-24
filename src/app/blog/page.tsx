import { fetchApi } from '@/helpers/fecth-api'
import React from 'react'
import PageHeader from '../components/PageHeader';
import PageCardImage from '../components/PageCardImage';
import { Post } from '@/interfaces/post';

const getData = async (page = 1, pageSize = 2) => {
  const path = '/posts';
  const urlParamsObject = {
    populate: '*',
    sort: {
      createdAt: 'asc'
    },
    pagination: {
      page: page,
      pageSize: pageSize
    }
  }
  const { data, meta } = await fetchApi(path, urlParamsObject)
  /* const URL = getStrapiURL('/api/posts')
  const res = await fetch(URL, { next: { revalidate:0} } ) //con esto se cachea la info { next: { cache:'no-store'} }
  const data = await res.json() */
  return {
    data,
    pagination: meta.pagination
  }
}
const Blog = async () => {

  const { data } = await getData()



  return (
    <div>
      <PageHeader text='Blogs' />

      {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}

      <div className="grig gap-4">
        {data.map((post: Post) =>
          <PageCardImage key={post.id} post={post} />
        )}
      </div>



    </div>
  )
}

export default Blog