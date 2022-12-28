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
 


  // Using method then 

  function getApproval() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('aproval!');
      }, 500);
    });
    
  }
  
  getApproval().then(
    (resolvedAproval)=>{
      resolve.textContent = resolvedAproval;
    }
  );

  result.textContent = approval;
   */  


  //hadling Promises

  let p = new Promise((resolve,reject) => {
    let a=1+1;
    if(a==2){
      resolve('Success');
    }else{
      reject('Failed');
    }
  });

  p.then((message) =>{
    console.log('This is in the then' + message );
  }).catch((message) =>{
    console.log('This is in the then' + message );
  });

  //

  function getApproval() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('aproval!');
      }, 500);
    });
  }

  async function setApprovalText(){
    const approvalPromise = getApproval();
    result.textContent = await approvalPromise;
  }

  setApprovalText();