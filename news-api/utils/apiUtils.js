const getApiEndPoint = (name) => {
  switch (name) {
    case "news-by-keyword":
      return `${process.env.API_HOST}/v${process.env.API_VERSION}/everything?apiKey=${process.env.API_KEY}&sortBy=publishedAt`;
    case "news-by-country":
      return `${process.env.API_HOST}/v${process.env.API_VERSION}/top-headlines?apiKey=${process.env.API_KEY}`;
  }
};

const getNewsListUrl = (keyWord,country,pageSize,page) => {
  
  let url = "", params = "", endpoint = "";

  if (keyWord) {
    params = `&q=${keyWord}&pageSize=${pageSize}&page=${page}`;
    endpoint = `${getApiEndPoint("news-by-keyword")}`;
  } else {
    params = `&country=${country}&pageSize=${pageSize}&page=${page}`;
    endpoint = `${getApiEndPoint("news-by-country")}`;
  }

  url = `${endpoint}${params}`;
  return url;
};

module.exports = { getApiEndPoint, getNewsListUrl };
