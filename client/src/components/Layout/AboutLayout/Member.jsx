import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiGet } from "../../../utils/apiAxios.util";
import AboutPage from "../../ABOUT/AboutPage";
import Spinner from "../../Spinner";

export default function Member() {
  const [member, setMember] = useState([]);

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: async () => apiGet("/api/users/member"),
    onSuccess: (data) => {
      // Assuming `data.data` is the correct path where the member data is located
      setMember(data.data || []); // Default to an empty array if data is undefined or null
    },
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <AboutPage Data={member} />; // Pass the member data as `Data`
}
