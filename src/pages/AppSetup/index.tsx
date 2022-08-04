import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../application/features/Authentication/contexts/AuthContext";
import { useMediaQuery } from "../../application/hooks/useMediaQuery";
import { getTokenFromCache } from "../../application/useCases/Token";
import { ScreenSizes } from "../../application/utils/screen/sizes";
import MenuNav from "../../components/MenuNav";
import { RoutesApp, RoutesSite } from "../../routes";
import Global from "../../styles/global";
import ThemeProvider from '../../styles/themeProvider'
import { AppHeader, App, AppCenterContainer, BackgroundContainer } from "./app-styles";


function AppSetup() {

  const isDesktop = useMediaQuery(`(min-width: ${ScreenSizes.desktop})`);

  return (
    <div>
        <BrowserRouter>
          <ThemeProvider>
            <AuthProvider>
              <Global/>
                { getTokenFromCache.execute().isFailure 
                  ? 
                  (
                    <RoutesSite/>
                  ) 
                  : 
                  (
                    <BackgroundContainer>
                      <App>
                        <MenuNav />
                        <AppCenterContainer>
                          {
                            isDesktop &&  <AppHeader/>
                          }
                          <RoutesApp/>
                        </AppCenterContainer>
                      </App>
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
