import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { axiosInstance } from '../utils/axios'
import { useReviewStore } from '../stores/reviewStore'
import { Loader } from 'lucide-react'

const ReviewsPage = () => {
  const { reviews, isLoading, getReviews } = useReviewStore();

  useEffect(() => {
    getReviews();
  }, [])

  return (
    <div>
      <Navbar />

      <section className='grid gap-3 m-5'>
        <h1 className='text-xl font-semibold'>Reviews</h1>
        {reviews.map((review, i) => (
          <div key={i} className='border p-3'>
            <h1 className='text-xl font-semibold'>{review.name}</h1>
            <p>{review.review}</p>
          </div>
        ))}

        {reviews.length === 0 && !isLoading && <p>No review</p>}
        {isLoading && <Loader className='animate-spin mx-auto m-5' />}
      </section>

    
     
    </div>
  )
}

export default ReviewsPage