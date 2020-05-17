
Survey
    .StylesManager
    .applyTheme("modern");

Survey
    .JsonObject
    .metaData
    .addProperty("questionbase", {
        name: "score:number",
        default: 1

    });



//var json = {
//    title: "",
//    pages: [
//        {
//            name: "page1",

//            elements: [
//                {
//                    type: "radiogroup",
//                    name: "question1",
//                    title: "Do you have a pet?",
//                    isRequired: true,
//                    choices: [
//                        {
//                            value: "yes",
//                            text: "Yes",

//                        },
//                        {
//                            value: "no",
//                            text: "No",

//                        }
//                    ]
//                },
//                {
//                    type: "radiogroup",
//                    name: "question2",
//                    title: "Do you have garden?",
//                    isRequired: true,
//                    choices: [
//                        {
//                            value: "yes",
//                            text: "Yes",

//                        },
//                        {
//                            value: "no",
//                            text: "No",

//                        }
//                    ]
//                },
//                {
//                    type: "radiogroup",
//                    name: "question3",
//                    title: "Do you have a water resource?",
//                    isRequired: true,
//                    choices: [
//                        {
//                            value: "yes",
//                            text: "Yes",

//                        },
//                        {
//                            value: "no",
//                            text: "No",

//                        }
//                    ]
//                },
//                {
//                    type: "panel",
//                    name: "panel1",
//                    elements: [
//                        {
//                            type: "checkbox",
//                            name: "question5",
//                            title: "Decision on pet stay place",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1,
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question6",
//                            title: "Keep the pet supplies ready",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question9",
//                            title: "Practice evacuating with pet",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        }
//                    ],
//                    visible: false,
//                    visibleIf: "{question1} = 'yes'",
//                    title: "Pets"
//                },
//                {
//                    type: "panel",
//                    name: "panel3",
//                    elements: [
//                        {
//                            type: "checkbox",
//                            name: "question14",
//                            title: "Check the reserve water supply",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question15",
//                            title: "Check all equipment work properly",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question16",
//                            title: "Check for fresh fuel in the pump",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question17",
//                            title: "Confirm all the adults of the family know how to use them",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        }
//                    ],
//                    visible: false,
//                    visibleIf: "{question3} = 'yes'",
//                    title: "Water resources"
//                },
//                {
//                    type: "panel",
//                    name: "panel2",
//                    elements: [
//                        {
//                            type: "checkbox",
//                            name: "question10",
//                            title: "Trim the grasses till 10 cm",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question11",
//                            title: "Trim the tree limbs",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question12",
//                            title: "Water all vegetation",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question13",
//                            title: "Clear out the fallen leaves",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        }
//                    ],
//                    visible: false,
//                    visibleIf: "{question2} = 'yes'",
//                    title: "Garden"
//                },
//                {
//                    type: "panel",
//                    name: "Home and backyard",
//                    elements: [
//                        {
//                            type: "checkbox",
//                            name: "question7",
//                            title: "Seal all the gaps properly",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question4",
//                            title: "Close the underfloor area",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question8",
//                            title: "Remove flammable items from house",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question18",
//                            title: "Clear the gutter of leaves and rubbish",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question19",
//                            title: "Remove any wood piles near the house",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        }
//                    ],
//                    title: "Home and backyard"
//                },
//                {
//                    type: "panel",
//                    name: "panel4",
//                    elements: [
//                        {
//                            type: "checkbox",
//                            name: "question21",
//                            title: "Take all the identification papers",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question22",
//                            title: "Take necessary medications for all the members",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question20",
//                            title: "First aid kit",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question23",
//                            title: "Take protective clothes",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question24",
//                            title: "Check the emergency contact list",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question25",
//                            title: "Keep the emergency kit to an easy access",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question26",
//                            title: "Double checked the emergency kit bag for all the items",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        }
//                    ],
//                    title: "Emergency kit"
//                },
//                {
//                    type: "panel",
//                    name: "panel5",
//                    elements: [
//                        {
//                            type: "checkbox",
//                            name: "question28",
//                            title: "Check home insurance date and details",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question27",
//                            title: "Relocate all valuable items from the house",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question29",
//                            title: "Decide on the leaving date and time",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question30",
//                            title: "Decide the primary and secondary destination",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        },
//                        {
//                            type: "checkbox",
//                            name: "question31",
//                            title: "Aware all the members of the house about the leaving date and time",
//                            hideNumber: true,
//                            choices: [
//                                {
//                                    value: "item1",
//                                    text: "Yes",
//                                    score: 1
//                                }
//                            ]
//                        }
//                    ],
//                    title: "Others"
//                }
//            ],
//            title: "",
//            description: ""
//        }
//    ],
//    completedHtml: "<p><h4>Thank you for completing your checklist<h4></p>"
//};

