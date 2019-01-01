import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {
        movies{
            id
            name
            score
        }
    }
`;
