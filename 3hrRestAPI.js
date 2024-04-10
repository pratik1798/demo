function loadData() {
    axios.get("https://crudcrud.com/api/5728ecafb41840d1a60f5a2c0c45af77/votingSystem")
        .then(response => {
            const votes = response.data;
            votes.forEach(vote => {
                editVotes(vote);
            });
        })
        .catch(error => console.error(error));
}

function addVote(event) {
    event.preventDefault();

    // Get input values
    const voter = event.target.voter.value;
    const candidate = event.target.candidate.value;

    // Create object of input values
    const voteDetails = {
        voter,
        candidate,
    };

    // Add object to the server using POST request
    axios
        .post(
            "https://crudcrud.com/api/5728ecafb41840d1a60f5a2c0c45af77/votingSystem", voteDetails
        )
        .then((response) => {
            console.log(response.data, "added");
            editVotes(response.data);
            document.getElementById('voter').value = '';
        })
        .catch((error) => {
            console.log(error);
        });
}

function editVotes(voteDetails) {
    const totalVotes = document.getElementById('totalVotes');
    totalVotes.innerText = parseInt(totalVotes.innerText) + 1;

    const candidate = voteDetails.candidate;
    const candidateVotes = document.getElementById(`${candidate}Total`);
    candidateVotes.innerText = parseInt(candidateVotes.innerText) + 1;
    
    console.log(voteDetails)
    addCandidate(candidate, candidateVotes, voteDetails);
}

function addCandidate(candidate, votes, voteDetails) {
    const newVoter = document.getElementById(candidate);
    const newLi = document.createElement('li');
    newLi.textContent = voteDetails.voter + "  ";
    newLi.style.fontWeight = "bold";
    newLi.style.fontSize = "20px";

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';

    newLi.appendChild(deleteBtn);
    newVoter.appendChild(newLi);
    console.log(voteDetails)
    deleteBtn.onclick = () => {
        totalVotes.innerText = parseInt(totalVotes.innerText) - 1;
        votes.innerText = parseInt(votes.innerText) - 1;
        newVoter.removeChild(deleteBtn.parentElement);

        axios
            .delete(`https://crudcrud.com/api/5728ecafb41840d1a60f5a2c0c45af77/votingSystem/${voteDetails._id}`)
            .then((res) => console.log("Deleted"))
            .catch((err) => console.log(err));
    }
}