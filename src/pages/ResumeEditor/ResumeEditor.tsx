import { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import useResumeForm from "../../components/templates/Template1/hooks/useResumeForm";
import useResumeGenerator from "./hooks/useResumeGenerator";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { templateRegistry } from "../../components/templates/templateRegistery";
import { clearDownloadRequest, setDownloading } from "../../store/resumeSlice";
export default function ResumeEditor() {
  const methods = useResumeForm();
  const { handleGenerate } = useResumeGenerator(methods);
  const dispatch = useAppDispatch();
  const activeTemplateKey = useAppSelector(
    (state) => state.template.activeTemplateKey,
  );
  const downloadRequested = useAppSelector(
    (state) => state.resume.downloadRequested,
  );
  useEffect(() => {
    if (!downloadRequested) return;
    const generate = async () => {
      dispatch(setDownloading(true));
      try {
        await handleGenerate();
      } finally {
        dispatch(setDownloading(false));
        dispatch(clearDownloadRequest());
      }
    };
    void generate();
  }, [downloadRequested, dispatch, handleGenerate]);
  const TemplateComponent = templateRegistry[activeTemplateKey];
  return (
    <FormProvider {...methods}>
      <TemplateComponent />
    </FormProvider>
  );
}
