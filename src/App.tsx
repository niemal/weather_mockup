import styled from "styled-components";
import { createContext, useState } from "react";
import type { WeatherResult } from "./components/fetchWeather";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

const Main = styled.main`
  min-height: 100%;
  max-width: 100%;
  width: calc(100% - 128px);
  padding: 64px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  background-color: #c0c6c0;
  padding: 32px;
  width: calc(100% - 64px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContext = createContext<{
  result?: WeatherResult;
  setResult?: (r: WeatherResult) => void;
}>({});

function App() {
  const [result, setResult] = useState<WeatherResult>({});

  return (
    <Main>
      <Header />

      <MainContext.Provider value={{ result, setResult }}>
        <Content>
          <Form />
          <Result />
        </Content>
      </MainContext.Provider>
    </Main>
  );
}

export default App;
