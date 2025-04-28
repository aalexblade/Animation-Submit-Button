function animateButton(event) {
	var button = document.getElementById("submit-habit");
 	var buttonLabel = button.getElementsByClassName("submit-habit-label")[0];
  
  buttonLabel.textContent = "Saving";
	buttonLabel.classList.add("light-text"); 
  
  setTimeout(function() { button.classList.add("onclick"); }, 600); 
	button.classList.remove("btn-a");

 	var checkmark = document.getElementById("submit-habit-checkmark");
	setTimeout(function() { checkmark.classList.add("show-checkmark"); }, 1200); 

	event.preventDefault(); 
}