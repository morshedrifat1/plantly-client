import { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
import LoadingSpiner from "../Components/LoadingSpiner";

const BrowseTips = () => {
  const [workLevel, setWorkLevel] = useState("");
  const [tips, setTips] = useState([]);
  const [loader,setLoader] = useState(true)
  useEffect(() => {
    setLoader(true)
    let url = "http://localhost:5000/tips";
    if (workLevel) {
      url = `http://localhost:5000/tips?workLevel=${workLevel}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {setTips(data);setLoader(false)});
  }, [workLevel]);
  return (
    <>
    
    {
      loader?<LoadingSpiner></LoadingSpiner>:<div className=" dark:bg-[#0f172a]  px-5">
      <div className="max-w-[1420px] mx-auto  py-20">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#fafcff] dark:bg-[#0b1120]">
          <div className="w-42 my-5 px-5">
            <form>
              <select
                onChange={(e) => setWorkLevel(e.target.value)}
                required
                className="border font-text text-gray-700 dark:text-gray-300 border-gray-300 py-3 px-3  rounded-lg focus:border-gray-500 focus:outline-none w-full text-sm font-normal dark:bg-[#1e293b] dark:border-0 mt-1"
                defaultValue="Select Level"
                name="workLevel"
              >
                <option  disabled={true}>Select Level</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </form>
          </div>
          <table className="table">
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
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {tips.map((tip, index) => (
                <tr key={index}>
                  <th className="dark:text-[#94a3b8] font-text whitespace-nowrap">
                    {index + 1}
                  </th>
                  <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">
                    {tip.title}
                  </td>
                  <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">
                    {tip.category}
                  </td>
                  <td className="dark:text-[#94a3b8] font-text whitespace-nowrap">
                    <img
                      className="w-10 h-10 object-cover rounded-lg"
                      src={tip.photos}
                      alt=""
                    />
                  </td>
                  <td className="whitespace-nowrap">
                    <Link to={`/tips/${tip._id}`}>
                      <button className="bg-gray-200/80 dark:bg-gray-200/10 p-2.5 rounded-xl cursor-pointer">
                        <MdOutlineRemoveRedEye size={20} />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default BrowseTips;
