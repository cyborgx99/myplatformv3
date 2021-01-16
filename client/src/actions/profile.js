import axios from 'axios';

export const uploadAvatar = (avatar) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/v1/profile/uploadavatar',
      { avatar },
      config
    );

    return data.data;
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: USER_LOGOUT_FAIL,
    //   payload:
    //     error.response && error.response.data.errors
    //       ? error.response.data.errors
    //       : error.message,
    // });
  }
};
