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
                                <div className={`aspect-square flex flex-col justify-end bg-grey-01 text-white rounded-lg p-7 transition-all duration-300 ease-in-out hover:shadow-lg relative overflow-hidden`}>
                                    <div className="absolute top-0 left-0 w-full h-full duration-300 ease-in-out bg-cover bg-center hover:scale-110" style={{ backgroundImage: `url(${photo.mediaItemUrl})` }}></div>
                                    <div className="relative z-10">
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