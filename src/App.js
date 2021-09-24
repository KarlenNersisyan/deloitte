// import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";
// import { getCategories, getCoreFields } from "./service/service";

function App() {
  // const [categories, setCategories] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   getCoreFields().then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <>
      {/* <Header /> */}
      {/* <Menu /> */}
      <List />
    </>
  );
}

export default App;
