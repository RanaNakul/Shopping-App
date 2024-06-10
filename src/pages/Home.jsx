import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState(false);
  const [posts , setPosts] = useState([]);

  async function fetchProductData() {
      setLoading(true);

      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        setPosts(data);
        console.log(data);
        
        
      } catch (error) {
          console.log("error fetching product");
          setPosts([]);
      }
      
      setLoading(false);
  }

  useEffect( () => {
     fetchProductData();
  }, [])

  return (
    <div className=' pt-[100px] w-10/12 max-w-[1028px] mx-auto pb-20 '>
        {
          loading ? <Spinner /> :
          posts.length > 0 ? (
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-y-10 gap-x-5 min-h-[80vh] '>
              {
                posts.map( (post) => (
                  <Product post={post} key ={post.id}/>
                ) )
              }
            </div>
          ) : 
          <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-2xl text-slate-950 font-bold'>
            No posts found
          </div>
        }
    </div>
  )
};

export default Home;

