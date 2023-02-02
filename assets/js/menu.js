// Jquery Functionality

// $(document).ready(()=>{
// 	// Dropdown toggling on hover
// 	function toggleMenu() {
// 		if ($(window).width()>992) {
// 			$('.dropdown').hover(function(){
// 				$(this).find('.dropdown-toggle').addClass('show')
// 				$(this).find('.dropdown-menu').addClass('show')
// 			},function(){
// 				$(this).find('.dropdown-toggle').removeClass('show')
// 				$(this).find('.dropdown-menu').removeClass('show')
// 			})
// 		}
// 	}
// 	toggleMenu()
// 	$(window).resize(()=>{
// 		toggleMenu()
// 	})
// 	$('.navbar-toggler').click(function(){
// 		if($(this).hasClass('collapsed')){
// 			$('.megamenu_header').removeClass('navOpen')
// 			$('html').removeClass('scrollDis')
// 			$(this).removeClass('custom_collapse')
// 			$(this).find('.navbar-toggler-icon-close').hide()
// 			$(this).find('.navbar-toggler-icon').show()
// 		}else{
// 			$('.megamenu_header').addClass('navOpen')
// 			$('html').addClass('scrollDis')
// 			$(this).addClass('custom_collapse')
// 			$(this).find('.navbar-toggler-icon-close').show()
// 			$(this).find('.navbar-toggler-icon').hide()
// 		}
// 	})
// })

// Vanilla Javascript Functionality

document.addEventListener("DOMContentLoaded", (event) => {
	// function to toggle dropdown on hover
	function toggleDropdown(){
		if (document.documentElement.clientWidth > 992) {
			const dropdown = document.querySelectorAll("li.dropdown");
			const debouncer = {};
			dropdown.forEach((el, i) => {
				debouncer[i] = null;
				el.addEventListener("mouseenter", (e) => {
					clearTimeout(debouncer[i]);
					console.log("Cleared", debouncer[i])
					document.querySelectorAll(".dropdown-toggle").forEach(el => el.classList.remove("show"));
					document.querySelectorAll(".dropdown-menu").forEach(el => el.classList.remove("show"))
					e.target.querySelector(".dropdown-toggle").classList.add("show");
					e.target.querySelector(".dropdown-menu").classList.add("show");
				});
				el.addEventListener("mouseleave", async (e) => {
					console.log("Set", debouncer[i])
					debouncer[i] = setTimeout(() => {
						console.log("Executed", debouncer[i])
						e.target.querySelector(".dropdown-toggle").classList.remove("show");
						e.target.querySelector(".dropdown-menu").classList.remove("show")
					}, 500)
				});
			});
		}
	}
	window.addEventListener("resize", function(){
       	toggleDropdown()
	}, true);
	toggleDropdown() // calling onload to set event for hover

	const navbarToggler = document.querySelector(".navbar-toggler");

	// Toggling mobile menu with close button
	function toggleCollapse(ele){
	  	const menuHeader = document.querySelector('.megamenu_header');
	  	const html = document.querySelector('html');
	  	if(ele.classList.contains('collapsed')){
	  		ele.classList.remove('collapsed')
	  		ele.classList.remove('custom_collapse')
	  		ele.querySelector('.navbar-toggler-icon-close').style.display = 'none';
	  		ele.querySelector('.navbar-toggler-icon').style.display = 'inline-block';
	  		menuHeader.classList.remove('navOpen')
	  		html.classList.remove('scrollDis')
	  	}else{
	  		ele.classList.add('collapsed')
	  		ele.classList.add('custom_collapse')
	  		ele.querySelector('.navbar-toggler-icon-close').style.display = 'inline-block';
	  		ele.querySelector('.navbar-toggler-icon').style.display = 'none';
	  		menuHeader.classList.add('navOpen')
	  		html.classList.add('scrollDis')
	  	}
	}

	// event for toggling collapsible menu in moibile
	navbarToggler.addEventListener('click',(e)=>{
	  	let ele = e.target
	  	if(ele.classList.contains('navbar-toggler')){
	  		toggleCollapse(ele)
	  	}else{
	  		ele = e.target.parentNode;
	  		toggleCollapse(ele)
	  	}
	},true)
});