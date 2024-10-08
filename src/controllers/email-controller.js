const { EmailService } = require('../services');

async function create (req, res) {
    const { subject, content, recipientEmail } = req.body;
    console.log(subject, content, recipientEmail);
    try {
        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content: req.body.content,
            recipientEmail: req.body.recipientEmail,
        });
        return res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
module.exports = {
    create
};  