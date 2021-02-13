import {
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  PROFILE_CREATE_FAIL,
  PROFILE_CREATE_SUCCESS,
  PROFILE_DELETE_FAIL,
  PROFILE_DELETE_SUCCESS,
  PROFILE_UPDATE_FAIL,
  PROFILE_UPDATE_SUCCESS,
} from '../actions/types';

const initialState = {
  profileId: '',
  userId: '',
  avatar: '',
  skype: '',
  telegram: '',
  whatsApp: '',
  goals: '',
  bio: '',
  birthday: '',
  myHobbies: '',
  facebook: '',
  linkedin: '',
  instagram: '',
  twitter: '',
  loading: true,
};

export default function profileReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_CREATE_SUCCESS:
    case PROFILE_UPDATE_SUCCESS:
    case GET_PROFILE_SUCCESS:
      const {
        avatar,
        skype,
        telegram,
        whatsApp,
        goals,
        bio,
        birthday,
        myHobbies,
        facebook,
        linkedin,
        instagram,
        twitter,
        user,
        _id,
      } = payload;

      return {
        ...state,
        loading: false,
        profileId: _id,
        userId: user,
        avatar,
        skype,
        telegram,
        whatsApp,
        goals,
        bio,
        birthday,
        myHobbies,
        facebook,
        linkedin,
        instagram,
        twitter,
        error: '',
      };

    case PROFILE_DELETE_SUCCESS:
      return {
        profileId: '',
        userId: '',
        avatar: '',
        skype: '',
        telegram: '',
        whatsApp: '',
        goals: '',
        bio: '',
        birthday: '',
        myHobbies: '',
        facebook: '',
        linkedin: '',
        instagram: '',
        twitter: '',
        loading: false,
      };

    case PROFILE_CREATE_FAIL:
    case PROFILE_UPDATE_FAIL:
    case GET_PROFILE_FAIL:
    case PROFILE_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
