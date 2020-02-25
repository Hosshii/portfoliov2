var _FontSize = {
  normal: '18',
  large: '20',
  xLarge: '26',
  xxLarge: '30'
}
var FontSize = {
  title: `${_FontSize.xxLarge}px`,
  normal: `${_FontSize.normal}px`,
  subtitle: `${_FontSize.xLarge}px`,
  subsubtitle: `${_FontSize.large}px`
}

export const init = () => {
  console.log('init')
  document.addEventListener('DOMContentLoaded', function() {
    // @media screen and (max-width: 780px) と同じ
    console.log('dom loaded')
    var mql = window.matchMedia(`screen and ${device.laptop}`)

    function checkBreakPoint(mql: MediaQueryListEvent | MediaQueryList) {
      console.log('breakpoint ')
      if (mql.matches) {
        // pc向け
        console.log('pc')
        _FontSize = {
          normal: '18',
          large: '20',
          xLarge: '26',
          xxLarge: '30'
        }
        console.log(FontSize)
      } else {
        // すまほ向け
        console.log('sp')
        _FontSize = {
          normal: '16',
          large: '20',
          xLarge: '24',
          xxLarge: '24'
        }
        console.log(FontSize)
      }
      FontSize = {
        title: `${_FontSize.xxLarge}px`,
        normal: `${_FontSize.normal}px`,
        subtitle: `${_FontSize.xLarge}px`,
        subsubtitle: `${_FontSize.large}px`
      }
    }

    // ブレイクポイントの瞬間に発火
    mql.addListener(checkBreakPoint)

    // 初回チェック
    checkBreakPoint(mql)
  })
}

export const FontColor = {
  Light: '#76FB5B'
}
export const FrameColor = {
  Light: '#1F4017',
  Dark: '#0E170D',
  Back: '#090B0A'
}

export { FontSize }

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
export const url = {
  github: 'https://github.com/Hosshii',
  twitter: 'https://twitter.com/hosshii4'
}

// var checkBreakPoint: (this: MediaQueryList, ev: MediaQueryListEvent) => any
