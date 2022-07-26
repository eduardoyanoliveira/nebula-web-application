import { AuthProvider } from "./application/features/Authentication/contexts/AuthContext";
import { RoutesSite } from "./routes";
import Global from "./styles/global";
import ThemeProvider from './styles/themeProvider'

function AppSetup() {
  return (
    <div>
        <ThemeProvider>
          <AuthProvider>
            <Global/>
            <RoutesSite/>
          </AuthProvider>
        </ThemeProvider>
    </div>
  );
}

export default AppSetup;
