import  { useEffect, useRef, useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Dropdown from '../components/Dropdown';
import { RxCross1 } from "react-icons/rx";

import { Expertise, Gender, Fees, Language } from "../../public/data.ts";
import { Doctors } from "../../public/Doctors.ts";
import Card from '../components/Card.tsx';
const FindDoctors = () => {
  const indianCities:string[] = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Surat",
  ];
  const allFilters:any[] = [
    { key: "Expertise", items: Expertise },
    { key: "Gender", items: Gender },
    { key: "Fees", items: Fees },
    { key: "Language", items: Language },
  ];

  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [dropdown, setDropDown] = useState<boolean>(false);
  const [city, setCity] = useState<string>("Select Location");
  const [filters, setFilters] = useState<any[]>([]);
console.log("filters", allFilters);
        
  const handleClickOutside=(eve:MouseEvent)=>{

       if(dropDownRef.current&&!dropDownRef.current.contains(eve.target as Node)){
        setDropDown(false)
       }
  }

  useEffect(() => {
   
   document.addEventListener('click',handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [])
  
  const handleChange = (value: any, dropdownKey: string) => {
    setFilters((prevFilters) => {
      const existingIndex = prevFilters.findIndex(
        (filter) => filter.key === dropdownKey
      );

      if (existingIndex !== -1) {
        const updatedFilters = [...prevFilters];
        updatedFilters[existingIndex] = { key: dropdownKey, value: value };
        return updatedFilters;
      } else {
        return [...prevFilters, { key: dropdownKey, value: value }];
      }
    });
  };
  const handleRemove=( dropdownKey: string)=>{
      const updatedFilters= filters.filter((filter)=>filter.key!==dropdownKey)
      setFilters(updatedFilters)
  }
    return (
      <div>
        <div className="relative bg-light_green w-full h-[35vh]">
          <div className="w-full h-full z-10 overflow-hidden relative">
            <div className="w-60 h-60 absolute -top-1/2 left-40 bg-green/10 rounded-full z-10"></div>
            <div className="w-60 h-60 absolute -top-1/2 right-28 bg-green/10 rounded-full z-10"></div>
            <div className="w-60 h-60 absolute -bottom-1/2 left-72 bg-green/10 rounded-full z-10"></div>
            <div className="w-60 h-60 absolute -bottom-1/2 right-48 bg-green/10 rounded-full z-10"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-semibold tracking-wide">
              Find expert Doctors for an In-clinic session here
            </h1>
            <div className="container w-5/12 h-12 flex items-center justify-center gap-3">
              <div
                ref={dropDownRef}
                className="relative w-full max-w-56 h-full bg-white rounded"
              >
                <div
                  onClick={() => setDropDown(!dropdown)}
                  className="h-full flex items-center justify-start px-2 gap-3 text-lg text-lightText cursor-pointer"
                >
                  <MdLocationPin className="text-2xl text-green" />
                  <span className="w-full truncate">{city}</span>
                  <IoIosArrowDown
                    className={`text-2xl text-black ${
                      dropdown ? "rotate-180" : "rotate-0"
                    } transform duration-300 ease-in-out`}
                  />
                </div>
                {dropdown && (
                  <ul
                    className={`absolute top-full left-0 w-full mt-1 bg-white border rounded shadow-lg z-20
    transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden ${
      dropdown
        ? "max-h-56 translate-y-0 opacity-100"
        : "max-h-0 -translate-y-4 opacity-0"
    }`}
                  >
                    {indianCities.map((city, idx) => (
                      <li
                        onClick={() => {
                          setCity(city);
                          setDropDown(false);
                        }}
                        key={idx}
                        className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="w-full h-full overflow-hidden rounded border flex items-center bg-white">
                <input
                  type="text"
                  placeholder="e.g. Doctor, Specialization, Clinic Name"
                  className="h-full w-full outline-none ring-0 border-none px-2 placeholder-gray-500"
                />
                <FaArrowRightLong className="text-xl text-black mr-5 hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto h-16 py-2 border">
          <div className="w-[85%] mx-auto h-full flex items-center justify-evenly">
            <Dropdown
              options={Expertise}
              defaultSelect="Expertise"
              onChange={(value) => handleChange(value, "Expertise")}
            />
            <Dropdown
              options={Gender}
              defaultSelect="Gender"
              onChange={(value) => handleChange(value, "Gender")}
            />
            <Dropdown
              options={Fees}
              defaultSelect="Fees"
              onChange={(value) => handleChange(value, "Fees")}
            />
            <Dropdown
              options={Language}
              defaultSelect="Language"
              onChange={(value) => handleChange(value, "Language")}
            />
          </div>
        </div>
        <div className="w-full px-10 py-1 h-16 flex items-center gap-5 justify-end">
          {filters.map((filter, idx) => (
            <div
              key={idx}
              onClick={() => handleRemove(filter.key)}
              className="w-fit bg-green/20 px-5 py-3 rounded-3xl flex items-center gap-2 cursor-pointer"
              style={{
                animation: "slide-in 0.5s ease-in-out",
              }}
            >
              {filter.value}
              <RxCross1 className="text-lg cursor-pointer" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-5 place-content-center p-8 w-[90%] mx-auto">
          {Doctors.map((doc) => (
            <Card key={doc.id} Doc={doc} />
          ))}
        </div>
      </div>
    );
}

export default FindDoctors