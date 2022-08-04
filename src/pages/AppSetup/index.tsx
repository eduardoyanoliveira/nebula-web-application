import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../application/features/Authentication/contexts/AuthContext";
import { getTokenFromCache } from "../../application/useCases/Token";
import MenuNav from "../../components/MenuNav";
import { RoutesApp, RoutesSite } from "../../routes";
import Global from "../../styles/global";
import ThemeProvider from '../../styles/themeProvider'
import { AppPage, BackgroundContainer } from "./app-styles";


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
                  : 
                  (
                    <BackgroundContainer>
                      <AppPage>
                        <MenuNav />
                          <RoutesApp/>
                      </AppPage>
                    </BackgroundContainer>
                  )
                }
            </AuthProvider>
          </ThemeProvider>
        </BrowserRouter>
    </div>
  );
};

export default AppSetup;
