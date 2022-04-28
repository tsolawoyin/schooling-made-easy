const medical = document.querySelector("#d-s-c1")
const engineering = document.querySelector("#d-s-c2")
const humanity = document.querySelector("#d-s-c3")
const science = document.querySelector("#d-s-c4")
const socialScience = document.querySelector("#d-s-c5")
const jamb = document.querySelector("#d-s-c6")


console.log(medical)


const discordLinks = {
    medical: [ // THIS ARR1
        "general",
        "pharmacy",
        "dentistry-and-dental-surgery",
        "radiography",
        "medical-laboratory",
        "physiotherapy",
        "physiology",
        "pharmacology",
        "medicine-and-surgery",
        "medical-biochemistry",
        "anatomy",
        "optometry"
    ],
    medicalLinks: [ //THIS ARR2
        "https://discord.com/channels/966274062294843424/966391375258075196",
        "https://discord.com/channels/966274062294843424/966390341307609089",
        "https://discord.com/channels/966274062294843424/966390452955783190",
        "https://discord.com/channels/966274062294843424/966390510400978974",
        "https://discord.com/channels/966274062294843424/966390553916891196",
        "https://discord.com/channels/966274062294843424/966390596199665724",
        "https://discord.com/channels/966274062294843424/966390637349990441",
        "https://discord.com/channels/966274062294843424/966390672787669152",
        "https://discord.com/channels/966274062294843424/966390768686202880",
        "https://discord.com/channels/966274062294843424/966390888743989268",
        "https://discord.com/channels/966274062294843424/966391195393736714",
        "https://discord.com/channels/966274062294843424/966391308379885659"



    ],
    engineers: [ //THIS IS ARR3
        "general",
        "electrical-electronics",
        "mechanical-engineering",
        "metallurgical-and-material-engineering",
        "computer-engineering",
        "civil-engineering",
        "petroleum-and-gas",
        "system-engineering",
        "biomedical-engineering",
        "mining-engineering",
    ],
    engineersLinks: [ //THIS IS ARR4
        "https://discord.com/channels/966274062294843424/966392335502045244",
        "https://discord.com/channels/966274062294843424/966391713063108628",
        "https://discord.com/channels/966274062294843424/966391771791769690",
        "https://discord.com/channels/966274062294843424/966391923050962994",
        "https://discord.com/channels/966274062294843424/966391981108502528",
        "https://discord.com/channels/966274062294843424/966392025517793411",
        "https://discord.com/channels/966274062294843424/966392073941041163",
        "https://discord.com/channels/966274062294843424/966392150357065788",
        "https://discord.com/channels/966274062294843424/966392241507668008",
        "https://discord.com/channels/966274062294843424/966392393140142140"





    ],
    artAndHumanity: [ // THIS IS ARR5
        "general",
        "law",
        "philosophy",
        "linguistic",
        "history",
        "english",
        "creative - arts"
    ],
    artAndHumanityLinks: [ // THIS IS ARR6
        "https://discord.com/channels/966274062294843424/966392487025446923",
        "https://discord.com/channels/966274062294843424/966392506923221082",
        "https://discord.com/channels/966274062294843424/966392576221540383",
        "https://discord.com/channels/966274062294843424/966392608521875496",
        "https://discord.com/channels/966274062294843424/966392631817015347",
        "https://discord.com/channels/966274062294843424/966392660820631582",
        "https://discord.com/channels/966274062294843424/966392709281615985"

    ],
    sciences: [ //THIS IS ARR7
        "general",
        "zoology",
        "biochemistry",
        "physics",
        "microbiology",
        "mathematics",
        "marine-biology",
        " geo-physics",
        "geology",
        "computer-science",
        "chemistry",
        "botany",
        "biotechnology",
    ],
    scienceLinks: [ //THIS IS ARR8
        "https://discord.com/channels/966274062294843424/966393250623680633",
        "https://discord.com/channels/966274062294843424/966392847748190359",
        "https://discord.com/channels/966274062294843424/966393184483680267",
        "https://discord.com/channels/966274062294843424/966392891238932540",
        "https://discord.com/channels/966274062294843424/966392919307198494",
        "https://discord.com/channels/966274062294843424/966392944489811978",
        "https://discord.com/channels/966274062294843424/966392976874012682",
        "https://discord.com/channels/966274062294843424/966393015398711328",
        "https://discord.com/channels/966274062294843424/966393039419502673",
        "https://discord.com/channels/966274062294843424/966393074525806644",
        "https://discord.com/channels/966274062294843424/966393104510885908",
        "https://discord.com/channels/966274062294843424/966393156016963594",
        "https://discord.com/channels/966274062294843424/966393220399505459"

    ],
    socialSciences: [ //THIS IS ARR9
        "general",
        "sociology",
        "psychology",
        "political-science",
        "mass-communication",
        "geography",
        "finances",
        "economics"
    ],
    socialScienceLinks: [ //THIS IS ARR 10
        "https://discord.com/channels/966274062294843424/966393930759434281",
        "https://discord.com/channels/966274062294843424/966393406391726230",
        "https://discord.com/channels/966274062294843424/966393436460703794",
        "https://discord.com/channels/966274062294843424/966393514109857802",
        "https://discord.com/channels/966274062294843424/966393552517087283",
        "https://discord.com/channels/966274062294843424/966393574381998180",
        "https://discord.com/channels/966274062294843424/966393638978457690",
        "https://discord.com/channels/966274062294843424/966393726865932359"


    ],
    jamb: [ //THIS IS ARR 11
        "science",
        " arts-and-humanities",
        "commercial"
    ],
    jambLinks: [ //THIS ARR 12
        "https://discord.com/channels/966274062294843424/966396832240513085",
        "https://discord.com/channels/966274062294843424/966396917623963778",
        "https://discord.com/channels/966274062294843424/966397103473565716"

    ]
}
const discord = (arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12) => {

    let discordChannelContents = null
    for (let i = 0; i < arr1.length; i++) {
        discordChannelContents = `
                <li>
                        <a target="_blank" href='${arr2[i]}'>#${arr1[i]}</a> 
                </li> 
                           `
        medical.innerHTML += discordChannelContents
    }
    for (let i = 0; i < arr3.length; i++) {
        discordChannelContents = `
                  <li>
                        <a target="_blank" href='${arr4[i]}'>#${arr3[i]}</a>
                  </li> 
                             `
        engineering.innerHTML += discordChannelContents
    }
    for (let i = 0; i < arr5.length; i++) {
        discordChannelContents = `
                <li>
                      <a target="_blank" href='${arr6[i]}'>#${arr5[i]}</a>
                </li> 
                           `
        humanity.innerHTML += discordChannelContents
    }
    for (let i = 0; i < arr7.length; i++) {
        discordChannelContents = `
              <li>
                    <a target="_blank" href='${arr8[i]}'>#${arr7[i]}</a>
              </li> 
                         `
        science.innerHTML += discordChannelContents
    }

    for (let i = 0; i < arr9.length; i++) {
        discordChannelContents = `
            <li>
                  <a target="_blank" href='${arr10[i]}'>#${arr9[i]}</a>
            </li> 
                       `
        socialScience.innerHTML += discordChannelContents
    }

    for (let i = 0; i < arr11.length; i++) {
        discordChannelContents = `
            <li>
                  <a target="_blank" href='${arr12[i]}'>#${arr11[i]}</a>
            </li> 
                       `
        jamb.innerHTML += discordChannelContents
    }

}
discord(
    discordLinks.medical,
    discordLinks.medicalLinks,
    discordLinks.engineers,
    discordLinks.engineersLinks,
    discordLinks.artAndHumanity,
    discordLinks.artAndHumanityLinks,
    discordLinks.sciences,
    discordLinks.scienceLinks,
    discordLinks.socialSciences,
    discordLinks.socialScienceLinks,
    discordLinks.jamb,
    discordLinks.jambLinks
)
