import type { ThemeOptions } from '@mui/material';
import { alpha } from '@mui/material/styles';

// Colors

const branding = {
  red: '#FF1720',
};

const neutral = {
  50: '#F5F5F5',
  100: '#F2F4F7',
  200: '#D0D0D0',
  300: '#B8B8B8',
  400: '#A1A1A1',
  500: '#898989',
  600: '#717171',
  700: '#5A5A5A',
  800: '#424242',
  900: '#2B2B2B',
};

const background = {
  default: '#FFFFFF',
  paper: '#FFFFFF',
};

const divider = neutral['200'];

const primary = {
  contrast: '#FFFFFF',
  dark: '#453CCC',
  light: '#8780FF',
  main: '#564BFF',
  50: '#F5F5FF',
  100: '#E7E6FF',
  200: '#D4D1FF',
  300: '#C0BDFF',
  400: '#AEA8FF',
  500: '#8981FF',
  600: '#675DFF',
  700: '#453CCC',
};

const secondary = {
  contrast: '#FFFFFF',
  dark: '#1D2939',
  light: '#667085 ',
  main: '#344054',
};

const success = {
  contrast: '#FFFFFF',
  dark: '#1B5E20',
  light: '#4CAF50',
  main: '#2E7D32',
};

const error = {
  contrast: '#FFFFFF',
  dark: '#C62828',
  light: '#EF5350',
  main: '#D32F2F',
};

const warning = {
  contrast: '#FFFFFF',
  dark: '#E65100',
  light: '#FF9800',
  main: '#ED6C02',
};

const info = {
  contrast: '#FFFFFF',
  dark: '#01579B',
  light: '#03A9F4',
  main: '#0288D1',
};

const text = {
  primary: '#131313',
  secondary: '#898989',
};

const outlinedRoundImage = {
  primary: {
    outer: primary.light,
    inner: primary.main,
  },
  secondary: {
    outer: secondary.main,
    inner: neutral['300'],
  },
  error: {
    outer: error.light,
    inner: error.main,
  },
  warning: {
    outer: warning.light,
    inner: warning.main,
  },
  info: {
    outer: info.light,
    inner: info.main,
  },
  success: {
    outer: '#C1F1DB',
    inner: success.main,
  },
};

export const lightThemeOptions: ThemeOptions = {
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          border: `1px solid ${divider}`,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral['200'],
          color: text.secondary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ':focus': {
            boxShadow: `${alpha(primary.main, 0.25)} 0 0 0 0.2rem`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${divider}`,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: text.secondary,
          ':hover:not(.Mui-checked)': {
            color: text.primary,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        avatar: {
          color: neutral['700'],
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        button: {
          '&:before': {
            backgroundColor: primary.main,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          border: `1px solid ${neutral['300']}`,
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        checkedIcon: (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" rx="9" fill="currentColor" />
            <rect x="2" y="2" width="14" height="14" rx="7" fill="currentColor" />
            <rect x="5" y="5" width="8" height="8" rx="4" fill={background.paper} />
          </svg>
        ),
        icon: (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" rx="9" fill="currentColor" />
            <rect x="2" y="2" width="14" height="14" rx="7" fill={background.paper} />
          </svg>
        ),
      },
      styleOverrides: {
        root: {
          color: text.secondary,
          ':hover:not(.Mui-checked)': {
            color: text.primary,
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: neutral['100'],
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          ':focus-within': {
            boxShadow: `${alpha(primary.main, 0.25)} 0 0 0 0.2rem`,
          },
        },
        switchBase: {
          '&.Mui-checked+.MuiSwitch-track': {
            backgroundColor: success.main,
          },
          '&.Mui-disabled': {
            '&+.MuiSwitch-track': {
              backgroundColor: alpha(text.primary, 0.08),
            },
            '.MuiSwitch-thumb': {
              backgroundColor: alpha(text.primary, 0.26),
            },
          },
          '&.Mui-checked.Mui-disabled+.MuiSwitch-track': {
            backgroundColor: success.main,
          },
        },
        track: {
          backgroundColor: neutral['500'],
        },
        thumb: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral['50'],
          borderBottom: `1px solid ${divider}`,
          '.MuiTableCell-root': {
            color: text.secondary,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: neutral['50'],
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderColor: divider,
          '& .MuiSvgIcon-root': {
            color: alpha(text.primary, 0.38),
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          '& .Mui-selected': {
            color: '#FFFFFF',
            background: '#212831',
            '&:hover': {
              background: '#000000',
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .Mui-disabled': {
            '& input': {
              backgroundColor: neutral['300'],
            },
            '& fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: alpha('#D6DBE1', 0.5),
            },
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: '#667085',
      disabled: alpha(text.primary, 0.26),
      disabledBackground: alpha(text.primary, 0.08),
      focus: alpha(text.primary, 0.12),
      hover: alpha(text.primary, 0.06),
      selected: alpha(text.primary, 0.08),
    },
    background,
    divider,
    error,
    info,
    mode: 'light',
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
    branding,
    outlinedRoundImage,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(9, 30, 66, 0.12)',
    '0px 1px 3px rgba(9, 30, 66, 0.12)',
    '0px 2px 4px rgba(9, 30, 66, 0.08)',
    '0px 3px 5px rgba(9, 30, 66, 0.08)',
    '0px 3px 5px -1px rgba(9, 30, 66, 0.08)',
    '0px 5px 7px rgba(9, 30, 66, 0.08)',
    '0px 6px 8px rgba(9, 30, 66, 0.08)',
    '0px 8px 12px rgba(9, 30, 66, 0.08)',
    '0px 9px 14px rgba(9, 30, 66, 0.08)',
    '0px 10px 16px rgba(9, 30, 66, 0.08)',
    '0px 11px 18px rgba(9, 30, 66, 0.08)',
    '0px 12px 20px rgba(9, 30, 66, 0.08)',
    '0px 13px 22px rgba(9, 30, 66, 0.08)',
    '0px 14px 24px rgba(9, 30, 66, 0.08)',
    '0px 15px 26px rgba(9, 30, 66, 0.08)',
    '0px 18px 28px rgba(9, 30, 66, 0.08)',
    '0px 20px 30px rgba(9, 30, 66, 0.08)',
    '0px 22px 32px rgba(9, 30, 66, 0.08)',
    '0px 24px 34px rgba(9, 30, 66, 0.08)',
    '0px 26px 36px rgba(9, 30, 66, 0.08)',
    '0px 28px 38px rgba(9, 30, 66, 0.08)',
    '0px 30px 40px rgba(9, 30, 66, 0.08)',
    '0px 32px 42px rgba(9, 30, 66, 0.08)',
    '0px 36px 46px rgba(9, 30, 66, 0.12)',
  ],
};
