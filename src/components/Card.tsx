import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { GoMortarBoard } from "react-icons/go";
import { BsChatLeftText } from "react-icons/bs";

interface Doctor {
  id: number;
  name: string;
  gender: "Male" | "Female";
  photo: string;
  specialization: string;
  experience: number;
  fees: number;
  language: string[];
  rating: number;
}

const Card:React.FC<{Doc: Doctor}> = ({Doc}) => {
  return (
    <Link to={`/doctor/${Doc.id}`}>
      <div className="bg-offYellow w-full max-w-80 h-[460px] rounded-xl flex flex-col items-center justify-start pt-8 px-2 hover:scale-105 group transition-all duration-300 ease-in-out">
        <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 bg-black rounded-3xl px-2 py-1 text-white text-xs flex items-center gap-1 group-hover:scale-110 transition-all duration-200 ease-in-out">
            {Doc.rating}
            <FaStar className="text-yellow-300 text-sm group-hover:animate-bounce group-hover:text-yellow-400 transition-all duration-200 ease-in-out" />
          </div>
          <img
            src={Doc.photo}
            alt={Doc.name}
            className="w-full h-full object-cover relative z-10 transform group-hover:scale-125 transition-all duration-300 ease-in-out"
          />
        </div>
        <h1 className="text-xl font-semibold tracking-wide mt-2">{Doc.name}</h1>
        <h3 className="text-lightText text-lg flex items-center justify-center gap-2 px-4 py-1">
          <IoIosLink className="text-green text-xl" />
          {Doc.specialization}
        </h3>
        <h3 className="text-lightText text-lg flex items-center justify-center gap-2 px-4 py-1">
          <GoMortarBoard className="text-green text-xl" />
          {Doc.experience} Years of experience
        </h3>
        <h3 className="text-lightText text-lg flex items-center justify-center gap-2 px-4 py-1">
          <BsChatLeftText className="text-green text-xl" />
          {Doc.language.map((lan, idx) => (
            <span key={idx}>
              {lan}
              {idx < Doc.language.length - 1 && ","}
            </span>
          ))}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <div className="border-2 border-stone-300 rounded-md w-36 px-2 py-2 h-16">
            <h6 className="text-sm font-semibold text-center">
              Video Consultation
            </h6>
            <h6 className="text-base tracking-wider text-green font-semibold text-center mt-1">
              ₹{Doc.fees}
            </h6>
          </div>
          <div className="border-2 border-stone-300 rounded-md w-36 px-2 py-2 h-16">
            <h6 className="text-sm font-semibold text-center">
              Chat Consultation
            </h6>
            <h6 className="text-base tracking-wider text-green font-semibold text-center mt-1">
              Free
            </h6>
          </div>
        </div>
        <button className="btn btn-white w-full mt-2">View profile</button>
        <button className="btn btn-primary w-full mt-1">
          Book a consultation
        </button>
      </div>
    </Link>
  );
};

export default Card