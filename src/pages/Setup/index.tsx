import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../application/features/Authentication/contexts/AuthContext";
import Global from "../../styles/global";
import ThemeProvider from '../../styles/themeProvider'
import AppTemplate from "../AppTemplate";


function Setup() {

  return (

    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Global/>
          
          <AppTemplate/>

        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>

  );
};

export default Setup;
