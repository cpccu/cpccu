import React, { useEffect, useState } from "react";
import logo from "./../../assets/logo/cpccu.png";
import loginImage from "./../../assets/img/login.svg";
import { Button, InputField, OrPartition } from "../../components/component.js";
import { RxReload } from "react-icons/rx";
import ForgotPassword from "./ForgotPassword.jsx";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";
import GoogleLogin from "./GoogleLogin.jsx";

export default function Login() {
  const {
    email,
    password,
    isShowPass,
    handleSubmit,
    setEmail,
    setPassword,
    setShowPass,
    isLoading,
    isPending,
    isSuccess,
  } = useLogin();

  const [isForgot, setForgot] = useState(false);
  const navigate = useNavigate();

  const forgotPassHandler = () => {
    setForgot(true);
  };

  const goSignUpHandler = () => {
    navigate("/signup");
  };

  return (
    <div className="width padding-x">
      <ForgotPassword isOpen={isForgot} setOpen={setForgot} />

      <div className="flex h-screen items-center justify-center">
        <section className="lg:w-1/2">
          <div className="lg:max-w-[23.5rem] xxl:max-w-[25rem] mx-auto flex flex-col gap-5 xxl:gap-7">
            <header className="flex flex-col items-start gap-5 xxl:gap-8">
              <img className="h-14 xxl:h-16" src={logo} alt="cpccu_logo" />
              <div>
                <h3 className="text-3xl xxl:text-3xl font-bold">
                  Welcome back!
                </h3>
                <h1 className="opacity-70 xxl:text-lg">
                  Competitive Programming Camp City University
                </h1>
              </div>
            </header>

            <main className="flex flex-col gap-5">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 xxl:gap-5"
              >
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isLoading || isPending}
                  required
                />
                <InputField
                  id="password"
                  label="Password"
                  type={isShowPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  disabled={isLoading || isPending}
                  required
                />
                <section className="text-sm flex justify-between items-center">
                  <div className="flex gap-1 text-sm">
                    <input
                      className="cursor-pointer"
                      id="showPassword"
                      type="checkbox"
                      checked={isShowPass}
                      onChange={(e) => setShowPass(e.target.checked)}
                    />
                    <label
                      className="cursor-pointer opacity-60"
                      htmlFor="showPassword"
                    >
                      Show password
                    </label>
                  </div>

                  <p
                    onClick={forgotPassHandler}
                    className="cursor-pointer text-login hover:underline trans"
                  >
                    Forgot password?
                  </p>
                </section>
                <Button
                  type="submit"
                  clName={
                    "bg-login hover:bg-login/95 text-white w-full rounded py-2 mt-2 font-semibold"
                  }
                  disabled={isLoading || isPending}
                >
                  {isLoading || isPending ? (
                    <div className="flex items-center justify-center gap-2 ">
                      <span className=" animate-spin">
                        <RxReload />
                      </span>
                      <span>Logging...</span>
                    </div>
                  ) : (
                    "Log in"
                  )}
                </Button>
              </form>

              <OrPartition text={"or, Login with"} />

              <section className="flex items-center justify-center">
                <GoogleLogin />
              </section>
              <p className="text-center">
                <span className="opacity-50 text-sm">
                  {" "}
                  Don't have an account?
                </span>{" "}
                <button
                  onClick={goSignUpHandler}
                  className="underline text-login"
                >
                  Register here
                </button>
              </p>
            </main>
          </div>
        </section>

        <section className="lg:w-1/2 hidden lg:block">
          <img
            className="h-full w-full object-center"
            src={loginImage}
            alt="login_image"
          />
        </section>
      </div>
    </div>
  );
}
