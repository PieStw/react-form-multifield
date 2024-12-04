import React from "react";
import "./Article.css";

export default function ArticleList({
  articleList,
  deleteArticle,
  editArticle,
}) {
  return (
    <>
      <ul>
        {articleList.map((element, index) => (
          <li key={index} className="item">
            <p>Nome articolo: {element.name}</p>
            <p>Autore: {element.author}</p>
            <p>Img: {element.img}</p>
            <p>Contenuto: {element.content}</p>
            <p>Stato: {element.state}</p>
            <p>Tags:</p>
            <p>{element.tags[0] && <p>HTML</p>}</p>
            <p>{element.tags[1] && <p>CSS</p>}</p>
            <p>{element.tags[2] && <p>JS</p>}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteArticle(index);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                editArticle(index);
              }}
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
