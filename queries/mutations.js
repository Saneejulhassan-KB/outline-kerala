import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $password: String!
    $email: String!
  ) {
    registerUser(username: $username, password: $password, email: $email) {
      user {
        id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const COMMENT_NEWS = gql`
  mutation CommentNews($newsId: Int!, $content: String!) {
    commentNews(newsId: $newsId, content: $content) {
      comment {
        id
        content
        createdAt
        user {
          id
          username
        }
      }
    }
  }
`;
