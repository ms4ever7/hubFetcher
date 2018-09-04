export const _request = async url => {
  try {
    let response = await fetch(url);

    return await response.json();
  } catch ({ errors }) {
    return Promise.reject(errors[0].message);
  }
};

export const EMPTY_FUNCTION = () => {};

export function arrify(val) {
  if (val === null || val === undefined) {
    return [];
  }

  return Array.isArray(val) ? val : [val];
}
