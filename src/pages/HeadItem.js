import { styled } from '@mui/material/styles';
import { 
  Card,
  Typography,
  Grid
} from '@mui/material';
import Page from '../components/Page';



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
  margin: theme.spacing(2, 0, 2, 2)
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
  height: '150px'
}));


export default function Register({ step, text, count }) {

  if (count > step) {
    return (
      <Grid
        container
        item
        display='flex'
        direction='column'
        justifyContent='center'
        alignItems='center'
        xs={8}
        sx={{
          width: '100%',
          backgroundColor: '#e4e4e4',
          height: '50px',
          borderRadius: '0.8rem',
          mx: 1
        }}
      >
        <Typography
          variant='h7'
          sx={{ fontSize: '13px' }}
          align='center'
        >
          {text}
        </Typography>
      </Grid>
    );
  }

  if (count < step) {
    return (
      <Grid
        container
        item
        display='flex'
        direction='column'
        justifyContent='center'
        alignItems='center'
        xs={8}
        sx={{
          width: '100%',
          color: 'green',
          backgroundColor: '#B7E5EB',
          height: '50px',
          borderRadius: '0.8rem',
          mx: 1
        }}
      >
        <Typography
          variant='h7'
          sx={{ fontSize: '13px' }}
          align='center'
        >
          {text}
        </Typography>
      </Grid>
    );
  }
  
  return (
    <Grid
      container
      item
      display='flex'
      direction='column'
      justifyContent='center'
      alignItems='center'
      xs={8}
      sx={{
        width: '100%',
        color: 'white',
        backgroundColor: '#1D89C8',
        height: '50px',
        borderRadius: '0.8rem',
        mx: 1
      }}
    >
      <Typography
        variant='h7'
        sx={{ fontSize: '13px' }}
        align='center'
      >
        {text}
      </Typography>
    </Grid>
  );
}
