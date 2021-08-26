import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'

const finishedGames = [
    {
        "id": 331362,
        "competition": {
            "id": 2014,
            "name": "Primera Division",
            "area": {
                "name": "Spain",
                "code": "ESP",
                "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
            }
        },
        "season": {
            "id": 380,
            "startDate": "2021-08-13",
            "endDate": "2022-05-22",
            "currentMatchday": 2,
            "winner": null
        },
        "utcDate": "2021-08-14T20:00:00Z",
        "status": "FINISHED",
        "matchday": 1,
        "stage": "REGULAR_SEASON",
        "group": null,
        "lastUpdated": "2021-08-24T16:20:11Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": "AWAY_TEAM",
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": 1,
                "awayTeam": 4
            },
            "halfTime": {
                "homeTeam": 0,
                "awayTeam": 0
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 263,
            "name": "Deportivo Alavés"
        },
        "awayTeam": {
            "id": 86,
            "name": "Real Madrid CF"
        },
        "referees": [
            {
                "id": 81436,
                "name": "Carlos Álvarez",
                "role": "ASSISTANT_REFEREE_N1",
                "nationality": "Spain"
            },
            {
                "id": 58172,
                "name": "Julián Villaseñor",
                "role": "ASSISTANT_REFEREE_N2",
                "nationality": "Spain"
            },
            {
                "id": 44065,
                "name": "Álvaro López",
                "role": "FOURTH_OFFICIAL",
                "nationality": "Spain"
            },
            {
                "id": 32457,
                "name": "César Soto",
                "role": "REFEREE",
                "nationality": "Spain"
            },
            {
                "id": 43864,
                "name": "Javier Estrada",
                "role": "VIDEO_ASSISANT_REFEREE_N1",
                "nationality": "Spain"
            },
            {
                "id": 57917,
                "name": "Jorge Figueroa",
                "role": "VIDEO_ASSISANT_REFEREE_N2",
                "nationality": "Spain"
            }
        ]
    },
    {
        "id": 331362,
        "competition": {
            "id": 2014,
            "name": "Primera Division",
            "area": {
                "name": "Spain",
                "code": "ESP",
                "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
            }
        },
        "season": {
            "id": 380,
            "startDate": "2021-08-13",
            "endDate": "2022-05-22",
            "currentMatchday": 2,
            "winner": null
        },
        "utcDate": "2021-08-14T20:00:00Z",
        "status": "FINISHED",
        "matchday": 1,
        "stage": "REGULAR_SEASON",
        "group": null,
        "lastUpdated": "2021-08-24T16:20:11Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": "AWAY_TEAM",
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": 1,
                "awayTeam": 4
            },
            "halfTime": {
                "homeTeam": 0,
                "awayTeam": 0
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 263,
            "name": "Deportivo Alavés"
        },
        "awayTeam": {
            "id": 86,
            "name": "Real Madrid CF"
        },
        "referees": [
            {
                "id": 81436,
                "name": "Carlos Álvarez",
                "role": "ASSISTANT_REFEREE_N1",
                "nationality": "Spain"
            },
            {
                "id": 58172,
                "name": "Julián Villaseñor",
                "role": "ASSISTANT_REFEREE_N2",
                "nationality": "Spain"
            },
            {
                "id": 44065,
                "name": "Álvaro López",
                "role": "FOURTH_OFFICIAL",
                "nationality": "Spain"
            },
            {
                "id": 32457,
                "name": "César Soto",
                "role": "REFEREE",
                "nationality": "Spain"
            },
            {
                "id": 43864,
                "name": "Javier Estrada",
                "role": "VIDEO_ASSISANT_REFEREE_N1",
                "nationality": "Spain"
            },
            {
                "id": 57917,
                "name": "Jorge Figueroa",
                "role": "VIDEO_ASSISANT_REFEREE_N2",
                "nationality": "Spain"
            }
        ]
    },
    {
        "id": 331345,
        "competition": {
            "id": 2014,
            "name": "Primera Division",
            "area": {
                "name": "Spain",
                "code": "ESP",
                "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
            }
        },
        "season": {
            "id": 380,
            "startDate": "2021-08-13",
            "endDate": "2022-05-22",
            "currentMatchday": 2,
            "winner": null
        },
        "utcDate": "2021-08-22T20:00:00Z",
        "status": "FINISHED",
        "matchday": 2,
        "stage": "REGULAR_SEASON",
        "group": null,
        "lastUpdated": "2021-08-24T16:20:10Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": "DRAW",
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": 3,
                "awayTeam": 3
            },
            "halfTime": {
                "homeTeam": 0,
                "awayTeam": 1
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 88,
            "name": "Levante UD"
        },
        "awayTeam": {
            "id": 86,
            "name": "Real Madrid CF"
        },
        "referees": [
            {
                "id": 56965,
                "name": "Iker De Francisco",
                "role": "ASSISTANT_REFEREE_N1",
                "nationality": "Spain"
            },
            {
                "id": 32627,
                "name": "Juan López",
                "role": "ASSISTANT_REFEREE_N2",
                "nationality": "Spain"
            },
            {
                "id": 31991,
                "name": "Mateo Busquets",
                "role": "FOURTH_OFFICIAL",
                "nationality": "Spain"
            },
            {
                "id": 55934,
                "name": "Guillermo Cuadra",
                "role": "REFEREE",
                "nationality": "Spain"
            },
            {
                "id": 15625,
                "name": "Alejandro Hernández",
                "role": "VIDEO_ASSISANT_REFEREE_N1",
                "nationality": "Spain"
            },
            {
                "id": 15627,
                "name": "José Naranjo",
                "role": "VIDEO_ASSISANT_REFEREE_N2",
                "nationality": "Spain"
            }
        ]
    }
]

