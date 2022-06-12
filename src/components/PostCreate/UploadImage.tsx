import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Post } from "../interface";

import noThumbnail from "../../assets/img/no-thumbnail.png";
import WarningText from "./WarningText";
import { useLocation } from "react-router-dom";
import TitleField from "./TitleField";

type Props = {
  getImageBase64: (base64: string) => void;
  getImageLink: (link: string) => void;
  post: any;
  validate?: string;
  clearValidate: () => void;
  setImageBase64: any;
};

const UploadImage = ({
  getImageBase64,
  getImageLink,
  post,
  validate,
  clearValidate,
  setImageBase64,
}: Props) => {
  const [imgCoverBase64, setImgCoverBase64] = useState(post.imageHeroBase64);
  const [imgLink, setImgLink] = useState(
    post.imageHeroLink || post.imageLink || ""
  );
  const [validateImg, setValidateImg] = useState(validate);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const location = useLocation();
  const isCreateFastPost = location.pathname === "/create-fast-post";

  function handleUploadImageByFile(e: ChangeEvent<HTMLInputElement>) {
    const imgFile = e.target.files;

    if (imgFile) {
      if (imgFile[0]?.size >= 1050540) {
        handleResetImg();
        setValidateImg("Image size must  ≤  1 MB");
        return;
      }

      let reader = new FileReader();
      reader.readAsDataURL(imgFile[0]);
      reader.onload = function () {
        let imgBase64 = reader.result;
        if (typeof imgBase64 === "string") {
          setImgCoverBase64(imgBase64);
          setImageBase64(imgBase64);
        }
      };

      setImgLink("");
      setValidateImg("");
      setImageBase64("");
    }
  }

  function handleUpdloadImgByLink(e: any) {
    getImageLink(e.target.value);
    setImgLink(e.target.value);

    setImgCoverBase64("");
    setImageBase64("");
  }

  function handleResetImg() {
    setImgCoverBase64("");
    setImgLink("");
    setValidateImg("");
    clearValidate();
    setImageBase64("");

    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  }

  function handleErrorImg() {
    setValidateImg("Please check your Image URL");
  }

  useEffect(() => {
    getImageLink("");
  }, [imgCoverBase64]);

  useEffect(() => {
    getImageBase64("");
    setValidateImg("");
    setImageBase64("");
    clearValidate();
  }, [imgLink]);

  useEffect(() => {
    setValidateImg(validate);
  }, [validate]);

  function handleClickUploadCoverPicture() {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      className={`flex flex-col mb-5 ${
        isCreateFastPost && "md:!flex-row gap-3"
      } `}
    >
      <div className={`${isCreateFastPost && "w-full md:w-3/5"}`}>
        <TitleField>Cover image</TitleField>
        <div className="flex gap-3">
          <input
            type="text"
            className="border-[1px] w-2/3 focus:outline-none p-2 rounded-lg font-thin dark:bg-gray-500 dark:border-gray-400 dark:text-gray-200 dark:placeholder-gray-300"
            placeholder="Url link"
            value={imgLink}
            onChange={(e) => {
              handleUpdloadImgByLink(e);
            }}
          />

          <input
            type="file"
            accept="image/*"
            hidden
            ref={inputFileRef}
            onChange={(e) => handleUploadImageByFile(e)}
          />
          <button
            className="border-[1px] w-1/3 rounded-lg bg-blue-600 text-white hover:bg-blue-400 dark:border-none"
            onClick={handleClickUploadCoverPicture}
          >
            {isCreateFastPost ? "My Image" : "Choose your image"}
          </button>
        </div>
      </div>

      <div className={`${isCreateFastPost && "w-full md:w-2/5"}`}>
        <div
          className={`relative border-[1px] my-2 min-h-[300px] w-full flex items-center justify-center rounded-lg dark:border-gray-600
        ${validateImg && "!border-red-500 flex flex-row"}
        ${isCreateFastPost && "h-[450px]"}
        `}
        >
          {imgCoverBase64 || (imgLink && !validateImg) ? (
            <>
              <img
                src={imgCoverBase64 || imgLink}
                alt=""
                className={`rounded-lg w-full max-h-[500px] object-cover 
                ${isCreateFastPost && "h-full"}
                `}
                onError={handleErrorImg}
              />
              <i
                className="fa-solid fa-xmark absolute top-4 right-3 z-20 text-[2rem] text-gray-300 text cursor-pointer hover:text-white"
                onClick={handleResetImg}
              ></i>
            </>
          ) : (
            <img
              src={noThumbnail}
              alt=""
              className="w-[150px] h-[150px] object-cover"
            />
          )}
        </div>

        {validateImg && <WarningText warningText={validateImg} />}
      </div>
    </div>
  );
};

export default UploadImage;
