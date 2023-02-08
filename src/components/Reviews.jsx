import React, { useEffect, useState } from "react";
import { getReviews } from "../api";
import ReviewCard from "./ReviewCard";
import pageBanner from "../assets/images/pageBanner.png";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = {
    category: searchParams.get("category") || "",
    filterName: searchParams.get("sort_by") || "",
    filterOrder: searchParams.get("order") || "",
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = query ? await getReviews(query) : await getReviews();
      setReviews(reviewList);
    };
    fetchReviews();
    setIsLoading(false);
  }, [query.category, query.filterName, query.filterOrder]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="reviews-container">
      <section className="divider"></section>
      <img src={pageBanner} alt="retro" className="page-banner" />
      <Filter setSearchParams={setSearchParams} category={query.category}/>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </section>
  );
};

export default Reviews;
