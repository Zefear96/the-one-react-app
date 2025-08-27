import React, { useCallback, useEffect, useState } from "react"
import type { Props } from "../types/propsType"
import type { User } from "../types/userDataType"
import keycloakInstance from "../config/keycloak/keycloak";
import type { AuthContextType } from "../types/authContextType";

export const AuthContext = React.createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: Props) {
    // Keycloak состояния
    const [initialized, setInitialized] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoading, setLoading] = useState(true);

    // Пользовательские состояния
    const [user, setUser] = useState<User | null>(null);

    // Инициализация Keycloak
    useEffect(() => {
        let mounted = true;
        console.log('Starting Keycloak initialization...');

        const initKeycloak = async () => {
            try {
                const auth = await keycloakInstance.init({
                    onLoad: "check-sso",
                    silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
                    pkceMethod: 'S256',
                    checkLoginIframe: true,
                    thirdPartyCookies: false
                });

                // if (!mounted) return;

                setAuthenticated(auth);
                setInitialized(true);
                setLoading(false);

                // Очищаем параметры query, чтобы React Router правильно рендерил страницу
                if (window.location.search) {
                    const cleanUrl = window.location.origin + window.location.pathname;
                    window.history.replaceState({}, document.title, cleanUrl);
                }

                console.log('Keycloak initialized successfully, authenticated:', auth);
            } catch (error) {
                console.log('Keycloak initialization failed:', error)
                setAuthenticated(false);
            } finally {
                if (mounted) setLoading(false);
            }
        };
        initKeycloak();

        return () => {
            mounted = false;
        };

    }, [])

    // Обработка данных пользователя
    useEffect(() => {
        if (!initialized || !authenticated) {
            setUser(null);
            return
        }

        if (authenticated && keycloakInstance.tokenParsed) {
            const parsedData = keycloakInstance.tokenParsed;
            console.log('Parsed token:', parsedData);

            setUser({
                name: parsedData.name || "-",
                email: parsedData.email || "-",
                firstName: parsedData.given_name || "-",
                secondName: parsedData.family_name || "-",
                id: parsedData.sub || "-",
                roles: parsedData.roles || [],
                token: keycloakInstance.token || ""
            })
            console.log('User: ', parsedData?.name)
        } else {
            console.log("User isnt auth")
            setUser(null)
        }

        setLoading(false);
    }, [initialized, authenticated, keycloakInstance.tokenParsed]);

    const login = useCallback(async (): Promise<boolean> => {
        try {
            console.log('Attempting to login with Keycloak...');
            await keycloakInstance.login({
                redirectUri: window.location.origin + "/lk"
            });
            return true;
        } catch (err) {
            console.error("Keycloak login error:", err);
            return false;
        }
    }, []);

    const logout = useCallback(() => {
        try {
            console.log('Logging out...');
            setUser(null);
            keycloakInstance.logout({
                redirectUri: window.location.href
                // redirectUri: window.location.origin
            });
        } catch (err) {
            console.error("Keycloak logout error:", err);
        }
    }, []);


    const value: AuthContextType = {
        keycloak: keycloakInstance,
        initialized,
        authenticated,
        isLoading,
        user,
        login, logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}