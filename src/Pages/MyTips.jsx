import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router";

const MyTips = () => {
  return (
    <div className=" dark:bg-[#0f172a]  px-5">
      <div className="max-w-[1420px] mx-auto  py-20">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#fafcff] dark:bg-[#0b1120]">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                  No
                </th>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                  Title
                </th>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                  Category
                </th>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                  Image
                </th>
                <th className="dark:text-[#94a3b8] bg-[#f0f3f9] dark:bg-[#0b1123] text-gray-700 font-text whitespace-nowrap">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th className="dark:text-[#94a3b8] font-text whitespace-nowrap">1</th>
                <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">Cy Ganderton</td>
                <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">
                  Quality Control Specialist
                </td>
                <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">Blue</td>
                <td className="space-x-3 whitespace-nowrap">
                  <Link>
                    <button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer">
                      <TbEdit size={20} />
                    </button>
                  </Link>
                  <Link>
                    <button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer">
                      <AiOutlineDelete size={20} />
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="dark:text-[#94a3b8] font-text">1</th>
                <td className="dark:text-[#94a3b8] font-text">Cy Ganderton</td>
                <td className="dark:text-[#94a3b8] font-text">
                  Quality Control Specialist
                </td>
                <td className="dark:text-[#94a3b8] font-text">Blue</td>
                <td className="space-x-3">
                  <Link>
                    <button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer">
                      <TbEdit size={20} />
                    </button>
                  </Link>
                  <Link>
                    <button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer">
                      <AiOutlineDelete size={20} />
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="dark:text-[#94a3b8] font-text">1</th>
                <td className="dark:text-[#94a3b8] font-text">Cy Ganderton</td>
                <td className="dark:text-[#94a3b8] font-text">
                  Quality Control Specialist
                </td>
                <td className="dark:text-[#94a3b8] font-text">Blue</td>
                <td className="space-x-3">
                  <Link>
                    <button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer">
                      <TbEdit size={20} />
                    </button>
                  </Link>
                  <Link>
                    <button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer">
                      <AiOutlineDelete size={20} />
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTips;
