const hits = {
    "google.com": 58,
    "whatever.com": 22,
    "yahoo.com": 38,
    "example.com": 45,
    "amazon.com": 12,
    "bing.com": 31,
    "stackoverflow.com": 50,
};

const sortedHitsTuple = Object.entries(hits).sort((a, b) => b[1] - a[1]);

function getTop5() {
    return sortedHitsTuple.slice(0, 5).map(([referrer]) => referrer);
}

function getBottom5() {
    return sortedHitsTuple.slice(-5).map(([referrer]) => referrer).reverse();
}

console.log(getTop5(), getBottom5());
