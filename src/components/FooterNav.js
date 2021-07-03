import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faUserFriends, faBell, faUserCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
  Link,
} from 'react-router-dom';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
`

const StyledLink = styled(Link)`
    &, &:visited {
        color: #666;
    }
`

const FooterNav = () => {
    return (
            <StyledFooter>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <StyledLink to="/"><FontAwesomeIcon icon={faWallet} /></StyledLink>
                        </div>
                        <div className="col">
                            <StyledLink to="/bill"><FontAwesomeIcon icon={faFileAlt} /></StyledLink>
                        </div>
                        <div className="col">
                            <StyledLink to="/groups"><FontAwesomeIcon icon={faUserFriends} /></StyledLink>
                        </div>
                        <div className="col">
                            <StyledLink to="/profile"><FontAwesomeIcon icon={faUserCircle} /></StyledLink>
                        </div>
                    </div>
                </div>
            </StyledFooter>
    );
}

export default FooterNav;