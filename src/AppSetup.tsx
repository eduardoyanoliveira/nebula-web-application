import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./application/features/Authentication/contexts/AuthContext";
import { RoutesSite } from "./routes";
import Global from "./styles/global";
import ThemeProvider from './styles/themeProvider'

function AppSetup() {
  return (
    <div>
        <BrowserRouter>
          <ThemeProvider>
            <AuthProvider>
              <Global/>
              <RoutesSite/>
            </AuthProvider>
          </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default AppSetup;
