import React, { SetStateAction, useEffect } from "react";
import { useState } from "react";

import { Post } from "../interface";
import styled from "styled-components";

import SunEditor from "suneditor-react";

type Props = {
  initContent: string;
  getContent: any;
};

const PostEdittor = ({ initContent, getContent }: Props) => {
  const [editorContent, setEditorContent] = useState(initContent);

  useEffect(() => {
    getContent(editorContent);
  }, [editorContent]);

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="" className="font-bold">
        Post content
      </label>
      <SunEditorStyled
        placeholder="Enter your content here..."
        setDefaultStyle='font-family: "Poppins", sans-serif'
        setOptions={{
          buttonList: [
            ["outdent", "indent"],
            ["font", "fontSize", "formatBlock"],
            ["blockquote"],
            ["image", "video", "audio", "link"],
            ["codeView"],
          ],
        }}
        setContents={editorContent}
        onChange={(inputContent: string) => setEditorContent(inputContent)}
      />
    </div>
  );
};

export default PostEdittor;

const SunEditorStyled = styled(SunEditor)`
  border-color: red !important;
`;
