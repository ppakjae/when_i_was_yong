import React, { useState } from "react";
import Banner from "./Banner";
import Content from "./Content";
import { ContainerDiv } from "../styledComponents";
import { getList } from "../test_list";

// import { getLists } from "../test_list";

const Test = () => {
  let listId = "1";
  // const lists = getLists();
  const [list, setList] = useState(getList(listId));
  const [gauge, setGauge] = useState(20);

  const getData = (gauge, list) => {
    setGauge(gauge);
    setList(list);
  };

  return (
    <ContainerDiv>
      <Banner gauge={gauge}></Banner>
      <Content list={list} getData={getData}></Content>
      <div className="rsd">
        <p>{list.cpr}</p>
      </div>
    </ContainerDiv>
  );
};

export default Test;
