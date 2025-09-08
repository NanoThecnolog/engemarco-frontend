import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import mjml2html from "mjml";
import fs from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    const { to, nome } = req.body;

    try {
        // 1. Carrega o template MJML
        const templatePath = path.join(process.cwd(), "emails", "contato.mjml");
        let mjmlTemplate = fs.readFileSync(templatePath, "utf8");

        // 2. Substitui variáveis do template
        mjmlTemplate = mjmlTemplate.replace("{{nome}}", nome);

        // 3. Converte para HTML
        const { html } = mjml2html(mjmlTemplate);

        // 4. Configura o transporter do Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: true, // true se usar SSL
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 5. Envia o email
        await transporter.sendMail({
            from: '"Engemarco Soluções" <contato@engemarcosolucoes.com>',
            to,
            subject: "Obrigado pelo contato!",
            html,
        });

        return res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return res.status(500).json({ message: "Erro ao enviar email" });
    }
}
