import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromCache } from "../../application/useCases/Token";
import AppHeader from "../../components/AppHeader";
import MenuNav from "../../components/MenuNav";
import { Router } from "../../router";
import { App, AppCenterContainer, BackgroundContainer, Content } from "./styles";


function AppTemplate() {

    const navigate = useNavigate();

    useEffect(() => {
        if(getTokenFromCache.execute().isFailure){
            console.log('Error')
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
                                
                                <Content>
                                    { route }
                                </Content>
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