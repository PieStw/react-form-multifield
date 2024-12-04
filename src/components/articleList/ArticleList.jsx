import React from "react";
import "./ArticleList.css";

export default function ArticleList({
  articleList,
  deleteArticle,
  editArticle,
}) {
  return (
    <>
      <div className="list">
        {articleList.map((element, index) => (
          <div key={index} className="item">
            <div className="card">
              <img src={element.img} className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">{element.name}</h2>
                <h5 className="card-subtitle ">{element.author}</h5>
                <h5 className="card-subtitle mt-1">{element.state}</h5>
                <p className="card-text">{element.content}</p>
                <p>Tags:</p>

                {element.tags[0] && (
                  <span className="badge text-bg-primary me-2">HTML</span>
                )}
                {element.tags[1] && (
                  <span className="badge text-bg-success me-2">CSS</span>
                )}
                {element.tags[2] && (
                  <span className="badge text-bg-info me-2">JS</span>
                )}

                <hr />

                <button
                  className="btn btn-danger me-2"
                  onClick={() => {
                    deleteArticle(index);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => {
                    editArticle(index);
                  }}
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
