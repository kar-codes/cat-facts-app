import type { Direction, Theme, ThemeOptions } from '@mui/material';
import { createTheme as createMuiTheme } from '@mui/material';

import { baseThemeOptions } from './presets/base';
import { darkThemeOptions } from './presets/dark';
import { lightThemeOptions } from './presets/light';

interface OutlinedRoundImage {
  primary: {
    outer: string;
    inner: string;
  };
  secondary: {
    outer: string;
    inner: string;
  };
  error: {
    outer: string;
    inner: string;
  };
  warning: {
    outer: string;
    inner: string;
  };
  info: {
    outer: string;
    inner: string;
  };
  success: {
    outer: string;
    inner: string;
  };
}

interface Neutral {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface BrandingColors {
  red: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral?: Neutral;
    branding?: BrandingColors;
    outlinedRoundImage?: OutlinedRoundImage;
  }

  interface PaletteOptions {
    neutral?: Neutral;
    branding?: BrandingColors;
    outlinedRoundImage?: OutlinedRoundImage;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/Select' {
  interface SelectPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/Switch' {
  interface SwitchPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsSizeOverrides {
    large: true;
  }
}

interface ThemeConfig {
  direction?: Direction;
  mode?: 'light' | 'dark';
  customThemeOptions?: ThemeOptions;
}

export const createTheme = (config?: ThemeConfig): Theme => {
  return createMuiTheme(
    baseThemeOptions,
    config?.customThemeOptions
      ? config.customThemeOptions
      : config?.mode === 'dark'
      ? darkThemeOptions
      : lightThemeOptions,
    {
      direction: config?.direction,
    },
  );
};
