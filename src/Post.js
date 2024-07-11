import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { postByIdAction } from "./postbyidaction";
import Modal from "react-bootstrap/Modal";
import { fetchComments } from "./commentsaction";
function Post() {
  let { id } = useParams();
  let { loading, post, error } = useSelector((state) => state.postByIdRequest);
  let { commentsLoading, comments, commentsError } = useSelector(
    (state) => state.commentsRequest
  );
  let [showComments, setShowComments] = useState(false);
  let dispath = useDispatch();
  useEffect(() => {
    dispath(postByIdAction(id));
  }, [dispath]);
  useEffect(() => {
    dispath(fetchComments(id));
  }, [id]);
  const handleClick = () => {
    setShowComments(!showComments);
    dispath(fetchComments(id));
  };
  return (
    <>
      {loading && "loading"}
      {error && "error"}
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{post && post.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{post && post.body}</p>
          </Modal.Body>
        </Modal.Dialog>
      </div>
      <button onClick={handleClick}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments ? (
        <div>
          {commentsLoading && "Loading"}
          {commentsError && "error"}
          {comments &&
            comments.map((comment) => (
              <li>
                <b>Commented By:</b> {comment.name}
                <br></br>
                <p>{comment.body}</p>
              </li>
            ))}
        </div>
      ) : (
        " "
      )}
      <br></br>
      <Link to="/posts">Back</Link>
    </>
  );
}
export default Post;