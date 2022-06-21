import "suneditor/dist/css/suneditor.min.css";
import "./post-create.css";

import InputFiled from "./InputFiled";
import UploadImage from "./UploadImage";
import { useEffect, useState } from "react";
import PostEdittor from "./PostEditor";
import TitleField from "./TitleField";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { createNewPost, editPost } from "../../store/posts/action";
import stringToSlug from "../common/StringToSlug";
import CheckUserExist from "../common/CheckUserExist";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { Post } from "../interface";

type Props = {};

const CreatePost = (props: Props) => {
  const location = useLocation();
  const initPostValue: any = location.state;

  const isEditMode = location.pathname.indexOf("edit-post") > 0;

  const { currentUser } = CheckUserExist();
  const [post, setPost] = useState(
    !isEditMode
      ? {
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
          category: "",
        }
      : {
          id: initPostValue.id,
          userId: initPostValue.userId,
          imageHeroBase64: initPostValue.imageHeroBase64,
          imageHeroLink: initPostValue.imageHeroLink,
          title: initPostValue.title,
          summary: initPostValue.summary,
          content: initPostValue.content,
          comment: 0,
          love: 0,
          isReport: false,
          reportQuantity: 0,
          category: initPostValue.category,
        }
  );

  const [validTitle, setValidTitle] = useState("");
  const [validSummary, setValidSummary] = useState("");
  const [validContent, setValidContent] = useState("");
  const [validCategory, setValidCategory] = useState("");
  const [validImg, setValidImg] = useState("");

  const [imageHeroBase64, setImageHeroBase64] = useState(post.imageHeroBase64);
  const [isCreateNewPostLoading, setIsCreateNewPostLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // _______________________________________________________________ SUBMIT POST

  function validdatePost() {
    if (post.title === "") setValidTitle("Please enter your post title");
    if (post.summary === "") setValidSummary("Please enter your post summary");
    if (post.content === "" || post.content.length === 11)
      setValidContent("Please enter your post content");

    if (post.imageHeroBase64 === "" && post.imageHeroLink === "")
      setValidImg("Please choose your image");

    if (post.category === "" || post.category.length === 0) {
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
      setIsCreateNewPostLoading(true);
      dispatch(
        createNewPost({
          ...post,
          userId: currentUser?.id,
          slug: stringToSlug(post.title),
        })
      ).then((res: any) => {
        setIsCreateNewPostLoading(false);
        if (res.ok) {
          const newPost = res.data;
          navigate(`/post/${newPost.slug}`);
        } else {
          toast.error("Something wrong, please check your connection!");
        }
      });
    }
  }

  function handleSubmitEditPost() {
    let isValidPost = validdatePost();
    if (isValidPost) {
      setIsCreateNewPostLoading(true);
      dispatch(
        editPost({
          ...post,
          slug: stringToSlug(post.title),
        })
      ).then((res: any) => {
        setIsCreateNewPostLoading(false);
        if (res.ok) {
          const postEdit = res.data;
          navigate(`/post/${postEdit.slug}`);
        } else {
          toast.error("Something wrong, please check your connection!");
        }
      });
    }
  }

  useEffect(() => {
    setPost({ ...post, imageHeroBase64: imageHeroBase64 });
  }, [imageHeroBase64]);

  useEffect(() => {
    if (isEditMode) {
      setPost({ ...post, imageHeroBase64: initPostValue.imageHeroBase64 });
      console.log("new post", post);
    }
  }, [isEditMode]);

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
          value={post.title}
          inputChange={(e: any) => setPost({ ...post, title: e.target.value })}
          validate={validTitle}
          clearValidate={() => setValidTitle("")}
        />
      </div>

      <div className="flex flex-col mb-5">
        <TitleField>Post summary</TitleField>
        <InputFiled
          value={post.summary}
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
          postCategory={post.category}
          validate={validCategory}
          clearValidate={() => setValidCategory("")}
          setPostCategory={(categoryList: any) =>
            setPost({ ...post, category: categoryList })
          }
        />
      </div>

      <ToastContainer
        position="bottom-right"
        pauseOnHover={false}
        autoClose={2000}
      />

      {!isEditMode ? (
        <Button
          handleClick={handleSubmitPost}
          isLoading={isCreateNewPostLoading}
        >
          Create my new post
        </Button>
      ) : (
        <Button
          handleClick={handleSubmitEditPost}
          isLoading={isCreateNewPostLoading}
        >
          Edit my post
        </Button>
      )}
    </div>
  );
};

export default CreatePost;
