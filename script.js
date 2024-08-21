const BASE_URL = "https://30931ce496d3a680.mokky.dev/items";

const getPosts = async (id) => {
  try {
    const respone = await fetch(BASE_URL + "?_limit=" + id);
    const data = await respone.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getPosts(5);

const fetchPosts = async (obj) => {
  try {
    const respone = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "appalication/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await respone.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchPosts({ id: 1, name: "Nooruz" });

const updatePosts = async (id, object) => {
  try {
    const respone2 = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
  } catch (error) {
    console.log(error);
  }
};

updatePosts();


// const deletePosts 