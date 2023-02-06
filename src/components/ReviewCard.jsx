import React from 'react'

const ReviewCard = ({review}) => {
  return (
    <div className='review-card'>
        <img src={review.review_img_url} alr={review.title} className="review-card-img"></img>
        <div className="review-card-text">
          <h3>{review.title}</h3>
          <p>{review.review_body}</p>
        </div>
    </div>
  )
}

export default ReviewCard