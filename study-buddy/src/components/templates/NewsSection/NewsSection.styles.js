import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import styled from "styled-components";
export const NewsSectionWrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  overflow-y: scroll;
`;
export const NewsSectionTitle = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  img {
    max-width: 200px;
    object-fit: cover;
    margin-left: 35px;
  }
`;
