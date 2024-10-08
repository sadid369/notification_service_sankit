const { TicketRepository } = require('../repositories');
const { Mailer } = require('../config');
const ticketRepository = new TicketRepository();
async function sendMail (mailFrom, mailTO, subject, text) {
    try {
        const response = await Mailer.sendMail({
            from: mailFrom,
            to: mailTO,
            subject: subject,
            text: text
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function createTicket (data) {
    try {
        const response = await ticketRepository.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPendingEmails (params) {
    try {
        const response = await TicketRepository.getPendingTickets();
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    sendMail,
    createTicket,
    getPendingEmails
};