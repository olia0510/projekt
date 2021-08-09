let promise1;
promise1 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        let usersBox = document.getElementsByClassName('users-box')[0];
        for (const user of users) {
            let pUser = document.createElement('p');
            pUser.innerText = `${user.id} - ${user.name}`;
            // let detailsBtn = document.createElement('button');
            // detailsBtn.innerText = 'details';


                        let userDiv = document.createElement('div');
                        let deteilsBTN = document.createElement('button');

                        userDiv.innerText = user.name;
                        button.innerText = 'details';

                        detailsLink.href = `user-d?user=${JSON.stringify(user)}`;

                        userDiv.appendChild(deteilslink);
                        usersBox.appendChild(userDiv);

        };

    });
