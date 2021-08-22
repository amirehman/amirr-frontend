import { unWrap, getErrorResponse } from '~/utils/fetchUtils'

export default function({ $config }, inject){


  inject('githubApi', {
    getRepo,
  })

  async function getRepo(repo){
    try {
      return unWrap(await fetch(`https://api.github.com/repos/amirehman/${repo}/releases/latest`))
    }
    catch(error){
      return getErrorResponse(error)
    }
  }


}
