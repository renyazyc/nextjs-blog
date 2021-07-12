/*
 * @Author: renya.zyc
 * @Date: 2021-07-09 16:42:42
 * @LastEditors: renya.zyc
 * @LastEditTime: 2021-07-12 17:41:07
 * @FilePath: /nextjs-blog/pages/posts/[id].js
 * @Description: 
 */
import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  console.log('getStaticPaths');
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  // const postData = getPostData(params.id)
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}