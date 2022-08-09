import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../application/features/Authentication/contexts/AuthContext";
import Global from "../../styles/global";
import ThemeProvider from '../../styles/themeProvider'
import AppTemplate from "../AppTemplate";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "../../application/Infra/services/queryClient";

function Setup() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthProvider>
            <Global/>
            
            <AppTemplate/>

          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default Setup;
