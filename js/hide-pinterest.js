(function () {

    const resultClass = ".image-result";
    const searchText = "pinimg.com";

    let isDisabled = false;

    chrome.storage.sync.get('isDisabled', function (data) {
        isDisabled = data.isDisabled;
        console.log(isDisabled ? "NotPinterested disabled" : "NotPinterested active");
        hidePinterest();
    });

    document.addEventListener("scroll", function () {
        chrome.storage.sync.get('isDisabled', function (data) {
            isDisabled = data.isDisabled;
            hidePinterest();
        });
    });

    function hidePinterest() {
        if (!isDisabled) {
            let results = document.querySelectorAll(".image-data");

            for (let i = 0; i < results.length; i++) {
                let el = results[i].closest(resultClass);
                if (el.href.includes(searchText)) {
                    el.style.display = "none";
                }
            }
        }
    }
})();