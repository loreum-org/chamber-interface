import { gql } from "graphql-request";

export const getChamberDeployedsQuery = gql`
query {
  chamberDeployeds {
    chamber
    govToken
    memberToken
    deployer
    serial
  }
}
`;

export const getChamberByAddressQuery = gql`
query getChamberByAddress($chamberAddress: String!) {
  chamberDeployeds(where: {chamber: $chamberAddress}) {
    chamber
    deployer
    govToken
    memberToken
    serial
  }
}
`;