document.addEventListener("DOMContentLoaded", function () {
    // Initialize modals
    const configModal = new bootstrap.Modal(document.getElementById("configModal"));
    const editCustomChallengeModal = new bootstrap.Modal(document.getElementById("editCustomChallengeModal"));
    const frameworkModalElement = document.getElementById("frameworkModal");
  
    // Show framework modal on load
    const frameworkModal = new bootstrap.Modal(frameworkModalElement);
    frameworkModal.show();
  
    // Main content reference
    const mainContent = document.querySelector(".main-content");
  
    // Toggle blur effect on configModal show/hide
    configModal._element.addEventListener("show.bs.modal", () => {
      mainContent.classList.add("blurred");
    });
  
    configModal._element.addEventListener("hide.bs.modal", () => {
      mainContent.classList.remove("blurred");
    });
  
    // Handle opening editCustomChallengeModal
    document.getElementById("openEditModal").addEventListener("click", function () {
      // Hide framework modal
      frameworkModal.hide();
  
      // Show editCustomChallengeModal
      editCustomChallengeModal.show();
    });
  
    // Handle closing editCustomChallengeModal
    document.querySelector("#editCustomChallengeModal .btn-close").addEventListener("click", function () {
      editCustomChallengeModal.hide();
      configModal.show(); // Show configModal again
    });
  
    // Handle closing configModal
    document.querySelector("#configModal .btn-close").addEventListener("click", function () {
      configModal.hide();
      frameworkModal.show(); // Show frameworkModal again
    });
  
    // Handle updating from editCustomChallengeModal
    document.getElementById("updateCustomChallenge").addEventListener("click", function () {
      // Add update logic here if needed
  
      // Hide edit modal and show framework modal
      editCustomChallengeModal.hide();
      frameworkModal.show();
    });
  
    // Close frameworkModal and redirect to index.html
    document.querySelector("#frameworkModal .btn-close").addEventListener("click", function () {
      window.location.href = "index.html#lab"; // Redirect to index.html
    });
  
    // Toolbar button event listener (if applicable)
    document.querySelectorAll('.toolbar button').forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior
        // Your command logic here
      });
    });
  });
  