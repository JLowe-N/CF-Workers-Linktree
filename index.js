const workerDomain = 'https://linktree.justinlowen.workers.dev'


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
      .on("div#social", new ElementHandler())
      .on("title", new ElementHandler())
      .on("style", new ElementHandler())
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
      element.setAttribute("src", "https://raw.githubusercontent.com/JLowe-N/CF-Workers-Linktree/master/img/JLowen_avatar.png")
    }

    if (id === "title") {
      element.setInnerContent("@JustinLowen")
    }

    if (element.tagName === "style") {
      // element.removeAttribute("class")
      // element.setAttribute("style", "background-image: url('https://unsplash.com/photos/Jqc2nOH3u3Y'); background-repeat: no-repeat; width: 100%; height: 100%;")
      let bodyStyle = `
      body {
        background-image: url('https://raw.githubusercontent.com/JLowe-N/CF-Workers-Linktree/master/img/dream-holidays-1511-1024.jpg');
      }
      `
      element.append(bodyStyle)

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
