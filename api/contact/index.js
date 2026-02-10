const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async function (context, req) {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    context.res = { status: 400, body: "Missing fields" };
    return;
  }

  await sgMail.send({
    to: "you@yourdomain.com",
    from: "no-reply@yourdomain.com",
    subject: "New Contact Form Message",
    text: `
Name: ${name}
Email: ${email}

${message}
`
  });

  context.res = { body: "Message sent successfully!" };
};

