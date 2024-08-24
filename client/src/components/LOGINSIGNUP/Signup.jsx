// import Logo from "./../../assets/logo/cpccu.png";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import InputBox from "./InputBox";

// export default function Signup() {
//   const labelCSS = `uppercase font-semibold text-sm text-gray-800 font-custom`;
//   const inputCSS = `outline-none border-b border-gray-300 py-2 focus:border-black`;
//   const btn = `uppercase font-semibold h-12 px-1 rounded-full w-full text-sm`;

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPass, setConfirmPass] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [uniID, setUniID] = useState("");
//   const [batch, setBatch] = useState("");

//   return (
//     <>
//       <Link to="/">
//         <button className="bg-header absolute z-30 left-[2rem] mdd:left-[6rem] top-10 md:top-16 flex items-center justify-center h-10 rounded-lg lg:w-[10rem] gap-3 px-3 py-2 hover:bg-headerHover trans">
//           <FontAwesomeIcon
//             className=" text-white font-extrabold text-2xl"
//             icon={faArrowLeftLong}
//           />
//           <h1 className="font-bold text-white hidden md:block">Home Page</h1>
//         </button>
//       </Link>

//       <div className={`bg-white h-screen padding flex px-3 `}>
//         <section
//           className="w-full items-center justify-center hidden lg:flex relative"
//           style={{
//             backgroundImage: `url(https://i.ibb.co/pwRqzpN/R-2.png)`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <h1 className="text-3xl font-custom text-gray-500 absolute top-[50%] -right-20 -rotate-90">
//             Sign up to Join CPCCU
//           </h1>
//         </section>
//         <main className="mx-auto w-full lg:min-w-[30rem] lg:w-[60rem] lg:max-w-[70rem] flex flex-col gap-7 items-start justify-center padding">
//           {/* logo section start */}
//           <section className="flex flex-col self-center items-center justify-center gap-2">
//             <img className="h-16 md:h-24" src={Logo} alt="Logo" />
//             <h2 className="text-xl md:text-2xl font-custom">
//               Welcome to CPCCU
//             </h2>
//           </section>
//           {/* logo section end */}
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="flex flex-col gap-4 w-full"
//           >
//             <section className="grid grid-cols-12 gap-5">
//               {/* input username start */}
//               <InputBox
//                 type={"email"}
//                 title={"Email"}
//                 id={"userEmail"}
//                 clName={"col-span-6"}
//                 data={email}
//                 setData={setEmail}
//               />
//               {/* input username end */}

//               {/* uni info */}
//               {/* full name */}
//               <InputBox
//                 type={"text"}
//                 title={"Full name"}
//                 id={"userName"}
//                 clName={"col-span-6"}
//                 data={fullName}
//                 setData={setFullName}
//               />
//             </section>
//             <section className=" grid md:grid-cols-12 gap-5">
//               {/* uni id */}
//               <InputBox
//                 type={"number"}
//                 title={"CITY UNIVERSITY ID"}
//                 id={"userUniID"}
//                 clName={"md:col-span-9"}
//                 data={uniID}
//                 setData={setUniID}
//               />
//               {/* uni batch*/}
//               <InputBox
//                 type={"number"}
//                 title={"BATCH NO."}
//                 id={"userBatch"}
//                 clName={"md:col-span-3"}
//                 data={batch}
//                 setData={setBatch}
//               />
//               {/* input password start */}
//             </section>
//             <InputBox
//               type={"password"}
//               title={"Password"}
//               id={"userPass"}
//               data={password}
//               setData={setPassword}
//             />

//             <InputBox
//               type={"password"}
//               title={"confirm password"}
//               id={"userConfirmPass"}
//               data={confirmPass}
//               setData={setConfirmPass}
//             />
//             {/* input password end */}

//             <section className="flex items-center justify-center gap-5 mt-5">
//               <button
//                 className={`${btn} bg-gradient-to-r from-headerHover to-fuchsia-700 text-header hover:ring trans`}
//               >
//                 <div className="bg-white rounded-full h-10 flex items-center justify-center">
//                   create account
//                 </div>
//               </button>
//             </section>
//           </form>

//           <section>
//             <h1 className={`${labelCSS} text-lg`}>
//               Already created an account?
//             </h1>
//             <Link
//               to={"/login"}
//               className={`${labelCSS} text-lg text-header shadow-sm`}
//             >
//               Log In here!
//             </Link>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// }
