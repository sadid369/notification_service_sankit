const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const mailSender = require('./config/email-config');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    // try {
    //     const response = await mailSender.sendMail({
    //         from: ServerConfig.GMAIL_EMAIL,
    //         to: "sadiddev369@gmail.com",
    //         subject: 'Test',
    //         text: 'test'
    //     });
    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    // }
});
