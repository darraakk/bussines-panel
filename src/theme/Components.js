const components = {
    MuiCssBaseline: {
        styleOverrides: `
        @font-face {
            font-family: iranyekan;
            font-style: normal;
            font-weight: bold;
            src: url('../fonts/eot/IRANYekanWebBold.eot');
            src: url('../fonts/eot/IRANYekanWebBold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                 url('../fonts/woff/IRANYekanWebBold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                 url('../fonts/woff2/IRANYekanWebBold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                 url('../fonts/ttf/IRANYekanWebBold.ttf') format('truetype');
        }
        
        @font-face {
            font-family: iranyekan;
            font-style: normal;
            font-weight: 100;
            src: url('../fonts/eot/IRANYekanWebThin.eot');
            src: url('../fonts/eot/IRANYekanWebThin.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                 url('../fonts/woff/IRANYekanWebThin.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                 url('../fonts/woff2/IRANYekanWebThin.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                 url('../fonts/ttf/IRANYekanWebThin.ttf') format('truetype');
        }
        
        @font-face {
            font-family: iranyekan;
            font-style: normal;
            font-weight: 300;
            src: url('../fonts/eot/IRANYekanWebLight.eot');
            src: url('../fonts/eot/IRANYekanWebLight.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                 url('../fonts/woff/IRANYekanWebLight.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                 url('../fonts/woff2/IRANYekanWebLight.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                 url('../fonts/ttf/IRANYekanWebLight.ttf') format('truetype');
        }
        
        @font-face {
            font-family: iranyekan;
            font-style: normal;
            font-weight: normal;
            src: url('../fonts/eot/IRANYekanWebRegular.eot');
            src: url('../fonts/eot/IRANYekanWebRegular.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                 url('../fonts/woff/IRANYekanWebRegular.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                 url('../fonts/woff2/IRANYekanWebRegular.woff2') format('woff2'), /* FF39+,Chrome36+, Opera24+*/
                 url('../fonts/ttf/IRANYekanWebRegular.ttf') format('truetype');
        }
        
        @font-face {
            font-family: iranyekan;
            font-style: normal;
            font-weight: 500;
            src: url('../fonts/eot/IRANYekanWebMedium.eot');
            src: url('../fonts/eot/IRANYekanWebMedium.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                 url('../fonts/woff/IRANYekanWebMedium.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                 url('../fonts/woff2/IRANYekanWebMedium.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                 url('../fonts/ttf/IRANYekanWebMedium.ttf') format('truetype');
        }
        
        @font-face {
            font-family: iranyekan;
            font-style: normal;
            font-weight: 800;
            src: url('../fonts/eot/IRANYekanWebExtraBold.eot');
            src: url('../fonts/eot/IRANYekanWebExtraBold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                 url('../fonts/woff/IRANYekanWebExtraBold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                 url('../fonts/woff2/IRANYekanWebExtraBold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                 url('../fonts/ttf/IRANYekanWebExtraBold.ttf') format('truetype');
        }
        
        @font-face {
            font-family: iranyekan;
            font-style: normal;
            font-weight: 850;
            src: url('../fonts/eot/IRANYekanWebBlack.eot');
            src: url('../fonts/eot/IRANYekanWebBlack.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                 url('../fonts/woff/IRANYekanWebBlack.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                 url('../fonts/woff2/IRANYekanWebBlack.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                 url('../fonts/ttf/IRANYekanWebBlack.ttf') format('truetype');
        }
        
        @font-face {
            font-family: iranyekan;
            font-style: normal;
            font-weight: 900;
            src: url('../fonts/eot/IRANYekanWebExtraBlack.eot');
            src: url('../fonts/eot/IRANYekanWebExtraBlack.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                 url('../fonts/woff/IRANYekanWebExtraBlack.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                 url('../fonts/woff2/IRANYekanWebExtraBlack.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                 url('../fonts/ttf/IRANYekanWebExtraBlack.ttf') format('truetype');
        }
      `
    }
};

export default components;