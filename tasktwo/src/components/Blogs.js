import blogData from '../blogData.json';
import { Link } from 'react-router-dom'
import '../css/Blog.css'

const Blogs = () => {
    return (
        <div className="blog-page">
          <h1 className="blog-heading">BLOG ARTICLES</h1>
          <ul className="blog-list">
            {blogData.map((article, index) => (
              <li key={index} className="blog-item">
                <Link to={`/article/${index}`} className="blog-link">
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    };



export default Blogs;
