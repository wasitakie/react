import "./ShowPage.css";

function ShowPage(props) {
  const { post, onBgClick } = props;
  return (
    <div className="post">
      <div className="bg-show" onClick={onBgClick}>
        <div className="content">
          <img src={post.Url} alt="" />
          <h4>{post.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
