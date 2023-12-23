import { createSlice, configureStore } from "@reduxjs/toolkit";
const intialstate = {
  formlist: [],
  count: [1],
};
const dataslice = createSlice({
  name: "cat",
  initialState: {
    formlist: [],
    count: [1],
  },

  reducers: {
    adddata(state, action) {
      const key = action.payload.key;
      console.log("cat11111", action.payload);
      if (key < state.formlist.length)
        state.formlist[action.payload.key] = action.payload;
      else state.formlist.push(action.payload);
    },
    addnewquestion(state) {
      console.log("pushed successfull");
      state.count.push(1);
    },
  },
});
const dataslice2 = createSlice({
  name: "fill",
  initialState: {
    formlist: [],
    count: [1],
  },

  reducers: {
    adddata(state, action) {
      const key = action.payload.key;
      console.log("fillinffblankhh1111", action.payload);
      state.formlist[key] = action.payload;
    },

    addnewquestion(state) {
      console.log("pushed successfull");
      state.count.push(1);
    },
  },
});
const dataslice3 = createSlice({
  name: "com",
  initialState: {
    question: [],
    options: [[]],
    selectedoptions: [],
    oquestion: [[]],
    count1: [1],
    count2: [[1]],
  },

  reducers: {
    adddata(state, action) {
      const key = action.payload.key;
      console.log("commmmm111111", action.payload);

      state.formlist[key] = action.payload;
    },
    addnewquestion(state) {
      console.log("pushedcommmmm111111 successfull");
      state.count1.push(1);
      state.count2.push([1]);
    },
    addnewquestion2(state, action) {
      console.log("pushedcommmmm111111 successfull", action.payload);
      state.count2[action.payload].push(1);
    },
    addoption(state, action) {
      const key1 = action.payload.key1;
      const key2 = action.payload.key2;
      const key3 = action.payload.key3;
      console.log("commmmm111111adddion", action.payload);
      // state.options[key] = action.payload;
      if (state.options[key1] == null) {
        let y = [];
        y[key2] = {
          [key3]: action.payload.data,
        };
        state.options[key1] = y;
      } else {
        if (state.options[key1][key2] == null) {
          state.options[key1][key2] = {
            [key3]: action.payload.data,
          };
        } else {
          state.options[key1][key2] = {
            ...state.options[key1][key2],
            [key3]: action.payload.data,
          };
        }
      }
    },
    addquestion(state, action) {
      const key = action.payload.key;
      console.log("commmmm111111addqe", action.payload);
      state.question[key] = action.payload.q;
    },
    addselectedoptions(state, action) {
      const key1 = action.payload.key1;
      const key2 = action.payload.key2;
      console.log("acommmmm111111addselected", action.payload);

      if (state.selectedoptions[key1] == null) {
        let y = [];
        y[key2] = action.payload.data;
        state.selectedoptions[key1] = y;
      } else {
        state.selectedoptions[key1][key2] = action.payload.data;
      }
    },
    addoquestion(state, action) {
      const key1 = action.payload.key1;
      const key2 = action.payload.key2;
      console.log("commmmm111111addoque", action.payload);

      if (state.oquestion[key1] == null) {
        let y = [];
        y[key2] = action.payload.data;
        state.oquestion[key1] = y;
      } else {
        state.oquestion[key1][key2] = action.payload.data;
      }
    },
  },
});
// preview----------------------------------------------------------------------
const precat = createSlice({
  name: "precat",
  initialState: {
    catsubmite: [],
  },

  reducers: {
    addselected(state, action) {
      const key1 = action.payload.key1;
      const key2 = action.payload.key2;
      console.log("catttt2222", action.payload);

      if (state.catsubmite[key1] == null) {
        let y = [];
        y[key2] = action.payload.data;
        state.catsubmite[key1] = y;
      } else {
        state.catsubmite[key1][key2] = action.payload.data;
      }
    },
  },
});
const precat2 = createSlice({
  name: "precat2",
  initialState: {
    fillsubmite: [],
  },

  reducers: {
    addfill(state, action) {
      const key1 = action.payload.key1;
      state.fillsubmite[key1] = action.payload.data;
      console.log(" ffilllsucccefull fillsubmited222222");
    },
  },
});
const precat3 = createSlice({
  name: "com",
  initialState: {
    selectedoptions: [],
  },

  reducers: {
    addselectedoptions(state, action) {
      const key1 = action.payload.key1;
      const key2 = action.payload.key2;
      console.log("commmm2222", action.payload);

      if (state.selectedoptions[key1] == null) {
        let y = [];
        y[key2] = action.payload.data;
        state.selectedoptions[key1] = y;
      } else {
        state.selectedoptions[key1][key2] = action.payload.data;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    counter: dataslice.reducer,
    counter2: dataslice2.reducer,
    counter3: dataslice3.reducer,
    precounter1: precat.reducer,
    precounter2: precat2.reducer,
    precounter3: precat3.reducer,
  },
});
export const savedataaction = dataslice.actions;
export const savedataaction2 = dataslice2.actions;
export const savedataaction3 = dataslice3.actions;
// preview -------------------------------------------
export const presave = precat.actions;
export const presave2 = precat2.actions;
export const presave3 = precat3.actions;
export default store;
