import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Post } from "../interface";

import noThumbnail from "../../assets/img/no-thumbnail.png";
import WarningText from "./WarningText";

type Props = {
  getImageHeroBase64: (base64: string) => void;
  getImageHeroLink: (link: string) => void;
  post: Post;
  validate?: string;
  clearValidate: () => void;
  setImageHeroBase64: any;
};

const UploadImage = ({
  getImageHeroBase64,
  getImageHeroLink,
  post,
  validate,
  clearValidate,
  setImageHeroBase64,
}: Props) => {
  const [imgCoverBase64, setImgCoverBase64] = useState(post.imageHeroBase64);
  const [imgLink, setImgLink] = useState(post.imageHeroLink);
  const [validateImg, setValidateImg] = useState(validate);

  const inputFileRef = useRef<HTMLInputElement>(null);

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
          setImageHeroBase64(imgBase64);
        }
      };

      setImgLink("");
      setValidateImg("");
    }
  }

  function handleUpdloadImgByLink(e: any) {
    getImageHeroLink(e.target.value);
    setImgLink(e.target.value);

    setImgCoverBase64("");
    setImageHeroBase64("");
  }

  function handleResetImg() {
    setImgCoverBase64("");
    setImgLink("");
    setValidateImg("");
    clearValidate();
    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  }

  function handleErrorImg() {
    setValidateImg("Please check your Image URL");
  }

  useEffect(() => {
    // console.log("chay vao imgCoverBase64", imgCoverBase64);getImageHeroBase64
    getImageHeroLink("");
  }, [imgCoverBase64]);

  useEffect(() => {
    getImageHeroBase64("");
    setValidateImg("");
    setImageHeroBase64("");
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

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="" className="font-bold">
        Cover image
      </label>
      <div className="flex gap-3">
        <input
          type="text"
          className="border-[1px] w-2/3 focus:outline-none p-2 rounded-lg font-thin"
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
          className="border-[1px] w-1/3 rounded-lg bg-blue-600 text-white hover:bg-blue-400"
          onClick={handleClickUploadCoverPicture}
        >
          Choose your image
        </button>
      </div>

      <div
        className={`relative border-[1px] my-2 min-h-[300px] w-full flex items-center justify-center rounded-lg ${
          validateImg && "border-red-500"
        } `}
      >
        {imgCoverBase64 || (imgLink && !validateImg) ? (
          <>
            <img
              src={imgCoverBase64 || imgLink}
              alt=""
              className={`rounded-lg w-full max-h-[500px] object-cover`}
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
  );
};

export default UploadImage;
