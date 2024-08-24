import React, { PropsWithChildren } from "react";
import useFetch from "./useFetch";

type IUIContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  dadosApi: {
    data: Data | null;
    loading: boolean;
    error: Error | null;
  };
};

interface Data {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
}

const UIContext = React.createContext<IUIContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UIContext);
  if (context === null)
    throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const UIContextProvider = ({ children }: PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);

  const api = "https://data.origamid.dev/usuarios/1";

  const dadosApi = useFetch<Data>(api);

  return (
    <UIContext.Provider value={{ dark, setDark, dadosApi }}>
      {children}
    </UIContext.Provider>
  );
};
