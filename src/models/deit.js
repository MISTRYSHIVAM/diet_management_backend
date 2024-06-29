const dietData = [
  {
    "name": "Paneer Tikka",
    "type": "Vegetarian",
    "calories": {
      "amount": 300,
      "unit": "Calories per 100g"
    },
    "carbohydrates": {
      "amount": 10,
      "unit": "g per 100g"
    },
    "proteins": {
      "amount": 18,
      "unit": "g per 100g"
    },
    "fats": {
      "amount": 20,
      "unit": "g per 100g"
    },
    "vitamins": {
      "A": 150,
      "B": 0.3,
      "C": 5
    },
    "minerals": {
      "iron": {
        "amount": 2,
        "unit": "mg per 100g"
      },
      "calcium": {
        "amount": 250,
        "unit": "mg per 100g"
      },
      "potassium": {
        "amount": 200,
        "unit": "mg per 100g"
      }
    },
    "isVeg": true
  },
  {
    "name": "Chicken Biryani",
    "type": "Non-Vegetarian",
    "calories": {
      "amount": 400,
      "unit": "Calories per 100g"
    },
    "carbohydrates": {
      "amount": 60,
      "unit": "g per 100g"
    },
    "proteins": {
      "amount": 25,
      "unit": "g per 100g"
    },
    "fats": {
      "amount": 15,
      "unit": "g per 100g"
    },
    "vitamins": {
      "A": 50,
      "B": 0.2,
      "C": 0
    },
    "minerals": {
      "iron": {
        "amount": 1.5,
        "unit": "mg per 100g"
      },
      "calcium": {
        "amount": 30,
        "unit": "mg per 100g"
      },
      "potassium": {
        "amount": 150,
        "unit": "mg per 100g"
      }
    },
    "isVeg": false
  },
  // {
  //   "name": "Masoor Dal",
  //   "type": "Vegetarian",
  //   "calories": {
  //     "amount": 150,
  //     "unit": "Calories per 100g"
  //   },
  //   "carbohydrates": {
  //     "amount": 25,
  //     "unit": "g per 100g"
  //   },
  //   "proteins": {
  //     "amount": 10,
  //     "unit": "g per 100g"
  //   },
  //   "fats": {
  //     "amount": 3,
  //     "unit": "g per 100g"
  //   },
  //   "vitamins": {
  //     "A": 100,
  //     "B": 0.4,
  //     "C": 2
  //   },
  //   "minerals": {
  //     "iron": {
  //       "amount": 2.5,
  //       "unit": "mg per 100g"
  //     },
  //     "calcium": {
  //       "amount": 50,
  //       "unit": "mg per 100g"
  //     },
  //     "potassium": {
  //       "amount": 300,
  //       "unit": "mg per 100g"
  //     }
  //   },
  //   "isVeg": true
  // },
  // {
  //   "name": "Fish Curry",
  //   "type": "Non-Vegetarian",
  //   "calories": {
  //     "amount": 250,
  //     "unit": "Calories per 100g"
  //   },
  //   "carbohydrates": {
  //     "amount": 15,
  //     "unit": "g per 100g"
  //   },
  //   "proteins": {
  //     "amount": 20,
  //     "unit": "g per 100g"
  //   },
  //   "fats": {
  //     "amount": 12,
  //     "unit": "g per 100g"
  //   },
  //   "vitamins": {
  //     "A": 30,
  //     "B": 0.3,
  //     "C": 1
  //   },
  //   "minerals": {
  //     "iron": {
  //       "amount": 1.8,
  //       "unit": "mg per 100g"
  //     },
  //     "calcium": {
  //       "amount": 40,
  //       "unit": "mg per 100g"
  //     },
  //     "potassium": {
  //       "amount": 180,
  //       "unit": "mg per 100g"
  //     }
  //   },
  //   "isVeg": false
  // },
  {
    "name": "Aloo Gobi",
    "type": "Vegetarian",
    "calories": {
      "amount": 180,
      "unit": "Calories per 100g"
    },
    "carbohydrates": {
      "amount": 30,
      "unit": "g per 100g"
    },
    "proteins": {
      "amount": 5,
      "unit": "g per 100g"
    },
    "fats": {
      "amount": 8,
      "unit": "g per 100g"
    },
    "vitamins": {
      "A": 120,
      "B": 0.2,
      "C": 10
    },
    "minerals": {
      "iron": {
        "amount": 1.2,
        "unit": "mg per 100g"
      },
      "calcium": {
        "amount": 40,
        "unit": "mg per 100g"
      },
      "potassium": {
        "amount": 250,
        "unit": "mg per 100g"
      }
    },
    "isVeg": true
  },
  {
    "name": "Rajma Chawal",
    "type": "Vegetarian",
    "calories": {
      "amount": 320,
      "unit": "Calories per 100g"
    },
    "carbohydrates": {
      "amount": 50,
      "unit": "g per 100g"
    },
    "proteins": {
      "amount": 15,
      "unit": "g per 100g"
    },
    "fats": {
      "amount": 7,
      "unit": "g per 100g"
    },
    "vitamins": {
      "A": 80,
      "B": 0.3,
      "C": 3
    },
    "minerals": {
      "iron": {
        "amount": 2.3,
        "unit": "mg per 100g"
      },
      "calcium": {
        "amount": 60,
        "unit": "mg per 100g"
      },
      "potassium": {
        "amount": 280,
        "unit": "mg per 100g"
      }
    },
    "isVeg": true
  },
  {
    "name": "Chicken Tikka Masala",
    "type": "Non-Vegetarian",
    "calories": {
      "amount": 350,
      "unit": "Calories per 100g"
    },
    "carbohydrates": {
      "amount": 25,
      "unit": "g per 100g"
    },
    "proteins": {
      "amount": 30,
      "unit": "g per 100g"
    },
    "fats": {
      "amount": 18,
      "unit": "g per 100g"
    },
    "vitamins": {
      "A": 60,
      "B": 0.4,
      "C": 2
    },
    "minerals": {
      "iron": {
        "amount": 2.5,
        "unit": "mg per 100g"
      },
      "calcium": {
        "amount": 50,
        "unit": "mg per 100g"
      },
      "potassium": {
        "amount": 200,
        "unit": "mg per 100g"
      }
    },
    "isVeg": false
  }
]

export {
  dietData
}