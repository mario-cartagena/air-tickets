import React, { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import BoardingPdf from "../components/flightDetails/BoardingPdf";
import VistaWeb from "../components/flightDetails/VistaWeb";

function FlightDetails() {
  const [verWeb, setVerWeb] = useState(true);
  const [verPDF, setVerPDF] = useState(false);

  return (
    <>
      {verWeb && <VistaWeb />} {/* Renderiza VistaWeb solo si verWeb es true */}
      <div className="buttons__pdf">

        {verPDF ? (
          <PDFViewer style={{ width: "100%", height: "90vh" }}>
            <BoardingPdf />
          </PDFViewer>
        ) : null}

        <PDFDownloadLink document={<BoardingPdf />} fileName="reserva.pdf">
          <button className="btn__pdf" variant="info">Descargar Reserva</button>
        </PDFDownloadLink>

        <button className="btn__pdf"
          variant="dark"
          onClick={() => {
            setVerPDF(!verPDF);
            setVerWeb(false);
          }}
        >
          {verPDF ? "Ocultar PDF" : "Ver PDF"}
        </button>
      </div>
    </>
  );
}

export default FlightDetails;
