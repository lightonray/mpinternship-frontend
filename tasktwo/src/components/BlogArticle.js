import { useParams } from 'react-router-dom';
import blogData from '../blogData.json';
import '../css/BlogArticle.css';

const BlogArticle = () => {
  const { index } = useParams();
  const article = blogData[parseInt(index)];

  return (
    <div className="blog-article">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-content">{article.content}</p>
      <p className="article-author">Article by: {article.author}</p>
      <p className="article-date">Published date: {article.date}</p>
    </div>
  );
};

export default BlogArticle;