import React, { useState } from "react";
import "./Form.css";
import ArticleList from "../articleList/ArticleList";

export default function Form() {
  const [articleName, setArticleName] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");
  const [articleState, setArticleState] = useState("Draft");
  const [articleList, setArticleList] = useState([]);

  function getArticleName(e) {
    setArticleName(e.target.value);
  }

  function getArticleAuthor(e) {
    setArticleAuthor(e.target.value);
  }

  function getArticleState(e) {
    setArticleState(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newArticleList = [
      ...articleList,
      { name: articleName, state: articleState, author: articleAuthor },
    ];
    setArticleList(newArticleList);
    setArticleName("");
    setArticleAuthor("");
    setArticleState("Draft");
  }

  function deleteArticle(index) {
    const newArticleList = [...articleList];
    newArticleList.splice(index, 1);
    setArticleList(newArticleList);
  }

  function editArticle(index) {
    const newName = prompt("Inserisci il nuovo nome");
    const newState = prompt("Inserisci il nuovo nome");
    const newAuthor = prompt("Inserisci il nuovo nome");
    const newArticleList = [...articleList];
    newArticleList[index].name = newName;
    newArticleList[index].state = newState;
    newArticleList[index].author = newAuthor;
    setArticleList(newArticleList);
  }

  return (
    <>
      <form className="mb-1 form" onSubmit={(e) => handleSubmit(e)}>
        <label className="form-label">Articoli</label>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Inserisci un nuovo articolo"
            value={articleName}
            onChange={(e) => getArticleName(e)}
            required
          />
          <select
            class="form-select"
            value={articleState}
            onChange={(e) => getArticleState(e)}
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published </option>
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Autore"
            value={articleAuthor}
            onChange={(e) => getArticleAuthor(e)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Inserisci
          </button>
        </div>
      </form>
      <div className="articleList">
        <ArticleList
          articleList={articleList}
          deleteArticle={deleteArticle}
          editArticle={editArticle}
        ></ArticleList>
      </div>
    </>
  );
}
