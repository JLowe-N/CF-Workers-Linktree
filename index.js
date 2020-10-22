const workerDomain = 'https://worker.justinlowen.workers.dev'


addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})


async function handleRequest(request) {
  let response

  if (request.method === 'GET' & request.url === `${workerDomain}/links`) {
    response = new Response(JSON.stringify(testLinks), {
      headers: { 'content-type': 'JSON' },
    })
  } else {
    let request = await fetch('https://static-links-page.signalnerve.workers.dev')

    response = new HTMLRewriter()
      .on("div#links", new ElementHandler())
      .on("div#profile", new ElementHandler())
      .on("img#avatar", new ElementHandler())
      .on("h1#name", new ElementHandler())
      .transform(request)
    response = await response.text()
    response = new Response(response, {
      headers: { "content-type": "text/html;charset=UTF-8", "status": 200 }
    })
    console.log(response)


  }

  return response
}


class ElementHandler {
  element(element) {
    let id = element.getAttribute("id")

    if (id === "links") {
      let linkHtml = ''
      testLinks.forEach(link => {
        linkHtml += `<a href="${link.url}">${link.name}</a>`
      })
      element.setInnerContent(linkHtml, { html: true })
    }

    if (id === "profile") {
      element.removeAttribute("style")
    }

    if (id === "name") {
      element.setInnerContent("@JustinLowen")
    }

    if (id === "avatar") {
      element.setAttribute("src", "")
    }

  }

}



let testLinks = [
  {
    "name": "My GitHub",
    "url": "https://github.com/JLowe-N"
  },
  {
    "name": "Portfolio",
    "url": "https://JLowe-N.github.io"
  },
  {
    "name": "LinkedIn",
    "url": "https://www.linkedin.com/in/justinlowen"
  }
]
