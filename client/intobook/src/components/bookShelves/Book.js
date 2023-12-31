import React from 'react';
import BookCover from './../common/bookCover';
import { Typography, Card } from '@mui/material';
import { styled } from 'styled-components';
import { ProgressBar } from '../common';

const ResultBook = ({ bookInfo, customStyle, width }) => {
  const tempTitle = bookInfo?.title;
  const tempAauthor = bookInfo?.author;
  
  const title = tempTitle && tempTitle.includes('-') ? tempTitle.split('-')[0].trim() : tempTitle;
  const author = tempAauthor && tempAauthor.includes('(') ? tempAauthor.split('(')[0].trim() : tempAauthor;
  const nowPage = bookInfo?.nowPage;
  const progress = bookInfo?.progress;
  

  return (
    <>
    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', width: {xs: width}, cursor: 'pointer' }}  >
      <BookCover image={bookInfo?.coverImage} alt={title + 'image'}
        customStyle={{ ...customStyle }}
      />
      <ProgressBar progress={progress} containerHeight={7} bg={'var(--main-point-color)'}  desc={false} />
        <div style={{ height: '42px', padding: '2px', margin: '5px 0' }} >
          <TitleTypography
            fontWeight={'700'} 
            fontSize={'12px'} 
            letterSpacing={'-0.5px'}
          >
            {title}
          </TitleTypography>
          <Typography fontSize={'8px'} color={'#AFB1B6'} letterSpacing={'-1px'}>
            {author}
          </Typography>
        </div>  
    </Card>
    </>
  );
};

const TitleTypography = styled.div`
  color: black;
  font-size: var(--font-h6);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default ResultBook;