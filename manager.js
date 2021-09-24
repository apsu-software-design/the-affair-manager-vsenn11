class Member {
    //variables 
var name;
var email;
const members = [];
var currentMembers = 0;
const Member = {
    email: email,
    affair: affairName,
}
    //Functions 
//Creates a member object with a name and email, leaving affair undefined. Object gets stored into members array. 
function addMember(name, email) {
    var memberName = new Member(name, email); 
    members[currentMembers] = memberName;
    currentMembers++
    }
//Edits exsisting Member object by assigning an Affair to it.
function addMembertoAffair(memberName, affairName) {
    memberName.affair = affairName; 
}
//Returns a list of members that include the user search
function findMemberNames(em) {
    var filterFor = em;
    return members.find(filterFor); 
}
//Returns a list of members that have been assigned the queried affair. 
function getMembers(affairName) {
    return members.find(affair => members.affair === affairName); 
}

}

class Affair  {
    //variables
var zipcode;
var date;
const affairs = [];
var currentAffairs = 0;
const Affair = {
    zipcode: zipcode,
    date: date,
    organization: org,
}
    //functions
//Creates affair object with zipcode and date. Object is then stored into affairs array. 
function addAffair(affairName, zipcode, date) {
    var affairName = new Affair(zipcode, date);
    affairs[currentAffairs] = affairName;
    currentAffairs++
}
//Returns a list of affairs that include the user search
function findAffairNames(em) {
    var filterFor = em;
    return affairs.find(filterFor); 
}
//Modifies affair based on user input
function modifyAffair(em, affairName) {

}
//Edits Affair object by adding an Organization to it.
function addAffairtoOrganization(affairName, orgName) {
    affairName.organization = orgName; 
}
}

class Organization {
    //variables
var currentOrgs = 0;
const organizations = []; 
    //functions 
//Adds Organization to array
function addOrganiztion(orgName) {
    organizations[currentOrgs] = orgName;
    currentOrgs++ 
}
//Returns a list of organizations that include the user search
function findOrganizationNames(em) {
    var filterFor = em;
    return organizations.find(filterFor);
}
}