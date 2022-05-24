export function getPageTitle(i18n,key) {
    const hasKey = i18n.te(`meta.${key}`)
    const title = i18n.t(`meta.base`)
    if (hasKey) {
      const pageName = i18n.t(`meta.${key}`)
      return `${pageName} - ${title}`
    }
    return `${title}`
  }