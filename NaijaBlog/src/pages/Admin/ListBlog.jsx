import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/Admin/BlogTableItem';
import { AnimatePresence } from 'framer-motion';

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data)
  }

  useEffect(() => {
    fetchBlogs()
  }, []);

  return (
    <div className="flex-1 min-h-screen pt-5 px-5 sm:pt-12 sm:pl-16 bg-green-50/50">
      <h1>All Blogs</h1>
      <div className="relative max-w-4xl mt-4 shadow rounded-lg bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
              <th scope='col' className='px-2 py-4'>Blog Title</th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
              <th scope='col' className='px-2 py-4'>Actions</th>
            </tr>
          </thead>
        </table>
        <div className="overflow-y-auto max-h-[400px]">
          <table className="w-full text-sm text-gray-500">
            <tbody>
              <AnimatePresence>
                {blogs.map((blog, index) => (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchBlogs}
                    index={index + 1}
                    animateIndex={index} // pass index for animation
                  />
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListBlog