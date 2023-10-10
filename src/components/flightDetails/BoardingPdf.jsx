import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import logo from '../../assets/img/logoVoladoresBg.png'

const BoardingPdf = () => {

  const storedresponseBookingConfirmed = sessionStorage.getItem('responseBookingConfirmed');
  const bookingConfirmed = JSON.parse(storedresponseBookingConfirmed);
  if (!bookingConfirmed || !Array.isArray(bookingConfirmed)) {
    // Handle the case when the necessary data is not available or not in the expected format
    return null;
  }


  // console.log(bookingConfirmed);


const styles = StyleSheet.create({

  page: {
    minHeight: '100vh',
    fontFamily: 'Helvetica',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 30px 20px 0',
    fontWeight: 'bold',
  },
  containerppl: {
    marginLeft: "30mm",
    marginRight: "30mm",
    borderRadius: 12,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
  },
  ticket: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    marginBottom: 10,
  },
  airline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boarding: {
    fontSize: 10,
    marginBottom: 10,
    display: 'flex',
    textAlign: 'end',
    lineHeight: 0.5,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    marginBottom: 10,
  },
  jfk: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  plane: {
    margin: '0 10px',
  },
  sfo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subContent: {
    marginBottom: 10,
  },
  watermark: {
    fontSize: 12,
    opacity: 0.5,
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    marginBottom: 5,
  },
  flight: {
    fontSize: 14,
    marginBottom: 5,
  },
  gate: {
    fontSize: 14,
    marginBottom: 5,
  },
  seat: {
    fontSize: 14,
    marginBottom: 5,
  },
  boardingTime: {
    fontSize: 14,
    marginBottom: 5,
  },
  barcode: {
    width: 200,
    height: 50,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 8,

  },
  infoPpl: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
  },
  icon: {
    fontSize: '1em',
    marginRight: '0.2em',
  },
  image: {
    width: '200px',
  },
  infoBoarding: {
    margin: 10,
    fontSize: 8,
    marginLeft: "30mm",
    marginRight: "30mm",
  },
  space: {
    height: '20px',
    backgroundColor: 'white',
  },
  table: {
    display: 'table',
    width: '100%',
    // borderStyle: 'solid',
    // borderRadius: 6,
    // borderWidth: 1,
    // borderColor: '#000000',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCellHeader: {
    backgroundColor: '#A12985',
    color: '#FFF',
    borderRadius: '6px',
    margin: 3,
    padding: 3,
    fontSize: 10,
    display: 'flex',
    alignItems: 'center',
    width: '70px',

  },
  tableCell: {
    backgroundColor: '#F0F0F0',
    borderRadius: '6px',
    fontSize: 8,
    margin: 3,
    padding: 5,
    width: '70px',
  },
  boardingNumber: {
    fontWeight: 'bold',
    color: '#A12985',
  },
  spaceDark: {
    height: '10px',
    backgroundColor: '#F0F0F0',
  },
  paragraph: {
    textAlign: 'justify',
  },
  tablePassenger: {
    display: 'table',
    width: '100%',
    // borderStyle: 'solid',
    // borderRadius: 6,
    // borderWidth: 1,
    // borderColor: '#000000',
  },
  tableRowPassenger: {
    flexDirection: 'row',
  },
  tableCellHeaderPassenger: {
    backgroundColor: '#A12985',
    color: '#FFF',
    borderRadius: '6px',
    margin: 3,
    padding: 3,
    fontSize: 10,
    display: 'flex',
    alignItems: 'center',
    width: '220px',

  },
  tableCellPassenger: {
    backgroundColor: '#F0F0F0',
    borderRadius: '6px',
    fontSize: 8,
    margin: 3,
    padding: 5,
    width: '220px',
  },
});
  

const data = [
  ['N° Vuelo', 'Origen', 'Destino', 'Fecha de Salida', 'Hora', 'Fecha de Llegada', 'Hora',],
  [bookingConfirmed?.[0].baggageDepartureInfo.data?.[0].flight_code, bookingConfirmed?.[0].baggageDepartureInfo.data?.[0].departure_airport.city, bookingConfirmed?.[0].baggageDepartureInfo.data?.[0].arrival_airport.city, bookingConfirmed?.[0].baggageDepartureInfo.data?.[0].departure_date, bookingConfirmed?.[0].baggageDepartureInfo.data?.[0].departure_time, bookingConfirmed?.[0].baggageDepartureInfo.data?.[0].arrival_date, bookingConfirmed?.[0].baggageDepartureInfo.data?.[0].arrival_time],
  
  ...(bookingConfirmed?.[0].baggageArrivalInfo ? [
    [
      bookingConfirmed?.[0].baggageArrivalInfo.data?.[0].flight_code,
      bookingConfirmed?.[0].baggageArrivalInfo.data?.[0].departure_airport.city,
      bookingConfirmed?.[0].baggageArrivalInfo.data?.[0].arrival_airport.city,
      bookingConfirmed?.[0].baggageArrivalInfo.data?.[0].departure_date,
      bookingConfirmed?.[0].baggageArrivalInfo.data?.[0].departure_time,
      bookingConfirmed?.[0].baggageArrivalInfo.data?.[0].arrival_date,
      bookingConfirmed?.[0].baggageArrivalInfo.data?.[0].arrival_time
    ]
  ] : [])
];

// const nombrePasajero = bookingConfirmed[0].passengerInfoBooking[0].nombre

console.log(bookingConfirmed?.[0].passengerInfoBooking);

const dataPassenger = [['Nombre de Pasajero', 'Documento de Identidad']];

for (let i = 0; i < bookingConfirmed?.[0].passengerInfoBooking?.length; i++) {
  const passenger = bookingConfirmed?.[0].passengerInfoBooking?.[i];
  const nombrePasajero = passenger.nombre;
  const documentoIdentidad = passenger.numeroDocumento;
  dataPassenger.push([nombrePasajero, documentoIdentidad]);
}

