import { styled } from '@mui/material/styles';
import SepahBank from '../../assets/bankLogo/dark/Sepah-logo.svg';
// import MelliBank from '../../assets/bankLogo/dark/Sepah-logo.svg';
// import MellatBank from '../../assets/bankLogo/dark/Sepah-logo.svg';
// import SamanBank from '../../assets/bankLogo/dark/Sepah-logo.svg';
import EghtesadeNovinBank from '../../assets/bankLogo/dark/eghtesad novin.svg';
import MarkaziBank from '../../assets/bankLogo/dark/Markazi.svg';



const Img = styled('img')(({ theme }) => ({
    height: '60px',
    width: '70px',
    paddingLeft: '5px',
}));


const BankLogo = ({ bankName }) => {
    switch (bankName) {
        case 'SEPAH': return <Img src={SepahBank} alt='SEPAH' />
            break;
        case 'EGHTESAD_NOVIN': return <Img src={EghtesadeNovinBank} alt='SEPAH' />
            break;
        default: null
            break;
    }
    return <Img src={MarkaziBank} alt='SEPAH' />
}


const BankName = ({ bankName }) => {
    switch (bankName) {
        case 'SEPAH': return 'سپه'
            break;
        case 'MELLI': return 'ملی'
            break;
        case 'MELLAT': return 'ملت'
            break;
        case 'SAMAN': return 'سامان'
            break;
        case 'EGHTESAD_NOVIN': return 'اقتصاد نوین'
            break;
        case 'PASARGARD': return 'پاسارگاد'
            break;
        default: null
    }
    return null
}



export { BankLogo }
export { BankName }
