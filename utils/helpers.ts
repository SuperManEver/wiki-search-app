import sanitizeHtml from 'sanitize-html'

const defaultOptions = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'span'],
  allowedAttributes: {
    a: ['href'],
  },
}

export const sanitizeRawHtml = (dirty: string) => ({
  __html: sanitizeHtml(dirty, defaultOptions),
})
