import committee from "./../../../../data/Committee.json";
import alumni from "./../../../../data/Alumni.json";
import AboutPage from "./../../ABOUT/AboutPage";

export default function Member() {
  const Data = [...committee, ...alumni];

  return <AboutPage Data={Data} />;
}
