import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import { getCategoryBlogs } from '../actions/categories'
import { API, DOMAIN, APP_NAME, FP_APP_ID} from '../../config'
import renderHTML from 'react-render-html'
import moment from 'moment'

const Category = ({blog}) => {
    // const head = () => {
    //     return(
    //         <Head>
    //             <title>{blog.title} | {APP_NAME}</title>
    //             <meta name="description" content={blog.metaDesc}/>
    //             <link rel="canonical" href={`${DOMAIN}/blogs/${blog.slug}`} />
    //             <meta property="og:title" content={`${blog.title} || ${APP_NAME}`} />
    //             <meta property="og:description" content={blog.metaDesc} />
    //             <meta property="og:type" content="website" />
    //             <meta property="og:url" content={`${DOMAIN}/blogs/${blog.slug}`} />
    //             <meta property="og:site_name" content={`${APP_NAME}`} />

    //             <meta property="og:image" content={`${API}/posts/photo/${blog.slug}`} />
    //             <meta property="og:image:secure_url" content={`${API}/posts/photo/${blog.slug}`} />
    //             <meta property="og:image:type" content="image/jpg" />
    //             <meta property="fb:app_id" content={FP_APP_ID} />
    //         </Head>
    //     )
    // }

    return(
        <>
            <Layout>
                ma
            </Layout>
        </>
    )
}
// Category.getInitialProps =({ query }) => {
// }
export default Category