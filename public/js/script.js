document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("numberForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page refresh
        const start = parseInt(document.getElementById("start").value);
        const end = parseInt(document.getElementById("end").value);
        const resultList = document.getElementById("result");

        resultList.innerHTML = ""; // Clear previous results

        if (start > end) {
            alert("Start number must be less than or equal to the end number.");
            return;
        }

        for (let i = start; i <= end; i++) {
            const listItem = document.createElement("li");

            // Apply logic to display 'Unictive' or 'Unictive Media'
            if (i % 14 === 0 && i % 4 === 0) {
                listItem.textContent = "Unictive Media";
                listItem.classList.add("unictive-media");
            } else if (i % 4 === 0) {
                listItem.textContent = "Unictive";
                listItem.classList.add("unictive");
            } else {
                listItem.textContent = i;
            }

            resultList.appendChild(listItem);
        }
    });
});