var json = {
    title: "",
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "radiogroup",
                    name: "question1",
                    title: "Do you have a pet?",
                    isRequired: true,
                    choices: [
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question2",
                    title: "Do you have a garden?",
                    isRequired: true,
                    choices: [
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question3",
                    title: "Do you have a water resources?",
                    isRequired: true,
                    choices: [
                        {
                            value: "yes",
                            text: "Yes"
                        },
                        {
                            value: "no",
                            text: "No"
                        }
                    ]
                }
            ]
        },
        {
            name: "page2",
            elements: [
                {
                    type: "panel",
                    name: "home",
                    elements: [
                        {
                            type: "checkbox",
                            name: "question4",
                            title: "Seal all the gaps properly",
                            hideNumber: true,
                            choices: [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question5",
                            title: "Close the underfloor area",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question6",
                            title: "Remove flammable items from house",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question7",
                            title: "Clear the gutter of leaves and rubbish",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question8",
                            title: "Remove any wood piles near the house",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        }
                    ],
                    title: "Home and backyard"
                },
                {
                    type: "panel",
                    name: "kit",
                    elements: [
                        {
                            type: "checkbox",
                            name: "question9",
                            title: "Take all the identification papers",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question10",
                            title: "Take necessary medications for all the members",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question11",
                            title: "First aid kit",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question12",
                            title: "Take protective clothes",
                            hideNumber: true,
                            choices: [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question13",
                            title: "Check the emergency contact list",
                            hideNumber: true,
                            choices: [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question14",
                            title: "Keep the emergency kit to an easy access",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question15",
                            title: "Double checked the emergency kit bag for all the items",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        }
                    ],
                    title: "Emergency kit"
                },
                {
                    type: "panel",
                    name: "Others",
                    elements: [
                        {
                            type: "checkbox",
                            name: "question17",
                            title: "Check home insurance date and details",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question16",
                            title: "Relocate all valuable items from the house",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question18",
                            title: "Decide on the leaving date and time",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question19",
                            title: "Decide the primary and secondary destination",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question20",
                            title: "Aware all the members of the house about the leaving date and time",
                            hideNumber: true,
                            choices: [
                                {
                                    "value": "item1",
                                    "text": "Yes"
                                }
                            ]
                        }
                    ],
                    title: "Others"
                },
                {
                    type: "panel",
                    name: "pet",
                    elements: [
                        {
                            type: "checkbox",
                            name: "question21",
                            title: "A decision on pet stay place",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question22",
                            title: "Keep the pet supplies ready",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question23",
                            title: "Practice evacuating with pet",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        }
                    ],
                    visibleIf: "{question1} = 'yes'",
                    title: "Pet"
                },
                {
                    type: "panel",
                    name: "Garden",
                    elements: [
                        {
                            type: "checkbox",
                            name: "question25",
                            title: "Trim the grasses till 10 cm",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question24",
                            title: "Trim the tree limbs",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question26",
                            title: "Water all vegetation",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question27",
                            title: "Clear out the fallen leaves",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        }
                    ],
                    visibleIf: "{question2} = 'yes'",
                    title: "Garden"
                },
                {
                    type: "panel",
                    name: "water",
                    elements: [
                        {
                            type: "checkbox",
                            name: "question28",
                            title: "Check the reserve water supply",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question29",
                            title: "Check all equipment work properly",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question30",
                            title: "Check for fresh fuel in the pump",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        },
                        {
                            type: "checkbox",
                            name: "question31",
                            title: "Confirm all the adults of the family know how to use them",
                            hideNumber: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Yes"
                                }
                            ]
                        }
                    ],
                    visibleIf: "{question3} = 'yes'",
                    title: "Water resources"
                }
            ]
        }
    ], completedHtml: "<p><h4>Thank you for completing your checklist<h4></p>"
};


