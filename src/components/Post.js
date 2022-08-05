import React , {useState, useEffect} from 'react';
import sanityClient from '../client.js';
import {Link} from 'react-router-dom';
import NavBar from "./NavBarTwo";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
        sanityClient.fetch(`*[_type == "post"] {
                title,
                slug,
                mainImage{
                  asset->{
                    _id,
                    url
                  },
                  alt
                }
        }`).then((data) => setPost(data)).catch(console.error)
  }, [])
  return (
    <div>
      <NavBar />
    <main className='bg-white min-h-screen p-12'>
        <section className='container mx-auto' name="post">
            <h1 className='text-5xl flex justify-center mt-10 font-orbitron text-veryDarkBlue'>Latest News Update</h1>
            <h2 className='text-lg flex justify-center mb-12 font-pacifico text-veryDarkBlue'>Welcome to the latest news update </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                  {postData && postData.map((post, index) => (
                <article>
                  <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                    <span 
                          className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-pink-600'
                          key={index}>
                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                          className="h-64 w-72 rounded-r object-cover absolute" />
                        <span className='block relative h-full justify-end items-end pr-4 pb-4'>
                            <h3 className='text-gray-300 text-lg font-blog px-3 py-4 bg-[#0a192f] bg-opacity-75 rounded'>
                              {post.title}
                            </h3>
                        </span>
                    </span>
                    </Link>
                </article>
                   )) }
            </div>
        </section>
    </main>
    </div>
  )
}
