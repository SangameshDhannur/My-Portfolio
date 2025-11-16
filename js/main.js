const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // stop default redirect

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("🎉 Thank you! Your message has been sent successfully.");
      form.reset(); // clear the form
    } else {
      alert("⚠️ Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("❌ Error: Unable to send message.");
  }
});
