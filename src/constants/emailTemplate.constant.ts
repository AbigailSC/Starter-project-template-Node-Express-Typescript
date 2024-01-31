import { config } from '@config';

export const getVerifyTemplate = (userId: string, token: string): string => {
  return `
  <div>
    <h1>Ya casi hemos terminado! 🤏</h1>
    <h2>Hola, tenemos el agrado de comunicarte que has sido dato de alta en nuestra plataforma AuditSmart donde podrás llevar el seguimiento del servicio prestado por Auditoria de Riesgos.</h2>
    <a href='${config.app.clientUrl}/usuarios/validate?id=${userId}&token=${token}' style="background-color: #4CAF50; border-radious: 5px; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;">Confirmar Cuenta</a>
    <br><br>
    <p style="color: #64748b">El link de verificación expira en 24 horas.</p>
    <span>Saludos.</br>
    Equipo de Auditoria de Riesgos</span>
  </div>
  `;
};

export const getWelcomeTemplate = (name: string): string => {
  return `
  <h1>Bienvenido 👋</h1>
  <p>Hola ${name}, bienvenido a <b>Auditoria de Riesgos</b>.</br>
  Este es un mensaje de bienvenida a nuestra plataforma.</p>
  <a href='${config.app.clientUrl}/login'>Login</a>
  <span>Saludos.</br>
  Equipo de Auditoria de Riesgos</span>
  `;
};

export const getNewOrderTemplate = (
  razonSocial: string,
  direccion: string,
  fecha_inicio: string,
  tipoOrden: string
): string => {
  return `
  <div>
      <h2>Se ha generado una orden de servicio para <u>${razonSocial}</u> desde Auditoria de Riesgos.</h2>
      <p>Tipo de orden: ${tipoOrden}</p>
      <p>Dirección: ${direccion}</p>
      <p>Fecha de presentación: ${fecha_inicio}</p>
      <a
        href="${config.app.clientUrl}/ordenes"
        style="background-color: #4CAF50; border-radious: 5px; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;">
      Ver orden
      </a>
  </div>`;
};

export const getNewCapacitacionTemplate = (
  razonSocial: string,
  tipoOrden: string,
  direccion: string,
  fecha_inicio: string,
  fecha_fin: string
): string => {
  return `
  <div>
      <h2>Se ha generado una capacitacion para <u>${razonSocial}</u> desde Auditoria de Riesgos</h2>
      <p>Tipo de orden: ${tipoOrden}</p>
      <p>Dirección: ${direccion}</p>
      <p>Fecha de inicio: ${fecha_inicio}</p>
      <p>Fecha de fin: ${fecha_fin}</p>
      <a
        href="${config.app.clientUrl}/ordenes"
        style="background-color: #4CAF50; border-radious: 5px; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;">
      Ver capacitación
      </a>
  </div>`;
};

export const getReminderTemplate = (
  razonSocial: string,
  direccion: string,
  fecha_inicio: string,
  fecha_fin: string,
  diasRestantes: string
): string => {
  return `
  <div>
      <h2>Cliente <u>${razonSocial}</u></h2>
      <p>Este es un recordatorio para avisarle que faltan ${diasRestantes} dias para empezar su orden</p>
      <p>La presente tiene fecha de inicio en la sucursal ubicada en ${direccion} el ${fecha_inicio} hasta el ${fecha_fin}</p>
  </div>`;
};
