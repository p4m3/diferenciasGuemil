import React from 'react';
import ReactDOM from 'react-dom';

import SampleResult from './components/SampleResult.jsx';


const data = [
  {
    'nombre': 'Evacuar Rápido',
    'name': 'Evacuate Fast',
    'items': [
      {
        'title': '17_evacuate_fast',
        'value': 217,
        'icon': 'svg/17_Evacuate_fast.svg',
      },
      {
        'title': 'N.N.',
        'value': 13,
        'icon': ''
      },
      {
        'title': '16_evacuate',
        'value': 1,
        'icon': 'svg/16_Evacuate.svg'
      },
    ],
  },
  {
    'nombre': 'Punto de Reunión',
    'name': 'Meeting Point',
    'items': [
      {
        'title': '27_Geo_point',
        'value': 123,
        'icon': 'svg/27_Geo_point.svg'
      },
      {
        'title': '05_Assembly_group',
        'value': 52,
        'icon': 'svg/05_Assembly_group.svg'
      },
      {
        'title': '06_Assembly_family',
        'value': 51,
        'icon': 'svg/06_Assembly_family.svg'
      },
      {
        'title' : 'N.N.',
        'value' : 13,
        'icon' : ''
      },
    ],
  },
  {
    'nombre': 'Refugio',
    'name': 'Shelter',
    'items': [
      {
        'title': '39_Shelter',
        'value': 154,
        'icon': 'svg/39_Shelter.svg',
      },
      {
        'title': '38_House',
        'value': 40,
        'icon': 'svg/38_House.svg',
      },
      {
        'title': 'N.N.',
        'value': 12,
        'icon': ''
      },
      {
        'title': 'Assembly_Group_and_Hexagon',
        'value': 11,
        'icon': 'svg/Assembly_Group_Hexagon.svg'
      },
    ],
  },
  {
    'nombre': 'Información por teléfono móvil',
    'name': 'Mobile Information',
    'items': [
      {
        'title': '35_Mobile_info',
        'value': 162,
        'icon': 'svg/35_Mobile_info.svg',
      },
      {
        'title': '36_Mobile_message',
        'value': 26,
        'icon': 'svg/36_Mobile_message.svg',
      },
      {
        'title': '37_Mobile_call',
        'value': 14,
        'icon': 'svg/37_Mobile_call.svg'
      },
      {
        'title': 'N.N',
        'value': 11,
        'icon': ''
      },
    ],
  },
  {
    'nombre': 'Salir Fuera',
    'name': 'Way Out',
    'items': [
      {
        'title': '18_Evacuate_way_out',
        'value': 155,
        'icon': 'svg/18_Evacuate_way_out.svg',
      },
      {
        'title': '32_Orientation',
        'value': 27,
        'icon': 'svg/32_Orientation.svg',
      },
      {
        'title': 'N.N.',
        'value': 15,
        'icon': ''
      },
      {
        'title': '19_Move_to_shelter',
        'value': 8,
        'icon': 'svg/19_Move_to_shelter.svg'
      },
    ],
  },
  {
    'nombre': 'Ubicación',
    'name': 'Location',
    'items': [
      {
        'title': '27_Geo_point',
        'value': 198,
        'icon': 'svg/27_Geo_point.svg',
      },
      {
        'title': '60_Flagged_point',
        'value': 13,
        'icon': 'svg/60_Flagged_point.svg',
      },
      {
        'title': 'N.N.',
        'value': 6,
        'icon': ''
      },
      {
        'title': 'Hexagon_dot',
        'value': 0,
        'icon': 'svg/Hexagon_dot.svg'
      },
    ],
  },
  {
    'nombre': 'Deslizamiento de Tierra',
    'name': 'Landslide',
    'items': [
      {
        'title': '48_Alluvium',
        'value': 198,
        'icon': 'svg/48_Alluvium.svg',
      },
      {
        'title': 'N.N.',
        'value': 6,
        'icon': '',
      },
      {
        'title': '49_Avalanche',
        'value': 4,
        'icon': 'svg/49_Avalanche.svg'
      },
      {
        'title': '45_Tsunami',
        'value': 1,
        'icon': 'svg/45_Tsunami.svg'
      },
    ],
  },
  {
    'nombre': 'Autoridad Local',
    'name': 'Local Authority',
    'items': [
      {
        'title': '31_Local-authority_bldg',
        'value': 165,
        'icon': 'svg/31_Local_authority_bldg.svg',
      },
      {
        'title': '29_School',
        'value': 22,
        'icon': 'svg/29_School.svg',
      },
      {
        'title': 'N.N.',
        'value': 13,
        'icon': ''
      },
      {
        'title': '60_Flagged_point',
        'value': 10,
        'icon': 'svg/60_Flagged_point.svg'
      },
    ],
  },
  {
    'nombre': 'Encuentro',
    'name': 'Gathering',
    'items': [
      {
        'title': '05_Assembly_group',
        'value': 118,
        'icon': 'svg/05_Assembly_group.svg',
      },
      {
        'title': 'Hexagon_dot',
        'value': 63,
        'icon': 'svg/Hexagon_dot.svg',
      },
      {
        'title': '03_Assembly_couple',
        'value': 31,
        'icon': 'svg/03_Assembly_couple.svg'
      },
      {
        'title': 'N.N.',
        'value': 12,
        'icon': ''
      },
    ],
  },
  {
    'nombre': 'Riesgo de Tsunami',
    'name': 'Tsunami Hazard',
    'items': [
      {
        'title': '20_Warning_tsunami_risk',
        'value': 149,
        'icon': 'svg/20_Warning_tsunami_risk.svg',
      },
      {
        'title': '45_Tsunami',
        'value': 66,
        'icon': 'svg/45_Tsunami.svg',
      },
      {
        'title': 'N.N.',
        'value': 6,
        'icon': ''
      },
      {
        'title': '51_Flood',
        'value': 4,
        'icon': 'svg/51_Flood.svg'
      },
    ],
  },
  {
    'nombre': 'Niña',
    'name': 'Girl',
    'items': [
      {
        'title': '02_Woman',
        'value': 153,
        'icon': 'svg/02_Woman.svg',
      },
      {
        'title': 'N.N.',
        'value': 12,
        'icon': ''
      },
      {
        'title': '07_Girl',
        'value': 11,
        'icon': 'svg/07_Girl.svg'
      },
    ],
  },
  {
    'nombre': 'Alarma de Tsunami',
    'name': 'Tsunami Alarm',
    'items': [
      {
        'title': 'Octagono-rojo',
        'value': 116,
        'icon': 'svg/octagono_rojo.svg',
        'color': '#222',
      },
      {
        'title': 'Triangulo-amarillo',
        'value': 104,
        'icon': 'svg/triangulo_amarillo.svg',
        'color': '#666',
      },
      {
        'title': 'N.N.',
        'value': 15,
        'icon': ''
      },
    ],
  },
  {
    'nombre': 'Enviar/Recibir Mensajes',
    'name': 'Chat',
    'items': [
      {
        'title': '56_Messaging_twoways',
        'value': 147,
        'icon': 'svg/56_Messaging_twoways.svg',
      },
      {
        'title': '55_Messaging_oneway',
        'value': 17,
        'icon': 'svg/55_Messaging_oneway.svg',
      },
      {
        'title': '67_Contain_message',
        'value': 12,
        'icon': 'svg/67_Contain_message.svg'
      },
      {
        'title': 'N.N.',
        'value': 10,
        'icon': ''
      },
    ],
  },
];


const app = document.getElementById('app');


const samples = data.map(e => 
  <>
    <hr />
    <SampleResult title_english={e.name} title_spanish={e.nombre} sample_data={e.items} />
  </>
);

const result = <div>{samples}</div>;


ReactDOM.render(
  result,
  app
);
