class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = element;
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the toggleContent method.
    // this.button.addEventListener('click', this.toggleContent.bind(this));
    this.button.addEventListener('click', () =>  {
      this.toggleContent();
    });
  }
  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

/*
Each dropdowns node will contain the following:

  <div class="dropdown">
		<div class="dropdown-button">Dropdown</div>
		<div class="dropdown-content dropdown-hidden">
			<a class="dropdown-link" href="https://lambdaschool.com/" target="_blank">Lambda</a>
			<a class="dropdown-link" href="https://www.google.com/" target="_blank">Google</a>
			<a class="dropdown-link" href="https://developer.mozilla.org/en-US/" target="_blank">MDN</a>
		</div>
  </div>
  
*/

