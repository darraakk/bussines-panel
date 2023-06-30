import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'session',
  initialState: {
    trigger: false,
    loading: false,
    card: [],
    duc: [],
    licenseImage: null,
    idCardImage: null,
    nationalCardImage: null,
    billImage: null,

  },
  reducers: {
    updateData(state, action) {
      switch (action.payload.type) {
        case 'id': state.id = action.payload.data;
          break;
        case 'firstName': state.firstName = action.payload.data;
          break;
        case 'lastName': state.lastName = action.payload.data;
          break;
        case 'nationalCode': state.nationalCode = action.payload.data;
          break;
        case 'idCode': state.idCode = action.payload.data;
          break;
        case 'birthDate': state.birthDate = action.payload.data;
          break;
        case 'registerPlace': state.registerPlace = action.payload.data;
          break;
        case 'mobile': state.mobile = action.payload.data;
          break;
        case 'phoneNumber': state.phoneNumber = action.payload.data;
          break;
        case 'state': {
          state.stateTopic = action.payload.dataTopic;
          state.stateId = action.payload.dataId;
        }
          break;
        case 'city': {
          state.cityTopic = action.payload.dataTopic;
          state.cityId = action.payload.dataId;
        };;;
          break;
        case 'address': state.address = action.payload.data;
          break;
        case 'name': state.name = action.payload.data;
          break;
        case 'businessType': state.businessType = action.payload.data;
          break;
        case 'branchType': state.branchType = action.payload.data;
          break;
        case 'licenseNumber': state.licenseNumber = action.payload.data;
          break;
        case 'licenseDate': state.licenseDate = action.payload.data;
          break;
        case 'activity': state.activity = action.payload.data;
          break;
        case 'postalCode': state.postalCode = action.payload.data;
          break;
        case 'businessPhoneNumber': state.businessPhoneNumber = action.payload.data;
          break;
        case 'businessState':  {
          state.businessStateTopic = action.payload.dataTopic;
          state.businessStateId = action.payload.dataId;
        };
          break;
        case 'businessCity': {
          state.businessCityTopic = action.payload.dataTopic;
          state.businessCityId = action.payload.dataId;
        };
          break;
        case 'businessAddress': state.businessAddress = action.payload.data;
          break;
        case 'bankName': state.bankName = action.payload.data;
          break;
        case 'number': state.number = action.payload.data;
          break;
        case 'shebaCode': state.shebaCode = action.payload.data;
          break;
        default:
      }
    },
    updateCard(state, action) {
      state.card = [...state.card, action.payload]
    },
    deleteCard(state, action) {
      state.card.map((card, index) => (
        card.shebaCode == action.payload &&
        (state.card = state.card.filter(item => item.shebaCode !== action.payload))
      ))
    },
    updateDuc(state, action) {
      state.duc = [...state.duc, action.payload]
      switch (action.payload.ducType) {
        case "پروانه کسب": state.licenseImage = action.payload.imgData;
          break;
        case "صفحه اول شناسنامه": state.idCardImage = action.payload.imgData;
          break;
        case "تصویر روی کارت ملی": state.nationalCardImage = action.payload.imgData;
          break;
        case "قبض آب یا برق": state.billImage = action.payload.imgData;
          break;
        default:
      }
    },
    deleteDuc(state, action) {
      switch (action.payload) {
        case "پروانه کسب": state.licenseImage = null;
          break;
        case "صفحه اول شناسنامه": state.idCardImage = null;
          break;
        case "تصویر روی کارت ملی": state.nationalCardImage = null;
          break;
        case "قبض آب یا برق": state.billImage = null;
          break;
        default:
      };
      state.duc.map((duc, index) => (
        duc.ducType == action.payload &&
        (state.duc = state.duc.filter(item => item.ducType !== action.payload))
      ))
    },
  },
});

export { actions as sessionActions };
export { reducer as sessionReducer };
