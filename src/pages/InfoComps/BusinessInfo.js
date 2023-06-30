import {
  Grid,
  TextField,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { sessionActions } from '../../store';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffectAsync } from '../../reactHelper';
import { BUSINESS_TYPE, BRANCH_TYPE } from '../helper/Data';



export default function Register({ stateList }) {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.session);

  const theme = useTheme();

  const tablet = useMediaQuery(theme.breakpoints.down('sm'))

  const [cityList, setCityList] = useState([]);
  const [stateLoading, setStateLoading] = useState(false);

  useEffectAsync(async () => {
    setStateLoading(false)
    try {
      const response = await axios.get(
        `/api/base-information/list/3/${data.businessStateId}/?isEnabled=true`, {
          baseURL: process.env.REACT_APP_URL
        }
      )
      setCityList(response.data)
      setStateLoading(true)
    } catch (error) {
      console.log(error)
    }
  }, [data.businessStateId]);

  return (
    <Grid
      container
      item
      display='flex'
      direction={tablet ? 'column' : 'row'}
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
          label='نام فروشگاه:'
          type='text'
          variant='filled'
          size='small'
          value={data.name}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'name',
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
        sx={{ p: 1, mt: 4 }}
      >
        <TextField
          fullWidth
          select
          color='secondary'
          id='standard-number'
          label='صنف:'
          type='text'
          variant='filled'
          size='small'
          value={data.businessType}
          InputLabelProps={{
            shrink: false,
          }}
        >
          {BUSINESS_TYPE.map((stateItem, index) => (
            <MenuItem
              key={stateItem.id}
              value={stateItem.value}
              onClick={() => dispatch(
                sessionActions.updateData({
                  type: 'businessType',
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
          select
          fullWidth
          color='secondary'
          id='standard-branchType'
          label='نوع:'
          type='number'
          variant='filled'
          size='small'
          value={data.branchType}
          InputLabelProps={{
            shrink: false,
          }}
        >
          {BRANCH_TYPE.map((stateItem, index) => (
            <MenuItem
              key={stateItem.id}
              value={stateItem.value}
              onClick={() => dispatch(
                sessionActions.updateData({
                  type: 'branchType',
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
          label='شماره پروانه:'
          type='text'
          variant='filled'
          size='small'
          value={data.licenseNumber}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'licenseNumber',
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
        sx={{ p: 1, mt: 4 }}
      >

        <LocalizationProvider dateAdapter={AdapterJalali}>

          <DatePicker
            mask='____/__/__'
            value={data.licenseDate}
            components={{
              OpenPickerIcon: CalendarMonthIcon,
              LeftArrowIcon: ArrowRightIcon,
              RightArrowIcon: ArrowLeftIcon
              }}  
            onChange={(newValue) =>
              dispatch(
                sessionActions.updateData({
                  type: 'licenseDate',
                  data: newValue,
                })
              )
            } renderInput={(params) =>

              <TextField {...params}
                fullWidth
                color='secondary'
                id='standard-number'
                label='تاریخ ثبت پروانه:'
                type='text'
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
              />

            }
          />

        </LocalizationProvider>

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
          label='فعالیت:'
          type='text'
          variant='filled'
          size='small'
          value={data.activity}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'activity',
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
        sx={{ p: 1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-numberr'
          label='کد پستی:'
          helperText={
            !data.postalCode || data.postalCode?.length != 10 &&
            'کد پستی باید ۱۰ رقم باشد'
          }
          type='number'
          maxLength={10}
          variant='filled'
          size='small'
          value={data.postalCode}
          onChange={(event) => event.target.value.length <= 10 &&
            dispatch(
              sessionActions.updateData({
                type: 'postalCode',
                data: event.target.value.toString()
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
        sx={{ p: 1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='تلفن ثابت:'
          type='text'
          variant='filled'
          size='small'
          value={data.businessPhoneNumber}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'businessPhoneNumber',
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
        sx={{ p: 1, mt: 4 }}
      >
        <TextField
          fullWidth
          select
          color='secondary'
          id='businessState'
          label='استان:'
          type='text'
          variant='filled'
          size='small'
          value={data.businessStateTopic}
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
                  type: 'businessState',
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
        sx={{ p: 1, mt: 4 }}
      >
        <TextField
          fullWidth
          select
          disabled={!stateLoading}
          color='secondary'
          id='businessCity'
          label='شهر:'
          type='text'
          variant='filled'
          size='small'
          value={data.businessCityTopic}
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
                  type: 'businessCity',
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
        sx={{ p: 1, mt: 4 }}
      >
        <TextField
          fullWidth
          color='secondary'
          id='standard-number'
          label='آدرس:'
          type='text'
          variant='filled'
          size='small'
          value={data.businessAddress}
          onChange={(event) =>
            dispatch(
              sessionActions.updateData({
                type: 'businessAddress',
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
