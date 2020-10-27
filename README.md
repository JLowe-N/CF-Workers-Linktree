# Cloudflare Worker for Implementing Linktree Style Page

This application is an instance of a [Cloudflare Worker](https://workers.cloudflare.com/)
which allows you to deploy a serverless JavaScript application on their global CDN.
The worker here was started using the Wrangler CLI for Cloudflare workers to generate
a template.  The Worker in this project is used to implement a [Linktree](https://linktr.ee/)
style page, which allows brands, media platforms, and influencers to share important links
with their audiences.

An example implementation can be found deployed at [https://linktree.justinlowen.workers.dev/](https://linktree.justinlowen.workers.dev/).

The worker retrieves a HTML template from the https://static-links-page.signalnerve.workers.dev worker endpoint.
Then Cloudflare's HTMLRewriter class is used to transform the page, personalizing it
for the user.  This Worker implementation returns an example user for all paths (except /links),
but it could be extended by connecting to a user database as well as a database for their relevant
links.

The /links path will return a JSON response containing the links information for
the example user.  This could represent accessing data from a remote source outside
the worker, but in this case it is fulfilling a project requirement.

##  Getting Started

To deploy your own version of this project, follow these steps.

### Prerequisites

[Getting Started with Cloudflare Workers](https://developers.cloudflare.com/workers/learning/getting-started)
1. Sign up for a Workers account
2. Install [node package manager](https://www.npmjs.com/get-npm)
3. Install the [Workers CLI, Wrangler](https://github.com/cloudflare/wrangler)
When you have npm installed:
```npm install -g @cloudflare/wrangler```


### Setup

1. Clone this repo
```git clone https://github.com/JLowe-N/CF-Workers-Linktree.git```
2. Configure with your Workers account credentials.
```wrangler config```
3. Update the .toml file with you account_id and you can update worker "name" field as desired.
4. The template and code is already complete, it can be previewed in terminal by
navigating to the location of index.js and using the following commands:
For Localhost testing
```wrangler dev```
For a temporary test deployment
```wrangler preview --watch```
5. Update code and variables as you see fit to create your own linktree style page.
6. Deploy to your Workers account using:
```wrangler publish```

### Usage and Examples

The deployed version of this site fulfills several requirements for this
project.

1. Returns Links as a JSON Response when a GET request is made to [/links](https://linktree.justinlowen.workers.dev/links)

2. Returns a [Linktree style page](https://linktree.justinlowen.workers.dev/justin) when a GET request is made to any other path.
    - Retrieves static HTML template from https://static-links-page.signalnerve.workers.dev
    - Uses the links provided at /links
    - HTMLRewriter class is used to add these links to the template
    - Additional changes to styles including avatar and name heading
    - Returns the transformed page from the worker
Note: It seems Workers in the same zone cannot call one another as discussed [here](https://community.cloudflare.com/t/issue-with-worker-to-worker-https-request/94472/6).
This is a sensible restriction because a Worker calling another Worker in the same zone could
create a vulnerability.

Normally, we would be making a call to get the links from a remote resource,
but for this example I used a variable internal to the worker to provide the links data.

3. Extra Credit
    - Social Icons added
    - Title Field Updated
    - Update background
The static HTML template provided uses CSS Tailwind.  Several classes had to be updated
to accommodate the page style as well as the fallback background color. A background
image was also added to further customize the page.

4. [Systems Profiler Assignment - See Repo/Files](https://github.com/JLowe-N/Systems-Profiler)

## License

My contributions are distributed under the MIT License. See `LICENSE_MIT` for more information.

## Contact
Justin Lowen: 
- [https://jlowe-n.github.io/](https://jlowe-n.github.io/)
- [Justin.G.Lowen@gmail.com](mailto:Justin.G.Lowen@gmail.com)

Project Link: [https://github.com/JLowe-N/Systems-Profiler](https://github.com/JLowe-N/Systems-Profiler)

## Acknowledgements
- [Cloudflare](https://www.cloudflare.com/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
