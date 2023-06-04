import { alpha } from '@mui/material';
import type { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material';
import { GiCancel } from 'react-icons/gi';

const { breakpoints } = createTheme();

export const baseThemeOptions: ThemeOptions = {
  breakpoints,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&:focus': {
            boxShadow: 'none !important',
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        noOptions: {
          fontSize: 14,
          letterSpacing: 0.15,
          lineHeight: 1.6,
        },
        option: {
          fontSize: 14,
          letterSpacing: 0.15,
          lineHeight: 1.6,
        },
        paper: {
          boxShadow: 'none',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
        sizeLarge: {
          height: 56,
          fontSize: 15,
        },
        sizeMedium: {
          height: 42,
          fontSize: 14,
        },
        sizeSmall: {
          height: 36,
          fontSize: 13,
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          paddingBottom: 16,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 16,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingBottom: 20,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 20,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingBottom: 16,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 16,
        },
        subheader: {
          fontSize: 14,
        },
        title: {
          fontSize: 16,
        },
      },
    },
    MuiChip: {
      defaultProps: {
        deleteIcon: <GiCancel />,
      },
      styleOverrides: {
        avatar: {
          borderRadius: 6,
        },
        root: {
          borderRadius: 6,
          fontWeight: 400,
          letterSpacing: 0,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          box-sizing: border-box;
        }

        html {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          width: 100%;
          height: 100%;
        }

        body {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
          min-height: 100%;
          width: 100%;
          height: 100%;
        }

        #root {
          height: 100%;
        }

        #__next {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }

        #nprogress {
          pointer-events: ;none;
        }

        #nprogress .bar {
          background-color: #5048E5;
          height: 3;
          left: 0;
          position: fixed;
          top: 0;
          width: 100%';
          z-index: 2000;
        }
      `,
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingBottom: 32,
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 24,
          '&>:not(:first-of-type)': {
            marginLeft: 16,
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingBottom: 8,
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 8,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 24,
          fontWeight: 600,
          paddingBottom: 24,
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 32,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: 14,
          letterSpacing: 0.15,
          lineHeight: 1.43,
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: 32,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: 8,
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        button: {
          '&:before': {
            borderRadius: '0px 2px 2px 0px',
            bottom: 0,
            content: '""',
            left: 0,
            position: 'absolute',
            top: 0,
            transform: 'scaleX(0)',
            transformOrigin: 'left center',
            transition: 'transform 0.25s',
            width: 2,
          },
          '&:active:before': {
            transform: 'scaleX(1)',
          },
        },
        dense: {
          paddingBottom: 6,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 6,
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          variant: 'body2',
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: 0.15,
          lineHeight: 1.43,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          transition: 'color 250ms',
          ':hover, &.Mui-checked:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        filled: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: 32,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          borderRadius: 48,
          height: 24,
          marginBottom: 8,
          marginLeft: 8,
          marginRight: 8,
          marginTop: 8,
          padding: 0,
          width: 44,
        },
        switchBase: {
          padding: 4,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-checked+.MuiSwitch-track': {
            opacity: 1,
          },
          '&.Mui-disabled': {
            '&+.MuiSwitch-track': {
              opacity: 1,
            },
          },
          '&.Mui-checked.Mui-disabled+.MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        track: {
          opacity: 1,
        },
        thumb: {
          height: 16,
          width: 16,
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: 0.15,
          lineHeight: 1.71,
          [breakpoints.up('sm')]: {
            marginLeft: 16,
            marginRight: 16,
            minWidth: 'fit-content',
            paddingLeft: 0,
            paddingRight: 0,
            '&:first-of-type': {
              marginLeft: 0,
            },
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '.MuiTableCell-root': {
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          ':last-of-type .MuiTableCell-root': {
            borderWidth: 0,
          },
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        size: 'small',
        siblingCount: 0,
        boundaryCount: 2,
        shape: 'rounded',
        variant: 'outlined',
        showLastButton: true,
        showFirstButton: true,
      },
      styleOverrides: {
        ul: {
          gap: '4px',
          '& .MuiPaginationItem-icon': {
            mx: '2px',
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          marginBottom: 4,
          position: 'relative',
          transform: 'none',

          '&.MuiInputLabel-sizeSmall': {
            marginBottom: 2,
            fontSize: 14,
            display: 'block',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          height: 42,
          fontSize: 16,
          borderColor: alpha('#000', 0.23),
          ...(ownerState.size === 'small' && {
            height: 36,
            fontSize: 14,
          }),
          ...(ownerState.size === 'large' && {
            height: 56,
            fontSize: 16,
          }),

          transition: theme.transitions.create(['border-color', 'box-shadow']),
          '&:before': {
            borderBottom: 'none !important',
          },
          '&:after': {
            borderBottom: 'none !important',
          },
          '&:hover': {
            borderColor: 'black',
            backgroundColor: 'inherit !important',
          },
          '& .MuiInputAdornment-root.MuiInputAdornment-positionStart.MuiInputAdornment-root:not(.MuiInputAdornment-hiddenLabel)':
            {
              marginTop: 0,
              marginLeft: theme.spacing(1.5),
            },
          '& input': {
            paddingTop: 0,
            paddingBottom: 0,
          },
          '&.Mui-focused': {
            borderRadius: '6px',
            borderWidth: '2px',
            backgroundColor: 'inherit !important',
            borderColor: theme.palette.primary.light,
            boxShadow: `none !important`,

            '& input': {
              margin: '0 -1px',
            },
            '& .MuiInputAdornment-root.MuiInputAdornment-positionStart.MuiInputAdornment-root:not(.MuiInputAdornment-hiddenLabel)':
              {
                marginLeft: `calc(${theme.spacing(1.5)} - 1px)`,
                marginRight: `calc(${theme.spacing(1)} + 1px)`,
              },
          },
          '&.Mui-error': {
            borderColor: theme.palette.error.main,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.background.paper,
            boxShadow: 'none',
            borderColor: alpha('#D6DBE1', 0.5),

            '& input': {
              backgroundColor: theme.palette.background.paper,
            },
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            marginBottom: 4,
            position: 'relative',
            transform: 'none',

            '&.MuiInputLabel-sizeSmall': {
              marginBottom: 2,
              fontSize: 14,
              display: 'block',
            },
          },

          '& .MuiInputBase-root': {
            backgroundColor: 'white',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '6px',
            padding: 0,
            overflow: 'hidden',
            '&.Mui-disabled': {
              backgroundColor: 'white',
            },
          },
        },
      },
      defaultProps: {
        variant: 'filled',
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: 'ProximaNova, sans-serif',
    h1: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: '72px',
      [breakpoints.down('md')]: {
        fontSize: 36,
        lineHeight: '56px',
      },
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: '56px',
      [breakpoints.down('md')]: {
        fontSize: 30,
        lineHeight: '46px',
      },
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: '48px',
      [breakpoints.down('md')]: {
        fontSize: 26,
        lineHeight: '40px',
      },
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '36px',
      [breakpoints.up('md')]: {
        fontSize: 22,
        lineHeight: '32px',
      },
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
      ineHeight: '28px',
    },
    h6: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '28px',
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '24px',
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '28px',
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '24px',
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '14px',
      textTransform: 'none',
    },
    overline: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '16px',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '16px',
    },
  },
};
