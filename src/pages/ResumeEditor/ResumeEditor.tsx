import { FormProvider } from "react-hook-form";

import useResumeForm from "../../components/templates/Template1/hooks/useResumeForm";
import useResumeGenerator from "./hooks/useResumeGenerator";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { templateRegistry } from "../../components/templates/templateRegistery";
import { useEffect } from "react";
import { clearDownloadRequest, setDownloading } from "../../store/resumeSlice";

const ResumeEditor = () => {
  const methods = useResumeForm();
  const { handleGenerate } = useResumeGenerator(methods);
  const dispatch = useAppDispatch();

  const activeTemplateKey = useAppSelector(
    (state) => state.template.activeTemplateKey,
  );

  const downloadRequested = useAppSelector(
    (state) => state.resume.downloadRequested,
  );

  const TemplateComponent = templateRegistry[activeTemplateKey];

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

    generate();
  }, [downloadRequested, dispatch, handleGenerate]);

  return (
    <FormProvider {...methods}>
      <TemplateComponent />
    </FormProvider>
  );
};

export default ResumeEditor;
