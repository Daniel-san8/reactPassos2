import React from "react";
import { useUi } from "./Context";

const Content = () => {
  const { dark, dadosApi } = useUi();
  console.log(dadosApi);
  return (
    <div>
      <p>{dark ? "dark" : "light"}</p>
      {dadosApi && (
        <p>
          Preferências: {dadosApi.data?.preferencias.playback},{" Qualidade:"}
          {dadosApi.data?.preferencias.qualidade},{" Volume:"}
          {dadosApi.data?.preferencias.volume}
        </p>
      )}
    </div>
  );
};

export default Content;
