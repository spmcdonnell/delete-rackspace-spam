var deleteButton = document.querySelector('.container.delete'),
    nextButton   = document.querySelector('.fill_height.next');

function deleteSpam() {
  var mailNode = document.querySelector('div.resize_overflow > table > tbody').children,
      mailList = Array.from(mailNode);
      
  mailList.forEach(item => {
    var checkBox = item.querySelector('.checkbox_field input'),
        title    = item.querySelector('.from_addr span');

    if (title.innerText === 'Hoss Tools') {
        checkBox.checked = true;
    }
  });
  
  deleteButton.click();
  nextButton.click();
}

deleteSpam();
