import styled from "styled-components";

export const UserPageContainer = styled.div`
  padding: 119px 20px 20px 20px;
  @media ${p => p.theme.media.mobile} {
    width: 320px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 768px;
    padding: 158px 32px 30px 32px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    padding: 126px 32px 40px 32px;
    width: 1280px;
  }
`;

export const BoxUser = styled.section`
  position: relative;
  height: fit-content;
  margin-bottom: 40px;
  @media ${p => p.theme.media.tablet} {
    position: relative;
    margin-bottom: 20px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-right: 32px;
    margin-bottom: 0px;
  }
`;
