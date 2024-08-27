import React, { useEffect, useState } from "react";
import Modal from "../components/Modal"; // Assuming you have a Modal component
import { TfiClose } from "react-icons/tfi";
import { useErrorContext } from "../Context/Error.context";

export default function ErrorModal() {
  const { isAnyError, anyErrorMessage, resetError } = useErrorContext();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isAnyError);
  }, [isAnyError]);

  const closeError = () => {
    resetError(); // Resets the error in context
    setOpen(false); // Closes the modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeError}
      clName="min-w-[15rem] max-w-[20rem] p-5 z-50"
      Zindex="z-50"
    >
      <section className="flex flex-col items-center justify-center gap-3 text-center">
        <div className="text-red-500 bg-red-200 rounded-full p-3">
          <TfiClose size={24} />
        </div>

        <div>
          <h3 className="text-lg uppercase font-semibold">Error</h3>
          <p className="text-sm text-gray-700">{anyErrorMessage}</p>
        </div>

        <button
          onClick={closeError}
          className="text-red-500 hover:text-white ring-1 ring-red-500 mt-2 py-1 px-2 rounded hover:bg-red-300 trans"
        >
          OK
        </button>
      </section>
    </Modal>
  );
}
