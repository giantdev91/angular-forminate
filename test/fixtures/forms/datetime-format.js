module.exports = {
    components: [
        {
            "conditional": {
                "eq": "",
                "when": null,
                "show": ""
            },
            "tags": [],
            "type": "panel",
            "components": [
                {
                "label": "Date / Time",
                "tableView": false,
                "datePicker": {
                    "disableWeekends": false,
                    "disableWeekdays": false,
                    "showWeeks": true,
                    "startingDay": 0,
                    "initDate": "",
                    "minMode": "day",
                    "maxMode": "year",
                    "yearRows": 4,
                    "yearColumns": 5,
                    "minDate": null,
                    "maxDate": null
                },
                "calculateServer": false,
                "key": "dateTime",
                "type": "datetime",
                "input": true,
                "suffix": "<i ref=\"icon\" class=\"fa fa-calendar\" style=\"\"></i>",
                "widget": {
                    "type": "calendar",
                    "displayInTimezone": "viewer",
                    "language": "en",
                    "useLocaleSettings": false,
                    "allowInput": true,
                    "mode": "single",
                    "enableTime": true,
                    "noCalendar": false,
                    "format": "yyyy-MM-dd hh:mm a",
                    "hourIncrement": 1,
                    "minuteIncrement": 1,
                    "time_24hr": false,
                    "minDate": null,
                    "disableWeekends": false,
                    "disableWeekdays": false,
                    "maxDate": null
                },
                "placeholder": "",
                "prefix": "",
                "customClass": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "hidden": false,
                "clearOnHide": true,
                "refreshOn": "",
                "redrawOn": "",
                "modalEdit": false,
                "labelPosition": "top",
                "description": "",
                "errorLabel": "",
                "tooltip": "",
                "hideLabel": false,
                "tabindex": "",
                "disabled": false,
                "autofocus": false,
                "dbIndex": false,
                "customDefaultValue": "",
                "calculateValue": "",
                "attributes": {},
                "validateOn": "change",
                "validate": {
                    "required": false,
                    "custom": "",
                    "customPrivate": false,
                    "strictDateValidation": false,
                    "multiple": false,
                    "unique": false
                },
                "conditional": {"show": null, "when": null, "eq": ""},
                "overlay": {"style": "", "left": "", "top": "", "width": "", "height": ""},
                "allowCalculateOverride": false,
                "encrypted": false,
                "showCharCount": false,
                "showWordCount": false,
                "properties": {},
                "allowMultipleMasks": false,
                "format": "yyyy-MM-dd hh:mm a",
                "useLocaleSettings": false,
                "allowInput": true,
                "enableDate": true,
                "enableTime": true,
                "defaultDate": "",
                "displayInTimezone": "viewer",
                "timezone": "",
                "datepickerMode": "day",
                "timePicker": {
                    "hourStep": 1,
                    "minuteStep": 1,
                    "showMeridian": true,
                    "readonlyInput": false,
                    "mousewheel": true,
                    "arrowkeys": true
                },
                "customOptions": {},
                "id": "e9x9po8c"
            }
            ]
        },
        {
            "input": true,
            "label": "Submit",
            "tableView": false,
            "key": "submit",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": false,
            "action": "submit",
            "disableOnInvalid": false,
            "theme": "primary",
            "type": "button"
        }
    ]
};
