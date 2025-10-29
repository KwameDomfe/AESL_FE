import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

const Blogs = () => {
    
    useEffect(() => {
                        window.scroll(0,0)
                    }, []
    )
    
    // const blogs = useLoaderData()
    // return (
    //     <div>
    //         <h2>
    //             Blogs List
    //         </h2>
    //         {/* <div>
    //             {blogs.map(
    //                     blog =>  (
    //                         <div key={blog.id}
    //                         >
    //                             <Link to ={blog.id.toString()}>
    //                             <p>{blog.title}</p>
    //                             </Link>
    //                         </div>
    //                     )
    //                 )
    //             }
    //         </div> */}
    //     </div>
    // )
}

export default Blogs

// Loader Functions

// export const blogsLoader = async () => {
//     const res = await fetch ('api')
// console.log(res);
//     if (!res.ok) {
//         throw Error('Could not fetch the blogs')
//     }
//     return res.json()
//}