import "./index.css"

export const News = ({data,match}) => (
    <div className="article_container">
        <p className="title">{data[match.params.idx].title}</p>
        <img className="container_img" src={data[match.params.idx].imageUrl} alt="err" />
        <p className="container_description">{data[match.params.idx].description}</p>
        <div className="container_comment">
            <p className="container_title">Expert comment</p>
            <p>{data[match.params.idx].expertComment}</p>
        </div>
    </div>
)