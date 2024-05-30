function returnsImagePath(iconName: string, itsIcon?: boolean): string {
    const imgRoute: string = `/${itsIcon ? "icons" : "imgs"}/${iconName.replace('/', '')}`
    
    if(iconName !== '') {
      if(import.meta.env.PROD) {
        return `${imgRoute}`
      }
      return `${imgRoute}`
    }
    return ''
  }
  
  function returnsImageURL(iconName: string, itsIcon?: boolean): URL { 
    return new URL(returnsImagePath(iconName, itsIcon), import.meta.url)
  }
  
  const files = {
    returnsImageURL
  }
  
  export default files;