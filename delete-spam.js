import senders from './senders';
import keywords from './subjects';

// Grab some elements
let deleteButton = document.querySelector('.container.delete');
let nextButton = document.querySelector('.next_button');

let breakout = false;
let keepDeleting;

(function deleteSpam() {
  // Stop running if the quit command has been issued
  if (breakout) {
    return;
  }

  keepDeleting = false;

  // Get current list of mail items
  let mailList = Array.from(document.querySelector('div.Widgets_Email_Grid div.resize_overflow > table > tbody').children);

  // Go through and mark items for deletion
  mailList.forEach(item => {
    let checkBox = item.querySelector('.checkbox_field input');
    let sender = item.querySelector('.from_addr span').innerText;
    let subject = item.querySelector('.sorted_by_received > .row2 .subject.items_left .Email_draggable').innerText.toLowerCase();

    // Check subject/description of email for key words
    let subjects = keywords.some(keyword => {
      return subject.includes(keyword) === true;
    });

    // Actually marking them for deletion if the sender or subject line matches
    if (senders[sender] || subjects) {
      keepDeleting = true;
      checkBox.checked = true;
      checkBox.click();
    }
  });

  // Choose whether to delete items or move to next 'page' of mail items
  if (keepDeleting) {
    deleteButton.click();
  } else {
    if (nextButton.classList.contains('disabled')) {
      // Base case to break out of recursion
      return;
    } else {
      nextButton.click();
    }
  }

  // Repeat until end of inbox is reached
  setTimeout(deleteSpam, 7000);
})();


// Break out of deleteSpam function upon 's' keypress
window.addEventListener('keydown', event => {
  console.log(event);
  breakout = event.key === 's';
});


