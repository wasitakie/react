const Table = (props) => {
  const { show, onOpenClick } = props;

  return (
    <div>
      <div className="box-imges">
        <img
          src={show.Url}
          alt=""
          onClick={() => {
            onOpenClick(show);
          }}
        />
        <h4>{show.title}</h4>
      </div>
    </div>
  );
};

export default Table;
