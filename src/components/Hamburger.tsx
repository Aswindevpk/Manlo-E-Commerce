import React, { cloneElement, createContext, Dispatch, ReactElement, ReactNode, SetStateAction, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import Logo from "./Navbar/Logo";
import { AnimatePresence, motion } from "framer-motion";
import ClickableIcon from "../ui/ClickableIcon";
import useOutsideClickHam from "../hooks/useOutsideClickHam";

// Styled components for Menu
const StyledMenuContainer = styled(motion.div)`
  background-color: var(--color-grey-50);
  width: 320px;
  height: 100vh;
  border-right: 1px solid var(--color-grey-100);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const StyledMenu = styled.div`
  padding: 2rem;
`;

const StyledMenuHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 2rem;
  justify-content: space-between;
  height: 6.55rem;
  border-bottom: 1px solid var(--color-grey-light);
`;


// Modal Context Type
interface ModalContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    toggleRef: React.RefObject<HTMLElement | null>;
}

// HamburgerContext
const HamburgerContext = createContext<ModalContextType | undefined>(undefined);

// Hamburger Component that provides the context
interface ModalProps {
    children: ReactNode;
}

function Hamburger({ children }: ModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    //ref for toggle
    const toggleRef = useRef<HTMLElement>(null);
    return (
        <HamburgerContext.Provider value={{ toggleRef, isOpen, setIsOpen }}>
            {children}
        </HamburgerContext.Provider>
    );
}

// Toggle Component to open/close menu
interface OpenProps {
    children: ReactElement<{ onClick?: () => void, ref: React.RefObject<HTMLElement | null> }>;
}

function Toggle({ children }: OpenProps) {
    const context = useContext(HamburgerContext);

    if (!context) {
        throw new Error("Toggle must be used within Hamburger");
    }

    const { setIsOpen, toggleRef } = context;


    return React.isValidElement(children)
        ? cloneElement(children, {
            onClick: () => setIsOpen((prev) => !prev),
            ref: toggleRef,
        })
        : children;
}

// WindowProps for the Menu
interface WindowProps {
    children: React.ReactElement<{ onClose?: () => void }>;
}

const slideIn = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
};

// Menu Component that renders the side menu
function Menu({ children }: WindowProps) {
    const context = useContext(HamburgerContext);

    if (!context) {
        throw new Error("Menu must be used within Hamburger");
    }

    const { isOpen, setIsOpen, toggleRef } = context;
    const close = () => setIsOpen(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useOutsideClickHam(close, [menuRef, toggleRef]);

    const enhancedChildren = React.cloneElement(children, { onClose: close });

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <StyledMenuContainer
                    ref={menuRef}
                    variants={slideIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                >
                    <StyledMenuHeader>
                        <Logo />
                        <ClickableIcon onClick={close}>
                            <HiXMark size={26} />
                        </ClickableIcon>
                    </StyledMenuHeader>
                    <StyledMenu>
                        {enhancedChildren}
                    </StyledMenu>
                </StyledMenuContainer>
            )}
        </AnimatePresence>,
        document.body
    );
}

Hamburger.Toggle = Toggle;
Hamburger.Menu = Menu;

export default Hamburger;
