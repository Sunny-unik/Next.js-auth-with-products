/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getComment } from "../../../utils/api";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    const { data } = await getComment(postId);
    console.log({ data: data });
    setComments(data.comments);
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return (
    <div className="space-y-2 mt-4">
      {comments ? (
        <div key={comments.id} className="border p-2 rounded">
          <p>{comments.body}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Comments;