// ... agregar más filas de datos aquí

// Utiliza `dataPassenger` en tu estructura de React PDF


let ticketBookings = bookingConfirmed?.map((e) => (

    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <Image style={styles.image} src={logo} />
        <Text style={styles.boarding}>COMPROBANTE DE RESERVA N° <Text style={styles.boardingNumber}>XYZ123</Text></Text>

      </View>
      <View style={styles.infoBoarding}>
        <Text style={styles.boarding}>Este documento contiene el detalle y condiciones del servicio que adquiriste.</Text>
        <Text style={styles.boarding}>No es necesario que lo lleves el día de tu viaje.</Text>
      </View>
      <View style={styles.containerppl}>
        <View style={styles.ticket}>
          <View style={styles.infoPpl}>
            <Text style={styles.infoTitle}>Información importante</Text>
            <Text style={styles.title}>
              <AiOutlineInfoCircle style={styles.icon} />
            </Text>
            <Text style={styles.info}>Considere que los tickets adquiridos están sujetos a restricciones gubernamentales, de los países donde operamos, y
              deben ser aprobados por las autoridades locales.</Text>
          </View>
        </View>
        <View style={styles.space}> </View>
        <Text style={styles.airline}>Información de tu viaje:</Text>

        <View style={styles.tablePassenger}>
          {dataPassenger.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.tableRowPassenger}>
              {row.map((cell, cellIndex) => (
                <View key={cellIndex} style={rowIndex === 0 ? styles.tableCellHeaderPassenger : styles.tableCellPassenger}>
                  <Text>{cell}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.table}>
          {data.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              {row.map((cell, cellIndex) => (
                <View key={cellIndex} style={rowIndex === 0 ? styles.tableCellHeader : styles.tableCell}>
                  <Text>{cell}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.space}> </View>
        <View style={styles.space}> </View>

        <View style={styles.ticket}>
          <Text style={styles.info}>
            <Text style={styles.infoTitle}>VIGENCIA DEL PASAJE:  </Text>
            <Text style={styles.paragraph}>
              Si tu tarifa no permite cambios ni devoluciones, sólo aplican las fechas de salida y llegada correspondientes al itinerario de tu viaje.
              Si tu tarifa permite cambios y/o devoluciones, la vigencia de tu pasaje es de 1 año a contar de la fecha de emisión. Sin embargo, una vez iniciado viaje, tu pasaje
              vence al cumplirse la estadía máxima o la última fecha de viaje que tu tarifa permite
            </Text>
          </Text>
          <View style={styles.spaceDark}> </View>
          <Text style={styles.info}>
            <Text style={styles.infoTitle}>DESISTIMIENTO:  </Text>
            <Text style={styles.paragraph}>
              En aplicación del artículo 1878 del Código de Comercio, el pasajero podrá desistir del viaje antes de su iniciación, dando aviso al
              transportador o a la agencia de viajes con al menos veinticuatro (24) horas de antelación a la realización del vuelo. En estos casos, el transportador o agencia de
              viajes, podrá retener una suma de dinero, de acuerdo con lo regulado en el presente numeral. El transportador o agencia de viajes, de acuerdo con las condiciones
              de la tarifa, podrá retener el porcentaje pactado, el cual no podrá ser superior al 10% del valor recibido por concepto de tarifa, excluyendo tasas, impuestos y
              tarifa administrativa. La retención que se hace al pasajero se efectuará a favor del transportador. Lo dispuesto en el presente numeral no aplicará cuando se
              trate de tarifas promocionales, salvo que sea ofrecido por el transportador, en cuyo evento se aplicará de conformidad con las condiciones ofrecidas. La aerolínea
              y/o agente de viajes, deberá reembolsar el dinero al pasajero en un plazo máximo de treinta (30) días calendario a partir de la comunicación del desistimiento.
            </Text>

          </Text>
          <View style={styles.spaceDark}> </View>
          <Text style={styles.info}>
            <Text style={styles.infoTitle}>RETRACTO:  </Text>
            <Text style={styles.paragraph}>
              Para compras realizadas a partir del 12 de diciembre de 2019, el Derecho de Retracto aplicará:(i) Para compras realizadas por medios no
              tradicionales o a distancia (Contact Center y/o Página Web), (ii) El término máximo para ejercer el derecho de retracto será de cinco (5) días hábiles contados a
              partir del día de la compra del tiquete aéreo, (iii) Aplica, siempre y cuando el servicio no haya tenido que ejecutarse durante los mismos cinco (5) días hábiles,
              (iv) No se generará retención alguna, procederá la devolución total, y (v) No procede devolución de tarifa administrativa, de conformidad con lo establecido en la
              Resolución 3596 de 2006.Para compras realizadas antes del 12 de diciembre de 2019, aplicará el Derecho de Retracto estipulado en los Reglamentos
              Aeronáuticos de Colombia:(i) Para las ventas efectuadas a través de métodos no tradicionales o a distancia a los cuales se refiere el Decreto 1499 de 2014,(ii) El
              retracto deberá ser ejercido a través de cualquier canal de atención del vendedor, dentro de las cuarenta y ocho (48)horas corrientes siguientes a la operación de
              la compra,(iii) El retracto sólo podrá ser ejercido con una anterioridad igual o mayor a ocho (8) días calendario entre el momento de su ejercicio oportuno y la
              fecha prevista para el inicio de la prestación del servicio para operaciones nacionales.
            </Text>
          </Text>
        </View>

      </View>
    </Page>
))
  return (

    <Document>
          {ticketBookings}
    </Document>
  );
};

export default BoardingPdf;