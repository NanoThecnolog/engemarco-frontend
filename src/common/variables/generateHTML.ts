import mjml2html from "mjml";

type ContactFormProps = {
    name: string
    email: string
    tel: string
    message: string
}

export const generateContactFormNotification = ({ name, email, tel, message }: ContactFormProps): string => {
    const mjmlTemplate = `
    <mjml>
      <mj-head>
        <mj-attributes>
          <mj-all font-family="Arial, sans-serif" />
          <mj-text color="#ffffff" />
        </mj-attributes>
      </mj-head>
      <mj-body background-color="#121212">
        <mj-section>
          <mj-column>
            <!-- Header -->
            <mj-text align="center" font-size="28px" color="#ffffff" padding="20px" background-color="#000000">
              📩 Nova mensagem recebida pelo formulário do site
            </mj-text>
          </mj-column>
        </mj-section>

        <mj-section background-color="#1e1e1e" padding="20px">
          <mj-column>
            <mj-text font-size="18px" color="#ffffff" line-height="1.6">
              <strong>Nome:</strong> ${name}
            </mj-text>
            <mj-text font-size="18px" color="#ffffff" line-height="1.6">
              <strong>Email:</strong> ${email}
            </mj-text>
            <mj-text font-size="18px" color="#ffffff" line-height="1.6">
              <strong>Telefone:</strong> ${tel}
            </mj-text>
            <mj-text font-size="18px" color="#ffffff" line-height="1.6" padding-top="15px">
              <strong>Mensagem:</strong><br/>
              ${message}
            </mj-text>
          </mj-column>
        </mj-section>

        <mj-section>
          <mj-column>
            <!-- Footer -->
            <mj-text align="center" font-size="12px" color="#cccccc" padding="20px">
              ©2025 Engemarco - Notificação Automática
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `;

    const { html, errors } = mjml2html(mjmlTemplate);

    if (errors.length > 0) {
        console.error("Erro ao compilar o template MJML:", errors);
        throw new Error("Erro ao gerar o template de email.");
    }

    return html;
}