import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Contact: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/contacts/othello");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <main className="main">
        <h1>マルチ ゲーム</h1>
        <div>
          <div>
            <button id="start" onClick={handleStart}>
              始める
            </button>
            <button id="back" onClick={handleGoBack}>
              戻る
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
