(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();

const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', () => {
        const pdfUrl = '"C:\Users\Ekovs\OneDrive\Documenten\Artevelde 2022\IT-Communication\CURRICULUM VITAE.pdf"'; // Replace with the actual path to your PDF CV
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank'; // Open the link in a new tab
        link.download = 'CURRICULUM VITAE.pdf'; // Specify the desired file name
        link.click();
    });

