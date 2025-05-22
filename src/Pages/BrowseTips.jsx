import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";

const BrowseTips = () => {
  return (
    <div className=" dark:bg-[#0f172a]  px-5">
      <div className="max-w-[1420px] mx-auto  py-20">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#fafcff] dark:bg-[#0b1120]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">No</th>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">Title</th>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">Category</th>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">Image</th>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th className="dark:text-[#94a3b8] font-text whitespace-nowrap">1</th>
                <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">Cy Ganderton</td>
                <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">Quality Control Specialist</td>
                <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">Blue</td>
                <td className="whitespace-nowrap"><Link><button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer"><MdOutlineRemoveRedEye size={20} /></button></Link></td>
              </tr>
              <tr>
                <th className="dark:text-[#94a3b8] font-text">1</th>
                <td className="dark:text-[#94a3b8] font-text">Cy Ganderton</td>
                <td className="dark:text-[#94a3b8] font-text">Quality Control Specialist</td>
                <td className="dark:text-[#94a3b8] font-text">Blue</td>
                <td><Link><button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer"><MdOutlineRemoveRedEye size={20} /></button></Link></td>
              </tr>
              <tr>
                <th className="dark:text-[#94a3b8] font-text">1</th>
                <td className="dark:text-[#94a3b8] font-text">Cy Ganderton</td>
                <td className="dark:text-[#94a3b8] font-text">Quality Control Specialist</td>
                <td className="dark:text-[#94a3b8] font-text">Blue</td>
                <td><Link><button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer"><MdOutlineRemoveRedEye size={20} /></button></Link></td>
              </tr>

             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseTips;
