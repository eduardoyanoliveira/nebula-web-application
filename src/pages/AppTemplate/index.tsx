import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromCache } from "../../application/useCases/Token";
import MenuNav from "../../components/MenuNav";
import { Router } from "../../router";
import { AppHeader, App, AppCenterContainer, BackgroundContainer } from "./styles";


function AppTemplate() {

    const navigate = useNavigate();

    useEffect(() => {
        if(getTokenFromCache.execute().isFailure){
            navigate('/');
        };
    },[navigate]);
 
    const route = <Router isLogged={getTokenFromCache.execute().isSuccess}/>;

    return (

        <>
            {
                getTokenFromCache.execute().isSuccess ? (
                    <BackgroundContainer date-testid='app-background-container'>
                        <App date-testid='app-container'>
                            <MenuNav date-testid='app-menu'/>
                            <AppCenterContainer date-testid='app-center-container'>
                                <AppHeader/>
                                
                                { route }
                            </AppCenterContainer>
                        </App>
                    </BackgroundContainer>
                ) : (
                    <>
                        {route}
                    </>
                )
            }
        </>
    );
};

export default AppTemplate;