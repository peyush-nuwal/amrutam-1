import {useEffect, useRef, useState} from 'react'

 import { IoIosArrowDown } from "react-icons/io";

type DropdownProps <T=any>= {
  options: T[]; 
  defaultSelect: string; 
  onChange?: (selected: T) => void;
  
  
};
const Dropdown= <T,> ({
  options,
  defaultSelect,
  onChange,

}: DropdownProps<T>) => {
  const [dropdown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(defaultSelect);
   const dropdownRef=useRef<HTMLDivElement|null>(null);

   const handleClickOutside=(e:MouseEvent)=>{
    
       if(dropdownRef&&!dropdownRef.current?.contains(e.target as Node)){
           setDropDown(false)
       }
   }

   useEffect(() => {
     document.addEventListener("click", handleClickOutside);
   
     return () => document.removeEventListener('click',handleClickOutside)
   }, [])

    const handleSelection = (opt: any) => {
      if (opt === null) {
        setSelected(defaultSelect);
      } else {
        setSelected(String(opt));
      }
      setDropDown(false);
      onChange?.(opt);
    };
  return (
    <div
      ref={dropdownRef}
      className={`relative  w-full max-w-56  h-full max-h-[50px] border  rounded cursor-pointer 
         ${dropdown ? "bg-green/15" : "bg-white"}
       `}
    >
      <div
        onClick={() => setDropDown(!dropdown)}
        className=" h-full  flex items-center justify-start px-2   gap-3 text-lg text-lightText "
      >
        {" "}
        <span className="w-full   truncate">{selected}</span>{" "}
        <IoIosArrowDown
          className={`text-2xl text-black ${
            dropdown ? "rotate-180 " : "rotate-0"
          } transform duration-300 ease-in-out`}
        />
      </div>
      {dropdown && (
        <ul
          className={`absolute top-full left-0 w-full mt-1 bg-white border rounded shadow-lg z-20 
                       transition-transform duration-500 ease-in-out overflow-y-auto  overflow-x-clip thin-bar ${
                         dropdown
                           ? "max-h-56 translate-y-0"
                           : "max-h-0 -translate-y-4"
                       }
                  `}
        >
          <li
            onClick={() => handleSelection(null)}
            className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            --{defaultSelect}--
          </li>
          {options.map((opt, idx) => (
            <li
              onClick={() => {
                handleSelection(opt);
              }}
              key={idx}
              className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {String(opt)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown