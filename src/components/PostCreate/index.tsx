import "suneditor/dist/css/suneditor.min.css";
import "./post-create.css";

import InputFiled from "./InputFiled";
import UploadImage from "./UploadImage";
import { useEffect, useState } from "react";
import PostEdittor from "./PostEditor";

type Props = {};

const CreatePost = (props: Props) => {
  const [post, setPost] = useState({
    userId: "",
    imageHeroBase64: "",
    imageHeroLink: "",
    title: "",
    summary: "",
    content: "",
    comment: 0,
    love: 0,
    isReport: false,
    reportQuantity: 0,
  });

  const [validTitle, setValidTitle] = useState("");
  const [validSummary, setValidSummary] = useState("");
  const [validContent, setValidContent] = useState("");
  const [validImg, setValidImg] = useState("");
  const [imageHeroBase64, setImageHeroBase64] = useState("");

  // console.log("layBase64", layBase64);

  // _______________________________________________________________ SUBMIT POST

  function validdatePost() {
    if (post.title === "") setValidTitle("Please enter your post title");
    if (post.summary === "") setValidSummary("Please enter your post summary");
    if (post.content === "") setValidContent("Please enter your post content");
    if (post.imageHeroBase64 === "" && post.imageHeroLink === "")
      setValidImg("Please choose your image");
  }

  function handleSubmitPost() {
    validdatePost();
    let isValidPost =
      !validTitle && !validSummary && !validContent && !validImg;

    console.log("nộp thì ra cái gì nè", post);
  }

  useEffect(() => {
    setPost({ ...post, imageHeroBase64: imageHeroBase64 });
  }, [imageHeroBase64]);

  return (
    <div className="text-left mt-5 mb-12 px-2 lg:px-0">
      <p className="font-bold mb-5 text-[1.5rem]"> Let's share your moment </p>

      <UploadImage
        getImageHeroLink={(link: string) =>
          setPost({ ...post, imageHeroLink: link })
        }
        getImageHeroBase64={(base64: any) => {}}
        setImageHeroBase64={setImageHeroBase64}
        post={post}
        validate={validImg}
        clearValidate={() => setValidImg("")}
      />

      <div className="flex flex-col mb-5">
        <label htmlFor="" className="font-bold">
          Post title
        </label>
        <InputFiled
          inputChange={(e: any) => setPost({ ...post, title: e.target.value })}
          validate={validTitle}
          clearValidate={() => setValidTitle("")}
        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="" className="font-bold">
          Post summary
        </label>
        <InputFiled
          row={4}
          placeholder="Write your post summary..."
          inputChange={(e: any) =>
            setPost({ ...post, summary: e.target.value })
          }
          validate={validSummary}
          clearValidate={() => setValidSummary("")}
        />
      </div>

      <PostEdittor
        initContent={post.content}
        getContent={(inputContent: any) =>
          setPost({ ...post, content: inputContent })
        }
      />

      <button
        className="py-3 bg-blue-600 text-white font-bold text-[1.1rem] w-full rounded-md hover:bg-blue-400 hover:text-gray-900"
        onClick={handleSubmitPost}
      >
        Create my new Post
      </button>
    </div>
  );
};

export default CreatePost;
