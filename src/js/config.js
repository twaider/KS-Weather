module.exports = [
  {
    "type": "heading",
    "defaultValue": "KS Weather"
  },
  {
    "type": "text",
    "defaultValue": "Configuration"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Colors"
      },
      {
        "type": "color",
        "messageKey": "BACKGROUND_COLOR",
        "defaultValue": "0xFF0000",
        "label": "Background Color"
      },
      {
        "type": "toggle",
        "messageKey": "BACKGROUND_ON",
        "label": "Enable Custom background",
        "defaultValue": false
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "weather Settings"
      },
      {
        "type": "toggle",
        "messageKey": "WEATHER_ON",
        "label": "Enable Weather",
        "defaultValue": false
      }      
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];