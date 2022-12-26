const gallaryFilter = document.querySelector(".gallary-filter");
const gallaryImage = document.querySelectorAll(".image");

gallaryFilter.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-gallary")) {
        gallaryFilter.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const filter = e.target.dataset.filter;

        gallaryImage.forEach((image) => {
            if (filter == "all" || image.classList.contains(filter)) {
                image.style.display = "block";
            }
            else {
                image.style.display = "none";
            }
        })
    }
})