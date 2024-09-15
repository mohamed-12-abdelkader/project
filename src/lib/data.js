// INFO: All this services functions here return an example data, they will change when creates `backend` APIs to fetch real data from DB based on user queries

// Example data
import { data } from './example-researches-data';

const PER_PAGE = 9;

export async function fetchTotalPages(query, type) {
  let filteredData;
  if (type) {
    filteredData = data.filter(
      e => e.type === type && (e.title.includes(query) || e.desc.includes(query))
    );
  } else {
    filteredData = data.filter(e => e.title.includes(query) || e.desc.includes(query));
  }
  return Math.ceil(filteredData.length / PER_PAGE);
}

export async function fetchResearchesData(query, type, page) {
  let filteredData;
  if (type) {
    filteredData = data.filter(
      e => e.type === type && (e.title.includes(query) || e.desc.includes(query))
    );
  } else {
    filteredData = data.filter(e => e.title.includes(query) || e.desc.includes(query));
  }
  const startIndex = (page - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  return filteredData.slice(startIndex, endIndex);
}
