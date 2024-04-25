<div class="main">
    <div class="container">
        <div class="top">
            <div class="heading">
                <h1>Create a new repository</h1>
            </div>
            <div class="import_repo">
                <p>
                    A repository contains all project files,including the
                    revision history.Already have a project repository
                    elsewhere?
                </p>
                <a href="#">Import a repository</a>
            </div>
        </div>

        <hr />

        <span><i>Required fields are marked with an asterisk (*).</i></span>

        <div class="mid">
            <div class="input">
                <div class="repo_owner">
                    <p>Owner*</p>
                    <select id="owner">
                        <option>Nisarg Gadhiya</option>
                        <option>Harshal Kamble</option>
                    </select>
                </div>
                <p></p>
                <div class="repo_name_input">
                    <p>Repository name*</p>
                    <input type="text" id="repo_input" />
                </div>
            </div>

            <div class="repo_description">
                <label for="description">Description(optional)</label><br />
                <input type="text" id="description" />
            </div>
        </div>

        <hr />

        <div class="repo_type">
            <div class="repo_public">
                <input type="radio" id="public" />
                <label for="public">Public</label>
            </div>
            <div class="repo_private">
                <input type="radio" id="private" />
                <label for="private">Private</label>
            </div>
        </div>

        <div class="repo_create">
            <button><span>Create repository</span></button>
        </div>
    </div>
</div>

<div class="page2">
    <div class="page2-profile">
        <div class="page2-profile-img"></div>
        <h4 class="page2-profile-displayname">sync</h4>
        <p class="page2-profile-username">xyz-harshal . hello</p>
        <p class="page2-profile-description">just a full stack nerd</p>
        <button class="page2-profile-edit">Edit profile</button>
        <p class="page2-profile-followers"><b>11</b> followers . <b>12</b> following</p>
    </div>
    <div class="page2-my-repo">
        <button class="page2-my-repo-new">New</button>
        
        <div class="page2-my-repo-name">
            <div class="page2-my-repo-name-left"> 
                <div class="page2-my-repo-name-top">
                    <h3>portfolio_v2.0</h3>
                    <p>Public</p>
                </div>
                <div class="page2-my-repo-name-bottom">
                    <p>JavaScript</p>
                    <p>Updated 2 weeks ago</p>
                </div>
            </div>
            <div  class="page2-my-repo-name-right">
                <button class="start-button">Star</button>
            </div>
        </div>
    </div>
</div>


<style>
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #282a36;
    }
    .container {
        height: 100vh;
        width: 704px;
        display: flex;
        flex-direction: column;
        padding: 2vh 2vw;
        justify-content: center;
        align-content: flex-start;
    }
    .top {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 160px;
    }
    .heading h1 {
        font-size: 40px;
        font-weight: 600;
    }
    .import_repo {
        display: flex;
        flex-direction: column;
    }
    .import_repo p {
        color: var(--fgColor-muted, var(--color-fg-muted, #848d97));
        font: 14px;
        margin-bottom: 10px;
    }
    .import_repo a {
        height: 19px;
        color: #4493f8;
        margin-bottom: 10px;
    }
    span {
        height: 19px;
        font-size: 12px;
        margin-top: 10px;
    }
    .mid {
        display: flex;
        flex-direction: column;
        height: 180px;
        width: 704px;
        justify-content: space-around;
    }
    .input {
        display: flex;
        align-items: center;
        height: 80px;
        padding: 0px;
        gap: 30px;
    }
    .repo_mid {
        width: 100%;
    }
    .repo_owner p,
    .repo_name_input p {
        font-size: 14px;
        width: 174px;
    }
    #owner,
    #repo_input {
        width: 170px;
        height: 35px;
        border: #848d97 1px solid;
        padding: 1px 12px;
        border-radius: 5px;
    }
    .repo_description {
        font-size: 14px;
        margin-bottom: 10px;
    }
    #description {
        height: 35px;
        width: 640px;
        background-color: var(--selection-bgColor, var(--color-accent-muted));
        border: #848d97 1px solid;
        border-radius: 5px;
    }
    .repo_type {
        margin: 20px 0px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 18px;
    }
    .repo_create {
        display: flex;
        justify-content: flex-end;
    }
    .repo_create button {
        height: 32px;
        width: 136px;
        color: white;
        background-color: #238636;
        border: 0px;
        border-radius: 5px;
    }
    .repo_create button span {
        height: 20px;
        width: 120px;
        margin: 16px 0 0 0;
        font-size: 15px;
    }
    hr {
        border-color: #848d97;
    }


    /* Style for showing all repositories */

    .page2{
        height: 100vh;
        width: 80%px;
        padding: 0 10%;
        display: flex;
        align-items: flex-start;
    }
    .page2-profile-img{
        height: 256px;
        width: 256px;
        background-image: url(https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg);
        background-position: center;
        border: 5px solid white;
        border-radius: 50%;
        margin-bottom: 15px;
    }

    .page2-profile{
        flex-basis: 30%;
        height: 100%;
        border-right: 2px solid gray;
        padding: 100px;
    }
    .page2-my-repo{
        flex-basis: 70%;
        height: 100%;
        padding: 100px;
    }
    .page2-profile{
        display: flex;
        flex-direction: column;
        margin-left: 25px;
    }
    .page2-profile-displayname{
        font-size: 20px;
        margin-bottom: 5px;
        font-weight: 500;
    }
    .page2-profile-username{
        font-size: 15px;
        margin-bottom: 15px;
    }
    .page2-profile-description{
        font-size: 15px;
        margin-bottom: 10px;
    }
    .page2-profile-edit{
        margin: 10px 0px;
        height: 40px;
        width: 256px;
        border: 2px solid gray;
        border-radius: 10px;
        font-size: 15px;
        background-color: #21262D;
    }
    .page2-profile-followers{
        font-size: 15px;
        margin-top: 10px;
    }
    .page2-my-repo-new{
        height: 32px;
        width: 80px;
        color: white;
        background-color: #238636;
        border: 0px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 90%;
        font-weight: 600;
    }
    .page2-my-repo-name{
        width: 100%;
        display: flex;
        padding: 10px;
        justify-content: space-between;
        height: 150px;
        border-top: 2px solid grey;
        margin-top: 10px;
    }
    .page2-my-repo-name-left{
        display: flex;
        flex-direction: column;
        align-self: flex-start;
    }
    .page2-my-repo-name-top h3{
        font-size: 30px;
        font-weight: 600;
        color: lightskyblue;
    }
    .page2-my-repo-name-top p{
        font-size: 15px;
        color: white;
        border: 2px solid grey;
        border-radius: 20px;
        padding: 3px 7px;
    }
    .page2-my-repo-name-top{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
    .page2-my-repo-name-bottom{
        margin-top: 20px;
        display: flex;
    }
   .page2-my-repo-name-bottom p{
    font-size: 15px;
    margin-right: 15px;
   }
   .page2-my-repo-name-right{
        height: 35px;
        width: 75px;
        border: 2px solid grey;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
   }


</style>
