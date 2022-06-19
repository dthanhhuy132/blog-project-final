<>
  {postDetail ? (
    <>
      <div className="w-3/4 h-full rounded-br-xl rounded-bl-xl overflow-hidden">
        <PostDetailTitle postDetail={postDetail} />
        <p className="text-center md:text-justify mt-5 font-semibold text-[1rem] italic dark:text-gray-300">
          <q>{postDetail?.summary}</q>
        </p>
        <div
          className="dark:text-gray-300 mt-4 text-[0.9rem] text-left dth-dangerous-html"
          dangerouslySetInnerHTML={{ __html: `${postDetail?.content}` }}
        />
        <PostDeatilAction />
        {/* Comment section */}
        <CommentForm postDetail={postDetail} />
        <CommentItem commentParent={true} />
        <CommentItem />
      </div>

      <div className="flex flex-col gap-10 w-1/4">
        {/* related post */}

        <div>
          <SectionTitle top={3}>Category</SectionTitle>
          <div className="flex flex-col gap-4"></div>
        </div>
        <div>
          <SectionTitle top={5}>Related Posts</SectionTitle>
          <div className="flex flex-col gap-4">
            <PostItem titleSmaller />
            <PostItem titleSmaller />
            <PostItem titleSmaller />
            <PostItem titleSmaller />
            <PostItem titleSmaller />
          </div>
        </div>

        {/* Category */}
      </div>
    </>
  ) : (
    <SkeletonPostDeatail />
  )}
</>;
