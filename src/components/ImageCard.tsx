import React from "react";
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Styles = styled.div`
.box{
    background-color: rgb(255, 255, 255, 0.4);
}
.photo{
    max-height: 180px;
    cursor: zoom-in;
    transition: .5s ease;
    backface-visibility: hidden;
}
.author{
    cursor: pointer;
}
.author:hover{
    color: gray;
}
.photo:hover {
    opacity: 0.3;
  }
`;

const ImageCard = ({image, term, setSelectedImg}:{image:any, term:any, setSelectedImg:any}) => {

    return (
        <Styles>
            <div className="box max-w-sm rounded overflow-hidden shadow-lg py-2">
            <LazyLoadImage src={image.download_url+term} alt=""  className="photo object-cover mx-auto" 
                    onClick={()=> setSelectedImg(image.download_url+term)}/>
                {/* <img src={image.download_url+term} alt=""  className="photo object-cover mx-auto" 
                    onClick={()=> setSelectedImg(image.download_url+term)}/> */}
                <div className="px-6 py-4">
                    <a href={image.url} target={"_BLANK"} rel={"noreferrer"}><div className="author font-bold text-zinc-400 text-xl mb-1 mx-auto"> photo by {image.author}</div></a>
                </div>
            </div>
        </Styles>
    );
}

export default ImageCard