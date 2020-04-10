import Head from 'next/head'
import Link from 'next/link'
import renderHTML from 'react-render-html'
import moment from 'moment'
import {API} from '../../config'
const Card = ({ blog }) => {
    const showBlogCategories = () => {
        return blog.categories && blog.categories.map((c,i) => {
            return(
                <Link key={i} href={`/categories/${c.slug}`}>
                    <a className="mr-1 ml-1 mt-3 mb-3">{c.name}</a>
                </Link>
            )
        })
    }
    const showBlogTags = () => {
        return blog.tags && blog.tags.map((t,i)=> {
            return(
                <Link key={i} href={`/categories/${t.slug}`}>
                    <a className="mr-1 ml-1 mt-3 mb-3">{c.name}</a>
                </Link>
            )
        })
    }
    return (
        <div className="blog-item">
                <Link href={`/${blog.slug}`}>
                    <a>
                        <header className="blog-item__header">
                            <div className="blog-item__featured">
                                <img src={`${API}/posts/photo/${blog.slug}`} alt="" className="blog-item__featured-image"/>
                            </div>
                        </header>    
                    </a>
                </Link>

            <section className="blog-item__section">
                <p className="blog-item__info">
                    Posted by {blog.author.name} | Published at {" "}
                    {moment(blog.updateAt).fromNow()} | {showBlogCategories()}
                </p>
            </section>
            <section className="blog-item__section">
                <Link href={`/${blog.slug}`}>
                    <a className="blog-item__title">
                        <h2 className="blog-item__title-heading">
                            {blog.title}
                        </h2>
                    </a>
                </Link>
            </section>
            <section className="blog-item__section">
                <p className="blog-item__exerpt">
                    {renderHTML(blog.exerpt)}
                </p>
            </section>

        </div>
    );
};
export default Card;
