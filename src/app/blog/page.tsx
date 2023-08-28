import { fetchApi } from '@/helpers/fecth-api'
import React from 'react'
import PageHeader from '../components/PageHeader';
import PageCardImage from '../components/PageCardImage';
import { Post } from '@/interfaces/post';
import PagePagination from '../components/PagePagination';

const getData = async (page = 1, pageSize = 3) => {
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

interface Props {
  searchParams: {
    page?: string
  } 
}
const Blog = async ({ searchParams }: Props) => {
  // console.log(searchParams)
  const {page} = searchParams
  let pageNumber = page ? parseInt(page) : 1

  // se valida que lo que pase el usuario por query no sean letras o simbolos
  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1
  }

  const { data, pagination } = await getData(pageNumber)



  return (
    <div className='space-y-8'>
      <PageHeader text='Blogs' />

      <PagePagination pagination={pagination} />

      {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}

      <div className="grid gap-4 justify-center">
        {data.map((post: Post) =>
          <PageCardImage key={post.id} post={post} />
        )}
      </div>



    </div>
  )
}

export default Blog