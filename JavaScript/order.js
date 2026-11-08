 document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault(); //Stops the page from reloading 
            let isValid = true;  //Gets the order form element and listens for the submit event

           //Get the references to the form and its elements
            const name = document.getElementById('fullName');
            const phone = document.getElementById('phone');
            const date = document.getElementById('deliveryDate');
            const item = document.getElementById('itemSelect');
            const qty = document.getElementById('quantity');

            //Clears error messages before validating the form
            document.getElementById('nameError').textContent = '';
            document.getElementById('phoneError').textContent = '';
            document.getElementById('dateError').textContent = '';
            document.getElementById('itemError').textContent = '';
            document.getElementById('qtyError').textContent = '';

            //1. Validate full name input field
            if (name.value.trim() === '') {
                document.getElementById('nameError').textContent = 'Please enter your full name.';
                isValid = false;
            }
//2.Validate phone number input field
            if (phone.value.trim().length < 10) {
                document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
                isValid = false;
            }
//3.Validate delivery date input field
            if (date.value === '') {
                document.getElementById('dateError').textContent = 'Please select a delivery date.';
                isValid = false;
            }
//4.Validate the item input field
            if (item.value === '') {
                document.getElementById('itemError').textContent = 'Please select a treat from the menu.';
                isValid = false;
            }
//5. Validates the correct menu  item selection and quantity
            if (item.value === 'cinnamon' && parseInt(qty.value) < 12) {
                document.getElementById('qtyError').textContent = 'Cinnamon rolls require a minimum quantity of 6.';
                isValid = false;
                //Validate the cinnamon buns quantity selection rule
            } else if (parseInt(qty.value) < 1) {
                document.getElementById('qtyError').textContent = 'Quantity must be at least 1.';
                isValid = false;
            }
//Shows the customer that the form is submitted successfully
            if (isValid) {
                showToast('Order submitted successfully! We will contact you soon.');
                this.reset();
            }
        });

        //This funtion helps display the notifications
        function showToast(msg) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = msg;
            container.appendChild(toast);
            setTimeout(() => toast.remove(), 2000); //The messages are removed after 2 seconds
        }