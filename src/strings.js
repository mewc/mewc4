const general = {
    github: "Full Stack, end to end, serverless - AWS, Node, noSQL & React -> github.com/mewc",
    linkedin: "Connect, share and grow together",
    australia: "Proud to play my part in growing the best Country there is",
    email_placeholder: "email, enter & we'll connect",
    email_endpoint_base64: "aHR0cHM6Ly9xZzlnaDBmeHQ1LmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL3Byb2QvZW1haWw=",
    past_projects_header: "Past Projects",
    past_projects_description: "I think its useful to have all past projects available to reflect on. From scaled projects, to little ideas, to tests, to a POC, to hacky unfinished works that do something. Here a number of them in web form. Find on github."
}

//todo move to dynamo
const projects = [
    {
        shortName: "TUGS",
        link: "http://tugs.mewc.info",
        description: "Early vanilla react work, with node express backend"
    },
    {
        shortName: "BananaMDB",
        link: "http://bananamdb.mewc.info",
        description: "Quick API integration test for openmbd"
    },
    {
        shortName: "Bendigo DataVis",
        link: "http://bendigo-datavis.mewc.info",
        description: "Open API aggregation and mapping in react with mui"
    },
    {
        shortName: "PortPhilip DataVis",
        link: "http://portphilip-datavis.mewc.info",
        description: "Open API aggregation and mapping in react with mui"
    },
    {
        shortName: "oimrdj",
        link: "http://oimrdj.mewc.info",
        description: "Spotify song requester with part rooms, admins, social auth, with node express backend"
    },
    {
        shortName: "Timesheet helper",
        link: "http://timesheethelper.mewc.info",
        description: "When I needed to figure out exactly how much I worked in a day"
    },
]

const strings = {
    ...general,
    projects
}

export default strings;