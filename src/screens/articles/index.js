import { NavLink } from "react-router-dom"
import "./index.css"

export const Articles = ({data}) => (
    <div className="articles_main">
        {data.map((item,index)=>{
            return (
                <NavLink key={index} to = {`/articles/${index}`}>
                    <div className="sub_articles">
                        <img src={item.imageUrl} className ="article_img" alt="error" />
                        <p className="description">{item.title}</p>
                    </div>
                </NavLink>
            )
        })}
    </div>
)
