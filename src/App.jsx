import React from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "wwwww"]);
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
              <li>
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
          <li>
            <div className="list-raw">
              <p>ddd</p>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div className="list-raw">
              <p>sssssss</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
