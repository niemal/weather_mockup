import styled from "styled-components";
import fetchWeather from "../fetchWeather";
import { useContext, useRef } from "react";
import { MainContext } from "../../App";

const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px black;
  background-color: white;
  gap: 8px;
  z-index: 2;
`;

const Title = styled.label`
  font-size: ${22 / 16}rem;
  font-weight: 700;
`;

const Input = styled.input`
  width: calc(100% - 8px);
`;

const Button = styled.button`
  text-align: center;
  width: 100%;
  cursor: pointer;
  display: block;
  border: none;
  font-size: inherit;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  background-color: white;
  border: 1px solid gray;
  box-shadow: 1px 1px 3px gray;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { result, setResult } = useContext(MainContext);

  if (!setResult) {
    return null;
  }

  return (
    <Wrapper>
      <Title>City</Title>
      <Input
        ref={inputRef}
        placeholder={"Enter your city"}
        // @ts-ignore
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchWeather(inputRef?.current?.value ?? "").then((res) => {
              setResult(res ?? {});
            });
          }
        }}
      />
      <Button
        onClick={() => {
          fetchWeather(inputRef?.current?.value ?? "").then((res) => {
            setResult(res ?? {});
          });
        }}
      >
        Search
      </Button>
    </Wrapper>
  );
}

export default Form;
