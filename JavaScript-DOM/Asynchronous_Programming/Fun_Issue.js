const result = document.getElementById('result');
let approval = 'Not approved!';

/*
function getApproval() {
  setTimeout(() => {
    approval = 'Approved!';
  }, 500);
}

getApproval();
result.textContent = approval;
*/

//To fix it we gonna need a call back function

function getApproval(callback) {
    setTimeout(() => {
      approval = 'Approved!';
      callback();
    }, 500);
  }
  
  getApproval(() => {
    result.textContent = approval;
  });
  result.textContent = approval;