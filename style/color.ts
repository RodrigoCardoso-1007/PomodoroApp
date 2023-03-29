
const colors = {
    primary: {
        10: '#FD863F',
        30: '#E36039',
        50: '#FA5A4B',
        70: '#E3395D',
        90: '#FD3FC7',
    },
    secondary: {
        10: '#FB9F96',
        30: '#E3947D',
        50: '#FDB68B',
        70: '#E37D93',
        90: '#FD8BDC',
    },
    tertiary: {
        10: '#87624A',
        20: '#916050',
        50: '#7A4E49',
        70: '#91505A',
        90: '#874A72',
    },
    neutral: {
        10: '#101A23',
        30: '#3F474D',
        40: '#5C6770',
        80: '#D1DAE0',
        90: '#E1E6EA',
        95: '#F1F2F3',
    },    
    error: {
        10: '#470A00',
        30: '#921B07',
        50: '#BF5240',
        70: '#F28573',
        90: '#FFDCD6',
      },
      info: {
        10: '#3F1C00',
        30: '#B95F00',
        50: '#FF952B',
        70: '#F0B275',
        90: '#FFE3C7',
      },
      success: {
        10: '#003309',
        30: '#008026',
        50: '#33CC54',
        70: '#85E098',
        90: '#D6F4DC',
      },
      base: {
        10: '#FFFFFF',
        90: '#000000'
      }
    
}

export const lightTheme = {
    primary: {
        light: colors.primary[10],
        default: colors.primary[50],
        dark: colors.primary[90],
    },
    secondary: {
        light: colors.secondary[10],
        default: colors.secondary[50],
        dark: colors.secondary[90],
    },
    tertiary: {
        light: colors.tertiary[10],
        default: colors.tertiary[50],
        dark: colors.tertiary[90],
    },
    surface: {
        default: colors.neutral[90],
        darker: colors.neutral[80],
        light: colors.neutral[95],
    },
    onSurface: {
        default: colors.neutral[30],
        darker: colors.neutral[10],
        light: colors.neutral[40],
    },
    info: {
        default: colors.info[10],
        darker: colors.info[50],
        light: colors.info[90],
    },
    error: {
        default: colors.error[10],
        darker: colors.error[50],
        light: colors.error[90],
    },
    success: {
        default: colors.success[10],
        darker: colors.success[50],
        light: colors.success[90],
    },
    base: {
        default: colors.base[10],
        contrast: colors.base[90],
    }
}
