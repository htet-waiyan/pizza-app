import React from 'react';
import styled from 'styled-components';

const StyleCard = styled.div``;
const StyleCardHeader = styled.h6`
    font-size: 1em;
`;
const StyleCardBody = styled.div`
    font-size: 0.8em;
`

const GroupCard = () => {
    return (
        <StyleCard className="card">
            <StyleCardBody className="card-body">
              <StyleCardHeader className="card-title text-start">Pornhub Developers</StyleCardHeader>
              <StyleCardHeader className="card-subtitle mb-2 text-muted text-start">6 Members</StyleCardHeader>
              <hr/>
              <p className="card-text text-start mb-2">Total spending S$650</p>
              <p className="card-text text-start">No. of receipts 130</p>
            </StyleCardBody>
        </StyleCard>
    );
}

export default GroupCard;