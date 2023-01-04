function updateInvitation(inputInvitation) {
    if (inputInvitation === "")
        return inputInvitation;

    let invitationArray = inputInvitation.toUpperCase().split(";");
    for (let i = 0; i < invitationArray.length; i++)
    {
        let person = invitationArray[i].split(":");
        invitationArray[i] = person[1] + ", " + person[0];
    }
    invitationArray.sort()

    let result = "";
    for (let guest of invitationArray)
    {
        result += "(" + guest + ")";
    }

    return result;
}

console.log(updateInvitation("Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));