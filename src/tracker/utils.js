import { DOMAINS as TRACKED_DOMAINS } from './domains';

const getCurrentWindowTabs = () =>
  browser.tabs.query({ currentWindow: true, active: true });

export const isTabTrackable = async () => {
  const tabs = await getCurrentWindowTabs();
  const urls = (tabs ?? []).map((tab) => {
    const url = new URL(tab.url);
    return url.host;
  });
  return TRACKED_DOMAINS.some((v) => urls.indexOf(v) != -1);
};
