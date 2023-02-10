// Observer stiky backToTop
// ======================================================
const backToTopEl = document.querySelector(".backToTop")
const headerEl = document.querySelector(".header_section")

const obsCallBack = function (entries, observer) {
    const [entry] = entries
    const isAction = entry.isIntersecting
    if (!isAction) {
        backToTopEl.classList.add("showbtt")
    } else {
        backToTopEl.classList.remove("showbtt")
    }
}
const obsOption = {
    root: null,
    threshold: 0,
}
const headerElObserver = new IntersectionObserver(obsCallBack, obsOption)
headerElObserver.observe(headerEl)
