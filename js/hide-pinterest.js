(function() {

    let isDisabled = false;

    chrome.storage.sync.get('isDisabled', function(data) {
        isDisabled = data.isDisabled;
        console.log(isDisabled ? "NotPinterested disabled" : "NotPinterested active");
        hidePinterest();
    });

    document.addEventListener("scroll", function() {
        chrome.storage.sync.get('isDisabled', function(data) {
            isDisabled = data.isDisabled;
            hidePinterest();
        });
    });

    function hidePinterest() {
        if (!isDisabled) {
            var results = document.querySelectorAll(".image-data");

            for (let i = 0; i < results.length; i++) {
                if (results[i].closest(".image-result").href.includes("pinimg.com")) {
                    results[i].closest(".image-result").style.display = "none";
                }
            }
        }
    }
})();