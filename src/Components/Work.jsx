import { useEffect, useState } from "react";
import React from "react";

function Work() {
    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [showViewMore, setShowViewMore] = useState("")

    const fetchRepos = () => {

        fetch('https://api.github.com/users/prasadcoop/repos?per_page=8&page=${currentPage}')
            .then((response) => (response.json()))
            .then((data) => {
                if (data.length === 0) {
                    setShowViewMore("End of Repos")
                } else {
                    setUser([...user, ...data])
                    setShowViewMore("View More")
                }
            })
    }

    useEffect(() => {
        fetchRepos()
    }, [currentPage])

    const viewMore = () => {
        setCurrentPage(currentPage + 1)
    }

    // const userElements = user.map((userElement) => {
    //     return (
    //         // <div className="repo-card" key={userElement.id}>
    //         //     <h2 className="repo-name">{userElement.name}</h2>
    //         //     <p className="language">Langauge: {userElement.language === null ? "none" : userElement.language}</p>
    //         //     <p className="date">Start date & time: {userElement.created_at}</p>
    //         //     <p className="visibility">Visibility: {userElement.visibility}</p>
    //         // </div>

    //         <div className="bg-white py-24 sm:py-32">
    //             {/* <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    //             <div className="max-w-2xl">
    //                 <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
    //                 <p className="mt-6 text-lg leading-8 text-gray-600">
    //                 Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
    //                 suspendisse.
    //                 </p>
    //             </div> */}
    //             <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
    //                 {/* {people.map((person) => ( */}
    //                 <li key={userElement.id}>
    //                     <div className="flex items-center gap-x-6">
    //                         <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{userElement.name}</h3>
    //                         <div>
    //                             <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{userElement.created_at}</h3>
    //                             {/* <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p> */}
    //                         </div>
    //                     </div>
    //                 </li>
    //                 {/* ))} */}
    //             </ul>
    //         </div>
    //         // </div>
    //         // <div>
    //         // <h2 className="repo-name">{userElement.name}</h2><br/>
    //         // </div>
    //     )
    // })

    // return (
    //     <>
    //         <section className="repo-container">
    //             {userElements}
    //         </section>
    //     </>
    // )

    return (
        <div name="work" className="w-full  text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Work
                    </p>
                    <p className="py-6">
                        Check out some of my recent work which i have posted on Youtube and hosted on Github
                    </p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-4 md:grid-cols-4 gap-6">
                    {/* Gird Item */}
                    {user.map((item, index) => (
                        <div
                            key={index}
                            // style={{
                            //   backgroundImage: `url(${item.image})`,
                            //   backgroundSize: "contain",
                            // }}
                            //     className="shadow-lg shadow-slate-400 group container rounded-md flex justify-center text-center items-center mx-auto content-div mt-4 "
                            //   >
                            className="shadow-md shadow-slate-300 group container rounded-sm flex justify-center text-center items-center sm-auto content-div p-2 mt-2"
                        >
                            {/* Hover effect for images */}
                            <div className="group-hover:opacity-100 ">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}

                                    <a href={item.html_url} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                                    bg-white text-gray-700 font-bold text-lg hover:bg-black hover:text-white"
                                        >
                                            GitHub
                                        </button>
                                    </a>


                                    {/* {item.link2 !== "" ? (
                      <a href={item.link2} target="_blank">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white"
                        >
                          Demo 2
                        </button>
                      </a>
                    ) : (
                      ""
                    )} */}

                                    {/* {item.github !== "not" ? (
                      <a href={item.github} target="_blank">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white"
                        >
                          Code
                        </button>
                      </a>
                    ) : (
                      "Code not available due to some Privacy factors"
                    )} */}

                                    {/* eslint-disable-next-line */}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <p className="view-more" onClick={viewMore}>{showViewMore}</p>
            </div>

        </div>

    );
}
export default Work