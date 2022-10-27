import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Sports from '../pages/Sports';
import axios from 'axios';

// const mockData = {
//                 "pgatePath": "test",
//                 "sports": [{
//                     "id": 100,
//                     "epId": 240,
//                     "desc": "Football",
//                     "pos": 1,
//                     "ne": 100,
//                     "eic": 25,
//                     "v": false,
//                     "ve": false,
//                     "mc": true,
//                     "ncmc": 2,
//                     "nemc": 6,
//                     "hasInplayEvents": true,
//                     "hasUpcomingEvents": true,
//                     "marketTypes": [
//                         {
//                         "mtId": 1,
//                         "pos": 2,
//                         "desc": "Match Betting",
//                         "mtDesc": "Match Betting",
//                         "couponName": "template_a",
//                         "headers": [
//                             "1",
//                             "X",
//                             "2"
//                         ],
//                         "outcome_keys": [
//                             "HOME",
//                             "DRAW",
//                             "AWAY"
//                         ],
//                         "periods": [
//                             {
//                             "desc": "Match",
//                             "longDesc": "Match extended1",
//                             "pIds": [
//                                 100,
//                                 101,
//                                 956,
//                                 955,
//                                 233,
//                                 954
//                             ],
//                             "config": {
//                                 "filter": "ALL"
//                             }
//                             }
//                         ]
//                         }
//                     ],
//                     "comp": [
//                         {
//                         "id": 130873010,
//                         "desc": "Champions League",
//                         "pos": 4,
//                         "events": [
//                             {
//                             "id": 1807293300,
//                             "event_type": "GAME_EVENT",
//                             "event_path_id": 545303510,
//                             "sport_id": 100,
//                             "desc": "Borussia Dortmund v Manchester City",
//                             "oppADesc": "Borussia Dortmund",
//                             "oppAId": 4313100,
//                             "oppBDesc": "Manchester City",
//                             "oppBId": 2426300,
//                             "time": 1666724400000,
//                             "pos": 1,
//                             "scoreboard": {
//                                 "eId": 1807293300,
//                                 "sId": 100,
//                                 "clk": "87:57",
//                                 "clockInSeconds": 2700,
//                                 "validAt": 1666728143391,
//                                 "dsc": "2H",
//                                 "oaId": 4313100,
//                                 "obId": 2426300,
//                                 "code": 235,
//                                 "periodKey": "H2",
//                                 "sTs": 1666724400000,
//                                 "cal": true,
//                                 "run": true,
//                                 "act": 4313100,
//                                 "scrA": 0,
//                                 "scrB": 0,
//                                 "addresses": {
//                                 "comment": "/scoreboard/board/1807293300/comments/en_GB",
//                                 "essentialScoreboard": "/essentialscoreboard/100/1807293300",
//                                 "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807293300/en_GB",
//                                 "stats": "/scoreboard/board/1807293300/stats",
//                                 "timeline": "/scoreboard/board/1807293300/timeline",
//                                 "overviewComment": "/scoreboard/board/1807293300/overview/comments/en_GB"
//                                 },
//                                 "disabledScoreboard": false,
//                                 "reversedClock": false,
//                                 "preeventPeriodDescription": "",
//                                 "inPlay": true,
//                                 "scoreboardUrlFragment": null,
//                                 "externalScoreboardConfiguration": {
//                                 "eventId": 1807293300,
//                                 "sportId": 100,
//                                 "providerEventId": 35645553,
//                                 "provider": "BET_RADAR",
//                                 "providerDescription": "Borussia Dortmund vs Manchester City",
//                                 "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
//                                 },
//                                 "scr": "0-0",
//                                 "penaltyShootout": {},
//                                 "penaltiesScrA": 0,
//                                 "penaltiesScrB": 0,
//                                 "stoppageTime": "",
//                                 "marketSuspensionReason": "",
//                                 "redCardA": 0,
//                                 "redCardB": 0,
//                                 "matchLength": 90
//                             },
//                             "markets": [
//                                 {
//                                 "id": 11078109030,
//                                 "desc": "Match Betting",
//                                 "eid": 1807293300,
//                                 "pid": 100,
//                                 "ptd": 1,
//                                 "ptdesc": "Win only",
//                                 "st": 1,
//                                 "mblindex": 89148333,
//                                 "cur": true,
//                                 "next": false,
//                                 "mtid": 1,
//                                 "p": "90 Mins",
//                                 "o": [
//                                     {
//                                     "oid": 118563144700,
//                                     "d": "Borussia Dortmund",
//                                     "sd": null,
//                                     "cpid": 535076785668,
//                                     "pr": "10/1",
//                                     "prd": 11,
//                                     "fdp": "11.0",
//                                     "h": false,
//                                     "po": 1,
//                                     "key": "ML1",
//                                     "keyDimension": "HOME"
//                                     },
//                                     {
//                                     "oid": 118563145500,
//                                     "d": "Draw",
//                                     "sd": null,
//                                     "cpid": 535076785667,
//                                     "pr": "2/9",
//                                     "prd": 1.222,
//                                     "fdp": "1.222",
//                                     "h": false,
//                                     "po": 2,
//                                     "key": "MLX",
//                                     "keyDimension": "DRAW"
//                                     },
//                                     {
//                                     "oid": 118563145100,
//                                     "d": "Manchester City",
//                                     "sd": null,
//                                     "cpid": 535076779614,
//                                     "pr": "5/1",
//                                     "prd": 6,
//                                     "fdp": "6.0",
//                                     "h": false,
//                                     "po": 3,
//                                     "key": "ML2",
//                                     "keyDimension": "AWAY"
//                                     }
//                                 ]
//                                 }
//                             ],
//                             "metadata": {
//                                 "badges": [
//                                 "CORNERS",
//                                 "PIU"
//                                 ]
//                             },
//                             "has_stream": false
//                             },
//                             {
//                             "id": 1807307100,
//                             "event_type": "GAME_EVENT",
//                             "event_path_id": 606014710,
//                             "sport_id": 100,
//                             "desc": "Celtic v Shakhtar Donetsk",
//                             "oppADesc": "Celtic",
//                             "oppAId": 5544200,
//                             "oppBDesc": "Shakhtar Donetsk",
//                             "oppBId": 5048900,
//                             "time": 1666724400000,
//                             "pos": 2,
//                             "scoreboard": {
//                                 "eId": 1807307100,
//                                 "sId": 100,
//                                 "clk": "89:08",
//                                 "clockInSeconds": 2700,
//                                 "validAt": 1666728072996,
//                                 "dsc": "2H",
//                                 "oaId": 5544200,
//                                 "obId": 5048900,
//                                 "code": 235,
//                                 "periodKey": "H2",
//                                 "sTs": 1666724400000,
//                                 "cal": true,
//                                 "run": true,
//                                 "act": 5048900,
//                                 "scrA": 1,
//                                 "scrB": 1,
//                                 "addresses": {
//                                 "comment": "/scoreboard/board/1807307100/comments/en_GB",
//                                 "essentialScoreboard": "/essentialscoreboard/100/1807307100",
//                                 "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807307100/en_GB",
//                                 "stats": "/scoreboard/board/1807307100/stats",
//                                 "timeline": "/scoreboard/board/1807307100/timeline",
//                                 "overviewComment": "/scoreboard/board/1807307100/overview/comments/en_GB"
//                                 },
//                                 "disabledScoreboard": false,
//                                 "reversedClock": false,
//                                 "preeventPeriodDescription": "",
//                                 "inPlay": true,
//                                 "scoreboardUrlFragment": null,
//                                 "externalScoreboardConfiguration": {
//                                 "eventId": 1807307100,
//                                 "sportId": 100,
//                                 "providerEventId": 35645453,
//                                 "provider": "BET_RADAR",
//                                 "providerDescription": "Celtic Glasgow vs FC Shakhtar Donetsk",
//                                 "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
//                                 },
//                                 "scr": "1-1",
//                                 "penaltyShootout": {},
//                                 "penaltiesScrA": 0,
//                                 "penaltiesScrB": 0,
//                                 "stoppageTime": "",
//                                 "marketSuspensionReason": "POSSIBLE_RED_CARD",
//                                 "redCardA": 0,
//                                 "redCardB": 0,
//                                 "matchLength": 90
//                             },
//                             "markets": [
//                                 {
//                                 "id": 11078310330,
//                                 "desc": "Match Betting",
//                                 "eid": 1807307100,
//                                 "pid": 100,
//                                 "ptd": 1,
//                                 "ptdesc": "Win only",
//                                 "st": 1,
//                                 "mblindex": 88758333,
//                                 "cur": true,
//                                 "next": false,
//                                 "mtid": 1,
//                                 "p": "90 Mins",
//                                 "o": [
//                                     {
//                                     "oid": 118564337300,
//                                     "d": "Draw",
//                                     "sd": null,
//                                     "cpid": 535076784802,
//                                     "pr": "2/9",
//                                     "prd": 1.222,
//                                     "fdp": "1.222",
//                                     "h": false,
//                                     "po": 2,
//                                     "key": "MLX",
//                                     "keyDimension": "DRAW"
//                                     },
//                                     {
//                                     "oid": 118564337200,
//                                     "d": "Shakhtar Donetsk",
//                                     "sd": null,
//                                     "cpid": 535076784803,
//                                     "pr": "10/1",
//                                     "prd": 11,
//                                     "fdp": "11.0",
//                                     "h": false,
//                                     "po": 3,
//                                     "key": "ML2",
//                                     "keyDimension": "AWAY"
//                                     },
//                                     {
//                                     "oid": 118564337100,
//                                     "d": "Celtic",
//                                     "sd": null,
//                                     "cpid": 535076784804,
//                                     "pr": "5/1",
//                                     "prd": 6,
//                                     "fdp": "6.0",
//                                     "h": false,
//                                     "po": 1,
//                                     "key": "ML1",
//                                     "keyDimension": "HOME"
//                                     }
//                                 ]
//                                 }
//                             ],
//                             "metadata": {
//                                 "badges": []
//                             },
//                             "has_stream": false
//                             },
//                             {
//                             "id": 1807293100,
//                             "event_type": "GAME_EVENT",
//                             "event_path_id": 606009210,
//                             "sport_id": 100,
//                             "desc": "RB Leipzig v Real Madrid",
//                             "oppADesc": "RB Leipzig",
//                             "oppAId": 15867000,
//                             "oppBDesc": "Real Madrid",
//                             "oppBId": 4786500,
//                             "time": 1666724400000,
//                             "pos": 3,
//                             "scoreboard": {
//                                 "eId": 1807293100,
//                                 "sId": 100,
//                                 "clk": "87:24",
//                                 "clockInSeconds": 2700,
//                                 "validAt": 1666728176585,
//                                 "dsc": "2H",
//                                 "oaId": 15867000,
//                                 "obId": 4786500,
//                                 "code": 235,
//                                 "periodKey": "H2",
//                                 "sTs": 1666724400000,
//                                 "cal": true,
//                                 "run": true,
//                                 "act": 15867000,
//                                 "scrA": 3,
//                                 "scrB": 1,
//                                 "addresses": {
//                                 "comment": "/scoreboard/board/1807293100/comments/en_GB",
//                                 "essentialScoreboard": "/essentialscoreboard/100/1807293100",
//                                 "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807293100/en_GB",
//                                 "stats": "/scoreboard/board/1807293100/stats",
//                                 "timeline": "/scoreboard/board/1807293100/timeline",
//                                 "overviewComment": "/scoreboard/board/1807293100/overview/comments/en_GB"
//                                 },
//                                 "disabledScoreboard": false,
//                                 "reversedClock": false,
//                                 "preeventPeriodDescription": "",
//                                 "inPlay": true,
//                                 "scoreboardUrlFragment": null,
//                                 "externalScoreboardConfiguration": {
//                                 "eventId": 1807293100,
//                                 "sportId": 100,
//                                 "providerEventId": 35645455,
//                                 "provider": "BET_RADAR",
//                                 "providerDescription": "RB Leipzig vs Real Madrid",
//                                 "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
//                                 },
//                                 "scr": "3-1",
//                                 "penaltyShootout": {},
//                                 "penaltiesScrA": 0,
//                                 "penaltiesScrB": 0,
//                                 "stoppageTime": "",
//                                 "marketSuspensionReason": "",
//                                 "redCardA": 0,
//                                 "redCardB": 0,
//                                 "matchLength": 90
//                             },
//                             "markets": [
//                                 {
//                                 "id": 11078108830,
//                                 "desc": "Match Betting",
//                                 "eid": 1807293100,
//                                 "pid": 100,
//                                 "ptd": 1,
//                                 "ptdesc": "Win only",
//                                 "st": 2,
//                                 "mblindex": 131863333,
//                                 "cur": true,
//                                 "next": false,
//                                 "mtid": 1,
//                                 "p": "90 Mins",
//                                 "o": [
//                                     {
//                                     "oid": 118563153200,
//                                     "d": "Real Madrid",
//                                     "sd": null,
//                                     "cpid": 535076780992,
//                                     "pr": "90/1",
//                                     "prd": 91,
//                                     "fdp": "91.0",
//                                     "h": false,
//                                     "po": 3,
//                                     "key": "ML2",
//                                     "keyDimension": "AWAY"
//                                     },
//                                     {
//                                     "oid": 118563153600,
//                                     "d": "Draw",
//                                     "sd": null,
//                                     "cpid": 535076782353,
//                                     "pr": "14/1",
//                                     "prd": 15,
//                                     "fdp": "15.0",
//                                     "h": false,
//                                     "po": 2,
//                                     "key": "MLX",
//                                     "keyDimension": "DRAW"
//                                     },
//                                     {
//                                     "oid": 118563151900,
//                                     "d": "RB Leipzig",
//                                     "sd": null,
//                                     "cpid": 535076782355,
//                                     "pr": "1/200",
//                                     "prd": 1.005,
//                                     "fdp": "1.005",
//                                     "h": false,
//                                     "po": 1,
//                                     "key": "ML1",
//                                     "keyDimension": "HOME"
//                                     }
//                                 ]
//                                 }
//                             ],
//                             "metadata": {
//                                 "badges": [
//                                 "CORNERS",
//                                 "PIU"
//                                 ]
//                             },
//                             "has_stream": false
//                             },
//                             {
//                             "id": 1807283900,
//                             "event_type": "GAME_EVENT",
//                             "event_path_id": 606006410,
//                             "sport_id": 100,
//                             "desc": "Benfica v Juventus",
//                             "oppADesc": "Benfica",
//                             "oppAId": 4611900,
//                             "oppBDesc": "Juventus ",
//                             "oppBId": 3064700,
//                             "time": 1666724400000,
//                             "pos": 4,
//                             "scoreboard": {
//                                 "eId": 1807283900,
//                                 "sId": 100,
//                                 "clk": "87:09",
//                                 "clockInSeconds": 2700,
//                                 "validAt": 1666728191362,
//                                 "dsc": "2H",
//                                 "oaId": 4611900,
//                                 "obId": 3064700,
//                                 "code": 235,
//                                 "periodKey": "H2",
//                                 "sTs": 1666724400000,
//                                 "cal": true,
//                                 "run": true,
//                                 "act": 4611900,
//                                 "scrA": 4,
//                                 "scrB": 3,
//                                 "addresses": {
//                                 "comment": "/scoreboard/board/1807283900/comments/en_GB",
//                                 "essentialScoreboard": "/essentialscoreboard/100/1807283900",
//                                 "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807283900/en_GB",
//                                 "stats": "/scoreboard/board/1807283900/stats",
//                                 "timeline": "/scoreboard/board/1807283900/timeline",
//                                 "overviewComment": "/scoreboard/board/1807283900/overview/comments/en_GB"
//                                 },
//                                 "disabledScoreboard": false,
//                                 "reversedClock": false,
//                                 "preeventPeriodDescription": "",
//                                 "inPlay": true,
//                                 "scoreboardUrlFragment": null,
//                                 "externalScoreboardConfiguration": {
//                                 "eventId": 1807283900,
//                                 "sportId": 100,
//                                 "providerEventId": 35645557,
//                                 "provider": "BET_RADAR",
//                                 "providerDescription": "Benfica Lisbon vs Juventus Turin",
//                                 "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
//                                 },
//                                 "scr": "4-3",
//                                 "penaltyShootout": {},
//                                 "penaltiesScrA": 0,
//                                 "penaltiesScrB": 0,
//                                 "stoppageTime": "",
//                                 "marketSuspensionReason": "",
//                                 "redCardA": 0,
//                                 "redCardB": 0,
//                                 "matchLength": 90
//                             },
//                             "markets": [
//                                 {
//                                 "id": 11077947630,
//                                 "desc": "Match Betting",
//                                 "eid": 1807283900,
//                                 "pid": 100,
//                                 "ptd": 1,
//                                 "ptdesc": "Win only",
//                                 "st": 1,
//                                 "mblindex": 112234333,
//                                 "cur": true,
//                                 "next": false,
//                                 "mtid": 1,
//                                 "p": "90 Mins",
//                                 "o": [
//                                     {
//                                     "oid": 118562395200,
//                                     "d": "Draw",
//                                     "sd": null,
//                                     "cpid": 535076784967,
//                                     "pr": "7/1",
//                                     "prd": 8,
//                                     "fdp": "8.0",
//                                     "h": false,
//                                     "po": 2,
//                                     "key": "MLX",
//                                     "keyDimension": "DRAW"
//                                     },
//                                     {
//                                     "oid": 118562394700,
//                                     "d": "Benfica",
//                                     "sd": null,
//                                     "cpid": 535076787610,
//                                     "pr": "1/16",
//                                     "prd": 1.063,
//                                     "fdp": "1.063",
//                                     "h": false,
//                                     "po": 1,
//                                     "key": "ML1",
//                                     "keyDimension": "HOME"
//                                     },
//                                     {
//                                     "oid": 118562395000,
//                                     "d": "Juventus",
//                                     "sd": null,
//                                     "cpid": 535076787609,
//                                     "pr": "150/1",
//                                     "prd": 151,
//                                     "fdp": "151.0",
//                                     "h": false,
//                                     "po": 3,
//                                     "key": "ML2",
//                                     "keyDimension": "AWAY"
//                                     }
//                                 ]
//                                 }
//                             ],
//                             "metadata": {
//                                 "badges": [
//                                 "CORNERS",
//                                 "PIU"
//                                 ]
//                             },
//                             "has_stream": false
//                             },
//                             {
//                             "id": 1807283700,
//                             "event_type": "GAME_EVENT",
//                             "event_path_id": 606006310,
//                             "sport_id": 100,
//                             "desc": "PSG v Maccabi Haifa",
//                             "oppADesc": "PSG",
//                             "oppAId": 4216100,
//                             "oppBDesc": "Maccabi Haifa",
//                             "oppBId": 5680900,
//                             "time": 1666724400000,
//                             "pos": 5,
//                             "scoreboard": {
//                                 "eId": 1807283700,
//                                 "sId": 100,
//                                 "clk": "84:40",
//                                 "clockInSeconds": 2700,
//                                 "validAt": 1666728340718,
//                                 "dsc": "2H",
//                                 "oaId": 4216100,
//                                 "obId": 5680900,
//                                 "code": 235,
//                                 "periodKey": "H2",
//                                 "sTs": 1666724400000,
//                                 "cal": true,
//                                 "run": true,
//                                 "act": 5680900,
//                                 "scrA": 7,
//                                 "scrB": 2,
//                                 "addresses": {
//                                 "comment": "/scoreboard/board/1807283700/comments/en_GB",
//                                 "essentialScoreboard": "/essentialscoreboard/100/1807283700",
//                                 "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807283700/en_GB",
//                                 "stats": "/scoreboard/board/1807283700/stats",
//                                 "timeline": "/scoreboard/board/1807283700/timeline",
//                                 "overviewComment": "/scoreboard/board/1807283700/overview/comments/en_GB"
//                                 },
//                                 "disabledScoreboard": false,
//                                 "reversedClock": false,
//                                 "preeventPeriodDescription": "",
//                                 "inPlay": true,
//                                 "scoreboardUrlFragment": null,
//                                 "externalScoreboardConfiguration": {
//                                 "eventId": 1807283700,
//                                 "sportId": 100,
//                                 "providerEventId": 35645555,
//                                 "provider": "BET_RADAR",
//                                 "providerDescription": "Paris Saint-Germain vs Maccabi Haifa FC",
//                                 "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
//                                 },
//                                 "scr": "7-2",
//                                 "penaltyShootout": {},
//                                 "penaltiesScrA": 0,
//                                 "penaltiesScrB": 0,
//                                 "stoppageTime": "",
//                                 "marketSuspensionReason": "",
//                                 "redCardA": 0,
//                                 "redCardB": 0,
//                                 "matchLength": 90
//                             },
//                             "markets": [],
//                             "metadata": {
//                                 "badges": []
//                             },
//                             "has_stream": false
//                             },
//                             {
//                             "id": 1807302200,
//                             "event_type": "GAME_EVENT",
//                             "event_path_id": 606013110,
//                             "sport_id": 100,
//                             "desc": "Dinamo Zagreb v AC Milan",
//                             "oppADesc": "Dinamo Zagreb",
//                             "oppAId": 5064800,
//                             "oppBDesc": "AC Milan",
//                             "oppBId": 3059500,
//                             "time": 1666724400000,
//                             "pos": 6,
//                             "scoreboard": {
//                                 "eId": 1807302200,
//                                 "sId": 100,
//                                 "clk": "86:46",
//                                 "clockInSeconds": 2700,
//                                 "validAt": 1666728214600,
//                                 "dsc": "2H",
//                                 "oaId": 5064800,
//                                 "obId": 3059500,
//                                 "code": 235,
//                                 "periodKey": "H2",
//                                 "sTs": 1666724400000,
//                                 "cal": true,
//                                 "run": true,
//                                 "act": 5064800,
//                                 "scrA": 0,
//                                 "scrB": 4,
//                                 "addresses": {
//                                 "comment": "/scoreboard/board/1807302200/comments/en_GB",
//                                 "essentialScoreboard": "/essentialscoreboard/100/1807302200",
//                                 "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807302200/en_GB",
//                                 "stats": "/scoreboard/board/1807302200/stats",
//                                 "timeline": "/scoreboard/board/1807302200/timeline",
//                                 "overviewComment": "/scoreboard/board/1807302200/overview/comments/en_GB"
//                                 },
//                                 "disabledScoreboard": false,
//                                 "reversedClock": false,
//                                 "preeventPeriodDescription": "",
//                                 "inPlay": true,
//                                 "scoreboardUrlFragment": null,
//                                 "externalScoreboardConfiguration": {
//                                 "eventId": 1807302200,
//                                 "sportId": 100,
//                                 "providerEventId": 35645449,
//                                 "provider": "BET_RADAR",
//                                 "providerDescription": "GNK Dinamo Zagreb vs AC Milan",
//                                 "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
//                                 },
//                                 "scr": "0-4",
//                                 "penaltyShootout": {},
//                                 "penaltiesScrA": 0,
//                                 "penaltiesScrB": 0,
//                                 "stoppageTime": "",
//                                 "marketSuspensionReason": "",
//                                 "redCardA": 0,
//                                 "redCardB": 0,
//                                 "matchLength": 90
//                             },
//                             "markets": [],
//                             "metadata": {
//                                 "badges": [
//                                 "CORNERS",
//                                 "PIU"
//                                 ]
//                             },
//                             "has_stream": false
//                             }
//                         ]
//                         },
//                         {
//                         "id": 6228010,
//                         "desc": "ENG League Championship",
//                         "pos": 11,
//                         "events": [
//                             {
//                             "id": 1811130200,
//                             "event_type": "GAME_EVENT",
//                             "event_path_id": 530725410,
//                             "sport_id": 100,
//                             "desc": "Coventry City v Rotherham",
//                             "oppADesc": "Coventry City",
//                             "oppAId": 2715500,
//                             "oppBDesc": "Rotherham United",
//                             "oppBId": 2808900,
//                             "time": 1666723500000,
//                             "pos": 9999,
//                             "scoreboard": {
//                                 "eId": 1811130200,
//                                 "sId": 100,
//                                 "clk": "96:35",
//                                 "clockInSeconds": 2700,
//                                 "validAt": 1666727625878,
//                                 "dsc": "2H",
//                                 "oaId": 2715500,
//                                 "obId": 2808900,
//                                 "code": 235,
//                                 "periodKey": "H2",
//                                 "sTs": 1666723500000,
//                                 "cal": true,
//                                 "run": true,
//                                 "act": 2715500,
//                                 "scrA": 2,
//                                 "scrB": 2,
//                                 "addresses": {
//                                 "comment": "/scoreboard/board/1811130200/comments/en_GB",
//                                 "essentialScoreboard": "/essentialscoreboard/100/1811130200",
//                                 "essentialScoreboardCallback": "/c/essentialscoreboard/100/1811130200/en_GB",
//                                 "stats": "/scoreboard/board/1811130200/stats",
//                                 "timeline": "/scoreboard/board/1811130200/timeline",
//                                 "overviewComment": "/scoreboard/board/1811130200/overview/comments/en_GB"
//                                 },
//                                 "disabledScoreboard": false,
//                                 "reversedClock": false,
//                                 "preeventPeriodDescription": "",
//                                 "inPlay": true,
//                                 "scoreboardUrlFragment": null,
//                                 "externalScoreboardConfiguration": {
//                                 "eventId": 1811130200,
//                                 "sportId": 100,
//                                 "providerEventId": 36105421,
//                                 "provider": "BET_RADAR",
//                                 "providerDescription": "Coventry City vs Rotherham United",
//                                 "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
//                                 },
//                                 "scr": "2-2",
//                                 "penaltyShootout": {},
//                                 "penaltiesScrA": 0,
//                                 "penaltiesScrB": 0,
//                                 "stoppageTime": "6",
//                                 "marketSuspensionReason": "",
//                                 "redCardA": 0,
//                                 "redCardB": 0,
//                                 "matchLength": 90
//                             },
//                             "markets": [
//                                 {
//                                 "id": 11118382230,
//                                 "desc": "Match Betting",
//                                 "eid": 1811130200,
//                                 "pid": 100,
//                                 "ptd": 1,
//                                 "ptdesc": "Win only",
//                                 "st": 2,
//                                 "mblindex": 119189333,
//                                 "cur": true,
//                                 "next": false,
//                                 "mtid": 1,
//                                 "p": "90 Mins",
//                                 "o": [
//                                     {
//                                     "oid": 118736920600,
//                                     "d": "Draw",
//                                     "sd": null,
//                                     "cpid": 535076771037,
//                                     "pr": "1/20",
//                                     "prd": 1.05,
//                                     "fdp": "1.05",
//                                     "h": false,
//                                     "po": 2,
//                                     "key": "MLX",
//                                     "keyDimension": "DRAW"
//                                     },
//                                     {
//                                     "oid": 118736920500,
//                                     "d": "Rotherham",
//                                     "sd": null,
//                                     "cpid": 535076771038,
//                                     "pr": "25/1",
//                                     "prd": 26,
//                                     "fdp": "26.0",
//                                     "h": false,
//                                     "po": 3,
//                                     "key": "ML2",
//                                     "keyDimension": "AWAY"
//                                     },
//                                     {
//                                     "oid": 118736920400,
//                                     "d": "Coventry City",
//                                     "sd": null,
//                                     "cpid": 535076771039,
//                                     "pr": "12/1",
//                                     "prd": 13,
//                                     "fdp": "13.0",
//                                     "h": false,
//                                     "po": 1,
//                                     "key": "ML1",
//                                     "keyDimension": "HOME"
//                                     }
//                                 ]
//                                 }
//                             ],
//                             "metadata": {
//                                 "badges": []
//                             },
//                             "has_stream": false
//                             },
//                             {
//                             "id": 1811131200,
//                             "event_type": "GAME_EVENT",
//                             "event_path_id": 25781810,
//                             "sport_id": 100,
//                             "desc": "Burnley v Norwich City",
//                             "oppADesc": "Burnley",
//                             "oppAId": 2698100,
//                             "oppBDesc": "Norwich City",
//                             "oppBId": 2780200,
//                             "time": 1666724400000,
//                             "pos": 9999,
//                             "scoreboard": {
//                                 "eId": 1811131200,
//                                 "sId": 100,
//                                 "clk": "87:47",
//                                 "clockInSeconds": 2700,
//                                 "validAt": 1666728153340,
//                                 "dsc": "2H",
//                                 "oaId": 2698100,
//                                 "obId": 2780200,
//                                 "code": 235,
//                                 "periodKey": "H2",
//                                 "sTs": 1666724400000,
//                                 "cal": true,
//                                 "run": true,
//                                 "act": 2780200,
//                                 "scrA": 1,
//                                 "scrB": 0,
//                                 "addresses": {
//                                 "comment": "/scoreboard/board/1811131200/comments/en_GB",
//                                 "essentialScoreboard": "/essentialscoreboard/100/1811131200",
//                                 "essentialScoreboardCallback": "/c/essentialscoreboard/100/1811131200/en_GB",
//                                 "stats": "/scoreboard/board/1811131200/stats",
//                                 "timeline": "/scoreboard/board/1811131200/timeline",
//                                 "overviewComment": "/scoreboard/board/1811131200/overview/comments/en_GB"
//                                 },
//                                 "disabledScoreboard": false,
//                                 "reversedClock": false,
//                                 "preeventPeriodDescription": "",
//                                 "inPlay": true,
//                                 "scoreboardUrlFragment": null,
//                                 "externalScoreboardConfiguration": {
//                                 "eventId": 1811131200,
//                                 "sportId": 100,
//                                 "providerEventId": 36176243,
//                                 "provider": "BET_RADAR",
//                                 "providerDescription": "Burnley FC vs Norwich City",
//                                 "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
//                                 },
//                                 "scr": "1-0",
//                                 "penaltyShootout": {},
//                                 "penaltiesScrA": 0,
//                                 "penaltiesScrB": 0,
//                                 "stoppageTime": "",
//                                 "marketSuspensionReason": "",
//                                 "redCardA": 0,
//                                 "redCardB": 0,
//                                 "matchLength": 90
//                             },
//                             "markets": [
//                                 {
//                                 "id": 11118412430,
//                                 "desc": "Match Betting",
//                                 "eid": 1811131200,
//                                 "pid": 100,
//                                 "ptd": 1,
//                                 "ptdesc": "Win only",
//                                 "st": 1,
//                                 "mblindex": 109449333,
//                                 "cur": true,
//                                 "next": false,
//                                 "mtid": 1,
//                                 "p": "90 Mins",
//                                 "o": [
//                                     {
//                                     "oid": 118737025100,
//                                     "d": "Burnley",
//                                     "sd": null,
//                                     "cpid": 535076779412,
//                                     "pr": "1/12",
//                                     "prd": 1.083,
//                                     "fdp": "1.083",
//                                     "h": false,
//                                     "po": 1,
//                                     "key": "ML1",
//                                     "keyDimension": "HOME"
//                                     },
//                                     {
//                                     "oid": 118737025300,
//                                     "d": "Draw",
//                                     "sd": null,
//                                     "cpid": 535076771935,
//                                     "pr": "13/2",
//                                     "prd": 7.5,
//                                     "fdp": "7.5",
//                                     "h": false,
//                                     "po": 2,
//                                     "key": "MLX",
//                                     "keyDimension": "DRAW"
//                                     },
//                                     {
//                                     "oid": 118737025200,
//                                     "d": "Norwich City",
//                                     "sd": null,
//                                     "cpid": 535076784906,
//                                     "pr": "110/1",
//                                     "prd": 111,
//                                     "fdp": "111.0",
//                                     "h": false,
//                                     "po": 3,
//                                     "key": "ML2",
//                                     "keyDimension": "AWAY"
//                                     }
//                                 ]
//                                 }
//                             ],
//                             "metadata": {
//                                 "badges": [
//                                 "CORNERS",
//                                 "PIU"
//                                 ]
//                             },
//                             "has_stream": false
//                             }
//                         ]
//                         }
//                     ]
//                 }],
//                 "slider_elements": [],
//                 "total_number_of_events": 59,
//                 "total_number_of_streamable_events": null
//             }

