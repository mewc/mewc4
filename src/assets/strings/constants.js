
const START = "START";
const FAIL = "FAIL";
const END = "END";
const SUCCESS = "SUCCESS";

export const ACTION_STATE = {
    START, FAIL, SUCCESS, END
}


//scopes
const APP = "APP";
const API = "API";

export const SCOPES = {
    APP,
    API
}


const general = {
    github: "Full Stack, end to end, serverless - AWS, Node, noSQL & React -> github.com/mewc",
    linkedin: "Connect, share and grow together",
    australia: "Proud to play my part in growing the best Country there is",
    email_placeholder: "email, enter & we'll connect",
    email_endpoint_base64: "aHR0cHM6Ly9xZzlnaDBmeHQ1LmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL3Byb2QvZW1haWw=",
    past_projects_header: "Past Projects",
    past_projects_description: "I think its useful to have all past projects available to reflect on. From scaled projects, to little ideas, to tests, to a POC, to hacky unfinished works that do something. Here a number of them in web form. Find most code on my github. "
}

export const GENERAL = {
    ...general
}


