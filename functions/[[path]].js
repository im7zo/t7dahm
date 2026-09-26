export async function onRequest(context) {
  const { request } = context;
  const incoming = new URL(request.url);
  
  // رابط السيرفر الأساسي الخاص بك
  const target = new URL("http://fi5.bot-hosting.net:20826");
  target.pathname = incoming.pathname;
  target.search = incoming.search;

  const proxyRequest = new Request(target, {
    method: request.method,
    headers: request.headers,
    body: request.method === "GET" || request.method === "HEAD" ? null : request.body,
    redirect: "follow"
  });

  try {
    return await fetch(proxyRequest);
  } catch (err) {
    return new Response("Proxy Error: " + err.message, { status: 500 });
  }
}
