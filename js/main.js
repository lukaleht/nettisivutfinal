document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    })
  });

  const text = await res.text();
  document.getElementById("status").innerText = text;
});
