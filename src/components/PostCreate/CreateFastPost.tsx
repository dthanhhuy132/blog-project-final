import React, { useEffect, useState } from "react";
import InputFiled from "./InputFiled";
import TitleField from "./TitleField";
import UploadImage from "./UploadImage";

type Props = {};

const CreateFastPost = (props: Props) => {
  const [fastPost, setFastPost] = useState({
    content: "",
    imageBase64: "",
    imageLink: "",
    videoLink: "",
    musicLink: "",
  });
  const [imageBase642, setImageBase64] = useState("");

  const [validImg, setValidImg] = useState("");

  function validdatePost() {
    if (fastPost.imageBase64 === "" && fastPost.imageLink === "")
      setValidImg("Please choose your image");
  }

  function handleSubmitPost() {
    validdatePost();
    console.log("fastPost", fastPost);
  }

  useEffect(() => {
    setFastPost({ ...fastPost, imageBase64: imageBase642 });
  }, [imageBase642]);

  return (
    <div className="md:relative text-left mt-10 px-2 lg:px-0">
      <div className="">
        <UploadImage
          getImageBase64={(base64: string) =>
            setFastPost({ ...fastPost, imageBase64: base64 })
          }
          getImageLink={(link: string) =>
            setFastPost({ ...fastPost, imageLink: link })
          }
          post={fastPost}
          validate={validImg}
          clearValidate={() => setValidImg("")}
          setImageBase64={(base64: string) => setImageBase64(base64)}
        />
      </div>

      <div className="md:absolute md:w-3/5 md:top-[147px] md:pr-4 lg:pr-2 md:flex md:flex-col md:gap-10">
        <div className="flex flex-col mb-5">
          <TitleField>Audio link</TitleField>
          <InputFiled
            inputChange={(e: any) =>
              setFastPost({ ...fastPost, content: e.target.value })
            }
            validate=""
            clearValidate={() => {}}
          />
        </div>

        <div className="flex flex-col mb-5">
          <TitleField>Video link</TitleField>
          <InputFiled
            inputChange={(e: any) =>
              setFastPost({ ...fastPost, content: e.target.value })
            }
            validate=""
            clearValidate={() => {}}
          />
        </div>

        <div className="flex flex-col mb-5">
          <TitleField>Fast post content</TitleField>
          <InputFiled
            inputChange={(e: any) =>
              setFastPost({ ...fastPost, content: e.target.value })
            }
            validate=""
            clearValidate={() => {}}
          />
        </div>
      </div>

      <button
        className="py-3 mt-2 bg-blue-600 text-white font-bold text-[1.1rem] w-full rounded-md hover:bg-blue-400 hover:text-gray-900"
        onClick={handleSubmitPost}
      >
        Create my new Post
      </button>
    </div>
  );
};

export default CreateFastPost;
