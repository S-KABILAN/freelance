// pages/ProductReviewsPage.js

import { useState, useEffect } from 'react';

const ProductReviewsPage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchProductTweets = async () => {
      const response = await fetch('/api/productTweets');
      const data = await response.json();
      setTweets(data);
    };

    fetchProductTweets();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Product Reviews</h1>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>
            <div className="bg-gray-100 p-4 rounded-lg my-2">
              <p className="text-gray-800">{tweet.text}</p>
              <p className="text-gray-600">{tweet.user.screen_name}</p>
              <a
                href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Twitter
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviewsPage;
