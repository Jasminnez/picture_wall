import React, {useState} from "react";
import styled from 'styled-components';

const Styles = styled.div`
    display: flex;
    align-items: center;
    color: #888;
    justify-content: center;

    .value {
        flex: 1;
        font-size: 2rem;
    }

    .slider {
        flex: 9;
        -webkit-apperance: none;
        height: 15px;
        outline: none;
        cursor: pointer;
    }
`;

const ImageFilter = ({filterText}:{filterText:any}) => {
  const [state, setBlur] = useState('1');

    return (
    <Styles>
        <div>
           <ul className="flex justify-center m-2">
          <li className="mr-1">
            <button onClick={() => {filterText("") } } className="inline-block border border-blue-500 rounded py-2 px-2 bg-blue-500 hover:bg-blue-700 text-white" >Normal</button>
          </li>
          <li className="mr-1">
            <button onClick={() => {filterText("?grayscale")} } className="inline-block border border-white rounded bg-gray-500 hover:border-gray-700 text-white hover:bg-gray-700 py-2 px-2">Grayscale</button>
          </li>
          </ul>
          <div className="flex flex-col justify-center">
          
              <input type="range" min={1} max={10} value={state} className='slider' onChange={(e) => {filterText("?blur="+e.target.value); setBlur(e.target.value)}} />
              <div className="value">Blur strenght:{state}</div>
          </div>
          </div>
      </Styles> 
    );
}

export default ImageFilter