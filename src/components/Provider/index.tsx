import React, { createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};

export const AllContext = createContext<string | undefined | any>("");

const Provider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState("");
  const ctxValue: any = {
    themeMode: themeMode,
    setThemeMode: setThemeMode,
  };

  return <AllContext.Provider value={ctxValue}>{children}</AllContext.Provider>;
};

export default Provider;
