import Logo from "./../../assets/logo/cpccu.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import InputBox from "./InputBox";
import { useCallback, useEffect, useState } from "react";
import bgimg from "./../../assets/img/abc.jpg";
export default function Login() {
  const btn = `uppercase font-semibold h-12 px-1 rounded-full w-full text-sm`;

  // const [logValue, setLog] = useState(false);
  // const log = useCallback(() => {
  //   localStorage.setItem("logStatus", logValue);
  // }, [logValue]);

  // useEffect(() => {
  //   log();
  // });

  return (
    <div>
      <Link to="/">
        <button className="bg-header absolute z-50 right-[2rem] mdd:right-[6rem] mt-[5rem] flex items-center justify-center h-10 rounded-lg lg:w-[10rem] gap-3 px-3 py-2 hover:bg-headerHover trans">
          <FontAwesomeIcon
            className=" text-white font-extrabold text-2xl"
            icon={faArrowLeftLong}
          />
          <h1 className="font-bold text-white hidden md:block">Home Page</h1>
        </button>
      </Link>

      <div className={`h-svh padding flex px-3 pb-12`}>
        <main className="mx-auto lg:min-w-[30rem] lg:w-[60rem] lg:max-w-[70rem] flex flex-col gap-14 items-start justify-center padding">
          {/* logo section start */}
          <section className="flex flex-col self-center items-center justify-center gap-2">
            <img className="h-24" src={Logo} alt="Logo" />

            <h2 className="text-2xl font-custom">Welcome to</h2>
            <h1 className="text-2xl text-center font-semibold text-gray-600">
              Competitive Programming Camp City University
            </h1>
          </section>
          {/* logo section end */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6 w-full"
          >
            {/* input username start */}
            <InputBox type={"email"} title={"email"} id={"userMail"} />
            {/* input username end */}
            {/* input password start */}
            <InputBox type={"password"} title={"password"} id={"userPass"} />
            {/* input password end */}

            <section className="flex items-center justify-center gap-5 mt-5">
              <button
                className={`${btn} bg-gradient-to-r from-headerHover to-fuchsia-700 text-white hover:ring trans`}
              >
                login
              </button>
              <button
                className={`${btn} bg-gradient-to-r from-headerHover to-fuchsia-700 text-header hover:ring trans`}
              >
                <Link to="/signup">
                  <div className="bg-white rounded-full h-10 flex items-center justify-center">
                    create account
                  </div>
                </Link>
              </button>
            </section>

            <p className="text-center font-semibold mt-6 hover:underline text-header">
              Forgot your login details?
            </p>
          </form>
        </main>
        <section
          className="w-full items-center justify-center hidden lg:flex relative"
          style={{
            backgroundImage: `url(https://i.ibb.co/pwRqzpN/R-2.png)`,
            // backgroundImage: `url(https://i.ibb.co/zrBs2dz/img-e1603104491104-removebg-preview.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-3xl font-custom text-gray-500 absolute top-[50%] -left-32 -rotate-90">
            Login to Access Dashboard
          </h1>
        </section>
      </div>
    </div>
  );
}
