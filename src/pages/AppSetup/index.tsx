import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../application/features/Authentication/contexts/AuthContext";
import { getTokenFromCache } from "../../application/useCases/Token";
import SideNavBar from "../../components/SideNavBar";
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
                        <SideNavBar />
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