// jest.mock('axios');
jest.mock('axios', () => jest.fn(() => Promise.resolve({ data: 'data' })));

describe('Sports TEST', () => {
    let response;

    beforeEach(() => {
        response = {
            data: {
                "pgatePath": "test",
                "sports": [{
                    "id": 100,
                    "epId": 240,
                    "desc": "Football",
                    "pos": 1,
                    "ne": 100,
                    "eic": 25,
                    "v": false,
                    "ve": false,
                    "mc": true,
                    "ncmc": 2,
                    "nemc": 6,
                    "hasInplayEvents": true,
                    "hasUpcomingEvents": true,
                    "marketTypes": [
                        {
                        "mtId": 1,
                        "pos": 2,
                        "desc": "Match Betting",
                        "mtDesc": "Match Betting",
                        "couponName": "template_a",
                        "headers": [
                            "1",
                            "X",
                            "2"
                        ],
                        "outcome_keys": [
                            "HOME",
                            "DRAW",
                            "AWAY"
                        ],
                        "periods": [
                            {
                            "desc": "Match",
                            "longDesc": "Match extended1",
                            "pIds": [
                                100,
                                101,
                                956,
                                955,
                                233,
                                954
                            ],
                            "config": {
                                "filter": "ALL"
                            }
                            }
                        ]
                        }
                    ],
                    "comp": [
                        {
                        "id": 130873010,
                        "desc": "Champions League",
                        "pos": 4,
                        "events": [
                            {
                            "id": 1807293300,
                            "event_type": "GAME_EVENT",
                            "event_path_id": 545303510,
                            "sport_id": 100,
                            "desc": "Borussia Dortmund v Manchester City",
                            "oppADesc": "Borussia Dortmund",
                            "oppAId": 4313100,
                            "oppBDesc": "Manchester City",
                            "oppBId": 2426300,
                            "time": 1666724400000,
                            "pos": 1,
                            "scoreboard": {
                                "eId": 1807293300,
                                "sId": 100,
                                "clk": "87:57",
                                "clockInSeconds": 2700,
                                "validAt": 1666728143391,
                                "dsc": "2H",
                                "oaId": 4313100,
                                "obId": 2426300,
                                "code": 235,
                                "periodKey": "H2",
                                "sTs": 1666724400000,
                                "cal": true,
                                "run": true,
                                "act": 4313100,
                                "scrA": 0,
                                "scrB": 0,
                                "addresses": {
                                "comment": "/scoreboard/board/1807293300/comments/en_GB",
                                "essentialScoreboard": "/essentialscoreboard/100/1807293300",
                                "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807293300/en_GB",
                                "stats": "/scoreboard/board/1807293300/stats",
                                "timeline": "/scoreboard/board/1807293300/timeline",
                                "overviewComment": "/scoreboard/board/1807293300/overview/comments/en_GB"
                                },
                                "disabledScoreboard": false,
                                "reversedClock": false,
                                "preeventPeriodDescription": "",
                                "inPlay": true,
                                "scoreboardUrlFragment": null,
                                "externalScoreboardConfiguration": {
                                "eventId": 1807293300,
                                "sportId": 100,
                                "providerEventId": 35645553,
                                "provider": "BET_RADAR",
                                "providerDescription": "Borussia Dortmund vs Manchester City",
                                "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
                                },
                                "scr": "0-0",
                                "penaltyShootout": {},
                                "penaltiesScrA": 0,
                                "penaltiesScrB": 0,
                                "stoppageTime": "",
                                "marketSuspensionReason": "",
                                "redCardA": 0,
                                "redCardB": 0,
                                "matchLength": 90
                            },
                            "markets": [
                                {
                                "id": 11078109030,
                                "desc": "Match Betting",
                                "eid": 1807293300,
                                "pid": 100,
                                "ptd": 1,
                                "ptdesc": "Win only",
                                "st": 1,
                                "mblindex": 89148333,
                                "cur": true,
                                "next": false,
                                "mtid": 1,
                                "p": "90 Mins",
                                "o": [
                                    {
                                    "oid": 118563144700,
                                    "d": "Borussia Dortmund",
                                    "sd": null,
                                    "cpid": 535076785668,
                                    "pr": "10/1",
                                    "prd": 11,
                                    "fdp": "11.0",
                                    "h": false,
                                    "po": 1,
                                    "key": "ML1",
                                    "keyDimension": "HOME"
                                    },
                                    {
                                    "oid": 118563145500,
                                    "d": "Draw",
                                    "sd": null,
                                    "cpid": 535076785667,
                                    "pr": "2/9",
                                    "prd": 1.222,
                                    "fdp": "1.222",
                                    "h": false,
                                    "po": 2,
                                    "key": "MLX",
                                    "keyDimension": "DRAW"
                                    },
                                    {
                                    "oid": 118563145100,
                                    "d": "Manchester City",
                                    "sd": null,
                                    "cpid": 535076779614,
                                    "pr": "5/1",
                                    "prd": 6,
                                    "fdp": "6.0",
                                    "h": false,
                                    "po": 3,
                                    "key": "ML2",
                                    "keyDimension": "AWAY"
                                    }
                                ]
                                }
                            ],
                            "metadata": {
                                "badges": [
                                "CORNERS",
                                "PIU"
                                ]
                            },
                            "has_stream": false
                            },
                            {
                            "id": 1807307100,
                            "event_type": "GAME_EVENT",
                            "event_path_id": 606014710,
                            "sport_id": 100,
                            "desc": "Celtic v Shakhtar Donetsk",
                            "oppADesc": "Celtic",
                            "oppAId": 5544200,
                            "oppBDesc": "Shakhtar Donetsk",
                            "oppBId": 5048900,
                            "time": 1666724400000,
                            "pos": 2,
                            "scoreboard": {
                                "eId": 1807307100,
                                "sId": 100,
                                "clk": "89:08",
                                "clockInSeconds": 2700,
                                "validAt": 1666728072996,
                                "dsc": "2H",
                                "oaId": 5544200,
                                "obId": 5048900,
                                "code": 235,
                                "periodKey": "H2",
                                "sTs": 1666724400000,
                                "cal": true,
                                "run": true,
                                "act": 5048900,
                                "scrA": 1,
                                "scrB": 1,
                                "addresses": {
                                "comment": "/scoreboard/board/1807307100/comments/en_GB",
                                "essentialScoreboard": "/essentialscoreboard/100/1807307100",
                                "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807307100/en_GB",
                                "stats": "/scoreboard/board/1807307100/stats",
                                "timeline": "/scoreboard/board/1807307100/timeline",
                                "overviewComment": "/scoreboard/board/1807307100/overview/comments/en_GB"
                                },
                                "disabledScoreboard": false,
                                "reversedClock": false,
                                "preeventPeriodDescription": "",
                                "inPlay": true,
                                "scoreboardUrlFragment": null,
                                "externalScoreboardConfiguration": {
                                "eventId": 1807307100,
                                "sportId": 100,
                                "providerEventId": 35645453,
                                "provider": "BET_RADAR",
                                "providerDescription": "Celtic Glasgow vs FC Shakhtar Donetsk",
                                "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
                                },
                                "scr": "1-1",
                                "penaltyShootout": {},
                                "penaltiesScrA": 0,
                                "penaltiesScrB": 0,
                                "stoppageTime": "",
                                "marketSuspensionReason": "POSSIBLE_RED_CARD",
                                "redCardA": 0,
                                "redCardB": 0,
                                "matchLength": 90
                            },
                            "markets": [
                                {
                                "id": 11078310330,
                                "desc": "Match Betting",
                                "eid": 1807307100,
                                "pid": 100,
                                "ptd": 1,
                                "ptdesc": "Win only",
                                "st": 1,
                                "mblindex": 88758333,
                                "cur": true,
                                "next": false,
                                "mtid": 1,
                                "p": "90 Mins",
                                "o": [
                                    {
                                    "oid": 118564337300,
                                    "d": "Draw",
                                    "sd": null,
                                    "cpid": 535076784802,
                                    "pr": "2/9",
                                    "prd": 1.222,
                                    "fdp": "1.222",
                                    "h": false,
                                    "po": 2,
                                    "key": "MLX",
                                    "keyDimension": "DRAW"
                                    },
                                    {
                                    "oid": 118564337200,
                                    "d": "Shakhtar Donetsk",
                                    "sd": null,
                                    "cpid": 535076784803,
                                    "pr": "10/1",
                                    "prd": 11,
                                    "fdp": "11.0",
                                    "h": false,
                                    "po": 3,
                                    "key": "ML2",
                                    "keyDimension": "AWAY"
                                    },
                                    {
                                    "oid": 118564337100,
                                    "d": "Celtic",
                                    "sd": null,
                                    "cpid": 535076784804,
                                    "pr": "5/1",
                                    "prd": 6,
                                    "fdp": "6.0",
                                    "h": false,
                                    "po": 1,
                                    "key": "ML1",
                                    "keyDimension": "HOME"
                                    }
                                ]
                                }
                            ],
                            "metadata": {
                                "badges": []
                            },
                            "has_stream": false
                            },
                            {
                            "id": 1807293100,
                            "event_type": "GAME_EVENT",
                            "event_path_id": 606009210,
                            "sport_id": 100,
                            "desc": "RB Leipzig v Real Madrid",
                            "oppADesc": "RB Leipzig",
                            "oppAId": 15867000,
                            "oppBDesc": "Real Madrid",
                            "oppBId": 4786500,
                            "time": 1666724400000,
                            "pos": 3,
                            "scoreboard": {
                                "eId": 1807293100,
                                "sId": 100,
                                "clk": "87:24",
                                "clockInSeconds": 2700,
                                "validAt": 1666728176585,
                                "dsc": "2H",
                                "oaId": 15867000,
                                "obId": 4786500,
                                "code": 235,
                                "periodKey": "H2",
                                "sTs": 1666724400000,
                                "cal": true,
                                "run": true,
                                "act": 15867000,
                                "scrA": 3,
                                "scrB": 1,
                                "addresses": {
                                "comment": "/scoreboard/board/1807293100/comments/en_GB",
                                "essentialScoreboard": "/essentialscoreboard/100/1807293100",
                                "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807293100/en_GB",
                                "stats": "/scoreboard/board/1807293100/stats",
                                "timeline": "/scoreboard/board/1807293100/timeline",
                                "overviewComment": "/scoreboard/board/1807293100/overview/comments/en_GB"
                                },
                                "disabledScoreboard": false,
                                "reversedClock": false,
                                "preeventPeriodDescription": "",
                                "inPlay": true,
                                "scoreboardUrlFragment": null,
                                "externalScoreboardConfiguration": {
                                "eventId": 1807293100,
                                "sportId": 100,
                                "providerEventId": 35645455,
                                "provider": "BET_RADAR",
                                "providerDescription": "RB Leipzig vs Real Madrid",
                                "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
                                },
                                "scr": "3-1",
                                "penaltyShootout": {},
                                "penaltiesScrA": 0,
                                "penaltiesScrB": 0,
                                "stoppageTime": "",
                                "marketSuspensionReason": "",
                                "redCardA": 0,
                                "redCardB": 0,
                                "matchLength": 90
                            },
                            "markets": [
                                {
                                "id": 11078108830,
                                "desc": "Match Betting",
                                "eid": 1807293100,
                                "pid": 100,
                                "ptd": 1,
                                "ptdesc": "Win only",
                                "st": 2,
                                "mblindex": 131863333,
                                "cur": true,
                                "next": false,
                                "mtid": 1,
                                "p": "90 Mins",
                                "o": [
                                    {
                                    "oid": 118563153200,
                                    "d": "Real Madrid",
                                    "sd": null,
                                    "cpid": 535076780992,
                                    "pr": "90/1",
                                    "prd": 91,
                                    "fdp": "91.0",
                                    "h": false,
                                    "po": 3,
                                    "key": "ML2",
                                    "keyDimension": "AWAY"
                                    },
                                    {
                                    "oid": 118563153600,
                                    "d": "Draw",
                                    "sd": null,
                                    "cpid": 535076782353,
                                    "pr": "14/1",
                                    "prd": 15,
                                    "fdp": "15.0",
                                    "h": false,
                                    "po": 2,
                                    "key": "MLX",
                                    "keyDimension": "DRAW"
                                    },
                                    {
                                    "oid": 118563151900,
                                    "d": "RB Leipzig",
                                    "sd": null,
                                    "cpid": 535076782355,
                                    "pr": "1/200",
                                    "prd": 1.005,
                                    "fdp": "1.005",
                                    "h": false,
                                    "po": 1,
                                    "key": "ML1",
                                    "keyDimension": "HOME"
                                    }
                                ]
                                }
                            ],
                            "metadata": {
                                "badges": [
                                "CORNERS",
                                "PIU"
                                ]
                            },
                            "has_stream": false
                            },
                            {
                            "id": 1807283900,
                            "event_type": "GAME_EVENT",
                            "event_path_id": 606006410,
                            "sport_id": 100,
                            "desc": "Benfica v Juventus",
                            "oppADesc": "Benfica",
                            "oppAId": 4611900,
                            "oppBDesc": "Juventus ",
                            "oppBId": 3064700,
                            "time": 1666724400000,
                            "pos": 4,
                            "scoreboard": {
                                "eId": 1807283900,
                                "sId": 100,
                                "clk": "87:09",
                                "clockInSeconds": 2700,
                                "validAt": 1666728191362,
                                "dsc": "2H",
                                "oaId": 4611900,
                                "obId": 3064700,
                                "code": 235,
                                "periodKey": "H2",
                                "sTs": 1666724400000,
                                "cal": true,
                                "run": true,
                                "act": 4611900,
                                "scrA": 4,
                                "scrB": 3,
                                "addresses": {
                                "comment": "/scoreboard/board/1807283900/comments/en_GB",
                                "essentialScoreboard": "/essentialscoreboard/100/1807283900",
                                "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807283900/en_GB",
                                "stats": "/scoreboard/board/1807283900/stats",
                                "timeline": "/scoreboard/board/1807283900/timeline",
                                "overviewComment": "/scoreboard/board/1807283900/overview/comments/en_GB"
                                },
                                "disabledScoreboard": false,
                                "reversedClock": false,
                                "preeventPeriodDescription": "",
                                "inPlay": true,
                                "scoreboardUrlFragment": null,
                                "externalScoreboardConfiguration": {
                                "eventId": 1807283900,
                                "sportId": 100,
                                "providerEventId": 35645557,
                                "provider": "BET_RADAR",
                                "providerDescription": "Benfica Lisbon vs Juventus Turin",
                                "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
                                },
                                "scr": "4-3",
                                "penaltyShootout": {},
                                "penaltiesScrA": 0,
                                "penaltiesScrB": 0,
                                "stoppageTime": "",
                                "marketSuspensionReason": "",
                                "redCardA": 0,
                                "redCardB": 0,
                                "matchLength": 90
                            },
                            "markets": [
                                {
                                "id": 11077947630,
                                "desc": "Match Betting",
                                "eid": 1807283900,
                                "pid": 100,
                                "ptd": 1,
                                "ptdesc": "Win only",
                                "st": 1,
                                "mblindex": 112234333,
                                "cur": true,
                                "next": false,
                                "mtid": 1,
                                "p": "90 Mins",
                                "o": [
                                    {
                                    "oid": 118562395200,
                                    "d": "Draw",
                                    "sd": null,
                                    "cpid": 535076784967,
                                    "pr": "7/1",
                                    "prd": 8,
                                    "fdp": "8.0",
                                    "h": false,
                                    "po": 2,
                                    "key": "MLX",
                                    "keyDimension": "DRAW"
                                    },
                                    {
                                    "oid": 118562394700,
                                    "d": "Benfica",
                                    "sd": null,
                                    "cpid": 535076787610,
                                    "pr": "1/16",
                                    "prd": 1.063,
                                    "fdp": "1.063",
                                    "h": false,
                                    "po": 1,
                                    "key": "ML1",
                                    "keyDimension": "HOME"
                                    },
                                    {
                                    "oid": 118562395000,
                                    "d": "Juventus",
                                    "sd": null,
                                    "cpid": 535076787609,
                                    "pr": "150/1",
                                    "prd": 151,
                                    "fdp": "151.0",
                                    "h": false,
                                    "po": 3,
                                    "key": "ML2",
                                    "keyDimension": "AWAY"
                                    }
                                ]
                                }
                            ],
                            "metadata": {
                                "badges": [
                                "CORNERS",
                                "PIU"
                                ]
                            },
                            "has_stream": false
                            },
                            {
                            "id": 1807283700,
                            "event_type": "GAME_EVENT",
                            "event_path_id": 606006310,
                            "sport_id": 100,
                            "desc": "PSG v Maccabi Haifa",
                            "oppADesc": "PSG",
                            "oppAId": 4216100,
                            "oppBDesc": "Maccabi Haifa",
                            "oppBId": 5680900,
                            "time": 1666724400000,
                            "pos": 5,
                            "scoreboard": {
                                "eId": 1807283700,
                                "sId": 100,
                                "clk": "84:40",
                                "clockInSeconds": 2700,
                                "validAt": 1666728340718,
                                "dsc": "2H",
                                "oaId": 4216100,
                                "obId": 5680900,
                                "code": 235,
                                "periodKey": "H2",
                                "sTs": 1666724400000,
                                "cal": true,
                                "run": true,
                                "act": 5680900,
                                "scrA": 7,
                                "scrB": 2,
                                "addresses": {
                                "comment": "/scoreboard/board/1807283700/comments/en_GB",
                                "essentialScoreboard": "/essentialscoreboard/100/1807283700",
                                "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807283700/en_GB",
                                "stats": "/scoreboard/board/1807283700/stats",
                                "timeline": "/scoreboard/board/1807283700/timeline",
                                "overviewComment": "/scoreboard/board/1807283700/overview/comments/en_GB"
                                },
                                "disabledScoreboard": false,
                                "reversedClock": false,
                                "preeventPeriodDescription": "",
                                "inPlay": true,
                                "scoreboardUrlFragment": null,
                                "externalScoreboardConfiguration": {
                                "eventId": 1807283700,
                                "sportId": 100,
                                "providerEventId": 35645555,
                                "provider": "BET_RADAR",
                                "providerDescription": "Paris Saint-Germain vs Maccabi Haifa FC",
                                "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
                                },
                                "scr": "7-2",
                                "penaltyShootout": {},
                                "penaltiesScrA": 0,
                                "penaltiesScrB": 0,
                                "stoppageTime": "",
                                "marketSuspensionReason": "",
                                "redCardA": 0,
                                "redCardB": 0,
                                "matchLength": 90
                            },
                            "markets": [],
                            "metadata": {
                                "badges": []
                            },
                            "has_stream": false
                            },
                            {
                            "id": 1807302200,
                            "event_type": "GAME_EVENT",
                            "event_path_id": 606013110,
                            "sport_id": 100,
                            "desc": "Dinamo Zagreb v AC Milan",
                            "oppADesc": "Dinamo Zagreb",
                            "oppAId": 5064800,
                            "oppBDesc": "AC Milan",
                            "oppBId": 3059500,
                            "time": 1666724400000,
                            "pos": 6,
                            "scoreboard": {
                                "eId": 1807302200,
                                "sId": 100,
                                "clk": "86:46",
                                "clockInSeconds": 2700,
                                "validAt": 1666728214600,
                                "dsc": "2H",
                                "oaId": 5064800,
                                "obId": 3059500,
                                "code": 235,
                                "periodKey": "H2",
                                "sTs": 1666724400000,
                                "cal": true,
                                "run": true,
                                "act": 5064800,
                                "scrA": 0,
                                "scrB": 4,
                                "addresses": {
                                "comment": "/scoreboard/board/1807302200/comments/en_GB",
                                "essentialScoreboard": "/essentialscoreboard/100/1807302200",
                                "essentialScoreboardCallback": "/c/essentialscoreboard/100/1807302200/en_GB",
                                "stats": "/scoreboard/board/1807302200/stats",
                                "timeline": "/scoreboard/board/1807302200/timeline",
                                "overviewComment": "/scoreboard/board/1807302200/overview/comments/en_GB"
                                },
                                "disabledScoreboard": false,
                                "reversedClock": false,
                                "preeventPeriodDescription": "",
                                "inPlay": true,
                                "scoreboardUrlFragment": null,
                                "externalScoreboardConfiguration": {
                                "eventId": 1807302200,
                                "sportId": 100,
                                "providerEventId": 35645449,
                                "provider": "BET_RADAR",
                                "providerDescription": "GNK Dinamo Zagreb vs AC Milan",
                                "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
                                },
                                "scr": "0-4",
                                "penaltyShootout": {},
                                "penaltiesScrA": 0,
                                "penaltiesScrB": 0,
                                "stoppageTime": "",
                                "marketSuspensionReason": "",
                                "redCardA": 0,
                                "redCardB": 0,
                                "matchLength": 90
                            },
                            "markets": [],
                            "metadata": {
                                "badges": [
                                "CORNERS",
                                "PIU"
                                ]
                            },
                            "has_stream": false
                            }
                        ]
                        },
                        {
                        "id": 6228010,
                        "desc": "ENG League Championship",
                        "pos": 11,
                        "events": [
                            {
                            "id": 1811130200,
                            "event_type": "GAME_EVENT",
                            "event_path_id": 530725410,
                            "sport_id": 100,
                            "desc": "Coventry City v Rotherham",
                            "oppADesc": "Coventry City",
                            "oppAId": 2715500,
                            "oppBDesc": "Rotherham United",
                            "oppBId": 2808900,
                            "time": 1666723500000,
                            "pos": 9999,
                            "scoreboard": {
                                "eId": 1811130200,
                                "sId": 100,
                                "clk": "96:35",
                                "clockInSeconds": 2700,
                                "validAt": 1666727625878,
                                "dsc": "2H",
                                "oaId": 2715500,
                                "obId": 2808900,
                                "code": 235,
                                "periodKey": "H2",
                                "sTs": 1666723500000,
                                "cal": true,
                                "run": true,
                                "act": 2715500,
                                "scrA": 2,
                                "scrB": 2,
                                "addresses": {
                                "comment": "/scoreboard/board/1811130200/comments/en_GB",
                                "essentialScoreboard": "/essentialscoreboard/100/1811130200",
                                "essentialScoreboardCallback": "/c/essentialscoreboard/100/1811130200/en_GB",
                                "stats": "/scoreboard/board/1811130200/stats",
                                "timeline": "/scoreboard/board/1811130200/timeline",
                                "overviewComment": "/scoreboard/board/1811130200/overview/comments/en_GB"
                                },
                                "disabledScoreboard": false,
                                "reversedClock": false,
                                "preeventPeriodDescription": "",
                                "inPlay": true,
                                "scoreboardUrlFragment": null,
                                "externalScoreboardConfiguration": {
                                "eventId": 1811130200,
                                "sportId": 100,
                                "providerEventId": 36105421,
                                "provider": "BET_RADAR",
                                "providerDescription": "Coventry City vs Rotherham United",
                                "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
                                },
                                "scr": "2-2",
                                "penaltyShootout": {},
                                "penaltiesScrA": 0,
                                "penaltiesScrB": 0,
                                "stoppageTime": "6",
                                "marketSuspensionReason": "",
                                "redCardA": 0,
                                "redCardB": 0,
                                "matchLength": 90
                            },
                            "markets": [
                                {
                                "id": 11118382230,
                                "desc": "Match Betting",
                                "eid": 1811130200,
                                "pid": 100,
                                "ptd": 1,
                                "ptdesc": "Win only",
                                "st": 2,
                                "mblindex": 119189333,
                                "cur": true,
                                "next": false,
                                "mtid": 1,
                                "p": "90 Mins",
                                "o": [
                                    {
                                    "oid": 118736920600,
                                    "d": "Draw",
                                    "sd": null,
                                    "cpid": 535076771037,
                                    "pr": "1/20",
                                    "prd": 1.05,
                                    "fdp": "1.05",
                                    "h": false,
                                    "po": 2,
                                    "key": "MLX",
                                    "keyDimension": "DRAW"
                                    },
                                    {
                                    "oid": 118736920500,
                                    "d": "Rotherham",
                                    "sd": null,
                                    "cpid": 535076771038,
                                    "pr": "25/1",
                                    "prd": 26,
                                    "fdp": "26.0",
                                    "h": false,
                                    "po": 3,
                                    "key": "ML2",
                                    "keyDimension": "AWAY"
                                    },
                                    {
                                    "oid": 118736920400,
                                    "d": "Coventry City",
                                    "sd": null,
                                    "cpid": 535076771039,
                                    "pr": "12/1",
                                    "prd": 13,
                                    "fdp": "13.0",
                                    "h": false,
                                    "po": 1,
                                    "key": "ML1",
                                    "keyDimension": "HOME"
                                    }
                                ]
                                }
                            ],
                            "metadata": {
                                "badges": []
                            },
                            "has_stream": false
                            },
                            {
                            "id": 1811131200,
                            "event_type": "GAME_EVENT",
                            "event_path_id": 25781810,
                            "sport_id": 100,
                            "desc": "Burnley v Norwich City",
                            "oppADesc": "Burnley",
                            "oppAId": 2698100,
                            "oppBDesc": "Norwich City",
                            "oppBId": 2780200,
                            "time": 1666724400000,
                            "pos": 9999,
                            "scoreboard": {
                                "eId": 1811131200,
                                "sId": 100,
                                "clk": "87:47",
                                "clockInSeconds": 2700,
                                "validAt": 1666728153340,
                                "dsc": "2H",
                                "oaId": 2698100,
                                "obId": 2780200,
                                "code": 235,
                                "periodKey": "H2",
                                "sTs": 1666724400000,
                                "cal": true,
                                "run": true,
                                "act": 2780200,
                                "scrA": 1,
                                "scrB": 0,
                                "addresses": {
                                "comment": "/scoreboard/board/1811131200/comments/en_GB",
                                "essentialScoreboard": "/essentialscoreboard/100/1811131200",
                                "essentialScoreboardCallback": "/c/essentialscoreboard/100/1811131200/en_GB",
                                "stats": "/scoreboard/board/1811131200/stats",
                                "timeline": "/scoreboard/board/1811131200/timeline",
                                "overviewComment": "/scoreboard/board/1811131200/overview/comments/en_GB"
                                },
                                "disabledScoreboard": false,
                                "reversedClock": false,
                                "preeventPeriodDescription": "",
                                "inPlay": true,
                                "scoreboardUrlFragment": null,
                                "externalScoreboardConfiguration": {
                                "eventId": 1811131200,
                                "sportId": 100,
                                "providerEventId": 36176243,
                                "provider": "BET_RADAR",
                                "providerDescription": "Burnley FC vs Norwich City",
                                "cdnUrl": "https://widgets.sir.sportradar.com/6b003e4e80e158964cfca39bf6195fe9/widgetloader"
                                },
                                "scr": "1-0",
                                "penaltyShootout": {},
                                "penaltiesScrA": 0,
                                "penaltiesScrB": 0,
                                "stoppageTime": "",
                                "marketSuspensionReason": "",
                                "redCardA": 0,
                                "redCardB": 0,
                                "matchLength": 90
                            },
                            "markets": [
                                {
                                "id": 11118412430,
                                "desc": "Match Betting",
                                "eid": 1811131200,
                                "pid": 100,
                                "ptd": 1,
                                "ptdesc": "Win only",
                                "st": 1,
                                "mblindex": 109449333,
                                "cur": true,
                                "next": false,
                                "mtid": 1,
                                "p": "90 Mins",
                                "o": [
                                    {
                                    "oid": 118737025100,
                                    "d": "Burnley",
                                    "sd": null,
                                    "cpid": 535076779412,
                                    "pr": "1/12",
                                    "prd": 1.083,
                                    "fdp": "1.083",
                                    "h": false,
                                    "po": 1,
                                    "key": "ML1",
                                    "keyDimension": "HOME"
                                    },
                                    {
                                    "oid": 118737025300,
                                    "d": "Draw",
                                    "sd": null,
                                    "cpid": 535076771935,
                                    "pr": "13/2",
                                    "prd": 7.5,
                                    "fdp": "7.5",
                                    "h": false,
                                    "po": 2,
                                    "key": "MLX",
                                    "keyDimension": "DRAW"
                                    },
                                    {
                                    "oid": 118737025200,
                                    "d": "Norwich City",
                                    "sd": null,
                                    "cpid": 535076784906,
                                    "pr": "110/1",
                                    "prd": 111,
                                    "fdp": "111.0",
                                    "h": false,
                                    "po": 3,
                                    "key": "ML2",
                                    "keyDimension": "AWAY"
                                    }
                                ]
                                }
                            ],
                            "metadata": {
                                "badges": [
                                "CORNERS",
                                "PIU"
                                ]
                            },
                            "has_stream": false
                            }
                        ]
                        }
                    ]
                }],
                "slider_elements": [],
                "total_number_of_events": 59,
                "total_number_of_streamable_events": null
            }
        }
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Sports render', async() => {
        axios.get.mockReturnValue(response);

        render(
            <Provider store={store}>
                <Sports/>
            </Provider>
        )

        const sportList = await screen.findByTestId('sports');
        
        expect(sportList).toBeInTheDocument();
        expect(axios.get).toBeCalledTimes(1);
    })
})