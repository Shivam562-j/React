import React from "react";

const Card = ({username="Delbaa", userinfo=`Lorem ipsum dolor sit amet consectetur adipisicing elit
Excepturi debitis`, btntext = "View Profile", img = "../images/dev1.webp" } ) => {
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src={img}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">
                    {username}
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                    {userinfo}
                </p>
                <button className="mt-2 cursor-pointer text-sm font-semibold text-black bg-white px-5 py-2.5 rounded-md">
                    {btntext} →
                </button>
            </div>
        </div>
    );
};

export default Card;
