import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "../state-manager/store";
import { appTheme } from "./app-theme";
import { IGlobalTheme, ThemeProps } from "./types";

const AppThemeProvider = ({ children }: ThemeProps) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const globalTheme: IGlobalTheme = {
    ...appTheme[mode],
    mode,
  };

  return <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
