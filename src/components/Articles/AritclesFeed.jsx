import React, { useState, useEffect } from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="h-96 p-6 bg-white overflow-hidden flex flex-col justify-between shadow-sm border border-gray-200 dark:bg-neutral-900 dark:border-white/5 rounded-2xl transition duration-100 ease-in-out">
      <div className="h-3/4 flex flex-col gap-4">
        <div className="h-18 flex-shrink-0 flex flex-col justify-around items-start">
          <h3 className="w-full text-xl font-semibold truncate text-blue-800 dark:text-blue-600">
            {article.title}
          </h3>
          <p className="text-sm text-teal-600 dark:text-teal-400">
            {article.author}
          </p>
        </div>
        <p className="h-full text-gray-700 dark:text-gray-300">
          {article.excerpt}
        </p>
      </div>
      <a
        href={article.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full px-4 py-2 bg-teal-600 text-white text-center rounded-xl hover:bg-teal-300 hover:text-black transition duration-300 "
      >
        Read Full Article
      </a>
    </div>
  );
};

const ArticlesFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "/data/articles.json")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="mx-auto px-4 py-8 overflow-y-scroll">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesFeed;
