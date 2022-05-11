// toggle the details overlay on the work cards
export function showHideWorkDetails(event) {
    event.preventDefault();
    const button = event.currentTarget;
  
    if (button.parentElement.className === 'transparent') {
      button.parentElement.style.textAlign = 'left';
      button.parentElement.className = 'displayed';
      button.nextElementSibling.style.display = 'block';
      button.style.transform = 'rotate(180deg)';
    } else {
      button.parentElement.className = 'transparent';
      button.parentElement.style.textAlign = 'center';
      button.nextElementSibling.style.display = 'none';
      button.style.transform = '';
    }
  }