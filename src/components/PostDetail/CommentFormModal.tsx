import InputFiled from "../PostCreate/InputFiled";
import TitleField from "../PostCreate/TitleField";

import noThumbnail from "../../assets/img/no-thumbnail.png";
import WarningText from "../PostCreate/WarningText";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Comment, Post } from "../interface";
import checkImageValid from "../common/checkImageValid";

type Props = {
  show: boolean;
  onHide: () => void;
  setImg: any;
  cmtForm: any;
};

const CommentFormModal = ({ show, onHide, setImg, cmtForm }: Props) => {
  const [validateImgCmt, setValidateImgCmt] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [cmtImage, setCmtImage] = useState({
    base64: cmtForm.imageBase64,
    link: cmtForm.imageLink,
  });

  function handleUpdloadImgByLink(e: any) {
    setCmtImage({ base64: "", link: e.target.value });
  }

  function handleUploadImageByFile(e: ChangeEvent<HTMLInputElement>) {
    const imgFile = e.target.files;

    if (imgFile) {
      if (imgFile[0]?.size >= 1050540) {
        setValidateImgCmt("Image size must  ≤  1 MB");
        return;
      }

      let reader = new FileReader();
      reader.readAsDataURL(imgFile[0]);
      reader.onload = function () {
        let imgBase64 = reader.result;
        if (typeof imgBase64 === "string") {
          setCmtImage({ ...cmtImage, base64: imgBase64 });
        }
      };
    }
  }

  function handleResetCmtImg() {
    setValidateImgCmt("");
    setCmtImage({
      link: "",
      base64: "",
    });
  }

  function handleClickUploadCoverImage() {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }

  useEffect(() => {
    checkImageValid(cmtImage.link || cmtImage.base64, (valid: any) => {
      if (valid) {
        setImg({
          ...cmtForm,
          imageBase64: cmtImage.base64,
          imageLink: cmtImage.link,
        });
        onHide();
      } else {
        if (cmtImage.link === "" && cmtImage.base64 === "") {
          setValidateImgCmt("Enter your image URL or choose your image");
        } else {
          setValidateImgCmt("Please check your image URL");
        }
      }
    });
  }, [cmtImage.link, cmtImage.base64]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.8)] transition-all duration-200 ${
          show ? "z-50 opacity-100" : "z-[-1] opacity-0"
        } `}
      ></div>
      <div
        className={`absolute bottom-[50px] left-[50%] translate-x-[-50%] w-[98%] transition-all duration-200 rounded-lg dark:shadow-[0px_0px_4px_white] ${
          show ? "z-50 opacity-100" : "z-[-1] opacity-0"
        } `}
      >
        <div
          className={`bg-white dark:bg-black lg:h-[60%] rounded-md py-2 transition-all duration-200 origin-bottom-right px-2 text-left ${
            show ? "scale-100" : " scale-50"
          }`}
        >
          <TitleField>Comment image</TitleField>
          <div className="flex gap-3 mt-2">
            <input
              type="text"
              className="border-[1px] w-full focus:outline-none p-2 rounded-lg font-thin dark:bg-gray-500 dark:border-gray-400 dark:text-gray-100 dark:placeholder-gray-300 text-[0.8rem]"
              placeholder="Url link"
              value={cmtImage.link}
              onChange={(e) => handleUpdloadImgByLink(e)}
            />

            <input
              type="file"
              accept="image/*"
              hidden
              ref={inputFileRef}
              onChange={(e) => handleUploadImageByFile(e)}
            />
            <button
              className="border-[1px] rounded-lg bg-blue-600 text-white hover:bg-blue-400 dark:border-none whitespace-nowrap px-2"
              onClick={handleClickUploadCoverImage}
            >
              Choose image
            </button>
          </div>

          <div
            className={`dark:text-gray-300 flex gap-2 mt-2 justify-end ${
              validateImgCmt && "justify-between"
            }`}
          >
            {validateImgCmt && <WarningText warningText={validateImgCmt} />}
            <button
              className="border-red-600 hover:bg-[#ff1801] border-2 px-2 py-1 rounded-md text-[0.8rem]"
              onClick={() => {
                setValidateImgCmt("");
                onHide();
              }}
            >
              Cancel
            </button>
          </div>

          <img src={cmtImage.base64 || cmtImage.link} alt="" hidden />
        </div>
      </div>
    </>
  );
};

export default CommentFormModal;
