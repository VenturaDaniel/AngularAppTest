import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {

  constructor(){
  }

  inicial = 0
  final =9
    dataTest = {
      header:
        [
          '',
          'Cliente',
          'Tipo',
          'Serie-Numero',
          'Importe Total',
          'Fecha Emision',
          'Estado Doc Tributario',
          'Observación SUNAT',
          'Xml',
          'Cdr'
        ],
      data:
      [
        {
          "_id": "665f93749cdb2f18c432c1ca",
          "cliente": "EVIDENDS OVERPLEX OVERPLEX OVERPLEX OVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEX EVIDENDS OVERPLEX OVERPLEX OVERPLEX OVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEXOVERPLEX",
          "tipodoc": "Nota de Debito",
          "serieNumero": "0000-0000000",
          "moneda": "Euros",
          "importe": "$1,379.52",
          "fechaEmision": "03/05/2023 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "RECHAZADO",
          "observacionSunat": "ANULADO"
        },
        {
          "_id": "665f9374a966eb2ed19c257c",
          "cliente": "OVERPLEX",
          "tipodoc": "Nota de Debito",
          "serieNumero": "0000-0000000",
          "moneda": "Dolares",
          "importe": "$3,520.89",
          "fechaEmision": "25/10/2019 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "ANULADO",
          "observacionSunat": "OBSERVACION"
        },
        {
          "_id": "665f93749c9c5a9b1991629c",
          "cliente": "ORBALIX",
          "tipodoc": "Nota de Debito",
          "serieNumero": "0000-0000000",
          "moneda": "Dolares",
          "importe": "$2,563.34",
          "fechaEmision": "15/12/2021 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "ENVIADO A DECLARAR",
          "observacionSunat": "ANULADO"
        },
        {
          "_id": "665f93743fb5188d4b88ce05",
          "cliente": "DUFLEX",
          "tipodoc": "Nota de Credito",
          "serieNumero": "0000-0000000",
          "moneda": "Euros",
          "importe": "$2,575.35",
          "fechaEmision": "03/06/2020 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "RECHAZADO",
          "observacionSunat": "ACEPTADO"
        },
        {
          "_id": "665f93748fc7b7dc6cac38fd",
          "cliente": "SURELOGIC",
          "tipodoc": "Factura",
          "serieNumero": "0000-0000000",
          "moneda": "Soles",
          "importe": "$2,129.84",
          "fechaEmision": "09/03/2018 ",
          "estadoDoc": "ANULADO",
          "estadoDocTri": "RECHAZADO",
          "observacionSunat": "ANULADO"
        },
        {
          "_id": "665f93740ff554d8cb2b53b7",
          "cliente": "ACIUM",
          "tipodoc": "Nota de Credito",
          "serieNumero": "0000-0000000",
          "moneda": "Dolares",
          "importe": "$3,734.60",
          "fechaEmision": "04/12/2018 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "ANULADO",
          "observacionSunat": "RECHAZADO"
        },
        {
          "_id": "665f93747c8ad4435efd92bd",
          "cliente": "GEOFARM",
          "tipodoc": "Boleta",
          "serieNumero": "0000-0000000",
          "moneda": "Dolares",
          "importe": "$2,836.97",
          "fechaEmision": "03/09/2021 ",
          "estadoDoc": "ANULADO",
          "estadoDocTri": "ANULADO",
          "observacionSunat": "OBSERVACION"
        },
        {
          "_id": "665f937448d8c45206413b83",
          "cliente": "MEDIFAX",
          "tipodoc": "Boleta",
          "serieNumero": "0000-0000000",
          "moneda": "Dolares",
          "importe": "$3,906.42",
          "fechaEmision": "20/06/2017 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "RECHAZADO",
          "observacionSunat": "ACEPTADO"
        },
        {
          "_id": "665f937433a449924528d6db",
          "cliente": "ECLIPTO",
          "tipodoc": "Factura",
          "serieNumero": "0000-0000000",
          "moneda": "Dolares",
          "importe": "$2,079.19",
          "fechaEmision": "25/08/2020 ",
          "estadoDoc": "ANULADO",
          "estadoDocTri": "ENVIADO A DECLARAR",
          "observacionSunat": "OBSERVACION"
        },
        {
          "_id": "665f937449d4c7a05a3901a2",
          "cliente": "EQUITOX",
          "tipodoc": "Nota de Credito",
          "serieNumero": "0000-0000000",
          "moneda": "Soles",
          "importe": "$2,252.44",
          "fechaEmision": "01/06/2018 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "ACEPTADO",
          "observacionSunat": "ANULADO"
        },
        {
          "_id": "665f93748a43f9016d46c992",
          "cliente": "INTERGEEK",
          "tipodoc": "Nota de Debito",
          "serieNumero": "0000-0000000",
          "moneda": "Soles",
          "importe": "$2,482.10",
          "fechaEmision": "07/09/2022 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "ENVIADO A DECLARAR",
          "observacionSunat": "ACEPTADO"
        },
        {
          "_id": "665f937410f65b39457cf4c8",
          "cliente": "ANARCO",
          "tipodoc": "Nota de Credito",
          "serieNumero": "0000-0000000",
          "moneda": "Soles",
          "importe": "$2,965.86",
          "fechaEmision": "18/03/2022 ",
          "estadoDoc": "ANULADO",
          "estadoDocTri": "ENVIADO A DECLARAR",
          "observacionSunat": "RECHAZADO"
        },
        {
          "_id": "665f9374dc6e1ed432b80288",
          "cliente": "RODEOCEAN",
          "tipodoc": "Factura",
          "serieNumero": "0000-0000000",
          "moneda": "Dolares",
          "importe": "$3,062.01",
          "fechaEmision": "22/06/2020 ",
          "estadoDoc": "ANULADO",
          "estadoDocTri": "RECHAZADO",
          "observacionSunat": "OBSERVACION"
        },
        {
          "_id": "665f9374a2afebb2d78806d0",
          "cliente": "CYTREK",
          "tipodoc": "Factura",
          "serieNumero": "0000-0000000",
          "moneda": "Euros",
          "importe": "$2,631.41",
          "fechaEmision": "24/02/2018 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "RECHAZADO",
          "observacionSunat": "RECHAZADO"
        },
        {
          "_id": "665f93740affd98063e2f99e",
          "cliente": "EWAVES",
          "tipodoc": "Nota de Credito",
          "serieNumero": "0000-0000000",
          "moneda": "Soles",
          "importe": "$3,058.32",
          "fechaEmision": "26/09/2023 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "ANULADO",
          "observacionSunat": "RECHAZADO"
        },
        {
          "_id": "665f9374ce8a012764b80e16",
          "cliente": "RETRACK",
          "tipodoc": "Boleta",
          "serieNumero": "0000-0000000",
          "moneda": "Soles",
          "importe": "$2,982.91",
          "fechaEmision": "08/07/2020 ",
          "estadoDoc": "ANULADO",
          "estadoDocTri": "ENVIADO A DECLARAR",
          "observacionSunat": "ANULADO"
        },
        {
          "_id": "665f9374a699e171873094b3",
          "cliente": "ETERNIS",
          "tipodoc": "Nota de Debito",
          "serieNumero": "0000-0000000",
          "moneda": "Soles",
          "importe": "$3,608.46",
          "fechaEmision": "02/05/2018 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "ACEPTADO",
          "observacionSunat": "ANULADO"
        },
        {
          "_id": "665f9374552de64e1a1ac0e5",
          "cliente": "BUZZMAKER",
          "tipodoc": "Factura",
          "serieNumero": "0000-0000000",
          "moneda": "Euros",
          "importe": "$1,248.76",
          "fechaEmision": "03/12/2017 ",
          "estadoDoc": "EMITIDO",
          "estadoDocTri": "RECHAZADO",
          "observacionSunat": "RECHAZADO"
        },
        {
          "_id": "665f937421adca781bd0908c",
          "cliente": "INTERLOO",
          "tipodoc": "Factura",
          "serieNumero": "0000-0000000",
          "moneda": "Soles",
          "importe": "$1,843.60",
          "fechaEmision": "03/10/2015 ",
          "estadoDoc": "ANULADO",
          "estadoDocTri": "RECHAZADO",
          "observacionSunat": "ANULADO"
        },
        {
          "_id": "665f937418f356c4e965126e",
          "cliente": "HATOLOGY",
          "tipodoc": "Nota de Credito",
          "serieNumero": "0000-0000000",
          "moneda": "Euros",
          "importe": "$1,994.37",
          "fechaEmision": "27/08/2017 ",
          "estadoDoc": "ANULADO",
          "estadoDocTri": "ACEPTADO",
          "observacionSunat": "ANULADO"
        }
      ]
    }
  total = Array(this.dataTest.data.length/10).fill(0).map((x,i)=>i);

}
