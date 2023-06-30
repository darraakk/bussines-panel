export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled }
          }
        },
        input: {
         textAlign: 'center',
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56]
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          backgroundColor: theme.palette.grey[500_12],
          '&:hover': {
            backgroundColor: theme.palette.grey[500_16]
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        input: {
          padding: '10px',
        },
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56]
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '13px 14px'
        },
        root: {
          '&.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[500_32]
          },
          '&.Mui-disabled': {
            '&.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#000',
          // position: 'relative',
          left: 'auto',
          right: '15px',
          top: '-40px',
          '&.Mui-disabled': {
          color: '#000',
          }
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          position:'absolute',
          '&:before': {
            width: 0
          }
        }
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&.MuiSelect-icon': {
            position: 'relative',
            right: '-7px'
          }
        }
      },
    },
  };
}
