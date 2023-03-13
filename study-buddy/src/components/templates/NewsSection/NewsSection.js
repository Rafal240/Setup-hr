import React, { useState, useEffect } from "react";
import { NewsSectionTitle, NewsSectionWrapper, ArticleWrapper, TitleWrapper, ContentWrapper } from "./NewsSection.styles";
import { AddButton } from "components/atoms/AddButton/AddButton";
import axios from "axios";
export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;
const apiToken = "30a427c2ce1edc113b5c9739cd5862";
const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${apiToken}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
  }, []);
  return (
    <NewsSectionWrapper>
      <NewsSectionTitle>University News Feed</NewsSectionTitle>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <AddButton isBig>Read more</AddButton>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionTitle>{error ? error : "Loading..."}</NewsSectionTitle>
      )}
    </NewsSectionWrapper>
  );
};
export default NewsSection;
