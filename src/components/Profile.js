import React from "react";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  return (
    <div>
      {console.log("b", location.search)}
      <p>Lee la ruta actual: {location.pathname}</p>
      <p>
        Busca la variable name:{" "}
        {new URLSearchParams(location.search).get("name")}
        <br></br>
        Busca la variable nombre:{" "}
        {new URLSearchParams(location.search).get("profile")}
      </p>
      
    </div>
  );
}
export default Profile;

// div className={Styles.app}>
//         <div className={Styles.container}>
//           <div className={Styles.top}></div>
//           <div>
//             <NavBar onSearch={onSearch} />
//           </div>
//           <Routes>
//             <Route path="/" element={<Form />}></Route>
//             <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
//             <Route path="/about" element={<About />}></Route>
//             <Route path="/detail/:detailId" element={<Detail />}></Route>
//           </Routes>
//         </div>
//       </div>
