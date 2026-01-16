async function postRequest(path, data) {
  console.log(`${path} testing...`);

  const res = await fetch(`http://127.0.0.1:8000/${path}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "manual"
  });

  const text = await res.text();
  console.log(res.status, text);
}

postRequest("user/wallet", {wallet_address: "address"});
