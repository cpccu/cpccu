import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import info from "./../../../data/Committee.json";
import ProfileNotFound from "../ABOUT/ProfileItem/ProfileNotFound";
import ProfileCard from "./../ABOUT/ProfileItem/ProfileCard";

export default function Profile() {
  const [Data, setData] = useState(null);

  const { id } = useParams();

  const searchData = useCallback(() => {
    const foundData = info.find(
      (item) =>
        item.name.replace(/\s/g, "").toLowerCase() === id.toLowerCase() ||
        item.name.toLowerCase().includes(id.toLowerCase())
    );
    setData(foundData);
  }, [id]);

  useEffect(() => {
    searchData();
  }, [searchData]);

  return Data ? <ProfileCard Data={Data} /> : <ProfileNotFound id={id} />;
}
