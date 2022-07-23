import { RoutesSite } from "./routes";
import Global from "./styles/global";
import { ThemeProvider } from './styles/themeProvider'

function AppSetup() {
  return (
    <div>
        <ThemeProvider>
            <Global/>
            <RoutesSite/>
        </ThemeProvider>
    </div>
  );
}

export default AppSetup;
