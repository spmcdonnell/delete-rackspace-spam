var deleteButton = document.querySelector('.container.delete');
var nextButton = document.querySelector('.fill_height.next');
var keepDeleting = true;
var itemsToDelete = {
  'Hoss Tools': true,
  'Mantis France': true,
  'Mantis': true,
  'WordPress': true,
  'Famous Cookies': true,
  'Elevate Hemp': true,
  'Oakes Wholesale': true,
  'Famous 4th Street Cookies': true,
  'webadmin@ink-it.net': true,
  'Bradford White': true,
  'Oakes Daylilies': true,
  'IABCN': true,
  'Zapier': true,
  'ACXChange Support': true,
  'Stevesleaves.com': true,
  'PsPrint': true,
  'WP Engine': true,
  'Fiverr': true,
  'Vimeo': true,
  'Yelp – Philadelphia': true,
  'WooCommerce': true,
  'Trello': true,
  'Bethany from Amasty': true,
  'Stagestep': true,
  'nathaniel.forbes@locationshawaii.com': true,
  'SparkPost Team': true,
  'Dev Think IT': true,
  'Asana': true,
  'The Events Calendar': true
};

function deleteSpam() {
  keepDeleting = false;

  // Get current list of mail items
  var mailNode = document.querySelector('div.Widgets_Email_Grid div.resize_overflow > table > tbody').children;
  var mailList = Array.from(mailNode);

  // Go through and mark items for deletion
  mailList.forEach(item => {
    var checkBox = item.querySelector('.checkbox_field input');
    var title = item.querySelector('.from_addr span').innerText;
    var subject = item.querySelector('.sorted_by_received > .row2 .subject.items_left .Email_draggable').innerText.toLowerCase();

    if (itemsToDelete[title] ||
      subject.includes('submission') ||
      subject.includes('contact') ||
      subject.includes('newsletter') ||
      subject.includes('lead') ||
      subject.includes('comment')) {
      keepDeleting = true;

      checkBox.checked = true;
      checkBox.click();
    }
  });

  // Choose whether to delete items or move to next 'page' of mail items
  if (keepDeleting === false) {
    nextButton.click();
  } else {
    deleteButton.click();
  }

  setTimeout(deleteSpam, 6500);
}
