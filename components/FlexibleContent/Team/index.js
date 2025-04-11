'use client'

import { useState, useEffect } from "react";
import LazyItem from "../../LazyItem";

const Team = ({ data }) => {
    const { team } = data;
    const [openBio, setOpenBio] = useState(null);

    const toggleBio = (index) => {
        setOpenBio(openBio === index ? null : index);
    };

    return (
        <div className='container mx-auto relative px-6 md:px-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
                {team.map((item, index) => {
                    const { name, role, photo, bio } = item;
                    return (
                        <LazyItem key={index}>
                            <div 
                                className="cursor-pointer group"
                                onClick={() => toggleBio(index)}
                            >
                                <div className={`aspect-square flex flex-col justify-end bg-blend-soft-light bg-grey-01 bg-cover bg-center rounded-lg p-7 transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-transparent ${openBio === index ? 'bg-transparent!' : ''}`}
                                    style={{ backgroundImage: `url(${photo.mediaItemUrl})` }}
                                >
                                    <div>
                                        <h2 className="text-xl!">{name}</h2>
                                        <p className="text-base!">{role}</p>
                                    </div>
                                </div>
                                <div className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${openBio === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-base! transform transition-transform duration-300 ease-in-out" dangerouslySetInnerHTML={{ __html: bio }} />
                                </div>
                            </div>
                        </LazyItem>
                    )
                })}
            </div>
        </div>
    )
}

export default Team;