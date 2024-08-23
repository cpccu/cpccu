import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { SlCheck } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SuccessRegi({ isSuccess }) {
  const navigate = useNavigate();

  const goLogIn = () => {
    navigate("/login");
  };

  return (
    <>
      {isSuccess && (
        <Modal
          isOpen={isSuccess}
          clName="bg-white p-6 rounded-lg shadow-lg"
          Zindex={"z-40"}
        >
          <section className="flex flex-col gap-4 items-center justify-center text-center">
            <div className="text-green-500 flex items-center justify-center">
              <SlCheck size={55} />
            </div>
            <p className="text-2xl font-semibold text-gray-900">
              Account Created
            </p>
            <p className="text-lg text-gray-700">
              Your account has been created successfully.
            </p>
            <Button
              onClick={goLogIn}
              clName="input ring-green-500 text-green-600 bg-green-200 hover:bg-green-300"
            >
              Back to Login
            </Button>
          </section>
        </Modal>
      )}
    </>
  );
}
