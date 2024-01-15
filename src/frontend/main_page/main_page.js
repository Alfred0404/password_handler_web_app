window.onload = function()
{
    let data = {
        "accounts": {
            "GitHub" : {
                "name": "GitHub",
                "username": "github_id",
                "password": "github_pwd"
            },
            "Youtube" : {
                "name": "Youtube",
                "username": "youtube_id",
                "password": "youtube_pwd"
            },
            "Twitch" : {
                "name": "Twitch",
                "username": "twitch_id",
                "password": "twitch_pwd"
            }
        }
    }

    function show_account_infos()
    {
        let buttons = document.getElementsByClassName("account");

        for (let i = 0; i < buttons.length; i++)
        {
            buttons[i].onclick = function()
            {
                let account_name = buttons[i].querySelector(".account-name").innerHTML;
                let account_username = data.accounts[account_name].username;
                let account_password = data.accounts[account_name].password;
                console.log(account_username);
                console.log(account_password);

                if (account_name != "")
                {
                    document.querySelector(".selected-account-title").innerHTML = account_name;
                    document.querySelector("#selected-account-username").value = account_username;
                    document.querySelector("#selected-account-password").value = account_password;
                }
            }
        }
    }

    function show_account_title(data)
    {
        let add_button = document.querySelector(".add-account");
        let account_list = document.querySelector(".accounts-list");
        console.log(account_list);

        for (let account in data.accounts)
        {
            console.log(account);
            let account_li = document.createElement("li");
            account_li.classList.add("account-list-element");
            account_li.innerHTML = `
                <button class="account">
                    <div class="account-name">${account}</div>
                </button>
            `;
            account_list.appendChild(account_li);
        }

        show_account_infos();

        add_button.onclick = function()
        {
            // choose account name, username and password in a popup form

            let account_name = prompt("Please enter the account name :");
            let account_username = prompt("Please enter the account username :");
            let account_password = prompt("Please enter the account password :");

            if (account_name != "" && account_username != "" && account_password != "")
            {
                let account_li = document.createElement("li");
                account_li.classList.add("account-list-element");

                account_li.innerHTML = `
                    <button class="account">
                        <div class="account-name">${account_name}</div>
                    </button>
                `;
                account_list.appendChild(account_li);

                data.accounts[account_name] = {
                    "name": account_name,
                    "username": account_username,
                    "password": account_password
                }

                show_account_infos();
            }
        }
    }

    show_account_title(data);
}