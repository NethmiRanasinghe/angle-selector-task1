document.addEventListener('DOMContentLoaded', function() {
    const angleInput = document.getElementById('angleInput');
    const inputSlider = document.getElementById('inputSlider');
    const radioButtons = document.querySelectorAll('input[name="selectAngle"')

    // Sync slider with the text box
    angleInput.addEventListener('input', function() {
        let angle = parseInt(this.value);

        // Clamp the value between 0 and 360
        if (angle < 0) angle = 0;
        if (angle > 360) angle = 360;
        this.value = angle;

        // Update the slider value
        inputSlider.value = angle;

        updateRadioButtons(angle);
    });

    // Sync text box with the slider
    inputSlider.addEventListener('input', function() {
        const angle = parseInt(this.value);

        // Update the text box value
        angleInput.value = angle;

        updateRadioButtons(angle);
    });

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            let angle = parseInt(this.value);

            angleInput.value = angle;
            inputSlider.value = angle;
        })
    })

    function updateRadioButtons(angle){
        radioButtons.forEach(radio => {
            radio.checked = (parseInt(radio.value) === angle);

        });

    }
    
});
