document.addEventListener('DOMContentLoaded', function() {
    // Add min/max constraints to the rating field
    const ratingField = document.querySelector('#id_rating');
    if (ratingField) {
        ratingField.setAttribute('min', '0');
        ratingField.setAttribute('max', '5');
        ratingField.setAttribute('step', '0.1'); // Assuming decimal places
    }
});
