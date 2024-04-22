import HttpClientImp from "./services/HttpClientImp";
import { ClientNavigation } from "graph-navigation-js";
import ClientSessionStorageImp from "./services/ClientSessionStorageImp";
import { ModuleContextProvider } from "./Context";
import { AppNavigation } from "./AppNavigation";

interface Props {
  httpClient: HttpClientImp;
}

export const Module = ({ httpClient }: Props) => {
  const clientSessionStorage = new ClientSessionStorageImp("module_session");
  const clientNavigation = new ClientNavigation(
    httpClient,
    clientSessionStorage
  );

  return (
    <ModuleContextProvider>
      <AppNavigation entryPoint={'first_view_step'} clientNavigation={clientNavigation} />
    </ModuleContextProvider>
  );
};
