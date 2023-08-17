import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';


const Tutorial = ({ closeModal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <ModalContent>
      {/* 페이지 내용 */}
      {currentPage === 1 && <PageContent><img src="/tutorial/tutorial_bluetooth.png" alt="tutorial_bluetooth" style={{ width: '200px' }}/>먼저, 블루투스 책갈피를 어플에 등록해주세요 </PageContent> }
      {currentPage === 2 && <PageContent><img src="/tutorial/tutorial_reading.png" alt="tutorial_reading"  style={{ width: '280px' }}/>책갈피를 뺏다 꽂으면 책 기록이 자동으로 생성돼요 </PageContent>}

      {/* 페이지네이션 */}
      <PaginationWrapper>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          hidePrevButton
          hideNextButton
          color="primary"
        />
      </PaginationWrapper>

      {/* '나중에 보기' 버튼 */}
      <StyledButton variant="contained" onClick={closeModal}>
        나중에 보기
      </StyledButton>
    </ModalContent>
  );
};

const ModalContent = styled.div`
  min-width: 240px;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContent = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column; /* 상하로 정렬되도록 변경 */
  justify-content: center;
  align-items: center;
  justify-content: center; /* 상하 중앙 정렬 */
  padding: 20px 0; /* 상하 패딩 추가 */
`;

const PaginationWrapper = styled.div`
  margin-top: 20px;
`;

// 여기 왜 important안하면 적용이 안될까
const StyledButton = styled(Button)`
  margin-top: 20px !important;
`;

export default Tutorial;
