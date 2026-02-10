module.exports = async function (context, req) {
  context.log('Hello function processed a request.');

  context.res = {
    status: 200,
    body: "Hello from Azure Static Web Apps!"
  };
};

