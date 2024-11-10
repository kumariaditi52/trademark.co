

// menu icon js hare

 
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  // Toggle the 'open' class on the nav links
  navLinks.classList.toggle("open");

  // Toggle visibility of icons for mobile
  if (window.innerWidth <= 768) {
      hamburgerIcon.style.display = navLinks.classList.contains("open") ? "none" : "block";
      closeIcon.style.display = navLinks.classList.contains("open") ? "block" : "none";
  }
}

// Optional: add an event listener for window resizing
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
      document.getElementById("nav-links").classList.remove("open");
      document.getElementById("hamburger-icon").style.display = "none";
      document.getElementById("close-icon").style.display = "none";
  }
});






// Open the modal
document.querySelector(".enquiry-button").onclick = function () {
  openModal();
};

// Function to open the modal
function openModal() {
  const modal = document.getElementById("enquiryModal");
  modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("enquiryModal");
  modal.style.display = "none";
}

// Event listener for close button inside the modal
document.querySelector('.close').addEventListener('click', closeModal);

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("enquiryModal");
  if (event.target === modal) {
    closeModal();
  }
};



    function toggleMenu() {
        // Toggle the nav-links to show or hide
        const navLinks = document.getElementById("nav-links");
        const hamburgerIcon = document.getElementById("hamburger-icon");
        const closeIcon = document.getElementById("close-icon");

        // Toggle the 'open' class for the nav links and icon visibility
        navLinks.classList.toggle("open");
        hamburgerIcon.style.display = navLinks.classList.contains("open") ? "none" : "block";
        closeIcon.style.display = navLinks.classList.contains("open") ? "block" : "none";
    }



////carousel hare



    const carousel = document.getElementById("imageCarousel");
    const carouselItems = carousel.querySelectorAll(".carousel-item");
    const paginationContainer = document.createElement("div");
    paginationContainer.className = "carousel-pagination";
    carousel.appendChild(paginationContainer);

    // Create pagination dots
    carouselItems.forEach((item, index) => {
        const dot = document.createElement("div");
        dot.className = "pagination-dot";
        dot.dataset.index = index;
        paginationContainer.appendChild(dot);
        dot.addEventListener("click", () => goToSlide(index));
    });

    let currentIndex = 0;
    let interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds

    function goToSlide(index) {
        clearInterval(interval); // Pause auto-slide on manual navigation
        currentIndex = index;
        updateCarousel();
        interval = setInterval(nextSlide, 3000); // Restart auto-slide
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.toggle("active", index === currentIndex); // Activate the current slide
        });

        // Update active dot
        const dots = paginationContainer.querySelectorAll(".pagination-dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Initialize the first active slide and pagination dot
    updateCarousel();


  