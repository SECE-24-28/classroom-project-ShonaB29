/***Using async/await***/
async function loadCourses1() {
  const res = await fetch("https://69329b26e5a9e342d26ff7f7.mockapi.io/SmartPay");
  const data = await res.json();

  const list = document.getElementById("post-list");
  list.innerHTML = "";

  data.map((post, index) => {
    if (index < 15) {
      const li = document.createElement("li");
      li.innerText = `${post.planname}. ${post.validity}.${post.price}.${post.dailydata}`;
      list.appendChild(li);
    }
  });
}

function loadCourses2() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const list = document.getElementById("post-list1");
      list.innerHTML = "";

      data.map((post, index) => {
        if (index < 5) {
          const li = document.createElement("li");
          li.innerText = `${post.name}. ${post.plan}`;
          list.appendChild(li);
        }
      });
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}