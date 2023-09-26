import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navber from "./components/Navber";
import ShowPage from "./components/ShowPage";
import Table from "./components/Table";

const shows = [
  {
    title: "1",
    Url: "https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "2",
    Url: "https://images.unsplash.com/photo-1694732519038-dcc9379eb148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  },
];

function App() {
  const [selectText, setSelectText] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onPostOpenClick(thePost) {
    setSelectText(thePost);
  }
  function onPostCloseClick() {
    setSelectText(null);
  }

  const showsPage = shows
    .filter((shows) => {
      return shows.title.includes(searchText);
    })
    .map((show, index) => {
      return <Table key={index} show={show} onOpenClick={onPostOpenClick} />;
    });
  let post = null;
  if (!!selectText) {
    post = <ShowPage post={selectText} onBgClick={onPostCloseClick} />;
  }
  return (
    <div className="app">
      <Navber />
      <input
        type="text"
        placeholder="ค้นหา"
        className="searchText-input"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <div className="box">{showsPage}</div>
      {post}
    </div>
  );
}

export default App;
