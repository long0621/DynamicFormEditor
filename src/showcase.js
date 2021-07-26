const tableTemplate = {
  name: "table demo",
  template: {
    "type": "box",
    "layout": "column",
    "id": 0,
    "contents": [
      {
        "type": "table",
        "id": 1,
        "contents": [
          {
            "type": "trow",
            "id": 2,
            "contents": [
              {
                "type": "tcol",
                "id": 3,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 4,
                    "contents": [
                      {
                        "type": "text",
                        "id": 5,
                        "text": "1.Patient profile",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 6,
            "contents": [
              {
                "type": "tcol",
                "id": 7,
                "width": 0,
                "contents": [
                  {
                    "type": "text",
                    "id": 8,
                    "text": "姓名",
                    "fontStyle": "",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold",
                    "fontSize": ""
                  }
                ],
                "backgroundColor": "#F0FBFF",
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd"
              },
              {
                "type": "tcol",
                "id": 9,
                "width": 0,
                "contents": [
                  {
                    "type": "textField",
                    "id": 10,
                    "width": "auto",
                    "bindingKey": "patientName"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd"
              },
              {
                "type": "tcol",
                "id": 11,
                "width": 0,
                "contents": [
                  {
                    "type": "text",
                    "id": 12,
                    "text": "性別",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF",
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd"
              },
              {
                "type": "tcol",
                "id": 13,
                "width": 0,
                "contents": [
                  {
                    "type": "textField",
                    "id": 14,
                    "width": "auto",
                    "bindingKey": "gender"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd"
              },
              {
                "type": "tcol",
                "id": 15,
                "width": 0,
                "contents": [
                  {
                    "type": "text",
                    "id": 16,
                    "text": "身高",
                    "width": "",
                    "textAlign": "center",
                    "fontWeight": "bold",
                    "color": "#02B1E7"
                  }
                ],
                "backgroundColor": "#F0FBFF",
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd"
              },
              {
                "type": "tcol",
                "id": 17,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 18,
                    "contents": [
                      {
                        "type": "textField",
                        "id": 19,
                        "width": "auto",
                        "bindingKey": "bodyHeight"
                      },
                      {
                        "type": "text",
                        "id": 20,
                        "text": "cm",
                        "textAlign": "center",
                        "position": "relative",
                        "textDecoration": "none"
                      }
                    ],
                    "flexGrow": 0,
                    "wrap": false,
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd"
              }
            ]
          },
          {
            "type": "trow",
            "id": 21,
            "contents": [
              {
                "type": "tcol",
                "id": 22,
                "contents": [
                  {
                    "type": "text",
                    "id": 23,
                    "text": "出生年月日",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "width": 0,
                "backgroundColor": "#F0FBFF",
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "1"
              },
              {
                "type": "tcol",
                "id": 24,
                "colspan": "3",
                "contents": [
                  {
                    "type": "box",
                    "id": 25,
                    "contents": [
                      {
                        "type": "datePicker",
                        "id": 26,
                        "dense": true,
                        "label": "選取",
                        "bindingKey": "birthDate",
                        "style": "outlined",
                        "grow": 0
                      }
                    ],
                    "flexShrink": 0,
                    "wrap": false,
                    "flexGrow": 0,
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "width": 0
              },
              {
                "type": "tcol",
                "id": 27,
                "colspan": "1",
                "contents": [
                  {
                    "type": "text",
                    "id": 28,
                    "text": "體重",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "width": 0,
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 29,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 30,
                    "contents": [
                      {
                        "type": "textField",
                        "id": 31,
                        "width": "auto",
                        "bindingKey": "bodyWeight"
                      },
                      {
                        "type": "text",
                        "id": 32,
                        "text": "kg",
                        "textAlign": "center",
                        "position": "relative",
                        "textDecoration": "none"
                      }
                    ],
                    "flexGrow": 0,
                    "wrap": false,
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd"
              }
            ]
          },
          {
            "type": "trow",
            "id": 33,
            "contents": [
              {
                "type": "tcol",
                "id": 34,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 35,
                    "contents": [
                      {
                        "type": "text",
                        "id": 36,
                        "text": "2.Puberty mile stones ",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 37,
            "contents": [
              {
                "type": "tcol",
                "id": 38,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 39,
                    "contents": [
                      {
                        "type": "text",
                        "id": 40,
                        "text": "Menarche for girls :",
                        "fontStyle": "",
                        "textAlign": "center",
                        "color": "",
                        "fontWeight": "normal",
                        "grow": 0
                      },
                      {
                        "type": "textField",
                        "id": 41,
                        "width": "auto",
                        "bindingKey": "girlMenarche",
                        "grow": 0
                      },
                      {
                        "type": "text",
                        "id": 42,
                        "text": "Voice change for boys :",
                        "textAlign": "center",
                        "color": "",
                        "fontWeight": "normal",
                        "grow": 0
                      },
                      {
                        "type": "textField",
                        "id": 43,
                        "width": "auto",
                        "bindingKey": "boyVoiceChange",
                        "grow": 0
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 44,
            "contents": [
              {
                "type": "tcol",
                "id": 45,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 46,
                    "contents": [
                      {
                        "type": "text",
                        "id": 47,
                        "text": "3.Family history",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 48,
            "contents": [
              {
                "type": "tcol",
                "id": 49,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 50,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 51,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 52,
                            "label": "Yes",
                            "color": ""
                          },
                          {
                            "type": "radio",
                            "id": 53,
                            "label": "No"
                          }
                        ],
                        "bindingKey": "familyHistoryRadioGroup",
                        "direction": "row",
                        "grow": 0
                      },
                      {
                        "type": "text",
                        "id": 54,
                        "text": "Younger siblings:",
                        "textAlign": "left",
                        "color": "",
                        "fontWeight": "normal",
                        "grow": 0
                      },
                      {
                        "type": "textField",
                        "id": 55,
                        "width": "150px",
                        "grow": 0,
                        "bindingKey": "youngSibling"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 56,
            "contents": [
              {
                "type": "tcol",
                "id": 57,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 58,
                    "contents": [
                      {
                        "type": "text",
                        "id": 59,
                        "text": "4.Sports/Performing arts ",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 60,
            "contents": [
              {
                "type": "tcol",
                "id": 61,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 62,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 63,
                        "marginRight": "",
                        "grow": 0,
                        "bindingKey": "sportArtCheckbox"
                      },
                      {
                        "type": "text",
                        "id": 64,
                        "text": "Not specified",
                        "shrink": 0,
                        "grow": 0,
                        "textAlign": "left"
                      },
                      {
                        "type": "text",
                        "id": 65,
                        "text": "Sports:",
                        "textAlign": "center",
                        "color": "",
                        "fontWeight": "normal",
                        "grow": 0,
                        "marginLeft": "10px"
                      },
                      {
                        "type": "textField",
                        "id": 66,
                        "width": "",
                        "grow": 0,
                        "bindingKey": "sportInput"
                      },
                      {
                        "type": "text",
                        "id": 67,
                        "text": "Performing arts:",
                        "fontStyle": "",
                        "textAlign": "center",
                        "color": "",
                        "fontWeight": "normal",
                        "grow": 0,
                        "marginLeft": "10px"
                      },
                      {
                        "type": "textField",
                        "id": 68,
                        "grow": 0,
                        "bindingKey": "performingArts"
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 69,
            "contents": [
              {
                "type": "tcol",
                "id": 70,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 71,
                    "contents": [
                      {
                        "type": "text",
                        "id": 72,
                        "text": "5.Head/neck/jaw",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 73,
            "contents": [
              {
                "type": "tcol",
                "id": 74,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 75,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 76,
                        "marginRight": "",
                        "grow": 0,
                        "bindingKey": "headNeckJawNO"
                      },
                      {
                        "type": "text",
                        "id": 77,
                        "text": "No",
                        "shrink": 0,
                        "grow": 0,
                        "textAlign": "left"
                      },
                      {
                        "type": "checkbox",
                        "id": 78,
                        "marginRight": "",
                        "grow": 0,
                        "bindingKey": "headNeckJawDental"
                      },
                      {
                        "type": "text",
                        "id": 79,
                        "text": "Dental problem",
                        "shrink": 0,
                        "grow": 0,
                        "textAlign": "left"
                      },
                      {
                        "type": "checkbox",
                        "id": 80,
                        "marginRight": "",
                        "grow": 0,
                        "bindingKey": "headNeckJawTMD"
                      },
                      {
                        "type": "text",
                        "id": 81,
                        "text": "TMD ",
                        "shrink": 0,
                        "grow": 0,
                        "textAlign": "left"
                      },
                      {
                        "type": "checkbox",
                        "id": 82,
                        "marginRight": "",
                        "grow": 0,
                        "bindingKey": "headNeckJawWry"
                      },
                      {
                        "type": "text",
                        "id": 83,
                        "text": "Wry neck",
                        "shrink": 0,
                        "grow": 0,
                        "textAlign": "left"
                      },
                      {
                        "type": "checkbox",
                        "id": 84,
                        "marginRight": "",
                        "grow": 0,
                        "bindingKey": "headNeckJawEye"
                      },
                      {
                        "type": "text",
                        "id": 85,
                        "text": "Eye problem ",
                        "shrink": 0,
                        "grow": 0,
                        "textAlign": "left"
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 86,
            "contents": [
              {
                "type": "tcol",
                "id": 87,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 88,
                    "contents": [
                      {
                        "type": "text",
                        "id": 89,
                        "text": "Others/Specify",
                        "fontStyle": "",
                        "textAlign": "center",
                        "color": "",
                        "fontWeight": "normal",
                        "grow": 0
                      },
                      {
                        "type": "textField",
                        "id": 90,
                        "grow": 0,
                        "bindingKey": "headNeckJawOthers"
                      }
                    ]
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 91,
            "contents": [
              {
                "type": "tcol",
                "id": 92,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 93,
                    "contents": [
                      {
                        "type": "text",
                        "id": 94,
                        "text": "6.X-ray PA view: Risser sign ",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 95,
            "contents": [
              {
                "type": "tcol",
                "id": 96,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 97,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 98,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 99,
                            "label": "0a"
                          },
                          {
                            "type": "radio",
                            "id": 100,
                            "label": "0b"
                          },
                          {
                            "type": "radio",
                            "id": 101,
                            "label": "0.5"
                          },
                          {
                            "type": "radio",
                            "id": 102,
                            "label": "1"
                          },
                          {
                            "type": "radio",
                            "id": 103,
                            "label": "1.5"
                          },
                          {
                            "type": "radio",
                            "id": 104,
                            "label": "2"
                          },
                          {
                            "type": "radio",
                            "id": 105,
                            "label": "2.5"
                          },
                          {
                            "type": "radio",
                            "id": 106,
                            "label": "3"
                          },
                          {
                            "type": "radio",
                            "id": 107,
                            "label": "3.5"
                          },
                          {
                            "type": "radio",
                            "id": 108,
                            "label": "4"
                          },
                          {
                            "type": "radio",
                            "id": 109,
                            "label": "4.5"
                          },
                          {
                            "type": "radio",
                            "id": 110,
                            "label": "5"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "xRayPARisserRadioGroups"
                      }
                    ]
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 111,
            "contents": [
              {
                "type": "tcol",
                "id": 112,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 113,
                    "contents": [
                      {
                        "type": "text",
                        "id": 114,
                        "text": "7.Adam’s test: ATR ",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 115,
            "contents": [
              {
                "type": "tcol",
                "id": 116,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 117,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "box",
                        "id": 118,
                        "contents": [
                          {
                            "type": "text",
                            "id": 119,
                            "grow": 0,
                            "text": "Pelvis"
                          },
                          {
                            "type": "textField",
                            "id": 120,
                            "grow": 0,
                            "bindingKey": "ARTPelvisInput"
                          },
                          {
                            "type": "text",
                            "id": 121,
                            "grow": 0,
                            "textAlign": "center",
                            "text": "degrees on "
                          },
                          {
                            "type": "radioGroup",
                            "id": 122,
                            "grow": 0,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 123,
                                "label": "N"
                              },
                              {
                                "type": "radio",
                                "id": 124,
                                "label": "R"
                              },
                              {
                                "type": "radio",
                                "id": 125,
                                "label": "L"
                              }
                            ],
                            "direction": "row",
                            "marginLeft": "5px",
                            "bindingKey": "ARTPelvisRadioGroup"
                          }
                        ],
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 126,
                        "contents": [
                          {
                            "type": "text",
                            "id": 127,
                            "text": "Then balance the pelvis -> ATR = 0 degrees "
                          }
                        ],
                        "marginTop": "10px"
                      }
                    ]
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 128,
            "contents": [
              {
                "type": "tcol",
                "id": 129,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 130,
                    "contents": [
                      {
                        "type": "text",
                        "id": 131,
                        "grow": 0,
                        "text": "C1-T5: "
                      },
                      {
                        "type": "textField",
                        "id": 132,
                        "grow": 0,
                        "bindingKey": "ATRC1T5Input"
                      },
                      {
                        "type": "text",
                        "id": 133,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "degrees on"
                      },
                      {
                        "type": "radioGroup",
                        "id": 134,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 135,
                            "label": "N"
                          },
                          {
                            "type": "radio",
                            "id": 136,
                            "label": "R"
                          },
                          {
                            "type": "radio",
                            "id": 137,
                            "label": "L"
                          }
                        ],
                        "direction": "row",
                        "marginLeft": "5px",
                        "bindingKey": "ATRC1T5RadioGroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 138,
            "contents": [
              {
                "type": "tcol",
                "id": 139,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 140,
                    "contents": [
                      {
                        "type": "text",
                        "id": 141,
                        "grow": 0,
                        "text": "T6-T11:"
                      },
                      {
                        "type": "textField",
                        "id": 142,
                        "grow": 0,
                        "bindingKey": "ATRT6T11Input"
                      },
                      {
                        "type": "text",
                        "id": 143,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "degrees on"
                      },
                      {
                        "type": "radioGroup",
                        "id": 144,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 145,
                            "label": "N"
                          },
                          {
                            "type": "radio",
                            "id": 146,
                            "label": "R"
                          },
                          {
                            "type": "radio",
                            "id": 147,
                            "label": "L"
                          }
                        ],
                        "direction": "row",
                        "marginLeft": "5px",
                        "bindingKey": "ATRT6T11RadioGroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 148,
            "contents": [
              {
                "type": "tcol",
                "id": 149,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 150,
                    "contents": [
                      {
                        "type": "text",
                        "id": 151,
                        "grow": 0,
                        "text": "T12-L5: "
                      },
                      {
                        "type": "textField",
                        "id": 152,
                        "grow": 0,
                        "bindingKey": "ATRT12L5Input"
                      },
                      {
                        "type": "text",
                        "id": 153,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "degrees on"
                      },
                      {
                        "type": "radioGroup",
                        "id": 154,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 155,
                            "label": "N"
                          },
                          {
                            "type": "radio",
                            "id": 156,
                            "label": "R"
                          },
                          {
                            "type": "radio",
                            "id": 157,
                            "label": "L"
                          }
                        ],
                        "direction": "row",
                        "marginLeft": "5px",
                        "bindingKey": "ATRT12L5RadioGroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 158,
            "contents": [
              {
                "type": "tcol",
                "id": 159,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 160,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 161,
                        "grow": 0,
                        "bindingKey": "ATRFlexCheckbox"
                      },
                      {
                        "type": "text",
                        "id": 162,
                        "grow": 0,
                        "text": "Flexibility of the spine (seated)"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 163,
            "contents": [
              {
                "type": "tcol",
                "id": 164,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 165,
                    "contents": [
                      {
                        "type": "text",
                        "id": 166,
                        "grow": 0,
                        "text": "Thoracic curve:"
                      },
                      {
                        "type": "textField",
                        "id": 167,
                        "grow": 0,
                        "bindingKey": "ATRThoracicInput"
                      },
                      {
                        "type": "text",
                        "id": 168,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "%"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 169,
            "contents": [
              {
                "type": "tcol",
                "id": 170,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 171,
                    "contents": [
                      {
                        "type": "text",
                        "id": 172,
                        "text": "8.Risk of progression ",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 173,
            "contents": [
              {
                "type": "tcol",
                "id": 174,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 175,
                    "contents": [
                      {
                        "type": "text",
                        "id": 176,
                        "grow": 0,
                        "text": "Lumbar curve: "
                      },
                      {
                        "type": "textField",
                        "id": 177,
                        "grow": 0,
                        "bindingKey": "ATRLumbarInput"
                      },
                      {
                        "type": "text",
                        "id": 178,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "%"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 179,
            "contents": [
              {
                "type": "tcol",
                "id": 180,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 181,
                    "contents": [
                      {
                        "type": "text",
                        "id": 182,
                        "text": "9.Physical examination of the pelvis",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 183,
            "contents": [
              {
                "type": "tcol",
                "id": 184,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 185,
                    "contents": [
                      {
                        "type": "text",
                        "id": 186,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "Hip prominence:",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 187,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 188,
                            "label": "Neutral"
                          },
                          {
                            "type": "radio",
                            "id": 189,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 190,
                            "label": "Left"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "physicalHipInput"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 191,
            "contents": [
              {
                "type": "tcol",
                "id": 192,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 193,
                    "contents": [
                      {
                        "type": "text",
                        "id": 194,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "Whole pelvic rotation:",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 195,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 196,
                            "label": "Neutral"
                          },
                          {
                            "type": "radio",
                            "id": 197,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 198,
                            "label": "Left"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "physicalWholeInput"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 199,
            "contents": [
              {
                "type": "tcol",
                "id": 200,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 201,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "box",
                        "id": 202,
                        "contents": [
                          {
                            "type": "text",
                            "id": 203,
                            "text": "Pelvic dysfunctions: 5-step assessment "
                          }
                        ],
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 204,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 205,
                            "grow": 0,
                            "bindingKey": "PelvicNoDysfunctions"
                          },
                          {
                            "type": "text",
                            "id": 206,
                            "grow": 0,
                            "text": "No dysfunctions "
                          }
                        ],
                        "marginTop": "5px",
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 207,
                        "contents": [
                          {
                            "type": "text",
                            "id": 208,
                            "text": "Anteriorly rotated ilium on the",
                            "grow": 0
                          },
                          {
                            "type": "radioGroup",
                            "id": 209,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 210,
                                "label": "Right"
                              },
                              {
                                "type": "radio",
                                "id": 211,
                                "label": "left"
                              }
                            ],
                            "direction": "row",
                            "marginLeft": "5px",
                            "bindingKey": "AnteriorlyRotated "
                          }
                        ],
                        "marginTop": "5px",
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 212,
                        "contents": [
                          {
                            "type": "text",
                            "id": 213,
                            "grow": 0,
                            "text": "Posteriorly rotated ilium on the"
                          },
                          {
                            "type": "radioGroup",
                            "id": 214,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 215,
                                "label": "Right"
                              },
                              {
                                "type": "radio",
                                "id": 216,
                                "label": "left"
                              }
                            ],
                            "direction": "row",
                            "marginLeft": "5px",
                            "bindingKey": "PosteriorlyRotated"
                          }
                        ],
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 217,
                        "contents": [
                          {
                            "type": "text",
                            "id": 218,
                            "grow": 0,
                            "text": "Sacral torsion"
                          },
                          {
                            "type": "radioGroup",
                            "id": 219,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 220,
                                "label": "R on R"
                              },
                              {
                                "type": "radio",
                                "id": 221,
                                "label": "L on L"
                              },
                              {
                                "type": "radio",
                                "id": 222,
                                "label": "/R on L"
                              },
                              {
                                "type": "radio",
                                "id": 223,
                                "label": "L on R "
                              }
                            ],
                            "direction": "row",
                            "marginLeft": "5px",
                            "bindingKey": "SacralTorsion "
                          }
                        ],
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 224,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 225,
                            "grow": 0,
                            "bindingKey": "PhysicalOthersCheckbox"
                          },
                          {
                            "type": "text",
                            "id": 226,
                            "grow": 0,
                            "text": "Others"
                          },
                          {
                            "type": "textField",
                            "id": 227,
                            "grow": 0,
                            "label": "",
                            "bindingKey": "PhysicalOthers"
                          }
                        ],
                        "alignItems": "align-center"
                      }
                    ]
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 228,
            "contents": [
              {
                "type": "tcol",
                "id": 229,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 230,
                    "contents": [
                      {
                        "type": "text",
                        "id": 231,
                        "text": "10.Supine examination of the hip ",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 232,
            "contents": [
              {
                "type": "tcol",
                "id": 233,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 234,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 235,
                        "grow": 0,
                        "bindingKey": "SupineLimitation"
                      },
                      {
                        "type": "text",
                        "id": 236,
                        "grow": 0,
                        "text": "No limitation"
                      }
                    ],
                    "marginTop": "5px",
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 237,
            "contents": [
              {
                "type": "tcol",
                "id": 238,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 239,
                    "contents": [
                      {
                        "type": "text",
                        "id": 240,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "Flexion is limited on the ",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 241,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 242,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 243,
                            "label": "Left"
                          },
                          {
                            "type": "radio",
                            "id": 244,
                            "label": "Both"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "SupineFlexion"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 245,
            "contents": [
              {
                "type": "tcol",
                "id": 246,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 247,
                    "contents": [
                      {
                        "type": "text",
                        "id": 248,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "Extension is limited on the",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 249,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 250,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 251,
                            "label": "Left"
                          },
                          {
                            "type": "radio",
                            "id": 252,
                            "label": "Both"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "SupineExtensionRadiogroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 253,
            "contents": [
              {
                "type": "tcol",
                "id": 254,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 255,
                    "contents": [
                      {
                        "type": "text",
                        "id": 256,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "Internal rotation is limited on the",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 257,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 258,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 259,
                            "label": "Left"
                          },
                          {
                            "type": "radio",
                            "id": 260,
                            "label": "Both"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "SupineInternalRadiogroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 261,
            "contents": [
              {
                "type": "tcol",
                "id": 262,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 263,
                    "contents": [
                      {
                        "type": "text",
                        "id": 264,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "External rotation is limited on the",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 265,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 266,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 267,
                            "label": "Left"
                          },
                          {
                            "type": "radio",
                            "id": 268,
                            "label": "Both"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "SupineExternalRadiogroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 269,
            "contents": [
              {
                "type": "tcol",
                "id": 270,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 271,
                    "contents": [
                      {
                        "type": "text",
                        "id": 272,
                        "text": "11.Supine examination of the foot",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 273,
            "contents": [
              {
                "type": "tcol",
                "id": 274,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 275,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 276,
                        "grow": 0,
                        "bindingKey": "SupineFootCheckBox"
                      },
                      {
                        "type": "text",
                        "id": 277,
                        "grow": 0,
                        "text": " No problem "
                      }
                    ],
                    "marginTop": "5px",
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 278,
            "contents": [
              {
                "type": "tcol",
                "id": 279,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 280,
                    "contents": [
                      {
                        "type": "text",
                        "id": 281,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "Pronated on the ",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 282,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 283,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 284,
                            "label": "Left"
                          },
                          {
                            "type": "radio",
                            "id": 285,
                            "label": "Both"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "SupineFootPronatedRadioGroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 286,
            "contents": [
              {
                "type": "tcol",
                "id": 287,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 288,
                    "contents": [
                      {
                        "type": "text",
                        "id": 289,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "Supinated on the",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 290,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 291,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 292,
                            "label": "Left"
                          },
                          {
                            "type": "radio",
                            "id": 293,
                            "label": "Both"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "SupineFootSupinatedRadiogroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 294,
            "contents": [
              {
                "type": "tcol",
                "id": 295,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 296,
                    "contents": [
                      {
                        "type": "text",
                        "id": 297,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "Pes equinus on the",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 298,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 299,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 300,
                            "label": "Left"
                          },
                          {
                            "type": "radio",
                            "id": 301,
                            "label": "Both"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "SupineFootPes Radiogroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 302,
            "contents": [
              {
                "type": "tcol",
                "id": 303,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 304,
                    "contents": [
                      {
                        "type": "text",
                        "id": 305,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "True short leg on the ",
                        "marginRight": "5px"
                      },
                      {
                        "type": "radioGroup",
                        "id": 306,
                        "grow": 0,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 307,
                            "label": "Right"
                          },
                          {
                            "type": "radio",
                            "id": 308,
                            "label": "Left"
                          },
                          {
                            "type": "radio",
                            "id": 309,
                            "label": "Both"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "SupineFootTrueRadiogroup"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 310,
            "contents": [
              {
                "type": "tcol",
                "id": 311,
                "rowspan": "",
                "colspan": "6",
                "contents": [
                  {
                    "type": "box",
                    "id": 312,
                    "contents": [
                      {
                        "type": "text",
                        "id": 313,
                        "text": "12.Lung function test ",
                        "fontSize": "1.25rem",
                        "fontWeight": "normal"
                      }
                    ],
                    "marginBottom": "5px",
                    "marginTop": "20px"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 314,
            "contents": [
              {
                "type": "tcol",
                "id": 315,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 316,
                    "contents": [
                      {
                        "type": "text",
                        "id": 317,
                        "grow": 0,
                        "text": "FRC (forced vital capacity):"
                      },
                      {
                        "type": "textField",
                        "id": 318,
                        "grow": 0,
                        "label": "",
                        "bindingKey": "LungFRC"
                      },
                      {
                        "type": "text",
                        "id": 319,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "cc = FFV(6sec) "
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 320,
            "contents": [
              {
                "type": "tcol",
                "id": 321,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 322,
                    "contents": [
                      {
                        "type": "text",
                        "id": 323,
                        "grow": 0,
                        "text": "FEV (1sec): "
                      },
                      {
                        "type": "textField",
                        "id": 324,
                        "grow": 0,
                        "bindingKey": "LungFEV"
                      },
                      {
                        "type": "text",
                        "id": 325,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "cc"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          },
          {
            "type": "trow",
            "id": 326,
            "contents": [
              {
                "type": "tcol",
                "id": 327,
                "width": 0,
                "contents": [
                  {
                    "type": "box",
                    "id": 328,
                    "contents": [
                      {
                        "type": "text",
                        "id": 329,
                        "grow": 0,
                        "text": "FEV(1)/FVC ="
                      },
                      {
                        "type": "textField",
                        "id": 330,
                        "grow": 0,
                        "bindingKey": "LungFEVFVC"
                      },
                      {
                        "type": "text",
                        "id": 331,
                        "grow": 0,
                        "textAlign": "center",
                        "text": "%"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ],
                "paddingAll": "8px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#ddd",
                "colspan": "6"
              }
            ]
          }
        ],
        "width": "100%",
        "layout": "fixed"
      }
    ]
  },
  bindingData: {
    "patientName": null,
    "gender": null,
    "bodyHeight": "",
    "birthDate": null,
    "bodyWeight": null,
    "girlMenarche": null,
    "boyVoiceChange": null,
    "familyHistoryRadioGroup": null,
    "youngSibling": null,
    "sportArtCheckbox": null,
    "sportInput": null,
    "performingArts": null,
    "headNeckJawNO": null,
    "headNeckJawDental": null,
    "headNeckJawTMD": null,
    "headNeckJawWry": null,
    "headNeckJawEye": null,
    "headNeckJawOthers": null,
    "xRayPARisserRadioGroups": null,
    "ARTPelvisInput": null,
    "ARTPelvisRadioGroup": null,
    "ATRC1T5Input": null,
    "ATRC1T5RadioGroup": null,
    "ATRT6T11Input": null,
    "ATRT6T11RadioGroup": null,
    "ATRT12L5Input": null,
    "ATRT12L5RadioGroup": null,
    "ATRFlexCheckbox": null,
    "ATRThoracicInput": null,
    "ATRLumbarInput": null,
    "physicalHipInput": null,
    "physicalWholeInput": null,
    "PelvicNoDysfunctions": null,
    "AnteriorlyRotated ": null,
    "PosteriorlyRotated": null,
    "SacralTorsion ": null,
    "PhysicalOthersCheckbox": null,
    "PhysicalOthers": null,
    "SupineLimitation": null,
    "SupineFlexion": null,
    "SupineExtensionRadiogroup": null,
    "SupineInternalRadiogroup": null,
    "SupineExternalRadiogroup": null,
    "SupineFootCheckBox": null,
    "SupineFootPronatedRadioGroup": null,
    "SupineFootSupinatedRadiogroup": null,
    "SupineFootPes Radiogroup": null,
    "SupineFootTrueRadiogroup": null,
    "LungFRC": null,
    "LungFEV": null,
    "LungFEVFVC": null
  },
};

const diagnosisTemplate = {
  name: "diagnosis",
  template: {
    type: "box",
    layout: "vertical",
    id: 1,
    contents: [
      {
        type: "box",
        layout: "horizontal",
        alignItems: "center",
        id: 2,
        contents: [
          {
            type: "text",
            text: "Joints(MET)",
            flex: 1,
            align: "center",
            fontWeight: "bold",
            fontSize: "18px",
            id: 3,
            textAlign: "center",
          },
          {
            type: "box",
            layout: "vertical",
            flex: 4,
            id: 4,
            contents: [
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 5,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsSgCheckbox",
                    id: 6,
                  },
                  {
                    type: "text",
                    text: "SG:Rt SG ER+EN",
                    flexBasis: "auto",
                    id: 7,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                id: 8,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsDCheckbox",
                    id: 9,
                  },
                  {
                    type: "text",
                    text: "D+: Tx group dysfn 1st rib on the left +",
                    flexBasis: "auto",
                    id: 10,
                  },
                  {
                    type: "textField",
                    value: "D+",
                    flexBasis: "auto",
                    width: "140px",
                    bindingKey: "jointsD",
                    id: 11,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                id: 12,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsMtRibCheckbox",
                    id: 13,
                  },
                  {
                    type: "text",
                    text: "MT/rib:",
                    flexBasis: "auto",
                    id: 14,
                  },
                  {
                    type: "textField",
                    value: "MT/rib",
                    flexBasis: "auto",
                    width: "140px",
                    bindingKey: "jointsMtRib",
                    id: 15,
                  },
                  {
                    type: "text",
                    text: "3D derot/thrust",
                    flexBasis: "auto",
                    id: 16,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 17,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsLsjCheckbox",
                    id: 18,
                  },
                  {
                    type: "text",
                    text: "LSJ: derotation",
                    flexBasis: "auto",
                    id: 19,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                id: 20,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsPdCheckbox",
                    id: 21,
                  },
                  {
                    type: "text",
                    text: "Pelvic Dysfn:",
                    flexBasis: "auto",
                    id: 22,
                  },
                  {
                    type: "textField",
                    value: "PelvicDysfn",
                    flexBasis: "auto",
                    width: "140px",
                    bindingKey: "jointsPd",
                    id: 23,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "separator",
        marginAll: "16px",
        id: 24,
      },
      {
        type: "box",
        layout: "horizontal",
        alignItems: "center",
        id: 25,
        contents: [
          {
            type: "text",
            text: "Soft Tissue",
            flex: 1,
            align: "center",
            fontWeight: "bold",
            fontSize: "18px",
            id: 26,
            textAlign: "center",
          },
          {
            type: "box",
            layout: "vertical",
            flex: 4,
            id: 27,
            contents: [
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 28,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "softTissueOpenUpLigCheckbox",
                    id: 29,
                  },
                  {
                    type: "text",
                    text: "Lt T/L side: open up lig. & intercostrals",
                    flexBasis: "auto",
                    id: 30,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 31,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "softTissueEoCheckbox",
                    id: 32,
                  },
                  {
                    type: "text",
                    text: "Lt T/L side: open up EO/IO/QL",
                    flexBasis: "auto",
                    id: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  bindingData: {
    jointsD: "",
    jointsMtRib: "",
    jointsPd: "",
    jointsSgCheckbox: false,
    jointsDCheckbox: false,
    jointsMtRibCheckbox: false,
    jointsLsjCheckbox: false,
    jointsPdCheckbox: false,
    softTissueOpenUpLigCheckbox: false,
    softTissueEoCheckbox: false,
  },
};

const textFieldTemplate = {
  name: "textField Demo",
  template: {
    type: "box",
    layout: "horizontal",
    id: 1,
    contents: [
      {
        type: "text",
        id: 3,
        flexBasis: "auto",
      },
      {
        type: "textField",
        flexBasis: "auto",
        width: "180px",
        id: 2,
      },
    ],
  },
  bindingData: {},
};

const newElementTemplate = {
  name: "new element template",
  template: {
    type: "box",
    id: 0,
    contents: [
      {
        type: "box",
        id: 1,
        contents: [
          {
            type: "box",
            id: 2,
            contents: [
              {
                type: "box",
                id: 3,
                contents: [
                  {
                    type: "radioGroup",
                    id: 4,
                    contents: [
                      {
                        type: "radio",
                        id: 5,
                        label: "radio item 1",
                        color: "red",
                      },
                      {
                        type: "radio",
                        id: 6,
                        label: "radio item 2",
                        color: "red",
                      },
                      {
                        type: "radio",
                        id: 7,
                        label: "radio item 3",
                        color: "blue",
                      },
                      {
                        type: "radio",
                        id: 8,
                        label: "radio item 4",
                        color: "purple",
                      },
                    ],
                    bindingKey: "radioGroup",
                    label: "this is radio group label",
                    dense: true,
                  },
                  {
                    type: "separator",
                    id: 9,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
                layout: "column",
              },
              {
                type: "box",
                id: 10,
                layout: "column",
                contents: [
                  {
                    type: "select",
                    id: 11,
                    options: [
                      "this-is-select",
                      "this-is-textarea",
                      "this-is-text-field",
                    ],
                    style: "outlined",
                    dense: true,
                    bindingKey: "select",
                  },
                  {
                    type: "separator",
                    id: 12,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 13,
                layout: "column",
                contents: [
                  {
                    type: "multiSelect",
                    id: 14,
                    dense: true,
                    style: "outlined",
                    bindingKey: "multiSelect",
                    options: ["this", "is", "mutil", "select"],
                  },
                  {
                    type: "separator",
                    id: 15,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 16,
                layout: "column",
                contents: [
                  {
                    type: "datePicker",
                    id: 17,
                    disabled: false,
                    dense: true,
                    style: "outlined",
                    bindingKey: "datePicker",
                  },
                  {
                    type: "separator",
                    id: 18,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 19,
                layout: "column",
                contents: [
                  {
                    type: "timeIntervalSelect",
                    id: 20,
                    time: [
                      "21:00",
                      "21:30",
                      "22:00",
                      "22:30",
                      "23:00",
                      "23:30",
                    ],
                    bindingKey: "timeInterval",
                    style: "outlined",
                    dense: true,
                    multiple: "",
                  },
                  {
                    type: "separator",
                    id: 21,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 22,
                layout: "column",
                contents: [
                  {
                    type: "textarea",
                    id: 23,
                    bindingKey: "textarea",
                    rows: "3",
                    autoGrow: false,
                    noResize: false,
                    style: "outlined",
                    dense: true,
                  },
                  {
                    type: "separator",
                    id: 24,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 25,
                layout: "column",
                contents: [
                  {
                    type: "chipGroup",
                    id: 26,
                    contents: [
                      {
                        type: "chip",
                        id: 27,
                        color: "red",
                        value: "small",
                        filter: true,
                        outlined: true,
                        textColor: "",
                        size: "small",
                      },
                      {
                        type: "chip",
                        id: 28,
                        color: "",
                        value: "normal",
                        filter: false,
                        outlined: "",
                      },
                      {
                        type: "chip",
                        id: 29,
                        color: "red",
                        value: "tile ",
                        outlined: false,
                        filter: true,
                        textColor: "white",
                        tile: true,
                        size: "normal",
                      },
                      {
                        type: "chip",
                        id: 30,
                        color: "blue",
                        value: "blue-outlined",
                        filter: true,
                        outlined: true,
                      },
                    ],
                    color: "primary",
                    bindingKey: "chipGroup",
                    multiple: true,
                  },
                  {
                    type: "separator",
                    id: 31,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 32,
                contents: [
                  {
                    type: "box",
                    id: 33,
                    contents: [
                      {
                        type: "icon",
                        id: 34,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 35,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 36,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 37,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 38,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 39,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 40,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 41,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 42,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 43,
                        contents: [],
                      },
                    ],
                    layout: "",
                  },
                ],
                layout: "column",
              },
            ],
            layout: "column",
            flexGrow: 1,
          },
        ],
        layout: "",
        wrap: "wrap",
        flexGrow: 1,
      },
    ],
    layout: "",
    flex: "1",
    flexBasis: "100%",
    wrap: "wrap",
  },
  bindingData: {
    select: "this-is-select",
    timeInterval: ["21:30", "22:00", "22:30", "23:00", "23:30", "21:00"],
    datePicker: "2020-10-02",
    multiSelect: ["zxcv", "asdf", "qwer", "this", "is", "mutil", "select"],
    chipGroup: null,
    textarea: "Eureka!!\nthis is textarea!\n",
    radioGroup: "radio item 4",
  },
};

const dynamicDisabledInputTemplate = {
  name: "dynaic disabled input demo",
  template: {
    type: "box",
    id: 0,
    contents: [
      {
        type: "text",
        id: 1,
        text: "textarea  will disabled when:",
        fontSize: "1.5rem",
        color: "blue",
      },
      {
        type: "box",
        id: 2,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "lightblue",
        contents: [
          {
            type: "text",
            id: 3,
            text: "!",
            fontSize: "2.2rem",
            color: "blue",
            marginBottom: "",
            textAlign: "center",
            marginTop: "",
            paddingTop: "",
            paddingRight: "5px",
            paddingBottom: "",
            paddingLeft: "",
            grow: 0,
          },
          {
            type: "text",
            id: 4,
            text: "(",
            fontSize: "2rem",
            color: "blue",
            paddingRight: "10px",
            paddingLeft: "",
            grow: 0,
          },
          {
            type: "checkbox",
            id: 5,
            bindingKey: "checkbox",
            label: "checkbox",
            marginBottom: "",
            grow: 0,
          },
          {
            type: "text",
            id: 6,
            text: "||",
            fontSize: "2rem",
            color: "blue",
            marginBottom: "",
            textAlign: "center",
            marginTop: "",
            paddingRight: "10px",
            paddingLeft: "10px",
            grow: 0,
          },
          {
            type: "text",
            id: 7,
            text: "!",
            fontSize: "2.2rem",
            color: "blue",
            marginBottom: "",
            textAlign: "center",
            marginTop: "",
            paddingRight: "5px",
            paddingLeft: "",
            grow: 0,
          },
          {
            type: "text",
            id: 8,
            text: "(",
            fontSize: "2rem",
            color: "blue",
            paddingRight: "10px",
            paddingLeft: "",
            grow: 0,
          },
          {
            type: "checkbox",
            id: 9,
            label: "checkbox-2",
            marginBottom: "",
            grow: 0,
            bindingKey: "checkbox2",
            shrink: 0,
          },
          {
            type: "text",
            id: 10,
            text: "&&",
            fontSize: "2rem",
            color: "blue",
            marginBottom: "",
            textAlign: "center",
            marginTop: "",
            paddingRight: "10px",
            paddingLeft: "10px",
            grow: 0,
          },
          {
            type: "radioGroup",
            id: 11,
            bindingKey: "radioGroup",
            contents: [
              {
                type: "radio",
                id: 12,
                label: "disable1",
              },
              {
                type: "radio",
                id: 13,
                label: "enable1",
              },
              {
                type: "radio",
                id: 14,
                label: "disabled2",
              },
              {
                type: "radio",
                id: 15,
                label: "enable2",
              },
            ],
            direction: "column",
            shrink: 0,
            grow: 0,
          },
          {
            type: "text",
            id: 16,
            text: "||",
            fontSize: "2rem",
            color: "blue",
            marginBottom: "",
            textAlign: "center",
            marginTop: "",
            paddingRight: "10px",
            paddingLeft: "10px",
            grow: 0,
          },
          {
            type: "select",
            id: 17,
            bindingKey: "select",
            options: ["請選擇", "enable", "disable"],
            style: "outlined",
            dense: true,
            flexGrow: 0,
            flexShrink: 1,
          },
          {
            type: "text",
            id: 18,
            text: ")",
            fontSize: "2rem",
            color: "blue",
            paddingRight: "",
            paddingLeft: "10px",
            grow: 0,
          },
          {
            type: "text",
            id: 19,
            text: ")",
            fontSize: "2rem",
            color: "blue",
            paddingRight: "",
            paddingLeft: "",
            grow: 0,
          },
        ],
        paddingAll: "",
        paddingTop: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
        paddingLeft: "20px",
        layout: "",
        backgroundColor: "",
        alignItems: "align-center",
        flexGrow: 0,
      },
      {
        type: "separator",
        id: 20,
        marginTop: "20px",
        marginBottom: "20px",
      },
      {
        type: "textarea",
        id: 21,
        bindingKey: "textarea",
        style: "outlined",
        disabledConditions: {
          operators: ["not"],
          operands: [
            {
              operators: ["or", "not"],
              operands: [
                {
                  when: "checkbox",
                  is: "true",
                },
                {
                  operators: ["and", "or"],
                  operands: [
                    {
                      when: "checkbox2",
                      is: "true",
                    },
                    {
                      operators: ["or"],
                      operands: [
                        {
                          when: "radioGroup",
                          is: "disable1",
                        },
                        {
                          when: "radioGroup",
                          is: "disable2",
                        },
                      ],
                    },
                    {
                      when: "select",
                      is: "disable",
                    },
                  ],
                },
              ],
            },
          ],
        },
        disabled: "conditions",
      },
    ],
    layout: "column",
    justifyContent: "justify-start",
  },
  bindingData: {
    checkbox: false,
    checkbox2: true,
    radioGroup: "disable1",
    select: "enable",
    textarea: "dynamic enable is AWESOME!\n",
  },
};

export const templates = {
  tableTemplate,
  diagnosisTemplate,
  textFieldTemplate,
  newElementTemplate,
  dynamicDisabledInputTemplate,
};

export const bindingData = tableTemplate.bindingData;
export const template = tableTemplate.template;
