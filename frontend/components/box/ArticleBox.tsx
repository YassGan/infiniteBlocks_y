import moment from "moment";

const ArticleBox = (props: {articles?: any[]}) => {
  return (
    <>
      {props.articles?.map((article, index) => (
        <div
        className={`col-sm-12 col-md-${(article.Summary?.length > 1000)? '12' : '6'} col-lg-${(article.Summary?.length > 2000 ? '8' : (article.Summary?.length > 1000)? '6' : '4' )} py-3* my-2`}
        key={index}
      >
      <div className="card">
        <div className="card-header">
        <h5 className="card-title">{article.Title}</h5>
         </div>
        <div className="card-body">
          <p className='card-text'>{article.Summary}</p>
          <div className='article-metadata'>
            <div className='article-info'>
              <h5>{article.Source}</h5>
              <small>{moment(article.Published).fromNow()}</small>
            </div>
          </div>
        </div>
      </div>
      </div>
      ))}
    </>
  );
};

export default ArticleBox;
