interface IColorVariants {
  white: string;
  primary: string;
  primaryReverse: string;
  secondary: string;
  gray: string;
  success: string;
  danger: string;
  orange: string;
  black: string;
  border: string;
}

interface IShadowVariants {
  sm: string;
  md: string;
  lg: string;
}

type ThemeOb = {
  mode: string;
  shadow: IShadowVariants;
  colors: IColorVariants;
};

interface Theme {
  light: ThemeOb;
  dark: ThemeOb;
}

interface ThemeProps {
  children: React.ReactNode;
}

type ThemeVariant = Theme["light" | "dark"];

interface IGlobalTheme extends ThemeVariant {
  mode: "dark" | "light";
}


export type { IGlobalTheme, Theme, ThemeProps };

