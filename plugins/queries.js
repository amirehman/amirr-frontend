import gql from "graphql-tag";
//Queries
import LatestProjectsQuery from "~/gql/queries/LatestProjects";
import UIComponentQuery from "~/gql/queries/UIComponent";
import getVideoQuery from "~/gql/queries/GetVideo";
import getProjectsByTypeQuery from "~/gql/queries/GetProjectsByType";
import getMenuByNameQuery from "~/gql/queries/GetMenuByName";
import getPageByURLQuery from "~/gql/queries/GetPageByURL";
import getPlaylistsQuery from "~/gql/queries/GetPlaylists";
import getPlaylistQuery from "~/gql/queries/GetVideosByPlaylist";
import getVideosQuery from "~/gql/queries/GetVideos";

import { unWrap, getErrorResponse } from '~/utils/fetchUtils'


export default function (context, inject) {

  inject('gqlQueries', {
    getLatestProjects,
    getProject,
    getMenuByName,
    getPageByURL,
    getPlaylists,
    getPlaylist,
    getVideo,
    getVideos,
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


  async function getVideo ($slug) {
    try {
      return await client.query({
        query: getVideoQuery,
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


  // =========== Get Playlists ===========

  async function getPlaylists () {
    try {
      return await client.query({
        query: getPlaylistsQuery,
      })
      .then(({ data }) => data && data.playlists);
    }
    catch(error){
      return getErrorResponse(error)
    }
  }


  // =========== Get Videos By Playlist ===========

  async function getPlaylist ($slug) {
    try {
      return await client.query({
        query: getPlaylistQuery,
        variables: {
          id: $slug
        }
      })
      .then(({ data }) => data && data.playlist);
    }
    catch(error){
      return getErrorResponse(error)
    }
  }


  // =========== Get Videos ===========

  async function getVideos () {
    try {
      return await client.query({
        query: getVideosQuery,
        variables: {
          id: 'learn-with-aamir'
        }
      })
      .then(({ data }) => data && data.projectType);
    }
    catch(error){
      return getErrorResponse(error)
    }
  }



  // ====== Get Menu By Name =====

  async function getMenuByName ($slug) {
    try {
      return await client.query({
        query: getMenuByNameQuery,
        variables: {
          id: $slug
        }
        })
      .then(({ data }) => data && data.menu);
    }
    catch(error){
      return getErrorResponse(error)
    }
  }


  // ====== Get Page By URL =====

  async function getPageByURL ($slug) {
    try {
      return await client.query({
        query: getPageByURLQuery,
        variables: {
          id: $slug
        }
        })
      .then(({ data }) => data && data.page);
    }
    catch(error){
      return getErrorResponse(error)
    }
  }


}
