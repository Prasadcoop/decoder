import React, { useState, useEffect } from "react";

const Repositories = () => {
  const [userRepos, setUserRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewMore, setShowViewMore] = useState("View More");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/prasadcoop/repos?per_page=4&page=${currentPage}`
        );
        const data = await response.json();

        if (data.length === 0) {
          setShowViewMore("End of Repos");
        } else {
          // setUserRepos((prevRepos) => [...prevRepos, ...data]);
          // console.log(data);
          setUserRepos((prevRepos) => {
            const newRepos = data.filter(
              (repo) => !prevRepos.some((prevRepo) => prevRepo.id === repo.id)
            );
            return [...prevRepos, ...newRepos];
          });

          setShowViewMore("View More");
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
        setShowViewMore("Error");
      }
      setLoading(false);
    };

    fetchRepos();
  }, [currentPage]);

  const handleViewMore = () => {
    if (showViewMore === "View More") {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div name='work' className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-8">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Repositories
          </p>
          <p className="py-4"> These are the Projects I've worked with</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {userRepos.map((repo) => (
            <div
              key={repo.id}
              className="shadow-md shadow-slate-300 bg-[#0a192f] border rounded-lg shadow-md p-4"
            >
              <div className="group-hover:opacity-100 ">
                <h3 className="text-base font-bold mb-2">{repo.name}</h3>
                <p className="text-gray-600 mb-4">
                  {repo.description || "No description available"}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleViewMore}
            disabled={loading || showViewMore === "End of Repos"}
            className=" border-2 border-pink-600 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-centerr"
          >
            {loading ? "Loading..." : showViewMore}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
