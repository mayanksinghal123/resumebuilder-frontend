import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ResumeState {
  downloadRequested: boolean;
  isDownloading: boolean;
}

const initialState: ResumeState = {
  downloadRequested: false,
  isDownloading: false,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    requestDownload(state) {
      state.downloadRequested = true;
    },

    clearDownloadRequest(state) {
      state.downloadRequested = false;
    },

    setDownloading(state, action: PayloadAction<boolean>) {
      state.isDownloading = action.payload;
    },
  },
});

export const { requestDownload, clearDownloadRequest, setDownloading } =
  resumeSlice.actions;

export default resumeSlice.reducer;
