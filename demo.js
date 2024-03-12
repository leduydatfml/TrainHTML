// console.log('hello world from html');
// let sum = (a, b)=>{
//     return a+b;
// }

// console.log('check sum', sum(3, 6));

// let obj={
//     name: 'Baca',
//     address: 'Tran khanh du',
//     getName: function(){
//         return this.address;
//     }
// }

// console.log('show name: ', obj.getName())

window.onload = function () {
    let btnSearch = document.getElementById("button-search-form");
    console.log('btnSearch', btnSearch)
    const textInput = document.getElementById("input-first");
    let msg = document.getElementById("msg");
    
    textInput.addEventListener("change", (e) => {
        console.log("callll");

        e.preventDefault();
        formValidation();
      });

    btnSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        formValidation();
      });
    
      const formValidation = () => {
        if (textInput.value === "") {
          console.log("failure");
          msg.innerHTML = "Task cannot be blank";
        } else {
          console.log("success");
          msg.innerHTML = "";
        }
      };
};
