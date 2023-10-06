import './App.css';
import { RouterProvider } from "react-router-dom"
import { router } from './lib/route';
import { styled } from 'styled-components';

function App() {
  return (
    <Wrapper className="section">
      <RouterProvider router={router} />
    </Wrapper>
    );
}

export default App;
const Wrapper=styled.section`
font-family: 'DM Sans', sans-serif;
h1,h2,h3,h4,h5,h6{
  font-family: 'Inter', sans-serif; !important;
}
`