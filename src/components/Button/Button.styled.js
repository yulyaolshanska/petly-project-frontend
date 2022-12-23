import styled from "styled-components";
import { HiTrash } from "react-icons/hi2";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;

  border: ${p => (p.active ? "none" : p.theme.borders.primaryBtn)};
  border-radius: ${p => p.theme.radii.btn};

  background-color: ${p => (p.active ? p.theme.colors.accent : p.theme.colors.white)};
  color: ${p => (p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.accent)};
  cursor: pointer;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => (p.active ? p.theme.colors.hoverBtn : p.theme.colors.white)};
    border-color: ${p => p.theme.colors.hoverBtn};
    color: ${p => (p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.hoverBtn)};
    outline: none;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  width: 20px;
  height: 20px;
  border: none;
  background-color: ${p => p.theme.colors.background};
  cursor: pointer;
  border-radius: ${p => p.theme.radii.round};
  border: none;
  @media ${p => p.theme.media.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const DelIcon = styled(HiTrash)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.greyIcon};
  @media ${p => p.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const PaginationButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const PaginationButton = styled(StyledButton)`
  border-radius: 20%;
  :not(:last-child) {
    margin-right: 10px;
  }
  color: ${p => (p.activeBtn ? p.theme.colors.accent : "rgb(128 128 128 / 37%);")};
`;
