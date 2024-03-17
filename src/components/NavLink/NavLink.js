import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';


const NavLink = ({href, primary, children}) => {
    return (
        <Wrapper>
            <Link href={href}>{children}</Link>
            <BoldLink href={href}>{children}</BoldLink>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  
  color: var(--color-gray-900);
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Link = styled.a`
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  font-weight: ${WEIGHTS.medium};
  transition: transform 150ms;
  
  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(-100%);
      transition: transform 300ms;
    }
  }
`;

const BoldLink = styled(Link)`
  position: absolute;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;
