import styled from "styled-components";
import { useContext } from "react";
import { MainContext } from "../../App";

const Wrapper = styled.div`
  padding: 40px;
  padding-top: 60px;
  margin-top: -42px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #c9c6c6;
`;

const Name = styled.div`
  font-size: ${22 / 16}rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Decor = styled.div`
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 8px;
`;

const EntryWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

function Result() {
  const { result } = useContext(MainContext);

  if (!result || !result.name) {
    return null;
  }

  return (
    <Wrapper>
      <EntryWrapper>
        <Name>{result.name}</Name>
        <Decor />
      </EntryWrapper>
      <EntryWrapper>
        <span>Description:</span>
        <span>{result.description}</span>
      </EntryWrapper>

      <EntryWrapper>
        <span>Current temp:</span>
        <span>{`${result.temp}°F`}</span>
      </EntryWrapper>

      <EntryWrapper>
        <span>Feels like:</span>
        <span>{`${result.feelsLike}°F`}</span>
      </EntryWrapper>

      <EntryWrapper>
        <span>Wind speed:</span>
        <span>{result.windSpeed}mph</span>
      </EntryWrapper>
    </Wrapper>
  );
}

export default Result;
