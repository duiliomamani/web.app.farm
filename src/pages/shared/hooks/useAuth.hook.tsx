import { useState, createContext, useContext } from "react";
import { IdentityService } from "../../../services/auth/identity.service";
import { ToasterNotification } from "../../components/common/toaster.component";
import { useLocalStorage } from "./useLocalStorage.hook";
import React from "react";

interface AuthProps {
    isAuthenticated: boolean,
    user: any,
    token: string,
    isLoading: boolean,
    signin: (payload: any, returnTo: string) => void;
    signup: (payload: any, returnTo: string) => void;
    signout: () => void;
    passwordless: (payload: any, returnTo: string) => void;
}

const useProvideAuth = () => {
    const [data, setData] = useLocalStorage("auth-react-data", null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const signin = async (payload: any, returnTo: string) => {
        setIsLoading(true)
        try {
            let result = await IdentityService.Authenticate(payload);
            if (result) {
                setData(result.data);
                // ToasterNotification.ShowOKMessage('Inicio de sesión exitoso.', 'Ejecución correcta.', 'top-end');
            }
        } catch (ex: any) {
            ToasterNotification.ShowERRORMessage(ex.message, 'Ocurrio un error.', 'top-end');
        } finally {
            setIsLoading(false);
        }

        if (!isLoading && data) {
            window.location.assign(returnTo);
        }
    };

    const signout = () => {
        // remove user from local storage to log user out
        setData(null);
    };

    const passwordless = (payload: any, returnTo: string) => {
        return;
    };


    const signup = (payload: any, returnTo: string) => {
        return;
    };

    return{
        isLoading,
        get user() { return data?.user },
        get token() { return data?.token },
        get isAuthenticated() { return !!data?.user },
        signin,
        signout,
        signup,
        passwordless
    };
};

const AuthContext = createContext<AuthProps | undefined>(undefined);

export function ProvideAuth({ children }: any) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};
