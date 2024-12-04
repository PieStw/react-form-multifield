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
            <p>Stato: {element.state}</p>
            <p>Autore: {element.author}</p>
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
