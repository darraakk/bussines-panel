import { styled } from '@mui/material/styles';
import {
  Card,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Page from '../components/Page';
import BusinessInfo from './InfoComps/BusinessInfo';
import CardInfo from './InfoComps/CardInfo';
import Documents from './InfoComps/Documents';
import PersonalInfo from './InfoComps/PersonalInfo';
import { useEffectAsync } from '../reactHelper';
import OkIcon from '../assets/nanino/Group 1551.svg';



const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));


const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));


const ContentStyle = styled('div')(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '1.5rem',
  padding: '1rem',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'start',
}));


const Img = styled('img')(({ theme }) => ({
  height: '80px',
  marginTop: '5px',
}));


export default function Register({ step, setStep, followCode }) {

  const [stateList, setStateList] = useState([]);

  useEffectAsync(async () => {
    try {
      const response = await axios.get(
        '/api/base-information/list/2/1/?isEnabled=true', {
          baseURL: process.env.REACT_APP_URL
        }
      )
      setStateList(response.data)
    } catch (error) {
      console.log(error)
    }
  }, []);

  if (step === 1) {
    return <PersonalInfo stateList={stateList}/>;
  }
  if (step === 2) {
    return <BusinessInfo stateList={stateList}/>;
  }
  if (step === 3) {
    return <Documents />;
  }
  if (step === 4) {
    return <CardInfo />;
  }

  return (
    <Grid
      container
      item
      display='flex'
      direction='column'
      justifyContent='center'
      alignItems='center'
      xs={12}
    >

      <Img src={OkIcon} alt='nanino' />

      <Typography
        sx={{
          fontSize: '12px',
          width: '100%',
          color: 'green',
          borderRadius: '0.5rem',
          mt: 2,
        }}
        align='center'
      >
        ثبت نام شما با موفقیت انجام شد
      </Typography>
      
      <Typography
        sx={{
          fontSize: '12px',
          width: '100%',
          borderRadius: '0.5rem',
          mt: 2,
        }}
        align='center'
      >
        کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
      </Typography>
      
      <Typography
        sx={{
          fontSize: '12px',
          width: '100%',
          borderRadius: '0.5rem',
          mt: 2,
        }}
        align='center'
      >
        کد پیگیری:{followCode}
      </Typography>
      
      <Button
        variant='outlined'
        color='secondary'
        sx={{ mt: 2, mb: 5, width: '200px' }}
        onClick={() => {
          localStorage.removeItem('nanino-business-id');
          window.location.reload()
        }}
      >
        بازگشت
      </Button>

    </Grid>
  );
}
