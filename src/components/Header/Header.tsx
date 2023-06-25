import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
  background-color: #969191;
  color: #297129;
  font-size: ${42 / 16}rem;
  font-weight: 700;
`;

function Header() {
  return <Wrapper>Weather</Wrapper>;
}

export default Header;
