window.onload = () => {
    // Section 2
    var elements = document.querySelectorAll(
        ".why-trade-asset-section .card-header .card-title",
    );

    elements.forEach(function (element) {
        var words = element.textContent.split(" ");
        var whiteWords, orangeWords, output;
        if (words.length <= 3) {
            whiteWords = words.slice(0, words.length - 1);
            orangeWords = words.slice(-1);
            output = `${whiteWords.join(" ")} <span>${orangeWords.join(" ")}</span>`;

        } else {
            whiteWords = words.slice(0, words.length - 2);
            orangeWords = words.slice(-2);
            output = `${whiteWords.join(" ")} <span>${orangeWords.join(" ")}</span>`;
        }
        element.innerHTML = output;
    });

    // Section 3
    const target = document.querySelector(".start-trading-section-v1");
    const children = target.querySelectorAll(".start-trading-col-v1");
    const offset = 300;

    const options = {
        root: null,
        rootMargin: `0px 0px -${offset}px 0px`,
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                children.forEach((child) => child.classList.add("enter"));
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(target);
};
