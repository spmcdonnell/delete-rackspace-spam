var deleteButton = document.querySelector('.container.delete');
var nextButton = document.querySelector('.next_button');
var keepDeleting = true;
var senders = {
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
  'The Events Calendar': true,
  'The Events Calendar Team': true,
  'WP Engine System': true,
  'WP Engine Team': true,
  'The WP Engine Team': true,
  'Mail Delivery System': true,
  'The Content Team | Talkroute': true,
  'InstantSearch+': true,
  'PowerCorpsPHL': true,
  'WP Engine Billing (billing@billing.wpengine.com)': true,
  'OptinMonster': true,
  'WP All Import': true,
  'Steph at Asana': true,
  'Fun Times Magazine': true,
  'Tkey@hosstools.com': true,
  'Amazon Web Services': true,
  'Google': true,
  'Zapier Monthly': true,
  'bioRemediesMD': true,
  'Jeffrey Shapiro': true,
  'bioREMEDIES MD': true,
  'bioREMEDIES': true,
  'Think-IT': true,
  'South Street Headhouse District': true,
  'IgniteWoo.com': true,
  'Ride Entertainment': true,
  'Elevate': true,
  'Dropbox': true,
  'Yelp': true,
  'The Veem Team': true,
  'ThinkIT Agency': true,
  'Octo Design Group': true,
  'Mantis UK': true,
  'The LogMeIn Team': true,
  'Steve\'s Leaves': true,
  'Italy-America Business Council and Network': true,
  'How To Compost': true,
  'IgniteWoo': true,
  'The Homestead Box': true,
  'Ink It Digital': true,
  'ink IT': true,
  'Mailchimp Legal': true,
  'SparkPost': true,
  'Tina Phillips': true,
  'LogMeIn Pro': true,
  'AngellEYE': true,
  'no-reply@mail.wpengine.com': true,
  'Alex R (Fiverr Customer Support)': true,
  'Gareth at WooCommerce': true,
  'Fiverr Support Team (Fiverr Customer Support)': true,
  'wordpress@bioremediesmd.com': true,
  'Jisse Reitsma': true,
  'ian.pitt@m.logmein.com': true,
  'Google Search Console Team': true,
  'LogMeIn.com Auto-Mailer': true,
  'Kuba from LiveChat': true,
  'Thomas at OptinMonster': true,
  'My Chili Store': true,
  'Modern Tribe': true,
  'Keri at OptinMonster': true,
  'Fiverr Customer Support': true,
  'Taco from Trello': true,
  'Deluxe': true,
  'Angie at OptinMonster': true,
  'Think It': true,
  'Let\'s Encrypt Expiry Bot': true,
  'BlogVault Support': true,
  'Alana at WooCommerce': true,
  'tkey hosstools.com': true,
  'New Features | Talkroute': true,
  'Mike at Zapier': true,
  'Angie at OptinMonster': true,
  'Direct CBD Online': true,
  'Patrycja from LiveChat': true,
  'Tina Phillips via Asana': true,
  'Mark Arnoldy at Asana': true,
  'Clara at WooCommerce': true,
  'Zach Tirrell': true,
  'Gumroad': true,
  'Vlad from Amasty': true,
  'WP Engine Termination': true,
  'C Murda': true
};
var keywords = [
  'submission',
  'contact',
  'newsletter',
  'lead',
  'comment',
  'disk usage warning',
  'reservations',
  '[spam]',
  'optinmonster',
  'automatic',
  'something i think you',
  'sage pay',
  'covid-19',
  'turbomeeting',
  'shipworks',
  'asana'
];

(function deleteSpam() {
  keepDeleting = false;

  // Get current list of mail items
  var mailNode = document.querySelector('div.Widgets_Email_Grid div.resize_overflow > table > tbody').children;
  var mailList = Array.from(mailNode);

  // Go through and mark items for deletion
  mailList.forEach(item => {
    var checkBox = item.querySelector('.checkbox_field input');
    var sender = item.querySelector('.from_addr span').innerText;
    var subject = item.querySelector('.sorted_by_received > .row2 .subject.items_left .Email_draggable').innerText.toLowerCase();

    // Check subject/description of email for key words
    var subjects = keywords.some(function (keyword) {
      return subject.includes(keyword) === true;
    });

    // Actually marking them for deletion
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

  // Repeat forever
  setTimeout(deleteSpam, 7000);
})();
