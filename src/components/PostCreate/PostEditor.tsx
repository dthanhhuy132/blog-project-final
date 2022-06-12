import React, { SetStateAction, useContext, useEffect } from "react";
import { useState } from "react";

import SunEditor from "suneditor-react";
import WarningText from "./WarningText";
import TitleField from "./TitleField";
import { AllContext } from "../Provider";
import setClassForTextEditor from "./setClassForTextEditor";

type Props = {
  initContent: string;
  getContent: any;
  validate: string;
  clearValidate: () => void;
  setValidate: (string: string) => void;
};

const PostEdittor = ({
  initContent,
  getContent,
  validate,
  clearValidate,
  setValidate,
}: Props) => {
  const { themeMode } = useContext(AllContext);
  const [editorContent, setEditorContent] = useState(initContent);

  useEffect(() => {
    getContent(editorContent);
  }, [editorContent]);

  function handleImageUploadBefore(file: any) {
    console.log(file);

    if (file[0].size >= 1050540) {
      setValidate("Image size must  ≤  1 MB");
      return false;
    }
    return true;
  }

  useEffect(() => {
    setClassForTextEditor(themeMode);
  });

  return (
    <div className="flex flex-col mb-5">
      <TitleField>Post content</TitleField>
      <div
        className={`border-[1px] border-gray-200 rounded-xl ${
          validate && "border-2 border-red-500"
        }dark:bg-gray-700 dark:border-gray-600`}
      >
        <SunEditor
          placeholder="Enter your content here..."
          setDefaultStyle={`font-family: "Poppins", sans-serif`}
          setOptions={{
            buttonList: [
              ["outdent", "indent"],
              ["font", "fontSize", "formatBlock"],
              ["blockquote"],
              ["image", "video", "audio", "link"],
              ["codeView"],
            ],
            imageAccept: "jpg, jpeg, png",
          }}
          onImageUploadBefore={(file) => handleImageUploadBefore(file)}
          setContents={editorContent}
          onChange={(inputContent: string) => {
            clearValidate();
            setEditorContent(inputContent);
          }}
        />
      </div>
      {validate && <WarningText warningText={validate} />}
    </div>
  );
};

export default PostEdittor;
