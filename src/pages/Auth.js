import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import Grow from '@mui/material/Grow';
import Snackbar from '@mui/material/Snackbar';
import { LoadingButton } from '@mui/lab';
import { useState, useEffect } from 'react';
import Page from '../components/Page';
import axios from 'axios';
import Logo from '../assets/nanino/Group 1940.svg';
import Auth from '../assets/nanino/Auth.png';



const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));


const ContentStyle = styled('div')(({ theme }) => ({
  background: '#ffffff',
  borderRadius: '1.5rem',
  padding: '1rem',
  display: 'flex',
  // minHeight: '80vh',
  minWidth: '70vw',
  flexDirection: 'column',
  justifyContent: 'start',
}));


const Img = styled('img')(({ theme }) => ({
  marginTop: '20px',
  height: '100px',
}));


const AuthImg = styled('img')(({ theme }) => ({
  margin: '50px',
  maxHeight: '400px',
}));


export default function Register() {

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState();
  const [nationalCode, setNationalCode] = useState();

  const id = localStorage.getItem('nanino-business-id');
  const okCondition = localStorage.getItem('nanino-business-ok-condition');

  const [activationKey, setActivationKey] = useState(1111);
  const [message, setMessage] = useState();
  const [openSnack, setOpenSnack] = useState(false)
  const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   if (!okCondition) {
  //     navigate('/')
  //   }
  //   if (id) {
  //     navigate('/main')
  //   }
  // }, []);


  // const preRegister = async () => {
  //   try {
  //     setLoader(true)
  //     const response = await axios.post(
  //       `/api/business/pre-register/${mobile}/${nationalCode}`, {
  //         baseURL: process.env.REACT_APP_URL
  //       }
  //     )
  //     if (response.status === 200) {
  //       localStorage.setItem('nanino-business-id', response.data)
  //       setStep(2)
  //       console.log(step)
  //     }
  //     setLoader(false)
  //   } catch (error) {
  //     setMessage(error?.response?.data?.title)
  //     setOpenSnack(true)
  //     setLoader(false)
  //   }
  // }

  // const check = async () => {
  //   try {
  //     setLoader(true)
  //     const response = await axios.post(
  //       `/api/business/check-key/${id}/${activationKey}`, {
  //         baseURL: process.env.REACT_APP_URL
  //       }
  //     )
  //     console.log(response)
  //     if (response.status === 200) {
  //       navigate('/main')
  //     }
  //     setLoader(false)
  //   } catch (error) {
  //     setLoader(false)
  //   }
  // }

  return (
    <RootStyle
      title='سامانه ثبت اصناف'
    >

      <Snackbar
        open={openSnack}
        onClose={() => setOpenSnack(false)}
        autoHideDuration={3000}
        TransitionComponent={Grow}
        message={message}
        key={'error-snack'}
      />

      <Grid
        container
        direction='column'
        justifyContent='center'
        sx={{ px: '150px' }}
      >

        <Grid
          container
          item
          display='flex'
          direction='column'
          justifyContent='center'
        >

          <Img src={Logo} alt='nanino' />

          <Grid item display='flex' justifyContent='center'>
            <Typography
              variant='h7'
              sx={{ color: 'white', px: 1, mt: 2, mb: 5, width: '300px' }}
              align='center'
            >
              ثبت نام کسب و کارها و نهادها در سامانه نانینو جهت مصرف های تجاری
            </Typography>
          </Grid>

        </Grid>

        <Grid item>
          {step == 2 ? (
            <ContentStyle>
              <Grid
                container
                display='flex'
                justifyContent='center'
                alignItems='center'
                direction='row'
              >

                <Grid
                  container
                  item
                  display='flex'
                  justifyContent='center'
                  direction='column'
                  sx={{ px: 5 }}
                  xs={6}
                >

                  <Typography
                    variant='h7'
                    sx={{ px: 1, fontSize: '20px', fontWeight: 800 }}
                    align='center'
                  >
                    ثبت نام
                  </Typography>

                  <Typography
                    variant='h7'
                    sx={{ px: 1, mt: 2, fontSize: '15px' }}
                    align='center'
                  >
                    تایید شماره موبایل
                  </Typography>

                  <TextField
                    fullWidth
                    disabled
                    color='secondary'
                    id='standard-disabled'
                    label='شماره موبایل:'
                    type='number'
                    variant='filled'
                    size='small'
                    sx={{ my: 5 }}
                    textAlign='center'
                    value={mobile}
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />

                  <TextField
                    fullWidth
                    disabled
                    color='secondary'
                    id='standard-disabled'
                    label='کد ملی:'
                    type='number'
                    variant='filled'
                    size='small'
                    sx={{ my: 2 }}
                    value={nationalCode}
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />

                  <TextField
                    fullWidth
                    color='secondary'
                    id='standard-number'
                    label='کد تایید ارسال شده را وارد کنید:'
                    type='number'
                    variant='filled'
                    size='small'
                    sx={{ my: 5 }}
                    value={activationKey}
                    onChange={
                      (event) => setActivationKey(event.target.value)
                    }
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />

                  <LoadingButton
                    loading={loader}
                    variant='contained'
                    onClick={
                      // check
                      navigate('/main')
                    }
                    sx={{ mb: 3 }}
                  >
                    تایید و ادامه
                  </LoadingButton>

                  <Button
                    onClick={() => setStep(1)}
                  >
                    بازگشت
                  </Button>

                </Grid>

                <Grid
                  item
                  display='flex'
                  justifyContent='center'
                  xs={6}
                >
                  <AuthImg src={Auth} alt='Auth' />
                </Grid>

              </Grid>
            </ContentStyle>
          ) : (
            <ContentStyle>
              <Grid
                container
                display='flex'
                justifyContent='center'
                alignItems='center'
                direction='row'
              >

                <Grid
                  container
                  item
                  display='flex'
                  justifyContent='center'
                  direction='column'
                  sx={{ px: 5 }}
                  xs={6}
                >

                  <Typography
                    variant='h7'
                    sx={{ px: 1, fontSize: '17px', fontWeight: 800 }}
                    align='center'
                  >
                    ثبت نام
                  </Typography>

                  <Typography
                    variant='h7'
                    sx={{ px: 1, mt: 2, fontSize: '16px' }}
                    align='center'
                  >
                    جهت ثبت نام، شماره موبایل و کد ملی خود را وارد کنید.
                  </Typography>

                  <TextField
                    fullWidth
                    color='secondary'
                    id='standard-number'
                    helperText={
                      !mobile || mobile?.length != 11 &&
                      'شماره موبایل باید ۱۱ رقم باشد'
                    }
                    label='شماره موبایل:'
                    type='number'
                    variant='filled'
                    size='small'
                    sx={{ my: 5 }}
                    value={mobile}
                    onChange={
                      (event) => event.target.value.length <= 11 &&
                      setMobile(event.target.value.toString())
                    }
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />

                  <TextField
                    fullWidth
                    color='secondary'
                    id='standard-number'
                    helperText={
                      !nationalCode || nationalCode?.length != 10 &&
                      'کد ملی باید ۱۰ رقم باشد'
                    }
                    label='کد ملی:'
                    type='number'
                    variant='filled'
                    size='small'
                    sx={{ my: 2 }}
                    value={nationalCode}
                    onChange={
                      (event) => event.target.value.length <= 10 &&
                      setNationalCode(event.target.value.toString())
                    }
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />

                  <TextField
                    fullWidth
                    color='secondary'
                    id='standard-number'
                    label='حروف مندرج در تصویر:'
                    variant='filled'
                    size='small'
                    sx={{ my: 5 }}
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />

                  <LoadingButton
                    loading={loader}
                    variant='contained' sx={{ mb: 2 }}
                    // disabled={
                    //   !nationalCode || !mobile || mobile?.length != 11 || nationalCode?.length != 10
                    // }
                    onClick={
                      // preRegister
                      setStep(2)
                    }
                    >
                      ثبت و ادامه
                    </LoadingButton>

                </Grid>

                <Grid item display='flex' justifyContent='center' xs={6}>
                  <AuthImg src={Auth} alt='Auth' />
                </Grid>

              </Grid>
            </ContentStyle>
          )}
        </Grid>

        <Grid item display='flex' justifyContent='center'>
          <Typography
            variant='h7'
            sx={{ color: 'white', px: 1, mt: 2, mb: 5, fontSize: '10px' }}
            align='center'
          >
            کلیه حقوق سایت برای شرکت فراپردازان آروند امید محفوظ است
          </Typography>
        </Grid>

      </Grid>
      
    </RootStyle>
  );
}
