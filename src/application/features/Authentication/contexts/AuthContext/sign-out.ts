export function signOut(){
    try{
        localStorage.removeItem('token');
    }catch{
        console.log('Sign out Error')
    };
};

