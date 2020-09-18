module.exports = ({ env }) => ({
  graphql: {
    endpoint: "/graphql",
    tracing: true,
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 100,
  },
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_KEY"),
    },
    settings: {
      defaultFrom: env("EMAIL_FROM"),
      defaultReplyTo: env("EMAIL_REPLY_TO"),
    },
  },
});
