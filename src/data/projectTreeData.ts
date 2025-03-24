import { ProjectTreeNode } from "@/types/projectTree";

// This is a mock dataset representing different types of projects
// In a real application, this would come from an API or database
export const projectTreeData: ProjectTreeNode[] = [
  {
    "id": "borewell",
    "title": "Borewell",
    "price": 1671.75,
    "children": [
      {
        "id": "borewell-165mm",
        "title": "Borewell - 165mm",
        "price": 1666.69,
        "children": [
          {
            "id": "borewell-165mm-1",
            "title": "Province 1",
            "price": 1665.25
          },
          {
            "id": "borewell-165mm-2",
            "title": "Province 2",
            "price": 1670.75
          },
          {
            "id": "borewell-165mm-3",
            "title": "Province 3",
            "price": 1658.75
          },
          {
            "id": "borewell-165mm-4",
            "title": "Province 4",
            "price": 1671.25
          },
          {
            "id": "borewell-165mm-5",
            "title": "Province 5",
            "price": 1663.0
          },
          {
            "id": "borewell-165mm-6",
            "title": "Province 6",
            "price": 1661.0
          },
          {
            "id": "borewell-165mm-7",
            "title": "Province 7",
            "price": 1662.0
          },
          {
            "id": "borewell-165mm-8",
            "title": "Province 8",
            "price": 1677.0
          },
          {
            "id": "borewell-165mm-9",
            "title": "Province 9",
            "price": 1671.25
          }
        ]
      },
      {
        "id": "borewell-208mm",
        "title": "Borewell - 208mm",
        "price": 1676.81,
        "children": [
          {
            "id": "borewell-208mm-1",
            "title": "Province 1",
            "price": 1675.75
          },
          {
            "id": "borewell-208mm-2",
            "title": "Province 2",
            "price": 1680.75
          },
          {
            "id": "borewell-208mm-3",
            "title": "Province 3",
            "price": 1668.75
          },
          {
            "id": "borewell-208mm-4",
            "title": "Province 4",
            "price": 1681.5
          },
          {
            "id": "borewell-208mm-5",
            "title": "Province 5",
            "price": 1673.0
          },
          {
            "id": "borewell-208mm-6",
            "title": "Province 6",
            "price": 1670.75
          },
          {
            "id": "borewell-208mm-7",
            "title": "Province 7",
            "price": 1672.0
          },
          {
            "id": "borewell-208mm-8",
            "title": "Province 8",
            "price": 1687.25
          },
          {
            "id": "borewell-208mm-9",
            "title": "Province 9",
            "price": 1681.5
          }
        ]
      }
    ]
  },
  
  {
    "id": "wtw-001",
    "title": "Water Treatment Works",
    "children": [
      {
        "id": "wtw-001-01",
        "title": "Package Plant",
        "price": 3949293.5,
        "children": [
          {
            "id": "wtw-001-01-01",
            "title": "Very Small (30 kl/day)",
            "price": 600554
          },
          {
            "id": "wtw-001-01-02",
            "title": "Small (160 kl/day)",
            "price": 2199129
          },
          {
            "id": "wtw-001-01-03",
            "title": "Medium (600 kl/day)",
            "price": 3742581
          },
          {
            "id": "wtw-001-01-04",
            "title": "Large (1600 kl/day)",
            "price": 9254910
          }
        ]
      },
      {
        "id": "wtw-001-02",
        "title": "Conventional",
        "price": 2803699.3,
        "children": [
          {
            "id": "wtw-001-02-01",
            "title": "Very Small (30 kl/day)",
            "price": 861869
          },
          {
            "id": "wtw-001-02-02",
            "title": "Small (160 kl/day)",
            "price": 2944892
          },
          {
            "id": "wtw-001-02-03",
            "title": "Medium (600 kl/day)",
            "price": 4604337
          }
        ]
      },
      {
        "id": "wtw-001-03",
        "title": "Advanced Treatment",
        "price": 6792253.8,
        "children": [
          {
            "id": "wtw-001-03-01",
            "title": "Very Small (30 kl/day)",
            "price": 2059870
          },
          {
            "id": "wtw-001-03-02",
            "title": "Small (160 kl/day)",
            "price": 5628378
          },
          {
            "id": "wtw-001-03-03",
            "title": "Medium (600 kl/day)",
            "price": 5367267
          },
          {
            "id": "wtw-001-03-04",
            "title": "Large (1600 kl/day)",
            "price": 9736036
          },
          {
            "id": "wtw-001-03-05",
            "title": "Extra Large",
            "price": 11169718
          }
        ]
      }
    ],
    "price": 4515082.2
  },
  {
    "id": "electrically-driven",
    "title": "Electrically Driven",
    "children": [
      {
        "id": "scheme size",
        "title": "scheme size",
        "children": [
          {
            "id": "very-small",
            "title": "Very Small (1000 people) - 1kW",
            "children": [
              {
                "id": "mechanical-pump",
                "title": "Mechanical Pump",
                "price": 31.8
              },
              {
                "id": "pump-switchgear",
                "title": "Pump Switchgear",
                "price": 77.9
              },
              {
                "id": "energy-source",
                "title": "Energy Source",
                "price": 99.1
              },
              {
                "id": "pump-pipework",
                "title": "Pump Pipework",
                "price": 28.2
              },
              {
                "id": "total",
                "title": "Total per Household",
                "price": 237.0
              }
            ],
            "price": 94.8
          },
          {
            "id": "small",
            "title": "Small (5000 people) - 4kW",
            "children": [
              {
                "id": "mechanical-pump_1",
                "title": "Mechanical Pump",
                "price": 18.2
              },
              {
                "id": "pump-switchgear_1",
                "title": "Pump Switchgear",
                "price": 20.4
              },
              {
                "id": "energy-source_1",
                "title": "Energy Source",
                "price": 25.1
              },
              {
                "id": "pump-pipework_1",
                "title": "Pump Pipework",
                "price": 19.2
              },
              {
                "id": "total_1",
                "title": "Total per Household",
                "price": 82.8
              }
            ],
            "price": 33.14
          },
          {
            "id": "medium",
            "title": "Medium (20000 people) - 17kW",
            "children": [
              {
                "id": "mechanical-pump_2",
                "title": "Mechanical Pump",
                "price": 11.3
              },
              {
                "id": "pump-switchgear_2",
                "title": "Pump Switchgear",
                "price": 9.6
              },
              {
                "id": "energy-source_2",
                "title": "Energy Source",
                "price": 11.0
              },
              {
                "id": "pump-pipework_2",
                "title": "Pump Pipework",
                "price": 13.8
              },
              {
                "id": "total_2",
                "title": "Total per Household",
                "price": 45.7
              }
            ],
            "price": 18.28
          },
          {
            "id": "large",
            "title": "Large (50000 people) - 42kW",
            "children": [
              {
                "id": "mechanical-pump_3",
                "title": "Mechanical Pump",
                "price": 8.2
              },
              {
                "id": "pump-switchgear_3",
                "title": "Pump Switchgear",
                "price": 7.4
              },
              {
                "id": "energy-source_3",
                "title": "Energy Source",
                "price": 8.6
              },
              {
                "id": "pump-pipework_3",
                "title": "Pump Pipework",
                "price": 11.0
              },
              {
                "id": "total_3",
                "title": "Total per Household",
                "price": 35.2
              }
            ],
            "price": 14.08
          }
        ],
        "price": 40.075
      },
      {
        "id": "operation-cost",
        "title": "Operation Cost per Household",
        "children": [
          {
            "id": "very-small_1",
            "title": "Very Small (1000 people)",
            "children": [
              {
                "id": "energy-source_4",
                "title": "Energy Source",
                "price": 15.9
              },
              {
                "id": "pump-switchgear_4",
                "title": "Pump Switchgear",
                "price": 12.5
              },
              {
                "id": "mechanical-pump_4",
                "title": "Mechanical Pump",
                "price": 3.2
              },
              {
                "id": "pump-pipework_4",
                "title": "Pump Pipework",
                "price": 0.3
              },
              {
                "id": "total_4",
                "title": "Total",
                "price": 31.8
              }
            ],
            "price": 12.74
          },
          {
            "id": "small_1",
            "title": "Small (5000 people)",
            "children": [
              {
                "id": "energy-source_5",
                "title": "Energy Source",
                "price": 4.0
              },
              {
                "id": "pump-switchgear_5",
                "title": "Pump Switchgear",
                "price": 3.3
              },
              {
                "id": "mechanical-pump_5",
                "title": "Mechanical Pump",
                "price": 1.8
              },
              {
                "id": "pump-pipework_5",
                "title": "Pump Pipework",
                "price": 0.2
              },
              {
                "id": "total_5",
                "title": "Total",
                "price": 9.3
              }
            ],
            "price": 3.72
          },
          {
            "id": "medium_1",
            "title": "Medium (20000 people)",
            "children": [
              {
                "id": "energy-source_6",
                "title": "Energy Source",
                "price": 1.8
              },
              {
                "id": "pump-switchgear_6",
                "title": "Pump Switchgear",
                "price": 1.5
              },
              {
                "id": "mechanical-pump_6",
                "title": "Mechanical Pump",
                "price": 1.1
              },
              {
                "id": "pump-pipework_6",
                "title": "Pump Pipework",
                "price": 0.1
              },
              {
                "id": "total_6",
                "title": "Total",
                "price": 4.6
              }
            ],
            "price": 1.82
          },
          {
            "id": "large_1",
            "title": "Large (50000 people)",
            "children": [
              {
                "id": "energy-source_7",
                "title": "Energy Source",
                "price": 1.4
              },
              {
                "id": "pump-switchgear_7",
                "title": "Pump Switchgear",
                "price": 1.2
              },
              {
                "id": "mechanical-pump_7",
                "title": "Mechanical Pump",
                "price": 0.8
              },
              {
                "id": "pump-pipework_7",
                "title": "Pump Pipework",
                "price": 0.1
              },
              {
                "id": "total_7",
                "title": "Total",
                "price": 3.5
              }
            ],
            "price": 1.4
          }
        ],
        "price": 4.92
      },
      {
        "id": "diesel-cost",
        "title": "Diesel Cost per Household",
        "children": [
          {
            "id": "very-small_2",
            "title": "Very Small (1000 people)",
            "price": 132.1
          },
          {
            "id": "small_2",
            "title": "Small (5000 people)",
            "price": 39.6
          },
          {
            "id": "medium_2",
            "title": "Medium (20000 people)",
            "price": 23.5
          },
          {
            "id": "large_2",
            "title": "Large (50000 people)",
            "price": 20.5
          }
        ],
        "price": 53.925
      }
    ],
    "price": 32.973333333333336
  },
  {
    "id": "pump-station",
    "title": "Pump Station",
    "children": [
      {
        "id": "diesel",
        "title": "Diesel",
        "price": 125,
        "children": [
          {
            "id": "scheme-size-1",
            "title": "Scheme Size",
            "price": 12.75,
            "children": [
              {
                "id": "very-small-1",
                "title": "Very Small (1000 people)",
                "price": 28.7
              },
              {
                "id": "small-1",
                "title": "Small (5000 people)",
                "price": 10.6
              },
              {
                "id": "medium-1",
                "title": "Medium (20000 people)",
                "price": 6.4
              },
              {
                "id": "large-1",
                "title": "Large (50000 people)",
                "price": 5.3
              }
            ]
          },
          {
            "id": "diesel-cost_1",
            "title": "Diesel Cost",
            "price": 168.8,
            "children": [
              {
                "id": "very-small-cost",
                "title": "Very Small (1000 people)",
                "price": 192.2
              },
              {
                "id": "small-cost",
                "title": "Small (5000 people)",
                "price": 164.4
              },
              {
                "id": "medium-cost",
                "title": "Medium (20000 people)",
                "price": 160
              },
              {
                "id": "large-cost",
                "title": "Large (50000 people)",
                "price": 158.5
              }
            ]
          }
        ]
      },
      {
        "id": "electrically-driven_1",
        "title": "Electrically Driven",
        "price": 150,
        "children": [
          {
            "id": "scheme-size-2",
            "title": "Scheme Size",
            "price": 100.2,
            "children": [
              {
                "id": "very-small-2",
                "title": "Very Small (1000 people)",
                "price": 237.0
              },
              {
                "id": "small-2",
                "title": "Small (5000 people)",
                "price": 82.8
              },
              {
                "id": "medium-2",
                "title": "Medium (20000 people)",
                "price": 45.7
              },
              {
                "id": "large-2",
                "title": "Large (50000 people)",
                "price": 35.2
              }
            ]
          }
        ]
      }
    ],
    "price": 137.5
  },
  {
    "id": 1,
    "title": "Pipelines",
    "price": 1738671.41,
    "children": [
      {
        "id": 2,
        "title": "Concrete (Fibre-Cement) Pipeline",
        "price": 1297946.32,
        "children": [
          {
            "id": 3,
            "title": "Capital Cost",
            "price": 3895219.73,
            "children": [
              {
                "id": 4,
                "title": "Soft Soil Excavation",
                "price": 3711516.98,
                "children": [
                  {"id": 5, "title": "Very Small (1000 people)", "price": 291838.8},
                  {"id": 7, "title": "Small (5000 people)", "price": 640331.9},
                  {"id": 9, "title": "Medium (20000 people)", "price": 3702116.5},
                  {"id": 11, "title": "Large (50000 people)", "price": 10211780.7}
                ]
              },
              {
                "id": 13,
                "title": "Moderate Soil Hardness (10% Ripping)",
                "price": 4819726.38,
                "children": [
                  {"id": 14, "title": "Very Small (1000 people)", "price": 379391.3},
                  {"id": 16, "title": "Small (5000 people)", "price": 832432.0},
                  {"id": 18, "title": "Medium (20000 people)", "price": 4791766.1},
                  {"id": 20, "title": "Large (50000 people)", "price": 13275316.1}
                ]
              },
              {
                "id": 22,
                "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
                "price": 5898951.95,
                "children": [
                  {"id": 23, "title": "Very Small (1000 people)", "price": 466942.4},
                  {"id": 25, "title": "Small (5000 people)", "price": 892457.2},
                  {"id": 27, "title": "Medium (20000 people)", "price": 5897558.2},
                  {"id": 29, "title": "Large (50000 people)", "price": 16338850.0}
                ]
              },
              {
                "id": 31,
                "title": "Average Capital Cost",
                "price": 4819726.38,
                "children": [
                  {"id": 32, "title": "Very Small (1000 people)", "price": 379391.3},
                  {"id": 34, "title": "Small (5000 people)", "price": 832432.0},
                  {"id": 36, "title": "Medium (20000 people)", "price": 4791766.1},
                  {"id": 38, "title": "Large (50000 people)", "price": 13275316.1}
                ]
              },
              {
                "id": 40,
                "title": "Average Capital Cost Per Km",
                "price": 219163.05,
                "children": [
                  {"id": 41, "title": "Very Small (1000 people)", "price": 75877.1},
                  {"id": 43, "title": "Small (5000 people)", "price": 104053.1},
                  {"id": 45, "title": "Medium (20000 people)", "price": 281868.6},
                  {"id": 47, "title": "Large (50000 people)", "price": 414853.4}
                ]
              }
            ]
          },
          {
            "id": 49,
            "title": "Maintenance Cost",
            "price": 13.15,
            "children": [
              {
                "id": 50,
                "title": "Soft Soil Excavation",
                "price": 10.10,
                "children": [
                  {"id": 51, "title": "Very Small (1000 people)", "price": 14.6},
                  {"id": 53, "title": "Small (5000 people)", "price": 6.4},
                  {"id": 55, "title": "Medium (20000 people)", "price": 9.2},
                  {"id": 57, "title": "Large (50000 people)", "price": 10.2}
                ]
              },
              {
                "id": 59,
                "title": "Moderate Soil Hardness (10% Ripping)",
                "price": 13.15,
                "children": [
                  {"id": 60, "title": "Very Small (1000 people)", "price": 19.0},
                  {"id": 62, "title": "Small (5000 people)", "price": 8.3},
                  {"id": 64, "title": "Medium (20000 people)", "price": 12.0},
                  {"id": 66, "title": "Large (50000 people)", "price": 13.3}
                ]
              },
              {
                "id": 68,
                "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
                "price": 16.13,
                "children": [
                  {"id": 69, "title": "Very Small (1000 people)", "price": 23.3},
                  {"id": 71, "title": "Small (5000 people)", "price": 10.2},
                  {"id": 73, "title": "Medium (20000 people)", "price": 14.7},
                  {"id": 75, "title": "Large (50000 people)", "price": 16.3}
                ]
              },
              {
                "id": 77,
                "title": "Average Maintenance Cost",
                "price": 13.15,
                "children": [
                  {"id": 78, "title": "Very Small (1000 people)", "price": 19.0},
                  {"id": 80, "title": "Small (5000 people)", "price": 8.3},
                  {"id": 82, "title": "Medium (20000 people)", "price": 12.0},
                  {"id": 84, "title": "Large (50000 people)", "price": 13.3}
                ]
              }
            ]
          },
          {
            "id": 86,
            "title": "Operation Cost",
            "price": 8.88,
            "children": [
              {
                "id": 87,
                "title": "Soft Soil Excavation",
                "price": 8.88,
                "children": [
                  {"id": 88, "title": "Very Small (1000 people)", "price": 22.0},
                  {"id": 90, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 92, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 94, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 96,
                "title": "Moderate Soil Hardness (10% Ripping)",
                "price": 8.88,
                "children": [
                  {"id": 97, "title": "Very Small (1000 people)", "price": 22.0},
                  {"id": 99, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 101, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 103, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 105,
                "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
                "price": 8.88,
                "children": [
                  {"id": 106, "title": "Very Small (1000 people)", "price": 22.0},
                  {"id": 108, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 110, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 112, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 114,
                "title": "Average Operation Cost",
                "price": 8.88,
                "children": [
                  {"id": 115, "title": "Very Small (1000 people)", "price": 22.0},
                  {"id": 117, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 119, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 121, "title": "Large (50000 people)", "price": 2.8}
                ]
              }
            ]
          }
        ]
      },
      {
        "id": 123,
        "title": "uPVC Pipeline",
        "price": 878132.17,
        "children": [
          {
            "id": 124,
            "title": "Capital Cost",
            "price": 3503535.82,
            "children": [
              {
                "id": 125,
                "title": "Soft Soil Excavation",
                "price": 3333091.65,
                "children": [
                  {"id": 126, "title": "Very Small (1000 people)", "price": 554390.7},
                  {"id": 128, "title": "Small (5000 people)", "price": 983751.8},
                  {"id": 130, "title": "Medium (20000 people)", "price": 3388507.4},
                  {"id": 132, "title": "Large (50000 people)", "price": 8405716.7}
                ]
              },
              {
                "id": 134,
                "title": "Moderate Soil Hardness (10% Ripping)",
                "price": 4333019.0,
                "children": [
                  {"id": 135, "title": "Very Small (1000 people)", "price": 720708.3},
                  {"id": 137, "title": "Small (5000 people)", "price": 1278876.4},
                  {"id": 139, "title": "Medium (20000 people)", "price": 4405059.3},
                  {"id": 141, "title": "Large (50000 people)", "price": 10927432.0}
                ]
              },
              {
                "id": 143,
                "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
                "price": 5332946.0,
                "children": [
                  {"id": 144, "title": "Very Small (1000 people)", "price": 887024.5},
                  {"id": 146, "title": "Small (5000 people)", "price": 1574002.3},
                  {"id": 148, "title": "Medium (20000 people)", "price": 5421611.2},
                  {"id": 150, "title": "Large (50000 people)", "price": 13449145.9}
                ]
              },
              {
                "id": 152,
                "title": "Average Capital Cost",
                "price": 4333019.0,
                "children": [
                  {"id": 153, "title": "Very Small (1000 people)", "price": 720708.3},
                  {"id": 155, "title": "Small (5000 people)", "price": 1278876.4},
                  {"id": 157, "title": "Medium (20000 people)", "price": 4405059.3},
                  {"id": 159, "title": "Large (50000 people)", "price": 10927432.0}
                ]
              },
              {
                "id": 161,
                "title": "Average Capital Cost per km",
                "price": 226151.15,
                "children": [
                  {"id": 162, "title": "5km", "price": 144141.7},
                  {"id": 164, "title": "8km", "price": 159859.2},
                  {"id": 166, "title": "17km", "price": 259120.9},
                  {"id": 168, "title": "32km", "price": 341482.8}
                ]
              }
            ]
          },
          {
            "id": 220,
            "title": "Maintenance Cost",
            "price": 17.68,
            "children": [
              {
                "id": 221,
                "title": "Soft soil excavation",
                "price": 13.60,
                "children": [
                  {"id": 901, "title": "Very small (1000 people)", "price": 27.7},
                  {"id": 902, "title": "Small (5000 people)", "price": 9.8},
                  {"id": 903, "title": "Medium (20000 people)", "price": 8.5},
                  {"id": 904, "title": "Large (50000 people)", "price": 8.4}
                ]
              },
              {
                "id": 222,
                "title": "Moderate soil hardness (10% ripping)",
                "price": 17.68,
                "children": [
                  {"id": 905, "title": "Very small (1000 people)", "price": 36.0},
                  {"id": 906, "title": "Small (5000 people)", "price": 12.8},
                  {"id": 907, "title": "Medium (20000 people)", "price": 11.0},
                  {"id": 908, "title": "Large (50000 people)", "price": 10.9}
                ]
              },
              {
                "id": 223,
                "title": "Hard soil excavation (15% ripping, 5% blasting)",
                "price": 21.75,
                "children": [
                  {"id": 909, "title": "Very small (1000 people)", "price": 44.3},
                  {"id": 910, "title": "Small (5000 people)", "price": 15.7},
                  {"id": 911, "title": "Medium (20000 people)", "price": 13.6},
                  {"id": 912, "title": "Large (50000 people)", "price": 13.4}
                ]
              },
              {
                "id": 224,
                "title": "Average maintenance cost",
                "price": 17.68,
                "children": [
                  {"id": 913, "title": "Very small (1000 people)", "price": 36.0},
                  {"id": 914, "title": "Small (5000 people)", "price": 12.8},
                  {"id": 915, "title": "Medium (20000 people)", "price": 11.0},
                  {"id": 916, "title": "Large (50000 people)", "price": 10.9}
                ]
              }
            ]
          },
          {
            "id": 230,
            "title": "Operation Cost",
            "price": 8.88,
            "children": [
              {
                "id": 231,
                "title": "Soft soil excavation",
                "price": 8.88,
                "children": [
                  {"id": 917, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 918, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 919, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 920, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 232,
                "title": "Moderate soil hardness (10% ripping)",
                "price": 8.88,
                "children": [
                  {"id": 921, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 922, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 923, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 924, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 233,
                "title": "Hard soil excavation (15% ripping, 5% blasting)",
                "price": 8.88,
                "children": [
                  {"id": 925, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 926, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 927, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 928, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 234,
                "title": "Average operation cost",
                "price": 8.88,
                "children": [
                  {"id": 929, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 930, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 931, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 932, "title": "Large (50000 people)", "price": 2.8}
                ]
              }
            ]
          },
          {
            "id": 170,
            "title": "Unit Cost",
            "price": 826.48,
            "children": [
              {
                "id": 171,
                "title": "Limpopo",
                "price": 876.25,
                "children": [
                  {"id": 172, "title": "110mm", "price": 496},
                  {"id": 173, "title": "160mm", "price": 619},
                  {"id": 174, "title": "250mm", "price": 1005},
                  {"id": 175, "title": "315mm", "price": 1385}
                ]
              },
              {
                "id": 176,
                "title": "Gauteng",
                "price": 803.75,
                "children": [
                  {"id": 177, "title": "110mm", "price": 460},
                  {"id": 178, "title": "160mm", "price": 569},
                  {"id": 179, "title": "250mm", "price": 918},
                  {"id": 180, "title": "315mm", "price": 1268}
                ]
              },
              {
                "id": 181,
                "title": "North West",
                "price": 862.75,
                "children": [
                  {"id": 182, "title": "110mm", "price": 490},
                  {"id": 183, "title": "160mm", "price": 610},
                  {"id": 184, "title": "250mm", "price": 988},
                  {"id": 185, "title": "315mm", "price": 1363}
                ]
              },
              {
                "id": 186,
                "title": "Free State",
                "price": 851.50,
                "children": [
                  {"id": 187, "title": "110mm", "price": 487},
                  {"id": 188, "title": "160mm", "price": 603},
                  {"id": 189, "title": "250mm", "price": 971},
                  {"id": 190, "title": "315mm", "price": 1345}
                ]
              },
              {
                "id": 191,
                "title": "KwaZulu Natal",
                "price": 854.00,
                "children": [
                  {"id": 192, "title": "110mm", "price": 484},
                  {"id": 193, "title": "160mm", "price": 603},
                  {"id": 194, "title": "250mm", "price": 980},
                  {"id": 195, "title": "315mm", "price": 1349}
                ]
              },
              {
                "id": 196,
                "title": "Mpumalanga",
                "price": 750.25,
                "children": [
                  {"id": 197, "title": "110mm", "price": 428},
                  {"id": 198, "title": "160mm", "price": 532},
                  {"id": 199, "title": "250mm", "price": 859},
                  {"id": 200, "title": "315mm", "price": 1182}
                ]
              },
              {
                "id": 201,
                "title": "Northern Cape",
                "price": 887.25,
                "children": [
                  {"id": 202, "title": "110mm", "price": 502},
                  {"id": 203, "title": "160mm", "price": 627},
                  {"id": 204, "title": "250mm", "price": 1017},
                  {"id": 205, "title": "315mm", "price": 1403}
                ]
              },
              {
                "id": 206,
                "title": "Western Cape",
                "price": 955.75,
                "children": [
                  {"id": 207, "title": "110mm", "price": 541},
                  {"id": 208, "title": "160mm", "price": 674},
                  {"id": 209, "title": "250mm", "price": 1095},
                  {"id": 210, "title": "315mm", "price": 1513}
                ]
              },
              {
                "id": 211,
                "title": "Eastern Cape",
                "price": 869.50,
                "children": [
                  {"id": 212, "title": "110mm", "price": 494},
                  {"id": 213, "title": "160mm", "price": 614},
                  {"id": 214, "title": "250mm", "price": 996},
                  {"id": 215, "title": "315mm", "price": 1374}
                ]
              }
            ]
          }
        ]
      },
      {
        "id": 300,
        "title": "Steel Pipeline",
        "price": 2629290.10,
        "children": [
          {
            "id": 301,
            "title": "Capital Cost",
            "price": 7887836.80,
            "children": [
              {
                "id": 302,
                "title": "Soft soil excavation",
                "price": 7492413.0,
                "children": [
                  {"id": 933, "title": "Very small (1000 people)", "price": 1128347.5},
                  {"id": 934, "title": "Small (5000 people)", "price": 2154413.3},
                  {"id": 935, "title": "Medium (20000 people)", "price": 7997314.4},
                  {"id": 936, "title": "Large (50000 people)", "price": 18689576.6}
                ]
              },
              {
                "id": 303,
                "title": "Moderate soil hardness (10% ripping)",
                "price": 9740136.5,
                "children": [
                  {"id": 937, "title": "Very small (1000 people)", "price": 1466851.4},
                  {"id": 938, "title": "Small (5000 people)", "price": 2800737.0},
                  {"id": 939, "title": "Medium (20000 people)", "price": 10396508.2},
                  {"id": 940, "title": "Large (50000 people)", "price": 24296449.5}
                ]
              },
              {
                "id": 304,
                "title": "Hard soil excavation (15% ripping, 5% blasting)",
                "price": 11987860.0,
                "children": [
                  {"id": 941, "title": "Very small (1000 people)", "price": 1805355.2},
                  {"id": 942, "title": "Small (5000 people)", "price": 3447060.6},
                  {"id": 943, "title": "Medium (20000 people)", "price": 12795701.9},
                  {"id": 944, "title": "Large (50000 people)", "price": 29903322.3}
                ]
              },
              {
                "id": 305,
                "title": "Average capital cost",
                "price": 9740136.5,
                "children": [
                  {"id": 945, "title": "Very small (1000 people)", "price": 1466851.4},
                  {"id": 946, "title": "Small (5000 people)", "price": 2800737.0},
                  {"id": 947, "title": "Medium (20000 people)", "price": 10396508.2},
                  {"id": 948, "title": "Large (50000 people)", "price": 24296449.5}
                ]
              },
              {
                "id": 306,
                "title": "Average capital cost per km",
                "price": 478571.55,
                "children": [
                  {"id": 949, "title": "Very small (1000 people)", "price": 193370.9},
                  {"id": 950, "title": "Small (5000 people)", "price": 350092.7},
                  {"id": 951, "title": "Medium (20000 people)", "price": 611558.6},
                  {"id": 952, "title": "Large (50000 people)", "price": 759264.0}
                ]
              }
            ]
          },
          {
            "id": 310,
            "title": "Maintenance Cost",
            "price": 37.90,
            "children": [
              {
                "id": 311,
                "title": "Soft soil excavation",
                "price": 29.15,
                "children": [
                  {"id": 953, "title": "Very small (1000 people)", "price": 56.4},
                  {"id": 954, "title": "Small (5000 people)", "price": 21.5},
                  {"id": 955, "title": "Medium (20000 people)", "price": 20.0},
                  {"id": 956, "title": "Large (50000 people)", "price": 18.7}
                ]
              },
              {
                "id": 312,
                "title": "Moderate soil hardness (10% ripping)",
                "price": 37.90,
                "children": [
                  {"id": 957, "title": "Very small (1000 people)", "price": 73.3},
                  {"id": 958, "title": "Small (5000 people)", "price": 28.0},
                  {"id": 959, "title": "Medium (20000 people)", "price": 26.0},
                  {"id": 960, "title": "Large (50000 people)", "price": 24.3}
                ]
              },
              {
                "id": 313,
                "title": "Hard soil excavation (15% ripping, 5% blasting)",
                "price": 46.68,
                "children": [
                  {"id": 961, "title": "Very small (1000 people)", "price": 90.3},
                  {"id": 962, "title": "Small (5000 people)", "price": 34.5},
                  {"id": 963, "title": "Medium (20000 people)", "price": 32.0},
                  {"id": 964, "title": "Large (50000 people)", "price": 29.9}
                ]
              },
              {
                "id": 314,
                "title": "Average maintenance cost",
                "price": 37.90,
                "children": [
                  {"id": 965, "title": "Very small (1000 people)", "price": 73.3},
                  {"id": 966, "title": "Small (5000 people)", "price": 28.0},
                  {"id": 967, "title": "Medium (20000 people)", "price": 26.0},
                  {"id": 968, "title": "Large (50000 people)", "price": 24.3}
                ]
              }
            ]
          },
          {
            "id": 320,
            "title": "Operation Cost",
            "price": 8.88,
            "children": [
              {
                "id": 321,
                "title": "Soft soil excavation",
                "price": 8.88,
                "children": [
                  {"id": 969, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 970, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 971, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 972, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 322,
                "title": "Moderate soil hardness (10% ripping)",
                "price": 8.88,
                "children": [
                  {"id": 973, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 974, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 975, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 976, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 323,
                "title": "Hard soil excavation (15% ripping, 5% blasting)",
                "price": 8.88,
                "children": [
                  {"id": 977, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 978, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 979, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 980, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 324,
                "title": "Average operation cost",
                "price": 8.88,
                "children": [
                  {"id": 981, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 982, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 983, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 984, "title": "Large (50000 people)", "price": 2.8}
                ]
              }
            ]
          }
        ]
      },
      {
        "id": 600,
        "title": "GRP Pipeline",
        "price": 2167620.71,
        "children": [
          {
            "id": 601,
            "title": "Capital Cost",
            "price": 6492734.96,
            "children": [
              {
                "id": 602,
                "title": "Soft Soil Excavation",
                "price": 5993930.4,
                "children": [
                  {"id": 603, "title": "Very Small (1000 people)", "price": 902678.3},
                  {"id": 605, "title": "Small (5000 people)", "price": 1723530.3},
                  {"id": 607, "title": "Medium (20000 people)", "price": 6397850.9},
                  {"id": 609, "title": "Large (50000 people)", "price": 14951661.9}
                ]
              },
              {
                "id": 611,
                "title": "Moderate Soil Hardness (10% Ripping)",
                "price": 7792109.0,
                "children": [
                  {"id": 612, "title": "Very Small (1000 people)", "price": 1173480.5},
                  {"id": 614, "title": "Small (5000 people)", "price": 2240589.3},
                  {"id": 616, "title": "Medium (20000 people)", "price": 8317205.9},
                  {"id": 618, "title": "Large (50000 people)", "price": 19437159.3}
                ]
              },
              {
                "id": 620,
                "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
                "price": 9590288.3,
                "children": [
                  {"id": 621, "title": "Very Small (1000 people)", "price": 1444284.2},
                  {"id": 623, "title": "Small (5000 people)", "price": 2757648.2},
                  {"id": 625, "title": "Medium (20000 people)", "price": 10236562.4},
                  {"id": 627, "title": "Large (50000 people)", "price": 23922658.2}
                ]
              },
              {
                "id": 629,
                "title": "Average Capital Cost",
                "price": 7792109.0,
                "children": [
                  {"id": 630, "title": "Very Small (1000 people)", "price": 1173480.5},
                  {"id": 632, "title": "Small (5000 people)", "price": 2240589.3},
                  {"id": 634, "title": "Medium (20000 people)", "price": 8317205.9},
                  {"id": 636, "title": "Large (50000 people)", "price": 19437159.3}
                ]
              },
              {
                "id": 694,
                "title": "Average Capital Cost per km",
                "price": 1345678.5,
                "children": [
                  {"id": 695, "title": "Very Small (1000 people)", "price": 234567.8},
                  {"id": 697, "title": "Small (5000 people)", "price": 456789.1},
                  {"id": 699, "title": "Medium (20000 people)", "price": 1234567.9},
                  {"id": 701, "title": "Large (50000 people)", "price": 3456789.2}
                ]
              }
            ]
          },
          {
            "id": 703,
            "title": "Maintenance Cost",
            "price": 30.33,
            "children": [
              {
                "id": 704,
                "title": "Soft soil excavation",
                "price": 23.33,
                "children": [
                  {"id": 705, "title": "Very small (1000 people)", "price": 45.1},
                  {"id": 706, "title": "Small (5000 people)", "price": 17.2},
                  {"id": 707, "title": "Medium (20000 people)", "price": 16.0},
                  {"id": 708, "title": "Large (50000 people)", "price": 15.0}
                ]
              },
              {
                "id": 709,
                "title": "Moderate soil hardness (10% ripping)",
                "price": 30.33,
                "children": [
                  {"id": 710, "title": "Very small (1000 people)", "price": 58.7},
                  {"id": 711, "title": "Small (5000 people)", "price": 22.4},
                  {"id": 712, "title": "Medium (20000 people)", "price": 20.8},
                  {"id": 713, "title": "Large (50000 people)", "price": 19.4}
                ]
              },
              {
                "id": 714,
                "title": "Hard soil excavation (15% ripping, 5% blasting)",
                "price": 37.33,
                "children": [
                  {"id": 715, "title": "Very small (1000 people)", "price": 72.2},
                  {"id": 716, "title": "Small (5000 people)", "price": 27.6},
                  {"id": 717, "title": "Medium (20000 people)", "price": 25.6},
                  {"id": 718, "title": "Large (50000 people)", "price": 23.9}
                ]
              },
              {
                "id": 719,
                "title": "Average maintenance cost",
                "price": 30.33,
                "children": [
                  {"id": 720, "title": "Very small (1000 people)", "price": 58.7},
                  {"id": 721, "title": "Small (5000 people)", "price": 22.4},
                  {"id": 722, "title": "Medium (20000 people)", "price": 20.8},
                  {"id": 723, "title": "Large (50000 people)", "price": 19.4}
                ]
              }
            ]
          },
          {
            "id": 724,
            "title": "Operation Cost",
            "price": 8.88,
            "children": [
              {
                "id": 725,
                "title": "Soft soil excavation",
                "price": 8.88,
                "children": [
                  {"id": 726, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 727, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 728, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 729, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 730,
                "title": "Moderate soil hardness (10% ripping)",
                "price": 8.88,
                "children": [
                  {"id": 731, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 732, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 733, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 734, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 735,
                "title": "Hard soil excavation (15% ripping, 5% blasting)",
                "price": 8.88,
                "children": [
                  {"id": 736, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 737, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 738, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 739, "title": "Large (50000 people)", "price": 2.8}
                ]
              },
              {
                "id": 740,
                "title": "Average operation cost",
                "price": 8.88,
                "children": [
                  {"id": 741, "title": "Very small (1000 people)", "price": 22.0},
                  {"id": 742, "title": "Small (5000 people)", "price": 7.0},
                  {"id": 743, "title": "Medium (20000 people)", "price": 3.7},
                  {"id": 744, "title": "Large (50000 people)", "price": 2.8}
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  
  
];


// Helper function to search through the tree for nodes matching a term
export const searchProjectTree = (
  searchTerm: string,
  nodes: ProjectTreeNode[] = projectTreeData,
  path: string[] = []
): Array<{ node: ProjectTreeNode; path: string[] }> => {
  let results: Array<{ node: ProjectTreeNode; path: string[] }> = [];

  for (const node of nodes) {
    const currentPath = [...path, node.title];

    // Check if the current node matches the search term
    if (node.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      results.push({ node, path: currentPath });
    }

    // Search through children if they exist
    if (node.children && node.children.length > 0) {
      const childResults = searchProjectTree(searchTerm, node.children, currentPath);
      results = [...results, ...childResults];
    }
  }

  return results;
};

// Helper function to find a node by ID
export const findNodeById = (
  id: string,
  nodes: ProjectTreeNode[] = projectTreeData,
  path: string[] = []
): { node: ProjectTreeNode | null; path: string[] } => {
  for (const node of nodes) {
    const currentPath = [...path, node.title];

    if (node.id === id) {
      return { node, path: currentPath };
    }

    if (node.children && node.children.length > 0) {
      const result = findNodeById(id, node.children, currentPath);
      if (result.node) {
        return result;
      }
    }
  }

  return { node: null, path: [] };
};