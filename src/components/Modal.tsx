import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .backdrop img{
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    border: 3px solid white;
  }
`;

const Modal = ({selectedImg, setSelectedImg}:{selectedImg:any, setSelectedImg:any}) => {
    const handleClick = (e:any) => {
        if(e.target.classList.contains('backdrop'))
            setSelectedImg(null);
    }
  return(
      <Styles>
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged" />
        </div>
      </Styles>
  )
}

export default Modal;
