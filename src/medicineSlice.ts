import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Medicine {
  id: string;
  name: string;
  group: string;
  stock: number;
  link: string;
}

interface MedicineState {
  medicines: Medicine[];
  status: "idle" | "loading" | "succeeded" | "failed";
  loading: boolean;
  error: string | null;
}

const initialState: MedicineState = {
  medicines: [],
  loading: false,
  status: "idle",
  error: null,
};

export const fetchMedicines = createAsyncThunk(
  "medicines/fetchMedicines",
  async () => {
    const response = await fetch("http://localhost:3001/medicines");
    const data = await response.json();
    return data;
  }
);

const medicineSlice = createSlice({
  name: "medicines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedicines.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMedicines.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.medicines = action.payload;
      })
      .addCase(fetchMedicines.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default medicineSlice.reducer;
