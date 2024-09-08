import React, { useState, useEffect } from 'react';

const Repositories = () => {
    const [userRepos, setUserRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showViewMore, setShowViewMore] = useState("View More");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/prasadcoop/repos?per_page=4&page=${currentPage}`);
                const data = await response.json();

                if (data.length === 0) {
                    setShowViewMore("End of Repos");
                } else {
                    
                    setUserRepos((prevRepos) => [...prevRepos, ...data]);
                    console.log(data);
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
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {userRepos.map((repo) => (
                    <div key={repo.id} className="shadow-md shadow-slate-300 bg-[#0a192f] border rounded-lg shadow-md p-4">
                        <div className="group-hover:opacity-100 ">
                            <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                            <p className="text-gray-600 mb-4">{repo.description || "No description available"}</p>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
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
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? "Loading..." : showViewMore}
                </button>
            </div>
        </div>
    );
};

export default Repositories;
