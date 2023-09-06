export const sleep = (delayMs = 1000) => {
  return new Promise((resolve) => setTimeout(() => resolve(), delayMs));
};

export const getApiUrl = (path, query) => {
  if (query) {
    const q = new URLSearchParams(query);
    const qs = q.toString();
    if (qs) path += "?" + qs;
  }

  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASEURL);
  return url.href;
};
