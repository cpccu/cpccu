const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  if(nav.classList.contains("hidden")){
    nav.classList.remove("flex");
  }else{
    nav.classList.add("flex");    
  }
});


// this functions is creating to create a unique userID.

//  const form = document.querySelector("#form");
//       const UserName = document.querySelector("#userName");
//       form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         UserIdGen(UserName.value, AllUserId);
//       });

      const AllUserId = ["ashiq", "islam", "nipon"];

      function UserIdGen(userName, AllUserId) {
        const surName = userName.split(" ");
        const ID = surName[surName.length - 1].trim().toLowerCase();
        cheakUnique(ID, (suffix = ""), AllUserId);
      }

      function makeUnique(size = 3) {
        const number = "1234567890";
        let suffix = "";
        for (let i = 0; i < size; i++) {
          const index = Math.floor(Math.random(number) * 10);
          suffix += index;
        }

        return suffix;
      }

      function cheakUnique(ID, suffix, AllUserId) {
        const found = AllUserId.filter((item) => item === ID + suffix);
        if (found.length == 0) {
          AllUserId.push(ID + suffix);
          return;
        } else {
          cheakUnique(ID, makeUnique(), AllUserId);
        }
      }

