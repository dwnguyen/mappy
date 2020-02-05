
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render("index", {
    "restaurants": [
      { "name": 'Bankers Hill Bar & Restaurant',
        "image": 'bankers-hill.png',
        "terminal": 'Terminal 1',
        "gate": 'Gate 7',
        "hours": '6:00AM - 10:30PM (Sat close 8:30)'
      },
      { "name": 'Ciao Gourmet Market',
        "image": 'ciao.jpg',
        "terminal": 'Terminal 1',
        'gate': 'Gate 1',
        'hours': '4:30AM - 10:30PM (Sat close 8:30)'
      },
      { 'name': 'Craft Brews on 30th St.',
         'image': 'Craftbrews.jpg',
         'terminal': 'Terminal 1',
         'gate': 'Gate 1',
         'hours': '5:00AM - 8PM'
       },
       { 'name': 'Einstein Bros. Bagels',
         'image': 'Einsteins.jpg',
         'terminal': 'Terminal 1',
         'gate': 'Gate 3',
         'hours': '5:00AM - 10:30PM (Sat close 8:30)'
       },
       { 'name': 'Emerald Express',
         'image': 'emerald.jpg',
         'terminal': 'Terminal 1',
         'gate': 'Pre-Security',
         'hours': '5:00AM - 10:00PM'
       },
       { 'name': 'Jack in the Box',
         'image': 'lorempixel.people.2.jpeg',
         'terminal': 'Terminal 1',
         'gate': 'Pre-Security',
         'hours': '5:00AM - 10:30PM'
       },
       { 'name': 'Pacifica Breeze Café',
         'image': 'lorempixel.technics.2.jpeg',
         'terminal': 'Terminal 1',
         'gate': 'Pre-Security',
         'hours': '6:00AM - 10:00PM'
       },
       { 'name': 'Peet’s Coffee & Tea',
         'image': 'lorempixel.technics.2.jpeg',
         'terminal': 'Terminal 1',
         'gate': 'Gate 11',
         'hours': '4:30AM - 10:30PM'
       },
       { 'name': 'Ryan Bros. Coffee',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 1',
         'gate': 'Pre-Security',
         'hours': '12:00AM - 12:00PM'
       },
       { 'name': 'Starbucks',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 1',
         'gate': 'Pre-Security',
         'hours': '5:00AM - 10:00PM'
       },
       { 'name': 'Starbucks',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 1',
         'gate': 'Pre-Security',
         'hours': '5:00AM - 10:00PM (Sat close 8:30)'
       },
       { 'name': 'Starbucks',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 1',
         'gate': 'Pre-Security',
         'hours': '5:00AM - 10:00PM (Sat close 8:30)'
       },
       { 'name': 'The Counter: Custom Built Burgers',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 1',
         'gate': 'Pre-Gate 4',
         'hours': '5:00AM - 10:30PM'
       },
       { 'name': 'Urban Crave',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 1',
         'gate': 'Pre-Gate 4',
         'hours': '5:00AM - 10:30PM (Sat close 8:30)'
       },
       //terminal 2
       { 'name': 'Artisan Market Crave',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Gate 23',
         'hours': '5:00AM - 10:00PM'
       },
       { 'name': 'Urban Ballast Point Bar',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Gate 27',
         'hours': '10:00AM - 6:00PM'
       },
       { 'name': 'Beaudevin Wine & Tapas Bar',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Gate 42',
         'hours': '10:00AM - 10:00PM'
       },
       { 'name': 'California Pizza Kitchen',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Gate 26',
         'hours': '5:00AM - 10:30PM'
       },
       { 'name': 'Camden Food Co.',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Gate 47',
         'hours': '5:00AM - 10:30PM'
       },
       { 'name': 'Dunkin Express',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Gate 31',
         'hours': '5:00AM - 6:00PM'
       },
       { 'name': 'Einstein Bros. Bagels',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Pre-Security',
         'hours': '12:00AM - 12:00PM'
      },
      { 'name': 'Elegant Desserts',
        'image': 'lorempixel.city.2.jpeg',
        'terminal': 'Terminal 2',
        'gate': 'Gate 38',
        'hours': '5:00AM - 9:00PM'
      },
      { 'name': 'Jack in the Box',
        'image': 'lorempixel.city.2.jpeg',
        'terminal': 'Terminal 2',
        'gate': 'Gate 26',
        'hours': '5:00AM - 10:30PM'
      },
      { 'name': 'Panda Express',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Gate 26',
         'hours': '5:00AM - 10:30PM'
      },
      { 'name': 'Pannikin Coffee & Tea',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Gate 38',
         'hours': '5:00AM - 10:30PM'
      },
      { 'name': 'Peet’s Coffee & Tea - Gate 26',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Gate 26',
         'hours': '5:00AM - 10:30PM'
      },
      { 'name': 'Peet’s Coffee & Tea - Sunset Cove',
         'image': 'lorempixel.city.2.jpeg',
         'terminal': 'Terminal 2',
         'gate': 'Security Corridor',
         'hours': '4:00AM - 10:00PM'
      },
      { 'name': 'PGA TOUR Grill',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Gate 36',
      'hours': '6:00AM - 10:00PM'
      },
      { 'name': 'Phil’s B.B.Q.',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Gate 46',
      'hours': '5:00AM - 10:30PM'
      },
      { 'name': 'Prado at the Airport',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Gate 26',
      'hours': '6:00AM - 10:30PM'
      },
      { 'name': 'Qdoba Mexican Grill',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Sunset Cove',
      'hours': '5:00AM - 10:00PM'
      },
      { 'name': 'Red Mango',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Sunset Cove',
      'hours': '5:00AM - 10:00PM'
      },
      { 'name': 'Ryan Bros. Coffee',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Pre-Security, Baggage Claim',
      'hours': '6:00AM - 10:30PM'
      },
      { 'name': 'Saffron Thai',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Sunset Cove',
      'hours': '9:00AM - 10:00PM'
      },
      { 'name': 'Starbucks',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Gate 37',
      'hours': '4:00AM - 10:00PM'
      },
      { 'name': 'Starbucks',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Pre-Security, Ticketing Area',
      'hours': '5:00AM - 10:00PM'
      },
      { 'name': 'Stone Brewing',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Gate 36',
      'hours': '6:00AM - 10:00PM'
      },
      { 'name': 'Tommy V’s Pizzeria',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Sunset Cove',
      'hours': '5:00AM - 10:00PM'
      },
      { 'name': 'Urban Craft',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Gate 48',
      'hours': '5:00AM - 6:00PM'
      },
      { 'name': 'Urban Crave',
      'image': 'lorempixel.city.2.jpeg',
      'terminal': 'Terminal 2',
      'gate': 'Gate 13',
      'hours': '5:00AM - 6:00PM'
      },
    ]
    
  });
};