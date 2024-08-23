import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RxReload } from "react-icons/rx";
import Logo from "./../../assets/logo/cpccu.png";
import signUp from "./../../assets/img/signUp.jpg";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import OrPartition from "../../components/OrPartition";
import { useRegistration } from "../../hooks/useRegistration";
import VerifyOTP from "./VerifyOTP";

// Input field information for each page
const inputFieldInfo = [
  [
    {
      label: "Fullname",
      id: "fullname",
      type: "text",
      placeholder: "Type your fullname",
    },
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "Type your email",
    },
  ],
  [
    {
      label: "Batch",
      id: "batch",
      type: "text",
      placeholder: "Type the Batch",
    },
    {
      label: "University ID",
      id: "uniID",
      type: "text",
      placeholder: "Type the university id",
    },
  ],
  [
    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "Type your password",
    },
    {
      label: "Confirm Password",
      id: "confirm_password",
      type: "password",
      placeholder: "Confirm your password",
    },
  ],
];

export default function SignUp() {
  const [isOpen, setOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0); // Page index
  const navigate = useNavigate();
  const {
    formValues,
    setFormValues,
    handleSubmit,
    isLoading,
    isPending,
    isSuccess,
  } = useRegistration();

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // Navigate to login page
  const goLogin = () => {
    navigate("/login");
  };

  // Handle form submission for each page step
  const handleNext = (e) => {
    e.preventDefault();
    if (pageNumber < inputFieldInfo.length - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  // Handle back button click
  const handleBack = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  // Open OTP verification modal when registration is successful
  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
    }
  }, [isSuccess]);

  return (
    <div className="width padding-x">
      {/* OTP Verification Modal */}
      <VerifyOTP isOpen={isOpen} setOpen={setOpen} mail={formValues?.email} />

      <div className="flex h-screen items-center justify-center">
        <section className="lg:w-1/2">
          <motion.div
            className="lg:max-w-[23.5rem] xxl:max-w-[25rem] mx-auto flex flex-col p-5 md:border md:rounded-xl md:shadow-xl md:shadow-login/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="flex items-center justify-center mb-2">
              <img className="h-20 md:h-16 lg:h-14" src={Logo} alt="cpccu" />
            </div>

            {/* Header */}
            <header className="flex flex-col items-center mb-4">
              <h1 className="text-2xl font-bold opacity-70">Sign Up</h1>
              <h2 className="opacity-70 xxl:text-lg text-center">
                Competitive Programming Camp City University
              </h2>
            </header>

            {/* Google Sign-Up Button */}
            <Button>Sign up with Google</Button>

            {/* Or partition */}
            <OrPartition clName="mb-3 mt-4" text="or" />

            {/* Form Inputs */}
            <main className="flex flex-col gap-5">
              <CustomInputForSignUp
                data={inputFieldInfo[pageNumber]}
                pageNumber={pageNumber}
                formValues={formValues}
                handleInputChange={handleInputChange}
                handleNext={handleNext}
                handleBack={handleBack}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                isPending={isPending}
              />
            </main>

            {/* Footer */}
            <footer className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={goLogin}
                className="text-login font-semibold hover:underline cursor-pointer"
              >
                Go to login
              </span>
            </footer>
          </motion.div>
        </section>

        {/* Sign-Up Image */}
        <section className="w-1/2 hidden lg:block">
          <img src={signUp} alt="Sign Up" />
        </section>
      </div>
    </div>
  );
}

// Custom Input Component for Sign-Up Form
const CustomInputForSignUp = ({
  data,
  pageNumber,
  formValues,
  handleInputChange,
  handleNext,
  handleBack,
  handleSubmit,
  isLoading,
  isPending,
}) => {
  return (
    <motion.form
      onSubmit={handleNext}
      className="flex flex-col gap-2 w-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Render input fields */}
      {data?.map((item, index) => (
        <InputField
          key={index}
          type={item.type}
          id={item.id}
          placeholder={item.placeholder}
          value={formValues[item.id] || ""}
          onChange={handleInputChange}
          disabled={isLoading || isPending}
          required
        />
      ))}

      {/* Navigation buttons */}
      <div
        className={`${
          pageNumber === 0 ? "justify-end" : "justify-between"
        } flex gap-5 mt-4`}
      >
        {pageNumber > 0 && (
          <Button
            clName={"w-1/2 hover:ring-login hover:text-login transition"}
            onClick={handleBack}
            disabled={isLoading || isPending}
          >
            <span className="font-semibold">Back</span>
          </Button>
        )}

        {pageNumber !== inputFieldInfo.length - 1 && (
          <Button
            clName={`${
              pageNumber === 0 ? "w-full" : "w-1/2"
            } ring-login bg-login text-white hover:text-login hover:bg-white transition`}
            type="submit"
          >
            <span className="font-semibold">Next</span>
          </Button>
        )}

        {pageNumber === inputFieldInfo.length - 1 && (
          <Button
            type="submit"
            onClick={handleSubmit}
            clName="bg-login text-white hover:bg-login/95 w-1/2"
            disabled={isLoading || isPending}
          >
            {isPending || isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <span className="animate-spin">
                  <RxReload />
                </span>
                <span>Signing up...</span>
              </div>
            ) : (
              "Sign up"
            )}
          </Button>
        )}
      </div>
    </motion.form>
  );
};
