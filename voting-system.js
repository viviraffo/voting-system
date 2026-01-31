// Using Map for dynamic key-value pairs and Set to automatically handle unique voters
let poll = new Map([
  ["OptionA", new Set()],
  ["OptionB", new Set()],
  ["OptionC", new Set()]
]);

vote("OptionA", "voter1");
vote("OptionB", "voter2");
vote("OptionC", "voter3");

function addOption(option) {
  if (option === "" || option === null) {
    return "Option cannot be empty.";
  } else if (!poll.has(option)) {
    poll.set(option, new Set());
    return 'Option "' + option + '" added to the poll.';
  }  else {
    return 'Option "' + option + '" already exists.';
  }
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return 'Option "' + option + '" does not exist.';
  } 
  let voters = poll.get(option);
  if (voters.has(voterId)) {
    return 'Voter ' + voterId + ' has already voted for "' + option + '".';
  } else {
    voters.add(voterId);
    return 'Voter ' + voterId + ' voted for "' + option + '".';
  }
}

function displayResults() {
let resultString = "Poll Results:";
  poll.forEach((voters, option) => {
    resultString += "\n" + option + ": " + voters.size + " votes";
  });
  return resultString;
  }


