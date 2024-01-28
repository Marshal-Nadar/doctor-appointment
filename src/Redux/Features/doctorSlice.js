import {
  createSlice,
  createAsyncThunk,
  combineReducers,
} from '@reduxjs/toolkit';

export const fetchDoctorDetails = createAsyncThunk(
  'doctors/fetchDoctorDetails',
  async id => {
    // console.log('valvalval', id);
    try {
      const response = await fetch(
        'https://aartas-qaapp-as.azurewebsites.net/aartas_uat/public/api/doctor',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ doctor_id: id }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch doctor data');
      }

      const data = await response.json();
      return data.data[0];
    } catch (error) {
      throw error;
    }
  }
);

const createDoctorSlice = () => {
  const initialState = {
    doctors: [],
    loading: false,
    error: null,
  };

  const doctorSlice = createSlice({
    name: 'doctors',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(fetchDoctorDetails.pending, state => {
          state.loading = true;
        })
        .addCase(fetchDoctorDetails.fulfilled, (state, action) => {
          state.loading = false;
          // console.log('action.payload',action.payload)
          state.doctors = action.payload;
        })
        .addCase(fetchDoctorDetails.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  return doctorSlice;
};

const { reducer: doctorReducer } = createDoctorSlice();

const rootReducer = combineReducers({
  doctors: doctorReducer,
});

export default rootReducer;

// export default createDoctorSlice.reducer;

// extraReducers: {
//   [fetchDoctorDetails.pending]: (state, action) => {
//     state.loading = true;
//   },
//   [fetchDoctorDetails.fulfilled]: (state, action) => {
//     state.loading = false;
//     state.cocktails = action.payload.drinks;
//   },
//   [fetchDoctorDetails.rejected]: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },
// },

// const doctorSlicee = createSlice({
//   name: 'doctors',
//   initialState,

//   extraReducers: builder => {
//     builder
//       .addCase(fetchDoctorDetails.pending, state => {
//         state.loading = true;
//       })
//       .addCase(fetchDoctorDetails.fulfilled, (state, action) => {
//         state.loading = false;
//         state.doctors = action.payload;
//       })
//       .addCase(fetchDoctorDetails.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });
