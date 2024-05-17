import React, { useState, useEffect, act } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faListOl } from "@fortawesome/free-solid-svg-icons";

// <FontAwesomeIcon icon={faUser} />
// <FontAwesomeIcon icon={faEnvelope} />
// <FontAwesomeIcon icon={faLock} />

export default function LoginSignup() {
  const [action, setAction] = useState("Sign Up");


  // styles here
  let s1 = `flex items-center m-auto w-[480px] h-[80px] bg-slate-300 rounded-md`;
  let s2 = `px-[30px] w-7 h-7`;
  let s3 = `bg-slate-300 w-[24rem] placeholder:capitalize hover:ring-1 hover:ring-header p-3 placeholder:font-bold`;
  let s4 = `flex gap-2 justify-center items-center w-[120px] h-[40px] text-white bg-header rounded-lg text-[20px] font-bold cursor-pointer`;
  let ss1 = (action === "Log In") ? s4 + ` bg-gray-700 text-gray-400` : s4;
  let ss2 = (action === "Sign Up") ? s4 + ` bg-gray-700 text-gray-400` : s4;


  return (
    <div className="bg-indigo-700">
      <div className="flex flex-col m-auto mt-[50px] bg-white pb-[30px]">
        <div className="flex flex-col items-center gap-[9px] w-[100%] mt-[30px]">
          <div className="text-header font-mono font-extrabold text-[48px]">{action}</div>
          <div className="w-[120px] h-[4px] bg-headerHover rounded-sm"></div>
        </div>

        <div className={`mt-[20px] flex flex-col ${action === "Log In" ? 'gap-[8px]' : 'gap-[25px]'}`}>
          {action === "Log In" ?
            <div className="">
            </div>
            :
            <div className={s1}>
              <FontAwesomeIcon className={s2} icon={faUser} />
              <input className={s3} type="text" placeholder="Enter your Full Name" />
            </div>

          }


          <div className={s1}>
            <FontAwesomeIcon className={s2} icon={faEnvelope} />
            <input className={s3} type="email" placeholder="Enter your email" />
          </div>

          {action === "Log In" ?
            <div className="">
            </div>
            :
            <div className={s1}>
              <FontAwesomeIcon className={s2} icon={faIdCard} />
              <input className={s3} type="text" placeholder="Enter your university ID" />
            </div>
          }

          {action === "Log In" ?
            <div className="">
            </div>
            :
            <div className={s1}>
              <FontAwesomeIcon className={s2} icon={faListOl} />
              <input className={s3} type="text" placeholder="Enter your university Batch" />
            </div>
          }
          <div className={s1}>
            <FontAwesomeIcon className={s2} icon={faLock} />
            <input className={s3} type="password" placeholder="Enter your password" />
          </div>

          {action === "Sign Up" ?
            <div className="">
            </div> :
            <div className="flex justify-center text-gray-700 text-[18px]">
              <h3>Forgot your password?</h3>
              <a href="#"><h3 className="cursor-pointer pl-3 text-red-400"> Reset Here!</h3></a>
            </div>
          }
          <div className="flex justify-center">
            <button className={s4}>
              <h1 className="font-bold">{action}</h1>
              <FontAwesomeIcon className="h-6 w--6" icon={faPaperPlane} />
            </button>
          </div>

          <div className="flex justify-center gap-[30px] m-[30px]">


            {action === "Sign Up" ?
              <div className="">
              </div> :
              <div className="flex gap-3 items-center text-black font-bold">
                <h2>New here?</h2>
                <div className={ss1} onClick={() => {
                  setAction("Sign Up")
                }}>Sign Up</div>
              </div>
            }



            {action === "Log In" ?
              <div className="">
              </div> :
              <div className="flex gap-3 items-center text-black font-bold">
                You have Registered already?
                <div className={ss2} onClick={() => {
                  setAction("Log In")
                }}>Log In</div>
              </div>
            }



          </div>
        </div>
      </div>
    </div>
  )
}