export const plans = [
  {
    operator: "Airtel",
    circle: "Maharashtra",
    categories: [
      {
        name: "Best Offers",
        plans: [
          { id: 101, amount: 299, validity: "28 Days", details: "1.5 GB/Day, Unlimited Calls, 100 SMS/Day" },
          { id: 102, amount: 499, validity: "56 Days", details: "2 GB/Day, Unlimited Calls, 100 SMS/Day" },
          { id: 103, amount: 719, validity: "84 Days", details: "1.5 GB/Day, Unlimited Calls, 100 SMS/Day" }
        ]
      },
      {
        name: "Data Add-ons",
        plans: [
          { id: 104, amount: 19, validity: "1 Day", details: "1 GB High Speed Data" },
          { id: 105, amount: 65, validity: "7 Days", details: "4 GB High Speed Data" },
          { id: 106, amount: 118, validity: "30 Days", details: "12 GB High Speed Data" }
        ]
      }
    ]
  },
  {
    operator: "Jio",
    circle: "Maharashtra",
    categories: [
      {
        name: "Best Offers",
        plans: [
          { id: 201, amount: 239, validity: "28 Days", details: "1.5 GB/Day, Unlimited Calls, 100 SMS/Day" },
          { id: 202, amount: 399, validity: "56 Days", details: "2.5 GB/Day, Unlimited Calls, 100 SMS/Day" },
          { id: 203, amount: 666, validity: "84 Days", details: "1.5 GB/Day, Unlimited Calls, 100 SMS/Day" }
        ]
      },
      {
        name: "Data Add-ons",
        plans: [
          { id: 204, amount: 15, validity: "1 Day", details: "1 GB High Speed Data" },
          { id: 205, amount: 61, validity: "7 Days", details: "6 GB High Speed Data" },
          { id: 206, amount: 101, validity: "28 Days", details: "12 GB High Speed Data" }
        ]
      }
    ]
  },
  {
    operator: "Vi",
    circle: "Maharashtra",
    categories: [
      {
        name: "Best Offers",
        plans: [
          { id: 301, amount: 319, validity: "28 Days", details: "2 GB/Day, Unlimited Calls, 100 SMS/Day" },
          { id: 302, amount: 479, validity: "56 Days", details: "1.5 GB/Day, Unlimited Calls, 100 SMS/Day" },
          { id: 303, amount: 699, validity: "84 Days", details: "1.5 GB/Day, Unlimited Calls, 100 SMS/Day" }
        ]
      },
      {
        name: "Data Add-ons",
        plans: [
          { id: 304, amount: 16, validity: "1 Day", details: "1 GB High Speed Data" },
          { id: 305, amount: 58, validity: "7 Days", details: "4 GB High Speed Data" },
          { id: 306, amount: 109, validity: "28 Days", details: "12 GB High Speed Data" }
        ]
      }
    ]
  }
];

export const getOperatorByNumber = (number) => {
  if (!number || number.length < 3) return null;
  
  const prefix = number.substring(0, 3);
  
  if (['701', '702', '703', '704', '705', '706', '707', '708', '709', '730', '731', '732', '733', '734', '735', '736', '737', '738', '739', '760', '761', '762', '763', '764', '765', '766', '767', '768', '769', '770', '771', '772', '773', '774', '775', '776', '777', '778', '779', '790', '791', '792', '793', '794', '795', '796', '797', '798', '799'].includes(prefix)) {
    return 'Airtel';
  }
  
  if (['630', '631', '632', '633', '634', '635', '636', '637', '638', '639', '700', '701', '702', '703', '704', '705', '706', '707', '708', '709', '810', '811', '812', '813', '814', '815', '816', '817', '818', '819', '880', '881', '882', '883', '884', '885', '886', '887', '888', '889', '890', '891', '892', '893', '894', '895', '896', '897', '898', '899'].includes(prefix)) {
    return 'Jio';
  }
  
  if (['630', '631', '632', '633', '634', '635', '636', '637', '638', '639', '700', '701', '702', '703', '704', '705', '706', '707', '708', '709', '750', '751', '752', '753', '754', '755', '756', '757', '758', '759', '840', '841', '842', '843', '844', '845', '846', '847', '848', '849', '900', '901', '902', '903', '904', '905', '906', '907', '908', '909', '910', '911', '912', '913', '914', '915', '916', '917', '918', '919', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '930', '931', '932', '933', '934', '935', '936', '937', '938', '939', '940', '941', '942', '943', '944', '945', '946', '947', '948', '949', '950', '951', '952', '953', '954', '955', '956', '957', '958', '959', '960', '961', '962', '963', '964', '965', '966', '967', '968', '969', '970', '971', '972', '973', '974', '975', '976', '977', '978', '979', '980', '981', '982', '983', '984', '985', '986', '987', '988', '989', '990', '991', '992', '993', '994', '995', '996', '997', '998', '999'].includes(prefix)) {
    return 'Vi';
  }
  
  return 'Airtel'; // Default fallback
};