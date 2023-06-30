import { styled } from '@mui/material/styles';
import {
  Card,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Body from './Body';
import HeadItem from './HeadItem';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'jalali-moment';
import Page from '../components/Page';
import Logo from '../assets/nanino/Group 1940.svg';



const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
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
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center'
}));


const Img = styled('img')(({ theme }) => ({
  marginTop: '20px',
  height: '100px',
}));


export default function Register() {

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loader, setLoader] = useState(false);
  const [followCode, setFollowCode] = useState();

  const data = useSelector((state) => state.session);

  const id = localStorage.getItem('nanino-business-id');

  // useEffect(() => {
  //   if (!id) {
  //     navigate('/auth')
  //   }
  // }, []);

  // const register = async () => {
  //   if (step > 3) {
  //     try {
  //       setLoader(true)
  //       const response = await axios.post('/api/business/register',
  //         {
  //           'id': id,
  //           'firstName': data.firstName,
  //           'lastName': data.lastName,
  //           'nationalCode': data.nationalCode,
  //           'idCode': data.idCode,
  //           'birthDate': moment.from(data.birthDate, 'YYYY/MM/DD').format('YYYY-MM-DDTHH:mm:ss.sZ'),
  //           'registerPlace': data.registerPlace,
  //           'mobile': data.mobile,
  //           'phoneNumber': data.phoneNumber,
  //           'stateId': data.stateId,
  //           'cityId': data.cityId,
  //           'address': data.address,
  //           'name': data.name,
  //           'businessType': data.businessType,
  //           'branchType': data.branchType,
  //           'licenseNumber': data.licenseNumber,
  //           'licenseDate': moment.from(data.licenseDate, 'YYYY/MM/DD').format('YYYY-MM-DDTHH:mm:ss.ssZ'),
  //           'activity': data.activity,
  //           'postalCode': data.postalCode,
  //           'businessPhoneNumber': data.businessPhoneNumber,
  //           'businessStateId': data.businessStateId,
  //           'businessCityId': data.businessCityId,
  //           'businessAddress': data.businessAddress,
  //           'licenseImage': data.licenseImage,
  //           'idCardImage': data.idCardImage,
  //           'nationalCardImage': data.nationalCardImage,
  //           'billImage': data.billImage,
  //           'cards': data.card
  //         },
  //         {
  //           baseURL: process.env.REACT_APP_URL
  //         })
  //       setStep(step + 1)
  //       setFollowCode(response.data)
  //       setLoader(false)
  //     } catch (error) {
  //         console.log(error)
  //         setLoader(false)
  //     }
  //   }
  // };

  return (
    <RootStyle title='سامانه ثبت اصناف'>

      <Grid
        container
        item
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{ width: '100%' }}
      >

        <Grid
          container
          item
          display='flex'
          direction='column'
          justifyContent='center'
        >

          <Img src={Logo} alt='nanino' />

          <Grid
            item
            display='flex'
            justifyContent='center'
          >
            <Typography
              variant='h7'
              sx={{ color: 'white', px: 1, mt: 2, mb: 5, width: '300px' }}
              align='center'
            >
              ثبت نام کسب و کارها و نهادها در سامانه نانینو جهت مصرف های تجاری
            </Typography>
          </Grid>

        </Grid>

        <Grid 
          item
        >
          <ContentStyle>

            <Grid
              item
              display='flex'
              justifyContent='center'
              alignItems='center'
              xs={12}
              sx={{ mt: 2, mb: 3, width: '100%' }}
            >

              <HeadItem step={step} text='ورود اطلاعات اولیه' count='1' />
              <HeadItem step={step} text='ورود اطلاعات کسب و کار' count='2' />
              <HeadItem step={step} text='آپلود مدارک' count='3' />
              <HeadItem step={step} text='اطلاعات کارت' count='4' />
              <HeadItem step={step} text='پایان' count='5' />
            
            </Grid>

            <Grid
              container
              display='flex'
              justifyContent='start'
              alignItems='start'
              sx={{ minHeight: '200px', width: '70vw' }}
            >
              <Body
                step={step}
                setStep={setStep}
                followCode={followCode}
              />
            </Grid>

            {step < 5 && (
              <Grid
                container
                display='flex'
                justifyContent='end'
                alignItems='center'
                sx={{ px: 1, my: 4 }}
              >

                <Button
                  sx={{ mx: 2, width: '200px', color: '#000' }}
                  onClick={() => setStep(step - 1)}
                  disabled={step < 2}
                >
                  مرحله قبل
                </Button>

                <LoadingButton
                  loading={loader}
                  variant='contained'
                  sx={{ mx: 2, width: '200px' }}
                  onClick={() => {
                    // register(); if (step != 4) {setStep(step + 1)}
                    setStep(step + 1)
                  }}
                  // disabled={
                  //   step != 4 
                  //   ? 
                  //   step != 3 
                  //   ? 
                  //   step != 2 
                  //   ? 
                  //   data.mobile?.length != 11 ||
                  //   data.nationalCode?.length != 10 ||
                  //   !data.firstName ||
                  //   !data.lastName ||
                  //   !data.nationalCode ||
                  //   !data.idCode ||
                  //   !data.birthDate ||
                  //   !data.registerPlace ||
                  //   !data.mobile ||
                  //   !data.phoneNumber ||
                  //   !data.stateId ||
                  //   !data.cityId ||
                  //   !data.address  
                  //   :
                  //   data.postalCode?.length != 10 ||
                  //   !data.name ||
                  //   !data.businessType ||
                  //   !data.branchType ||
                  //   !data.licenseNumber ||
                  //   !data.licenseDate ||
                  //   !data.activity ||
                  //   !data.postalCode ||
                  //   !data.businessPhoneNumber ||
                  //   !data.businessStateId ||
                  //   !data.businessCityId ||
                  //   !data.businessAddress  
                  //   :
                  //   !data.licenseImage ||
                  //   !data.idCardImage ||
                  //   !data.nationalCardImage ||
                  //   !data.billImage  
                  //   :
                  //   data.card.length == 0
                  // } 
                >
                  ثبت و ادامه
                </LoadingButton>

              </Grid>
            )}

          </ContentStyle>
        </Grid>

        <Grid
          item
          display='flex'
          justifyContent='center'
        >
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
