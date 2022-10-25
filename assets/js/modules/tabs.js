const Selector = {
    TAB_LIST: '[role="tablist"]',
    TAB: '[role="tab"]',
    SELECTED_TAB: '[aria-selected="true"]',
};

export default function initializeTabs() {
    document.addEventListener('click', handleClick);
}
// ...
function handleClick({ target }) {
    if (!isTab(target) || isTabSelected(target)) {
        return;
    }

    const tablist = findTabList(target);
    const selectedTab = findSelectedTab(tablist);

    deselectTab(selectedTab);
    selectTab(target);
}

function findTabList(tab) {
    return tab.closest(Selector.TAB_LIST);
}

function findSelectedTab(tabList) {
    return tabList.querySelector(Selector.SELECTED_TAB);
}

function isTab(element) {
    return element.closest(Selector.TAB);
}

function isTabSelected(tab) {
    return tab.getAttribute('aria-selected') === 'true';
}

function selectTab(tab) {
    tab.setAttribute('aria-selected', 'true');
    document
        .getElementById(tab.getAttribute('aria-controls'))
        .removeAttribute('hidden');
}

function deselectTab(tab) {
    tab.setAttribute('aria-selected', 'false');
    document
        .getElementById(tab.getAttribute('aria-controls'))
        .setAttribute('hidden', '');
}