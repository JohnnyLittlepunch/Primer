const regions = [
	{
		"id": 0,
		"name": "Астраханская область",
		"x": 226,
		"y": 397
	},
	{
		"id": 1,
		"name": "Волгоградская область",
		"x": 100,
		"y": 291
	},
	{
		"id": 2,
		"name": "Самарская область",
		"x": 274,
		"y": 79
	},
	{
		"id": 3,
		"name": "Саратовская область",
		"x": 145,
		"y": 160
	},
	{
		"id": 4,
		"name": "Ульяновская область",
		"x": 212,
		"y": 35
	}
];

const internal_shipments = [
    {
        "cargo": "Материалы строительные",
        "shipment": [
            {
                "region": 4,
                "volume": 305.0
            },
            {
                "region": 2,
                "volume": 6556.0
            },
            {
                "region": 3,
                "volume": 968.1
            },
            {
                "region": 1,
                "volume": 125.0
            },
            {
                "region": 0,
                "volume": 5.9
            }
        ]
    },
    {
        "cargo": "Светлые нефтепродукты",
        "shipment": [
            {
                "region": 4,
                "volume": 0.0
            },
            {
                "region": 2,
                "volume": 89.4
            },
            {
                "region": 3,
                "volume": 0
            },
            {
                "region": 1,
                "volume": 45.1
            },
            {
                "region": 0,
                "volume": 152.8
            }
        ]
    },
    {
        "cargo": "Зерно",
        "shipment": [
            {
                "region": 4,
                "volume": 0.0
            },
            {
                "region": 2,
                "volume": 0.0
            },
            {
                "region": 3,
                "volume": 0.0
            },
            {
                "region": 1,
                "volume": 0.0
            },
            {
                "region": 0,
                "volume": 0.0
            }
        ]
    }
];

const external_shipments = [
    {
        "cargo": "Материалы строительные",
        "shipment": [
            {
                "from": 4,
                "to": 2,
                "direct": 10.3,
                "reverse": 108.4
            },
            {
                "from": 2,
                "to": 3,
                "direct": 21.5,
                "reverse": 19
            },
            {
                "from": 3,
                "to": 1,
                "direct": 0,
                "reverse": 64.1
            },
            {
                "from": 1,
                "to": 0,
                "direct": 3.8,
                "reverse": 152.8
            }
        ]
    },
    {
        "cargo": "Светлые нефтепродукты",
        "shipment": [
            {
                "from": 4,
                "to": 2,
                "direct": 0,
                "reverse": 0
            },
            {
                "from": 2,
                "to": 3,
                "direct": 50.3,
                "reverse": 0
            },
            {
                "from": 3,
                "to": 1,
                "direct": 6.3,
                "reverse": 0
            },
            {
                "from": 1,
                "to": 0,
                "direct": 1.6,
                "reverse": 1.3
            }
        ]
    },
    {
        "cargo": "Зерно",
        "shipment": [
            {
                "from": 4,
                "to": 2,
                "direct": 0,
                "reverse": 0
            },
            {
                "from": 2,
                "to": 3,
                "direct": 9.2,
                "reverse": 0
            },
            {
                "from": 3,
                "to": 1,
                "direct": 25.1,
                "reverse": 0
            },
            {
                "from": 1,
                "to": 0,
                "direct": 43.1,
                "reverse": 0
            }
        ]
    }
];
