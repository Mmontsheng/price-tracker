/**
 * @author Mmontsheng Maoto
 */

/**
 *
 * @param {*} key
 * @returns the data by key
 */
const get = async (key) => browser.storage.local.get(key);

const clear = async () => {
  try {
    browser.storage.local.clear();
  } catch (error) {}
};

const remove = async (key) => {
  try {
    browser.storage.local.remove(key);
  } catch (error) {
    
  }
};

/**
 *
 * @param {*} payload
 */
const save = async (payload) => {
  const { key, data } = payload;
  console.log(payload);
  try {
    await chrome.storage.local.set({ [key]: data });
  } catch (error) {}
};

export {
  get,
  clear,
  remove,
  save,
};
