import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const PostsLayout = () => {
  
  return (
    <div>
        <h2>
            Posts
        </h2>
        <p>
        Over the years, our thoughts, words, and deeds have contributed, to a great extent, to shape the various facets of life in KNUST and Ghana as a whole. Our mission is to bring Katanga Alumni worldwide together, to discover the opportunities available, and get involved in helping to build and strengthen our network.
        </p>

        <Outlet />
    </div>
  )
}

export default PostsLayout
