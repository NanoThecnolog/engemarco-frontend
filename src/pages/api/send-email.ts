import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { sendTo } from "@/common/variables/emailOptions";
import { generateContactFormNotification } from "@/common/variables/generateHTML";


const transporterOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
}
const missing = Object.entries(transporterOptions)
    .filter(([_, value]) => !value)
    .map(([key]) => key)

if (missing.length > 0) {
    console.error(`Erro: variáveis de ambiente faltando -> ${missing.join(', ')}`)
    throw new Error('Falha na configuração do transporter SMTP')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    const { name, email, tel, message } = req.body;

    try {
        const html: string = generateContactFormNotification({ name, email, tel, message });

        const transporter = nodemailer.createTransport({
            host: transporterOptions.host,
            port: transporterOptions.port,
            secure: transporterOptions.port === 465,
            auth: {
                user: transporterOptions.user,
                pass: transporterOptions.pass,
            },
        });

        await transporter.sendMail({
            from: `"Engemarco Soluções em Engenharia" ${transporterOptions.user}`,
            to: sendTo.email,
            subject: "Contato recebido através do site",
            html,
        });

        return res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (err) {
        console.error("Erro ao enviar email:", err);
        return res.status(500).json({ message: "Erro ao enviar email", error: err });
    }
}
