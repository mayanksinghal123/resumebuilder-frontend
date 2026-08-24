import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TemplateKey } from "../components/templates/templateRegistery";

interface TemplateState {
  activeTemplateKey: TemplateKey;
}

const initialState: TemplateState = {
  activeTemplateKey: "ats-classic",
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate(state, action: PayloadAction<TemplateKey>) {
      state.activeTemplateKey = action.payload;
    },
  },
});

export const { setTemplate } = templateSlice.actions;
export default templateSlice.reducer;