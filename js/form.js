    document.addEventListener('DOMContentLoaded', function() {
    	const forms = document.querySelectorAll('form');
    	forms.forEach(form => {
    		form.addEventListener('submit', function(event) {
    			event.preventDefault();
    			window.location.href = '/thanks.html'; 
    		});
    	});
    });

    document.getElementById('menu-toggle').addEventListener('click', function() {
    	const mobileMenu = document.getElementById('mobile-menu');
    	mobileMenu.classList.toggle('hidden');
    });