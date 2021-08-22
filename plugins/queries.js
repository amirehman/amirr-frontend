import gql from "graphql-tag";
//Queries
import LatestProjectsQuery from "~/gql/queries/LatestProjects";
import UIComponentQuery from "~/gql/queries/UIComponent";
import getProjectsByTypeQuery from "~/gql/queries/GetProjectsByType";

import { unWrap, getErrorResponse } from '~/utils/fetchUtils'


export default function (context, inject) {

  inject('gqlQueries', {
    getLatestProjects,
    getProject,
    getProjectsByType
  })

  const client = context.app.apolloProvider.defaultClient;


  async function getLatestProjects () {
    return await client.query({
        query: LatestProjectsQuery
    })
    .then(({ data }) => data && data.projects.nodes);
  }


  async function getProject ($slug) {
    try {
      return await client.query({
        query: UIComponentQuery,
        variables: {
          id: $slug
        }
        })
      .then(({ data }) => data && data.project);
    }
    catch(error){
      return getErrorResponse(error)
    }
  }

  async function getProjectsByType ($slug) {
    try {
      return await client.query({
        query: getProjectsByTypeQuery,
        variables: {
          id: $slug
        }
        })
      .then(({ data }) => data && data.projectType);
    }
    catch(error){
      return getErrorResponse(error)
    }
  }


}
