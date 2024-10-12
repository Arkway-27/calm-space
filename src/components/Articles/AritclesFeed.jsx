import React, { useState, useEffect } from "react";

const ArticlesFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "/data/articles.json")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl mx-auto mt-12 mb-2 text-center font-bold py-4">
        Articles about Calm and Peace
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-red-600 mb-4">{article.author}</p>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 bg-[#EE4865] text-white text-center rounded hover:bg-blue-600 transition duration-300 "
              >
                Read Full Article
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesFeed;
