
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
}{
    "id": 1,
    "title": "Surface Water Dams",
    "children": [
        {
            "id": 2,
            "title": "Earth Fill",
            "children": [
                {
                    "id": 3,
                    "title": "Dam Wall",
                    "children": [
                        {
                            "id": 4,
                            "title": "Very Small",
                            "price": 1530494
                        },
                        {
                            "id": 5,
                            "title": "Small",
                            "price": 3556586
                        },
                        {
                            "id": 6,
                            "title": "Medium",
                            "price": 10520462
                        },
                        {
                            "id": 7,
                            "title": "Large",
                            "price": 21613502
                        }
                    ]
                },
                {
                    "id": 8,
                    "title": "Spillway",
                    "children": [
                        {
                            "id": 9,
                            "title": "Very Small",
                            "price": 310958
                        },
                        {
                            "id": 10,
                            "title": "Small",
                            "price": 793911
                        },
                        {
                            "id": 11,
                            "title": "Medium",
                            "price": 2203721
                        },
                        {
                            "id": 12,
                            "title": "Large",
                            "price": 4256365
                        }
                    ]
                },
                {
                    "id": 13,
                    "title": "Earth Fill Sum",
                    "children": [
                        {
                            "id": 14,
                            "title": "Very Small",
                            "price": 1841452
                        },
                        {
                            "id": 15,
                            "title": "Small",
                            "price": 4350497
                        },
                        {
                            "id": 16,
                            "title": "Medium",
                            "price": 12724183
                        },
                        {
                            "id": 17,
                            "title": "Large",
                            "price": 25869867
                        }
                    ]
                }
            ]
        },
        {
            "id": 18,
            "title": "Rock Fill",
            "children": [
                {
                    "id": 19,
                    "title": "Dam Wall",
                    "children": [
                        {
                            "id": 20,
                            "title": "Very Small",
                            "price": 1464302
                        },
                        {
                            "id": 21,
                            "title": "Small",
                            "price": 3874868
                        },
                        {
                            "id": 22,
                            "title": "Medium",
                            "price": 10704473
                        },
                        {
                            "id": 23,
                            "title": "Large",
                            "price": 22457126
                        }
                    ]
                },
                {
                    "id": 24,
                    "title": "Spillway",
                    "children": [
                        {
                            "id": 25,
                            "title": "Very Small",
                            "price": 355823
                        },
                        {
                            "id": 26,
                            "title": "Small",
                            "price": 780823
                        },
                        {
                            "id": 27,
                            "title": "Medium",
                            "price": 2775714
                        },
                        {
                            "id": 28,
                            "title": "Large",
                            "price": 4776045
                        }
                    ]
                },
                {
                    "id": 29,
                    "title": "Rock Fill Sum",
                    "children": [
                        {
                            "id": 30,
                            "title": "Very Small",
                            "price": 1810125
                        },
                        {
                            "id": 31,
                            "title": "Small",
                            "price": 4655691
                        },
                        {
                            "id": 32,
                            "title": "Medium",
                            "price": 13480187
                        },
                        {
                            "id": 33,
                            "title": "Large",
                            "price": 27233171
                        }
                    ]
                }
            ]
        },
        {
            "id": 34,
            "title": "Roll Crete",
            "children": [
                {
                    "id": 35,
                    "title": "Dam Wall",
                    "children": [
                        {
                            "id": 36,
                            "title": "Very Small",
                            "price": 1987519
                        },
                        {
                            "id": 37,
                            "title": "Small",
                            "price": 5636619
                        },
                        {
                            "id": 38,
                            "title": "Medium",
                            "price": 16436708
                        },
                        {
                            "id": 39,
                            "title": "Large",
                            "price": 35645020
                        }
                    ]
                },
                {
                    "id": 40,
                    "title": "Spillway",
                    "children": [
                        {
                            "id": 41,
                            "title": "Very Small",
                            "price": 12690.8
                        },
                        {
                            "id": 42,
                            "title": "Small",
                            "price": 17259
                        },
                        {
                            "id": 43,
                            "title": "Medium",
                            "price": 28427
                        },
                        {
                            "id": 44,
                            "title": "Large",
                            "price": 33504
                        }
                    ]
                },
                {
                    "id": 45,
                    "title": "Roll Crete Sum",
                    "children": [
                        {
                            "id": 46,
                            "title": "Very Small",
                            "price": 2000210.8
                        },
                        {
                            "id": 47,
                            "title": "Small",
                            "price": 5653878
                        },
                        {
                            "id": 48,
                            "title": "Medium",
                            "price": 16465135
                        },
                        {
                            "id": 49,
                            "title": "Large",
                            "price": 35678524
                        }
                    ]
                }
            ]
        }
    ]
}{
  "id": "wtw-001",
  "title": "Water Treatment Works",
  "children": [
    {
      "id": "wtw-001-01",
      "title": "Package Plant",
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
  ]
{
  "id": "res-0001-01",
  "title": "Reservoirs",
  "children": [
    {
      "id": "res-001-01",
      "title": "Ground reservoir",
      "children": [
        {
          "id": "res-001-01-01",
          "title": "Costs",
          "children": [
            {
              "id": "res-001-01-01-01",
              "title": "Brick",
              "children": [
                {
                  "id": "res-001-01-01-01-01",
                  "title": "Very Small (60 kl)",
                  "price": 238046
                },
                {
                  "id": "res-001-01-01-01-02",
                  "title": "Small (300 kl)",
                  "price": 920013
                },
                {
                  "id": "res-001-01-01-01-03",
                  "title": "Medium (1300 kl)",
                  "price": 3153006
                },
                {
                  "id": "res-001-01-01-01-04",
                  "title": "Large (3200 kl)",
                  "price": 6719520
                }
              ]
            },
            {
              "id": "res-001-01-01-02",
"title": "Concrete",
              "children": [
                {
                  "id": "res-001-01-01-02-01",
                  "title": "Very Small (60 kl)",
                  "price": 253302
                },
                {
                  "id": "res-001-01-01-02-02",
                  "title": "Small (300 kl)",
                  "price": 873266
                },
                {
                  "id": "res-001-01-01-02-03",
                  "title": "Medium (1300 kl)",
                  "price": 4164378
                },
                {
                  "id": "res-001-01-01-02-04",
                  "title": "Large (3200 kl)",
                  "price": 5391393
                }
              ]
            },
            {
              "id": "res-001-01-01-03",
              "title": "Steel",
              "children": [
                {
                  "id": "res-001-01-01-03-01",
                  "title": "Very Small (60 kl)",
                  "price": 222396
                },
                {
                  "id": "res-001-01-01-03-02",
                  "title": "Small (300 kl)",
                  "price": 946677
                },
{
                  "id": "res-001-01-01-03-03",
                  "title": "Medium (1300 kl)",
                  "price": 3542759
                },
                {
                  "id": "res-001-01-01-03-04",
                  "title": "Large (3200 kl)",
                  "price": 7969435
                }
              ]
            },
            {
              "id": "res-001-01-01-04",
              "title": "PE",
              "children": [
                {
                  "id": "res-001-01-01-04-01",
                  "title": "Very Small (60 kl)",
                  "price": 157263
                },
                {
                  "id": "res-001-01-01-04-02",
                  "title": "Small (300 kl)",
                  "price": 686087
                },
                {
                  "id": "res-001-01-01-04-03",
                  "title": "Medium (1300 kl)",
                  "price": 2889522
                },
                {
                  "id": "res-001-01-01-04-04",
                  "title": "Large (3200 kl)",
                  "price": 7076048
                }
              ]
            }
          ]
        },
{
          "id": "res-001-01-02",
          "title": "Maintenance Costs",
          "children": [
            {
              "id": "res-001-01-02-01",
              "title": "Brick",
              "children": [
                {
                  "id": "res-001-01-02-01-01",
                  "title": "Very Small (60 kl)",
                  "price": 47.6
                },
                {
                  "id": "res-001-01-02-01-02",
                  "title": "Small (300 kl)",
                  "price": 36.8
                },
                {
                  "id": "res-001-01-02-01-03",
                  "title": "Medium (1300 kl)",
                  "price": 31.5
                },
                {
                  "id": "res-001-01-02-01-04",
                  "title": "Large (3200 kl)",
                  "price": 26.9
                }
              ]
            },
            {
              "id": "res-001-01-02-02",
              "title": "Concrete",
              "children": [
                {
                  "id": "res-001-01-02-02-01",
                  "title": "Very Small (60 kl)",
                  "price": 25.3
                },
{
                  "id": "res-001-01-02-02-02",
                  "title": "Small (300 kl)",
                  "price": 17.5
                },
                {
                  "id": "res-001-01-02-02-03",
                  "title": "Medium (1300 kl)",
                  "price": 56.8
                },
                {
                  "id": "res-001-01-02-02-04",
                  "title": "Large (3200 kl)",
                  "price": 13.5
                }
              ]
            },
            {
              "id": "res-001-01-02-03",
              "title": "Steel",
              "children": [
                {
                  "id": "res-001-01-02-03-01",
                  "title": "Very Small (60 kl)",
                  "price": 66.7
                },
                {
                  "id": "res-001-01-02-03-02",
                  "title": "Small (300 kl)",
                  "price": 27.4
                },
                {
                  "id": "res-001-01-02-03-03",
                  "title": "Medium (1300 kl)",
                  "price": 10.8
                },
                {
                  "id": "res-001-01-02-03-04",
                  "title": "Large (3200 kl)",
                  "price": 53.1
}
              ]
            },
            {
              "id": "res-001-01-02-04",
              "title": "PE",
              "children": [
                {
                  "id": "res-001-01-02-04-01",
                  "title": "Very Small (60 kl)",
                  "price": 31.4
                },
                {
                  "id": "res-001-01-02-04-02",
                  "title": "Small (300 kl)",
                  "price": 28.9
                },
                {
                  "id": "res-001-01-02-04-03",
                  "title": "Medium (1300 kl)",
                  "price": 28.3
                },
                {
                  "id": "res-001-01-02-04-04",
                  "title": "Large (3200 kl)",
                  "price": 47.8
                }
              ]
            }
          ]
        },
        {
          "id": "res-001-01-03",
          "title": "Operational Costs",
          "children": [
            {
              "id": "res-001-01-03-01",
              "title": "Brick",
"children": [
                {
                  "id": "res-001-01-03-01-01",
                  "title": "Very Small (60 kl)",
                  "price": 22.0
                },
                {
                  "id": "res-001-01-03-01-02",
                  "title": "Small (300 kl)",
                  "price": 4.4
                },
                {
                  "id": "res-001-01-03-01-03",
                  "title": "Medium (1300 kl)",
                  "price": 1.1
                },
                {
                  "id": "res-001-01-03-01-04",
                  "title": "Large (3200 kl)",
                  "price": 0.4
                }
              ]
            },
            {
              "id": "res-001-01-03-02",
              "title": "Concrete",
              "children": [
                {
                  "id": "res-001-01-03-02-01",
                  "title": "Very Small (60 kl)",
                  "price": 22.0
                },
                {
                  "id": "res-001-01-03-02-02",
                  "title": "Small (300 kl)",
                  "price": 4.4
                },
                {
                  "id": "res-001-01-03-02-03",
                  "title": "Medium (1300 kl)",
"price": 1.1
                },
                {
                  "id": "res-001-01-03-02-04",
                  "title": "Large (3200 kl)",
                  "price": 0.4
                }
              ]
            },
            {
              "id": "res-001-01-03-03",
              "title": "PE",
              "children": [
                {
                  "id": "res-001-01-03-03-01",
                  "title": "Very Small (60 kl)",
                  "price": 22.0
                },
                {
                  "id": "res-001-01-03-03-02",
                  "title": "Small (300 kl)",
                  "price": 4.4
                },
                {
                  "id": "res-001-01-03-03-03",
                  "title": "Medium (1300 kl)",
                  "price": 1.1
                },
                {
                  "id": "res-001-01-03-03-04",
                  "title": "Large (3200 kl)",
                  "price": 0.4
                }
              ]
            }
          ]
        }
      ]
  }"id": "res-001-02",
    "title": "Elevated Reservoir Costs",
    "children": [
      {
        "id": "res-001-02-01",
        "title": "Costs",
        "children": [
          {
            "id": "res-001-02-01-01",
            "title": "Steel",
            "children": [
              {
                "id": "res-001-02-01-01-01",
                "title": "Very Small (32 kl)",
                "price": 284728
              },
              {
                "id": "res-001-02-01-01-02",
                "title": "Small (159 kl)",
                "price": 501134
              },
              {
                "id": "res-001-02-01-01-03",
                "title": "Medium (635 kl)",
                "price": 1312660
              },
              {
                "id": "res-001-02-01-01-04",
                "title": "Large (1588 kl)",
                "price": 2935710
              }
            ]
          },
          {
            "id": "res-001-02-01-02",
            "title": "Concrete",
            "children": [
              {
                "id": "res-001-02-01-02-01",
"title": "Very Small (32 kl)",
                "price": 711813
              },
              {
                "id": "res-001-02-01-02-02",
                "title": "Small (159 kl)",
                "price": 1252829
              },
              {
                "id": "res-001-02-01-02-03",
                "title": "Medium (635 kl)",
                "price": 3281803
              },
              {
                "id": "res-001-02-01-02-04",
                "title": "Large (1588 kl)",
                "price": 7339266
              }
            ]
          },
          {
            "id": "res-001-02-01-03",
            "title": "PE",
            "children": [
              {
                "id": "res-001-02-01-03-01",
                "title": "Very Small (32 kl)",
                "price": 183379
              },
              {
                "id": "res-001-02-01-03-02",
                "title": "Small (159 kl)",
                "price": 681860
              },
              {
                "id": "res-001-02-01-03-03",
                "title": "Medium (635 kl)",
                "price": 2551166
              },
{
                "id": "res-001-02-01-03-04",
                "title": "Large (1588 kl)",
                "price": 6289778
              }
            ]
          }
        ]
      },
      {
        "id": "res-001-02-02",
        "title": "Maintenance Costs",
        "children": [
          {
            "id": "res-001-02-02-01",
            "title": "Steel",
            "children": [
              {
                "id": "res-001-02-02-01-01",
                "title": "Very Small (32 kl)",
                "price": 106.8
              },
              {
                "id": "res-001-02-02-01-02",
                "title": "Small (159 kl)",
                "price": 37.6
              },
              {
                "id": "res-001-02-02-01-03",
                "title": "Medium (635 kl)",
                "price": 24.6
              },
              {
                "id": "res-001-02-02-01-04",
                "title": "Large (1588 kl)",
                "price": 22.0
}
            ]
          },
          {
            "id": "res-001-02-02-02",
            "title": "Concrete",
            "children": [
              {
                "id": "res-001-02-02-02-01",
                "title": "Very Small (32 kl)",
                "price": 85.4
              },
              {
                "id": "res-001-02-02-02-02",
                "title": "Small (159 kl)",
                "price": 30.1
              },
              {
                "id": "res-001-02-02-02-03",
                "title": "Medium (635 kl)",
                "price": 19.7
              },
              {
                "id": "res-001-02-02-02-04",
                "title": "Large (1588 kl)",
                "price": 17.6
              }
            ]
          },
          {
            "id": "res-001-02-02-03",
            "title": "PE",
            "children": [
              {
                "id": "res-001-02-02-03-01",
                "title": "Very Small (32 kl)",
                "price": 183.4
              },
{
                "id": "res-001-02-02-03-02",
                "title": "Small (159 kl)",
                "price": 136.4
              },
              {
                "id": "res-001-02-02-03-03",
                "title": "Medium (635 kl)",
                "price": 127.6
              },
              {
                "id": "res-001-02-02-03-04",
                "title": "Large (1588 kl)",
                "price": 125.8
              }
            ]
          }
        ]
      },
      {
        "id": "res-001-02-03",
        "title": "Operational Costs",
        "children": [
          {
            "id": "res-001-02-03-01",
            "title": "Steel",
            "children": [
              {
                "id": "res-001-02-03-01-01",
                "title": "Very Small (32 kl)",
                "price": 22.0
              },
              {
                "id": "res-001-02-03-01-02",
                "title": "Small (159 kl)",
                "price": 4.4
              },
              {
                "id": "res-001-02-03-01-03",
                "title": "Medium (635 kl)",
  "price": 1.1
              },
              {
                "id": "res-001-02-03-01-04",
                "title": "Large (1588 kl)",
                "price": 0.44
              }
            ]
          },
          {
            "id": "res-001-02-03-02",
            "title": "PE",
            "children": [
              {
                "id": "res-001-02-03-02-01",
                "title": "Very Small (32 kl)",
                "price": 44.0
              },
              {
                "id": "res-001-02-03-02-02",
                "title": "Small (159 kl)",
                "price": 8.8
              },
              {
                "id": "res-001-02-03-02-03",
                "title": "Medium (635 kl)",
                "price": 2.2
              },
              {
                "id": "res-001-02-03-02-04",
                "title": "Large (1588 kl)",
                "price": 0.88
              }
            ]
          }
        ]
      }
    ]
  }
{
    "id": "pump-station",
    "title": "Pump Station",
    "children": [
        {
            "id": "diesel",
            "title": "Diesel",
            "children": [
                {
                    "id": "scheme-size",
                    "title": "Scheme Size",
                    "children": [
                        {
                            "id": "very-small",
                            "title": "Very Small (1000 people)",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 5.1},
                                {"id": "energy-source", "title": "Energy Source", "price": 23.2},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.5},
                                {"id": "total", "title": "Total per Household", "price": 28.7}
                            ]
                        },
                        {
                            "id": "small",
                            "title": "Small (5000 people)",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 3.4},
                                {"id": "energy-source", "title": "Energy Source", "price": 6.9},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.3},
                                {"id": "total", "title": "Total per Household", "price": 10.6}
                            ]
                        },
                        {
                            "id": "medium",
                            "title": "Medium (20000 people)",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 2.4},
                                {"id": "energy-source", "title": "Energy Source", "price": 3.8},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.2},
                                {"id": "total", "title": "Total per Household", "price": 6.4}
                            ]
                        },
                        {
                            "id": "large",
                            "title": "Large (50000 people)",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 1.9},
                                {"id": "energy-source", "title": "Energy Source", "price": 3.2},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.2},
                                {"id": "total", "title": "Total per Household", "price": 5.3}
                            ]
                        }
                    ]
                },
                {
                    "id": "building-per-scheme-size",
                    "title": "Building per Scheme Size",
                    "children": [
                        {
                            "id": "very-small",
                            "title": "Very Small",
                            "children": [
                                {"id": "prefabricated-zinc", "title": "Prefabricated Zinc", "price": 709.9},
                                {"id": "brick", "title": "Brick", "price": 1325.2},
                                {"id": "concrete", "title": "Concrete", "price": 1610.2},
                                {"id": "pumphouse-cost", "title": "Pumphouse Building Cost", "price": 1215.1}
                            ]
                        },
                        {
                            "id": "small",
                            "title": "Small",
                            "children": [
                                {"id": "prefabricated-zinc", "title": "Prefabricated Zinc", "price": 142},
                                {"id": "brick", "title": "Brick", "price": 265},
                                {"id": "concrete", "title": "Concrete", "price": 322},
                                {"id": "pumphouse-cost", "title": "Pumphouse Building Cost", "price": 243}
                            ]
                        },
                        {
                            "id": "medium",
                            "title": "Medium",
                            "children": [
                                {"id": "prefabricated-zinc", "title": "Prefabricated Zinc", "price": 35.5},
                                {"id": "brick", "title": "Brick", "price": 66.3},
                                {"id": "concrete", "title": "Concrete", "price": 80.5},
                                {"id": "pumphouse-cost", "title": "Pumphouse Building Cost", "price": 60.8}
                            ]
                        },
                        {
                            "id": "large-1NoPS",
                            "title": "Large (1NoPS)",
                            "children": [
                                {"id": "prefabricated-zinc", "title": "Prefabricated Zinc", "price": 14.2},
                                {"id": "brick", "title": "Brick", "price": 26.5},
                                {"id": "concrete", "title": "Concrete", "price": 32.2},
                                {"id": "pumphouse-cost", "title": "Pumphouse Building Cost", "price": 24.3}
                            ]
                        },
                        {
                            "id": "large-2NoPS",
                            "title": "Large (2NoPS)",
                            "children": [
                                {"id": "prefabricated-zinc", "title": "Prefabricated Zinc", "price": 28.4},
                                {"id": "brick", "title": "Brick", "price": 53.0},
                                {"id": "concrete", "title": "Concrete", "price": 64.4},
                                {"id": "pumphouse-cost", "title": "Pumphouse Building Cost", "price": 48.6}
                            ]
                        }
                    ]
                },
                {
            "id": "cost-per-household",
            "title": "Cost per Household",
            "children": [
                {
                    "id": "very-small",
                    "title": "Very Small (1000 people)",
                    "children": [
                        {"id": "energy-source", "title": "Energy Source", "price": 23.2},
                        {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 5.1},
                        {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.5},
                        {"id": "total", "title": "Total per Household", "price": 28.7}
                    ]
                },
                {
                    "id": "small",
                    "title": "Small (5000 people)",
                    "children": [
                        {"id": "energy-source", "title": "Energy Source", "price": 6.9},
                        {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 3.4},
                        {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.3},
                        {"id": "total", "title": "Total per Household", "price": 10.6}
                    ]
                },
                {
                    "id": "medium",
                    "title": "Medium (20000 people)",
                    "children": [
                        {"id": "energy-source", "title": "Energy Source", "price": 3.8},
                        {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 2.4},
                        {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.2},
                        {"id": "total", "title": "Total per Household", "price": 6.4}
                    ]
                },
                {
                    "id": "large",
                    "title": "Large (50000 people)",
                    "children": [
                        {"id": "energy-source", "title": "Energy Source", "price": 3.2},
                        {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 1.9},
                        {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.2},
                        {"id": "total", "title": "Total per Household", "price": 5.3}
                    ]
                }
            ]
          },
                {
                    "id": "diesel-cost",
                    "title": "Diesel Cost",
                    "children": [
                        {"id": "very-small", "title": "Very Small (1000 people)", "price": 192.2},
                        {"id": "small", "title": "Small (5000 people)", "price": 164.4},
                        {"id": "medium", "title": "Medium (20000 people)", "price": 160},
                        {"id": "large", "title": "Large (50000 people)", "price": 158.5}
                    ]
                }
            ]
        },
              {
                    "id": "scheme-size",
                    "title": "Scheme Size",
                    "children": [
                        {
                            "id": "very-small",
                            "title": "Very Small (1000 people)",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 74.8},
                                {"id": "energy-source", "title": "Energy Source", "price": 156.4},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 68.5},
                                {"id": "total", "title": "Total per Household", "price": 299.7}
                            ]
                        },
                        {
                            "id": "small",
                            "title": "Small (5000 people)",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 49.7},
                                {"id": "energy-source", "title": "Energy Source", "price": 54.4},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 46.6},
                                {"id": "total", "title": "Total per Household", "price": 150.7}
                            ]
                        },
                        {
                            "id": "medium",
                            "title": "Medium (20000 people)",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 34.9},
                                {"id": "energy-source", "title": "Energy Source", "price": 35.3},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 33.4},
                                {"id": "total", "title": "Total per Household", "price": 103.6}
                            ]
                        },
                        {
                            "id": "large",
                            "title": "Large (50000 people)",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 27.7},
                                {"id": "energy-source", "title": "Energy Source", "price": 31.5},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 26.8},
                                {"id": "total", "title": "Total per Household", "price": 86.0}
                            ]
                        }
                    ]
                },
         {
                    "id": "material",
                    "title": "Material",
                    "children": [
                        {
                            "id": "very-small",
                            "title": "Very Small (1000 people)",
                            "children": [
                                {"id": "prefab-zinc", "title": "Prefabricated Zinc", "price": 709.9},
                                {"id": "brick", "title": "Brick", "price": 1325.2},
                                {"id": "concrete", "title": "Concrete", "price": 1610.2},
                                {"id": "building-cost", "title": "Avg. Pumphouse Building Cost", "price": 1215.1}
                            ]
                        },
                        {
                            "id": "small",
                            "title": "Small (5000 people)",
                            "children": [
                                {"id": "prefab-zinc", "title": "Prefabricated Zinc", "price": 142},
                                {"id": "brick", "title": "Brick", "price": 265},
                                {"id": "concrete", "title": "Concrete", "price": 322},
                                {"id": "building-cost", "title": "Avg. Pumphouse Building Cost", "price": 243}
                            ]
                        },
                        {
                            "id": "medium",
                            "title": "Medium (20000 people)",
                            "children": [
                                {"id": "prefab-zinc", "title": "Prefabricated Zinc", "price": 35.5},
                                {"id": "brick", "title": "Brick", "price": 66.3},
                                {"id": "concrete", "title": "Concrete", "price": 80.5},
                                {"id": "building-cost", "title": "Avg. Pumphouse Building Cost", "price": 60.8}
                            ]
                        },
                        {
                            "id": "large",
                            "title": "Large (50000 people, 1NoPS)",
                            "children": [
                                {"id": "prefab-zinc", "title": "Prefabricated Zinc", "price": 14.2},
                                {"id": "brick", "title": "Brick", "price": 26.5},
                                {"id": "concrete", "title": "Concrete", "price": 32.2},
                                {"id": "building-cost", "title": "Avg. Pumphouse Building Cost", "price": 24.3}
                            ]
                        },
                        {
                            "id": "large-2NoPS",
                            "title": "Large (50000 people, 2NoPS)",
                            "children": [
                                {"id": "prefab-zinc", "title": "Prefabricated Zinc", "price": 28.4},
                                {"id": "brick", "title": "Brick", "price": 53.0},
                                {"id": "concrete", "title": "Concrete", "price": 64.4},
                                {"id": "building-cost", "title": "Avg. Pumphouse Building Cost", "price": 48.6}
                            ]
                        }
                    ]
                }
            
        },
               {
                    "id": "operation-cost",
                    "title": "Operation Cost per Household",
                    "children": [
                        {
                            "id": "very-small",
                            "title": "Very Small (1000 people)",
                            "children": [
                                {"id": "energy-source", "title": "Energy Source", "price": 25.0},
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 7.5},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.7},
                                {"id": "total", "title": "Total", "price": 33.2}
                            ]
                        },
                        {
                            "id": "small",
                            "title": "Small (5000 people)",
                            "children": [
                                {"id": "energy-source", "title": "Energy Source", "price": 8.7},
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 5.0},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.5},
                                {"id": "total", "title": "Total", "price": 14.1}
                            ]
                        },
                        {
                            "id": "medium",
                            "title": "Medium (20000 people)",
                            "children": [
                                {"id": "energy-source", "title": "Energy Source", "price": 5.6},
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 3.5},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.3},
                                {"id": "total", "title": "Total", "price": 9.5}
                            ]
                        },
                        {
                            "id": "large",
                            "title": "Large (50000 people)",
                            "children": [
                                {"id": "energy-source", "title": "Energy Source", "price": 5.0},
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 2.8},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.3},
                                {"id": "total", "title": "Total", "price": 8.1}
                            ]
                        }
                    ]
                },
                {
                    "id": "diesel-cost",
                    "title": "Diesel Operation Cost per Household",
                    "children": [
                        {"id": "very-small", "title": "Very Small (1000 people)", "price": 297.9},
                        {"id": "small", "title": "Small (5000 people)", "price": 270.0},
                        {"id": "medium", "title": "Medium (20000 people)", "price": 264.2},
                        {"id": "large", "title": "Large (50000 people)", "price": 262.7}
                    ]
                }
            ]
        }
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
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 31.8},
                                {"id": "pump-switchgear", "title": "Pump Switchgear", "price": 77.9},
                                {"id": "energy-source", "title": "Energy Source", "price": 99.1},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 28.2},
                                {"id": "total", "title": "Total per Household", "price": 237.0}
                            ]
                        },
                        {
                            "id": "small",
                            "title": "Small (5000 people) - 4kW",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 18.2},
                                {"id": "pump-switchgear", "title": "Pump Switchgear", "price": 20.4},
                                {"id": "energy-source", "title": "Energy Source", "price": 25.1},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 19.2},
                                {"id": "total", "title": "Total per Household", "price": 82.8}
                            ]
                        },
                        {
                            "id": "medium",
                            "title": "Medium (20000 people) - 17kW",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 11.3},
                                {"id": "pump-switchgear", "title": "Pump Switchgear", "price": 9.6},
                                {"id": "energy-source", "title": "Energy Source", "price": 11.0},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 13.8},
                                {"id": "total", "title": "Total per Household", "price": 45.7}
                            ]
                        },
                        {
                            "id": "large",
                            "title": "Large (50000 people) - 42kW",
                            "children": [
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 8.2},
                                {"id": "pump-switchgear", "title": "Pump Switchgear", "price": 7.4},
                                {"id": "energy-source", "title": "Energy Source", "price": 8.6},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 11.0},
                                {"id": "total", "title": "Total per Household", "price": 35.2}
                            ]
                        }
                    ]
                }
                 {
                    "id": "operation-cost",
                    "title": "Operation Cost per Household",
                    "children": [
                        {
                            "id": "very-small",
                            "title": "Very Small (1000 people)",
                            "children": [
                                {"id": "energy-source", "title": "Energy Source", "price": 15.9},
                                {"id": "pump-switchgear", "title": "Pump Switchgear", "price": 12.5},
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 3.2},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.3},
                                {"id": "total", "title": "Total", "price": 31.8}
                            ]
                        },
                        {
                            "id": "small",
                            "title": "Small (5000 people)",
                            "children": [
                                {"id": "energy-source", "title": "Energy Source", "price": 4.0},
                                {"id": "pump-switchgear", "title": "Pump Switchgear", "price": 3.3},
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 1.8},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.2},
                                {"id": "total", "title": "Total", "price": 9.3}
                            ]
                        },
                        {
                            "id": "medium",
                            "title": "Medium (20000 people)",
                            "children": [
                                {"id": "energy-source", "title": "Energy Source", "price": 1.8},
                                {"id": "pump-switchgear", "title": "Pump Switchgear", "price": 1.5},
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 1.1},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.1},
                                {"id": "total", "title": "Total", "price": 4.6}
                            ]
                        },
                        {
                            "id": "large",
                            "title": "Large (50000 people)",
                            "children": [
                                {"id": "energy-source", "title": "Energy Source", "price": 1.4},
                                {"id": "pump-switchgear", "title": "Pump Switchgear", "price": 1.2},
                                {"id": "mechanical-pump", "title": "Mechanical Pump", "price": 0.8},
                                {"id": "pump-pipework", "title": "Pump Pipework", "price": 0.1},
                                {"id": "total", "title": "Total", "price": 3.5}
                            ]
                        }
                    ]
                },
                {
                    "id": "diesel-cost",
                    "title": "Diesel Cost per Household",
                    "children": [
                        {"id": "very-small", "title": "Very Small (1000 people)", "price": 132.1},
                        {"id": "small", "title": "Small (5000 people)", "price": 39.6},
                        {"id": "medium", "title": "Medium (20000 people)", "price": 23.5},
                        {"id": "large", "title": "Large (50000 people)", "price": 20.5}
                    ]
                }
    ],
    
}{
  "id": 1,
  "title": "Pipelines",
  "children": [
    {
      "id": 2,
      "title": "Concrete (Fibre-Cement) Pipeline",
      "children": [
        {
          "id": 3,
          "title": "Capital Cost",
          "children": {
              "id": 4,
              "title": "Soft Soil Excavation",
              "children": [
                { "id": 5, "title": "Very Small (1000 people)", "children": [{ "id": 6, "price": 291838.8 }] },
                { "id": 7, "title": "Small (5000 people)", "children": [{ "id": 8, "price": 640331.9 }] },
                { "id": 9, "title": "Medium (20000 people)", "children": [{ "id": 10, "price": 3702116.5 }] },
                { "id": 11, "title": "Large (50000 people)", "children": [{ "id": 12, "price": 10211780.7 }] }
              ]
            },
            {
              "id": 13,
              "title": "Moderate Soil Hardness (10% Ripping)",
              "children": [
                { "id": 14, "title": "Very Small (1000 people)", "children": [{ "id": 15, "price": 379391.3 }] },
                { "id": 16, "title": "Small (5000 people)", "children": [{ "id": 17, "price": 832432.0 }] },
                { "id": 18, "title": "Medium (20000 people)", "children": [{ "id": 19, "price": 4791766.1 }] },
                { "id": 20, "title": "Large (50000 people)", "children": [{ "id": 21, "price": 13275316.1 }] }
              ]
            },
            {
              "id": 22,
              "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
              "children": [
                { "id": 23, "title": "Very Small (1000 people)", "children": [{ "id": 24, "price": 466942.4 }] },
                { "id": 25, "title": "Small (5000 people)", "children": [{ "id": 26, "price": 892457.2 }] },
                { "id": 27, "title": "Medium (20000 people)", "children": [{ "id": 28, "price": 5897558.2 }] },
                { "id": 29, "title": "Large (50000 people)", "children": [{ "id": 30, "price": 16338850.0 }] }
              ]
            },
            {
              "id": 31,
              "title": "Average Capital Cost",
              "children": [
                { "id": 32, "title": "Very Small (1000 people)", "children": [{ "id": 33, "price": 379391.3 }] },
                { "id": 34, "title": "Small (5000 people)", "children": [{ "id": 35, "price": 832432.0 }] },
                { "id": 36, "title": "Medium (20000 people)", "children": [{ "id": 37, "price": 4791766.1 }] },
                { "id": 38, "title": "Large (50000 people)", "children": [{ "id": 39, "price": 13275316.1 }] }
              ]
            },
            {
              "id": 40,
              "title": "Average Capital Cost Per Km",
              "children": [
                { "id": 41, "title": "Very Small (1000 people)", "children": [{ "id": 42, "price": 75877.1 }] },
                { "id": 43, "title": "Small (5000 people)", "children": [{ "id": 44, "price": 104053.1 }] },
                { "id": 45, "title": "Medium (20000 people)", "children": [{ "id": 46, "price": 281868.6 }] },
                { "id": 47, "title": "Large (50000 people)", "children": [{ "id": 48, "price": 414853.4 }] }
              ]
            }
           ]
        },
        {
          "id": 49,
          "title": "Maintenance Cost",
          "children": [  {
              "id": 50,
              "title": "Soft Soil Excavation",
              "children": [
                { "id": 51, "title": "Very Small (1000 people)", "children": [{ "id": 52, "price": 14.6 }] },
                { "id": 53, "title": "Small (5000 people)", "children": [{ "id": 54, "price": 6.4 }] },
                { "id": 55, "title": "Medium (20000 people)", "children": [{ "id": 56, "price": 9.2 }] },
                { "id": 57, "title": "Large (50000 people)", "children": [{ "id": 58, "price": 10.2 }] }
              ]
            },
            {
              "id": 59,
              "title": "Moderate Soil Hardness (10% Ripping)",
              "children": [
                { "id": 60, "title": "Very Small (1000 people)", "children": [{ "id": 61, "price": 19.0 }] },
                { "id": 62, "title": "Small (5000 people)", "children": [{ "id": 63, "price": 8.3 }] },
                { "id": 64, "title": "Medium (20000 people)", "children": [{ "id": 65, "price": 12.0 }] },
                { "id": 66, "title": "Large (50000 people)", "children": [{ "id": 67, "price": 13.3 }] }
              ]
            },
            {
              "id": 68,
              "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
              "children": [
                { "id": 69, "title": "Very Small (1000 people)", "children": [{ "id": 70, "price": 23.3 }] },
                { "id": 71, "title": "Small (5000 people)", "children": [{ "id": 72, "price": 10.2 }] },
                { "id": 73, "title": "Medium (20000 people)", "children": [{ "id": 74, "price": 14.7 }] },
                { "id": 75, "title": "Large (50000 people)", "children": [{ "id": 76, "price": 16.3 }] }
              ]
            },
            {
              "id": 77,
              "title": "Average Maintenance Cost",
              "children": [
                { "id": 78, "title": "Very Small (1000 people)", "children": [{ "id": 79, "price": 19.0 }] },
                { "id": 80, "title": "Small (5000 people)", "children": [{ "id": 81, "price": 8.3 }] },
                { "id": 82, "title": "Medium (20000 people)", "children": [{ "id": 83, "price": 12.0 }] },
                { "id": 84, "title": "Large (50000 people)", "children": [{ "id": 85, "price": 13.3 }] }
              ]
            }
          ]
        },
        {
          "id": 86,
          "title": "Operation Cost",
          "children": [  {
              "id": 87,
              "title": "Soft Soil Excavation",
              "children": [
                { "id": 88, "title": "Very Small (1000 people)", "children": [{ "id": 89, "price": 22.0 }] },
                { "id": 90, "title": "Small (5000 people)", "children": [{ "id": 91, "price": 7.0 }] },
                { "id": 92, "title": "Medium (20000 people)", "children": [{ "id": 93, "price": 3.7 }] },
                { "id": 94, "title": "Large (50000 people)", "children": [{ "id": 95, "price": 2.8 }] }
              ]
            },
            {
              "id": 96,
              "title": "Moderate Soil Hardness (10% Ripping)",
              "children": [
                { "id": 97, "title": "Very Small (1000 people)", "children": [{ "id": 98, "price": 22.0 }] },
                { "id": 99, "title": "Small (5000 people)", "children": [{ "id": 100, "price": 7.0 }] },
                { "id": 101, "title": "Medium (20000 people)", "children": [{ "id": 102, "price": 3.7 }] },
                { "id": 103, "title": "Large (50000 people)", "children": [{ "id": 104, "price": 2.8 }] }
              ]
            },
            {
              "id": 105,
              "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
              "children": [
                { "id": 106, "title": "Very Small (1000 people)", "children": [{ "id": 107, "price": 22.0 }] },
                { "id": 108, "title": "Small (5000 people)", "children": [{ "id": 109, "price": 7.0 }] },
                { "id": 110, "title": "Medium (20000 people)", "children": [{ "id": 111, "price": 3.7 }] },
                { "id": 112, "title": "Large (50000 people)", "children": [{ "id": 113, "price": 2.8 }] }
              ]
            },
            {
              "id": 114,
              "title": "Average Operation Cost",
              "children": [
                { "id": 115, "title": "Very Small (1000 people)", "children": [{ "id": 116, "price": 22.0 }] },
                { "id": 117, "title": "Small (5000 people)", "children": [{ "id": 118, "price": 7.0 }] },
                { "id": 119, "title": "Medium (20000 people)", "children": [{ "id": 120, "price": 3.7 }] },
                { "id": 121, "title": "Large (50000 people)", "children": [{ "id": 122, "price": 2.8 }] }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 123,
      "title": "uPVC Pipeline",
      "children": [
        {
          "id": 124,
          "title": "Capital Cost",
          "children": [{
              "id": 125,
              "title": "Soft Soil Excavation",
              "children": [
                { "id": 126, "title": "Very Small (1000 people)", "children": [{ "id": 127, "price": 554390.7 }] },
                { "id": 128, "title": "Small (5000 people)", "children": [{ "id": 129, "price": 983751.8 }] },
                { "id": 130, "title": "Medium (20000 people)", "children": [{ "id": 131, "price": 3388507.4 }] },
                { "id": 132, "title": "Large (50000 people)", "children": [{ "id": 133, "price": 8405716.7 }] }
              ]
            },
            {
              "id": 134,
              "title": "Moderate Soil Hardness (10% Ripping)",
              "children": [
                { "id": 135, "title": "Very Small (1000 people)", "children": [{ "id": 136, "price": 720708.3 }] },
                { "id": 137, "title": "Small (5000 people)", "children": [{ "id": 138, "price": 1278876.4 }] },
                { "id": 139, "title": "Medium (20000 people)", "children": [{ "id": 140, "price": 4405059.3 }] },
                { "id": 141, "title": "Large (50000 people)", "children": [{ "id": 142, "price": 10927432.0 }] }
              ]
            },
            {
              "id": 143,
              "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
              "children": [
                { "id": 144, "title": "Very Small (1000 people)", "children": [{ "id": 145, "price": 887024.5 }] },
                { "id": 146, "title": "Small (5000 people)", "children": [{ "id": 147, "price": 1574002.3 }] },
                { "id": 148, "title": "Medium (20000 people)", "children": [{ "id": 149, "price": 5421611.2 }] },
                { "id": 150, "title": "Large (50000 people)", "children": [{ "id": 151, "price": 13449145.9 }] }
              ]
            },
            {
              "id": 152,
              "title": "Average Capital Cost",
              "children": [
                { "id": 153, "title": "Very Small (1000 people)", "children": [{ "id": 154, "price": 720708.3 }] },
                { "id": 155, "title": "Small (5000 people)", "children": [{ "id": 156, "price": 1278876.4 }] },
                { "id": 157, "title": "Medium (20000 people)", "children": [{ "id": 158, "price": 4405059.3 }] },
                { "id": 159, "title": "Large (50000 people)", "children": [{ "id": 160, "price": 10927432.0 }] }
              ]
            },
            {
              "id": 161,
              "title": "Average Capital Cost per km",
              "children": [
                { "id": 162, "title": "5km", "children": [{ "id": 163, "price": 144141.7 }] },
                { "id": 164, "title": "8km", "children": [{ "id": 165, "price": 159859.2 }] },
                { "id": 166, "title": "17km", "children": [{ "id": 167, "price": 259120.9 }] },
                { "id": 168, "title": "32km", "children": [{ "id": 169, "price": 341482.8 }] }
              ] ]
        },
        {
          "id": 220,
          "title": "Maintenance Cost",
          "children": [ 
              {
                "id": 221,
                "title": "Soft soil excavation",
                "values": { "Very small (1000 people)": 27.7, "Small (5000 people)": 9.8, "Medium (20000 people)": 8.5, "Large (50000 people)": 8.4 }
              },
              {
                "id": 222,
                "title": "Moderate soil hardness (10% ripping)",
                "values": { "Very small (1000 people)": 36.0, "Small (5000 people)": 12.8, "Medium (20000 people)": 11.0, "Large (50000 people)": 10.9 }
              },
              {
                "id": 223,
                "title": "Hard soil excavation (15% ripping, 5% blasting)",
                "values": { "Very small (1000 people)": 44.3, "Small (5000 people)": 15.7, "Medium (20000 people)": 13.6, "Large (50000 people)": 13.4 }
              },
              {
                "id": 224,
                "title": "Average maintenance cost",
                "values": { "Very small (1000 people)": 36.0, "Small (5000 people)": 12.8, "Medium (20000 people)": 11.0, "Large (50000 people)": 10.9 }
              }
             ]
        },
        {
          "id": 230,
          "title": "Operation Cost",
          "children": [ 
              {
                "id": 231,
                "title": "Soft soil excavation",
                "values": { "Very small (1000 people)": 22.0, "Small (5000 people)": 7.0, "Medium (20000 people)": 3.7, "Large (50000 people)": 2.8 }
              },
              {
                "id": 232,
                "title": "Moderate soil hardness (10% ripping)",
                "values": { "Very small (1000 people)": 22.0, "Small (5000 people)": 7.0, "Medium (20000 people)": 3.7, "Large (50000 people)": 2.8 }
              },
              {
                "id": 233,
                "title": "Hard soil excavation (15% ripping, 5% blasting)",
                "values": { "Very small (1000 people)": 22.0, "Small (5000 people)": 7.0, "Medium (20000 people)": 3.7, "Large (50000 people)": 2.8 }
              },
              {
                "id": 234,
                "title": "Average operation cost",
                "values": { "Very small (1000 people)": 22.0, "Small (5000 people)": 7.0, "Medium (20000 people)": 3.7, "Large (50000 people)": 2.8 }
              } ]
        },
        {
          "id": 170,
          "title": "Unit Cost",
          "children": [
              {
                "id": 171,
                "title": "Limpopo",
                "children": [
                  { "id": 172, "title": "110mm", "price": 496 },
                  { "id": 173, "title": "160mm", "price": 619 },
                  { "id": 174, "title": "250mm", "price": 1005 },
                  { "id": 175, "title": "315mm", "price": 1385 }
                ]
              },
              {
                "id": 176,
                "title": "Gauteng",
                "children": [
                  { "id": 177, "title": "110mm", "price": 460 },
                  { "id": 178, "title": "160mm", "price": 569 },
                  { "id": 179, "title": "250mm", "price": 918 },
                  { "id": 180, "title": "315mm", "price": 1268 }
                ]
              },
              {
                "id": 181,
                "title": "North West",
                "children": [
                  { "id": 182, "title": "110mm", "price": 490 },
                  { "id": 183, "title": "160mm", "price": 610 },
                  { "id": 184, "title": "250mm", "price": 988 },
                  { "id": 185, "title": "315mm", "price": 1363 }
                ]
              },
              {
                "id": 186,
                "title": "Free State",
                "children": [
                  { "id": 187, "title": "110mm", "price": 487 },
                  { "id": 188, "title": "160mm", "price": 603 },
                  { "id": 189, "title": "250mm", "price": 971 },
                  { "id": 190, "title": "315mm", "price": 1345 }
                ]
              },
              {
                "id": 191,
                "title": "KwaZulu Natal",
                "children": [
                  { "id": 192, "title": "110mm", "price": 484 },
                  { "id": 193, "title": "160mm", "price": 603 },
                  { "id": 194, "title": "250mm", "price": 980 },
                  { "id": 195, "title": "315mm", "price": 1349 }
                ]
              },
              {
                "id": 196,
                "title": "Mpumalanga",
                "children": [
                  { "id": 197, "title": "110mm", "price": 428 },
                  { "id": 198, "title": "160mm", "price": 532 },
                  { "id": 199, "title": "250mm", "price": 859 },
                  { "id": 200, "title": "315mm", "price": 1182 }
                ]
              },
              {
                "id": 201,
                "title": "Northern Cape",
                "children": [
                  { "id": 202, "title": "110mm", "price": 502 },
                  { "id": 203, "title": "160mm", "price": 627 },
                  { "id": 204, "title": "250mm", "price": 1017 },
                  { "id": 205, "title": "315mm", "price": 1403 }
                ]
              },
              {
                "id": 206,
                "title": "Western Cape",
                "children": [
                  { "id": 207, "title": "110mm", "price": 541 },
                  { "id": 208, "title": "160mm", "price": 674 },
                  { "id": 209, "title": "250mm", "price": 1095 },
                  { "id": 210, "title": "315mm", "price": 1513 }
                ]
              },
              {
                "id": 211,
                "title": "Eastern Cape",
                "children": [
                  { "id": 212, "title": "110mm", "price": 494 },
                  { "id": 213, "title": "160mm", "price": 614 },
                  { "id": 214, "title": "250mm", "price": 996 },
                  { "id": 215, "title": "315mm", "price": 1374 }
                ] ]
        }
      ]
    },
    {
      "id": 300,
      "title": "Steel Pipeline",
      "children": [
        {
          "id": 301,
          "title": "Capital Cost",
          "children": [
            {
              "id": 302,
              "title": "Soft soil excavation",
              "values": { "Very small (1000 people)": 1128347.5, "Small (5000 people)": 2154413.3, "Medium (20000 people)": 7997314.4, "Large (50000 people)": 18689576.6 }
            },
            {
              "id": 303,
              "title": "Moderate soil hardness (10% ripping)",
              "values": { "Very small (1000 people)": 1466851.4, "Small (5000 people)": 2800737.0, "Medium (20000 people)": 10396508.2, "Large (50000 people)": 24296449.5 }
            },
            {
              "id": 304,
              "title": "Hard soil excavation (15% ripping, 5% blasting)",
              "values": { "Very small (1000 people)": 1805355.2, "Small (5000 people)": 3447060.6, "Medium (20000 people)": 12795701.9, "Large (50000 people)": 29903322.3 }
            },
            {
              "id": 305,
              "title": "Average capital cost",
              "values": { "Very small (1000 people)": 1466851.4, "Small (5000 people)": 2800737.0, "Medium (20000 people)": 10396508.2, "Large (50000 people)": 24296449.5 }
            },
            {
              "id": 306,
              "title": "Average capital cost per km",
              "values": { "Very small (1000 people)": 193370.9, "Small (5000 people)": 350092.7, "Medium (20000 people)": 611558.6, "Large (50000 people)": 759264.0 }
            }
          ]
        },
        {
          "id": 310,
          "title": "Maintenance Cost",
          "children": [
            {
              "id": 311,
              "title": "Soft soil excavation",
              "values": { "Very small (1000 people)": 56.4, "Small (5000 people)": 21.5, "Medium (20000 people)": 20.0, "Large (50000 people)": 18.7 }
            },
            {
              "id": 312,
              "title": "Moderate soil hardness (10% ripping)",
              "values": { "Very small (1000 people)": 73.3, "Small (5000 people)": 28.0, "Medium (20000 people)": 26.0, "Large (50000 people)": 24.3 }
            },
            {
              "id": 313,
              "title": "Hard soil excavation (15% ripping, 5% blasting)",
              "values": { "Very small (1000 people)": 90.3, "Small (5000 people)": 34.5, "Medium (20000 people)": 32.0, "Large (50000 people)": 29.9 }
            },
            {
              "id": 314,
              "title": "Average maintenance cost",
              "values": { "Very small (1000 people)": 73.3, "Small (5000 people)": 28.0, "Medium (20000 people)": 26.0, "Large (50000 people)": 24.3 }
            }
          ]
        },
        {
          "id": 320,
          "title": "Operation Cost",
          "children": [
            {
              "id": 321,
              "title": "Soft soil excavation",
              "values": { "Very small (1000 people)": 22.0, "Small (5000 people)": 7.0, "Medium (20000 people)": 3.7, "Large (50000 people)": 2.8 }
            },
            {
              "id": 322,
              "title": "Moderate soil hardness (10% ripping)",
              "values": { "Very small (1000 people)": 22.0, "Small (5000 people)": 7.0, "Medium (20000 people)": 3.7, "Large (50000 people)": 2.8 }
            },
            {
              "id": 323,
              "title": "Hard soil excavation (15% ripping, 5% blasting)",
              "values": { "Very small (1000 people)": 22.0, "Small (5000 people)": 7.0, "Medium (20000 people)": 3.7, "Large (50000 people)": 2.8 }
            },
            {
              "id": 324,
              "title": "Average operation cost",
              "values": { "Very small (1000 people)": 22.0, "Small (5000 people)": 7.0, "Medium (20000 people)": 3.7, "Large (50000 people)": 2.8 }
            }
          ]
        }
      ]
    }
  ]
  {
      "id": 600,
      "title": "GRP Pipeline",
      "children": [
        {
          "id": 601,
          "title": "Capital Cost",
          "children": [
            {
              "id": 602,
              "title": "Soft Soil Excavation",
              "children": [
                { "id": 603, "title": "Very Small (1000 people)", "children": [{ "id": 604, "price": 902678.3 }] },
                { "id": 605, "title": "Small (5000 people)", "children": [{ "id": 606, "price": 1723530.3 }] },
                { "id": 607, "title": "Medium (20000 people)", "children": [{ "id": 608, "price": 6397850.9 }] },
                { "id": 609, "title": "Large (50000 people)", "children": [{ "id": 610, "price": 14951661.9 }] }
              ]
            },
            {
              "id": 611,
              "title": "Moderate Soil Hardness (10% Ripping)",
              "children": [
                { "id": 612, "title": "Very Small (1000 people)", "children": [{ "id": 613, "price": 1173480.5 }] },
                { "id": 614, "title": "Small (5000 people)", "children": [{ "id": 615, "price": 2240589.3 }] },
                { "id": 616, "title": "Medium (20000 people)", "children": [{ "id": 617, "price": 8317205.9 }] },
                { "id": 618, "title": "Large (50000 people)", "children": [{ "id": 619, "price": 19437159.3 }] }
              ]
            },
            {
              "id": 620,
              "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
              "children": [
                { "id": 621, "title": "Very Small (1000 people)", "children": [{ "id": 622, "price": 1444284.2 }] },
                { "id": 623, "title": "Small (5000 people)", "children": [{ "id": 624, "price": 2757648.2 }] },
                { "id": 625, "title": "Medium (20000 people)", "children": [{ "id": 626, "price": 10236562.4 }] },
                { "id": 627, "title": "Large (50000 people)", "children": [{ "id": 628, "price": 23922658.2 }] }
              ]
            },
            {
              "id": 629,
              "title": "Average Capital Cost",
              "children": [
                { "id": 630, "title": "Very Small (1000 people)", "children": [{ "id": 631, "price": 1173480.5 }] },
                { "id": 632, "title": "Small (5000 people)", "children": [{ "id": 633, "price": 2240589.3 }] },
                { "id": 634, "title": "Medium (20000 people)", "children": [{ "id": 635, "price": 8317205.9 }] },
                { "id": 636, "title": "Large (50000 people)", "children": [{ "id": 637, "price": 19437159.3 }] }
              ]
            }
          ]
        },{
          "id": 694,
          "title": "Average Capital Cost per km",
          "children": [
            { "id": 695, "title": "Very Small (1000 people)", "children": [{ "id": 696, "price": 234567.8 }] },
            { "id": 697, "title": "Small (5000 people)", "children": [{ "id": 698, "price": 456789.1 }] },
            { "id": 699, "title": "Medium (20000 people)", "children": [{ "id": 700, "price": 1234567.9 }] },
            { "id": 701, "title": "Large (50000 people)", "children": [{ "id": 702, "price": 3456789.2 }] }
          ]
        }
      ]
    },
}{
  "id": 750,
  "title": "Maintenance Cost per Household",
  "children": [
    {
      "id": 751,
      "title": "Soft Soil Excavation",
      "children": [
        { "id": 752, "title": "Very Small (1000 people)", "children": [{ "id": 753, "price": 45.1 }] },
        { "id": 754, "title": "Small (5000 people)", "children": [{ "id": 755, "price": 17.2 }] },
        { "id": 756, "title": "Medium (20000 people)", "children": [{ "id": 757, "price": 16.0 }] },
        { "id": 758, "title": "Large (50000 people)", "children": [{ "id": 759, "price": 15.0 }] }
      ]
    },
    {
      "id": 760,
      "title": "Moderate Soil Hardness (10% Ripping)",
      "children": [
        { "id": 761, "title": "Very Small (1000 people)", "children": [{ "id": 762, "price": 58.7 }] },
        { "id": 763, "title": "Small (5000 people)", "children": [{ "id": 764, "price": 22.4 }] },
        { "id": 765, "title": "Medium (20000 people)", "children": [{ "id": 766, "price": 20.8 }] },
        { "id": 767, "title": "Large (50000 people)", "children": [{ "id": 768, "price": 19.4 }] }
      ]
    },
    {
      "id": 769,
      "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
      "children": [
        { "id": 770, "title": "Very Small (1000 people)", "children": [{ "id": 771, "price": 72.2 }] },
        { "id": 772, "title": "Small (5000 people)", "children": [{ "id": 773, "price": 27.6 }] },
        { "id": 774, "title": "Medium (20000 people)", "children": [{ "id": 775, "price": 25.6 }] },
        { "id": 776, "title": "Large (50000 people)", "children": [{ "id": 777, "price": 23.9 }] }
      ]
    }
  ]
},
{
  "id": 675,
  "title": "Operation Cost per Household",
  "children": [
    {
      "id": 676,
      "title": "Soft Soil Excavation",
      "children": [
        { "id": 677, "title": "Very Small (1000 people)", "children": [{ "id": 678, "price": 22.0 }] },
        { "id": 679, "title": "Small (5000 people)", "children": [{ "id": 680, "price": 7.0 }] },
        { "id": 681, "title": "Medium (20000 people)", "children": [{ "id": 682, "price": 3.7 }] },
        { "id": 683, "title": "Large (50000 people)", "children": [{ "id": 684, "price": 2.8 }] }
      ]
    },
    {
      "id": 685,
      "title": "Moderate Soil Hardness (10% Ripping)",
      "children": [
        { "id": 686, "title": "Very Small (1000 people)", "children": [{ "id": 687, "price": 22.0 }] },
        { "id": 688, "title": "Small (5000 people)", "children": [{ "id": 689, "price": 7.0 }] },
        { "id": 690, "title": "Medium (20000 people)", "children": [{ "id": 691, "price": 3.7 }] },
        { "id": 692, "title": "Large (50000 people)", "children": [{ "id": 693, "price": 2.8 }] }
      ]
    },
    {
      "id": 695,
      "title": "Hard Soil Excavation (15% Ripping, 5% Blasting)",
      "children": [
        { "id": 696, "title": "Very Small (1000 people)", "children": [{ "id": 697, "price": 22.0 }] },
        { "id": 698, "title": "Small (5000 people)", "children": [{ "id": 699, "price": 7.0 }] },
        { "id": 700, "title": "Medium (20000 people)", "children": [{ "id": 701, "price": 3.7 }] },
        { "id": 702, "title": "Large (50000 people)", "children": [{ "id": 703, "price": 2.8 }] }
      ]
    }
  ]{
      "id": 710,
      "title": "Average Operation Cost",
      "children": [
        { "id": 711, "title": "Very Small (1000 people)", "children": [{ "id": 712, "price": 22.0 }] },
        { "id": 713, "title": "Small (5000 people)", "children": [{ "id": 714, "price": 7.0 }] },
        { "id": 715, "title": "Medium (20000 people)", "children": [{ "id": 716, "price": 3.7 }] },
        { "id": 717, "title": "Large (50000 people)", "children": [{ "id": 718, "price": 2.8 }] }
      ]
    }
  ]

{
    "id": "infrastructure-roads",
    "title": "Infrastructure: Roads",
    "children": [
        {
            "id": "gauteng",
            "title": "Gauteng",
            "children": [
                {
                    "id": "unpaved-gravel-rural",
                    "title": "Unpaved Gravel Rural",
                    "price": 713700
                },
                {
                    "id": "unpaved-gravel-urban",
                    "title": "Unpaved Gravel Urban",
                    "price": 635236
                },
                {
                    "id": "paving-blocks-urban",
                    "title": "Paving Blocks Urban",
                    "price": 5261067
                },
                {
                    "id": "paved-chip-spray-urban",
                    "title": "Paved Chip and Spray Urban",
                    "price": 5447636
                },
                {
                    "id": "paved-bitumen-premix-urban",
                    "title": "Paved Bitumen Premix Urban",
                    "price": 6934455
                }
            ]
        },
        {
            "id": "eastern-cape",
            "title": "Eastern Cape",
            "children": [
                {
                    "id": "unpaved-gravel-rural",
                    "title": "Unpaved Gravel Rural",
                    "price": 812320
                },
                {
                    "id": "unpaved-gravel-urban",
                    "title": "Unpaved Gravel Urban",
                    "price": 722815
                },
                {
                    "id": "paving-blocks-urban",
                    "title": "Paving Blocks Urban",
                    "price": 5983435
                },
                {
                    "id": "paved-chip-spray-urban",
                    "title": "Paved Chip and Spray Urban",
                    "price": 6195527
                },
                {
                    "id": "paved-bitumen-premix-urban",
                    "title": "Paved Bitumen Premix Urban",
                    "price": 7886467
                }
            ]
        },
        {
            "id": "limpopo",
            "title": "Limpopo",
            "children": [
                {
                    "id": "unpaved-gravel-rural",
                    "title": "Unpaved Gravel Rural",
                    "price": 756938
                },
                {
                    "id": "unpaved-gravel-urban",
                    "title": "Unpaved Gravel Urban",
                    "price": 673721
                },
                {
                    "id": "paving-blocks-urban",
                    "title": "Paving Blocks Urban",
                    "price": 5575775
                },
                {
                    "id": "paved-chip-spray-urban",
                    "title": "Paved Chip and Spray Urban",
                    "price": 5773504
                },
                {
                    "id": "paved-bitumen-premix-urban",
                    "title": "Paved Bitumen Premix Urban",
                    "price": 7349626
                }
            ]
        },
        {
            "id": "free-state",
            "title": "Free State",
            "children": [
                {
                    "id": "unpaved-gravel-rural",
                    "title": "Unpaved Gravel Rural",
                    "price": 742776
                },
                {
                    "id": "unpaved-gravel-urban",
                    "title": "Unpaved Gravel Urban",
                    "price": 661116
                },
                {
                    "id": "paving-blocks-urban",
                    "title": "Paving Blocks Urban",
                    "price": 5471105
                },
                {
                    "id": "paved-chip-spray-urban",
                    "title": "Paved Chip and Spray Urban",
                    "price": 5665122
                },
                {
                    "id": "paved-bitumen-premix-urban",
                    "title": "Paved Bitumen Premix Urban",
                    "price": 7211299
                }
            ]
        },
        {
            "id": "kwazulu-natal",
            "title": "KwaZulu-Natal",
            "children": [
                {
                    "id": "unpaved-gravel-rural",
                    "title": "Unpaved Gravel Rural",
                    "price": 702711
                },
                {
                    "id": "unpaved-gravel-urban",
                    "title": "Unpaved Gravel Urban",
                    "price": 625455
                },
                {
                    "id": "paving-blocks-urban",
                    "title": "Paving Blocks Urban",
                    "price": 5182462
                },
                {
                    "id": "paved-chip-spray-urban",
                    "title": "Paved Chip and Spray Urban",
                    "price": 5366244
                },
                {
                    "id": "paved-bitumen-premix-urban",
                    "title": "Paved Bitumen Premix Urban",
                    "price": 6830848
                }
            ]
        },
        {
            "id": "mpumalanga",
            "title": "Mpumalanga",
            "children": [
                {
                    "id": "unpaved-gravel-rural",
                    "title": "Unpaved Gravel Rural",
                    "price": 742321
                },
                {
                    "id": "unpaved-gravel-urban",
                    "title": "Unpaved Gravel Urban",
                    "price": 660710
                },
                {
                    "id": "paving-blocks-urban",
                    "title": "Paving Blocks Urban",
                    "price": 5476202
                },
                {
                    "id": "paved-chip-spray-urban",
                    "title": "Paved Chip and Spray Urban",
                    "price": 5670212
                },
                {
                    "id": "paved-bitumen-premix-urban",
                    "title": "Paved Bitumen Premix Urban",
                    "price": 7217778
                }
            ]
        },
        {
            "id": "northern-cape",
            "title": "Northern Cape",
            "children": [
                {
                    "id": "unpaved-gravel-rural",
                    "title": "Unpaved Gravel Rural",
                    "price": 777411
                },
                {
                    "id": "unpaved-gravel-urban",
                    "title": "Unpaved Gravel Urban",
                    "price": 691943
                },
                {
                    "id": "paving-blocks-urban",
                    "title": "Paving Blocks Urban",
                    "price": 5734127
                },
                {
                    "id": "paved-chip-spray-urban",
                    "title": "Paved Chip and Spray Urban",
                    "price": 5937471
                },
                {
                    "id": "paved-bitumen-premix-urban",
                    "title": "Paved Bitumen Premix Urban",
                    "price": 7557980
                }
            ]
        },
        {
            "id": "north-west",
            "title": "North West",
            "children": [
                {
                    "id": "unpaved-gravel-rural",
                    "title": "Unpaved Gravel Rural",
                    "price": 649014
                },
                {
                    "id": "unpaved-gravel-urban",
                    "title": "Unpaved Gravel Urban",
                    "price": 577501
                },
                {
                    "id": "paving-blocks-urban",
                    "title": "Paving Blocks Urban",
                    "price": 4788972
                },
                {
                    "id": "paved-chip-spray-urban",
                    "title": "Paved Chip and Spray Urban",
                    "price": 4958799
                },
                {
                    "id": "paved-bitumen-premix-urban",
                    "title": "Paved Bitumen Premix Urban",
                    "price": 6312200
                }
            ]
        },
        {
            "id": "western-cape",
            "title": "Western Cape",
            "children": [
                {
                    "id": "unpaved-gravel-rural",
                    "title": "Unpaved Gravel Rural",
                    "price": 797572
                },
                {
                    "id": "unpaved-gravel-urban",
                    "title": "Unpaved Gravel Urban",
                    "price": 709886
                },
                {
                    "id": "paving-blocks-urban",
                    "title": "Paving Blocks Urban",
                    "price": 5869724
                },
                {
                    "id": "paved-chip-spray-urban",
                    "title": "Paved Chip and Spray Urban",
                    "price": 6077877
                },
                {
                    "id": "paved-bitumen-premix-urban",
                    "title": "Paved Bitumen Premix Urban",
                    "price": 7736707
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