window.survey = new Survey.Model(json);


survey
    .onComplete
    .add(function (result) {
        var totalvalue = 17;


        var modifiedData = Object.keys(result.data).map(function (qName) {
            return {
                value: result.data[qName],
                score: result.getQuestionByName(qName).score
            }

        });



        if (!modifiedData[0].value.localeCompare("yes"))
            totalvalue = totalvalue + 3;

        if (!modifiedData[1].value.localeCompare("yes"))
            totalvalue = totalvalue + 4;

        if (!modifiedData[2].value.localeCompare("yes"))
            totalvalue = totalvalue + 4;

        var finalscore = Math.round(((modifiedData.length - 3) / totalvalue) * 100)

        
        //document
        //    .querySelector('#surveyResult')
        //    .innerHTML = "Total score: " + JSON.stringify(finalscore) + "%";

        if (finalscore <= 90) {
            
            var s = document.getElementsByClassName("sv-completedpage")[0];
            s.style.boxShadow = "none";
            s.style.backgroundColor = "transparent";
            s.style.border = 0;
         
           
            //document.getElementById("surveyResult").style.border = "1px solid rgba(0, 0, 0, 0.4)";
            //document.getElementById("surveyResult").style.boxShadow = "0 3px 40px 0 rgba(0, 0, 0, 0.15)";

            document.getElementById("msg_checklist").style.display = "none";
            var msg = document.getElementsByClassName("sv-completedpage")[0];
            msg.innerHTML = "Thank you for completing your checklist. <br>"
            msg.innerHTML += "Your total score is <b> " + JSON.stringify(finalscore) + " %</b>." + " You are not fully ready. For preparing better check the <a href = '/Home/Prepare' style = 'color:#5487FA' >preparation steps.</a>";

        //    document
        //        .querySelector('#surveyResult')
        //        .innerHTML = "Your total score is <b>" + JSON.stringify(finalscore) + "%</b>." + "  You are not fully ready. Please go to preparation steps <a href='/Home/Prepare' style='color:#5487FA'>Click here!</a>";
        }
        else {

            var s = document.getElementsByClassName("sv-completedpage")[0];
            s.style.boxShadow = "none";
            s.style.backgroundColor = "transparent";
            s.style.border = 0;
           
            //document.getElementById("surveyResult").style.border = "1px solid rgba(0, 0, 0, 0.4)";
            //document.getElementById("surveyResult").style.boxShadow = "0 3px 40px 0 rgba(0, 0, 0, 0.15)";
            document.getElementById("msg_checklist").style.display = "none";
            var msg = document.getElementsByClassName("sv-completedpage")[0];
            msg.innerHTML = "Thank you for completing your checklist. <br>"
            msg.innerHTML += "Your total score is <b> " + JSON.stringify(finalscore) + " %</b>." + " You are fully ready to leave early. Do check the <a href='/Home/FinalChecklist' style='color:#5487FA'>last minute checklist </a> before leaving.";

            //document
            //    .querySelector('#surveyResult')
            //    .innerHTML = "Your total score is " + JSON.stringify(finalscore) + "%." + " You are fully ready to leave early. Do check the <a href='/Home/FinalChecklist' style='color:#5487FA'>last minute checklist </a> before leaving.";

        }
    });


$("#surveyElement").Survey({ model: survey });
document.getElementsByClassName("sv-footer__next-btn")[0].value = "Generate checklist";
document.getElementsByClassName("sv-footer__complete-btn")[0].value = "Calculate score";




//function saveSurveyToPdf(filename, surveyModel, pdfWidth, pdfHeight) {
//    var options = {
//        fontSize: 14,
//        margins: {
//            left: 10,
//            right: 10,
//            top: 10,
//            bot: 10
//        },
//        format: [pdfWidth, pdfHeight]
//    };
//    var surveyPDF = new SurveyPDF.SurveyPDF(json, options);
//    surveyPDF.data = surveyModel.data;
//    surveyPDF.save(filename);
//}

//document
//    .getElementById("saveToPDFbtn")
//    .onclick = function () {
//        var pdfWidth = survey.pdfWidth || 210;
//        var pdfHeight = survey.pdfHeight || 297;
//        saveSurveyToPdf("surveyResult.pdf", survey, pdfWidth, pdfHeight);
//    }