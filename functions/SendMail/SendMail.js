const nodemailer = require('nodemailer');

function generateOrderEmail({data}){
    return`<div>
<h3>Dane zgloszenia</h3>
<p>Email: ${data.Email}</p>
<p>Numer księgi: ${data.Book}</p>
<p>RodzajNieruchomosci: ${data.RodzajNieruchomosci}</p>
<p>Cena: ${data.Price}</p>
<p>Numer telefonu: ${data.MobileNumber}</p>
<p>Adres: ${data.Adres}</p>
<p>Piętro: ${data.Floor}</p>
<p>Powierzchnia: ${data.Area}</p>
<p>Rok budowy: ${data.Year}</p>
<p>Informacje: ${data.Info}</p>
<p>Balkon: ${data.balcony}</p>
<p>Winda: ${data.lift}</p>
<p>Miejsce parkingowe: ${data.parking}</p>
</div>`;
}
// create a transport for nodemailer
const transporter = nodemailer.createTransport({
    host: 'mail.z-lokatorem.pl',
    port: 587,
    tls: {rejectUnauthorized: false},
    auth: {
        user: 'test@z-lokatorem.pl',
        pass: 'Test123',
    },
});

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    const data = body.data;
    Object.keys(data).forEach(key => {
        if (!data[key]) data[key]='brak informacji';
    });

    // Test send an email
    const info = await transporter.sendMail({
        from: "Z-lokatorem <test@z-lokatorem.pl>",
        to: `<${body.data.Email}>` ,
        subject: `Prośba o kontakt od ${body.data.FirstName} | ${body.data.Email}`,
        html: generateOrderEmail({data : body.data}),
    });
    console.log(info);
    return {
        statusCode: 200,
        body: JSON.stringify(info),
    };
};