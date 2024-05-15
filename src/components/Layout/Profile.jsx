import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import info from "./../../../data/Committee.json";
import ProfileNotFound from "../ABOUT/ProfileItem/ProfileNotFound";
import ProfileCard from "./../ABOUT/ProfileItem/ProfileCard";

export default function Profile({ ID }) {
  const [Data, setData] = useState(null);

  const { id } = useParams();

  const searchData = useCallback(() => {
    const foundData = info.find(
      (item) => item.name.replace(/\s/g, "").toLowerCase() === (ID || id)
    );
    setData(foundData);
  }, [ID, id]);

  useEffect(() => {
    searchData();
  }, [searchData]);

  return Data ? (
    <ProfileCard Data={Data} />
  ) : (
    <ProfileNotFound ID={ID} id={id} />
  );
}
