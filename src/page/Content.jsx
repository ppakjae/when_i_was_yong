import React from "react";
import { ContentDiv } from "../styledComponents";
import { getNext } from "../test_list";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Content = ({ list, getData }) => {
  const navigate = useNavigate();

  let listData = list;

  const changeData = (e) => {
    let clickBtn = e.currentTarget;
    let trigger = clickBtn.childNodes[0].innerText;

    const resultPage = (id) => {
      navigate(`/result/${id}`);
    }; // eslint-disable-next-line

    const nextPage = () => {
      listData = getNext(listData[`next_${trigger}`]);
      let gauge = parseInt(listData.id[0]) * 20;
      getData(gauge, listData);
    };

    console.log(listData[`next_${trigger}`][0]);
    isNaN(parseInt(listData[`next_${trigger}`][0])) ? resultPage(listData[`next_${trigger}`][0]) : nextPage();
  };

  return (
    <ContentDiv>
      <div className="contentWrapper">
        <button type="button" className="back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 12H5"
              stroke="#898989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="#898989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="questionBox">
          <h1>Q{listData.id[0]}</h1>
          <p>{listData.question}</p>
        </div>
        <div className="answerBox">
          <button
            type="button"
            onClick={(e) => {
              changeData(e);
            }}
            className="ans ans_A"
          >
            <h1>A</h1>
            <img src={listData.img_A} alt="answer1"></img>
            <div className="text text_A">
              <p>{listData.ans_A}</p>
            </div>
          </button>

          <button
            type="button"
            onClick={(e) => {
              changeData(e);
            }}
            className="ans ans_B"
          >
            <h1>B</h1>
            <img src={listData.img_B} alt="answer2"></img>
            <div className="text text_b">
              <p>{listData.ans_B}</p>
            </div>
          </button>
        </div>
      </div>
    </ContentDiv>
  );
};

export default Content;
