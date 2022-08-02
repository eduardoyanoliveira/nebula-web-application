import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./application/features/Authentication/contexts/AuthContext";
import { getTokenFromCache } from "./application/useCases/Token";
import { RoutesApp, RoutesSite } from "./routes";
import Global from "./styles/global";
import ThemeProvider from './styles/themeProvider'


function AppSetup() {
  return (
    <div>
        <BrowserRouter>
          <ThemeProvider>
            <AuthProvider>
              <Global/>
                {!getTokenFromCache.execute() 
                  ? 
                  (
                    <RoutesSite/>
            
                  ) 
                  : <RoutesApp/>
                }
            </AuthProvider>
          </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default AppSetup;
