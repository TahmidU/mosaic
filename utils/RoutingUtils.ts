export const filterQuery = (
  queries: { [key: string]: any },
  urlQuery: { [key: string]: string | string[] | undefined } = {}
) => {
  const exclude = [undefined, ""];
  var query = urlQuery;
  for (const key of Object.keys(queries)) {
    if (exclude.includes(queries[key])) {
      query.hasOwnProperty(key) && delete query[key];
    } else {
      query = {
        ...query,
        [key]: queries[key],
      };
    }
  }
  return query;
};

const RoutingUtils = { filterQuery };

export default RoutingUtils;
