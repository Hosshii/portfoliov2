export const FontColor = {
  Light: '#76FB5B'
}
export const FrameColor = {
  Light: '#1F4017',
  Dark: '#0E170D'
}

const _FontSize = {
  normal: '16',
  large: '20',
  xLarge: '24',
  xxLarge: '30'
}
export const FontSize = {
  title: `${_FontSize.xxLarge}px`,
  normal: `${_FontSize.normal}px`,
  subtitle: `${_FontSize.xLarge}px`,
  subsubtitle: `${_FontSize.large}px`
}

const _deviceSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${_deviceSize.mobileS})`,
  mobileM: `(min-width: ${_deviceSize.mobileM})`,
  mobileL: `(min-width: ${_deviceSize.mobileL})`,
  tablet: `(min-width: ${_deviceSize.tablet})`,
  laptop: `(min-width: ${_deviceSize.laptop})`,
  laptopL: `(min-width: ${_deviceSize.laptopL})`,
  desktop: `(min-width: ${_deviceSize.desktop})`,
  desktopL: `(min-width: ${_deviceSize.desktop})`
}
