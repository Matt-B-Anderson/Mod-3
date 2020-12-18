import React from "react"
import blogData from "./blogData"
import Blog from "./BlogPost"

function Post() {
    const blogComponents = blogData.map(blog => < Blog key={blog.id}
        title={blog.title}
        subTitle={blog.subTitle}
        author={blog.author}
        date={blog.date}
    />)
    return <div className="post">
        {blogComponents}
    </div>
}

export default Post