const upcomingGames = [
    {
        "id": 331340,
        "competition": {
            "id": 2014,
            "name": "Primera Division",
            "area": {
                "name": "Spain",
                "code": "ESP",
                "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
            }
        },
        "season": {
            "id": 380,
            "startDate": "2021-08-13",
            "endDate": "2022-05-22",
            "currentMatchday": 2,
            "winner": null
        },
        "utcDate": "2021-08-28T20:00:00Z",
        "status": "SCHEDULED",
        "matchday": 3,
        "stage": "REGULAR_SEASON",
        "group": null,
        "lastUpdated": "2021-07-25T16:20:06Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": null,
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "halfTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 90,
            "name": "Real Betis Balompié"
        },
        "awayTeam": {
            "id": 86,
            "name": "Real Madrid CF"
        },
        "referees": []
    },
    {
        "id": 331325,
        "competition": {
            "id": 2014,
            "name": "Primera Division",
            "area": {
                "name": "Spain",
                "code": "ESP",
                "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
            }
        },
        "season": {
            "id": 380,
            "startDate": "2021-08-13",
            "endDate": "2022-05-22",
            "currentMatchday": 2,
            "winner": null
        },
        "utcDate": "2021-09-11T14:15:00Z",
        "status": "SCHEDULED",
        "matchday": 4,
        "stage": "REGULAR_SEASON",
        "group": null,
        "lastUpdated": "2021-08-24T08:20:10Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": null,
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "halfTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 86,
            "name": "Real Madrid CF"
        },
        "awayTeam": {
            "id": 558,
            "name": "RC Celta de Vigo"
        },
        "referees": []
    },
    {
        "id": 331315,
        "competition": {
            "id": 2014,
            "name": "Primera Division",
            "area": {
                "name": "Spain",
                "code": "ESP",
                "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
            }
        },
        "season": {
            "id": 380,
            "startDate": "2021-08-13",
            "endDate": "2022-05-22",
            "currentMatchday": 2,
            "winner": null
        },
        "utcDate": "2021-09-19T18:00:00Z",
        "status": "SCHEDULED",
        "matchday": 5,
        "stage": "REGULAR_SEASON",
        "group": null,
        "lastUpdated": "2021-07-01T08:15:57Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": null,
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "halfTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 95,
            "name": "Valencia CF"
        },
        "awayTeam": {
            "id": 86,
            "name": "Real Madrid CF"
        },
        "referees": []
    },
    {
        "id": 331305,
        "competition": {
            "id": 2014,
            "name": "Primera Division",
            "area": {
                "name": "Spain",
                "code": "ESP",
                "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
            }
        },
        "season": {
            "id": 380,
            "startDate": "2021-08-13",
            "endDate": "2022-05-22",
            "currentMatchday": 2,
            "winner": null
        },
        "utcDate": "2021-09-22T18:00:00Z",
        "status": "SCHEDULED",
        "matchday": 6,
        "stage": "REGULAR_SEASON",
        "group": null,
        "lastUpdated": "2021-07-01T08:15:56Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": null,
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "halfTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 86,
            "name": "Real Madrid CF"
        },
        "awayTeam": {
            "id": 89,
            "name": "RCD Mallorca"
        },
        "referees": []
    },
    {
        "id": 331297,
        "competition": {
            "id": 2014,
            "name": "Primera Division",
            "area": {
                "name": "Spain",
                "code": "ESP",
                "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
            }
        },
        "season": {
            "id": 380,
            "startDate": "2021-08-13",
            "endDate": "2022-05-22",
            "currentMatchday": 2,
            "winner": null
        },
        "utcDate": "2021-09-26T18:00:00Z",
        "status": "SCHEDULED",
        "matchday": 7,
        "stage": "REGULAR_SEASON",
        "group": null,
        "lastUpdated": "2021-07-01T08:15:55Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": null,
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "halfTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 86,
            "name": "Real Madrid CF"
        },
        "awayTeam": {
            "id": 94,
            "name": "Villarreal CF"
        },
        "referees": []
    }
]

ReactDOM.render(<App />, document.getElementById('root'))
