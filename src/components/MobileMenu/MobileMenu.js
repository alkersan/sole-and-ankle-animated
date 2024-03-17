/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {QUERIES, WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({isOpen, onDismiss}) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <SlidingContent aria-label="Menu">
                <Content>
                    <CloseButton onClick={onDismiss}>
                        <Icon id="close"/>
                        <VisuallyHidden>Dismiss menu</VisuallyHidden>
                    </CloseButton>
                    <Filler/>
                    <Nav>
                        <NavLink href="/sale">Sale</NavLink>
                        <NavLink href="/new">New&nbsp;Releases</NavLink>
                        <NavLink href="/men">Men</NavLink>
                        <NavLink href="/women">Women</NavLink>
                        <NavLink href="/kids">Kids</NavLink>
                        <NavLink href="/collections">Collections</NavLink>
                    </Nav>
                    <Footer>
                        <SubLink href="/terms">Terms and Conditions</SubLink>
                        <SubLink href="/privacy">Privacy Policy</SubLink>
                        <SubLink href="/contact">Contact Us</SubLink>
                    </Footer>
                </Content>
            </SlidingContent>
        </Overlay>
    );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  @media (prefers-reduced-motion: no-preference) {
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 100; }
    }
    animation: fade-in 350ms ease-in-out;
  }
`;

const SlidingContent = styled(DialogContent)`
  background: white;
  width: 300px;
  padding: 24px 32px;
  
  @media (prefers-reduced-motion: no-preference) {
    @keyframes slide {
      from { transform: translateX(100%); }
      to { transform: translateX(0%); }
    }
    animation: slide 300ms 150ms backwards ease-out;
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: fade-in 350ms 350ms backwards;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
