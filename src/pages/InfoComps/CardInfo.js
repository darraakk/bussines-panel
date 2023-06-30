import {
  Typography,
  Grid,
  Button,
  TextField,
  MenuItem,
  Divider,
  useMediaQuery,
  useTheme,
  InputAdornment
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sessionActions } from '../../store';
import { BankLogo, BankName } from '../helper/BankInfo';
import { BANK_NAME } from '../helper/Data';



const CardItem = ({ card }) => {

  const dispatch = useDispatch();

  return (
    <Grid
      container
      item
      display='flex'
      direction='row'
      justifyContent='start'
      alignItems='start'
      // md={3}
      // sm={6}
      xs={4}
      sx={{
        borderRadius: '1rem',
        border: '5px solid white',
        p: 1,
        bgcolor: '#eee',
        height: '90px',
      }}
    >

      <Grid
        container
        item xs='auto'
      >
        <BankLogo bankName={card?.bankName}  />
      </Grid>

      <Divider orientation='vertical' flexItem></Divider>
      
      <Grid
        container
        item
        xs={9}
        sx={{ p: 1 }}
      >

        <Grid
          container
          item
          display='flex'
          justifyContent='space-between'
        >
          
          <Grid
            item
            xs={7}
            sx={{ fontSize: '10px', pt: 1 }}
          >
            کارت بانکی <BankName bankName={card?.bankName} />
          </Grid>
          
          <Grid
            item
            sx={{ fontSize: '2px' }}
          >
            <Button
              fullWidth
              color='error'
              onClick={() => dispatch(sessionActions.deleteCard(card.shebaCode))}
              sx={{ fontSize: '10px', height: '6px', width: '5px' }}
            >
              حذف
            </Button>
          </Grid>

        </Grid>

        <Grid
          item
          sx={{ fontSize: '10px' }}
          xs={12}
        >
          شماره شبا: IR{card?.shebaCode}
        </Grid>
        
        <Grid
          item
          sx={{ fontSize: '10px' }}
        >
          شماره حساب: {card?.number}
        </Grid>

      </Grid>

    </Grid>
  );
};


export default function Register() {

  const theme = useTheme();

  const tablet = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();

  const cards = useSelector((state) => state.session.card);
  const data = useSelector((state) => state.session);

  return (
    <Grid
      container
      item
      display='column'
      direction='row'
      justifyContent='start'
      // alignItems='center'
      xs={12}
    >

      {!cards.length == 0 && (
        <Divider textAlign='left'>
          <Typography
            sx={{
              fontSize: '12px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            لیست کارتها
          </Typography>
        </Divider>
      )}

      {!cards.length == 0 && (
        <Grid
          container
          display='flex'
          sx={{
            flexWrap: 'wrap',
            overflowY: 'auto',
            maxHeight: '150px',
            mt: 2
          }}
        >
          {cards.map((card, index) => (
            <CardItem index={index} card={card} />
          ))}
        </Grid>
      )}

      <Grid
        container
        item
        xs={12}
        sx={{ py: 3 }}
      >
        <Divider textAlign='left' flexItem={true}>
          <Typography
            sx={{
              fontSize: '12px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            افزودن کارت
          </Typography>
        </Divider>
      </Grid>

      <Grid
        container
        item
        display='flex'
        direction={tablet ? 'column' : 'row'}
        justifyContent='center'
        alignItems='start'
        xs={12}
        sx={{ flexWrap: 'wrap', mb: 3 }}
      >

        <Grid
          item
          xs={3}
          sx={{ p: 1, mt: 4 }}
        >
          <TextField
            select
            fullWidth
            color='secondary'
            id='standard-number'
            label='بانک:'
            type='text'
            variant='filled'
            size='small'
            value={data.bankName}
            onChange={(event) => {
              dispatch(
                sessionActions.updateData({
                  type: 'bankName',
                  data: event.target.value,
                })
              )
            }}
            InputLabelProps={{
              shrink: false,
            }}
          >
            {BANK_NAME.map((stateItem, index) => (
              <MenuItem
                key={stateItem.id}
                value={stateItem.value}
                onClick={() => dispatch(
                  sessionActions.updateData({
                    type: 'bankName',
                    data: stateItem.value,
                  })
                )}
                sx={{ color: '#000', fontSize: '12px' }}>
                {stateItem.lable}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{ p: 1, mt: 4 }}
        >
          <TextField
            fullWidth
            color='secondary'
            id='standard-number'
            label='شماره حساب:'
            helperText={
              !data.number || data.number?.length != 16 && 'شماره حساب باید ۱۶ رقم باشد'
            }
            type='text'
            variant='filled'
            size='small'
            value={data.number}
            onChange={(event) => { event.target.value.length <= 16 &&
              dispatch(
                sessionActions.updateData({
                  type: 'number',
                  data:  event.target.value.toString(),
                })
              )
            }}
            InputLabelProps={{
              shrink: false,
            }}
          />
        </Grid>
        
        <Grid
          item
          xs={4}
          sx={{ p: 1, mt: 4 }}
        >
          <TextField
            fullWidth
            color='secondary'
            id='standard-number'
            label='شماره شبا:'
            type='number'
            variant='filled'
            size='small'
            value={data.shebaCode}
            onChange={(event) => {
              dispatch(
                sessionActions.updateData({
                  type: 'shebaCode',
                  data: event.target.value.toString(),
                })
              )
            }}
            InputLabelProps={{
              shrink: false,
            }}
            InputProps={{
              endAdornment: <InputAdornment sx={{ ml: 2 }}>IR</InputAdornment>,
            }}
          />
        </Grid>
        
        <Grid
          item
          display='flex'
          justifyContent='center'
          alignItems='end'
          sx={{ p: 1, mt: 4 }}
          xs={2}
        >
          <Button
            fullWidth
            sx={{ height: '47px' }}
            variant='outlined'
            color='secondary'
            onClick={() => {
              dispatch(
                sessionActions.updateCard({
                  bankName: data.bankName,
                  number: data.number,
                  shebaCode: data.shebaCode
                })
              );
              dispatch(
                sessionActions.updateData({
                  type: 'number',
                  data: "",
                })
              );
              dispatch(
                sessionActions.updateData({
                  type: 'shebaCode',
                  data: "",
                })
              );
             
            }
            }
            disabled={
              !data.bankName || !data.number || !data.shebaCode || data.number?.length != 16
            }
          >
            افزودن
          </Button>
        </Grid>

      </Grid>
      
    </Grid>
  );
}
