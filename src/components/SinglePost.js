import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { useParams } from 'react-router-dom';
import  imageUrlBuilder  from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";
import NavBar from "./NavBarTwo";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

useEffect(() => {
    sanityClient.fetch(`*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        publishedAt,
        mainImage{
            asset->{
              _id,
              url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image
    }`
    )
    .then((data) => setSinglePost(data[0])).catch(console.error)
}, [slug]);

if (!singlePost) return <div>Loading...</div>; 

  return (
    <div>
    <NavBar />
    <main className='overflow-x-hidden bg-white min-h-screen p-6 mt-10'>
      <article className="container shadow-lg mx-auto bg-[#f5f5f5] rounded-lg">
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-8'>
            <div className='bg-white bg-opacity-75 rounded px-2'>
              <h1 className='font-orbitron pt-6 text-sm text-center md:text-3xl'>
                {singlePost.title}
              </h1>
              <p className='pt-6 text-sm text-right font-orbitron'>{new Date(singlePost.publishedAt).toLocaleDateString()}</p>
              <div className='flex justify-center text-veryDarkBlue'>
                <img 
                      src={urlFor(singlePost.authorImage).url()} 
                      alt={singlePost.name}
                      className="w-10 h-10 rounded-full" 
                />
              <p className='font-orbitron flex items-center pl-2 text-2xl'> 
                  {singlePost.names}
              </p>
              </div>
              
            </div>
          </div>
          <img
                src={singlePost.mainImage.asset.url} 
                alt={singlePost.title} 
                className="w-full object-cover rounded-t"
                style={{ height: "200px" }}
          />
        </header>
        <div className='p-6 py-20 lg:px-48 lg:py-20 prose lg:prose-xl max-w-full'>
          <BlockContent 
            blocks={singlePost.body}
            projectId="m7yc7ong"
            dataset="production" 
          />
          </div>
      </article>
    </main>
    </div>
  )
}
