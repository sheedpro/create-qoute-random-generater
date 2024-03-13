import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandom',
  async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
  }
);

const quoteSlice = createSlice({
  name: 'quoteSlice', // Corrected the slice name
  initialState: {
    quote: null,
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Corrected status value
        state.quote = action.payload;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer; // Exporting the reducer part only
