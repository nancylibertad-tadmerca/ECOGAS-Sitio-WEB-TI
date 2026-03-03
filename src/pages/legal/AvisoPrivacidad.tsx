import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";

const AvisoPrivacidad = () => {
  return (
    <Layout>
      <title>Aviso de Privacidad | ECOGAS</title>
      <meta name="description" content="Aviso de privacidad de ECOGAS. Conoce cómo protegemos y tratamos tu información personal." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[{ label: "Aviso de Privacidad" }]} />
        
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold mb-2">Aviso de Privacidad</h1>
          <h2 className="text-2xl font-semibold text-foreground">ECOGAS MÉXICO, S. DE R.L. DE C.V.</h2>

          <p className="text-muted-foreground leading-relaxed">
            De conformidad con lo dispuesto por los artículos 6, 8, 15 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la "Ley"), se emite el presente Aviso de Privacidad que complementa cualquier otro aviso de privacidad que cualquiera de nuestras empresas haya puesto a su disposición.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            ECOGAS MÉXICO, S.R.L. de C.V. (en lo sucesivo "ECOGAS"), con domicilio en Avenida Tecnológico 4505, Las Granjas, 31100 Chihuahua, Chihuahua, como responsable del tratamiento de los datos personales reitera el compromiso de la empresa con la transparencia, seguridad y privacidad de los datos personales. Cualquier información concerniente a una persona física identificada o identificable ya sea alguno de nuestros clientes y/o usuarios al ser recopilada se tratará de acuerdo con los principios de licitud, consentimiento, calidad, información, proporcionalidad, lealtad, responsabilidad y finalidad previstos en la Ley.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Datos Personales que trata ECOGAS</h3>
          <p className="text-muted-foreground leading-relaxed">
            ECOGAS, para cumplir con las finalidades señaladas en el presente Aviso, tratará los siguientes datos usados exclusivamente para los fines propios de la empresa:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Datos de identificación</li>
            <li>Datos de contacto</li>
            <li>Datos patrimoniales y financieros</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8">Datos Personales Sensibles</h3>
          <p className="text-muted-foreground leading-relaxed">
            Asimismo, le informamos que ECOGAS no recabará datos personales sensibles a través del portal de internet, para cumplir con las finalidades de nuestra relación mencionadas en el presente aviso.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Datos de Menores e Incapaces</h3>
          <p className="text-muted-foreground leading-relaxed">
            ECOGAS, podrá a través de su portal de internet, recabar y tratar datos personales de menores y/o incapaces. Sin embargo, los mismos no podrán ser tratados sin el consentimiento expreso de sus padres, tutores o representante legal. Si Usted es padre, tutor o representante legal de un menor o incapaz y sabe que nos ha proporcionado datos personales sin su consentimiento, podrá solicitar que los mismos sean cancelados a la siguiente dirección de correo electrónico{" "}
            <a href="mailto:tuprivacidad@ienova.com.mx" className="text-primary underline">tuprivacidad@ienova.com.mx</a>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Datos de Imagen</h3>
          <p className="text-muted-foreground leading-relaxed">
            Le informamos que podrá ser fotografiado y/o video-grabado en eventos de ECOGAS para fines plenamente justificados y propios de las actividades que realiza y por los medios de comunicación internos de ECOGAS. Por el presente usted otorga su consentimiento para que ECOGAS utilice su imagen personal para hacer uso de la misma dentro de la página web; asimismo, las imágenes podrán ser utilizadas para publicaciones físicas o electrónicas, siempre y cuando su uso, sea para fines plenamente informativos, interactivos o de carácter recreativo.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Finalidades Primarias del Tratamiento de Datos Personales</h3>
          <p className="text-muted-foreground leading-relaxed">
            ECOGAS, podrá utilizar sus datos personales para cumplir con diversas finalidades, dependiendo de las circunstancias en las que serán recabados, siempre tomando en cuenta la relación que tengamos con Usted y al aviso de privacidad que se haya puesto a su disposición.
          </p>
          <ol className="list-[lower-alpha] pl-6 text-muted-foreground space-y-2">
            <li>Para controlar el acceso y mantener la seguridad de ECOGAS cuando visita nuestras instalaciones.</li>
            <li>Cuando decida enviar sus datos personales, para establecer contacto con usted para considerarlo para un proceso de reclutamiento y selección.</li>
            <li>Verificación de identidad.</li>
            <li>Atención al cliente y solicitudes generadas por cliente.</li>
            <li>Dar contestación a las citas que los Usuarios realizan por internet dentro de ECOGAS en cualquiera de sus planteles.</li>
            <li>Dar contestación y/o ponerse en contacto con los usuarios que realicen solicitudes por medio de la página web y/o realizar preguntas y resolver dudas concretas y de carácter general.</li>
            <li>Dar cumplimiento a las obligaciones que se tienen con los clientes.</li>
            <li>Realizar reportes internos requeridos de conformidad con el objeto y la finalidad de ECOGAS.</li>
            <li>Para actualizar o modificar los datos personales de los titulares, que voluntariamente quieran realizar dicha actualización por los medios señalados dentro de la página web.</li>
            <li>Celebración de contratos para formalizar la prestación del servicio.</li>
            <li>Evitar duplicidad de registros.</li>
            <li>Para proveerle los servicios que ofrece ECOGAS.</li>
            <li>Realizar proceso de cobranza en caso de mora.</li>
            <li>Atención al cliente y solicitudes generadas por el cliente.</li>
            <li>Facturación.</li>
            <li>Para dar contestación a sus dudas y comentarios cuando se ponga en contacto con ECOGAS.</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mt-8">Finalidades Secundarias del Tratamiento de Datos Personales</h3>
          <p className="text-muted-foreground leading-relaxed">
            Además, si usted no dice lo contrario, ECOGAS tratará sus datos personales para las siguientes finalidades secundarias:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Mercadotecnia y publicidad</li>
            <li>Prospección comercial</li>
            <li>Fines estadísticos</li>
            <li>Realizar encuestas o estudios para la valuación de hábitos de consumo de nuestros clientes</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Para las finalidades establecidas en el párrafo anterior, usted podrá manifestar su negativa al correo{" "}
            <a href="mailto:tuprivacidad@ienova.com.mx" className="text-primary underline">tuprivacidad@ienova.com.mx</a>. La negativa para el uso de sus datos personales para fines adicionales, no podrá ser un motivo para dar por terminada la relación establecida con ECOGAS.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Transferencia de Datos Personales</h3>
          <p className="text-muted-foreground leading-relaxed">
            ECOGAS podrá transferir sus datos personales a terceros, nacionales o extranjeros que se encuentren relacionados legalmente con ECOGAS con el fin de cumplir con las finalidades descritas en el presente Aviso de Privacidad. Asimismo, ECOGAS podrá transferir sus datos personales en los casos previstos y autorizados por la Ley.
          </p>
          <p className="text-muted-foreground text-sm italic">
            Para consultar la tabla completa de transferencias de datos, visite el{" "}
            <a href="https://www.ecogas.com.mx/aviso_privacidad.php" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              aviso de privacidad en el sitio oficial de ECOGAS
            </a>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            En caso de no estar de acuerdo con la primera finalidad anteriormente mencionada, puede enviar un correo a la siguiente dirección:{" "}
            <a href="mailto:tuprivacidad@ienova.com.mx" className="text-primary underline">tuprivacidad@ienova.com.mx</a>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Pagos</h3>
          <p className="text-muted-foreground leading-relaxed">
            Las transacciones se realizan mediante la pasarela de pagos de Openpay.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Medidas de Seguridad</h3>
          <p className="text-muted-foreground leading-relaxed">
            ECOGAS ha adoptado y mantiene las medidas de seguridad administrativas, técnicas y físicas necesarias y a su alcance para proteger sus datos personales contra cualquier daño, pérdida, alteración, destrucción o uso o tratamiento de datos personales no autorizado.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Comité de Privacidad ECOGAS</h3>
          <p className="text-muted-foreground leading-relaxed">
            El Comité de Privacidad de ECOGAS ha sido formalmente designado para atender las solicitudes de los titulares para el ejercicio de sus derechos, así como fomentar y velar por la protección de los datos personales que tenemos en nuestra posesión.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Para todo lo relacionado con el tratamiento y protección de los datos personales, usted podrá contactarse con nuestro Comité de Privacidad enviando un correo electrónico a:{" "}
            <a href="mailto:tuprivacidad@ienova.com.mx" className="text-primary underline">tuprivacidad@ienova.com.mx</a>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Derechos ARCO</h3>
          <p className="text-muted-foreground leading-relaxed">
            Como titular de sus datos personales, usted puede ejercer en cualquier momento los derechos de acceso, rectificación, cancelación y oposición (en adelante derechos ARCO) directamente ante nuestro Comité de Privacidad ubicado en Avenida Tecnológico 4505, Las Granjas, 31100 Chihuahua, Chihuahua, o bien, mediante correo electrónico a:{" "}
            <a href="mailto:tuprivacidad@ienova.com.mx" className="text-primary underline">tuprivacidad@ienova.com.mx</a>.
          </p>
          <p className="text-muted-foreground leading-relaxed">Los derechos ARCO hacen referencia a lo siguiente:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Acceso:</strong> usted tiene el derecho de conocer qué datos personales sobre usted tratamos, así como información relativa a las condiciones y generalidades del tratamiento.</li>
            <li><strong>Rectificación:</strong> usted podrá solicitar, en todo momento, la rectificación de sus datos que resulten ser inexactos o incompletos.</li>
            <li><strong>Cancelación:</strong> usted podrá solicitar el cese en el tratamiento de sus datos personales, a partir de un bloqueo y su posterior supresión.</li>
            <li><strong>Oposición:</strong> usted podrá oponerse, por causa legítima, al tratamiento de sus datos personales.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8">Mecanismos y Procedimiento para Revocar su Consentimiento</h3>
          <p className="text-muted-foreground leading-relaxed">
            En los términos de la normativa aplicable, usted puede revocar el consentimiento que en su caso nos haya otorgado. Sin embargo, es importante que tenga en cuenta que no en todos los casos será procedente su solicitud, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Para revocar su consentimiento deberá presentar su solicitud a través de un correo electrónico a{" "}
            <a href="mailto:tuprivacidad@ienova.com.mx" className="text-primary underline">tuprivacidad@ienova.com.mx</a>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Limitar el Uso o Divulgación de los Datos Personales</h3>
          <p className="text-muted-foreground leading-relaxed">
            Usted podrá limitar el uso o divulgación de sus datos personales enviando su solicitud al Comité de Privacidad a la dirección{" "}
            <a href="mailto:tuprivacidad@ienova.com.mx" className="text-primary underline">tuprivacidad@ienova.com.mx</a>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            En caso de que su solicitud resulte procedente, el Comité de Privacidad lo registrará en el listado de exclusión para la finalidad para la cual es aplicable la exclusión.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Se hace de su conocimiento que existen otros mecanismos para limitar el uso y divulgación de sus datos como son el Registro Público para Evitar Publicidad (REPEP) de la PROFECO o el Registro Público de Usuarios (REUS) de la CONDUSEF. Usted puede consultar el portal de internet de ambos registros para obtener mayor información sobre los servicios que proporcionan cada una de las dependencias.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Cookies y Web Beacons</h3>
          <p className="text-muted-foreground leading-relaxed">
            Al navegar en nuestro sitio nuestras "cookies", "registro del servidor" y "web beacons" recaban cierta información no personal. Dichos datos se recaban por el uso e interacción de nuestro sitio web, los datos incluyen Protocolo de Internet, sistema operativo, tipo de navegador, dispositivo móvil así como la trayectoria que realiza dentro del sitio web.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Los datos son utilizados únicamente con fines estadísticos relativas al tiempo que pasa en nuestro sitio así como los sitios de terceros que lo llevaron a nuestro sitio, asimismo la información es utilizada para actualizar los perfiles de los usuarios.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dichas tecnologías pueden ser deshabilitadas en todos los navegadores; para conocer más del tema o conocer el procedimiento para su navegador, puede consultar{" "}
            <a href="http://allaboutcookies.org/es" target="_blank" rel="noopener noreferrer" className="text-primary underline">allaboutcookies.org</a>. Al deshabilitar o bloquear estas tecnologías se podrían bloquear ciertas funciones de nuestro sitio.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Modificaciones al Presente Aviso de Privacidad</h3>
          <p className="text-muted-foreground leading-relaxed">
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            ECOGAS se compromete a mantenerlo informado sobre cualquier cambio que pueda sufrir el presente aviso de privacidad, mediante su publicación en{" "}
            <a href="https://www.ecogas.com.mx/aviso_privacidad.php" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              ecogas.com.mx/aviso_privacidad.php
            </a>.
          </p>

          <p className="text-sm text-muted-foreground mt-8 border-t pt-4">
            <strong>Última actualización:</strong> Septiembre 2025
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AvisoPrivacidad;
