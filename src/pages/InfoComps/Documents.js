import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  MenuItem,
  Divider,
  useMediaQuery,
  useTheme,
  Modal
} from '@mui/material';;
import { useDispatch, useSelector } from 'react-redux';
import { sessionActions } from '../../store';
import Ok from '../../assets/nanino/check-ok.jpg';
import NotOk from '../../assets/nanino/check-notok.jpg';



const Img = styled('img')(({ theme }) => ({
  height: '12px',
  display: 'inline',
  margin: '0 5px 0 15px',
  padding: 0
}));


const ImgDuc = styled('img')(({ theme }) => ({
  height: '200px',
  minWidth: '150px',
  width: '100%',
}));


const ImgDuct = styled('img')(({ theme }) => ({}));


const DucItem = ({ duc }) => {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  return (
    <Grid
      container
      item
      xs='auto'
      sx={{
        borderRadius: '1rem',
        p: 1,
        m: 1,
        bgcolor: '#eee',
        height: '232px',
      }}
    >

      <Grid
        item
        xs={12}
        sx={{ width: '40px'}}
      >
      
        <ImgDuc
          src={duc.imgData}
          alt={'nanino'}
          onClick={() => setOpen(true)}
        />

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box
            sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            }}
          >
            <ImgDuct src={duc.imgData} alt={'nanino'}/>
          </Box>
        </Modal>

      </Grid>

      <Grid
        container
        item
        display='flex'
        justifyContent='space-between'
      >

        <Grid
          item
          sx={{ fontSize: '10px', mt: 1, mr: 1 }}
        >
          {duc.ducType}
        </Grid>

        <Grid
          item
          sx={{ fontSize: '2px' }}
        >
          <Button
            fullWidth
            color='error'
            onClick={() => dispatch(sessionActions.deleteDuc(duc.ducType))}
            sx={{
              fontSize: '10px',
              height: '6px',
              width: '4px',
              mt: 1,
              ml: 1
            }}
          >
            حذف
          </Button>
        </Grid>

      </Grid>

    </Grid>
  );
};


export default function Register() {

  const [ducType, setDucType] = useState();
  const [imgData, setImgData] = useState();
  const [fileName, setFileName] = useState();

  const hiddenFileInput = useRef()

  const theme = useTheme();

  const tablet = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();

  const ducs = useSelector((state) => state.session.duc);
  const data = useSelector((state) => state.session);

  const getBase64 = (imgName) => {
    const file = imgName.target.files[0]
    setFileName(file.name)
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImgData(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  return (
    <Grid
      container
      item
      display='flex'
      direction={ tablet ? 'column' : 'row' }
      justifyContent='center'
      alignItems='start'
      sx={{ flexWrap: 'wrap' }}
      xs={12}
    >

      <Grid
        container
        item
        display='flex'
        direction='row'
        justifyContent='start'
        sx={{ flexWrap: 'wrap' }}
        xs={9}
      >

      <Grid
        item
        xs={4}
        sx={{ p:1, mt: 4 }}
      >
       <TextField
          select
          fullWidth
          color='secondary'
          id='standard-number'
          label='نوع مدرک:'
          type='number'
          variant='filled'
          size='small'
          value={data.ducType}
          onChange={(event) => setDucType(event.target.value)}
          InputLabelProps={{
            shrink: false,
          }}
          >
          {!data.licenseImage &&
            <MenuItem
              key={1}
              value={'پروانه کسب'}
              sx={{ color: '#000', fontSize: '12px' }}
            >
              پروانه کسب
            </MenuItem>
          }
          {!data.idCardImage &&
            <MenuItem
              key={2}
              value={'صفحه اول شناسنامه'}
              sx={{ color: '#000', fontSize: '12px' }}
            >
              صفحه اول شناسنامه صاحب کسب و کار
            </MenuItem>
          }
          {!data.nationalCardImage &&
            <MenuItem
              key={2}
              value={'تصویر روی کارت ملی'}
              sx={{ color: '#000', fontSize: '12px' }}
            >
              تصویر روی کارت ملی صاحب کسب و کار
            </MenuItem>
          }
          {!data.billImage &&
            <MenuItem
              key={2}
              value={'قبض آب یا برق'}
              sx={{ color: '#000', fontSize: '12px' }}
            >
              قبض آب یا برق
            </MenuItem>
          }
        </TextField>
      </Grid>

      <Grid
        item
        xs={5}
        sx={{ p:1, mt: 4 }}
      >

        <input
          type='file'
          ref={hiddenFileInput}
          onChange={e => getBase64(e)}
          style={{ display: 'none' }}
        />

        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='آپلود فایل:'
          type='text'
          variant='filled'
          size='small'
          value={fileName}
          onChange={(event) => setDucType(event.target.value)}
          onClick={() => hiddenFileInput.current.click()}
          InputLabelProps={{
            shrink: false,
          }}
        />

      </Grid>

      <Grid
        item
        display='flex'
        justifyContent='center'
        alignItems='end'
        sx={{ p: 1 }}
        xs={3}
      >
        <Button
          fullWidth
          sx={{ height: '47px' }}
          variant='outlined'
          color='secondary'
          disabled={!ducType}
          onClick={() => {
            dispatch(sessionActions.updateDuc({ ducType, imgData }));
            setDucType()
          }}
        >
          افزودن
        </Button>
      </Grid>

      <Grid
        container
        item
        xs={12}
        sx={{ my: 3, pl: 1 }}
      >

        {!ducs.length == 0 && (
          <Divider
            textAlign='left'
            sx={{ color: '#000'}}
          >
            <Typography
              sx={{
                fontSize: '15px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              لیست مدارک
            </Typography>
          </Divider>
        )}

        {!ducs.length == 0 && (
          <Grid
            container
            item
            display='flex'
            xs= {12} 
            sx={{
              flexWrap: 'wrap',
              overflowY: 'auto',
              maxHeight: '253px',
              mt: 4
            }}
          >
            {ducs.map((duc, index) => (
              <DucItem index={index} duc={duc} />
            ))}
          </Grid>
        )}

      </Grid>

    </Grid>

    <Grid
        container
        item
        display='flex'
        direction='column'
        justifyContent='start'
        xs={3}
        sx={{
          fontSize: '5px',
          border: '2px solid #999',
          borderRadius: '0.5rem',
          borderStyle: 'dotted',
          padding: '0.5rem',
          mt: '36px'
        }}
      >

        <Typography
          sx={{
            fontSize: '15px',
            fontWeight: '700',
            display: 'flex',
            justifyContent: 'center',
            mb: 1
          }}
        >
          لیست مدارک قابل ارائه
        </Typography>
        
        <Typography
          sx={{ fontSize: '12px' }}
        >
          {data.licenseImage ? <Img src={Ok} alt='check' /> : <Img src={NotOk} alt='check' />}
          پروانه کسب
        </Typography>

        <Typography
          sx={{ fontSize: '12px' }}
        >
          {data.idCardImage ? <Img src={Ok} alt='check' /> : <Img src={NotOk} alt='check' />}
          صفحه اول شناسنامه صاحب کسب و کار
        </Typography>

        <Typography
          sx={{ fontSize: '12px' }}
        >
          {data.nationalCardImage ? <Img src={Ok} alt='check' /> : <Img src={NotOk} alt='check' />}
          تصویر روی کارت ملی صاحب کسب و کار
        </Typography>

        <Typography
          sx={{ fontSize: '12px' }}
        >
          {data.billImage ? <Img src={Ok} alt='check' /> : <Img src={NotOk} alt='check' />}
          قبض آب یا برق
        </Typography>

      </Grid>

    </Grid >
  );
}
