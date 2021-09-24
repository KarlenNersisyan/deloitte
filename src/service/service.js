export function getCoreFields() {
  return fetch(
    "https://app.highattendance.com/get-app-fields/2731?eventId=2570"
  ).then((res) => res.json());
}

export function getCategories() {
  return fetch(
    "https://app.highattendance.com/content-app-cats/jVV3Q?appId=2731&eventId=2570"
  ).then((res) => res.json());
}

export function getContentThumbnail() {
  return fetch(
    "https://app.highattendance.com/content-thumbnail-url/2731"
  ).then((res) => res.json());
}

export function getAppContents() {
  return fetch(
    "https://app.highattendance.com/app-contents/jVV3Q?appId=2731&eventId=2570"
  ).then((res) => res.json());
}

export function getCountView() {
  return fetch(
    "https://app.highattendance.com/contents/count-view/12554/2731/2570"
  ).then((res) => res.json());
}
