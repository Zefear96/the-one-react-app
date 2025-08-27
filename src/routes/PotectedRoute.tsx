import type { Props } from "../types/propsType";
import Loader from "../components/dataDisplay/Loader";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";



export default function ProtectedRoute({ children }: Props) {

  const { user, initialized, authenticated, isLoading } = useAuth();

  // useEffect(() => {
  //     if (initialized && !authenticated) {
  //       console.log('User not authenticated, triggering Keycloak login...');

  //       keycloak?.login({
  //         redirectUri: window.location.origin + "/lk"
  //       });
  //     }
  //   }, [initialized, authenticated, keycloak]);

  //   // Пока Keycloak не инициализировался — просто ждём
  //   if (!initialized test) {
  //     console.log('Keycloak not initialized, showing loading...');
  //     return <Loader/>;
  //   }
  //   if (!authenticated) {
  //     keycloak?.login({ redirectUri: window.location.origin + "/lk" });
  //     return <Loader />; // пока Keycloak редиректит
  //   }

  // Если уже инициализирован, но не авторизован — редиректим
  // if (!authenticated) {
  //   console.log('User not authenticated, redirecting to Keycloak login...');
  //   return <Navigate to="/" replace />;
  // }

  if (!initialized || isLoading) return <Loader />;

  if (!authenticated) {
    // Если юзер не авторизован, можно редиректить на корень или показывать страницу логина
    return <Navigate to="/" replace />;
  }

  // ждём пока user реально проставится
  if (!user) {
    return <Loader />;
  }

  return children;
}