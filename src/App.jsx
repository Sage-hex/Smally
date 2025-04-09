import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import router from "./route/router";
import Aos from "aos";
import "aos/dist/aos.css";
// import Preloader from "./utils/Preloader";



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 2000, once:true, offset:50,mirror:false, });

    // Simulate loading (replace with actual logic if needed)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // return (
  //   <>
  //     {loading ? (
  //       <Preloader />
  //     ) : (
  //         <RouterProvider router={router} />
  //     )}
  //   </>
  // );

  return <RouterProvider router={router}/>
};

export default App;