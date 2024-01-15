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

    function ask_new_account_popup()
    {
        let popup_container = document.createElement("div");
        popup_container.classList.add("popup-container");
        popup_container.innerHTML = `
            <div class="popup">
                <div class="popup-title">Add a new account</div>
                <div class="popup-content">
                    <div class="popup-input">
                        <div class="popup-input-title">Account name</div>
                        <input type="text" class="popup-input-text" id="popup-account-name">
                    </div>
                    <div class="popup-input">
                        <div class="popup-input-title">Username</div>
                        <input type="text" class="popup-input-text" id="popup-account-username">
                    </div>
                    <div class="popup-input">
                        <div class="popup-input-title">Password</div>
                        <input type="password" class="popup-input-text" id="popup-account-password">
                    </div>
                </div>
                <div class="popup-buttons">
                    <button class="popup-button" id="popup-button-cancel">Cancel</button>
                    <button class="popup-button" id="popup-button-add">Add</button>
                </div>
            </div>
        `;

        document.body.appendChild(popup_container);

        let popup_button_cancel = document.querySelector("#popup-button-cancel");
        let popup_button_add = document.querySelector("#popup-button-add");

        popup_button_cancel.onclick = function()
        {
            console.log("cancel");
            popup_container.remove();
            return [null, null, null]
            return 
        }

        document.addEventListener("keydown", function(event)
        {
            if (event.key == "Escape")
            {
                console.log("cancel");
                popup_container.remove();
            }
            return [null, null, null]
        });

        popup_button_add.onclick = function()
        {
            let new_account = [];

            console.log("add account");
            let account_name = document.querySelector("#popup-account-name").value;
            let account_username = document.querySelector("#popup-account-username").value;
            let account_password = document.querySelector("#popup-account-password").value;

            new_account = [account_name, account_username, account_password]

            if (account_name != "" && account_username != "" && account_password != "")
            {
                popup_container.remove();
                return new_account;
            }

            console.log("new account : " + new_account);

            return new_account;
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
            console.log("try to add account")
            // choose account name, username and password in a popup form

            const new_account = ask_new_account_popup();

            console.log("Test new account : " + new_account);

            let account_name = new_account[0];
            let account_username = new_account[1];
            let account_password = new_account[2];

            console.log(account_name);
            console.log(account_username);
            console.log(account_password);

            if (account_name != "" && account_username != "" && account_password != "" && account_name != null && account_username != null && account_password != null)
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