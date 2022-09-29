import { useContext } from 'react'
import { IoMdExit } from 'react-icons/io'
import UserPhoto from '../../User/UserPhoto'
import { HeaderMenu, Logout } from './styles'
import ToggleInputWithFunction from '../../Inputs/ToggleInput/WithFunction';
import { useNavigate } from 'react-router-dom';
import { getUserCredentials } from '../../../application/useCases/UserCredentials';
import { ThemeContext } from '../../../styles/themeProvider';
import { AuthContext } from '../../../application/features/Authentication/contexts/AuthContext';

function AppHeaderMenu() {

    const navigate = useNavigate();

    const credentialsResponse = getUserCredentials.execute();

    if(credentialsResponse.isFailure){
        navigate('/');
    };

    const user = credentialsResponse.getValue();


    const { toggleTheme } = useContext(ThemeContext);

    const { signOut } = useContext(AuthContext);

    const handleLogout = () => {
        signOut.execute();
        window.location.reload();
    };

    return (
        <HeaderMenu>
            <ToggleInputWithFunction 
                margin='0 20px 0 0' 
                onClick={toggleTheme}
            />
            <UserPhoto 
                photoUrl={user.photo as string} 
                alt={user.username as string}
                size='40px'
            />
            <Logout onClick={handleLogout}>
                <IoMdExit/>
            </Logout>
        </HeaderMenu>
    )
};

export default AppHeaderMenu;