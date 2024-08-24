import React from "react";
import { useUi } from "./Context";

const Content = () => {
  const { dark, dadosApi } = useUi();
  if (dadosApi.data === null) return null;
  const { playback, qualidade, volume } = dadosApi.data.preferencias;
  console.log(dadosApi.loading);
  return (
    <div>
      {dadosApi.loading && <p>Carregando</p>}
      <p>{dark ? "dark" : "light"}</p>
      {dadosApi && (
        <p>
          Preferências: {playback},{" Qualidade:"}
          {qualidade},{" Volume:"}
          {volume}
        </p>
      )}
    </div>
  );
};

export default Content;
