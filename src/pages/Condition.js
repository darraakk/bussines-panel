import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Card,
  Typography,
  Grid,
  Checkbox,
  Button,
} from '@mui/material';
import { useState,useEffect } from 'react';
import Page from '../components/Page';
import Logo from '../assets/nanino/Group 1940.svg';



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
  width: '80vw',
  flexDirection: 'column',
  justifyContent: 'center',
}));


const Img = styled('img')(({ theme }) => ({
  marginTop: '20px',
  height: '100px',
}));


export default function Register() {

  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const okCondition = localStorage.getItem('nanino-business-ok-condition');

  useEffect(() => {
    if (okCondition) {
      navigate('/auth')
    }
  }, []);

  const change = () => {
    navigate('auth')
    localStorage.setItem('nanino-business-ok-condition', true)
  }

  return (
    <RootStyle title='سامانه ثبت اصناف'>

      <Grid
        container
        item
        display='flex'
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{ flexWrap: 'wrap' }}
      >

        <Img src={Logo} alt='nanino' />
        
        <Typography
          variant='h7'
          align='center'
          sx={{
            color: 'white',
            px: 1,
            mt: 2,
            mb: 5,
            width: '300px'
          }}
        >
          ثبت نام کسب و کارها و نهادها در سامانه نانینو جهت مصرف های تجاری
        </Typography>
        
        <ContentStyle>

          <Grid
            item
            display='flex'
            justifyContent='center'
          >
            <Typography
              variant='h5'
              sx={{ color: '#000', px: 1, mt: 2 }}
              align='center'
            >
              شرایط و ضوابط
            </Typography>
          </Grid>

          <Grid
            container
            item
            display='flex'
            direction='column'
            justifyContent='start'
            alignItems='start'
            sx={{ flexWrap: 'wrap' }}
          >

            <Typography
              variant='h6'
              sx={{
                color: '#000',
                px: 2,
                mt: 2,
                fontSize: '15px'
              }}
              align='center'
            >
              شرایط استفاده
            </Typography>
            
            <Typography
              textAlign='justify'
              sx={{
                color: '#000',
                px: 2,
                fontSize: '10px'
              }}
              align='right'
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.
            </Typography>

            <Typography
              variant='h6'
              sx={{
                color: '#000',
                px: 2,
                mt: 2,
                fontSize: '15px'
              }}
              align='center'
            >
              افراد واجد شرایط
            </Typography>
            
            <Typography
              textAlign='justify'
              sx={{
                color: '#000',
                px: 2,
                fontSize: '10px'
              }}
              align='right'
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Typography>

            <Typography
              variant='h6'
              sx={{
                color: '#000',
                px: 2,
                mt: 2,
                fontSize: '15px'
              }}
              align='center'
            >
              حقوق مصرف کننده
            </Typography>
            
            <Typography
              textAlign='justify'
              sx={{
                color: '#000',
                px: 2,
                fontSize: '10px'
              }}
              align='right'
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Typography>

            <Typography
              variant='h6'
              sx={{
                color: '#000',
                px: 2,
                mt: 2,
                fontSize: '15px'
              }}
              align='center'
            >
              مراحل ثبت نام
            </Typography>
            
            <Typography
              textAlign='justify'
              sx={{
                color: '#000',
                px: 2,
                fontSize: '10px'
              }}
              align='right'
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Typography>

            <Grid 
              container
              display='flex'
              justifyContent='space-between'
              sx={{ my: 4 }}
            >

              <Grid
                item
                display='flex'
                justifyContent='start'
                alignItems='center'
                sx={{ px: 1 }}
              >
                
                <Checkbox
                  size='SMALL'
                  onChange={() => setChecked(!checked)} disabled={checked}
                />
                
                <Typography
                  sx={{ color: '#000', fontSize: '15px' }}
                  align='right'
                >
                  شرایط و ضوابط را قبول دارم و به آن پایبندم
                </Typography>
              
              </Grid>
              
              <Grid
                item
                display='flex'
                justifyContent='start'
                alignItems='center'
                sx={{ px: 2 }}
              >

                <Button
                  variant='contained'
                  disabled={!checked}
                  sx={{ px: 7, width: '200px' }}
                  onClick={change}
                >
                  ثبت و ادامه
                </Button>
              
              </Grid>
            
            </Grid>
          
          </Grid>

        </ContentStyle>

        <Typography
          variant='h7'
          sx={{
            color: 'white',
            px: 1,
            mt: 2,
            mb: 5,
            fontSize: '10px'
          }}
          align='center'
        >
          کلیه حقوق سایت برای شرکت فراپردازان آروند امید محفوظ است
        </Typography>
      
      </Grid>

    </RootStyle>
  );
}
