import {
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
  MenuItem
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { useEffectAsync } from '../../reactHelper';
import { sessionActions } from '../../store';
import axios from 'axios'



export default function Register({ stateList }) {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.session);

  const theme = useTheme();

  const tablet = useMediaQuery(theme.breakpoints.down('sm'))

  const [stateLoading, setStateLoading] = useState(false);
  const [cityList, setCityList] = useState([]);

  useEffectAsync(async () => {
    setStateLoading(false)
    try {
      const response = await axios.get(
        `/api/base-information/list/3/${data.stateId}/?isEnabled=true`, {
          baseURL: process.env.REACT_APP_URL
        }
      )
      setCityList(response.data)
      setStateLoading(true)
    } catch (error) {
      console.log(error)
    }
  }, [data.stateId]);

  return (
    <Grid
      container
      item
      display='flex'
      direction={ tablet ? 'column' : 'row' }
      justifyContent='center'
      alignItems='start'
      xs={12}
      sx={{ flexWrap: 'wrap' }}
    >

      <Grid
        item
        xs={3}
        sx={{ p: 1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='نام:'
          type='text'
          variant='filled'
          size='small'
          value={data.firstName}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'firstName',
                data: event.target.value,
              })
            )
          }
          InputLabelProps={{
            shrink: false,
          }}
        />
      </Grid>

      <Grid
        item
        xs={3}
        sx={{ p:1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='نام خانوادگی:'
          type='text'
          variant='filled'
          size='small'
          value={data.lastName}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'lastName',
                data: event.target.value,
              })
            )
          }
          InputLabelProps={{
            shrink: false,
          }}
        />
      </Grid>
      
      <Grid
        item
        xs={3}
        sx={{ p:1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='کد ملی:'
          helperText={
            !data.nationalCode || data.nationalCode?.length != 10 &&
            'کد ملی باید ۱۰ رقم باشد'
          }
          type='text'
          variant='filled'
          size='small'
          value={data.nationalCode}
          onChange={(event) => event.target.value.length <= 10 &&
            dispatch(
              sessionActions.updateData({
                type: 'nationalCode',
                data: event.target.value,
              })
            )
          }
          InputLabelProps={{
            shrink: false,
          }}
        />
      </Grid>
      
      <Grid
        item
        xs={3}
        sx={{ p:1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='شماره شناسنامه:'
          type='text'
          variant='filled'
          size='small'
          value={data.idCode}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'idCode',
                data: event.target.value,
              })
            )
          }
          InputLabelProps={{
            shrink: false,
          }}
        />
      </Grid>
      
      <Grid
        item
        xs={3}
        sx={{ p:1, mt: 4 }}
      >
        <LocalizationProvider dateAdapter={AdapterJalali}>

          <DatePicker
            mask='____/__/__'
            value={data.birthDate}
            components={{
            OpenPickerIcon: CalendarMonthIcon,
            LeftArrowIcon: ArrowRightIcon,
            RightArrowIcon: ArrowLeftIcon
            }}
            onChange={(newValue) =>
              dispatch(
                sessionActions.updateData({
                  type: 'birthDate',
                  data: newValue,
                })
              )
            } renderInput={(params) =>
            <TextField {...params}
              fullWidth
              color='secondary'
              id='standard-number'
              label='تاریخ تولد:'
              type='number'
              variant='filled'
              size='small'
              value={data.birthDate}
              onChange={(event) =>
                dispatch(
                  sessionActions.updateData({
                    type: 'birthDate',
                    data: event.target.value,
                  })
                )
              }
              InputLabelProps={{
                shrink: false,
              }}
            />}
          />

        </LocalizationProvider>
      </Grid>
      
      <Grid
        item
        xs={3}
        sx={{ p:1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='صادره از:'
          type='text'
          variant='filled'
          size='small'
          value={data.registerPlace}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'registerPlace',
                data: event.target.value,
              })
            )
          }
          InputLabelProps={{
            shrink: false,
          }}
        />
      </Grid>
      
      <Grid
        item
        xs={3}
        sx={{ p:1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='تلفن همراه:'
          helperText={
            !data.mobile || data.mobile?.length != 11 &&
            'شماره موبایل باید ۱۱ رقم باشد'
          }
          type='text'
          variant='filled'
          size='small'
          value={data.mobile}
          onChange={(event) => event.target.value.length <= 11 &&
            dispatch(
              sessionActions.updateData({
                type: 'mobile',
                data: event.target.value,
              })
            )
          }
          InputLabelProps={{
            shrink: false,
          }}
        />
      </Grid>
      
      <Grid
        item
        xs={3}
        sx={{ p:1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='تلفن ثابت:'
          type='text'
          variant='filled'
          size='small'
          value={data.phoneNumber}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'phoneNumber',
                data: event.target.value,
              })
            )
          }
          InputLabelProps={{
            shrink: false,
          }}
        />
      </Grid>
      
      <Grid
        item
        xs={3}
        sx={{ p:1, mt: 4 }}
      >
        <TextField
          fullWidth
          select
          color='secondary'
          id='state'
          label='استان:'
          type='text'
          variant='filled'
          size='small'
          value={data.stateTopic}
          // sx={{ mx: 2, my: 5, width: '230px' }}
          // onChange={(event) =>
          //   dispatch(
          //     sessionActions.updateData({
          //       type: 'stateTopic',
          //       data: event.target.value,
          //     })
          //   )
          // }
          InputLabelProps={{
            shrink: false,
          }}
        >
          {stateList.map((stateItem, index) => (
            <MenuItem
              key={stateItem.id}
              value={stateItem.topic}
              onClick={() => dispatch(
                sessionActions.updateData({
                  type: 'state',
                  dataTopic: stateItem.topic,
                  dataId: stateItem.id,
                })
              )}
              sx={{ color: '#000', fontSize: '12px' }}>
                {stateItem.topic}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      
      <Grid
        item
        xs={3}
        sx={{ p:1, mt: 4 }}
      >
        <TextField
          fullWidth
          select
          disabled={!stateLoading}
          color='secondary'
          id='city'
          label='شهر:'
          type='text'
          variant='filled'
          size='small'
          value={data.cityTopic}
          InputLabelProps={{
            shrink: false,
          }}
        >
          {cityList.map((stateItem, index) => (
            <MenuItem
              key={stateItem.id}
              value={stateItem.topic}
              onClick={() => dispatch(
                sessionActions.updateData({
                  type: 'city',
                  dataTopic: stateItem.topic,
                  dataId: stateItem.id,
                })
              )}
              sx={{ color: '#000', fontSize: '12px' }}>
              {stateItem.topic}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      
      <Grid
        item
        xs={6}
        sx={{ p:1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='آدرس:'
          type='text'
          variant='filled'
          size='small'
          value={data.address}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'address',
                data: event.target.value,
              })
            )
          }
          InputLabelProps={{
            shrink: false,
          }}
        />
      </Grid>
    
    </Grid>
  );
}
