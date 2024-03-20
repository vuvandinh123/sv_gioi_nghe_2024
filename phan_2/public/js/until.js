const setParam = (key, value) => {
    const currentUrl = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentUrl.search);
    urlParams.set(key, value);
    currentUrl.search = urlParams.toString();
    window.history.pushState({}, '', currentUrl);
}
const deleteParam = (key) => {
    const currentUrl = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentUrl.search);
    urlParams.delete(key);
    currentUrl.search = urlParams.toString();
    window.history.pushState({}, '', currentUrl);
}
const getParam = (key) => {
    const currentUrl = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentUrl.search);
    return urlParams.get(key);
}

export { setParam, deleteParam ,getParam}