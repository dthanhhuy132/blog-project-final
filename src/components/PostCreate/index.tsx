import "suneditor/dist/css/suneditor.min.css";
import "./post-create.css";

import InputFiled from "./InputFiled";
import UploadImage from "./UploadImage";
import { useEffect, useState } from "react";
import PostEdittor from "./PostEditor";
import TitleField from "./TitleField";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../store/posts/action";
import stringToSlug from "../common/StringToSlug";
import CheckUserExist from "../common/CheckUserExist";

type Props = {};

const CreatePost = (props: Props) => {
  const { currentUser } = CheckUserExist();
  const [post, setPost] = useState({
    userId: currentUser?.id,
    imageHeroBase64: "",
    imageHeroLink: "",
    title: "",
    slug: "",
    summary: "",
    content: "",
    comment: 0,
    love: 0,
    isReport: false,
    reportQuantity: 0,
    category: [],
  });

  const [validTitle, setValidTitle] = useState("");
  const [validSummary, setValidSummary] = useState("");
  const [validContent, setValidContent] = useState("");
  const [validCategory, setValidCategory] = useState("");
  const [validImg, setValidImg] = useState("");

  const [imageHeroBase64, setImageHeroBase64] = useState("");

  const [isPosting, setIsPosting] = useState(false);
  const dispatch = useDispatch();

  // _______________________________________________________________ SUBMIT POST

  function validdatePost() {
    if (post.title === "") setValidTitle("Please enter your post title");
    if (post.summary === "") setValidSummary("Please enter your post summary");
    if (post.content === "" || post.content.length === 11)
      setValidContent("Please enter your post content");

    if (post.imageHeroBase64 === "" && post.imageHeroLink === "")
      setValidImg("Please choose your image");

    if (post.category.length === 0) {
      setValidCategory("Please choose post category");
    }

    if (
      post.title === "" &&
      post.summary === "" &&
      (post.content === "" || post.content.length === 11) &&
      post.imageHeroBase64 === "" &&
      post.imageHeroLink === ""
    ) {
      return false;
    } else if (
      post.title.trim() !== "" &&
      post.summary.trim() !== "" &&
      post.content.trim() !== "" &&
      post.content.length !== 11 &&
      post.category.length > 0 &&
      (post.imageHeroBase64.trim() !== "" || post.imageHeroLink.trim() !== "")
    ) {
      return true;
    }
  }

  function handleSubmitPost() {
    let isValidPost = validdatePost();
    if (isValidPost) {
      dispatch(createNewPost({ ...post, slug: stringToSlug(post.title) }));
    }
  }

  useEffect(() => {
    setPost({ ...post, imageHeroBase64: imageHeroBase64 });
  }, [imageHeroBase64]);

  return (
    <div className="text-left mt-5 mb-12 px-2 lg:px-0">
      <p className="font-bold mb-5 text-[1.5rem] dark:text-gray-300">
        Let's share your moment
      </p>

      <UploadImage
        getImageLink={(link: string) =>
          setPost({ ...post, imageHeroLink: link })
        }
        getImageBase64={(base64: any) => {}}
        setImageBase64={setImageHeroBase64}
        post={post}
        validate={validImg}
        clearValidate={() => setValidImg("")}
      />

      <div className="flex flex-col mb-5">
        <TitleField>Post title</TitleField>
        <InputFiled
          inputChange={(e: any) => setPost({ ...post, title: e.target.value })}
          validate={validTitle}
          clearValidate={() => setValidTitle("")}
        />
      </div>

      <div className="flex flex-col mb-5">
        <TitleField>Post summary</TitleField>
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
        validate={validContent}
        clearValidate={() => setValidContent("")}
        setValidate={(string: string) => setValidContent(string)}
      />

      <div className="flex flex-col mb-5">
        <TitleField>Post Category</TitleField>
        <Category
          validate={validCategory}
          clearValidate={() => setValidCategory("")}
          setPostCategory={(categoryList: any) =>
            setPost({ ...post, category: categoryList })
          }
        />
      </div>

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
