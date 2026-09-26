export default {
  async fetch(request, env, ctx) {
    const incoming = new URL(request.url);
    const target = new URL("http://fi5.bot-hosting.net:20826");
    target.pathname = incoming.pathname;
    target.search = incoming.search;

    const proxyRequest = new Request(target, request);
    return fetch(proxyRequest);
  }
};
