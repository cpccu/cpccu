import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import Data from "../../../data/LogInfo.json";
import { useEffect, useState } from "react";
import Button from "../GlobalComponents/Button";

export default function ProfileCard({ id }) {
  const [admin, setAdmin] = useState(false);
  // JSON.parse(localStorage.getItem("logStatus"))
  useEffect(() => {
    if (Data?.username == id && Data?.logStatus) {
      setAdmin(true);
    }
  });

  return (
    <header className="max-w-[70rem] mx-auto">
      <section className="h-36 md:h-40 lg:h-60 mx-auto border bg-black/50"></section>

      {/* main section start */}
      <section className="flex">
        <div className="relative flex  h-[5rem] md:h-[7rem] lg:h-[9rem]">
          <div className="w-[11rem] md:w-[12.5rem] lg:w-[14rem]">
            <section className="ring-4 ring-white h-[8rem] w-[8rem] md:h-[9rem] md:w-[9rem] lg:h-[11rem] lg:w-[11rem] rounded-full bg-red-500 absolute left-7 -top-16">
              1
            </section>
          </div>
          <section className="">
            <h1>Rahul Roy Nipon</h1>
            <p>web devloper</p>
          </section>
        </div>
        <div></div>
      </section>
      {/* main section end */}
    </header>
  );
}

// <section className="lg:px-28 xl:px-52 bg-profile py-5 flex flex-col gap-5">
//       <header>
//         {/* start profile */}
//         <section className="border lg:rounded-xl overflow-hidden">
//           <div className="bg-black h-32 md:h-48 lg:h-52">
//             <img
//               className="h-full w-full object-cover"
//               src={Data?.cover}
//               alt=""
//             />
//           </div>
//           <header className="h-20 md:h-28 lg:h-30 bg-white flex">
//             <section>
//               <div className="relative w-[9rem] md:w-[12rem] lg:w-[13rem]">
//                 <span className="absolute h-28 w-28 md:w-40 md:h-40 lg:h-42 lg:w-42 -top-10 md:-top-16 left-5 rounded-full border-4 border-white">
//                   <img
//                     className="w-full h-full object-cover rounded-full"
//                     src={Data?.img}
//                     alt="profileIMG"
//                   />
//                 </span>
//               </div>
//             </section>
//             <section className="w-full flex justify-between py-2 md:py-3 pr-5 md:pr-16">
//               <div>
//                 <p className="text-xl md:text-3xl lg:text-4xl font-semibold font-custom text-gray-800">
//                   {Data?.name}
//                 </p>
//                 <p className="font-semibold text-gray-500">{Data?.role}</p>
//               </div>

//               {admin && (
//                 <button className="flex items-center justify-center gap-2 bg-header px-4 py-2 font-semibold text-white self-center">
//                   <FontAwesomeIcon icon={faPenToSquare} />
//                   <span>Edit</span>
//                 </button>
//               )}
//             </section>
//           </header>
//         </section>
//         {/* end profile */}
//       </header>

//       {/* end the header section  */}

//       <main className=" grid lg:grid-cols-12 gap-5">
//         <section className="lg:col-span-5 bg-white  self-start h-96 sticky lg:top-24 border lg:rounded-xl">
//           1
//         </section>
//         <section className="lg:col-span-7 flex flex-col gap-5">
//           {/* post section start */}
//           {admin && (
//             <div className="p-3 lg:p-6 flex items-center justify-center gap-3 bg-white lg:rounded-xl border">
//               <div className="h-11 w-11 rounded-full overflow-hidden">
//                 <img
//                   className=" h-full w-full object-cover"
//                   src={Data?.img}
//                   alt=""
//                 />
//               </div>
//               <div className="bg-profile hover:bg-black/10 trans cursor-pointer px-5 py-2 w-[88%] font-semibold text-gray-400 rounded-full">
//                 Write your blog
//               </div>
//             </div>
//           )}
//           {/* post section end */}

//           {/* contain blog start */}
//           <section className=" h-screen w-full bg-white border lg:rounded-xl"></section>
//           {/* contain blog end */}
//         </section>
//       </main>
//     </section>
