import styled from "styled-components";

export const Container = styled.div`
  @media ${p => p.theme.media.mobile} {
    max-width: 100%;
    padding: 100px 20px 20px 20px;
  }

  @media ${p => p.theme.media.tablet} {
    padding: 160px 32px 30px 32px;
  }

  @media ${p => p.theme.media.desktop} {
    padding: 127px 32px 40px 32px;
  }
`;

export const Title = styled.h1`
  @media ${p => p.theme.media.mobile} {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.37;
    text-align: center;
    margin-bottom: 28px;
    color: ${p => p.theme.colors.primaryText};
  }

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;
