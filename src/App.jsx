import React from "react";
import { useState } from "react/cjs/react.development";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaaa", "nnnnn"]);
  const [completeTodos, setCompleteTodos] = useState(["mmmmmm"]);
  return (
    <>
      <div className="inputArea">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="imcompleteArea">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-raw">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="completeArea">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-raw">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
